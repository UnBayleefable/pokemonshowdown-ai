import {join} from "path";
import {pipeline} from "stream/promises";
import {MessagePort} from "worker_threads";
import {GamePoolConfig, ExperienceConfig} from "../../../config/types";
import {generatePsPrngSeed, rng, Rng, Seeder} from "../../../util/random";
import {
    GamePool,
    GamePoolAgentConfig,
    GamePoolArgs,
    GamePoolResult,
} from "./GamePool";
import {GamePoolStream} from "./GamePoolStream";

/** Options for generating game configs. */
export interface GameArgsGenOptions {
    /** Config for the agent. */
    readonly agentConfig: GamePoolAgentConfig;
    /** Config for the opponent agent. */
    readonly opponent: GamePoolAgentConfig;
    /** Used to request model ports for the game workers. */
    readonly requestModelPort: (
        name: string,
    ) => MessagePort | Promise<MessagePort>;
    /** Number of games to play. Omit to play indefinitely. */
    readonly numGames?: number;
    /** Path to the folder to store game logs in. Omit to not store logs. */
    readonly logPath?: string;
    /**
     * Exponentially reduces the amount of games that get to keep logs on disk.
     * Note that if a game encounters an error then it will always log to disk.
     */
    readonly reduceLogs?: boolean;
    /**
     * Configuration to process any Experiences that get generated by agents. If
     * omitted, experience is discarded.
     */
    readonly experienceConfig?: ExperienceConfig;
    /** Random seed generators. */
    readonly seeders?: GameArgsGenSeeders;
}

/** Random number generators used by the game and policy. */
export interface GameArgsGenSeeders {
    /** Random seed generator for the battle PRNGs. */
    readonly battle?: Seeder;
    /** Random seed generator for the random team PRNGs. */
    readonly team?: Seeder;
    /** Random seed generator for the random exploration policy. */
    readonly explore?: Seeder;
}

/** Wraps {@link GamePoolStream} into a pipeline promise. */
export class GamePipeline {
    /** Manages game threads. */
    private readonly pool: GamePool;
    /** Used to abort the run if needed. */
    private readonly ac = new AbortController();

    /**
     * Creates a GamePipeline.
     *
     * @param config Thread pool config.
     */
    public constructor(config: GamePoolConfig) {
        this.pool = new GamePool(config);
    }

    /** Closes game threads. Can be called while games are still running. */
    public async cleanup(): Promise<void> {
        this.ac.abort();
        return await this.pool.close();
    }

    /**
     * Starts the game pipeline. Can be called multiple times.
     *
     * @param genArgs Generator for game configs.
     * @param callback Called for each game result, which may be out of order
     * due to thread pool scheduling.
     */
    public async run(
        genArgs: Generator<GamePoolArgs>,
        callback?: (result: GamePoolResult) => void | Promise<void>,
    ): Promise<void> {
        await pipeline(
            genArgs,
            new GamePoolStream(this.pool),
            async function handleResults(
                results: AsyncIterable<GamePoolResult>,
            ): Promise<void> {
                for await (const result of results) {
                    await callback?.(result);
                }
            },
            {signal: this.ac.signal},
        );
    }

    /** Generates game configs to feed into a game thread pool. */
    public static *genArgs({
        agentConfig,
        opponent,
        requestModelPort,
        numGames,
        logPath,
        reduceLogs,
        experienceConfig,
        seeders,
    }: GameArgsGenOptions): Generator<GamePoolArgs> {
        const battleRandom = seeders?.battle && rng(seeders.battle());
        const teamRandom = seeders?.team && rng(seeders.team());
        for (let id = 1; !numGames || id <= numGames; ++id) {
            yield {
                id,
                agents: [
                    GamePipeline.buildAgent(
                        agentConfig,
                        seeders?.explore,
                        teamRandom,
                    ),
                    GamePipeline.buildAgent(
                        opponent,
                        seeders?.explore,
                        teamRandom,
                    ),
                ],
                requestModelPort,
                play: {
                    ...(logPath !== undefined && {
                        logPath: join(logPath, `game-${id}-${opponent.name}`),
                    }),
                    ...(reduceLogs &&
                        Math.log2(id) % 1 !== 0 && {onlyLogOnError: true}),
                    seed: generatePsPrngSeed(battleRandom),
                    ...(experienceConfig && {experienceConfig}),
                },
            };
        }
    }

    /** Fills in random seeds for agent configs. */
    private static buildAgent(
        config: GamePoolAgentConfig,
        exploreSeedRandom?: Seeder,
        teamRandom?: Rng,
    ): GamePoolAgentConfig {
        return {
            ...config,
            exploit:
                config.exploit.type === "random" && exploreSeedRandom
                    ? {type: "random", seed: exploreSeedRandom()}
                    : config.exploit,
            ...(config.explore &&
                exploreSeedRandom && {
                    explore: {...config.explore, seed: exploreSeedRandom()},
                }),
            seed: generatePsPrngSeed(teamRandom),
        };
    }
}
