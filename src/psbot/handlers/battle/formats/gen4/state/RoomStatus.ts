import { weatherItems, WeatherType } from "../dex";
import { ItemTempStatus, ReadonlyItemTempStatus } from "./ItemTempStatus";
import { ReadonlyTempStatus, TempStatus } from "./TempStatus";

/** Readonly RoomStatus representation. */
export interface ReadonlyRoomStatus
{
    /** Gravity field effect. */
    readonly gravity: ReadonlyTempStatus;
    /** Last executed move in the game. */
    readonly lastMove?: string;
    /** Trick Room status. */
    readonly trickroom: ReadonlyTempStatus;
    /** Weather effect (usually temporary). */
    readonly weather: ReadonlyItemTempStatus<WeatherType>;
}

/** Temporary status conditions for the entire field. */
export class RoomStatus implements ReadonlyRoomStatus
{
    /** @override */
    public readonly gravity = new TempStatus("gravity", 5);
    /** @override */
    public lastMove?: string;
    /** @override */
    public readonly trickroom = new TempStatus("trick room", 5);
    /** @override */
    public readonly weather = new ItemTempStatus([5, 8], weatherItems);

    /** Called at the end of every turn to update temp statuses. */
    public postTurn(): void
    {
        // weather is updated manually by in-game events, whereas with these
        //  pseudo-weather effects they're updated silently
        this.gravity.tick();
        this.trickroom.tick();
    }

    // istanbul ignore next: only used in logging
    /**
     * Encodes all room status data into a string.
     * @returns The RoomStatus in string form.
     */
    public toString(): string
    {
        return `[${([] as string[]).concat(
                this.gravity.isActive ? [this.gravity.toString()] : [],
                this.lastMove ? ["last used " + this.lastMove] : [],
                this.trickroom.isActive ? [this.trickroom.toString()] : [],
                [`weather: ${this.weather.toString()}`])
            .join(", ")}]`;
    }
}
