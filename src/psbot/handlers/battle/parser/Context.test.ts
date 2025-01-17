/** @file Test helper for parsers. */
import {expect} from "chai";
import {Logger} from "../../../../util/logging/Logger";
import {Verbose} from "../../../../util/logging/Verbose";
import {BattleAgent, Choice} from "../agent";
import {BattleState} from "../state";
import {ChoiceSender, SenderResult} from "./BattleParser";
import {StateHelpers} from "./StateHelpers.test";
import {BattleIterator} from "./iterators";
import {StartBattleParserArgs} from "./parsing";

/**
 * Initial context data required to start up the battle parser.
 *
 * Modifying fields here will reflect on the contents of {@link startArgs}.
 */
export interface InitialContext extends StartBattleParserArgs {
    /** Initial args for starting the BattleParser. */
    readonly startArgs: StartBattleParserArgs;
    /**
     * Agent deconstructed from {@link startArgs}. Can be overridden.
     * @override
     */
    agent: BattleAgent;
    /**
     * Logger deconstructed from {@link startArgs}. Can be overridden.
     * @override
     */
    logger: Logger;
    /**
     * Sender deconstructed from {@link startArgs}. Can be overridden.
     * @override
     */
    sender: ChoiceSender;
    /** BattleState helper functions. */
    readonly sh: StateHelpers;
}

/**
 * Controls a currently-running {@link BattleParser}.
 *
 * @template TResult Parser result type
 */
export interface ParserContext<TResult = unknown> {
    /** Iterator for sending events to the BattleParser. */
    readonly battleIt: BattleIterator;
    /** Return value of the BattleParser. Resolves once the game ends. */
    readonly finish: Promise<TResult>;
}

/**
 * Creates the initial config for starting BattleParsers.
 *
 * Must be called from within a mocha `describe()` block.
 *
 * Note that the {@link BattleState} is constructed with
 * {@link BattleState.ourSide} = `"p1"`.
 */
export function createInitialContext(): InitialContext {
    let state: BattleState;

    const defaultAgent = async () =>
        await Promise.reject(
            new Error("BattleAgent expected to not be called"),
        );
    // TODO: Should logs be tested?
    const defaultLogger = new Logger(Logger.null, Verbose.None);
    const defaultSender = async () =>
        await Promise.reject(
            new Error("ChoiceSender expected to not be called"),
        );
    const getState = () => state;
    const ictx: InitialContext = {
        startArgs: {
            // Use an additional level of indirection so that agent/sender can
            // be overridden by test code.
            agent: async (s, choices) => await ictx.agent(s, choices),
            logger: new Logger(msg => ictx.logger.logFunc(msg), Verbose.Info),
            sender: async choices => await ictx.sender(choices),
            getState,
        },
        agent: defaultAgent,
        logger: defaultLogger,
        sender: defaultSender,
        getState,
        sh: new StateHelpers(getState),
    };

    // eslint-disable-next-line mocha/no-top-level-hooks
    beforeEach("Reset InitialContext", function () {
        ictx.agent = defaultAgent;
        ictx.logger = defaultLogger;
        ictx.sender = defaultSender;
    });

    // eslint-disable-next-line mocha/no-top-level-hooks
    beforeEach("Initialize BattleState", function () {
        state = new BattleState("username");
        state.started = true;
        state.ourSide = "p1";
    });

    return ictx;
}

/** Result from {@link setupOverrideAgent}. */
export interface OverrideAgent {
    /**
     * Resolves on the next `agent` call.
     *
     * After awaiting, modify this array then call {@link resolve} to mimic
     * {@link BattleAgent} behavior.
     */
    readonly choices: () => Promise<Choice[]>;
    /** Resolves the next `agent` promise. */
    readonly resolve: () => void;
}

/**
 * Adds BattleAgent override functionality to the InitialContext.
 *
 * Must be called from within a mocha `describe()` block.
 */
export function setupOverrideAgent(ictx: InitialContext) {
    let choicesRes: ((choices: Choice[]) => void) | null;

    let choices: Promise<Choice[]>;
    let resolve: (() => void) | null;

    function initAgentPromise() {
        choicesRes = null;
        choices = new Promise(res => (choicesRes = res));
    }

    // eslint-disable-next-line mocha/no-top-level-hooks
    beforeEach("Override agent", function () {
        initAgentPromise();
        resolve = null;
        ictx.agent = async function overrideAgent(_state, _choices) {
            expect(ictx.getState()).to.equal(_state, "Mismatched _state");
            await new Promise<void>(res => {
                resolve = res;
                expect(choicesRes).to.not.be.null;
                choicesRes!(_choices);
                initAgentPromise(); // Reinit.
            }).finally(() => (resolve = null));
        };
    });

    return {
        choices: async () => await choices,
        resolve: () => {
            expect(resolve, "choices() wasn't awaited").to.not.be.null;
            resolve!();
        },
    };
}

/** Result from {@link setupOverrideSender}. */
export interface OverrideSender {
    /**
     * Resolves on the next `sender` call.
     *
     * After awaiting, call {@link resolve} with a ChoiceResult value to mimic
     * {@link ChoiceSender} behavior.
     */
    readonly sent: () => Promise<Choice>;
    /** Resolves the next `sender` promise. */
    readonly resolve: (result: SenderResult) => void;
}

/**
 * Adds ChoiceSender override functionality to the InitialContext.
 *
 * Must be called from within a mocha `describe()` block.
 */
export function setupOverrideSender(ictx: InitialContext) {
    let sentRes: ((choice: Choice) => void) | null;

    let sent: Promise<Choice>;
    let resolve: ((result: SenderResult) => void) | null;

    function initSentPromise() {
        sentRes = null;
        sent = new Promise(res => (sentRes = res));
    }

    // eslint-disable-next-line mocha/no-top-level-hooks
    beforeEach("Override sender", function () {
        initSentPromise();
        resolve = null;
        ictx.sender = async function overrideSender(choice) {
            const result = await new Promise<SenderResult>(res => {
                resolve = res;
                expect(sentRes).to.not.be.null;
                sentRes!(choice);
                initSentPromise(); // Reinit.
            }).finally(() => (resolve = null));
            return result;
        };
    });

    return {
        sent: async () => await sent,
        resolve: (result: SenderResult) => {
            expect(resolve, "sent() wasn't awaited").to.not.be.null;
            resolve!(result);
        },
    };
}
