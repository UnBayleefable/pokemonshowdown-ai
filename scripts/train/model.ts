import * as tf from "@tensorflow/tfjs-node";
import { battleStateEncoder } from "../../src/ai/encoder/encoders";
import { intToChoice } from "../../src/battle/agent/Choice";

/** Creates a model for training. */
export function createModel(): tf.LayersModel
{
    // initial layer
    const state = tf.layers.input(
        {name: "network/state", shape: [battleStateEncoder.size]});
    const fc1 = tf.layers.dense(
    {
        name: "network/fc1", units: 1000, activation: "relu",
        kernelInitializer: "heNormal", biasInitializer: "heNormal"
    }).apply(state);

    // action-logit and state-value outputs
    const actionLogits = tf.layers.dense(
    {
        name: "network/action-logits", units: intToChoice.length,
        activation: "linear", kernelInitializer: "heNormal",
        biasInitializer: "heNormal"
    }).apply(fc1) as tf.SymbolicTensor;
    const stateValue = tf.layers.dense(
    {
        name: "network/state-value", units: 1, activation: "linear",
        kernelInitializer: "heNormal", biasInitializer: "heNormal"
    }).apply(fc1) as tf.SymbolicTensor;

    return tf.model(
        {name: "network", inputs: state, outputs: [actionLogits, stateValue]});
}
