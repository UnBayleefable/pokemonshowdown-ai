import { inspect } from "util";
import { BattleAgent } from "../battle/agent/BattleAgent";
import { Choice } from "../battle/agent/Choice";
import { BattleState } from "../battle/state/BattleState";
import { Logger } from "../Logger";
import { BattleInitMessage, BattleProgressMessage, CallbackMessage,
    RequestMessage } from "./dispatcher/Message";
import { PSEventHandler } from "./PSEventHandler";

/**
 * Sends a Choice to the server.
 * @param choice Choice to send.
 */
export type ChoiceSender = (choice: Choice) => void;

/** Manages the entire course of a battle in the client's point of view. */
export class PSBattle
{
    /** Name of the user. */
    protected readonly username: string;
    /** Logger object. */
    protected readonly logger: Logger;
    /** State object. */
    protected readonly state: BattleState;
    /** Manages the BattleState by processing events. */
    protected readonly eventHandler: PSEventHandler;
    /** Last |request| message that was processed. */
    protected lastRequest: RequestMessage;
    /** Available choices from the last decision. */
    protected lastChoices: Choice[] = [];

    /** Makes the decisions for this battle. */
    private readonly agent: BattleAgent;
    /** Used to send the BattleAgent's choice to the server. */
    private readonly sender: ChoiceSender;

    /**
     * Creates a PSBattle.
     * @param username Client's username.
     * @param agent BattleAgent to be used.
     * @param sender Used to send the BattleAgent's choice to the server.
     * @param logger Logger object.
     * @param eventHandlerCtor The type of PSEventHandler to use.
     */
    constructor(username: string, agent: BattleAgent, sender: ChoiceSender,
        logger: Logger, eventHandlerCtor = PSEventHandler)
    {
        this.username = username;
        this.logger = logger;
        this.agent = agent;
        this.sender = sender;
        this.state = new BattleState(agent);
        this.eventHandler = new eventHandlerCtor(this.username, this.state,
                logger);
    }

    /** Handles a BattleInitMessage. */
    public init(msg: BattleInitMessage): Promise<void>
    {
        this.logger.debug(`battleinit: ${
            inspect(msg, {colors: false, depth: null})}`);

        this.eventHandler.initBattle(msg);
        this.eventHandler.printState();

        return this.askAgent();
    }

    /** Handles a BattleProgressMessage. */
    public async progress(msg: BattleProgressMessage): Promise<void>
    {
        this.logger.debug(`battleprogress: ${
            inspect(msg, {colors: false, depth: null})}`);

        // last choice was officially accepted by the server
        this.agent.acceptChoice(this.lastChoices[0]);
        this.eventHandler.postTurn();

        this.eventHandler.handleEvents(msg.events);
        this.eventHandler.printState();

        if (this.eventHandler.battling)
        {
            this.eventHandler.printState();
            if (!this.lastRequest.wait) await this.askAgent();
        }
    }

    /** Handles a RequestMessage. */
    public request(msg: RequestMessage): void
    {
        this.logger.debug(`request: ${
            inspect(msg, {colors: false, depth: null})}`);

        this.eventHandler.handleRequest(msg);
        this.lastRequest = msg;
    }

    /** Handles a CallbackMessage. */
    public async callback(msg: CallbackMessage): Promise<void>
    {
        if (msg.name === "trapped")
        {
            // last choice is invalid because we're trapped now
            // avoid repeated callback messages by eliminating all switch
            //  choices
            this.lastChoices = this.lastChoices
                .filter(c => !c.startsWith("switch"));

            // choices are usually restricted by the request message unless
            //  this was not known before, which means the opposing pokemon
            //  has a trapping ability
            this.eventHandler.trapped();

            // re-sort the choices we have left based on new info
            this.lastChoices = await this.agent.decide(this.state,
                    this.lastChoices);
        }
        // first choice was rejected
        else this.lastChoices.shift();

        // retry using second choice
        this.sender(this.lastChoices[0]);
    }

    /** Asks the BattleAgent what to do next and sends the response. */
    private async askAgent(): Promise<void>
    {
        const choices = this.getChoices();
        this.logger.debug(`choices: [${choices.join(", ")}]`);

        this.lastChoices = await this.agent.decide(this.state, choices);
        this.sender(this.lastChoices[0]);
    }

    /**
     * Determines what choices can be made.
     * @returns A list of choices that can be made by the AI.
     */
    private getChoices(): Choice[]
    {
        const choices: Choice[] = [];
        if (!this.lastRequest.forceSwitch && this.lastRequest.active)
        {
            // not forced to switch so we can move
            const moves = this.lastRequest.active[0].moves;
            let struggle = true;
            for (let i = 0; i < moves.length; ++i)
            {
                if (!moves[i].disabled)
                {
                    choices.push(`move ${i + 1}` as Choice);
                    struggle = false;
                }
            }
            // allow struggle choice if no other move option
            if (struggle) choices.push("move 1");
        }

        if (!this.lastRequest.active || !this.lastRequest.active[0].trapped)
        {
            // not trapped so we can switch
            const mons = this.lastRequest.side.pokemon;
            for (let i = 0; i < mons.length; ++i)
            {
                if (mons[i].condition.hp !== 0 && !mons[i].active)
                {
                    choices.push(`switch ${i + 1}` as Choice);
                }
            }
        }

        return choices;
    }
}
