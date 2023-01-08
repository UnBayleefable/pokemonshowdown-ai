import {join} from "path";
import {EvalConfig} from "../../../config/types";
import {
    GameArgsGenSeeders,
    GamePipeline,
    GamePoolArgs,
    GamePoolResult,
} from "../../game/pool";
import {Metrics} from "./Metrics";
import {ModelRegistry} from "./ModelRegistry";

/**
 * Encapsulates the evaluation step of training, where the model plays games
 * against baselines and previous versions to track improvement over time.
 */
export class Evaluate {
    /** Metrics logger. */
    private readonly metrics = Metrics.get(`${this.name}/eval`);
    /** Used to manage eval game threads. */
    private readonly games: GamePipeline;

    /** Result counts for each opponent. */
    private wlt: {
        [vs: string]: {win: number; loss: number; tie: number};
    } = {};

    /**
     * Creates an Evaluate object.
     *
     * @param name Name of the training run.
     * @param model Model to evaluate.
     * @param prevModel Previous version to use as a baseline.
     * @param config Configuration for the evaluation step.
     * @param logPath Path to the folder to store games logs in. Omit to not
     * store logs.
     * @param seeders Random seed generators.
     */
    public constructor(
        public readonly name: string,
        private readonly model: ModelRegistry,
        private readonly prevModel: ModelRegistry,
        private readonly config: EvalConfig,
        private readonly logPath?: string,
        private readonly seeders?: GameArgsGenSeeders,
    ) {
        this.games = new GamePipeline(config.pool);
    }

    /** Closes game threads. */
    public async cleanup(): Promise<void> {
        return await this.games.cleanup();
    }

    /**
     * Runs the evaluation step on the current model versions.
     *
     * @param step Current episode step.
     * @param callback Called for each game result.
     */
    public async run(
        step: number,
        callback?: (result: GamePoolResult) => void | Promise<void>,
    ): Promise<{[vs: string]: {win: number; loss: number; tie: number}}> {
        this.wlt = {};
        await this.games.run(this.genArgs(step), async result => {
            const wlt = (this.wlt[result.agents[1]] ??= {
                win: 0,
                loss: 0,
                tie: 0,
            });
            if (result.winner === 0) {
                ++wlt.win;
            } else if (result.winner === 1) {
                ++wlt.loss;
            } else {
                ++wlt.tie;
            }
            await callback?.(result);
        });

        if (this.metrics) {
            for (const vs in this.wlt) {
                if (Object.prototype.hasOwnProperty.call(this.wlt, vs)) {
                    const wlt = this.wlt[vs];
                    const total = wlt.win + wlt.loss + wlt.tie;
                    this.metrics?.scalar(
                        `vs_${vs}/win_rate`,
                        wlt.win / total,
                        step,
                    );
                    this.metrics?.scalar(
                        `vs_${vs}/loss_rate`,
                        wlt.loss / total,
                        step,
                    );
                    this.metrics?.scalar(
                        `vs_${vs}/tie_rate`,
                        wlt.tie / total,
                        step,
                    );
                }
            }
        }
        return this.wlt;
    }

    /** Generates game configs for the thread pool. */
    private *genArgs(step: number): Generator<GamePoolArgs> {
        for (const args of GamePipeline.genArgs({
            agentConfig: {
                name: "evaluate",
                exploit: {type: "model", model: this.model.name},
            },
            opponents: [
                {
                    agentConfig: {
                        name: "previous",
                        exploit: {type: "model", model: this.prevModel.name},
                    },
                    numGames: this.config.numGames,
                },
                {
                    agentConfig: {name: "random", exploit: {type: "random"}},
                    numGames: this.config.numGames,
                },
            ],
            requestModelPort: (model: string) => {
                switch (model) {
                    case this.model.name:
                        return this.model.subscribe();
                    case this.prevModel.name:
                        return this.prevModel.subscribe();
                    default:
                        throw new Error(`Invalid model name '${model}'`);
                }
            },
            ...(this.logPath !== undefined && {
                logPath: join(this.logPath, `episode-${step}`),
            }),
            ...(this.config.pool.reduceLogs && {reduceLogs: true}),
            ...(this.seeders && {seeders: this.seeders}),
        })) {
            yield args;
        }
    }
}