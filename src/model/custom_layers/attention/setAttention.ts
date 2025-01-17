import * as tf from "@tensorflow/tfjs";
import {Initializer, Kwargs, LayerArgs} from "../layerUtil";
import {
    attention,
    combineHeads,
    dot,
    extractSetAndMaskInputs,
    extractSetAndMaskShapes,
    projectHeads,
} from "./util";

/** Args for {@link setAttention}. */
export interface SetAttentionArgs extends LayerArgs {
    /** Number of attention heads. */
    heads: number;
    /** Dimensionality of the inner attention space for each head. */
    headUnits: number;
    /** Dimensionality of the output space for each set element. */
    units: number;
    /** Aggregation method used to combine attention heads. Default concat. */
    headAggregate?: "concat" | "mean";
    /** Initializer for kernel weights matrix. */
    kernelInitializer?: Initializer;
}

class SetAttention extends tf.layers.Layer {
    public static className = "SetAttention";

    private readonly heads: number;
    private readonly headUnits: number;
    private readonly units: number;
    private readonly headAggregate: "concat" | "mean";
    private queryWeights: tf.LayerVariable | null = null;
    private keyWeights: tf.LayerVariable | null = null;
    private valueWeights: tf.LayerVariable | null = null;
    private outWeights: tf.LayerVariable | null = null;

    private readonly kernelInitializer: Initializer;

    public constructor(args: SetAttentionArgs) {
        super(args);
        this.heads = args.heads;
        this.headUnits = args.headUnits;
        this.units = args.units;
        this.headAggregate = args.headAggregate ?? "concat";
        this.kernelInitializer =
            args.kernelInitializer ?? tf.initializers.glorotUniform({});
    }

    public override build(inputShape: tf.Shape | tf.Shape[]): void {
        if (Array.isArray(inputShape[0])) {
            if (inputShape.length > 2) {
                throw new Error(
                    `Expected 1-2 input tensors but got ${inputShape.length}`,
                );
            }
            inputShape = inputShape as tf.Shape[];
        } else {
            inputShape = [inputShape as tf.Shape];
        }
        const [set, mask] = inputShape;

        const inputFeatures = set[set.length - 1]!;
        const totalAttentionUnits = this.heads * this.headUnits;
        this.queryWeights ??= this.addWeight(
            "query",
            [inputFeatures, totalAttentionUnits],
            undefined /*dtype*/,
            this.kernelInitializer,
            undefined /*regularizer*/,
            true /*trainable*/,
        );
        this.keyWeights ??= this.addWeight(
            "key",
            [inputFeatures, totalAttentionUnits],
            undefined /*dtype*/,
            this.kernelInitializer,
            undefined /*regularizer*/,
            true /*trainable*/,
        );
        this.valueWeights ??= this.addWeight(
            "value",
            [inputFeatures, totalAttentionUnits],
            undefined /*dtype*/,
            this.kernelInitializer,
            undefined /*regularizer*/,
            true /*trainable*/,
        );
        this.outWeights ??= this.addWeight(
            "out",
            [
                this.headAggregate === "concat"
                    ? totalAttentionUnits
                    : this.headUnits,
                this.units,
            ],
            undefined /*dtype*/,
            this.kernelInitializer,
            undefined /*regularizer*/,
            true /*trainable*/,
        );

        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.inputSpec = [{minNDim: 2, axes: {[-1]: inputFeatures}}];
        if (mask) {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            this.inputSpec.push({minNDim: 1});
        }
        this.built = true;
    }

    public override computeOutputShape(
        inputShape: tf.Shape | tf.Shape[],
    ): tf.Shape {
        const {set} = extractSetAndMaskShapes(inputShape);
        return [...set.slice(0, -1), this.units];
    }

    public override call(
        inputs: tf.Tensor | tf.Tensor[],
        kwargs: Kwargs,
    ): tf.Tensor {
        return tf.tidy(() => {
            this.invokeCallHook(inputs, kwargs);
            const extract = extractSetAndMaskInputs(inputs);
            const {set} = extract;
            let {mask} = extract;
            const inputFeatures = set.shape[set.shape.length - 1];

            // Project Q/K/V into heads all at once, shape [..., h, N, Dh].
            const [queries, keys, values] = [
                this.queryWeights!,
                this.keyWeights!,
                this.valueWeights!,
            ].map(w => projectHeads(set, w.read(), this.heads, this.headUnits));

            // Expand mask for broadcasting onto each head, shape [..., 1, N].
            mask &&= tf.expandDims(mask, -2);

            // Apply attention model to each head, shape [..., h, N, Dh].
            let attn = attention(
                queries,
                keys,
                values,
                1 / Math.sqrt(inputFeatures) /*scale*/,
                mask,
                mask,
            );

            // Combine attention heads, shape [..., N, h*Dh or Dh].
            attn = combineHeads(attn, this.headAggregate);

            // Calculate final output, shape [..., N, U].
            return dot(attn, this.outWeights!.read());
        });
    }

    public override getConfig(): tf.serialization.ConfigDict {
        const config: tf.serialization.ConfigDict = {
            heads: this.heads,
            headUnits: this.headUnits,
            units: this.units,
            headAggregate: this.headAggregate,
            // Serialization method copied from source since it's not exported.
            ...(this.kernelInitializer && {
                kernelInitializer: {
                    className: this.kernelInitializer.getClassName?.(),
                    config: this.kernelInitializer.getConfig?.(),
                },
            }),
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}

tf.serialization.registerClass(SetAttention);

/**
 * Creates a multi-head self-attention layer for unordered input.
 *
 * Takes up to two inputs:
 * * `set`: Tensor of shape `[batch..., N, D]` containing the sets of elements,
 *   where `N` is the (max) number of elements and `D` is the size of the
 *   feature embedding for each element.
 * * `mask`: Optional tensor of shape `[batch..., N]` indicating which elements
 *   should be processed (=1) or not (=0).
 *
 * Outputs a tensor of shape `[batch..., N, U]` where `U` is the configured
 * {@link SetAttentionArgs.units units} argument, containing the aggregated
 * multi-head attention output for each element in the input set.
 */
export function setAttention(args: SetAttentionArgs) {
    return new SetAttention(args);
}
