import * as dex from "../dex";
import {Moveset, ReadonlyMoveset} from "./Moveset";
import {PokemonTraits, ReadonlyPokemonTraits} from "./PokemonTraits";
import {ReadonlyTempStatus, TempStatus} from "./TempStatus";
import {
    ReadonlyVariableTempStatus,
    VariableTempStatus,
} from "./VariableTempStatus";
import {pluralTurns, plus} from "./utility";

/** Writable helper type. */
type Writable<T> = T extends object ? {-readonly [U in keyof T]: T[U]} : never;

// TODO: Factor into a separate class?
/** Tracks a move status turn counter. */
export interface ReadonlyMoveStatus {
    /** Name of the move, or null if inactive. */
    readonly move: string | null;
    /** Turn tracker. */
    readonly ts: ReadonlyTempStatus;
}

/** Tracks a move status turn counter. */
export interface MoveStatus extends ReadonlyMoveStatus {
    /** @override */
    move: string | null;
    /** @override */
    readonly ts: TempStatus;
}

/** Readonly {@link VolatileStatus} representation. */
export interface ReadonlyVolatileStatus {
    //#region Passed when copying.

    /* Aqua Ring move status. */
    readonly aquaring: boolean;
    /** Stat boost stages. */
    readonly boosts: dex.BoostTable;
    /** Confusion status. */
    readonly confusion: ReadonlyTempStatus;
    /** Curse status. */
    readonly curse: boolean;
    /** Embargo move status. */
    readonly embargo: ReadonlyTempStatus;
    /** Focus Energy move status. */
    readonly focusenergy: boolean;
    /** Ingrain move status. */
    readonly ingrain: boolean;
    /** Leech Seed move status. */
    readonly leechseed: boolean;
    /** Who is locked onto us. */
    readonly lockedOnBy: VolatileStatus | null;
    /** Who we are locking onto. */
    readonly lockOnTarget: VolatileStatus | null;
    /** Turn tracker for Lock-On target. */
    readonly lockOnTurns: ReadonlyTempStatus;
    /** Magnet Rise move status. */
    readonly magnetrise: ReadonlyTempStatus;
    /** Nightmare move status. */
    readonly nightmare: boolean;
    /**
     * Number of turns left until Perish Song activates (max 3), or 0 if
     * inactive.
     */
    readonly perish: number;
    /** Power Trick move status. */
    readonly powertrick: boolean;
    /** Substitute move status. */
    readonly substitute: boolean;
    /** Whether the current ability is being suppressed. */
    readonly suppressAbility: boolean;
    /** Who is trapping us. */
    readonly trapped: ReadonlyVolatileStatus | null;
    /** Who we're trapping. */
    readonly trapping: ReadonlyVolatileStatus | null;

    //#endregion

    //#region Passed by self-switch moves.

    /**
     * Last used move. Includes move selections and Struggle, but not called
     * moves.
     */
    readonly lastMove: string | null;

    //#endregion

    //#region Not passed when copying.

    /** Attract move status. */
    readonly attract: boolean;
    /** Bide move status. */
    readonly bide: ReadonlyTempStatus;
    /** Charge move status. */
    readonly charge: ReadonlyTempStatus;
    /** Choice item lock. */
    readonly choiceLock: string | null;
    /** Whether the pokemon was directly damaged by a move this turn. */
    readonly damaged: boolean;
    /** Defense curl move status. */
    readonly defensecurl: boolean;
    /** Destiny Bond move status. */
    readonly destinybond: boolean;
    /** Currently disabled move. */
    readonly disabled: ReadonlyMoveStatus;
    /**
     * Encore move status. Encored move corresponds to `#lastUsed` at the time
     * it starts.
     */
    readonly encore: ReadonlyMoveStatus;
    /** Flash Fire ability effect. */
    readonly flashfire: boolean;
    /** Focus Punch pre-move effect. */
    readonly focus: boolean;
    /** Grudge move status. */
    readonly grudge: boolean;
    /** Heal Block move status. */
    readonly healblock: ReadonlyTempStatus;
    /** Foresight/Miracle Eye move status. */
    readonly identified: "foresight" | "miracleeye" | null;
    /** Imprison move status. */
    readonly imprison: boolean;
    /**
     * Tracks locked moves, e.g. petaldance variants. Should be ticked after
     * every successful move attempt.
     *
     * After the 2nd or 3rd move, the user will become confused, explicitly
     * ending the status. However, if the user was already confused, the status
     * can be implicitly ended, so this VariableTempStatus field is
     * silent-endable.
     */
    readonly lockedMove: ReadonlyVariableTempStatus<dex.LockedMove>;
    /** Whether the pokemon has used Magic Coat during this turn. */
    readonly magiccoat: boolean;
    /** Micle Berry status. */
    readonly micleberry: boolean;
    /** Whether the pokemon has used Minimize while out. */
    readonly minimize: boolean;
    // TODO(non-single battles): Use a list of [move, user] tuples.
    /** Last move that targeted this slot for mirrormove purposes. */
    readonly mirrormove: string | null;
    /** Mud Sport move status. */
    readonly mudsport: boolean;
    /** Whether this pokemon must recharge on the next turn. */
    readonly mustRecharge: boolean;
    /**
     * Override moveset, typically linked to the parent Pokemon's
     * `#baseMoveset`. Applies until switched out.
     */
    readonly overrideMoveset: ReadonlyMoveset;
    /** Override pokemon traits. Applies until switched out. */
    readonly overrideTraits: ReadonlyPokemonTraits | null;
    /** Temporary third type. */
    readonly addedType: dex.Type;
    /** Rage move status. */
    readonly rage: boolean;
    /** Rollout-like move status. */
    readonly rollout: ReadonlyVariableTempStatus<keyof typeof dex.rolloutMoves>;
    /** Roost move effect (single turn). */
    readonly roost: boolean;
    /** First 5 turns of Slow Start ability. */
    readonly slowstart: ReadonlyTempStatus;
    /** Snatch move status. */
    readonly snatch: boolean;
    /** Whether we have successfully stalled this turn and the effect is up. */
    readonly stalling: boolean;
    /** Number of turns this pokemon has used a stalling move, e.g. Protect. */
    readonly stallTurns: number;
    /** Number of Stockpile uses. */
    readonly stockpile: number;
    /** Taunt move status. */
    readonly taunt: ReadonlyTempStatus;
    /** Torment move status. */
    readonly torment: boolean;
    /** Transform move status. */
    readonly transformed: boolean;
    /** Two-turn move currently being prepared. */
    readonly twoTurn: ReadonlyVariableTempStatus<dex.TwoTurnMove>;
    /** Whether the Unburden ability would be active here. */
    readonly unburden: boolean;
    /** Uproar move status. */
    readonly uproar: ReadonlyTempStatus;
    /** Water Sport move status. */
    readonly watersport: boolean;
    /** Whether the Truant ability will activate next turn. */
    readonly willTruant: boolean;
    /** Yawn move status. */
    readonly yawn: ReadonlyTempStatus;

    //#endregion
}

/**
 * Contains the minor or temporary status conditions of a pokemon that are
 * removed upon switch.
 */
export class VolatileStatus implements ReadonlyVolatileStatus {
    // All fields are initialized on #clear() which is called in the
    // constructor.

    //#region Passed when copying.

    /** @override */
    public aquaring!: boolean;

    /** @override */
    public get boosts(): Writable<dex.BoostTable> {
        return this._boosts;
    }
    private _boosts!: Writable<dex.BoostTable>;

    // 2-5 move attempts, cure on last.
    /** @override */
    public readonly confusion = new TempStatus("confused", 5);

    /** @override */
    public curse!: boolean;

    /** @override */
    public readonly embargo = new TempStatus("embargo", 5);

    /** @override */
    public focusenergy!: boolean;

    /** @override */
    public ingrain!: boolean;

    /** @override */
    public leechseed!: boolean;

    /** @override */
    public get lockedOnBy(): VolatileStatus | null {
        return this._lockedOnBy;
    }
    private _lockedOnBy!: VolatileStatus | null;
    /** @override */
    public get lockOnTarget(): VolatileStatus | null {
        return this._lockOnTarget;
    }
    private _lockOnTarget!: VolatileStatus | null;
    /** @override */
    public get lockOnTurns(): ReadonlyTempStatus {
        return this._lockOnTurns;
    }
    // Ends next turn.
    private readonly _lockOnTurns = new TempStatus(
        "lock on",
        2,
        true /*silent*/,
    );
    /**
     * Starts the Lock-On status.
     *
     * @param target Target of Lock-On.
     */
    public lockOn(target: VolatileStatus): void {
        this._lockOnTarget = target;
        target._lockedOnBy = this;
        this._lockOnTurns.start();
    }

    /** @override */
    public readonly magnetrise = new TempStatus("magnet rise", 5);

    /** @override */
    public nightmare!: boolean;

    /** @override */
    public get perish(): number {
        return this._perish;
    }
    public set perish(turns: number) {
        this._perish = Math.max(0, Math.min(turns, 3));
    }
    private _perish!: number;

    /** @override */
    public powertrick!: boolean;

    /** @override */
    public substitute!: boolean;

    /** @override */
    public suppressAbility!: boolean;

    /** @override */
    public get trapped(): VolatileStatus | null {
        return this._trapped;
    }
    private _trapped!: VolatileStatus | null;
    /** @override */
    public get trapping(): VolatileStatus | null {
        return this._trapping;
    }
    private _trapping!: VolatileStatus | null;
    /**
     * Indicates that the provided pokemon slot is being trapping by this one.
     */
    public trap(target: VolatileStatus): void {
        this._trapping = target;
        target._trapped = this;
    }

    //#endregion

    //#region Passed by self-switch moves.

    /** @override */
    public lastMove!: string | null;

    //#endregion

    //#region Not passed when copying

    /** @override */
    public attract!: boolean;

    // 2 bide updates, end on last or if inactive.
    /** @override */
    public readonly bide = new TempStatus("bide", 2);

    /** @override */
    public choiceLock!: string | null;

    /** @override */
    public damaged!: boolean;

    // Ends next turn.
    /** @override */
    public readonly charge = new TempStatus("charging", 2, true /*silent*/);

    /** @override */
    public defensecurl!: boolean;

    /** @override */
    public destinybond!: boolean;

    /** @override */
    public get disabled(): ReadonlyMoveStatus {
        return this._disabled;
    }
    /** Starts the Disabled status for the given move. */
    public disableMove(move: string): void {
        this._disabled.move = move;
        this._disabled.ts.start();
    }
    /** Removes Disable status. */
    public enableMoves(): void {
        this._disabled.move = null;
        this._disabled.ts.end();
    }
    // 4-7 turns, cure on last.
    private readonly _disabled: MoveStatus = {
        move: null,
        ts: new TempStatus("disabled", 7),
    };

    /** @override */
    public get encore(): ReadonlyMoveStatus {
        return this._encore;
    }
    /** Starts the Encore status for the given move. */
    public encoreMove(move: string): void {
        // Can't encore unless the pokemon has the affected move.
        this.overrideMoveset.reveal(move);

        this._encore.move = move;
        this._encore.ts.start();
    }
    // TODO: Also do this when the move runs out of pp.
    /** Removes encore status. */
    public removeEncore(): void {
        this._encore.move = null;
        this._encore.ts.end();
    }
    // 4-8 turns, cure on last.
    private readonly _encore: MoveStatus = {
        move: null,
        ts: new TempStatus("encored", 8),
    };

    /** @override */
    public flashfire!: boolean;

    /** @override */
    public focus!: boolean;

    /** @override */
    public grudge!: boolean;

    /** @override */
    public healblock = new TempStatus("heal block", 5);

    /** @override */
    public identified!: "foresight" | "miracleeye" | null;

    /** @override */
    public imprison!: boolean;

    // 2-3 move attempts (including first), end on last (can be silent) or if
    // inactive.
    // FIXME: Ambiguity if there's no fatigue message to mark the end.
    /** @override */
    public readonly lockedMove = new VariableTempStatus(
        dex.lockedMoves,
        2,
        true /*silent*/,
    );

    /** @override */
    public magiccoat!: boolean;

    /** @override */
    public micleberry!: boolean;

    /** @override */
    public minimize!: boolean;

    /** @override */
    public mirrormove!: string | null;

    /** @override */
    public mudsport!: boolean;

    /** @override */
    public mustRecharge!: boolean;

    /** @override */
    public readonly overrideMoveset = new Moveset();

    /** @override */
    public overrideTraits!: PokemonTraits | null;

    /** @override */
    public addedType!: dex.Type;

    /** Changes current type while active. Also resets {@link addedType}. */
    public changeTypes(types: readonly [dex.Type, dex.Type]): void {
        // istanbul ignore next: should never happen
        if (!this.overrideTraits) {
            throw new Error("Override traits not set");
        }
        this.overrideTraits = this.overrideTraits.divergeTypes(types);
        this.addedType = "???";
    }

    /** @override */
    public rage!: boolean;

    // 5 move attempts (including start), end on last or if inactive.
    /** @override */
    public readonly rollout = new VariableTempStatus(
        dex.rolloutMoves,
        4,
        true /*silent*/,
    );

    /** @override */
    public roost!: boolean;

    /** @override */
    public readonly slowstart = new TempStatus("slow start", 5);

    /** @override */
    public snatch!: boolean;

    /** @override */
    public get stalling(): boolean {
        return this._stalling;
    }
    /** @override */
    public get stallTurns(): number {
        return this._stallTurns;
    }
    /** Sets the stall flag. Should be called once per turn if it's on. */
    public stall(flag: boolean): void {
        this._stalling = flag;
        this._stallTurns = flag ? this._stallTurns + 1 : 0;
    }
    private _stalling!: boolean;
    private _stallTurns!: number;

    /** @override */
    public get stockpile(): number {
        return this._stockpile;
    }
    public set stockpile(uses: number) {
        this._stockpile = Math.max(0, Math.min(uses, 3));
    }
    private _stockpile!: number;

    // 3-5 turns, cure on last.
    /** @override */
    public readonly taunt = new TempStatus("taunt", 5);

    /** @override */
    public torment!: boolean;

    /** @override */
    public transformed!: boolean;

    // Ends next turn.
    /** @override */
    public readonly twoTurn = new VariableTempStatus(
        dex.twoTurnMoves,
        2,
        true /*silent*/,
    );

    /** @override */
    public unburden!: boolean;

    // 2-5 turns, end on last.
    /** @override */
    public readonly uproar = new TempStatus("uproar", 5);

    /** @override */
    public watersport!: boolean;

    /** @override */
    public get willTruant(): boolean {
        return this._willTruant;
    }
    /** Indicates that the Truant ability has activated. */
    public activateTruant(): void {
        if (this.overrideTraits?.ability.definiteValue !== "truant") {
            throw new Error(
                "Expected ability to be truant but found " +
                    (this.overrideTraits?.ability.definiteValue ??
                        "unknown ability"),
            );
        }

        // Will invert to false on postTurn() so it's properly synced.
        this._willTruant = true;
    }
    private _willTruant!: boolean;

    // Ends next turn.
    /** @override */
    public readonly yawn = new TempStatus("yawn", 2, true /*silent*/);

    /** Creates a VolatileStatus object. */
    public constructor() {
        this.clear();
    }

    /**
     * Clears all volatile status conditions. This does not affect shallow
     * clones.
     */
    public clear(): void {
        this.clearPassable();
        this.clearSelfSwitchPassable();
        this.clearUnpassable();
    }

    /**
     * Clears statuses that can passed by a copy-volatile effect (e.g. Baton
     * Pass).
     */
    public clearPassable() {
        this.aquaring = false;
        this._boosts = {
            atk: 0,
            def: 0,
            spa: 0,
            spd: 0,
            spe: 0,
            accuracy: 0,
            evasion: 0,
        };
        this.confusion.end();
        this.curse = false;
        this.embargo.end();
        this.focusenergy = false;
        this.ingrain = false;
        this.leechseed = false;
        // Clear opponent's lockon status.
        if (this._lockedOnBy) {
            this._lockedOnBy._lockOnTarget = null;
            this._lockedOnBy._lockOnTurns.end();
        }
        this._lockedOnBy = null;
        // Clear our lockon status.
        if (this._lockOnTarget) this._lockOnTarget._lockedOnBy = null;
        this._lockOnTarget = null;
        this._lockOnTurns.end();
        this.magnetrise.end();
        this.nightmare = false;
        this._perish = 0;
        this.powertrick = false;
        this.substitute = false;
        this.suppressAbility = false;
        // Clear opponent's trapping status.
        if (this._trapped) this._trapped._trapping = null;
        this._trapped = null;
        // Clear our trapping status.
        if (this._trapping) this._trapping._trapped = null;
        this._trapping = null;
    }

    /** Clears statuses that can be passed by self-switch moves. */
    public clearSelfSwitchPassable(): void {
        this.lastMove = null;
    }

    /** Clears statuses that can't be Baton Passed. */
    public clearUnpassable(): void {
        this.attract = false;
        this.bide.end();
        this.charge.end();
        this.choiceLock = null;
        this.damaged = false;
        this.defensecurl = false;
        this.destinybond = false;
        this.enableMoves();
        this.removeEncore();
        this.flashfire = false;
        this.focus = false;
        this.grudge = false;
        this.healblock.end();
        this.identified = null;
        this.imprison = false;
        this.lockedMove.reset();
        this.magiccoat = false;
        this.micleberry = false;
        this.minimize = false;
        this.mirrormove = null;
        this.mudsport = false;
        this.mustRecharge = false;
        this.overrideMoveset.isolate();
        this.overrideTraits = null;
        this.addedType = "???";
        this.rage = false;
        this.rollout.reset();
        this.roost = false;
        this.slowstart.end();
        this.snatch = false;
        this._stalling = false;
        this._stallTurns = 0;
        this._stockpile = 0;
        this.taunt.end();
        this.torment = false;
        this.transformed = false;
        this.twoTurn.reset();
        this.unburden = false;
        this.uproar.end();
        this.watersport = false;
        this._willTruant = false;
        this.yawn.end();
    }

    /**
     * Applies some special effects that only happen when Baton Passing.
     *
     * @param majorStatus Major status of the recipient.
     */
    public batonPass(majorStatus?: dex.MajorStatus): void {
        // Restart lockon so the recipient can use it.
        if (this._lockOnTurns.isActive) this._lockOnTurns.start();
        // Nightmare status shouldn't persist if the recipient isn't asleep.
        if (majorStatus !== "slp") this.nightmare = false;
    }

    /** Updates some statuses after handling a self-switch. */
    public selfSwitch() {
        // Make sure lastMove is still valid.
        if (this.lastMove) {
            if (!this.overrideMoveset.constraint.has(this.lastMove)) {
                this.lastMove = null;
            }
            // TODO: Callback for when moveset updates constraint.
        }
    }

    /** Indicates that the pokemon spent its turn being inactive. */
    public inactive(): void {
        this.resetSingleMove();

        // Move-locking statuses cancel when the intended move was prevented
        // from being attempted.
        this.bide.end();
        this.lockedMove.reset();
        this.rollout.reset();
        this.twoTurn.reset();
        // Uproar doesn't end if prevented from using subsequent moves.

        this._stalling = false;
        this._stallTurns = 0;
    }

    /** Resets single-move statuses like Destiny Bond. */
    public resetSingleMove(): void {
        this.destinybond = false;
        this.grudge = false;
        this.rage = false;
    }

    /**
     * Breaks currently active stalling move effects mid-turn without updating
     * the fail rate for the next use.
     */
    public feint(): void {
        this._stalling = false;
    }

    /** Called at the beginning of every turn to update temp statuses. */
    public preTurn(): void {
        // TODO
    }

    /** Called at the end of every turn to update temp statuses. */
    public postTurn(): void {
        // Implicitly update turn-based temp statuses
        // This excludes statuses that are explicitly mentioned when updated
        this.embargo.tick();
        this._lockOnTurns.tick();
        this.magnetrise.tick();
        this.charge.tick();
        this._disabled.ts.tick();
        this._encore.ts.tick();
        this.healblock.tick();
        this.slowstart.tick();
        this.taunt.tick();
        this.twoTurn.tick();
        this.yawn.tick();

        // Handle lockon ending.
        if (!this._lockOnTurns.isActive) {
            if (this._lockOnTarget) this._lockOnTarget._lockedOnBy = null;
            this._lockOnTarget = null;
        }

        // Reset single-turn statuses.
        this.damaged = false;
        this.focus = false;
        this.magiccoat = false;
        this.roost = false;
        this.snatch = false;
        this._stalling = false;

        // Toggle truant activation.
        if (this.overrideTraits?.ability.definiteValue === "truant") {
            this._willTruant = !this._willTruant;
        } else this._willTruant = false;
    }

    // istanbul ignore next: Only used in logging.
    /** Encodes all volatile status data into a string. */
    public toString(): string {
        return `[${([] as string[])
            .concat(
                this.aquaring ? ["aqua ring"] : [],
                (Object.keys(this._boosts) as dex.BoostName[])
                    .filter(key => this._boosts[key] !== 0)
                    .map(key => `${key}: ${plus(this._boosts[key])}`),
                this.confusion.isActive ? [this.confusion.toString()] : [],
                this.curse ? ["cursed"] : [],
                this.embargo.isActive ? [this.embargo.toString()] : [],
                this.focusenergy ? ["focus energy"] : [],
                this.ingrain ? ["ingrain"] : [],
                this.leechseed ? ["leech seed"] : [],
                this._lockOnTurns.isActive
                    ? [this._lockOnTurns.toString()]
                    : [],
                this._lockedOnBy ? ["target of lockon"] : [],
                this.magnetrise.isActive ? [this.magnetrise.toString()] : [],
                this.nightmare ? ["nightmare"] : [],
                this._perish > 0
                    ? [`perish in ${pluralTurns(this._perish)}`]
                    : [],
                this.powertrick ? ["power trick"] : [],
                this.substitute ? ["has substitute"] : [],
                this.suppressAbility ? ["suppressed ability"] : [],
                // TODO: Be more specific with trapping info.
                this._trapped ? ["trapped"] : [],
                this._trapping ? ["trapping"] : [],
                this.lastMove ? [`last used ${this.lastMove}`] : [],
                this.attract ? ["attracted"] : [],
                this.bide.isActive ? [this.bide.toString()] : [],
                this.charge.isActive ? [this.charge.toString()] : [],
                this.choiceLock ? ["choice lock " + this.choiceLock] : [],
                this.damaged ? ["damaged this turn"] : [],
                this.defensecurl ? ["defense curl"] : [],
                this.destinybond ? ["destiny bond"] : [],
                this._disabled.ts.isActive
                    ? [`${this._disabled.move} ${this._disabled.ts.toString()}`]
                    : [],
                this._encore.ts.isActive
                    ? [`${this._encore.move} ${this._encore.ts.toString()}`]
                    : [],
                this.flashfire ? ["flash fire"] : [],
                this.focus ? ["preparing focuspunch"] : [],
                this.grudge ? ["grudge"] : [],
                this.healblock.isActive ? [this.healblock.toString()] : [],
                this.identified ? [this.identified] : [],
                this.imprison ? ["imprison"] : [],
                this.lockedMove.isActive ? [this.lockedMove.toString()] : [],
                this.magiccoat ? ["magic coat"] : [],
                this.micleberry ? ["micle berry"] : [],
                this.minimize ? ["minimize"] : [],
                this.mirrormove ? ["last targeted by " + this.mirrormove] : [],
                this.mudsport ? ["mud sport"] : [],
                this.mustRecharge ? ["must recharge"] : [],
                // Note: Override traits are handled by Pokemon#toString().
                this.rage ? ["rage"] : [],
                this.rollout.isActive ? [this.rollout.toString()] : [],
                this.roost ? ["roosting"] : [],
                this.slowstart.isActive ? [this.slowstart.toString()] : [],
                this.snatch ? ["snatching"] : [],
                this._stallTurns
                    ? [pluralTurns("stalled", this._stallTurns - 1)]
                    : [],
                this._stockpile > 0 ? [`stockpile ${this._stockpile}`] : [],
                this.taunt.isActive ? [this.taunt.toString()] : [],
                this.torment ? ["torment"] : [],
                this.transformed ? ["transformed"] : [],
                this.twoTurn.isActive
                    ? [`preparing ${this.twoTurn.toString()}`]
                    : [],
                this.uproar.isActive ? [this.uproar.toString()] : [],
                this.watersport ? ["water sport"] : [],
                this._willTruant ? ["truant next turn"] : [],
                this.yawn.isActive ? [this.yawn.toString()] : [],
            )
            .join(", ")}]`;
    }
}
