import * as tf from "@tensorflow/tfjs";
import {ModelAggregateConfig, ModelConfig} from "../config/types";
import {Moveset} from "../psbot/handlers/battle/state/Moveset";
import {Team} from "../psbot/handlers/battle/state/Team";
import {Rng, rng} from "../util/random";
import * as customLayers from "./custom_layers";
import {modelInputShapesMap, verifyModel} from "./shapes";

/**
 * Creates a default model for training.
 *
 * @param name Name of the model.
 * @param config Additional config options.
 * @param seed Seed for the random number generater to use for kernel
 * initializers.
 */
export function createModel(
    name: string,
    config?: ModelConfig,
    seed?: string,
): tf.LayersModel {
    const random = seed ? rng(seed) : undefined;

    const inputs: tf.SymbolicTensor[] = [];

    //#region Inputs and local feature connections.

    const globalFeatures: tf.SymbolicTensor[] = [];

    const roomStatus = inputRoomStatus(name, random?.());
    inputs.push(roomStatus.input);
    globalFeatures.push(roomStatus.features);

    const teamStatus = inputTeamStatus(name, random?.());
    inputs.push(teamStatus.input);
    globalFeatures.push(teamStatus.features);

    //#region Team pokemon.

    const species = inputSpecies(name, random?.());
    const types = inputTypes(name, random?.());
    const stats = inputStats(name, random?.());
    const ability = inputAbility(name, random?.());
    const moveset = inputMoveset(
        name,
        config?.aggregate.move ?? {type: "mean"},
        random,
    );

    //#region Active pokemon's volatile status and override traits.

    const activeVolatile = inputActiveVolatile(name, random?.());
    inputs.push(activeVolatile.input);
    globalFeatures.push(activeVolatile.features);

    inputs.push(species.active.input);
    globalFeatures.push(species.active.features);

    inputs.push(types.active.input);
    globalFeatures.push(types.active.features);

    inputs.push(stats.active.input);
    globalFeatures.push(stats.active.features);

    inputs.push(ability.active.input);
    globalFeatures.push(ability.active.features);

    inputs.push(moveset.active.input);
    globalFeatures.push(moveset.active.features);

    //#endregion

    //#region Bench pokemon's statuses and traits.

    const pokemonFeaturesList: tf.SymbolicTensor[] = [];

    const benchAliveInput = inputBenchAlive(name);
    inputs.push(benchAliveInput);

    //#region Inputs and basic individual features.

    const benchBasic = inputBenchBasic(name, random?.());
    inputs.push(benchBasic.input);
    pokemonFeaturesList.push(benchBasic.features);

    inputs.push(species.bench.input);
    pokemonFeaturesList.push(species.bench.features);

    inputs.push(types.bench.input);
    pokemonFeaturesList.push(types.bench.features);

    inputs.push(stats.bench.input);
    pokemonFeaturesList.push(stats.bench.features);

    inputs.push(ability.bench.input);
    pokemonFeaturesList.push(ability.bench.features);

    const item = inputItem(name, random?.());
    inputs.push(...item.inputs);
    pokemonFeaturesList.push(...item.features);

    inputs.push(moveset.bench.input);
    pokemonFeaturesList.push(moveset.bench.features);

    //#endregion

    // Aggregate step.
    const {individual: pokemonFeatures, aggregate: teamPokemonAggregate} =
        aggregateTeamPokemonFeatures(
            name,
            pokemonFeaturesList,
            benchAliveInput,
            config?.aggregate.pokemon ?? {type: "mean"},
            random,
        );
    globalFeatures.push(teamPokemonAggregate);

    //#endregion

    //#endregion

    //#endregion

    //#region Global feature connections.

    const globalEncoding = aggregateGlobalFeatures(
        name,
        globalFeatures,
        random?.(),
    );

    //#endregion

    //#region Q-values.
    // If dueling architecture these are actually the action-advantage values.

    const actionMove = modelActionMove(
        name,
        moveset.active.individualFeatures,
        globalEncoding,
        random?.(),
    );

    const actionSwitch = modelActionSwitch(
        name,
        pokemonFeatures,
        globalEncoding,
        random?.(),
    );

    const actionAdv = aggregateAction(name, [actionMove, actionSwitch]);

    //#endregion

    const outputs = [actionAdv];

    if (config?.dueling) {
        const stateValue = modelStateValue(name, globalEncoding, random?.());
        const actionQ = duelingQ(name, stateValue, actionAdv);
        outputs[0] = actionQ;
    }

    const model = tf.model({name, inputs, outputs});
    // Consistency check.
    verifyModel(model);
    return model;
}

/**
 * Intermediate data structure representing the inputs and outputs of a
 * subsection of the first layer of processing in the main model.
 */
interface InputFeatures {
    input: tf.SymbolicTensor;
    features: tf.SymbolicTensor;
}

function inputRoomStatus(name: string, seed?: number): InputFeatures {
    const roomStatusInput = tf.layers.input({
        name: `${name}/input/room`,
        shape: [...modelInputShapesMap["room"]],
    });
    const roomStatusFeatures = tf.layers
        .dense({
            name: `${name}/room/dense`,
            units: 8,
            activation: "relu",
            kernelInitializer: tf.initializers.heNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(roomStatusInput) as tf.SymbolicTensor;
    return {input: roomStatusInput, features: roomStatusFeatures};
}

function inputTeamStatus(name: string, seed?: number): InputFeatures {
    const teamStatusInput = tf.layers.input({
        name: `${name}/input/team/status`,
        shape: [...modelInputShapesMap["team/status"]],
    });
    const teamStatusFeatures = tf.layers
        .dense({
            name: `${name}/team/status/dense`,
            units: 16,
            activation: "relu",
            kernelInitializer: tf.initializers.heNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(teamStatusInput) as tf.SymbolicTensor;
    return {input: teamStatusInput, features: teamStatusFeatures};
}

function inputActiveVolatile(name: string, seed?: number): InputFeatures {
    const activeVolatileInput = tf.layers.input({
        name: `${name}/input/team/active/volatile`,
        shape: [...modelInputShapesMap["team/active/volatile"]],
    });
    const activeVolatileFeatures = tf.layers
        .dense({
            name: `${name}/team/active/volatile/dense`,
            units: 32,
            activation: "relu",
            kernelInitializer: tf.initializers.heNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(activeVolatileInput) as tf.SymbolicTensor;
    return {input: activeVolatileInput, features: activeVolatileFeatures};
}

function inputBenchAlive(name: string): tf.SymbolicTensor {
    const benchAliveInput = tf.layers.input({
        name: `${name}/input/team/pokemon/alive`,
        shape: [...modelInputShapesMap["team/pokemon/alive"]],
    });
    return benchAliveInput;
}

function inputBenchBasic(name: string, seed?: number): InputFeatures {
    const benchBasicInput = tf.layers.input({
        name: `${name}/input/team/pokemon/basic`,
        shape: [...modelInputShapesMap["team/pokemon/basic"]],
    });
    const benchBasicFeatures = tf.layers
        .dense({
            name: `${name}/pokemon/basic/dense`,
            units: 16,
            activation: "relu",
            kernelInitializer: tf.initializers.heNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(benchBasicInput) as tf.SymbolicTensor;
    return {input: benchBasicInput, features: benchBasicFeatures};
}

/** Input features for both active and bench pokemon, using shared weights. */
type TeamInputFeatures = Record<"active" | "bench", InputFeatures>;

function inputSpecies(name: string, seed?: number): TeamInputFeatures {
    // Note: Most of the important aspects of the species (movepool, types,
    // abilities, stats, etc) are already handled by other input features, so
    // there isn't much more information that can be gained from this.
    const pokemonSpeciesLayer = tf.layers.dense({
        name: `${name}/team/pokemon/species/dense`,
        units: 32,
        activation: "relu",
        kernelInitializer: tf.initializers.heNormal({seed}),
        biasInitializer: "zeros",
    });

    const activeSpeciesInput = tf.layers.input({
        name: `${name}/input/team/active/species`,
        shape: [...modelInputShapesMap["team/active/species"]],
    });
    const activeSpeciesFeatures = pokemonSpeciesLayer.apply(
        activeSpeciesInput,
    ) as tf.SymbolicTensor;

    const benchSpeciesInput = tf.layers.input({
        name: `${name}/input/team/pokemon/species`,
        shape: [...modelInputShapesMap["team/pokemon/species"]],
    });
    const benchSpeciesFeatures = pokemonSpeciesLayer.apply(
        benchSpeciesInput,
    ) as tf.SymbolicTensor;

    return {
        active: {input: activeSpeciesInput, features: activeSpeciesFeatures},
        bench: {input: benchSpeciesInput, features: benchSpeciesFeatures},
    };
}

function inputTypes(name: string, seed?: number): TeamInputFeatures {
    const pokemonTypesLayer = tf.layers.dense({
        name: `${name}/team/pokemon/types/dense`,
        units: 32,
        activation: "relu",
        kernelInitializer: tf.initializers.heNormal({seed}),
        biasInitializer: "zeros",
    });

    const activeTypesInput = tf.layers.input({
        name: `${name}/input/team/active/types`,
        shape: [...modelInputShapesMap["team/active/types"]],
    });
    const activeTypesFeatures = pokemonTypesLayer.apply(
        activeTypesInput,
    ) as tf.SymbolicTensor;

    const benchTypesInput = tf.layers.input({
        name: `${name}/input/team/pokemon/types`,
        shape: [...modelInputShapesMap["team/pokemon/types"]],
    });
    const benchTypesFeatures = pokemonTypesLayer.apply(
        benchTypesInput,
    ) as tf.SymbolicTensor;

    return {
        active: {input: activeTypesInput, features: activeTypesFeatures},
        bench: {input: benchTypesInput, features: benchTypesFeatures},
    };
}

function inputStats(name: string, seed?: number): TeamInputFeatures {
    const pokemonStatsLayer = tf.layers.dense({
        name: `${name}/team/pokemon/stats/dense`,
        units: 32,
        activation: "relu",
        kernelInitializer: tf.initializers.heNormal({seed}),
        biasInitializer: "zeros",
    });

    const activeStatsInput = tf.layers.input({
        name: `${name}/input/team/active/stats`,
        shape: [...modelInputShapesMap["team/active/stats"]],
    });
    const activeStatsFeatures = pokemonStatsLayer.apply(
        activeStatsInput,
    ) as tf.SymbolicTensor;

    const benchStatsInput = tf.layers.input({
        name: `${name}/input/team/pokemon/status`,
        shape: [...modelInputShapesMap["team/pokemon/stats"]],
    });
    const benchStatsFeatures = pokemonStatsLayer.apply(
        benchStatsInput,
    ) as tf.SymbolicTensor;

    return {
        active: {input: activeStatsInput, features: activeStatsFeatures},
        bench: {input: benchStatsInput, features: benchStatsFeatures},
    };
}

function inputAbility(name: string, seed?: number): TeamInputFeatures {
    const pokemonAbilityLayer = tf.layers.dense({
        name: `${name}/team/pokemon/ability/dense`,
        units: 64,
        activation: "relu",
        kernelInitializer: tf.initializers.heNormal({seed}),
        biasInitializer: "zeros",
    });

    const activeAbilityInput = tf.layers.input({
        name: `${name}/input/team/active/ability`,
        shape: [...modelInputShapesMap["team/active/ability"]],
    });
    const activeAbilityFeatures = pokemonAbilityLayer.apply(
        activeAbilityInput,
    ) as tf.SymbolicTensor;

    const benchAbilityInput = tf.layers.input({
        name: `${name}/input/team/pokemon/ability`,
        shape: [...modelInputShapesMap["team/pokemon/ability"]],
    });
    const benchAbilityFeatures = pokemonAbilityLayer.apply(
        benchAbilityInput,
    ) as tf.SymbolicTensor;

    return {
        active: {input: activeAbilityInput, features: activeAbilityFeatures},
        bench: {input: benchAbilityInput, features: benchAbilityFeatures},
    };
}

/** Input features for {@link inputMoveset moveset}. */
interface MovesetInputFeatures {
    active: InputFeatures & {individualFeatures: tf.SymbolicTensor};
    bench: InputFeatures;
}

function inputMoveset(
    name: string,
    aggregateConfig: ModelAggregateConfig,
    random?: Rng,
): MovesetInputFeatures {
    const pokemonMoveLayer = tf.layers.dense({
        name: `${name}/team/pokemon/moveset/move/dense`,
        units: 32,
        activation: "relu",
        kernelInitializer: tf.initializers.heNormal({seed: random?.()}),
        biasInitializer: "zeros",
    });

    const activeMoveInput = tf.layers.input({
        name: `${name}/input/team/active/moves`,
        shape: [...modelInputShapesMap["team/active/moves"]],
    });
    let activeMoveFeatures = pokemonMoveLayer.apply(
        activeMoveInput,
    ) as tf.SymbolicTensor;

    const benchMoveInput = tf.layers.input({
        name: `${name}/input/team/pokemon/moves`,
        shape: [...modelInputShapesMap["team/pokemon/moves"]],
    });
    let benchMoveFeatures = pokemonMoveLayer.apply(
        benchMoveInput,
    ) as tf.SymbolicTensor;

    // TODO: Exclude nonexistent moves.
    const pokemonMovesetAggregateLayer = customLayers.aggregate({
        name: `${name}/team/pokemon/moveset/${aggregateConfig.type}`,
        type: aggregateConfig.type,
        axis: -2,
    });

    if (aggregateConfig.attention) {
        const pokemonMoveAttentionLayer = customLayers.setMultiHeadAttention({
            name: `${name}/team/pokemon/moveset/move/attention`,
            heads: 4,
            headUnits: 8,
            units: 32,
            kernelInitializer: tf.initializers.glorotNormal({
                seed: random?.(),
            }),
        });
        const pokemonMoveAttentionReluLayer = tf.layers.reLU({
            name: `${name}/team/pokemon/moveset/move/attention/relu`,
        });
        const pokemonMoveAttentionResidualLayer1 = tf.layers.add({
            name: `${name}/team/pokemon/moveset/move/attention/residual/1`,
        });
        const pokemonMoveAttentionDenseLayer = tf.layers.dense({
            name: `${name}/team/pokemon/moveset/move/attention/dense`,
            units: 32,
            activation: "relu",
            kernelInitializer: tf.initializers.heNormal({
                seed: random?.(),
            }),
            biasInitializer: "zeros",
        });
        const pokemonMoveAttentionResidualLayer2 = tf.layers.add({
            name: `${name}/team/pokemon/moveset/move/attention/residual/2`,
        });

        [activeMoveFeatures, benchMoveFeatures] = [
            activeMoveFeatures,
            benchMoveFeatures,
        ].map(features => {
            let attention = pokemonMoveAttentionLayer.apply(
                features,
            ) as tf.SymbolicTensor;
            attention = pokemonMoveAttentionReluLayer.apply(
                attention,
            ) as tf.SymbolicTensor;
            // Add skip connection.
            features = pokemonMoveAttentionResidualLayer1.apply([
                features,
                attention,
            ]) as tf.SymbolicTensor;
            // Final encoder.
            const dense = pokemonMoveAttentionDenseLayer.apply(
                features,
            ) as tf.SymbolicTensor;
            // Final skip connection.
            features = pokemonMoveAttentionResidualLayer2.apply([
                features,
                dense,
            ]) as tf.SymbolicTensor;
            return features;
        });
    }

    const [activeMovesetAggregate, benchMovesetAggregate] = [
        activeMoveFeatures,
        benchMoveFeatures,
    ].map(
        features =>
            pokemonMovesetAggregateLayer.apply(features) as tf.SymbolicTensor,
    );

    return {
        active: {
            input: activeMoveInput,
            features: activeMovesetAggregate,
            individualFeatures: activeMoveFeatures,
        },
        bench: {input: benchMoveInput, features: benchMovesetAggregate},
    };
}

/** Input features with multiple inputs/outputs. */
interface InputFeaturesList {
    inputs: tf.SymbolicTensor[];
    features: tf.SymbolicTensor[];
}

function inputItem(name: string, seed?: number): InputFeaturesList {
    const pokemonItemLayer = tf.layers.dense({
        name: `${name}/team/pokemon/item/dense`,
        units: 64,
        activation: "relu",
        kernelInitializer: tf.initializers.heNormal({seed}),
        biasInitializer: "zeros",
    });

    const itemInput = tf.layers.input({
        name: `${name}/input/team/pokemon/item`,
        shape: [...modelInputShapesMap["team/pokemon/item"]],
    });
    const itemFeatures = pokemonItemLayer.apply(itemInput) as tf.SymbolicTensor;

    const lastItemInput = tf.layers.input({
        name: `${name}/input/team/pokemon/last_item`,
        shape: [...modelInputShapesMap["team/pokemon/last_item"]],
    });
    const lastItemFeatures = pokemonItemLayer.apply(
        lastItemInput,
    ) as tf.SymbolicTensor;

    return {
        inputs: [itemInput, lastItemInput],
        features: [itemFeatures, lastItemFeatures],
    };
}

interface TeamPokemonAggregateFeatures {
    individual: tf.SymbolicTensor;
    aggregate: tf.SymbolicTensor;
}

function aggregateTeamPokemonFeatures(
    name: string,
    pokemonFeaturesList: tf.SymbolicTensor[],
    benchAliveInput: tf.SymbolicTensor,
    aggregateConfig: ModelAggregateConfig,
    random?: Rng,
): TeamPokemonAggregateFeatures {
    // Each of the [batch, num_teams, team_size, x] input features are
    // concatenated into a single tensor of shape
    // [batch, num_teams, team_size, y].
    let pokemonFeatures = tf.layers
        .concatenate({
            name: `${name}/team/pokemon/concat`,
            axis: -1,
        })
        .apply(pokemonFeaturesList) as tf.SymbolicTensor;
    // Process features.
    pokemonFeatures = tf.layers
        .dense({
            name: `${name}/team/pokemon/dense`,
            units: 64,
            activation: "relu",
            kernelInitializer: tf.initializers.heNormal({seed: random?.()}),
            biasInitializer: "zeros",
        })
        .apply(pokemonFeatures) as tf.SymbolicTensor;
    // Mask out features of pokemon that are not alive or nonexistent.
    pokemonFeatures = customLayers
        .mask({name: `${name}/team/pokemon/alive_masked`})
        .apply([pokemonFeatures, benchAliveInput]) as tf.SymbolicTensor;

    if (aggregateConfig.attention) {
        let attention = customLayers
            .setMultiHeadAttention({
                name: `${name}/team/pokemon/attention`,
                heads: 4,
                headUnits: 16,
                units: 64,
                kernelInitializer: tf.initializers.glorotNormal({
                    seed: random?.(),
                }),
            })
            .apply([pokemonFeatures, benchAliveInput]) as tf.SymbolicTensor;
        attention = tf.layers
            .reLU({name: `${name}/team/pokemon/attention/relu`})
            .apply(attention) as tf.SymbolicTensor;
        // Add skip connection.
        pokemonFeatures = tf.layers
            .add({name: `${name}/team/pokemon/attention/residual/1`})
            .apply([pokemonFeatures, attention]) as tf.SymbolicTensor;
        // Final encoder.
        const dense = tf.layers
            .dense({
                name: `${name}/team/pokemon/attention/dense`,
                units: 64,
                activation: "relu",
                kernelInitializer: tf.initializers.heNormal({seed: random?.()}),
                biasInitializer: "zeros",
            })
            .apply(pokemonFeatures) as tf.SymbolicTensor;
        // Final skip connection.
        pokemonFeatures = tf.layers
            .add({name: `${name}/team/pokemon/attention/residual/2`})
            .apply([pokemonFeatures, dense]) as tf.SymbolicTensor;
    }

    // Permutation-invariant aggregate layer taking the important features of
    // each pokemon and treating them as one.
    // End result is a shape [batch, num_teams, y] output tensor.
    const teamPokemonAggregate = customLayers
        .aggregate({
            name: `${name}/team/pokemon/${aggregateConfig.type}`,
            type: aggregateConfig.type,
            axis: -2,
        })
        .apply(pokemonFeatures) as tf.SymbolicTensor;

    return {individual: pokemonFeatures, aggregate: teamPokemonAggregate};
}

function aggregateGlobalFeatures(
    name: string,
    globalFeatures: tf.SymbolicTensor[],
    seed?: number,
): tf.SymbolicTensor {
    const globalFlattenLayer = tf.layers.flatten({
        name: `${name}/global/flatten`,
    });
    const globalFeaturesFlattened = globalFeatures.map(st =>
        st.rank === 2
            ? st
            : (globalFlattenLayer.apply(st) as tf.SymbolicTensor),
    );

    const globalConcat = tf.layers
        .concatenate({
            name: `${name}/global/concat`,
            axis: -1,
        })
        .apply(globalFeaturesFlattened) as tf.SymbolicTensor;
    const globalEncoding = tf.layers
        .dense({
            name: `${name}/global/dense`,
            units: 128,
            activation: "relu",
            kernelInitializer: tf.initializers.heNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(globalConcat) as tf.SymbolicTensor;
    return globalEncoding;
}

function modelActionMove(
    name: string,
    activeMoveFeatures: tf.SymbolicTensor,
    globalEncoding: tf.SymbolicTensor,
    seed?: number,
): tf.SymbolicTensor {
    // Extract move features from our side.
    const usMoveFeaturesSlice = customLayers
        .slice({
            name: `${name}/action/move/local/slice`,
            begin: 0,
            size: 1,
        })
        .apply(activeMoveFeatures) as tf.SymbolicTensor;
    // Also remove the extra team dimension due to slice op.
    const usMoveFeatures = tf.layers
        .reshape({
            name: `${name}/action/move/local/reshape`,
            targetShape: usMoveFeaturesSlice.shape.slice(2),
        })
        .apply(usMoveFeaturesSlice) as tf.SymbolicTensor;

    // Broadcast the global feature tensor to each active move choice.
    const actionMoveGlobalRepeat = tf.layers
        .repeatVector({
            name: `${name}/action/move/global/repeat`,
            n: Moveset.maxSize,
        })
        .apply(globalEncoding) as tf.SymbolicTensor;

    const actionMoveConcat = tf.layers
        .concatenate({
            name: `${name}/action/move/concat`,
            axis: -1,
        })
        .apply([actionMoveGlobalRepeat, usMoveFeatures]) as tf.SymbolicTensor;

    const actionMove = tf.layers
        .dense({
            name: `${name}/action/move/dense`,
            units: 1,
            activation: "linear",
            kernelInitializer: tf.initializers.glorotNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(actionMoveConcat) as tf.SymbolicTensor;
    const actionMoves = tf.layers
        .reshape({
            name: `${name}/action/move/reshape`,
            targetShape: [Moveset.maxSize],
        })
        .apply(actionMove) as tf.SymbolicTensor;
    return actionMoves;
}

function modelActionSwitch(
    name: string,
    pokemonFeatures: tf.SymbolicTensor,
    globalEncoding: tf.SymbolicTensor,
    seed?: number,
): tf.SymbolicTensor {
    // Extract bench features from our team except active mon.
    const actionSwitchBenchSlice = customLayers
        .slice({
            name: `${name}/action/switch/bench/slice`,
            begin: [0, 1],
            size: 1,
        })
        .apply(pokemonFeatures) as tf.SymbolicTensor;
    // Also remove the extra team dimension due to slice op.
    const actionSwitchBench = tf.layers
        .reshape({
            name: `${name}/action/switch/bench/reshape`,
            targetShape: actionSwitchBenchSlice.shape.slice(2),
        })
        .apply(actionSwitchBenchSlice) as tf.SymbolicTensor;

    // Broadcast the global feature tensor to each bench switch choice.
    const actionSwitchGlobalRepeat = tf.layers
        .repeatVector({
            name: `${name}/action/switch/global/repeat`,
            n: Team.maxSize - 1,
        })
        .apply(globalEncoding) as tf.SymbolicTensor;

    const actionSwitchConcat = tf.layers
        .concatenate({
            name: `${name}/action/switch/concat`,
            axis: -1,
        })
        .apply([
            actionSwitchGlobalRepeat,
            actionSwitchBench,
        ]) as tf.SymbolicTensor;

    const actionSwitch = tf.layers
        .dense({
            name: `${name}/action/switch/dense`,
            units: 1,
            activation: "linear",
            kernelInitializer: tf.initializers.glorotNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(actionSwitchConcat) as tf.SymbolicTensor;
    const actionSwitches = tf.layers
        .reshape({
            name: `${name}/action/switch/reshape`,
            targetShape: [Team.maxSize - 1],
        })
        .apply(actionSwitch) as tf.SymbolicTensor;
    return actionSwitches;
}

function aggregateAction(
    name: string,
    actionFeatures: tf.SymbolicTensor[],
): tf.SymbolicTensor {
    const outputActionConcat = tf.layers
        .concatenate({
            name: `${name}/action/concat`,
            axis: -1,
        })
        .apply(actionFeatures) as tf.SymbolicTensor;
    return outputActionConcat;
}

function modelStateValue(
    name: string,
    globalEncoding: tf.SymbolicTensor,
    seed?: number,
): tf.SymbolicTensor {
    const stateValue = tf.layers
        .dense({
            name: `${name}/state/value`,
            units: 1,
            activation: "tanh",
            kernelInitializer: tf.initializers.glorotNormal({seed}),
            biasInitializer: "zeros",
        })
        .apply(globalEncoding) as tf.SymbolicTensor;
    return stateValue;
}

function duelingQ(
    name: string,
    stateValue: tf.SymbolicTensor,
    actionAdv: tf.SymbolicTensor,
): tf.SymbolicTensor {
    const meanAdv = customLayers
        .mean({
            name: `${name}/action/advantage/mean`,
            axis: -1,
            keepDims: true,
        })
        .apply(actionAdv) as tf.SymbolicTensor;
    const centeredAdv = customLayers
        .sub({
            name: `${name}/action/advantage/sub`,
        })
        .apply([actionAdv, meanAdv]) as tf.SymbolicTensor;

    const actionQ = tf.layers
        .add({
            name: `${name}/action/add`,
        })
        .apply([stateValue, centeredAdv]) as tf.SymbolicTensor;
    return actionQ;
}
