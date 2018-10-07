import * as logger from "../logger";
import { Parser } from "../parser/Parser";
import { Choice } from "./battle/ai/Choice";
import { Network } from "./battle/ai/Network";
import { Battle } from "./battle/Battle";

/** Handles all bot actions. */
export class Bot
{
    /** Allowed formats to play in. */
    public static readonly format = "gen4randombattle";

    /** Parses server messages. */
    private readonly parser: Parser;
    /** Keeps track of all the battles we're in. */
    private readonly battles: {[room: string]: Battle} = {};
    /** Name of the user. */
    private username: string = "";
    /** Used to send response messages to the server. */
    private readonly send: (response: string) => void;

    /** Current room we're receiving messages from. */
    private get room(): string
    {
        return this.parser.room;
    }

    /**
     * Creates a Bot.
     * @param parser Parses messages from the server.
     * @param send Sends responses to the server.
     */
    constructor(parser: Parser, send: (response: string) => void)
    {
        this.parser = parser;
        this.send = send;
        this.parser
        .on(null, "init", args =>
        {
            if (args.type === "battle")
            {
                // initialize a new battle ai
                if (!this.battles.hasOwnProperty(this.room))
                {
                    // need a copy of the current room so the addResponses
                    //  lambda captures that and not a reference to `this`
                    const room = this.room;
                    const listener = this.parser.getListener(room);
                    const sender = (choice: Choice, rqid?: number) =>
                        this.addResponses(room, `|/choose ${choice}|${rqid}`);

                    const battle = new Battle(Network, this.username,
                            /*saveAlways*/ true, listener, sender);
                    this.battles[this.room] = battle;

                    // once the battle's over we can respectfully leave
                    listener
                    .on("tie", () => this.addResponses(room, "|gg", "|/leave"))
                    .on("win", listener.getHandler("tie"))
                    .on("deinit", () =>
                    {
                        this.parser.removeListener(room);
                        delete this.battles[this.room];
                    });
                }
            }
        })
        .on("", "updatechallenges", args =>
        {
            for (const user in args.challengesFrom)
            {
                if (args.challengesFrom.hasOwnProperty(user))
                {
                    if (args.challengesFrom[user] === Bot.format)
                    {
                        this.addResponses(null, `|/accept ${user}`);
                    }
                    else
                    {
                        this.addResponses(null, `|/reject ${user}`);
                    }
                }
            }
        })
        .on("", "updateuser", args =>
        {
            this.username = args.username;
        });
    }

    /**
     * Parses a packet of messages and possibly acts upon it.
     * @param unparsedPacket Message data from the server.
     */
    public consumePacket(unparsedPacket: string): void
    {
        this.parser.parse(unparsedPacket);
    }

    /**
     * Sends a list of responses to the server.
     * @param room Room to send the response from. Can be null if it doesn't
     * matter.
     * @param responses Responses to be sent to the server.
     */
    private addResponses(room: string | null, ...responses: string[]): void
    {
        if (room)
        {
            responses = responses.map(response => room + response);
        }
        responses.forEach(this.send);
        logger.debug(`sent: ["${responses.join("\", \"")}"]`);
    }
}
