import {PRNGSeed} from "@pkmn/sim";
import {BattleAgent} from "../../../psbot/handlers/battle/agent";
import {BattleParser} from "../../../psbot/handlers/battle/parser/BattleParser";
import {main} from "../../../psbot/handlers/battle/parser/main";
import {Experience, ExperienceAgent} from "../experience";
import {experienceBattleParser, PlayerOptions, startPsBattle} from "./ps";

/** Arguments for general battle sims. */
export interface SimArgs {
    /** The two agents that will play against each other. */
    readonly agents: readonly [SimArgsAgent, SimArgsAgent];
    /**
     * Maximum amount of turns until the game is considered a tie. Games can go
     * on forever if this is not set and both agents only decide to switch.
     */
    readonly maxTurns?: number;
    /**
     * Path to the file to store game logs in. If not specified, and the
     * simulator encounters an error, then the logs will be stored in a temp
     * file.
     */
    readonly logPath?: string;
    /**
     * If true, logs should only be written to disk (either to {@link logPath}
     * or a tmp file) if an error is encountered, and discarded if no error.
     */
    readonly onlyLogOnError?: true;
    /** Seed for the battle PRNG. */
    readonly seed?: PRNGSeed;
}

/** Base interface for {@link SimArgsAgent}. */
interface SimArgsAgentBase<TAgent extends BattleAgent, TExp extends boolean> {
    /** Name for logging. */
    readonly name: string;
    /** BattleAgent function. */
    readonly agent: TAgent;
    /**
     * Whether the {@link agent} emits ExperienceAgentData that should be used
     * to generate {@link Experience} objects.
     */
    readonly emitExperience: TExp;
    /** Seed for generating the random team. */
    readonly seed?: PRNGSeed;
}

/**
 * {@link SimArgsAgent} that doesn't emit ExperienceAgentData or wants that data
 * to be ignored.
 */
export type SimArgsNoexpAgent = SimArgsAgentBase<BattleAgent, false>;
/** {@link SimArgsAgent} that emits ExperienceAgentData. */
export type SimArgsExpAgent = SimArgsAgentBase<ExperienceAgent, true>;

/** Config for a {@link BattleAgent}. */
export type SimArgsAgent = SimArgsNoexpAgent | SimArgsExpAgent;

/** Base simulator result type. */
export interface SimResult {
    /** Names of the two agents that participated in the game. */
    agents: [string, string];
    /** Index of the winner from {@link agents}. */
    winner?: 0 | 1;
    /**
     * If an exception was thrown during the game, store it here instead of
     * propagating it through the pipeline.
     */
    err?: Error;
}

/**
 * Plays a single game and processes the results.
 *
 * @param args Arguments for the simulator.
 * @param experienceCallback Callback for processing {@link Experience}s if any
 * of the provided BattleAgents are configured to emit them. If omitted, the
 * Experiences will instead be discarded.
 */
export async function playGame(
    args: SimArgs,
    experienceCallback?: (exp: Experience) => void,
): Promise<SimResult> {
    // Detect battle agents that want to generate Experience objects.
    const [p1, p2] = args.agents.map<PlayerOptions>(function (agentArgs) {
        if (!experienceCallback || !agentArgs.emitExperience) {
            return {
                name: agentArgs.name,
                agent: agentArgs.agent,
                ...(agentArgs.seed && {seed: agentArgs.seed}),
            };
        }

        // Agent is configured to emit partial Experience data, so override the
        // BattleParser to process them into full Experience objects.
        return {
            name: agentArgs.name,
            agent: agentArgs.agent,
            parser: agentArgs.emitExperience
                ? (experienceBattleParser(
                      main,
                      experienceCallback,
                      agentArgs.name /*username*/,
                  ) as BattleParser<BattleAgent, [], void>)
                : main,
            ...(agentArgs.seed && {seed: agentArgs.seed}),
        };
    });

    // Play the game.
    const {winner, err} = await startPsBattle({
        players: {p1, p2},
        ...(args.maxTurns && {maxTurns: args.maxTurns}),
        ...(args.logPath && {logPath: args.logPath}),
        ...(args.onlyLogOnError && {onlyLogOnError: true}),
        ...(args.seed && {seed: args.seed}),
    });
    return {
        agents: [args.agents[0].name, args.agents[1].name],
        // Pass winner id as an index corresponding to agents/experiences.
        ...(winner && {winner: winner === args.agents[0].name ? 0 : 1}),
        ...(err && {err}),
    };
}
