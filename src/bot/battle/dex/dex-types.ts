/** Names of certain stats. */
export type StatName = "hp" | "atk" | "def" | "spa" | "spd" | "spe";

const typesInternal =
{
    bug: true, dark: true, dragon: true, fire: true, flying: true, ghost: true,
    electric: true, fighting: true, grass: true, ground: true, ice: true,
    normal: true, poison: true, psychic: true, rock: true, steel: true,
    water: true
};
/** Set of Type names. */
export const types: Readonly<typeof typesInternal> = typesInternal;
/** The different types a pokemon can have. */
export type Type = keyof typeof typesInternal;

/** Format of each pokemon entry in the Dex. */
export interface PokemonData
{
    /** ID number in the Pokedex. */
    readonly id: number;
    /** Unique ID number that belongs to a single pokemon or form. */
    readonly uid: number;
    /** Species name. */
    readonly species: string;
    /** Species this pokemon is derived from. */
    readonly baseSpecies?: string;
    /** Alternate form this pokemon is derived from. */
    readonly baseForm?: string;
    /** Alternate form name. */
    readonly form?: string;
    /** Letter of the alternate form. */
    readonly formLetter?: string;
    /** Alternate forms of this pokemon. */
    readonly otherForms?: string[];
    /** Id names of the abilities this species can have. */
    readonly abilities: string[];
    /** Types of the pokemon. */
    readonly types: ReadonlyArray<Type>;
    /** Base stats. */
    readonly baseStats: {readonly [S in StatName]: number};
    /** Pokemon's weight in kg. Affected by certain moves. */
    readonly weightkg: number;
}

/** Format for each move entry in the Dex. */
export interface MoveData
{
    /** Unique identifier number. */
    readonly uid: number;
    /** Target of the move. */
    readonly target: MoveTarget;
    /** Base power points. */
    readonly pp: number;
    /** Whether this move causes the user to switch. */
    readonly selfSwitch?: SelfSwitch;
    /** Self-inflicted volatile status effect. */
    readonly volatileEffect?: VolatileEffect;
}

/** Types of targets for a move. */
export type MoveTarget = "adjacentAlly" | "adjacentAllyOrSelf" | "adjacentFoe" |
    "all" | "allAdjacent" | "allAdjacentFoes" | "allySide" | "allyTeam" |
    "any" | "foeSide" | "normal" | "randomNormal" | "scripted" | "self";

/**
 * Whether this move causes the user to switch, but `copyvolatile` additionally
 * transfers volatile status conditions.
 */
export type SelfSwitch = boolean | "copyvolatile";

/** Volatile status effects for moves. */
export type VolatileEffect = "lockedmove" | "mustrecharge" | "rage" | "roost" |
    "uproar";

/** Type info for the dex variable. */
export interface Dex
{
    /** Contains info about each pokemon. */
    readonly pokemon: {readonly [species: string]: PokemonData};
    /** Total number of pokemon species. */
    readonly numPokemon: number;
    /** Maps ability id name to an id number. */
    readonly abilities: {readonly [name: string]: number};
    /** Total number of abilities. */
    readonly numAbilities: number;
    /** Maps a move id name to its id number. */
    readonly moves: {readonly [name: string]: MoveData};
    /** Total number of moves. */
    readonly numMoves: number;
    /** Maps an item id name to its id number. */
    readonly items: {readonly [name: string]: number};
    /** Total number of items. */
    readonly numItems: number;
}
