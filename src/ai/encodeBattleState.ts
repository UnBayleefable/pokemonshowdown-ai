import * as dex from "../battle/dex/dex";
import { BoostName, boostNames, hpTypes, majorStatuses, numHPTypes,
    rolloutMoves, Type, types, weatherItems } from "../battle/dex/dex-util";
import { ReadonlyBattleState } from "../battle/state/BattleState";
import { ReadonlyHP } from "../battle/state/HP";
import { ReadonlyItemTempStatus } from "../battle/state/ItemTempStatus";
import { ReadonlyMajorStatusCounter } from "../battle/state/MajorStatusCounter";
import { ReadonlyMove } from "../battle/state/Move";
import { Moveset, ReadonlyMoveset } from "../battle/state/Moveset";
import { ReadonlyPokemon } from "../battle/state/Pokemon";
import { ReadonlyPokemonTraits } from "../battle/state/PokemonTraits";
import { ReadonlyPossibilityClass } from "../battle/state/PossibilityClass";
import { ReadonlyRoomStatus } from "../battle/state/RoomStatus";
import { ReadonlyStatRange, StatRange } from "../battle/state/StatRange";
import { ReadonlyStatTable } from "../battle/state/StatTable";
import { ReadonlyTeam, Team } from "../battle/state/Team";
import { ReadonlyTeamStatus } from "../battle/state/TeamStatus";
import { ReadonlyTempStatus } from "../battle/state/TempStatus";
import { ReadonlyVariableTempStatus } from "../battle/state/VariableTempStatus";
import { ReadonlyVolatileStatus } from "../battle/state/VolatileStatus";

/**
 * One-hot encodes a class of values.
 * @param id 0-based integer to encode.
 * @param length Number of classes to encode.
 * @param one Value to use for the one. Default `1`.
 * @param zero Value to use for the zero. Default `0`.
 */
export function oneHot(id: number | null, length: number, one = 1, zero = 0):
    number[]
{
    return Array.from({length}, (v, i) => i === id ? one : zero);
}

/**
 * Interpolates max status duration and current number of turns. Use this when
 * the duration (or max possible duration) of a status is known.
 * @param turns Number of turns the status has been active (including current
 * turn). E.g. if the status started during this turn and the end of the current
 * turn hasn't been reached yet, `turns` should be 1, and should be incremented
 * at the end of each turn. Values higher than `duration` will return zero.
 * @param duration Maximum amount of turns the status will last. Should be the
 * maximum value of `turns`.
 * @returns Status turn data for encoder functions as a "likelihood" that the
 * status will persist on the next turn.
 */
export function limitedStatusTurns(turns: number, duration: number): number
{
    // turns left excluding current turn / total expected duration
    if (turns <= 0) return 0;
    return Math.max(0, (duration - turns + 1) / duration);
}

/**
 * Formats possibility class info into an array of numbers. The returned array
 * will have a length corresponding to the number of keys in the given object's
 * mapping.
 * @param pc PossibilityClass to encode.
 * @param getId Extracts a unique 0-based contiguous id from TData.
 */
export function encodePossiblityClass<TData>(
    pc: ReadonlyPossibilityClass<TData>, getId: (data: TData) => number):
    number[]
{
    const size = pc.possibleValues.size;
    const result = Array.from({length: Object.keys(pc.map).length}, () => 0);
    if (size > 0)
    {
        const sumReciprocal = 1 / size;
        for (const value of pc.possibleValues)
        {
            result[getId(pc.map[value])] = sumReciprocal;
        }
    }
    return result;
}

/** Length of the return value of `encodeTempStatus()`. */
export const sizeTempStatus = 1;

/** Formats temporary status info into an array of numbers. */
export function encodeTempStatus(ts: ReadonlyTempStatus): number[]
{
    return [limitedStatusTurns(ts.turns, ts.duration)];
}

/**
 * Formats temporary status info into an array of numbers. Length is the number
 * of different types that can occupy this object plus one.
 */
export function encodeItemTempStatus<TStatusType extends string>(
    its: ReadonlyItemTempStatus<TStatusType>): number[]
{
    // modify one-hot value to interpolate status turns/duration
    let one: number;
    // not applicable
    if (its.type === "none") one = 0;
    // infinite duration
    else if (its.duration === null) one = 1;
    // currently assuming short duration but could have extension item
    else if (its.duration === its.durations[0] && its.source &&
        !its.source.definiteValue &&
        its.source.possibleValues.has(its.items[its.type]))
    {
        // take average of both durations since either is likely
        // TODO: interpolate instead by likelihood that the source has the item
        one = limitedStatusTurns(its.turns + 1,
            (its.durations[0] + its.durations[1]) / 2);
    }
    // extension item possibility (and therefore duration) is definitely known
    else one = limitedStatusTurns(its.turns + 1, its.duration);

    return [
        // TODO: guarantee order
        ...(Object.keys(its.items) as TStatusType[])
            .map(t => t === its.type ? one : 0),
        // indicate whether the extended duration is being used
        its.duration === its.durations[1] ? 1 : 0
    ];
}

/**
 * Formats temporary status info into an array of numbers. Length is the number
 * of different types that can occupy this object.
 */
export function encodeVariableTempStatus<TStatusType extends string>(
    vts: ReadonlyVariableTempStatus<TStatusType>): number[]
{
    // modify one-hot value to interpolate status turns/duration
    let one: number;
    if (vts.type === "none") one = 0; // not applicable
    else one = limitedStatusTurns(vts.turns + 1, vts.duration);

    // TODO: guarantee order?
    return (Object.keys(vts.map) as TStatusType[])
        .map(t => t === vts.type ? one : 0);
}

/** Length of the return value of `encodeStatRange()`. */
export const sizeStatRange = /*min*/1 + /*max*/1 + /*base*/1;

/** Max possible base stat. */
export const maxBaseStat = 255;
/** Max possible normal stat. */
export const maxStat = StatRange.calcStat(/*hp*/false, maxBaseStat, 100, 252,
    31, 1.1);
/** Max possible hp stat. */
export const maxStatHP = StatRange.calcStat(/*hp*/true, maxBaseStat, 100, 252,
    31, 1);

/** Formats stat range info into an array of numbers. */
export function encodeStatRange(stat: ReadonlyStatRange): number[];
/**
 * Formats stat range info into an array of numbers where the StatRange object
 * is unknown.
 * @param hp Whether this is an HP stat.
 */
export function encodeStatRange(stat: null, hp: boolean): number[];
/**
 * Formats stat range info into an array of numbers where the StatRange object
 * is nonexistent.
 */
export function encodeStatRange(stat?: undefined): number[];
export function encodeStatRange(stat?: ReadonlyStatRange | null,
    hp?: boolean): number[]
{
    // average max stat as a guess
    if (stat === null) return [0.5, 0.5, 0.5];
    if (!stat) return [-1, -1, -1];

    // find highest stat value for this specific StatRange (hp or normal stat)
    const normal = hp || (stat && stat.hp) ? maxStatHP : maxStat;

    // normalize based on max possible stats
    return [
        (stat.min ?? normal / 2) / normal,
        (stat.max ?? normal / 2) / normal,
        (stat.base ?? 127.5) / maxBaseStat
    ];
}

/** Length of the return value of `encodeStatTable()`. */
export const sizeStatTable = /*stat ranges*/6 * sizeStatRange + /*level*/1 +
    numHPTypes;

/**
 * Formats stat table info into an array of numbers. Null means unknown while
 * undefined means nonexistent.
 */
export function encodeStatTable(stats?: ReadonlyStatTable | null): number[]
{
    if (stats === null)
    {
        // unknown
        return [
            // stat ranges
            ...Array(6)
                .fill(encodeStatRange(null, /*hp*/true), 0, 1)
                .fill(encodeStatRange(null, /*hp*/false), 1, 6)
                .reduce((a, b) => a.concat(b)),
            0, // level (TODO: guess)
            ...hpTypeKeys.map(() => 1 / hpTypeKeys.length) // hp type
        ];
    }
    if (!stats)
    {
        // nonexistent
        return [
            // stat ranges
            ...Array(6)
                .fill(encodeStatRange(), 0, 6)
                .reduce((a, b) => a.concat(b)),
            -1, // level
            ...Array.from(hpTypeKeys, () => -1) // hp type
        ];
    }

    return [
        ...[stats.hp, stats.atk, stats.def, stats.spa, stats.spd, stats.spe]
            .map(encodeStatRange).reduce((a, b) => a.concat(b)),
        (stats.level || 0) / 100, // normalize level using max level (100)
        ...encodePossiblityClass(stats.hpType, i => i)
    ];
}

// TODO: guarantee order? move to dex-util once figured out
/** Types without `???` type. */
const filteredTypes = Object.keys(types).filter(t => t !== "???") as Type[];

/** Length of the return value of `encodePokemonTraits()`. */
export const sizePokemonTraits = /*ability*/dex.numAbilities +
    /*species*/dex.numPokemon + /*stats*/sizeStatTable +
    /*types*/filteredTypes.length;

/**
 * Formats trait info into an array of numbers. Null means unknown while
 * undefined means nonexistent.
 */
export function encodePokemonTraits(traits?: null): number[];
/**
 * Formats trait info into an array of numbers.
 * @param traits Traits object.
 * @param addedType Optional third type.
 */
export function encodePokemonTraits(traits: ReadonlyPokemonTraits,
    addedType?: Type): number[];
export function encodePokemonTraits(traits?: ReadonlyPokemonTraits | null,
    addedType?: Type): number[]
{
    if (traits === null)
    {
        // unknown
        return [
            ...Array.from({length: dex.numAbilities + dex.numPokemon}, () => 0),
            ...encodeStatTable(null),
            // could be any one or two of these types (avg 1 and 2)
            ...filteredTypes.map(() => 1.5 / filteredTypes.length)
        ];
    }
    if (!traits)
    {
        // nonexistent
        return [
            ...Array.from({length: dex.numAbilities + dex.numPokemon},
                () => -1),
            ...encodeStatTable(), ...filteredTypes.map(() => -1)
        ];
    }

    return [
        ...encodePossiblityClass(traits.ability, d => d),
        ...oneHot(traits.data.uid, dex.numPokemon),
        ...encodeStatTable(traits.stats),
        ...filteredTypes.map(type =>
            traits.types.includes(type) || type === addedType ? 1 : 0)
    ];
}

/** Length of the return value of `encodeVolatileStatus()`. */
export const sizeVolatileStatus =
    /*aqua ring*/1 + /*boostable stats*/Object.keys(boostNames).length +
    /*confusion*/sizeTempStatus + /*curse*/1 + /*embargo*/sizeTempStatus +
    /*focus energy*/1 + /*gastro acid*/1 + /*ingrain*/1 + /*leech seed*/1 +
    /*lockon*/2 * sizeTempStatus + /*magnet rise*/sizeTempStatus +
    /*nightmare*/1 + /*perish*/1 + /*power trick*/1 + /*substitute*/1 +
    /*trapped*/1 + /*trapping*/1 + /*attract*/1 + /*bide*/sizeTempStatus +
    /*charge*/sizeTempStatus + /*defense curl*/1 + /*destiny bond*/1 +
    /*disabled moves*/(dex.numMoves * sizeTempStatus) + /*grudge*/1 +
    /*heal block*/sizeTempStatus + /*identified*/2 + /*imprison*/1 +
    /*locked move variants*/dex.numLockedMoves + /*minimize*/1 +
    /*mud sport*/1 + /*must recharge*/1 + /*override traits*/sizePokemonTraits +
    /*rage*/1 + /*rollout*/Object.keys(rolloutMoves).length + /*roost*/1 +
    /*slow start*/sizeTempStatus + /*snatch*/1 + /*stall fail rate*/1 +
    /*stockpile*/1 + /*taunt*/sizeTempStatus + /*torment*/1 + /*transformed*/1 +
    /*two-turn*/dex.numTwoTurnMoves + /*unburden*/1 + /*uproar*/sizeTempStatus +
    /*water sport*/1 + /*will truant*/1 + /*yawn*/sizeTempStatus;

/** Formats volatile status info into an array of numbers. */
export function encodeVolatileStatus(status: ReadonlyVolatileStatus): number[]
{
    // passable
    const aquaRing = status.aquaRing ? 1 : 0;
    const boosts = (Object.keys(status.boosts) as BoostName[])
        .map(key => status.boosts[key] / 6);
    const confused = encodeTempStatus(status.confusion);
    const curse = status.curse ? 1 : 0;
    const embargo = encodeTempStatus(status.embargo);
    const focusEnergy = status.focusEnergy ? 1 : 0;
    const gastroAcid = status.gastroAcid ? 1 : 0;
    const ingrain = status.ingrain ? 1 : 0;
    const leechSeed = status.leechSeed ? 1 : 0;
    const lockedOnBy = status.lockedOnBy ?
        encodeTempStatus(status.lockedOnBy.lockOnTurns) : [0];
    const lockOn = encodeTempStatus(status.lockOnTurns);
    const magnetRise = encodeTempStatus(status.magnetRise);
    const nightmare = status.nightmare ? 1 : 0;
    const perish = status.perish <= 0 ?
        0 : limitedStatusTurns(status.perish, 3);
    const powerTrick = status.powerTrick ? 1 : 0;
    const substitute = status.substitute ? 1 : 0;
    // TODO: be more specific with trapping info
    const trapped = status.trapped ? 1 : 0;
    const trapping = status.trapping ? 1 : 0;

    // non-passable
    const attract = status.attract ? 1 : 0;
    const bide = encodeTempStatus(status.bide);
    const charge = encodeTempStatus(status.charge);
    const defenseCurl = status.defenseCurl ? 1 : 0;
    const destinyBond = status.destinyBond ? 1 : 0;
    let disabled: number[];
    if (status.disabled)
    {
        disabled = oneHot(dex.moves[status.disabled.name].uid, dex.numMoves,
            /*one*/encodeTempStatus(status.disabled.ts)[0]);
    }
    else disabled = Array.from({length: dex.numMoves}, () => 0);
    const grudge = status.grudge ? 1 : 0;
    const healBlock = encodeTempStatus(status.healBlock);
    const identified = ["foresight", "miracleEye"]
        .map(v => status.identified === v ? 1 : 0);
    const imprison = status.imprison ? 1 : 0;
    const lockedMove = encodeVariableTempStatus(status.lockedMove);
    const minimize = status.minimize ? 1 : 0;
    const mudSport = status.mudSport ? 1 : 0;
    const mustRecharge = status.mustRecharge ? 1 : 0;
    const overrideTraits = encodePokemonTraits(status.overrideTraits,
        status.addedType);
    const rage = status.rage ? 1 : 0;
    const rollout = encodeVariableTempStatus(status.rollout);
    const roost = status.roost ? 1 : 0;
    const slowStart = encodeTempStatus(status.slowStart);
    const snatch = status.snatch ? 1 : 0;
    // success rate halves each time a stalling move is used, capped at 12.5% in
    //  gen4
    const stallFailRate = Math.min(0.875, 1 - Math.pow(2, -status.stallTurns));
    const stockpile = status.stockpile / 3;
    const taunt = encodeTempStatus(status.taunt);
    const torment = status.torment ? 1 : 0;
    const transformed = status.transformed ? 1 : 0;
    const twoTurn = encodeVariableTempStatus(status.twoTurn);
    const unburden = status.unburden ? 1 : 0;
    const uproar = encodeTempStatus(status.uproar);
    const waterSport = status.waterSport ? 1 : 0;
    const willTruant = status.willTruant ? 1 : 0;
    const yawn = encodeTempStatus(status.yawn);

    return [
        aquaRing, ...boosts, ...confused, curse, ...embargo, focusEnergy,
        gastroAcid, ingrain, leechSeed, ...lockedOnBy, ...lockOn, ...magnetRise,
        nightmare, perish, powerTrick, substitute, trapped, trapping,

        attract, ...bide, ...charge, defenseCurl, destinyBond, ...disabled,
        grudge, ...identified, imprison, ...healBlock, ...lockedMove, minimize,
        mudSport, mustRecharge, ...overrideTraits, rage, ...rollout, roost,
        ...slowStart, snatch, stallFailRate, stockpile, ...taunt, torment,
        transformed, ...twoTurn, unburden, ...uproar, waterSport, willTruant,
        ...yawn
    ];
}

/** Length of the return value of `encodeMajorStatusCounter()`. */
export const sizeMajorStatusCounter = Object.keys(majorStatuses).length;

/**
 * Formats major status info into an array of numbers. Null means unknown, while
 * undefined means nonexistent.
 */
export function encodeMajorStatusCounter(
    status?: ReadonlyMajorStatusCounter | null): number[]
{
    if (!status)
    {
        // both unrevealed and nonexistent can't have a major status
        return Array.from(Object.keys(majorStatuses), () => 0);
    }

    return oneHot(
        // convert to unique integer id or leave as null
        status.current && majorStatuses[status.current], sizeMajorStatusCounter,
        // %hp that will be taken away at the end of the next turn by toxic dmg
        status.current === "tox" ? Math.min(1, 0.0625 * status.turns)
        // chance of staying asleep
        : status.current === "slp" ?
            limitedStatusTurns(status.turns, status.duration!)
        // irrelevant
        : 1);
}

/** Length of the return value of `encodeMove()`. */
export const sizeMove = dex.numMoves + /*pp and maxpp*/2;

/** Max PP of any move. */
export const maxPossiblePP = 64;

/** Formats move info into an array of numbers. Undefined means nonexistent. */
export function encodeMove(move?: ReadonlyMove | null): number[];
/**
 * Formats unknown move info into an array of numbers with a movepool
 * constraint.
 * @param constraint Mapping of move name to number of mentions.
 * @param total Total number of mentions, i.e. the sum of each entry.
 */
export function encodeMove(move: null, constraint: {[name: string]: number},
    total: number): number[];
export function encodeMove(move?: ReadonlyMove | null,
    constraint?: {[name: string]: number}, total?: number): number[]
{
    if (move === null)
    {
        // move may exist on an unrevealed pokemon
        const result: number[] = [];
        if (constraint && total !== undefined)
        {
            // encode constraint data into unknown move
            result.push(...Object.keys(dex.moves).map(
                    m => (constraint[m] ?? 0) / total));
        }
        else
        {
            // assume all moves are equally probable
            const v = 1 / dex.numMoves;
            result.push(...Array.from({length: dex.numMoves}, () => v));
        }
        // fill in unknown pp value
        result.push(-1, -1);

        return result;
    }
    // move doesn't exist
    if (!move) return [...Array.from({length: dex.numMoves}, () => 0), 0, 0];

    return [
        ...oneHot(move.id, dex.numMoves), move.pp / move.maxpp,
        move.maxpp / maxPossiblePP
    ];
}

/** Length of the return value of `encodeMoveset()`. */
export const sizeMoveset = Moveset.maxSize * sizeMove;

/** Formats moveset info into an array of numbers. */
export function encodeMoveset(moveset?: ReadonlyMoveset | null): number[]
{
    if (moveset === null)
    {
        // unknown
        const move = encodeMove(null);
        return ([] as number[]).concat(
                ...Array.from({length: Moveset.maxSize}, () => move));
    }
    if (!moveset)
    {
        // nonexistent
        const move = encodeMove();
        return ([] as number[]).concat(
                ...Array.from({length: Moveset.maxSize}, () => move));
    }

    // encode known moves
    const knownMoves: number[] = [];
    for (const move of moveset.moves.values())
    {
        knownMoves.push(...encodeMove(move));
    }

    // encode unknown moves
    const unknownMoves: number[] = [];
    if (moveset.moves.size < moveset.size)
    {
        // precalculate unknown move encoding
        const constraint: {[name: string]: number} = {};
        let total = moveset.constraint.size;
        for (const name of moveset.constraint) constraint[name] = 1;
        for (const moveSlotConstraint of moveset.moveSlotConstraints)
        {
            for (const name of moveSlotConstraint)
            {
                constraint[name] = (constraint[name] ?? 0) + 1;
            }
            total += moveSlotConstraint.size;
        }
        const unknownMove = encodeMove(null, constraint, total);

        for (let i = moveset.moves.size; i < moveset.size; ++i)
        {
            unknownMoves.push(...unknownMove);
        }
    }

    // encode empty moveslots
    const emptyMoves: number[] = [];
    if (moveset.size < Moveset.maxSize)
    {
        // precalculate empty move encoding
        const emptyMove = encodeMove();

        for (let i = moveset.size; i < Moveset.maxSize; ++i)
        {
            emptyMoves.push(...emptyMove);
        }
    }

    return [...knownMoves, ...unknownMoves, ...emptyMoves];
}

/** Length of the return value of `encodeHP()`. */
export const sizeHP = 2;

/**
 * Formats hp info into an array of numbers. Null means unknown, while undefined
 * means nonexistent.
 */
export function encodeHP(hp?: ReadonlyHP | null): number[]
{
    // TODO: guess hp stat
    if (hp === null) return [1, 0.5];
    if (!hp) return [-1, -1];

    const ratio = hp.max === 0 ? 0 : hp.current / hp.max;
    if (hp.isPercent)
    {
        // TODO: guess hp stat
        return [ratio, 0.5];
    }
    else return [ratio, hp.max / maxStatHP];
}

/** Length of the return value of `encodePokemon()` when inactive. */
export const sizePokemon = /*traits*/sizePokemonTraits +
    /*current+last item*/2 * dex.numItems + sizeMoveset + /*gender*/3 +
    /*happiness*/1 + sizeHP + sizeMajorStatusCounter + /*grounded*/2;

/** Length of the return value of `encodePokemon()` when active. */
export const sizeActivePokemon = sizePokemon + sizeVolatileStatus;

// TODO: guarantee order?
const hpTypeKeys = Object.keys(hpTypes);

/**
 * Formats pokemon info into an array of numbers. Null means unknown, while
 * undefined means nonexistent.
 */
export function encodePokemon(mon?: ReadonlyPokemon | null): number[]
{
    if (mon === null)
    {
        // unknown
        return [
            ...encodePokemonTraits(null),
            ...Array.from({length: 2 * dex.numItems}, () => 0), // item
            ...encodeMoveset(null),
            1 / 3, 1 / 3, 1 / 3, // gender
            0.5, // happiness
            ...encodeHP(null), ...encodeMajorStatusCounter(null),
            0.5, 0.5 // grounded
        ];
    }
    if (!mon)
    {
        // nonexistent
        return [
            ...encodePokemonTraits(),
            ...Array.from({length: 2 * dex.numItems}, () => -1), // item
            ...encodeMoveset(),
            -1, -1, -1, // gender
            -1, // happiness
            ...encodeHP(), ...encodeMajorStatusCounter(),
            -1, -1 // grounded
        ];
    }

    return [
        mon.gender === "M" ? 1 : 0, mon.gender === "F" ? 1 : 0,
        mon.gender === null ? 1 : 0,
        ...encodePokemonTraits(mon.baseTraits),
        ...encodePossiblityClass(mon.item, d => d),
        ...encodePossiblityClass(mon.lastItem, d => d),
        ...encodeMoveset(mon.moveset),
        // normalize happiness value
        (mon.happiness ?? /*half*/127.5) / 255,
        ...encodeHP(mon.hp),
        mon.isGrounded ? 1 : 0, mon.maybeGrounded ? 1 : 0,
        ...encodeMajorStatusCounter(mon.majorStatus),
        ...(mon.active ? encodeVolatileStatus(mon.volatile) : [])
    ];
}

/** Length of the return value of `encodeTeamStatus()`. */
export const sizeTeamStatus = /*future moves*/dex.numFutureMoves +
    /*healing wish*/1 + /*light screen*/2 + /*lucky chant*/sizeTempStatus +
    /*lunar dance*/1 + /*mist*/sizeTempStatus + /*reflect*/2 + /*selfSwitch*/2 +
    /*entry hazards*/3 + /*tailwind*/sizeTempStatus + /*wish*/sizeTempStatus;

/** Formats team status info into an array of numbers. */
export function encodeTeamStatus(status: ReadonlyTeamStatus): number[]
{
    return [
        // TODO: guarantee order of future move turn values
        ...Object.values(status.futureMoves)
            .map(encodeTempStatus)
            .reduce((a, b) => a.concat(b), []),
        status.healingWish ? 1 : 0,
        ...encodeItemTempStatus(status.lightScreen),
        ...encodeTempStatus(status.luckyChant),
        status.lunarDance ? 1 : 0,
        ...encodeTempStatus(status.mist),
        ...encodeItemTempStatus(status.reflect),
        status.selfSwitch ? 1 : 0, status.selfSwitch === "copyvolatile" ? 1 : 0,
        // divide hazard level by their max levels
        // TODO: factor out into constants somewhere
        status.spikes / 3, status.stealthRock, status.toxicSpikes / 2,
        ...encodeTempStatus(status.tailwind),
        ...encodeTempStatus(status.wish)
    ];
}

/** Length of the return value of `encodeTeam()`. */
export const sizeTeam = sizeActivePokemon + (Team.maxSize - 1) * sizePokemon +
    sizeTeamStatus;

/** Formats team info into an array of numbers. */
export function encodeTeam(team: ReadonlyTeam): number[]
{
    return ([] as number[]).concat(...team.pokemon.map(encodePokemon),
        encodeTeamStatus(team.status));
}

/** Length of the return value of `encodeRoomStatus()`. */
export const sizeRoomStatus = /*gravity*/sizeTempStatus +
    /*trickRoom*/sizeTempStatus +
    /*weather*/(Object.keys(weatherItems).length + 1);

/** Formats room status info into an array of numbers. */
export function encodeRoomStatus(status: ReadonlyRoomStatus): number[]
{
    return [
        ...encodeTempStatus(status.gravity),
        ...encodeTempStatus(status.trickRoom),
        ...encodeItemTempStatus(status.weather)
    ];
}

/** Length of the return value of `encodeReadonlyBattleState()`. */
export const sizeBattleState = sizeRoomStatus + 2 * sizeTeam;

/**
 * Formats all battle info into an array of numbers suitable for a neural
 * network managed by a `Network` object. As the battle state changes, the
 * length of this array should always be of length `sizeBattleState`.
 */
export function encodeBattleState(state: ReadonlyBattleState): number[]
{
    return [
        ...encodeRoomStatus(state.status), ...encodeTeam(state.teams.us),
        ...encodeTeam(state.teams.them)
    ];
}
