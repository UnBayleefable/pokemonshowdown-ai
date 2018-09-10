import * as tf from "@tensorflow/tfjs";
import * as logger from "../../../logger";
import { AI } from "./AI";
import { Choice, choiceIds } from "./Choice";

/** Neural network interface. */
export class Network implements AI
{
    /** Neural network model. */
    private readonly model = tf.sequential();
    /** Number of input neurons. */
    private readonly inputLength = 278; // TODO

    /** Creates a Network. */
    constructor()
    {
        // setup all the layers
        const outNeurons = Object.keys(choiceIds).length;
        this.model.add(tf.layers.dense(
        {
            units: outNeurons, inputShape: [this.inputLength],
            activation: "softmax"
        }));
    }

    /** @override */
    public decide(state: number[], choices: Choice[]): Choice
    {
        if (state.length > this.inputLength)
        {
            logger.error(`too many state values ${state.length}, expected \
${this.inputLength}`);
            state.splice(this.inputLength);
        }
        else if (state.length < this.inputLength)
        {
            logger.error(`not enough state values ${state.length}, expected \
${this.inputLength}`);
            do
            {
                state.push(0);
            }
            while (state.length < this.inputLength);
        }

        // run a single input vector through the neural network
        const tensorOut = this.model.predict(
            tf.tensor([state], [1, this.inputLength], "float32")) as tf.Tensor;
        const output = tensorOut.flatten().dataSync();

        // find the highest activation that is a subset of the choices array
        let bestChoice = choices[0];
        for (let i = 1; i < choices.length; ++i)
        {
            const choice = choices[i];
            const activation = output[choiceIds[choice]];
            if (activation > output[choiceIds[bestChoice]])
            {
                bestChoice = choice;
            }
        }
        return bestChoice;
    }
}
