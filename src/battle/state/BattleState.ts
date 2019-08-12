import { RoomStatus } from "./RoomStatus";
import { Side } from "./Side";
import { Team } from "./Team";

/** Holds all the data about a particular battle. */
export class BattleState
{
    /** Team data. */
    public readonly teams: {readonly [S in Side]: Team} =
        {us: new Team("us", this), them: new Team("them", this)};
    /** Global status conditions for the entire room. */
    public readonly status = new RoomStatus();

    /** Called at the beginning of every turn to update temp statuses. */
    public preTurn(): void
    {
        this.teams.us.preTurn();
        this.teams.them.preTurn();
    }

    /** Called at the end of every turn to update temp statuses. */
    public postTurn(): void
    {
        this.status.postTurn();
        this.teams.us.postTurn();
        this.teams.them.postTurn();
    }

    // istanbul ignore next: only used for logging
    /**
     * Encodes all state data into a string.
     * @param indent Indentation level to use.
     * @returns The BattleState in string form.
     */
    public toString(indent = 0): string
    {
        const s = " ".repeat(indent);
        return `\
${s}status: ${this.status.toString()}
${s}us:
${this.teams.us.toString(indent + 4)}
${s}them:
${this.teams.them.toString(indent + 4)}`;
    }
}
