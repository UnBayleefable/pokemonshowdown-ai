import {SideID} from "@pkmn/sim";
import * as dex from "../dex";
import {Hp, ReadonlyHp} from "./Hp";
import {
    MajorStatusCounter,
    ReadonlyMajorStatusCounter,
} from "./MajorStatusCounter";
import {Move} from "./Move";
import {Moveset, ReadonlyMoveset} from "./Moveset";
import {PokemonTraits, ReadonlyPokemonTraits} from "./PokemonTraits";
import {PossibilityClass, ReadonlyPossibilityClass} from "./PossibilityClass";
import {ReadonlyTeam, Team} from "./Team";
import {ReadonlyVolatileStatus, VolatileStatus} from "./VolatileStatus";

/** Readonly {@link Pokemon} representation. */
export interface ReadonlyPokemon {
    /** Reference to the parent Team. */
    readonly team?: ReadonlyTeam;
    /** Whether this is the current active pokemon. */
    readonly active: boolean;

    /** Current pokemon traits. May be overridden by {@link volatile}. */
    readonly traits: ReadonlyPokemonTraits;
    /** Base pokemon traits. */
    readonly baseTraits: ReadonlyPokemonTraits;

    /** Current ability for this Pokemon, or the empty string if unknown. */
    readonly ability: string;

    /** Current species for this Pokemon. or the empty string if unknown. */
    readonly species: string;

    /** Current types for this Pokemon. */
    readonly types: readonly dex.Type[];

    // TODO: Use dex.Item wrappers instead of data.
    /** Current reference to held item possibilities. */
    readonly item: ReadonlyPossibilityClass<string, dex.ItemData>;
    /** Current reference to last consumed item possibilities. */
    readonly lastItem: ReadonlyPossibilityClass<string, dex.ItemData>;

    /** Pokemon's current moveset. */
    readonly moveset: ReadonlyMoveset;
    /** Pokemon's base moveset. */
    readonly baseMoveset: ReadonlyMoveset;

    /** Pokemon's gender. M=male, F=female, null=genderless. */
    readonly gender?: string | null;

    /** Current Hidden Power type possibility. */
    readonly hpType: ReadonlyPossibilityClass<dex.HpType>;

    /** Happiness value between 0 and 255, or null if unknown. */
    readonly happiness: number | null;

    /** Info about the pokemon's hit points. */
    readonly hp: ReadonlyHp;
    /** Whether this pokemon is fainted. */
    readonly fainted: boolean;

    /** Major status turn counter manager. */
    readonly majorStatus: ReadonlyMajorStatusCounter;

    /**
     * Whether the pokemon is definitely grounded or ungrounded, or null if
     * there isn't enough information.
     */
    readonly grounded: boolean | null;

    /** Minor status conditions. Cleared on switch. */
    readonly volatile: ReadonlyVolatileStatus;
}

/** Holds all the possibly incomplete info about a pokemon. */
export class Pokemon implements ReadonlyPokemon {
    /** @override */
    public readonly team?: Team;
    /** @override */
    public get active(): boolean {
        return !!this._volatile;
    }

    /** @override */
    public get traits(): PokemonTraits {
        return this._volatile?.overrideTraits ?? this.baseTraits;
    }
    /** @override */
    public get baseTraits(): PokemonTraits {
        return this._baseTraits;
    }
    private _baseTraits: PokemonTraits;

    /** @override */
    public get ability(): string {
        return this.traits.ability.definiteValue ?? "";
    }
    /** Checks whether the Pokemon can currently have the given ability. */
    public canHaveAbility(ability: string): boolean {
        return this.traits.ability.isSet(ability);
    }
    /**
     * Narrows the current ability possibility or overrides it in the
     * VolatileStatus if narrowing isn't possible.
     */
    public setAbility(...ability: string[]): void {
        if (ability.every(a => this.canHaveAbility(a))) {
            this.traits.ability.narrow(ability);
        } else {
            this.volatile.overrideTraits =
                this.volatile.overrideTraits!.divergeAbility(...ability);
        }
    }

    /** @override */
    public get species(): string {
        return this.traits.species.name;
    }
    /**
     * Does a form change for this Pokemon.
     *
     * @param species The species to change into.
     * @param level New form's level for stat calcs.
     * @param perm Whether this is a permanent form change. Default false. Can
     * be overridden to false if `#volatile.transformed` is true.
     */
    public formChange(species: string, level: number, perm = false): void {
        if (!Object.hasOwnProperty.call(dex.pokemon, species)) {
            throw new Error(`Unknown species ${species}`);
        }
        const data = dex.pokemon[species];

        if (perm && !this.volatile.transformed) {
            // Completely diverge from original base traits.
            // TODO: What changes stay the same?
            // TODO: How to recover stat ranges? Need evs/ivs/etc.
            this._baseTraits = PokemonTraits.base(data, level);
            this.volatile.overrideTraits = this._baseTraits.volatile();
        }
        // Completely diverge from current override traits.
        else this.volatile.overrideTraits = PokemonTraits.base(data, level);
    }

    /** @override */
    public get types(): readonly dex.Type[] {
        let result = [...this.traits.types];
        if (this._volatile) result.push(this._volatile.addedType);
        result = result.filter(
            type =>
                type !== "???" &&
                // Roost removes flying type.
                (!this._volatile?.roost || type !== "flying"),
        );
        if (result.length <= 0) return ["???"];
        return result;
    }

    /** @override */
    public get item(): PossibilityClass<string, dex.ItemData> {
        return this._item;
    }
    /** @override */
    public get lastItem(): PossibilityClass<string, dex.ItemData> {
        return this._lastItem;
    }
    /**
     * Indicates that an item has been revealed or gained.
     *
     * @param item Item id name.
     * @param gained Whether the item was gained just now or being revealed. If
     * `"recycle"`, the item was recovered via the Recycle move. Default false.
     */
    public setItem(item: string, gained: boolean | "recycle" = false): void {
        // Override any possibilities of other items.
        if (gained) {
            // Item was gained via the recycle move.
            if (gained === "recycle") {
                // Recycled item must match tracked lastItem.
                if (!this._lastItem.isSet(item)) {
                    throw new Error(
                        `Pokemon gained '${item}' via Recycle ` +
                            "but last item was '" +
                            (this._lastItem.definiteValue ?? "<unknown>") +
                            "'",
                    );
                }
                this._item = this._lastItem;
                this._item.narrow(item);
                // Recycle also resets lastItem.
                this._lastItem = new PossibilityClass(dex.items, "none");
            }
            // If it was just gained through normal needs we don't need to do
            // anything else.
            else this._item = new PossibilityClass(dex.items, item);
        }
        // Item is not gained but is just now being revealed.
        else this._item.narrow(item);

        if (this._volatile) {
            // (De)activate unburden ability if the pokemon has it.
            this._volatile.unburden = item === "none" && !!gained;
            // Remove choice lock if we didn't gain a choice item.
            if (!dex.items[item].isChoice) this._volatile.choiceLock = null;
        }
    }
    /**
     * Indicates that an item was just removed from this Pokemon.
     *
     * @param consumed False if the item was removed or transferred. If the item
     * was consumed (i.e., it can be brought back using the Recycle move), this
     * is set either to the item's name or just true if the item is unknown.
     */
    public removeItem(consumed: string | boolean): void {
        if (consumed) {
            // Move current item possibility object to the lastItem slot.
            this._lastItem = this._item;
            // If the current item didn't match the consumed param, this should
            // throw an overnarrowing error.
            // TODO: Guard this or replace the overnarrowing exception message
            // in a parameter to be more useful.
            if (typeof consumed === "string") this._lastItem.narrow(consumed);
        }

        // This should reset the _item reference so there aren't any duplicates.
        this.setItem("none", true /*gained*/);
    }
    /**
     * Swaps items with another Pokemon.
     *
     * @param target The Pokemon to swap items with.
     */
    public swapItems(target: Pokemon): void {
        [this._item, target._item] = [target._item, this._item];
    }
    private _item = new PossibilityClass(dex.items);
    private _lastItem = new PossibilityClass(dex.items, "none");

    /** @override */
    public get moveset(): Moveset {
        if (this._volatile) return this._volatile.overrideMoveset;
        return this.baseMoveset;
    }
    /** Overrides a move slot via Mimic until switched out. */
    public mimic(name: string): void {
        // Mimicked moves have 5 pp and maxed maxpp.
        this.moveset.replace("mimic", new Move(name, "max", 5));
        // Can't be choice locked if the move we're locked into is replaced.
        if (this._volatile) this._volatile.choiceLock = null;
    }
    /** Permanently replaces a move slot via Sketch. */
    public sketch(name: string): void {
        // Sketched moves have no pp ups applied.
        this.moveset.replace("sketch", new Move(name, "min"), true /*base*/);
        // Can't be choice locked if the move we're locked into is replaced.
        if (this._volatile) this._volatile.choiceLock = null;
    }
    /** @override */
    public readonly baseMoveset: Moveset;

    /** @override */
    public gender?: string | null;

    /** @override */
    public get hpType(): PossibilityClass<dex.HpType> {
        // TODO(gen>=5): Always use baseTraits.
        return this.traits.stats.hpType;
    }

    /** @override */
    public get happiness(): number | null {
        return this._happiness;
    }
    public set happiness(value: number | null) {
        if (value === null) this._happiness = null;
        else this._happiness = Math.max(0, Math.min(value, 255));
    }
    private _happiness: number | null = null;

    /** @override */
    public readonly hp = new Hp();
    /** @override */
    public get fainted(): boolean {
        return this.hp.current === 0;
    }

    /** @override */
    public readonly majorStatus = new MajorStatusCounter().onCure(() => {
        // TODO: Early Bird inference?
        // If the pokemon was asleep before, nightmare should be cured now.
        if (this._volatile) this._volatile.nightmare = false;
    });

    /** @override */
    public get grounded(): boolean | null {
        // Gravity/ingrain override all ground checks.
        if (this.team?.state?.status.gravity.isActive) {
            return true;
        }
        const v = this._volatile;
        if (v?.ingrain) return true;

        // Look for an ability-suppressing effect.
        const ignoreAbility = v?.suppressAbility;
        const ability = ignoreAbility ? undefined : this.traits.ability;

        // Look for an item-suppressing ability/effect.
        let ignoreItem: boolean | null = !!v?.embargo.isActive;
        if (!ignoreItem && ability) {
            // If all possible abilities ignore item, ignoreItem=true.
            // If some don't, ignoreItem=maybe (null).
            // If all don't, ignoreItem=false.
            let allIgnoreItem = true;
            let oneIgnoreItem = false;
            for (const n of ability.possibleValues) {
                if (!ability.map[n].flags?.ignoreItem) allIgnoreItem = false;
                else oneIgnoreItem = true;
            }
            if (allIgnoreItem && oneIgnoreItem) ignoreItem = true;
            else if (!allIgnoreItem && !oneIgnoreItem) ignoreItem = false;
            else ignoreItem = null;
        }

        // Whether the return value cannot be false, i.e. a prior grounded check
        // could've overridden later ungroundedness checks but we don't have
        // enough information to know the result of that check.
        let maybeGrounded = false;

        // Ironball causes grounding.
        if (this._item.definiteValue === "ironball") {
            // Item is definitely working so definitely grounded.
            if (ignoreItem === false) return true;
            // Item may be working so could be grounded.
            if (ignoreItem === null) maybeGrounded = true;
        }
        // Can't rule out ironball.
        else if (this._item.isSet("ironball") && ignoreItem !== true) {
            maybeGrounded = true;
        }

        // Magnetrise lifts non-Levitate/non-flying-types but is overridden by
        // ironball and other prior checks.
        if (v?.magnetrise.isActive) return maybeGrounded ? null : false;

        // Whether the return value cannot be true (similar to maybeGrounded).
        let maybeUngrounded = false;

        // Levitate ability lifts non-flying types.
        if (
            ability &&
            [...ability.possibleValues].some(
                n => ability.map[n].on?.block?.move?.type === "ground",
            )
        ) {
            // Levitate is definitely there so definitely ungrounded unless
            // ironball negates it.
            if (ability.definiteValue) return maybeGrounded ? null : false;
            // Levitate may be there so could be ungrounded.
            maybeUngrounded = true;
        }

        // Flying type lifts.
        if (!this.types.includes("flying")) {
            return maybeUngrounded ? null : true;
        }
        return maybeGrounded ? null : false;
    }

    /** @override */
    public get volatile(): VolatileStatus {
        if (this._volatile) return this._volatile;
        throw new Error("Pokemon is currently inactive");
    }
    /** Minor status conditions. Cleared on switch. */
    private _volatile: VolatileStatus | null = null;

    /**
     * Creates a Pokemon.
     *
     * @param species Species name.
     * @param level Level for stat calcs.
     * @param moves Optional moveset to fill in.
     * @param team Optional reference to the parent Team.
     */
    public constructor(
        species: string,
        level = 100,
        moves?: readonly string[],
        team?: Team,
    ) {
        if (!Object.hasOwnProperty.call(dex.pokemon, species)) {
            throw new Error(`Unknown species ${species}`);
        }
        const data = dex.pokemon[species];

        this._baseTraits = PokemonTraits.base(data, level);

        if (moves) this.baseMoveset = new Moveset(moves, moves.length);
        else this.baseMoveset = new Moveset(data.movepool);

        if (team) this.team = team;
    }

    /** Indicates that the pokemon spent its turn being inactive. */
    public inactive(): void {
        this.volatile.inactive();
    }

    /** Called at the beginning of every turn to update temp statuses. */
    public preTurn(): void {
        if (this.active) this.volatile.preTurn();
    }

    /** Called at the end of every turn to update temp statuses. */
    public postTurn(): void {
        this.majorStatus.postTurn();
        if (this.active) this.volatile.postTurn();
    }

    /**
     * Switches this Pokemon in as if it replaces the given Pokemon.
     *
     * @param mon Pokemon to replace with. If falsy, the Pokemon is switching
     * into an empty slot.
     * @param selfSwitch Self-switch status if any.
     */
    public switchInto(
        mon?: Pokemon | null,
        selfSwitch?: dex.SelfSwitchType | null,
    ): void {
        // Create our own volatile status object.
        if (!mon?._volatile) this._volatile = new VolatileStatus();
        else {
            // Transfer volatile status object.
            this._volatile = mon._volatile;
            mon._volatile = null;
        }

        // Switch out provided mon.

        // Toxic counter resets on switch.
        if (mon?.majorStatus.current === "tox") mon.majorStatus.resetCounter();

        // Clear all Mirror Move entries for the mon being switched out.
        const teams = mon?.team?.state?.teams ?? {};
        for (const sideId in teams) {
            if (!Object.hasOwnProperty.call(teams, sideId)) continue;
            const team = teams[sideId as SideID];
            if (!team) continue;
            if (team === this.team) continue;
            // Uninitialized team.
            if (team.size <= 0) continue;
            team.active.volatile.mirrormove = null;
        }

        // Switch in new mon.

        // Handle batonpass.
        if (selfSwitch === "copyvolatile") {
            // Leave self-switch passable.
            this._volatile.clearUnpassable();
            this._volatile.batonPass(this.majorStatus.current ?? undefined);
        } else if (selfSwitch) {
            this._volatile.clearPassable();
            // Leave self-switch passable statuses.
            this._volatile.clearUnpassable();
        } else this._volatile.clear();

        // Make sure volatile has updated info about this pokemon
        this._volatile.overrideMoveset.link(this.baseMoveset, "base");
        this._volatile.overrideTraits = this.baseTraits.volatile();
        if (selfSwitch) this._volatile.selfSwitch();
    }

    /** Indicates that the pokemon has fainted. */
    public faint(): void {
        this.hp.set(0, 0);
    }

    /**
     * Called when this pokemon is being trapped by an unknown ability.
     *
     * @param by Opponent pokemon with the trapping ability.
     */
    public trapped(by: Pokemon): void {
        // Opposing pokemon can have only one of these abilities here.
        const abilities = new Set<string>();

        // TODO: Add features of these abilities to dex data.
        // Arenatrap traps grounded pokemon.
        if (this.grounded !== false) abilities.add("arenatrap");

        // Magnetpull traps steel types.
        if (this.types.includes("steel")) abilities.add("magnetpull");

        // Shadowtag traps all pokemon who don't also have it.
        if (this.ability !== "shadowtag") abilities.add("shadowtag");

        // Infer possible trapping abilities.
        if (abilities.size > 0) by.traits.ability.narrow(abilities);
        else throw new Error("Can't figure out why we're trapped");
    }

    /** Indicates that the pokemon has transformed into its target. */
    public transform(target: Pokemon): void {
        this.volatile.transformed = true;
        // Choice lock resets on transform.
        this.volatile.choiceLock = null;

        // Copy boosts.
        for (const stat of dex.boostKeys) {
            this.volatile.boosts[stat] = target.volatile.boosts[stat];
        }

        // Link moveset inference.
        this.volatile.overrideMoveset.link(target.moveset, "transform");

        // Copy traits but preserve some according to transform rules.
        this.volatile.overrideTraits = target.traits.transform(this.traits);
        this.volatile.addedType = target.volatile.addedType;
    }

    // istanbul ignore next: Only used for logging.
    /**
     * Encodes all pokemon data into a string.
     *
     * @param indent Indentation level to use.
     * @param hpPercent Whether to report HP as a percentage.
     * @returns The Pokemon in string form.
     */
    public toString(indent = 0, hpPercent?: boolean): string {
        const s = " ".repeat(indent);
        return `\
${s}${this.stringifySpecies()}${this.gender ? ` ${this.gender}` : ""} \
${this.hp.toString(hpPercent)}
${s}stats: ${this.stringifyStats()}
${s}status: ${this.majorStatus.toString()}
${s}active: ${this.active}\
${this.active ? `\n${s}volatile: ${this.volatile.toString()}` : ""}
${s}types: ${this.stringifyTypes()}
${s}ability: ${this.stringifyAbility()}
${s}item: ${this.stringifyItem()}
${s}grounded: ${this.stringifyGrounded()}
${this.stringifyMoveset(indent)}`;
    }

    // istanbul ignore next: Only used for logging.
    /** Displays the species as well as whether it's overridden. */
    private stringifySpecies(): string {
        const base = this.baseTraits.species;
        const override = this._volatile?.overrideTraits?.species;

        if (!override || override === base) return base.name;
        return `${override.name} (base: ${base.name})`;
    }

    // istanbul ignore next: Only used for logging.
    /** Displays stat data as well as whether it's overridden. */
    private stringifyStats(): string {
        const base = this.baseTraits.stats;
        const override = this._volatile?.overrideTraits?.stats;

        if (!override || base === override) return base.toString();
        return `${override} (base: ${base})`;
    }

    // istanbul ignore next: Only used for logging.
    /** Displays type values. */
    private stringifyTypes(): string {
        const base = this.baseTraits.types;
        const override = this._volatile?.overrideTraits?.types;
        if (!override || base === override) return `[${base.join(", ")}]`;
        return `[${override.join(", ")}] (base: [${base.join(", ")}])`;
    }

    // istanbul ignore next: Only used for logging.
    /** Displays the possible/overridden/suppressed values of the ability. */
    private stringifyAbility(): string {
        const base = this.baseTraits.ability;
        const baseStr = `${base.definiteValue ? "" : "possibly "}${base}`;
        const override = this._volatile?.overrideTraits?.ability;

        if (!override || base === override) return baseStr;

        const overrideStr =
            (override.definiteValue ? "" : "possibly ") + override.toString();
        return `${overrideStr} (base: ${baseStr})`;
    }

    // istanbul ignore next: Only used for logging.
    /** Displays the last and current values of the held item field. */
    private stringifyItem(): string {
        const baseVal = this._item.definiteValue;
        const base = baseVal ? baseVal : "<unrevealed>";

        const lastVal = this._lastItem.definiteValue;
        const last = lastVal ? lastVal : "<unknown>";

        if (last === "none") return base;
        return `${base} (consumed: ${last})`;
    }

    // istanbul ignore next: Only used for logging.
    /** Displays result of grounded check. */
    private stringifyGrounded(): string {
        const {grounded} = this;
        if (grounded === true) return "true";
        if (grounded === false) return "false";
        return "maybe";
    }

    // istanbul ignore next: Only used for logging.
    /** Displays moveset data with happiness and possibly overridden HPType. */
    private stringifyMoveset(indent = 0): string {
        const s = " ".repeat(indent);

        // Stringify hp type
        const {hpType} = this.baseTraits.stats;
        const hpTypeStr =
            (hpType.definiteValue ? "" : "possibly ") + hpType.toString();

        // Stringify moveset.
        let result =
            `${s}moveset:\n` +
            this.moveset.toString(indent + 4, this._happiness, hpTypeStr);

        if (this._volatile) {
            // Moveset property was actually override moveset.
            // Need to also include base moveset.

            // Stringify base Hidden Power type.
            const baseHpType = this.baseTraits.stats.hpType;
            const baseHpTypeStr =
                (baseHpType.definiteValue ? "" : "possibly ") +
                baseHpType.toString();

            // Stringify base moveset.
            result +=
                `\n${s}base moveset:\n` +
                this.baseMoveset.toString(
                    indent + 4,
                    this._happiness,
                    baseHpTypeStr,
                );
        }

        return result;
    }
}
