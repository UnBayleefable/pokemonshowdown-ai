import { MessagePort } from "worker_threads";
import { alloc, battleStateEncoder } from "../../../ai/encoder/encoders";
import { policyAgent, PolicyType } from "../../../ai/policyAgent";
import { BattleAgent } from "../../../battle/agent/BattleAgent";
import { ExperienceAgentData } from "../../sim/helpers/Experience";
import { AsyncPort, PortRequestBase, PortResultBase } from
    "./helpers/AsyncPort";

/** Base interface for the predict request protocol. */
type PredictRequestBase = PortRequestBase<"predict">;

/** Prediction request message format. */
export interface PredictMessage extends PredictRequestBase
{
    /** State data. */
    state: Float32Array;
}

/** Data returned by the network processor port. */
export interface PredictWorkerResult extends PortResultBase<"predict">,
    PredictResult
{
    /**
     * Guaranteed one reply per message.
     * @override
     */
    done: true;
}

/** Result from a prediction. */
export type PredictResult = Omit<ExperienceAgentData, "state">;

/**
 * Abstracts the interface between a game worker and the master NetworkProcessor
 * worker. Intended to be used by only one BattleAgent within a game worker that
 * received a port to connect to a neural network.
 */
export class ModelPort extends
    AsyncPort<
        {predict: {message: PredictMessage, result: PredictWorkerResult}},
        MessagePort>
{
    /** @override */
    public async close(): Promise<void> { this.port.close(); }

    /**
     * Creates a BattleAgent from this port.
     * @param policy Action selection method. See `policyAgent()` for details.
     * @see policyAgent
     */
    public getAgent(policy: PolicyType): BattleAgent<ExperienceAgentData>
    {
        let data: ExperienceAgentData | null = null;

        const innerAgent = policyAgent(
            async state =>
            {
                const arr = alloc(battleStateEncoder, /*shared*/ true);
                battleStateEncoder.encode(arr, state);
                const result = await this.predict(arr, /*shared*/ true);
                data = {...result, state: arr};
                return result.probs;
            },
            policy);

        return async function portAgent(state, choices, logger)
        {
            await innerAgent(state, choices, logger);
            if (!data)
            {
                throw new Error("ModelPort agent didn't collect experience " +
                    "data");
            }
            const result = data;
            data = null;
            return result;
        };
    }

    /**
     * Requests a prediction from the neural network.
     * @param state State data.
     * @param shared Whether the array uses a SharedArrayBuffer.
     */
    public predict(state: Float32Array, shared = false): Promise<PredictResult>
    {
        const msg: PredictMessage =
            {type: "predict", rid: this.generateRID(), state};
        // SharedArrayBuffers can't be in the transfer list since they're
        //  already accessible from both threads
        const transferList = shared ? [] : [state.buffer];

        return new Promise((res, rej) =>
            this.postMessage(msg, transferList,
                result =>
                    result.type === "error" ? rej(result.err) : res(result)));
    }
}
