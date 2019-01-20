import { BattleEvent, MessageType, PlayerID, RequestActive, RequestSide,
    RoomType } from "./messages";

/**
 * Listens for any type of message and delegates it to one of its specific
 * listeners.
 */
export class AnyMessageListener
{
    /** Registered message listeners for each type of Prefix. */
    private readonly listeners:
        {readonly [T in MessageType]: MessageListener<T>} =
    {
        battleinit: new MessageListener<"battleinit">(),
        battleprogress: new MessageListener<"battleprogress">(),
        challstr: new MessageListener<"challstr">(),
        deinit: new MessageListener<"deinit">(),
        error: new MessageListener<"error">(),
        init: new MessageListener<"init">(),
        request: new MessageListener<"request">(),
        updatechallenges: new MessageListener<"updatechallenges">(),
        updateuser: new MessageListener<"updateuser">()
    };

    /**
     * Adds a MessageHandler for a certain message Prefix.
     * @template P Prefix type.
     * @param prefix Message prefix indicating its type.
     * @param handler Function to be called using data from the message.
     * @returns `this` to allow chaining.
     */
    public on<T extends MessageType>(type: T, handler: MessageHandler<T>): this
    {
        // need to assert the function type since addHandler is displayed as a
        //  union of all possible MessageHandlers
        (this.listeners[type] as MessageListener<T>).addHandler(handler);
        return this;
    }

    /**
     * Gets the main handler for the given message type.
     * @template P Prefix type.
     * @param prefix Message prefix indicating its type.
     * @returns A function that calls all registered handlers for this message
     * type.
     */
    public getHandler<T extends MessageType>(type: T): AsyncMessageHandler<T>
    {
        return (args: MessageArgs<T>) =>
            (this.listeners[type] as MessageListener<T>).handle(args);
    }
}

/** Listens for a certain type of message. */
class MessageListener<T extends MessageType>
{
    /** Array of registered message handlers. */
    private readonly handlers: MessageHandler<T>[] = [];

    /**
     * Calls all registered handlers with the arguments for this type of
     * message.
     * @param args Message arguments.
     */
    public async handle(args: MessageArgs<T>): Promise<void>
    {
        await Promise.all(this.handlers.map(handler => handler(args)));
    }

    /**
     * Adds another message handler.
     * @param handler Function to be called.
     */
    public addHandler(handler: MessageHandler<T>): void
    {
        this.handlers.push(handler);
    }
}

/** Function type for handling certain message types. */
export type MessageHandler<T extends MessageType> = AsyncMessageHandler<T> |
    SyncMessageHandler<T>;

/** Asynchronous function type for handling certain message types. */
export type AsyncMessageHandler<T extends MessageType> =
    (args: MessageArgs<T>) => Promise<void>;

/** Synchronous function type for handling certain message types. */
export type SyncMessageHandler<T extends MessageType> =
    (args: MessageArgs<T>) => void;

/** Argument object type for MessageHandlers. */
export type MessageArgs<T extends MessageType> =
    T extends "battleinit" ? BattleInitArgs
    : T extends "battleprogress" ? BattleProgressArgs
    : T extends "challstr" ? ChallStrArgs
    : T extends "deinit" ? DeInitArgs
    : T extends "error" ? ErrorArgs
    : T extends "init" ? InitArgs
    : T extends "request" ? RequestArgs
    : T extends "updatechallenges" ? UpdateChallengesArgs
    : T extends "updateuser" ? UpdateUserArgs
    : {};

/** Args for a `battleinit` message type. */
export interface BattleInitArgs
{
    /** PlayerID of a player. */
    id: PlayerID;
    /** Username of a player. */
    username: string;
    /** Fixed size of each team. */
    teamSizes: {[P in PlayerID]: number};
    /** Game type, e.g. `singles`. */
    gameType: string;
    /** Cartridge generation. */
    gen: number;
    /** Initial events. */
    events: BattleEvent[];
}

/** Args for a `battleprogress` message type. */
export interface BattleProgressArgs
{
    /** Sequence of events in the battle in the order they were parsed. */
    events: BattleEvent[];
}

/** Args for a `challstr` message. */
export interface ChallStrArgs
{
    /** String used to verify account login. */
    challstr: string;
}

/** Args for a `deinit` message. */
export interface DeInitArgs
{
}

/** Args for an `error` message. */
export interface ErrorArgs
{
    /** Why the requested action failed. */
    reason: string;
}

/** Args for an `init` message. */
export interface InitArgs
{
    /** Type of room we're joining. */
    type: RoomType;
}

/** Args for a `request` message. Types the JSON data in the message. */
export interface RequestArgs
{
    /**
     * Whether the opponent is the only one making a decision, meaning the
     * client has to wait.
     */
    wait?: boolean;
    /** Corresponds to which active pokemon slots must be filled. */
    forceSwitch?: boolean[];
    /** Active pokemon info. */
    active?: RequestActive[];
    /** Basic info about the entire team. */
    side: RequestSide;
    /** Request id for verification. */
    rqid?: number;
    /** Whether the given request cannot be canceled. */
    noCancel?: boolean;
}

/**
 * Args for an `updatechallenges` message. Types the JSON data in the message.
 */
export interface UpdateChallengesArgs
{
    /**
     * Maps users challenging the client to the battle format they're being
     * challenged to.
     */
    challengesFrom: {[user: string]: string};
    /** Current outgoing challenge from the client (TODO). */
    challengeTo: {};
}

/** Args for an `updateuser` message. */
export interface UpdateUserArgs
{
    /** New username. */
    username: string;
    /** Whether this is a guest account. */
    isGuest: boolean;
}