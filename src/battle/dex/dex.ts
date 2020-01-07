// istanbul ignore file
/**
 * @file Generated file containing all the dex data taken from Pokemon Showdown.
 */
import { Dex, MoveData, NaturalGiftData, PokemonData } from "./dex-util";

const pokemon: {readonly [species: string]: PokemonData} =
{
    Milotic:
    {
        id: 350,
        uid: 0,
        name: "Milotic",
        abilities: ["marvelscale"],
        types: ["water", "???"],
        baseStats: {hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81},
        weightkg: 162,
        movepool: ["aquaring", "aquatail", "attract", "avalanche", "blizzard", "bodyslam", "captivate", "dive", "doubleedge", "doubleteam", "dragonpulse", "endure", "facade", "frustration", "gigaimpact", "hail", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "ironhead", "irontail", "magiccoat", "mimic", "mudslap", "naturalgift", "protect", "psychup", "raindance", "recover", "refresh", "rest", "return", "safeguard", "secretpower", "sleeptalk", "snore", "substitute", "surf", "swagger", "swift", "toxic", "twister", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool", "wrap"]
    },
    "Rotom-Heat":
    {
        id: 479,
        uid: 1,
        name: "Rotom-Heat",
        baseSpecies: "Rotom",
        form: "Heat",
        abilities: ["levitate"],
        types: ["electric", "ghost"],
        baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
        weightkg: 0.3,
        movepool: ["overheat", "astonish", "charge", "chargebeam", "confuseray", "darkpulse", "discharge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "hiddenpower", "lightscreen", "mudslap", "naturalgift", "ominouswind", "painsplit", "protect", "psychup", "raindance", "reflect", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "thief", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "trick", "uproar", "willowisp"]
    },
    "Rotom-Wash":
    {
        id: 479,
        uid: 2,
        name: "Rotom-Wash",
        baseSpecies: "Rotom",
        form: "Wash",
        abilities: ["levitate"],
        types: ["electric", "ghost"],
        baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
        weightkg: 0.3,
        movepool: ["hydropump", "astonish", "charge", "chargebeam", "confuseray", "darkpulse", "discharge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "hiddenpower", "lightscreen", "mudslap", "naturalgift", "ominouswind", "painsplit", "protect", "psychup", "raindance", "reflect", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "thief", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "trick", "uproar", "willowisp"]
    },
    "Rotom-Frost":
    {
        id: 479,
        uid: 3,
        name: "Rotom-Frost",
        baseSpecies: "Rotom",
        form: "Frost",
        abilities: ["levitate"],
        types: ["electric", "ghost"],
        baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
        weightkg: 0.3,
        movepool: ["blizzard", "astonish", "charge", "chargebeam", "confuseray", "darkpulse", "discharge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "hiddenpower", "lightscreen", "mudslap", "naturalgift", "ominouswind", "painsplit", "protect", "psychup", "raindance", "reflect", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "thief", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "trick", "uproar", "willowisp"]
    },
    "Rotom-Fan":
    {
        id: 479,
        uid: 4,
        name: "Rotom-Fan",
        baseSpecies: "Rotom",
        form: "Fan",
        abilities: ["levitate"],
        types: ["electric", "ghost"],
        baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
        weightkg: 0.3,
        movepool: ["airslash", "astonish", "charge", "chargebeam", "confuseray", "darkpulse", "discharge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "hiddenpower", "lightscreen", "mudslap", "naturalgift", "ominouswind", "painsplit", "protect", "psychup", "raindance", "reflect", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "thief", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "trick", "uproar", "willowisp"]
    },
    "Rotom-Mow":
    {
        id: 479,
        uid: 5,
        name: "Rotom-Mow",
        baseSpecies: "Rotom",
        form: "Mow",
        abilities: ["levitate"],
        types: ["electric", "ghost"],
        baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
        weightkg: 0.3,
        movepool: ["leafstorm", "astonish", "charge", "chargebeam", "confuseray", "darkpulse", "discharge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "hiddenpower", "lightscreen", "mudslap", "naturalgift", "ominouswind", "painsplit", "protect", "psychup", "raindance", "reflect", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "thief", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "trick", "uproar", "willowisp"]
    },
    Butterfree:
    {
        id: 12,
        uid: 6,
        name: "Butterfree",
        abilities: ["compoundeyes"],
        types: ["bug", "flying"],
        baseStats: {hp: 60, atk: 45, def: 50, spa: 80, spd: 80, spe: 70},
        weightkg: 32,
        movepool: ["aerialace", "aircutter", "attract", "bugbite", "bugbuzz", "captivate", "confusion", "defog", "doubleedge", "doubleteam", "dreameater", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "gust", "hiddenpower", "hyperbeam", "mimic", "morningsun", "naturalgift", "nightmare", "ominouswind", "poisonpowder", "protect", "psybeam", "psychic", "psychup", "raindance", "rest", "return", "roost", "safeguard", "secretpower", "shadowball", "signalbeam", "silverwind", "skillswap", "sleeppowder", "sleeptalk", "snore", "solarbeam", "stringshot", "stunspore", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tailwind", "thief", "toxic", "twister", "uturn", "whirlwind"]
    },
    Beedrill:
    {
        id: 15,
        uid: 7,
        name: "Beedrill",
        abilities: ["swarm"],
        types: ["bug", "poison"],
        baseStats: {hp: 65, atk: 80, def: 40, spa: 45, spd: 80, spe: 75},
        weightkg: 29.5,
        movepool: ["aerialace", "agility", "aircutter", "assurance", "attract", "batonpass", "brickbreak", "bugbite", "captivate", "cut", "defog", "doubleedge", "doubleteam", "endeavor", "endure", "facade", "falseswipe", "flash", "focusenergy", "frustration", "furyattack", "furycutter", "gigadrain", "gigaimpact", "hiddenpower", "hyperbeam", "knockoff", "mimic", "naturalgift", "ominouswind", "payback", "pinmissile", "poisonjab", "protect", "pursuit", "rage", "rest", "return", "rocksmash", "roost", "secretpower", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stringshot", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "tailwind", "thief", "toxic", "toxicspikes", "twineedle", "uturn", "xscissor"]
    },
    Pidgeot:
    {
        id: 18,
        uid: 8,
        name: "Pidgeot",
        abilities: ["keeneye", "tangledfeet"],
        types: ["normal", "flying"],
        baseStats: {hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91},
        weightkg: 39.5,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "attract", "captivate", "defog", "doubleedge", "doubleteam", "endure", "facade", "featherdance", "fly", "frustration", "gigaimpact", "gust", "heatwave", "hiddenpower", "hyperbeam", "mimic", "mirrormove", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "quickattack", "raindance", "rest", "return", "roost", "sandattack", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "toxic", "twister", "uproar", "uturn", "whirlwind", "wingattack"]
    },
    Pikachu:
    {
        id: 25,
        uid: 9,
        name: "Pikachu",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 35, atk: 55, def: 30, spa: 50, spd: 40, spe: 90},
        weightkg: 6,
        movepool: ["agility", "attract", "bodyslam", "brickbreak", "captivate", "chargebeam", "counter", "defensecurl", "dig", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "feint", "flash", "fling", "fly", "focuspunch", "frustration", "grassknot", "growl", "headbutt", "helpinghand", "hiddenpower", "irontail", "knockoff", "lastresort", "lightscreen", "magnetrise", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "present", "protect", "quickattack", "raindance", "rest", "return", "rocksmash", "rollout", "secretpower", "seismictoss", "shockwave", "signalbeam", "slam", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "swift", "tailwhip", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "toxic", "volttackle", "yawn"]
    },
    Raichu:
    {
        id: 26,
        uid: 10,
        name: "Raichu",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 100},
        weightkg: 30,
        movepool: ["attract", "bodyslam", "brickbreak", "captivate", "chargebeam", "counter", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "knockoff", "lightscreen", "magnetrise", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "rocksmash", "rollout", "secretpower", "seismictoss", "shockwave", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "swagger", "swift", "tailwhip", "thief", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "toxic"]
    },
    Nidoqueen:
    {
        id: 31,
        uid: 11,
        name: "Nidoqueen",
        abilities: ["poisonpoint", "rivalry"],
        types: ["poison", "ground"],
        baseStats: {hp: 90, atk: 82, def: 87, spa: 75, spd: 85, spe: 76},
        weightkg: 60,
        movepool: ["aerialace", "aquatail", "attract", "avalanche", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "cut", "defensecurl", "dig", "doubleedge", "doublekick", "doubleteam", "dragonpulse", "dynamicpunch", "earthpower", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scratch", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shockwave", "sleeptalk", "sludgebomb", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superfang", "superpower", "surf", "swagger", "tailwhip", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "torment", "toxic", "uproar", "waterpulse", "whirlpool"]
    },
    Nidoking:
    {
        id: 34,
        uid: 12,
        name: "Nidoking",
        abilities: ["poisonpoint", "rivalry"],
        types: ["poison", "ground"],
        baseStats: {hp: 81, atk: 92, def: 77, spa: 85, spd: 75, spe: 85},
        weightkg: 62,
        movepool: ["aquatail", "attract", "avalanche", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "cut", "defensecurl", "dig", "doubleedge", "doublekick", "doubleteam", "dragonpulse", "dynamicpunch", "earthpower", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "furycutter", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "megahorn", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "peck", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shockwave", "sleeptalk", "sludgebomb", "snore", "stealthrock", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "superpower", "surf", "swagger", "taunt", "thief", "thrash", "thunder", "thunderbolt", "thunderpunch", "torment", "toxic", "uproar", "waterpulse", "whirlpool"]
    },
    Clefairy:
    {
        id: 35,
        uid: 13,
        name: "Clefairy",
        abilities: ["cutecharm", "magicguard"],
        types: ["normal", "???"],
        baseStats: {hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35},
        weightkg: 7.5,
        movepool: ["attract", "blizzard", "bodyslam", "bounce", "brickbreak", "calmmind", "captivate", "chargebeam", "cosmicpower", "counter", "defensecurl", "dig", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "encore", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focuspunch", "followme", "frustration", "grassknot", "gravity", "growl", "headbutt", "healbell", "healingwish", "helpinghand", "hiddenpower", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "lastresort", "lightscreen", "luckychant", "magiccoat", "megakick", "megapunch", "meteormash", "metronome", "mimic", "minimize", "moonlight", "mudslap", "naturalgift", "nightmare", "pound", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "rocksmash", "roleplay", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "sing", "sleeptalk", "snatch", "snore", "softboiled", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trick", "wakeupslap", "waterpulse", "zenheadbutt"]
    },
    Clefable:
    {
        id: 36,
        uid: 14,
        name: "Clefable",
        abilities: ["cutecharm", "magicguard"],
        types: ["normal", "???"],
        baseStats: {hp: 95, atk: 70, def: 73, spa: 85, spd: 90, spe: 60},
        weightkg: 40,
        movepool: ["attract", "blizzard", "bodyslam", "bounce", "brickbreak", "calmmind", "captivate", "chargebeam", "counter", "defensecurl", "dig", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "lastresort", "lightscreen", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "minimize", "mudslap", "naturalgift", "nightmare", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "rocksmash", "roleplay", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "sing", "sleeptalk", "snatch", "snore", "softboiled", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trick", "waterpulse", "zenheadbutt"]
    },
    Jigglypuff:
    {
        id: 39,
        uid: 15,
        name: "Jigglypuff",
        abilities: ["cutecharm"],
        types: ["normal", "???"],
        baseStats: {hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20},
        weightkg: 5.5,
        movepool: ["attract", "blizzard", "bodyslam", "bounce", "brickbreak", "captivate", "chargebeam", "counter", "defensecurl", "dig", "disable", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focuspunch", "frustration", "grassknot", "gravity", "gyroball", "headbutt", "healbell", "helpinghand", "hiddenpower", "hypervoice", "icebeam", "icepunch", "icywind", "knockoff", "lastresort", "lightscreen", "magiccoat", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "pound", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "sing", "sleeptalk", "snatch", "snore", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "wakeupslap", "waterpulse"]
    },
    Wigglytuff:
    {
        id: 40,
        uid: 16,
        name: "Wigglytuff",
        abilities: ["cutecharm"],
        types: ["normal", "???"],
        baseStats: {hp: 140, atk: 70, def: 45, spa: 75, spd: 50, spe: 45},
        weightkg: 12,
        movepool: ["attract", "blizzard", "bodyslam", "bounce", "brickbreak", "captivate", "chargebeam", "counter", "defensecurl", "dig", "disable", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "gyroball", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "knockoff", "lastresort", "lightscreen", "magiccoat", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "sing", "sleeptalk", "snatch", "snore", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "waterpulse"]
    },
    Vileplume:
    {
        id: 45,
        uid: 17,
        name: "Vileplume",
        abilities: ["chlorophyll"],
        types: ["grass", "poison"],
        baseStats: {hp: 75, atk: 80, def: 85, spa: 100, spd: 90, spe: 50},
        weightkg: 18.6,
        movepool: ["absorb", "aromatherapy", "attract", "bodyslam", "bulletseed", "captivate", "cut", "doubleedge", "doubleteam", "drainpunch", "endure", "energyball", "facade", "flash", "fling", "frustration", "gastroacid", "gigadrain", "gigaimpact", "grassknot", "hiddenpower", "hyperbeam", "megadrain", "mimic", "naturalgift", "petaldance", "poisonpowder", "protect", "rest", "return", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "toxic", "worryseed"]
    },
    Poliwrath:
    {
        id: 62,
        uid: 18,
        name: "Poliwrath",
        abilities: ["waterabsorb", "damp"],
        types: ["water", "fighting"],
        baseStats: {hp: 90, atk: 85, def: 95, spa: 70, spd: 90, spe: 70},
        weightkg: 54,
        movepool: ["attract", "blizzard", "bodyslam", "brickbreak", "bubblebeam", "bulkup", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleslap", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "hail", "headbutt", "helpinghand", "hiddenpower", "hydropump", "hyperbeam", "hypnosis", "icebeam", "icepunch", "icywind", "megakick", "megapunch", "metronome", "mimic", "mindreader", "mudslap", "naturalgift", "payback", "poisonjab", "protect", "psychic", "raindance", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "secretpower", "seismictoss", "sleeptalk", "snore", "strength", "submission", "substitute", "surf", "swagger", "thief", "toxic", "vacuumwave", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Alakazam:
    {
        id: 65,
        uid: 19,
        name: "Alakazam",
        abilities: ["synchronize", "innerfocus"],
        types: ["psychic", "???"],
        baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 85, spe: 120},
        weightkg: 48,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "chargebeam", "confusion", "counter", "disable", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "embargo", "endure", "energyball", "facade", "firepunch", "flash", "fling", "focusblast", "focuspunch", "frustration", "futuresight", "gigaimpact", "grassknot", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "irontail", "kinesis", "knockoff", "lightscreen", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "miracleeye", "naturalgift", "nightmare", "protect", "psybeam", "psychic", "psychocut", "psychup", "raindance", "recover", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "taunt", "teleport", "thief", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Victreebel:
    {
        id: 71,
        uid: 20,
        name: "Victreebel",
        abilities: ["chlorophyll"],
        types: ["grass", "poison"],
        baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 60, spe: 70},
        weightkg: 15.5,
        movepool: ["attract", "bodyslam", "bulletseed", "captivate", "cut", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gastroacid", "gigadrain", "gigaimpact", "grassknot", "hiddenpower", "hyperbeam", "knockoff", "leafblade", "leafstorm", "mimic", "naturalgift", "protect", "razorleaf", "rest", "return", "secretpower", "seedbomb", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spitup", "stockpile", "substitute", "suckerpunch", "sunnyday", "swagger", "swallow", "sweetscent", "swordsdance", "synthesis", "thief", "toxic", "vinewhip", "worryseed"]
    },
    Golem:
    {
        id: 76,
        uid: 21,
        name: "Golem",
        abilities: ["rockhead", "sturdy"],
        types: ["rock", "ground"],
        baseStats: {hp: 80, atk: 110, def: 130, spa: 55, spd: 65, spe: 45},
        weightkg: 300,
        movepool: ["ancientpower", "attract", "block", "bodyslam", "brickbreak", "captivate", "counter", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "explosion", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "gyroball", "headbutt", "hiddenpower", "hyperbeam", "ironhead", "magnitude", "megakick", "megapunch", "metronome", "mimic", "mudslap", "mudsport", "naturalgift", "protect", "rest", "return", "roar", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "sandstorm", "secretpower", "seismictoss", "selfdestruct", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "superpower", "swagger", "tackle", "thunderpunch", "toxic"]
    },
    "Mr. Mime":
    {
        id: 122,
        uid: 22,
        name: "Mr. Mime",
        abilities: ["soundproof", "filter"],
        types: ["psychic", "???"],
        baseStats: {hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90},
        weightkg: 54.5,
        movepool: ["aerialace", "attract", "barrier", "batonpass", "bodyslam", "brickbreak", "calmmind", "captivate", "chargebeam", "confuseray", "confusion", "copycat", "counter", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "encore", "endure", "energyball", "facade", "fakeout", "firepunch", "flash", "fling", "focusblast", "focuspunch", "followme", "frustration", "futuresight", "gigaimpact", "grassknot", "guardswap", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "hypnosis", "icepunch", "irondefense", "lightscreen", "magicalleaf", "magiccoat", "meditate", "megakick", "megapunch", "metronome", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "payback", "powerswap", "protect", "psybeam", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "taunt", "teeterdance", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "wakeupslap", "zenheadbutt"]
    },
    Articuno:
    {
        id: 144,
        uid: 23,
        name: "Articuno",
        abilities: ["pressure"],
        types: ["ice", "flying"],
        baseStats: {hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85},
        weightkg: 55.4,
        movepool: ["aerialace", "agility", "aircutter", "ancientpower", "avalanche", "blizzard", "defog", "doubleedge", "doubleteam", "endure", "extrasensory", "facade", "fly", "frustration", "gigaimpact", "gust", "hail", "haze", "healbell", "hiddenpower", "hyperbeam", "icebeam", "iceshard", "icywind", "mimic", "mindreader", "mist", "mudslap", "naturalgift", "ominouswind", "pluck", "powdersnow", "protect", "raindance", "reflect", "rest", "return", "roar", "rocksmash", "roost", "sandstorm", "secretpower", "sheercold", "signalbeam", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "toxic", "twister", "uturn", "waterpulse"]
    },
    Zapdos:
    {
        id: 145,
        uid: 24,
        name: "Zapdos",
        abilities: ["pressure"],
        types: ["electric", "flying"],
        baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100},
        weightkg: 52.6,
        movepool: ["aerialace", "agility", "aircutter", "ancientpower", "batonpass", "charge", "chargebeam", "defog", "detect", "discharge", "doubleedge", "doubleteam", "drillpeck", "endure", "extrasensory", "facade", "flash", "fly", "frustration", "gigaimpact", "heatwave", "hiddenpower", "hyperbeam", "lightscreen", "metalsound", "mimic", "mudslap", "naturalgift", "ominouswind", "peck", "pluck", "protect", "raindance", "rest", "return", "roar", "rocksmash", "roost", "sandstorm", "secretpower", "shockwave", "signalbeam", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "twister", "uturn"]
    },
    Moltres:
    {
        id: 146,
        uid: 25,
        name: "Moltres",
        abilities: ["pressure"],
        types: ["fire", "flying"],
        baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90},
        weightkg: 60,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "ancientpower", "defog", "doubleedge", "doubleteam", "ember", "endure", "extrasensory", "facade", "fireblast", "firespin", "flamethrower", "fly", "frustration", "gigaimpact", "heatwave", "hiddenpower", "hyperbeam", "mimic", "morningsun", "mudslap", "naturalgift", "ominouswind", "overheat", "pluck", "protect", "raindance", "rest", "return", "roar", "rocksmash", "roost", "safeguard", "sandstorm", "secretpower", "skyattack", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "toxic", "twister", "uturn", "willowisp", "wingattack"]
    },
    Chikorita:
    {
        id: 152,
        uid: 26,
        name: "Chikorita",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45},
        weightkg: 6.4,
        movepool: ["ancientpower", "aromatherapy", "attract", "bodyslam", "bulletseed", "captivate", "counter", "cut", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flail", "flash", "frenzyplant", "frustration", "furycutter", "gigadrain", "grassknot", "grasswhistle", "growl", "headbutt", "hiddenpower", "ingrain", "irontail", "leafstorm", "leechseed", "lightscreen", "magicalleaf", "magiccoat", "mimic", "mudslap", "naturalgift", "naturepower", "poisonpowder", "protect", "razorleaf", "reflect", "rest", "return", "safeguard", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tackle", "toxic", "vinewhip", "worryseed", "wringout"]
    },
    Bayleef:
    {
        id: 153,
        uid: 27,
        name: "Bayleef",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60},
        weightkg: 15.8,
        movepool: ["ancientpower", "aromatherapy", "attract", "bodyslam", "bulletseed", "captivate", "counter", "cut", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "furycutter", "gigadrain", "grassknot", "growl", "headbutt", "hiddenpower", "irontail", "lightscreen", "magicalleaf", "magiccoat", "mimic", "mudslap", "naturalgift", "poisonpowder", "protect", "razorleaf", "reflect", "rest", "return", "rocksmash", "safeguard", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tackle", "toxic", "worryseed"]
    },
    Meganium:
    {
        id: 154,
        uid: 28,
        name: "Meganium",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80},
        weightkg: 100.5,
        movepool: ["ancientpower", "aromatherapy", "attract", "bodyslam", "bulletseed", "captivate", "counter", "cut", "doubleedge", "doubleteam", "earthquake", "endure", "energyball", "facade", "flash", "frenzyplant", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "growl", "headbutt", "hiddenpower", "hyperbeam", "irontail", "lightscreen", "magicalleaf", "magiccoat", "mimic", "mudslap", "naturalgift", "outrage", "petaldance", "poisonpowder", "protect", "razorleaf", "reflect", "rest", "return", "rockclimb", "rocksmash", "safeguard", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tackle", "toxic", "worryseed"]
    },
    Cyndaquil:
    {
        id: 155,
        uid: 29,
        name: "Cyndaquil",
        abilities: ["blaze"],
        types: ["fire", "???"],
        baseStats: {hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65},
        weightkg: 7.9,
        movepool: ["aerialace", "attract", "blastburn", "bodyslam", "captivate", "covet", "crushclaw", "cut", "defensecurl", "dig", "doubleedge", "doublekick", "doubleteam", "ember", "endure", "eruption", "extrasensory", "facade", "fireblast", "flamethrower", "flamewheel", "flareblitz", "foresight", "frustration", "furyswipes", "headbutt", "heatwave", "hiddenpower", "howl", "lavaplume", "leer", "mimic", "mudslap", "naturalgift", "overheat", "protect", "quickattack", "rest", "return", "reversal", "rollout", "secretpower", "sleeptalk", "smokescreen", "snore", "substitute", "sunnyday", "swagger", "swift", "tackle", "thrash", "toxic", "willowisp"]
    },
    Quilava:
    {
        id: 156,
        uid: 30,
        name: "Quilava",
        abilities: ["blaze"],
        types: ["fire", "???"],
        baseStats: {hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80},
        weightkg: 19,
        movepool: ["aerialace", "attract", "bodyslam", "brickbreak", "captivate", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "ember", "endure", "eruption", "facade", "fireblast", "flamethrower", "flamewheel", "focuspunch", "frustration", "furycutter", "headbutt", "heatwave", "hiddenpower", "lavaplume", "leer", "mimic", "mudslap", "naturalgift", "overheat", "protect", "quickattack", "rest", "return", "roar", "rocksmash", "rollout", "secretpower", "sleeptalk", "smokescreen", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "toxic", "willowisp"]
    },
    Typhlosion:
    {
        id: 157,
        uid: 31,
        name: "Typhlosion",
        abilities: ["blaze"],
        types: ["fire", "???"],
        baseStats: {hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100},
        weightkg: 79.5,
        movepool: ["aerialace", "attract", "blastburn", "bodyslam", "brickbreak", "captivate", "counter", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "ember", "endure", "eruption", "facade", "fireblast", "firepunch", "flamethrower", "flamewheel", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "gyroball", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "lavaplume", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "overheat", "protect", "quickattack", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "seismictoss", "shadowclaw", "sleeptalk", "smokescreen", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "thunderpunch", "toxic", "willowisp"]
    },
    Totodile:
    {
        id: 158,
        uid: 32,
        name: "Totodile",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43},
        weightkg: 9.5,
        movepool: ["aerialace", "ancientpower", "aquajet", "aquatail", "attract", "bite", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "crunch", "cut", "dig", "dive", "doubleedge", "doubleteam", "dragonclaw", "dragondance", "dynamicpunch", "endure", "facade", "flail", "fling", "focuspunch", "frustration", "hail", "headbutt", "hiddenpower", "hydrocannon", "hydropump", "icebeam", "icefang", "icepunch", "icywind", "irontail", "leer", "lowkick", "megakick", "megapunch", "metalclaw", "mimic", "mudslap", "mudsport", "naturalgift", "protect", "rage", "raindance", "rest", "return", "rockslide", "rocktomb", "scaryface", "scratch", "screech", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "snore", "spite", "substitute", "superpower", "surf", "swagger", "swordsdance", "thrash", "toxic", "uproar", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool"]
    },
    Croconaw:
    {
        id: 159,
        uid: 33,
        name: "Croconaw",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58},
        weightkg: 25,
        movepool: ["aerialace", "ancientpower", "aquatail", "attract", "bite", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "crunch", "cut", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "flail", "fling", "focuspunch", "frustration", "furycutter", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icefang", "icepunch", "icywind", "irontail", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "rage", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "scaryface", "scratch", "screech", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "snore", "spite", "strength", "substitute", "superpower", "surf", "swagger", "swordsdance", "thrash", "toxic", "uproar", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Feraligatr:
    {
        id: 160,
        uid: 34,
        name: "Feraligatr",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78},
        weightkg: 88.8,
        movepool: ["aerialace", "agility", "ancientpower", "aquatail", "attract", "avalanche", "bite", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "crunch", "cut", "dig", "dive", "doubleedge", "doubleteam", "dragonclaw", "dragonpulse", "dynamicpunch", "earthquake", "endure", "facade", "flail", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "hail", "headbutt", "hiddenpower", "hydrocannon", "hydropump", "hyperbeam", "icebeam", "icefang", "icepunch", "icywind", "irontail", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "protect", "rage", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "scaryface", "scratch", "screech", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "snore", "spite", "strength", "substitute", "superpower", "surf", "swagger", "swordsdance", "thrash", "toxic", "uproar", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Igglybuff:
    {
        id: 174,
        uid: 35,
        name: "Igglybuff",
        abilities: ["cutecharm"],
        types: ["normal", "???"],
        baseStats: {hp: 90, atk: 30, def: 15, spa: 40, spd: 20, spe: 15},
        weightkg: 1,
        movepool: ["attract", "bodyslam", "bounce", "captivate", "charm", "copycat", "counter", "covet", "defensecurl", "dig", "doubleedge", "doubleteam", "dreameater", "endeavor", "endure", "facade", "faketears", "feintattack", "fireblast", "flamethrower", "flash", "fling", "frustration", "grassknot", "gravity", "headbutt", "healbell", "helpinghand", "hiddenpower", "icywind", "lastresort", "lightscreen", "magiccoat", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "perishsong", "pound", "present", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "sing", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetkiss", "thunderwave", "tickle", "toxic", "uproar", "waterpulse", "wish"]
    },
    Togepi:
    {
        id: 175,
        uid: 36,
        name: "Togepi",
        abilities: ["hustle", "serenegrace"],
        types: ["normal", "???"],
        baseStats: {hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20},
        weightkg: 1.5,
        movepool: ["ancientpower", "attract", "batonpass", "bodyslam", "captivate", "charm", "counter", "defensecurl", "doubleedge", "doubleteam", "dreameater", "encore", "endeavor", "endure", "extrasensory", "facade", "fireblast", "flamethrower", "flash", "fling", "followme", "foresight", "frustration", "futuresight", "grassknot", "growl", "headbutt", "healbell", "helpinghand", "hiddenpower", "lastresort", "lightscreen", "luckychant", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "mirrormove", "mudslap", "nastyplot", "naturalgift", "peck", "present", "protect", "psychic", "psychoshift", "psychup", "raindance", "reflect", "rest", "return", "rocksmash", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snore", "softboiled", "solarbeam", "substitute", "sunnyday", "swagger", "sweetkiss", "swift", "thunderwave", "toxic", "triattack", "trick", "uproar", "waterpulse", "wish", "yawn", "zenheadbutt"]
    },
    Togetic:
    {
        id: 176,
        uid: 37,
        name: "Togetic",
        abilities: ["hustle", "serenegrace"],
        types: ["normal", "flying"],
        baseStats: {hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40},
        weightkg: 3.2,
        movepool: ["aerialace", "aircutter", "ancientpower", "attract", "batonpass", "bodyslam", "brickbreak", "captivate", "charm", "counter", "defensecurl", "defog", "doubleedge", "doubleteam", "drainpunch", "dreameater", "encore", "endeavor", "endure", "facade", "fireblast", "flamethrower", "flash", "fling", "fly", "focuspunch", "followme", "frustration", "gigaimpact", "grassknot", "growl", "headbutt", "healbell", "heatwave", "hiddenpower", "hyperbeam", "lastresort", "lightscreen", "magicalleaf", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "ominouswind", "protect", "psychic", "psychup", "raindance", "reflect", "rest", "return", "rocksmash", "rollout", "roost", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "silverwind", "skyattack", "sleeptalk", "snore", "softboiled", "solarbeam", "steelwing", "substitute", "sunnyday", "swagger", "sweetkiss", "swift", "tailwind", "thunderwave", "toxic", "trick", "twister", "waterpulse", "wish", "yawn", "zenheadbutt"]
    },
    Cleffa:
    {
        id: 173,
        uid: 38,
        name: "Cleffa",
        abilities: ["cutecharm", "magicguard"],
        types: ["normal", "???"],
        baseStats: {hp: 50, atk: 25, def: 28, spa: 45, spd: 55, spe: 15},
        weightkg: 3,
        movepool: ["amnesia", "aromatherapy", "attract", "bellydrum", "bodyslam", "captivate", "charm", "copycat", "counter", "covet", "defensecurl", "dig", "doubleedge", "doubleteam", "dreameater", "encore", "endeavor", "endure", "facade", "faketears", "fireblast", "flamethrower", "flash", "fling", "frustration", "grassknot", "gravity", "headbutt", "helpinghand", "hiddenpower", "icywind", "irontail", "lastresort", "lightscreen", "magicalleaf", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "nightmare", "pound", "present", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "sing", "sleeptalk", "snore", "softboiled", "solarbeam", "splash", "substitute", "sunnyday", "swagger", "sweetkiss", "thunderwave", "toxic", "trick", "uproar", "waterpulse", "wish", "zenheadbutt"]
    },
    Ampharos:
    {
        id: 181,
        uid: 39,
        name: "Ampharos",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 90, atk: 75, def: 75, spa: 115, spd: 90, spe: 55},
        weightkg: 61.5,
        movepool: ["attract", "bodyslam", "brickbreak", "captivate", "charge", "chargebeam", "cottonspore", "counter", "defensecurl", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "firepunch", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "growl", "headbutt", "healbell", "hiddenpower", "hyperbeam", "irontail", "lightscreen", "magnetrise", "megakick", "megapunch", "mimic", "naturalgift", "outrage", "powergem", "protect", "raindance", "rest", "return", "rockclimb", "rocksmash", "secretpower", "seismictoss", "shockwave", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "swagger", "swift", "tackle", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "toxic"]
    },
    Bellossom:
    {
        id: 182,
        uid: 40,
        name: "Bellossom",
        abilities: ["chlorophyll"],
        types: ["grass", "???"],
        baseStats: {hp: 75, atk: 80, def: 85, spa: 90, spd: 100, spe: 50},
        weightkg: 5.8,
        movepool: ["absorb", "attract", "bulletseed", "captivate", "cut", "doubleedge", "doubleteam", "drainpunch", "endure", "energyball", "facade", "flash", "fling", "frustration", "gastroacid", "gigadrain", "gigaimpact", "grassknot", "hiddenpower", "hyperbeam", "leafblade", "leafstorm", "magicalleaf", "megadrain", "mimic", "naturalgift", "petaldance", "protect", "rest", "return", "safeguard", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stunspore", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "toxic", "uproar", "worryseed"]
    },
    Marill:
    {
        id: 183,
        uid: 41,
        name: "Marill",
        abilities: ["thickfat", "hugepower"],
        types: ["water", "???"],
        baseStats: {hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40},
        weightkg: 8.5,
        movepool: ["amnesia", "aquajet", "aquaring", "aquatail", "attract", "bellydrum", "blizzard", "bodyslam", "brickbreak", "bubblebeam", "captivate", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "fling", "focuspunch", "frustration", "futuresight", "grassknot", "hail", "headbutt", "helpinghand", "hiddenpower", "hydropump", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "lightscreen", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "perishsong", "present", "protect", "raindance", "refresh", "rest", "return", "rocksmash", "rollout", "secretpower", "seismictoss", "sleeptalk", "snore", "strength", "substitute", "superpower", "supersonic", "surf", "swagger", "swift", "tackle", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Azumarill:
    {
        id: 184,
        uid: 42,
        name: "Azumarill",
        abilities: ["thickfat", "hugepower"],
        types: ["water", "???"],
        baseStats: {hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 50},
        weightkg: 28.5,
        movepool: ["aquaring", "aquatail", "attract", "blizzard", "bodyslam", "brickbreak", "bubblebeam", "captivate", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "hail", "headbutt", "helpinghand", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "rocksmash", "rollout", "secretpower", "seismictoss", "sleeptalk", "snore", "strength", "substitute", "superpower", "surf", "swagger", "swift", "tackle", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Jumpluff:
    {
        id: 189,
        uid: 43,
        name: "Jumpluff",
        abilities: ["chlorophyll", "leafguard"],
        types: ["grass", "flying"],
        baseStats: {hp: 75, atk: 55, def: 70, spa: 55, spd: 85, spe: 110},
        weightkg: 3,
        movepool: ["aerialace", "attract", "bounce", "bulletseed", "captivate", "cottonspore", "defensecurl", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "leechseed", "megadrain", "memento", "mimic", "naturalgift", "poisonpowder", "protect", "rest", "return", "secretpower", "seedbomb", "silverwind", "sleeppowder", "sleeptalk", "snore", "solarbeam", "splash", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "tackle", "tailwhip", "toxic", "uturn", "worryseed"]
    },
    Snubbull:
    {
        id: 209,
        uid: 44,
        name: "Snubbull",
        abilities: ["intimidate", "runaway"],
        types: ["normal", "???"],
        baseStats: {hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30},
        weightkg: 7.8,
        movepool: ["attract", "bite", "bodyslam", "brickbreak", "bulkup", "captivate", "charm", "closecombat", "counter", "crunch", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "feintattack", "fireblast", "firefang", "firepunch", "flamethrower", "fling", "focuspunch", "frustration", "headbutt", "healbell", "hiddenpower", "icefang", "icepunch", "lastresort", "lick", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "overheat", "payback", "present", "protect", "rage", "raindance", "reflect", "rest", "return", "roar", "rocksmash", "scaryface", "secretpower", "seismictoss", "shadowball", "shockwave", "sleeptalk", "sludgebomb", "smellingsalts", "snore", "solarbeam", "strength", "substitute", "sunnyday", "superfang", "superpower", "swagger", "tackle", "tailwhip", "takedown", "taunt", "thief", "thunder", "thunderbolt", "thunderfang", "thunderpunch", "thunderwave", "torment", "toxic", "waterpulse"]
    },
    Granbull:
    {
        id: 210,
        uid: 45,
        name: "Granbull",
        abilities: ["intimidate", "quickfeet"],
        types: ["normal", "???"],
        baseStats: {hp: 90, atk: 120, def: 75, spa: 60, spd: 60, spe: 45},
        weightkg: 48.7,
        movepool: ["attract", "bite", "bodyslam", "brickbreak", "bulkup", "captivate", "charm", "counter", "crunch", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firefang", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "headbutt", "healbell", "hiddenpower", "hyperbeam", "icefang", "icepunch", "irontail", "lastresort", "lick", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "overheat", "payback", "protect", "rage", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "scaryface", "secretpower", "seismictoss", "shadowball", "shockwave", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stoneedge", "strength", "substitute", "sunnyday", "superfang", "superpower", "swagger", "tackle", "tailwhip", "takedown", "taunt", "thief", "thunder", "thunderbolt", "thunderfang", "thunderpunch", "thunderwave", "torment", "toxic", "waterpulse"]
    },
    Raikou:
    {
        id: 243,
        uid: 46,
        name: "Raikou",
        abilities: ["pressure"],
        types: ["electric", "???"],
        baseStats: {hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115},
        weightkg: 178,
        movepool: ["aurasphere", "bite", "bodyslam", "calmmind", "chargebeam", "crunch", "cut", "dig", "discharge", "doubleedge", "doubleteam", "endure", "extrasensory", "extremespeed", "facade", "flash", "frustration", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "ironhead", "irontail", "leer", "lightscreen", "magnetrise", "mimic", "mudslap", "naturalgift", "protect", "psychup", "quickattack", "raindance", "reflect", "rest", "return", "roar", "rockclimb", "rocksmash", "sandstorm", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "strength", "substitute", "sunnyday", "swagger", "swift", "thunder", "thunderbolt", "thunderfang", "thundershock", "thunderwave", "toxic", "weatherball", "zapcannon"]
    },
    Entei:
    {
        id: 244,
        uid: 47,
        name: "Entei",
        abilities: ["pressure"],
        types: ["fire", "???"],
        baseStats: {hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100},
        weightkg: 198,
        movepool: ["bite", "bodyslam", "calmmind", "crushclaw", "cut", "dig", "doubleedge", "doubleteam", "ember", "endure", "eruption", "extrasensory", "extremespeed", "facade", "fireblast", "firefang", "firespin", "flamethrower", "flareblitz", "flash", "frustration", "gigaimpact", "headbutt", "heatwave", "hiddenpower", "howl", "hyperbeam", "ironhead", "irontail", "lavaplume", "leer", "mimic", "mudslap", "naturalgift", "overheat", "protect", "psychup", "raindance", "reflect", "rest", "return", "roar", "rockclimb", "rocksmash", "sandstorm", "secretpower", "shadowball", "sleeptalk", "snore", "solarbeam", "stomp", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "toxic", "willowisp"]
    },
    Suicune:
    {
        id: 245,
        uid: 48,
        name: "Suicune",
        abilities: ["pressure"],
        types: ["water", "???"],
        baseStats: {hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85},
        weightkg: 187,
        movepool: ["airslash", "aquaring", "aurorabeam", "avalanche", "bite", "blizzard", "bodyslam", "brine", "bubblebeam", "calmmind", "cut", "dig", "dive", "doubleedge", "doubleteam", "endure", "extrasensory", "extremespeed", "facade", "frustration", "gigaimpact", "gust", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icefang", "icywind", "ironhead", "irontail", "leer", "mimic", "mirrorcoat", "mist", "mudslap", "naturalgift", "ominouswind", "protect", "psychup", "raindance", "reflect", "rest", "return", "roar", "rockclimb", "rocksmash", "sandstorm", "secretpower", "shadowball", "sheercold", "signalbeam", "sleeptalk", "snore", "substitute", "sunnyday", "surf", "swagger", "swift", "tailwind", "toxic", "waterfall", "waterpulse", "whirlpool"]
    },
    Beautifly:
    {
        id: 267,
        uid: 49,
        name: "Beautifly",
        abilities: ["swarm"],
        types: ["bug", "flying"],
        baseStats: {hp: 60, atk: 70, def: 50, spa: 90, spd: 50, spe: 65},
        weightkg: 28.4,
        movepool: ["absorb", "aerialace", "aircutter", "attract", "bugbite", "bugbuzz", "captivate", "defog", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "gust", "hiddenpower", "hyperbeam", "megadrain", "mimic", "morningsun", "naturalgift", "ominouswind", "protect", "psychic", "rest", "return", "roost", "safeguard", "secretpower", "shadowball", "signalbeam", "silverwind", "sleeptalk", "snore", "solarbeam", "stringshot", "stunspore", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thief", "toxic", "twister", "uturn", "whirlwind"]
    },
    Ralts:
    {
        id: 280,
        uid: 50,
        name: "Ralts",
        abilities: ["synchronize", "trace"],
        types: ["psychic", "???"],
        baseStats: {hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40},
        weightkg: 6.6,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "chargebeam", "charm", "confuseray", "confusion", "defensecurl", "destinybond", "disable", "doubleedge", "doubleteam", "dreameater", "encore", "endure", "facade", "firepunch", "flash", "fling", "frustration", "futuresight", "grassknot", "growl", "grudge", "headbutt", "helpinghand", "hiddenpower", "hypnosis", "icepunch", "icywind", "imprison", "lightscreen", "luckychant", "magicalleaf", "magiccoat", "meanlook", "memento", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "safeguard", "secretpower", "shadowball", "shadowsneak", "shockwave", "signalbeam", "sing", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "swift", "taunt", "teleport", "thief", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "willowisp", "wish", "zenheadbutt"]
    },
    Kirlia:
    {
        id: 281,
        uid: 51,
        name: "Kirlia",
        abilities: ["synchronize", "trace"],
        types: ["psychic", "???"],
        baseStats: {hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50},
        weightkg: 20.2,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "chargebeam", "charm", "confusion", "defensecurl", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "firepunch", "flash", "fling", "frustration", "futuresight", "grassknot", "growl", "headbutt", "helpinghand", "hiddenpower", "hypnosis", "icepunch", "icywind", "imprison", "lightscreen", "luckychant", "magicalleaf", "magiccoat", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "swift", "taunt", "teleport", "thief", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Gardevoir:
    {
        id: 282,
        uid: 52,
        name: "Gardevoir",
        abilities: ["synchronize", "trace"],
        types: ["psychic", "???"],
        baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
        weightkg: 48.4,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "chargebeam", "confusion", "defensecurl", "doubleedge", "doubleteam", "dreameater", "endure", "energyball", "facade", "firepunch", "flash", "fling", "focusblast", "frustration", "futuresight", "gigaimpact", "grassknot", "growl", "headbutt", "healbell", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "hypnosis", "icepunch", "icywind", "imprison", "lightscreen", "magicalleaf", "magiccoat", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "swift", "taunt", "teleport", "thief", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "wish", "zenheadbutt"]
    },
    Exploud:
    {
        id: 295,
        uid: 53,
        name: "Exploud",
        abilities: ["soundproof"],
        types: ["normal", "???"],
        baseStats: {hp: 104, atk: 91, def: 63, spa: 91, spd: 63, spe: 68},
        weightkg: 84,
        movepool: ["astonish", "attract", "avalanche", "bite", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "crunch", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firefang", "firepunch", "flamethrower", "fling", "focusblast", "frustration", "gigaimpact", "headbutt", "hiddenpower", "howl", "hyperbeam", "hypervoice", "icebeam", "icefang", "icepunch", "icywind", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "overheat", "pound", "protect", "psychup", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "screech", "secretpower", "seismictoss", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "stomp", "strength", "substitute", "sunnyday", "supersonic", "surf", "swagger", "taunt", "thunderfang", "thunderpunch", "torment", "toxic", "uproar", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Azurill:
    {
        id: 298,
        uid: 54,
        name: "Azurill",
        abilities: ["thickfat", "hugepower"],
        types: ["normal", "???"],
        baseStats: {hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20},
        weightkg: 2,
        movepool: ["attract", "blizzard", "bodyslam", "bubble", "captivate", "charm", "defensecurl", "doubleedge", "doubleteam", "encore", "endure", "facade", "faketears", "frustration", "hail", "headbutt", "helpinghand", "hiddenpower", "icebeam", "icywind", "irontail", "knockoff", "mimic", "mudslap", "naturalgift", "protect", "raindance", "refresh", "rest", "return", "rollout", "secretpower", "sing", "slam", "sleeptalk", "snore", "splash", "substitute", "surf", "swagger", "swift", "tailwhip", "tickle", "toxic", "uproar", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Mawile:
    {
        id: 303,
        uid: 55,
        name: "Mawile",
        abilities: ["hypercutter", "intimidate"],
        types: ["steel", "???"],
        baseStats: {hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50},
        weightkg: 11.5,
        movepool: ["ancientpower", "astonish", "attract", "batonpass", "bite", "bodyslam", "brickbreak", "captivate", "chargebeam", "counter", "crunch", "darkpulse", "doubleedge", "doubleteam", "dynamicpunch", "embargo", "endure", "facade", "faketears", "falseswipe", "feintattack", "fireblast", "firefang", "flamethrower", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "guardswap", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icefang", "icepunch", "icywind", "irondefense", "ironhead", "knockoff", "magnetrise", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "painsplit", "payback", "poisonfang", "protect", "psychup", "punishment", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "seismictoss", "shadowball", "sing", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spitup", "stockpile", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "swallow", "sweetscent", "swordsdance", "taunt", "thunderfang", "thunderpunch", "tickle", "torment", "toxic", "visegrip"]
    },
    Plusle:
    {
        id: 311,
        uid: 56,
        name: "Plusle",
        abilities: ["plus"],
        types: ["electric", "???"],
        baseStats: {hp: 60, atk: 50, def: 40, spa: 85, spd: 75, spe: 95},
        weightkg: 4.2,
        movepool: ["agility", "attract", "batonpass", "bodyslam", "captivate", "charge", "chargebeam", "copycat", "counter", "defensecurl", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "encore", "endure", "facade", "faketears", "flash", "fling", "frustration", "grassknot", "growl", "headbutt", "helpinghand", "hiddenpower", "irontail", "lastresort", "lightscreen", "magnetrise", "megakick", "megapunch", "metronome", "mimic", "mudslap", "mudsport", "nastyplot", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "rollout", "secretpower", "seismictoss", "shockwave", "signalbeam", "sing", "sleeptalk", "snore", "spark", "substitute", "swagger", "sweetkiss", "swift", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "uproar", "wish"]
    },
    Minun:
    {
        id: 312,
        uid: 57,
        name: "Minun",
        abilities: ["minus"],
        types: ["electric", "???"],
        baseStats: {hp: 60, atk: 40, def: 50, spa: 75, spd: 85, spe: 95},
        weightkg: 4.2,
        movepool: ["agility", "attract", "batonpass", "bodyslam", "captivate", "charge", "chargebeam", "charm", "copycat", "counter", "defensecurl", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "encore", "endure", "facade", "faketears", "flash", "fling", "frustration", "grassknot", "growl", "headbutt", "helpinghand", "hiddenpower", "irontail", "lastresort", "lightscreen", "magnetrise", "megakick", "megapunch", "metronome", "mimic", "mudslap", "nastyplot", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "rollout", "secretpower", "seismictoss", "shockwave", "signalbeam", "sing", "sleeptalk", "snore", "spark", "substitute", "swagger", "sweetkiss", "swift", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trumpcard", "uproar", "watersport", "wish"]
    },
    Kecleon:
    {
        id: 352,
        uid: 58,
        name: "Kecleon",
        abilities: ["colorchange"],
        types: ["normal", "???"],
        baseStats: {hp: 60, atk: 90, def: 70, spa: 60, spd: 120, spe: 40},
        weightkg: 22,
        movepool: ["aerialace", "ancientpower", "aquatail", "astonish", "attract", "bind", "blizzard", "bodyslam", "brickbreak", "captivate", "chargebeam", "counter", "cut", "defensecurl", "dig", "disable", "dizzypunch", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "endure", "facade", "fakeout", "feint", "feintattack", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focuspunch", "frustration", "furycutter", "furyswipes", "grassknot", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "lastresort", "lick", "lowkick", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "mudslap", "nastyplot", "naturalgift", "protect", "psybeam", "psychup", "raindance", "recover", "recycle", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roleplay", "rollout", "scratch", "screech", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowsneak", "shockwave", "skillswap", "slash", "sleeptalk", "snatch", "snore", "solarbeam", "stealthrock", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tailwhip", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trick", "trickroom", "waterpulse"]
    },
    Duskull:
    {
        id: 355,
        uid: 59,
        name: "Duskull",
        abilities: ["levitate"],
        types: ["ghost", "???"],
        baseStats: {hp: 20, atk: 40, def: 90, spa: 30, spd: 90, spe: 25},
        weightkg: 15,
        movepool: ["astonish", "attract", "blizzard", "bodyslam", "calmmind", "captivate", "chargebeam", "confuseray", "curse", "darkpulse", "destinybond", "disable", "doubleedge", "doubleteam", "dreameater", "embargo", "endure", "facade", "feintattack", "flash", "fling", "foresight", "frustration", "futuresight", "gravity", "grudge", "headbutt", "helpinghand", "hiddenpower", "icebeam", "icywind", "imprison", "leer", "meanlook", "memento", "mimic", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "pursuit", "raindance", "rest", "return", "secretpower", "shadowball", "shadowsneak", "skillswap", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "torment", "toxic", "trick", "trickroom", "willowisp"]
    },
    Dusclops:
    {
        id: 356,
        uid: 60,
        name: "Dusclops",
        abilities: ["pressure"],
        types: ["ghost", "???"],
        baseStats: {hp: 40, atk: 70, def: 130, spa: 60, spd: 130, spe: 25},
        weightkg: 30.6,
        movepool: ["astonish", "attract", "bind", "blizzard", "bodyslam", "brickbreak", "calmmind", "captivate", "chargebeam", "confuseray", "counter", "curse", "darkpulse", "disable", "doubleedge", "doubleteam", "dreameater", "dynamicpunch", "earthquake", "embargo", "endure", "facade", "firepunch", "flash", "fling", "focuspunch", "foresight", "frustration", "futuresight", "gigaimpact", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "leer", "meanlook", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "pursuit", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "secretpower", "seismictoss", "shadowball", "shadowpunch", "shadowsneak", "skillswap", "sleeptalk", "snatch", "snore", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunderpunch", "torment", "toxic", "trick", "trickroom", "willowisp"]
    },
    Regirock:
    {
        id: 377,
        uid: 61,
        name: "Regirock",
        abilities: ["clearbody"],
        types: ["rock", "???"],
        baseStats: {hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50},
        weightkg: 230,
        movepool: ["ancientpower", "block", "bodyslam", "brickbreak", "chargebeam", "counter", "curse", "defensecurl", "dig", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "earthpower", "earthquake", "endure", "explosion", "facade", "firepunch", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "gravity", "hammerarm", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "irondefense", "ironhead", "lockon", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "psychup", "rest", "return", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "seismictoss", "selfdestruct", "shockwave", "sleeptalk", "snore", "stealthrock", "stomp", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "zapcannon"]
    },
    Regice:
    {
        id: 378,
        uid: 62,
        name: "Regice",
        abilities: ["clearbody"],
        types: ["ice", "???"],
        baseStats: {hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50},
        weightkg: 175,
        movepool: ["amnesia", "ancientpower", "avalanche", "blizzard", "block", "bodyslam", "brickbreak", "chargebeam", "counter", "curse", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "explosion", "facade", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "gravity", "hail", "hammerarm", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "ironhead", "lockon", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "psychup", "raindance", "rest", "return", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "secretpower", "seismictoss", "selfdestruct", "shockwave", "signalbeam", "sleeptalk", "snore", "stomp", "strength", "substitute", "superpower", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "zapcannon"]
    },
    Registeel:
    {
        id: 379,
        uid: 63,
        name: "Registeel",
        abilities: ["clearbody"],
        types: ["steel", "???"],
        baseStats: {hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50},
        weightkg: 205,
        movepool: ["aerialace", "amnesia", "ancientpower", "block", "bodyslam", "brickbreak", "chargebeam", "counter", "curse", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "explosion", "facade", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "gravity", "hammerarm", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "irondefense", "ironhead", "lockon", "magnetrise", "megakick", "megapunch", "metalclaw", "mimic", "mudslap", "naturalgift", "protect", "psychup", "raindance", "rest", "return", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "seismictoss", "selfdestruct", "shadowclaw", "shockwave", "sleeptalk", "snore", "stealthrock", "stomp", "strength", "substitute", "sunnyday", "superpower", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "zapcannon"]
    },
    Starly:
    {
        id: 396,
        uid: 64,
        name: "Starly",
        abilities: ["keeneye"],
        types: ["normal", "flying"],
        baseStats: {hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 60},
        weightkg: 2,
        movepool: ["aerialace", "agility", "aircutter", "astonish", "attract", "bravebird", "captivate", "defog", "doubleedge", "doubleteam", "endeavor", "endure", "facade", "featherdance", "fly", "foresight", "frustration", "furyattack", "growl", "heatwave", "hiddenpower", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "pursuit", "quickattack", "raindance", "rest", "return", "roost", "sandattack", "secretpower", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "takedown", "thief", "toxic", "twister", "uturn", "whirlwind", "wingattack"]
    },
    Staraptor:
    {
        id: 398,
        uid: 65,
        name: "Staraptor",
        abilities: ["intimidate"],
        types: ["normal", "flying"],
        baseStats: {hp: 85, atk: 120, def: 70, spa: 50, spd: 50, spe: 100},
        weightkg: 24.9,
        movepool: ["aerialace", "agility", "aircutter", "attract", "bravebird", "captivate", "closecombat", "defog", "doubleteam", "endeavor", "endure", "facade", "fly", "frustration", "gigaimpact", "growl", "heatwave", "hiddenpower", "hyperbeam", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "quickattack", "raindance", "rest", "return", "roost", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "takedown", "thief", "toxic", "twister", "uturn", "whirlwind", "wingattack"]
    },
    Roserade:
    {
        id: 407,
        uid: 66,
        name: "Roserade",
        abilities: ["naturalcure", "poisonpoint"],
        types: ["grass", "poison"],
        baseStats: {hp: 60, atk: 70, def: 55, spa: 125, spd: 105, spe: 90},
        weightkg: 14.5,
        movepool: ["attract", "bulletseed", "captivate", "cut", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "hiddenpower", "hyperbeam", "magicalleaf", "megadrain", "mudslap", "naturalgift", "poisonjab", "poisonsting", "protect", "psychup", "raindance", "rest", "return", "secretpower", "seedbomb", "shadowball", "sleeptalk", "sludgebomb", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetscent", "swift", "swordsdance", "synthesis", "toxic", "weatherball", "worryseed"]
    },
    "Mime Jr.":
    {
        id: 439,
        uid: 67,
        name: "Mime Jr.",
        abilities: ["soundproof", "filter"],
        types: ["psychic", "???"],
        baseStats: {hp: 20, atk: 25, def: 45, spa: 70, spd: 90, spe: 60},
        weightkg: 13,
        movepool: ["attract", "barrier", "batonpass", "brickbreak", "calmmind", "captivate", "chargebeam", "charm", "confuseray", "confusion", "copycat", "doubleslap", "doubleteam", "drainpunch", "dreameater", "encore", "endure", "facade", "fakeout", "flash", "fling", "focuspunch", "frustration", "futuresight", "grassknot", "headbutt", "healingwish", "helpinghand", "hiddenpower", "hypnosis", "lightscreen", "magiccoat", "meditate", "mimic", "mudslap", "nastyplot", "naturalgift", "protect", "psybeam", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "taunt", "teeterdance", "thief", "thunder", "thunderbolt", "thunderwave", "tickle", "torment", "toxic", "trick", "trickroom", "uproar", "wakeupslap"]
    },
    Togekiss:
    {
        id: 468,
        uid: 68,
        name: "Togekiss",
        abilities: ["hustle", "serenegrace"],
        types: ["normal", "flying"],
        baseStats: {hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80},
        weightkg: 38,
        movepool: ["aerialace", "aircutter", "airslash", "ancientpower", "attract", "aurasphere", "brickbreak", "captivate", "defog", "doubleteam", "drainpunch", "dreameater", "endeavor", "endure", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "fling", "fly", "focuspunch", "frustration", "gigaimpact", "grassknot", "headbutt", "healbell", "heatwave", "hiddenpower", "hyperbeam", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "psychic", "psychup", "raindance", "reflect", "rest", "return", "rocksmash", "rollout", "roost", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "silverwind", "skyattack", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thunderwave", "toxic", "trick", "twister", "waterpulse", "zenheadbutt"]
    },
    Dusknoir:
    {
        id: 477,
        uid: 69,
        name: "Dusknoir",
        abilities: ["pressure"],
        types: ["ghost", "???"],
        baseStats: {hp: 45, atk: 100, def: 135, spa: 65, spd: 135, spe: 45},
        weightkg: 106.6,
        movepool: ["astonish", "attract", "bind", "blizzard", "brickbreak", "calmmind", "captivate", "chargebeam", "confuseray", "curse", "darkpulse", "disable", "doubleteam", "dreameater", "earthquake", "embargo", "endure", "facade", "firepunch", "flash", "fling", "focusblast", "focuspunch", "foresight", "frustration", "futuresight", "gigaimpact", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "leer", "meanlook", "mudslap", "naturalgift", "nightshade", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "pursuit", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "secretpower", "shadowball", "shadowpunch", "shadowsneak", "skillswap", "sleeptalk", "snatch", "snore", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunderpunch", "torment", "toxic", "trick", "trickroom", "willowisp"]
    },
    Heatran:
    {
        id: 485,
        uid: 70,
        name: "Heatran",
        abilities: ["flashfire"],
        types: ["fire", "steel"],
        baseStats: {hp: 91, atk: 90, def: 106, spa: 130, spd: 106, spe: 77},
        weightkg: 430,
        movepool: ["ancientpower", "attract", "bugbite", "captivate", "crunch", "darkpulse", "dig", "doubleteam", "dragonpulse", "earthpower", "earthquake", "endure", "eruption", "explosion", "facade", "fireblast", "firefang", "firespin", "flamethrower", "flashcannon", "frustration", "gigaimpact", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "irondefense", "ironhead", "lavaplume", "leer", "magmastorm", "metalsound", "mudslap", "naturalgift", "overheat", "payback", "protect", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "scaryface", "secretpower", "sleeptalk", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "taunt", "torment", "toxic", "uproar", "willowisp"]
    },
    Arbok:
    {
        id: 24,
        uid: 71,
        name: "Arbok",
        abilities: ["intimidate", "shedskin"],
        types: ["poison", "???"],
        baseStats: {hp: 60, atk: 85, def: 69, spa: 65, spd: 79, spe: 80},
        weightkg: 65,
        movepool: ["acid", "aquatail", "attract", "bite", "bodyslam", "captivate", "crunch", "darkpulse", "dig", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "firefang", "frustration", "gastroacid", "gigadrain", "gigaimpact", "glare", "gunkshot", "haze", "headbutt", "hiddenpower", "hyperbeam", "icefang", "irontail", "leer", "mimic", "mudbomb", "naturalgift", "payback", "poisonjab", "poisonsting", "protect", "raindance", "refresh", "rest", "return", "rockslide", "rocktomb", "screech", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snatch", "snore", "spite", "spitup", "stockpile", "strength", "substitute", "sunnyday", "swagger", "swallow", "thief", "thunderfang", "torment", "toxic", "wrap"]
    },
    Dugtrio:
    {
        id: 51,
        uid: 72,
        name: "Dugtrio",
        abilities: ["sandveil", "arenatrap"],
        types: ["ground", "???"],
        baseStats: {hp: 35, atk: 80, def: 50, spa: 50, spd: 70, spe: 120},
        weightkg: 33.3,
        movepool: ["aerialace", "astonish", "attract", "bodyslam", "captivate", "charm", "cut", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "fissure", "frustration", "furyswipes", "gigaimpact", "growl", "hiddenpower", "hyperbeam", "magnitude", "mimic", "mudbomb", "mudslap", "naturalgift", "nightslash", "protect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "sandtomb", "scratch", "secretpower", "shadowclaw", "slash", "sleeptalk", "sludgebomb", "snore", "stealthrock", "stoneedge", "substitute", "suckerpunch", "sunnyday", "swagger", "thief", "toxic", "triattack"]
    },
    "Farfetch'd":
    {
        id: 83,
        uid: 73,
        name: "Farfetch'd",
        abilities: ["keeneye", "innerfocus"],
        types: ["normal", "flying"],
        baseStats: {hp: 52, atk: 65, def: 55, spa: 58, spd: 62, spe: 60},
        weightkg: 15,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "attract", "batonpass", "bodyslam", "captivate", "covet", "curse", "cut", "defog", "doubleedge", "doubleteam", "endure", "facade", "falseswipe", "featherdance", "feint", "flail", "fly", "foresight", "frustration", "furyattack", "furycutter", "gust", "headbutt", "heatwave", "hiddenpower", "irontail", "knockoff", "lastresort", "leafblade", "leer", "mimic", "mirrormove", "mudslap", "naturalgift", "nightslash", "ominouswind", "peck", "pluck", "poisonjab", "protect", "psychup", "quickattack", "rest", "return", "roost", "sandattack", "secretpower", "slash", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thief", "toxic", "twister", "uproar", "uturn", "wish", "yawn"]
    },
    Dodrio:
    {
        id: 85,
        uid: 74,
        name: "Dodrio",
        abilities: ["runaway", "earlybird"],
        types: ["normal", "flying"],
        baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100},
        weightkg: 85.2,
        movepool: ["acupressure", "aerialace", "agility", "aircutter", "attract", "batonpass", "bodyslam", "captivate", "doubleedge", "doubleteam", "drillpeck", "endeavor", "endure", "facade", "fly", "frustration", "furyattack", "gigaimpact", "growl", "hiddenpower", "hyperbeam", "knockoff", "mimic", "mudslap", "naturalgift", "payback", "peck", "pluck", "protect", "pursuit", "quickattack", "rage", "rest", "return", "roost", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "taunt", "thief", "torment", "toxic", "triattack", "uproar"]
    },
    Gengar:
    {
        id: 94,
        uid: 75,
        name: "Gengar",
        abilities: ["levitate"],
        types: ["ghost", "poison"],
        baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110},
        weightkg: 40.5,
        movepool: ["attract", "bodyslam", "brickbreak", "captivate", "confuseray", "counter", "curse", "darkpulse", "destinybond", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "embargo", "endure", "energyball", "explosion", "facade", "firepunch", "fling", "focusblast", "focuspunch", "frustration", "gigadrain", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "hypnosis", "icepunch", "icywind", "knockoff", "lick", "meanlook", "megakick", "megapunch", "metronome", "mimic", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "poisonjab", "protect", "psychic", "psychup", "raindance", "rest", "return", "rocksmash", "roleplay", "secretpower", "seismictoss", "selfdestruct", "shadowball", "shadowclaw", "shadowpunch", "skillswap", "sleeptalk", "sludgebomb", "snatch", "snore", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "torment", "toxic", "trick", "trickroom", "uproar", "willowisp"]
    },
    Electrode:
    {
        id: 101,
        uid: 76,
        name: "Electrode",
        abilities: ["soundproof", "static"],
        types: ["electric", "???"],
        baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 140},
        weightkg: 66.6,
        movepool: ["charge", "chargebeam", "doubleteam", "endure", "explosion", "facade", "flash", "frustration", "gigaimpact", "gyroball", "headbutt", "hiddenpower", "hyperbeam", "lightscreen", "magiccoat", "magnetrise", "mimic", "mirrorcoat", "naturalgift", "protect", "raindance", "rest", "return", "rollout", "screech", "secretpower", "selfdestruct", "shockwave", "signalbeam", "sleeptalk", "snore", "sonicboom", "spark", "substitute", "suckerpunch", "swagger", "swift", "tackle", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic"]
    },
    Exeggutor:
    {
        id: 103,
        uid: 77,
        name: "Exeggutor",
        abilities: ["chlorophyll"],
        types: ["grass", "psychic"],
        baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 65, spe: 55},
        weightkg: 120,
        movepool: ["ancientpower", "attract", "barrage", "bulletseed", "captivate", "confusion", "doubleedge", "doubleteam", "dreameater", "eggbomb", "endure", "energyball", "explosion", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "gravity", "headbutt", "hiddenpower", "hyperbeam", "hypnosis", "leafstorm", "lightscreen", "lowkick", "mimic", "naturalgift", "nightmare", "protect", "psychic", "psychup", "reflect", "refresh", "rest", "return", "rollout", "secretpower", "seedbomb", "selfdestruct", "skillswap", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stomp", "strength", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "thief", "toxic", "trickroom", "woodhammer", "worryseed", "zenheadbutt"]
    },
    Noctowl:
    {
        id: 164,
        uid: 78,
        name: "Noctowl",
        abilities: ["insomnia", "keeneye"],
        types: ["normal", "flying"],
        baseStats: {hp: 100, atk: 50, def: 50, spa: 76, spd: 96, spe: 70},
        weightkg: 40.8,
        movepool: ["aerialace", "aircutter", "airslash", "attract", "captivate", "confusion", "defog", "doubleedge", "doubleteam", "dreameater", "endure", "extrasensory", "facade", "flash", "fly", "foresight", "frustration", "gigaimpact", "growl", "heatwave", "hiddenpower", "hyperbeam", "hypnosis", "magiccoat", "mimic", "mudslap", "naturalgift", "nightmare", "ominouswind", "peck", "pluck", "protect", "psychic", "psychoshift", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roost", "secretpower", "shadowball", "silverwind", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "takedown", "thief", "toxic", "twister", "uproar", "zenheadbutt"]
    },
    Ariados:
    {
        id: 168,
        uid: 79,
        name: "Ariados",
        abilities: ["swarm", "insomnia"],
        types: ["bug", "poison"],
        baseStats: {hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 40},
        weightkg: 33.5,
        movepool: ["agility", "attract", "bodyslam", "bounce", "bugbite", "captivate", "constrict", "dig", "doubleedge", "doubleteam", "endure", "facade", "flash", "frustration", "furyswipes", "gigadrain", "gigaimpact", "hiddenpower", "hyperbeam", "leechlife", "mimic", "naturalgift", "nightshade", "pinmissile", "poisonjab", "poisonsting", "protect", "psychic", "rest", "return", "scaryface", "secretpower", "shadowsneak", "signalbeam", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spiderweb", "stringshot", "substitute", "suckerpunch", "sunnyday", "swagger", "thief", "toxic"]
    },
    Qwilfish:
    {
        id: 211,
        uid: 80,
        name: "Qwilfish",
        abilities: ["poisonpoint", "swiftswim"],
        types: ["water", "poison"],
        baseStats: {hp: 65, atk: 95, def: 75, spa: 55, spd: 55, spe: 85},
        weightkg: 3.9,
        movepool: ["aquajet", "aquatail", "astonish", "attract", "blizzard", "bounce", "brine", "bubblebeam", "captivate", "defensecurl", "destinybond", "dive", "doubleedge", "doubleteam", "endure", "explosion", "facade", "flail", "frustration", "gyroball", "hail", "harden", "haze", "headbutt", "hiddenpower", "hydropump", "icebeam", "icywind", "mimic", "minimize", "naturalgift", "painsplit", "payback", "pinmissile", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "revenge", "rollout", "secretpower", "selfdestruct", "shadowball", "shockwave", "signalbeam", "sleeptalk", "sludgebomb", "snore", "spikes", "spitup", "stockpile", "substitute", "supersonic", "surf", "swagger", "swift", "swordsdance", "tackle", "takedown", "taunt", "thunderwave", "toxic", "toxicspikes", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Magcargo:
    {
        id: 219,
        uid: 81,
        name: "Magcargo",
        abilities: ["magmaarmor", "flamebody"],
        types: ["fire", "rock"],
        baseStats: {hp: 50, atk: 50, def: 120, spa: 80, spd: 80, spe: 30},
        weightkg: 55,
        movepool: ["amnesia", "ancientpower", "attract", "bodyslam", "captivate", "defensecurl", "doubleedge", "doubleteam", "earthpower", "earthquake", "ember", "endure", "explosion", "facade", "fireblast", "flamethrower", "frustration", "gigaimpact", "gyroball", "harden", "heatwave", "hiddenpower", "hyperbeam", "irondefense", "lavaplume", "lightscreen", "mimic", "mudslap", "naturalgift", "overheat", "painsplit", "protect", "recover", "reflect", "refresh", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "sandstorm", "secretpower", "selfdestruct", "sleeptalk", "smog", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "toxic", "willowisp", "yawn"]
    },
    Corsola:
    {
        id: 222,
        uid: 82,
        name: "Corsola",
        abilities: ["hustle", "naturalcure"],
        types: ["water", "rock"],
        baseStats: {hp: 55, atk: 55, def: 85, spa: 65, spd: 85, spe: 35},
        weightkg: 5,
        movepool: ["amnesia", "ancientpower", "aquaring", "attract", "barrier", "blizzard", "bodyslam", "brine", "bubble", "bubblebeam", "calmmind", "captivate", "confuseray", "curse", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endeavor", "endure", "explosion", "facade", "frustration", "hail", "harden", "headbutt", "hiddenpower", "icebeam", "iciclespear", "icywind", "ingrain", "lightscreen", "luckychant", "magiccoat", "mimic", "mirrorcoat", "mist", "mudslap", "mudsport", "naturalgift", "naturepower", "powergem", "protect", "psychic", "raindance", "recover", "reflect", "refresh", "rest", "return", "rockblast", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandstorm", "screech", "secretpower", "selfdestruct", "shadowball", "sleeptalk", "snore", "spikecannon", "stealthrock", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "surf", "swagger", "tackle", "toxic", "waterpulse", "whirlpool"]
    },
    Mantine:
    {
        id: 226,
        uid: 83,
        name: "Mantine",
        abilities: ["swiftswim", "waterabsorb"],
        types: ["water", "flying"],
        baseStats: {hp: 65, atk: 40, def: 70, spa: 80, spd: 140, spe: 70},
        weightkg: 220,
        movepool: ["aerialace", "agility", "aircutter", "aquaring", "aquatail", "attract", "blizzard", "bodyslam", "bounce", "brine", "bubble", "bubblebeam", "bulletseed", "captivate", "confuseray", "defog", "dive", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "frustration", "gigaimpact", "gunkshot", "hail", "haze", "headbutt", "helpinghand", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "ironhead", "mimic", "mirrorcoat", "mudslap", "mudsport", "naturalgift", "protect", "psybeam", "raindance", "rest", "return", "rockslide", "rocktomb", "secretpower", "seedbomb", "signalbeam", "slam", "sleeptalk", "snore", "splash", "stringshot", "substitute", "supersonic", "surf", "swagger", "swift", "tackle", "tailwind", "takedown", "toxic", "twister", "waterfall", "waterpulse", "watersport", "whirlpool", "wingattack"]
    },
    Swellow:
    {
        id: 277,
        uid: 84,
        name: "Swellow",
        abilities: ["guts"],
        types: ["normal", "flying"],
        baseStats: {hp: 60, atk: 85, def: 60, spa: 50, spd: 50, spe: 125},
        weightkg: 19.8,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "attract", "batonpass", "captivate", "counter", "defog", "doubleedge", "doubleteam", "endeavor", "endure", "facade", "fly", "focusenergy", "frustration", "gigaimpact", "growl", "heatwave", "hiddenpower", "hyperbeam", "mimic", "mudslap", "naturalgift", "ominouswind", "peck", "pluck", "protect", "quickattack", "raindance", "rest", "return", "roost", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thief", "toxic", "twister", "uturn", "wingattack"]
    },
    Wingull:
    {
        id: 278,
        uid: 85,
        name: "Wingull",
        abilities: ["keeneye"],
        types: ["water", "flying"],
        baseStats: {hp: 40, atk: 30, def: 30, spa: 55, spd: 30, spe: 85},
        weightkg: 9.5,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "aquaring", "attract", "blizzard", "brine", "captivate", "defog", "doubleedge", "doubleteam", "endure", "facade", "fly", "frustration", "growl", "gust", "hail", "hiddenpower", "icebeam", "icywind", "knockoff", "mimic", "mist", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "pursuit", "quickattack", "raindance", "rest", "return", "roost", "secretpower", "shockwave", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "supersonic", "swagger", "swift", "tailwind", "thief", "toxic", "twister", "uproar", "uturn", "watergun", "waterpulse", "watersport", "wingattack"]
    },
    Pelipper:
    {
        id: 279,
        uid: 86,
        name: "Pelipper",
        abilities: ["keeneye"],
        types: ["water", "flying"],
        baseStats: {hp: 60, atk: 50, def: 100, spa: 85, spd: 70, spe: 65},
        weightkg: 28,
        movepool: ["aerialace", "aircutter", "attract", "blizzard", "brine", "captivate", "defog", "doubleedge", "doubleteam", "endure", "facade", "fling", "fly", "frustration", "gigaimpact", "growl", "gunkshot", "hail", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "knockoff", "mimic", "mist", "mudslap", "naturalgift", "ominouswind", "payback", "pluck", "protect", "raindance", "rest", "return", "roost", "secretpower", "seedbomb", "shockwave", "skyattack", "sleeptalk", "snore", "spitup", "steelwing", "stockpile", "substitute", "supersonic", "surf", "swagger", "swallow", "swift", "tailwind", "thief", "toxic", "twister", "uproar", "uturn", "watergun", "waterpulse", "watersport", "whirlpool", "wingattack"]
    },
    Masquerain:
    {
        id: 284,
        uid: 87,
        name: "Masquerain",
        abilities: ["intimidate"],
        types: ["bug", "flying"],
        baseStats: {hp: 70, atk: 60, def: 62, spa: 80, spd: 82, spe: 60},
        weightkg: 3.6,
        movepool: ["aerialace", "aircutter", "airslash", "attract", "blizzard", "bubble", "bugbite", "bugbuzz", "captivate", "defog", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "gust", "hiddenpower", "hyperbeam", "icebeam", "icywind", "mimic", "mudslap", "naturalgift", "nightmare", "ominouswind", "protect", "psychup", "quickattack", "raindance", "rest", "return", "roost", "scaryface", "secretpower", "shadowball", "signalbeam", "silverwind", "sleeptalk", "snore", "solarbeam", "stringshot", "stunspore", "substitute", "sunnyday", "swagger", "sweetscent", "swift", "tailwind", "thief", "toxic", "twister", "uturn", "waterpulse", "watersport", "whirlwind"]
    },
    Delcatty:
    {
        id: 301,
        uid: 88,
        name: "Delcatty",
        abilities: ["cutecharm", "normalize"],
        types: ["normal", "???"],
        baseStats: {hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 70},
        weightkg: 32.6,
        movepool: ["attract", "blizzard", "bodyslam", "calmmind", "captivate", "chargebeam", "defensecurl", "dig", "doubleedge", "doubleslap", "doubleteam", "dreameater", "endure", "facade", "fakeout", "flash", "frustration", "gigaimpact", "grassknot", "growl", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "lastresort", "mimic", "mudslap", "naturalgift", "payback", "protect", "psychup", "raindance", "rest", "return", "rocksmash", "rollout", "safeguard", "secretpower", "shadowball", "shockwave", "sing", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "sweetkiss", "swift", "thunder", "thunderbolt", "thunderwave", "toxic", "waterpulse", "zenheadbutt"]
    },
    Volbeat:
    {
        id: 313,
        uid: 89,
        name: "Volbeat",
        abilities: ["illuminate", "swarm"],
        types: ["bug", "???"],
        baseStats: {hp: 65, atk: 73, def: 55, spa: 47, spd: 75, spe: 85},
        weightkg: 17.7,
        movepool: ["aerialace", "aircutter", "attract", "batonpass", "bodyslam", "brickbreak", "bugbite", "bugbuzz", "captivate", "chargebeam", "confuseray", "counter", "doubleedge", "doubleteam", "dynamicpunch", "encore", "endure", "facade", "flash", "fling", "focuspunch", "frustration", "gigadrain", "helpinghand", "hiddenpower", "icepunch", "lightscreen", "megakick", "megapunch", "metronome", "mimic", "moonlight", "mudslap", "naturalgift", "ominouswind", "protect", "psychup", "quickattack", "raindance", "rest", "return", "roost", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "silverwind", "sleeptalk", "snore", "solarbeam", "stringshot", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailglow", "tailwind", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trick", "uturn", "waterpulse", "zenheadbutt"]
    },
    Illumise:
    {
        id: 314,
        uid: 90,
        name: "Illumise",
        abilities: ["oblivious", "tintedlens"],
        types: ["bug", "???"],
        baseStats: {hp: 65, atk: 47, def: 55, spa: 73, spd: 75, spe: 85},
        weightkg: 17.7,
        movepool: ["aerialace", "aircutter", "attract", "batonpass", "bodyslam", "brickbreak", "bugbite", "bugbuzz", "captivate", "chargebeam", "charm", "counter", "covet", "doubleedge", "doubleteam", "dynamicpunch", "encore", "endure", "facade", "flash", "flatter", "fling", "focuspunch", "frustration", "gigadrain", "growth", "helpinghand", "hiddenpower", "icepunch", "lightscreen", "megakick", "megapunch", "metronome", "mimic", "moonlight", "mudslap", "naturalgift", "ominouswind", "protect", "psychup", "quickattack", "raindance", "rest", "return", "roost", "secretpower", "seismictoss", "shadowball", "shockwave", "silverwind", "sleeptalk", "snore", "solarbeam", "stringshot", "substitute", "sunnyday", "swagger", "sweetscent", "swift", "tackle", "tailwind", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "uturn", "waterpulse", "wish", "zenheadbutt"]
    },
    Torkoal:
    {
        id: 324,
        uid: 91,
        name: "Torkoal",
        abilities: ["whitesmoke"],
        types: ["fire", "???"],
        baseStats: {hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20},
        weightkg: 80.4,
        movepool: ["amnesia", "attract", "bodyslam", "captivate", "curse", "doubleedge", "doubleteam", "earthpower", "earthquake", "ember", "endure", "eruption", "explosion", "facade", "fireblast", "firespin", "fissure", "flail", "flamethrower", "frustration", "gigaimpact", "gyroball", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "irondefense", "irontail", "lavaplume", "mimic", "mudslap", "naturalgift", "overheat", "protect", "rapidspin", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "selfdestruct", "skullbash", "sleeptalk", "sludgebomb", "smog", "smokescreen", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "toxic", "willowisp", "withdraw", "yawn"]
    },
    Lunatone:
    {
        id: 337,
        uid: 92,
        name: "Lunatone",
        abilities: ["levitate"],
        types: ["rock", "psychic"],
        baseStats: {hp: 70, atk: 55, def: 65, spa: 95, spd: 85, spe: 70},
        weightkg: 168,
        movepool: ["ancientpower", "batonpass", "blizzard", "bodyslam", "calmmind", "chargebeam", "confusion", "cosmicpower", "defensecurl", "doubleedge", "doubleteam", "dreameater", "earthpower", "earthquake", "embargo", "endure", "explosion", "facade", "flash", "frustration", "futuresight", "gigaimpact", "grassknot", "gravity", "gyroball", "harden", "healblock", "helpinghand", "hiddenpower", "hyperbeam", "hypnosis", "icebeam", "ironhead", "lightscreen", "magiccoat", "mimic", "naturalgift", "painsplit", "protect", "psychic", "psychup", "psywave", "raindance", "recycle", "reflect", "rest", "return", "rockpolish", "rockslide", "rockthrow", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "selfdestruct", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "stealthrock", "stoneedge", "substitute", "swagger", "swift", "tackle", "toxic", "trickroom", "zenheadbutt"]
    },
    Solrock:
    {
        id: 338,
        uid: 93,
        name: "Solrock",
        abilities: ["levitate"],
        types: ["rock", "psychic"],
        baseStats: {hp: 70, atk: 95, def: 85, spa: 55, spd: 65, spe: 70},
        weightkg: 154,
        movepool: ["ancientpower", "batonpass", "bodyslam", "calmmind", "chargebeam", "confusion", "cosmicpower", "defensecurl", "doubleedge", "doubleteam", "dreameater", "earthpower", "earthquake", "embargo", "endure", "explosion", "facade", "fireblast", "firespin", "flamethrower", "flash", "frustration", "gigaimpact", "grassknot", "gravity", "gyroball", "harden", "healblock", "helpinghand", "hiddenpower", "hyperbeam", "irondefense", "ironhead", "lightscreen", "magiccoat", "mimic", "naturalgift", "overheat", "painsplit", "protect", "psychic", "psychup", "psywave", "recycle", "reflect", "rest", "return", "rockpolish", "rockslide", "rockthrow", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "selfdestruct", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "stealthrock", "stoneedge", "substitute", "sunnyday", "swagger", "swift", "tackle", "toxic", "trickroom", "willowisp", "zenheadbutt"]
    },
    Castform:
    {
        id: 351,
        uid: 94,
        name: "Castform",
        otherForms: ["castformsunny", "castformrainy", "castformsnowy"],
        abilities: ["forecast"],
        types: ["normal", "???"],
        baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
        weightkg: 0.8,
        movepool: ["amnesia", "attract", "avalanche", "blizzard", "bodyslam", "captivate", "defensecurl", "disable", "doubleedge", "doubleteam", "ember", "endure", "energyball", "facade", "fireblast", "flamethrower", "flash", "frustration", "futuresight", "hail", "hiddenpower", "icebeam", "icywind", "lastresort", "luckychant", "mimic", "naturalgift", "ominouswind", "powdersnow", "protect", "psychup", "raindance", "rest", "return", "sandstorm", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "watergun", "waterpulse", "weatherball"]
    },
    "Castform-Sunny":
    {
        id: 351,
        uid: 95,
        name: "Castform-Sunny",
        baseSpecies: "Castform",
        form: "Sunny",
        abilities: ["forecast"],
        types: ["fire", "???"],
        baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
        weightkg: 0.8,
        movepool: ["amnesia", "attract", "avalanche", "blizzard", "bodyslam", "captivate", "defensecurl", "disable", "doubleedge", "doubleteam", "ember", "endure", "energyball", "facade", "fireblast", "flamethrower", "flash", "frustration", "futuresight", "hail", "hiddenpower", "icebeam", "icywind", "lastresort", "luckychant", "mimic", "naturalgift", "ominouswind", "powdersnow", "protect", "psychup", "raindance", "rest", "return", "sandstorm", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "watergun", "waterpulse", "weatherball"]
    },
    "Castform-Rainy":
    {
        id: 351,
        uid: 96,
        name: "Castform-Rainy",
        baseSpecies: "Castform",
        form: "Rainy",
        abilities: ["forecast"],
        types: ["water", "???"],
        baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
        weightkg: 0.8,
        movepool: ["amnesia", "attract", "avalanche", "blizzard", "bodyslam", "captivate", "defensecurl", "disable", "doubleedge", "doubleteam", "ember", "endure", "energyball", "facade", "fireblast", "flamethrower", "flash", "frustration", "futuresight", "hail", "hiddenpower", "icebeam", "icywind", "lastresort", "luckychant", "mimic", "naturalgift", "ominouswind", "powdersnow", "protect", "psychup", "raindance", "rest", "return", "sandstorm", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "watergun", "waterpulse", "weatherball"]
    },
    Chimecho:
    {
        id: 358,
        uid: 97,
        name: "Chimecho",
        abilities: ["levitate"],
        types: ["psychic", "???"],
        baseStats: {hp: 65, atk: 50, def: 70, spa: 95, spd: 80, spe: 65},
        weightkg: 1,
        movepool: ["astonish", "attract", "calmmind", "captivate", "chargebeam", "confusion", "curse", "defensecurl", "disable", "doubleedge", "doubleteam", "dreameater", "endure", "energyball", "extrasensory", "facade", "flash", "frustration", "futuresight", "grassknot", "gravity", "growl", "healbell", "healingwish", "helpinghand", "hiddenpower", "hypnosis", "icywind", "knockoff", "lastresort", "lightscreen", "magiccoat", "mimic", "naturalgift", "nightmare", "protect", "psychic", "psychup", "psywave", "raindance", "recycle", "reflect", "rest", "return", "rollout", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "takedown", "taunt", "thunderwave", "torment", "toxic", "trick", "trickroom", "uproar", "wish", "wrap", "yawn", "zenheadbutt"]
    },
    Burmy:
    {
        id: 412,
        uid: 98,
        name: "Burmy",
        baseForm: "Plant",
        abilities: ["shedskin"],
        types: ["bug", "???"],
        baseStats: {hp: 40, atk: 29, def: 45, spa: 29, spd: 45, spe: 36},
        weightkg: 3.4,
        movepool: ["bugbite", "hiddenpower", "protect", "snore", "stringshot", "tackle"]
    },
    Wormadam:
    {
        id: 413,
        uid: 99,
        name: "Wormadam",
        baseForm: "Plant",
        otherForms: ["wormadamsandy", "wormadamtrash"],
        abilities: ["anticipation"],
        types: ["bug", "grass"],
        baseStats: {hp: 60, atk: 59, def: 85, spa: 79, spd: 105, spe: 36},
        weightkg: 6.5,
        movepool: ["attract", "bugbite", "bulletseed", "captivate", "confusion", "doubleteam", "dreameater", "endeavor", "endure", "energyball", "facade", "flail", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "growth", "hiddenpower", "hyperbeam", "leafstorm", "naturalgift", "protect", "psybeam", "psychic", "psychup", "raindance", "razorleaf", "rest", "return", "safeguard", "secretpower", "seedbomb", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "stringshot", "substitute", "suckerpunch", "sunnyday", "swagger", "synthesis", "tackle", "thief", "toxic", "uproar", "worryseed"]
    },
    "Wormadam-Sandy":
    {
        id: 413,
        uid: 100,
        name: "Wormadam-Sandy",
        baseSpecies: "Wormadam",
        form: "Sandy",
        abilities: ["anticipation"],
        types: ["bug", "ground"],
        baseStats: {hp: 60, atk: 79, def: 105, spa: 59, spd: 85, spe: 36},
        weightkg: 6.5,
        movepool: ["attract", "bugbite", "captivate", "confusion", "dig", "doubleteam", "dreameater", "earthpower", "earthquake", "endeavor", "endure", "facade", "fissure", "flail", "flash", "frustration", "gigaimpact", "harden", "hiddenpower", "hyperbeam", "mudslap", "naturalgift", "protect", "psybeam", "psychic", "psychup", "raindance", "rest", "return", "rockblast", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "stringshot", "substitute", "suckerpunch", "sunnyday", "swagger", "tackle", "thief", "toxic", "uproar", "bulletseed", "energyball", "gigadrain", "grassknot", "growth", "leafstorm", "razorleaf", "seedbomb", "solarbeam", "synthesis", "worryseed"]
    },
    "Wormadam-Trash":
    {
        id: 413,
        uid: 101,
        name: "Wormadam-Trash",
        baseSpecies: "Wormadam",
        form: "Trash",
        abilities: ["anticipation"],
        types: ["bug", "steel"],
        baseStats: {hp: 60, atk: 69, def: 95, spa: 69, spd: 95, spe: 36},
        weightkg: 6.5,
        movepool: ["attract", "bugbite", "captivate", "confusion", "doubleteam", "dreameater", "endeavor", "endure", "facade", "flail", "flash", "flashcannon", "frustration", "gigaimpact", "gunkshot", "gyroball", "hiddenpower", "hyperbeam", "irondefense", "ironhead", "magnetrise", "metalsound", "mirrorshot", "naturalgift", "protect", "psybeam", "psychic", "psychup", "raindance", "rest", "return", "safeguard", "secretpower", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "stealthrock", "stringshot", "substitute", "suckerpunch", "sunnyday", "swagger", "tackle", "thief", "toxic", "uproar", "bulletseed", "energyball", "gigadrain", "grassknot", "growth", "leafstorm", "razorleaf", "seedbomb", "solarbeam", "synthesis", "worryseed"]
    },
    Cherrim:
    {
        id: 421,
        uid: 102,
        name: "Cherrim",
        baseForm: "Overcast",
        otherForms: ["cherrimsunshine"],
        abilities: ["flowergift"],
        types: ["grass", "???"],
        baseStats: {hp: 70, atk: 60, def: 70, spa: 87, spd: 78, spe: 85},
        weightkg: 9.3,
        movepool: ["attract", "bulletseed", "captivate", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "growth", "helpinghand", "hiddenpower", "hyperbeam", "leechseed", "luckychant", "magicalleaf", "naturalgift", "petaldance", "protect", "rest", "return", "rollout", "safeguard", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "tackle", "takedown", "toxic", "worryseed"]
    },
    Arceus:
    {
        id: 493,
        uid: 103,
        name: "Arceus",
        baseForm: "Normal",
        otherForms: ["arceusbug", "arceusdark", "arceusdragon", "arceuselectric", "arceusfighting", "arceusfire", "arceusflying", "arceusghost", "arceusgrass", "arceusground", "arceusice", "arceuspoison", "arceuspsychic", "arceusrock", "arceussteel", "arceuswater"],
        abilities: ["multitype"],
        types: ["normal", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    Charizard:
    {
        id: 6,
        uid: 104,
        name: "Charizard",
        abilities: ["blaze"],
        types: ["fire", "flying"],
        baseStats: {hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100},
        weightkg: 90.5,
        movepool: ["aerialace", "aircutter", "airslash", "attract", "blastburn", "bodyslam", "brickbreak", "captivate", "counter", "cut", "defensecurl", "defog", "dig", "doubleedge", "doubleteam", "dragonclaw", "dragonpulse", "dragonrage", "dynamicpunch", "earthquake", "ember", "endure", "facade", "fireblast", "firefang", "firepunch", "firespin", "flamethrower", "flareblitz", "fling", "fly", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "growl", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "irontail", "megakick", "megapunch", "metalclaw", "mimic", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "protect", "rage", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "roost", "scaryface", "scratch", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "smokescreen", "snore", "solarbeam", "steelwing", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "tailwind", "thunderpunch", "toxic", "twister", "willowisp", "wingattack"]
    },
    Meowth:
    {
        id: 52,
        uid: 105,
        name: "Meowth",
        abilities: ["pickup", "technician"],
        types: ["normal", "???"],
        baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90},
        weightkg: 4.2,
        movepool: ["aerialace", "amnesia", "assist", "assurance", "attract", "bite", "bodyslam", "captivate", "charm", "cut", "darkpulse", "defensecurl", "dig", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "fakeout", "feint", "feintattack", "flail", "flash", "frustration", "furyswipes", "growl", "gunkshot", "headbutt", "hiddenpower", "hypnosis", "icywind", "irontail", "knockoff", "lastresort", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "nightslash", "odorsleuth", "payback", "payday", "petaldance", "protect", "psychup", "punishment", "raindance", "rest", "return", "scratch", "screech", "secretpower", "seedbomb", "shadowball", "shadowclaw", "shockwave", "sing", "slash", "sleeptalk", "snatch", "snore", "spite", "substitute", "sunnyday", "swagger", "swift", "tailwhip", "taunt", "thief", "thunder", "thunderbolt", "torment", "toxic", "uproar", "uturn", "waterpulse"]
    },
    Machamp:
    {
        id: 68,
        uid: 106,
        name: "Machamp",
        abilities: ["guts", "noguard"],
        types: ["fighting", "???"],
        baseStats: {hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55},
        weightkg: 130,
        movepool: ["attract", "bodyslam", "brickbreak", "bulkup", "captivate", "counter", "crosschop", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "foresight", "frustration", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "karatechop", "leer", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "payback", "poisonjab", "protect", "raindance", "rest", "return", "revenge", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "scaryface", "secretpower", "seismictoss", "sleeptalk", "snore", "stoneedge", "strength", "submission", "substitute", "sunnyday", "superpower", "swagger", "thief", "thunderpunch", "toxic", "vacuumwave", "vitalthrow", "wakeupslap"]
    },
    Kingler:
    {
        id: 99,
        uid: 107,
        name: "Kingler",
        abilities: ["hypercutter", "shellarmor"],
        types: ["water", "???"],
        baseStats: {hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75},
        weightkg: 60,
        movepool: ["ancientpower", "attract", "blizzard", "bodyslam", "brickbreak", "brine", "bubble", "bubblebeam", "captivate", "crabhammer", "cut", "dig", "dive", "doubleedge", "doubleteam", "endure", "facade", "falseswipe", "flail", "fling", "frustration", "furycutter", "gigaimpact", "guillotine", "hail", "harden", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irondefense", "knockoff", "leer", "metalclaw", "mimic", "mudshot", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "secretpower", "slam", "sleeptalk", "snore", "stomp", "strength", "substitute", "superpower", "surf", "swagger", "swordsdance", "thief", "toxic", "visegrip", "waterpulse", "whirlpool", "xscissor"]
    },
    Koffing:
    {
        id: 109,
        uid: 108,
        name: "Koffing",
        abilities: ["levitate"],
        types: ["poison", "???"],
        baseStats: {hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35},
        weightkg: 1,
        movepool: ["assurance", "attract", "captivate", "curse", "darkpulse", "destinybond", "doubleteam", "endure", "explosion", "facade", "fireblast", "flamethrower", "flash", "frustration", "grudge", "gyroball", "haze", "hiddenpower", "memento", "mimic", "naturalgift", "painsplit", "payback", "poisongas", "protect", "psybeam", "psywave", "raindance", "rest", "return", "rollout", "screech", "secretpower", "selfdestruct", "shadowball", "shockwave", "sleeptalk", "sludge", "sludgebomb", "smog", "smokescreen", "snore", "spite", "substitute", "sunnyday", "swagger", "tackle", "taunt", "thief", "thunder", "thunderbolt", "torment", "toxic", "uproar", "willowisp"]
    },
    Weezing:
    {
        id: 110,
        uid: 109,
        name: "Weezing",
        otherForms: ["Weezing-Galar"],
        abilities: ["levitate"],
        types: ["poison", "???"],
        baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60},
        weightkg: 9.5,
        movepool: ["assurance", "attract", "captivate", "darkpulse", "destinybond", "doublehit", "doubleteam", "endure", "explosion", "facade", "fireblast", "flamethrower", "flash", "frustration", "gigaimpact", "gyroball", "haze", "hiddenpower", "hyperbeam", "memento", "mimic", "naturalgift", "painsplit", "payback", "poisongas", "protect", "raindance", "rest", "return", "rollout", "secretpower", "selfdestruct", "shadowball", "shockwave", "sleeptalk", "sludge", "sludgebomb", "smog", "smokescreen", "snore", "spite", "substitute", "sunnyday", "swagger", "tackle", "taunt", "thief", "thunder", "thunderbolt", "torment", "toxic", "uproar", "willowisp"]
    },
    Lapras:
    {
        id: 131,
        uid: 110,
        name: "Lapras",
        abilities: ["waterabsorb", "shellarmor"],
        types: ["water", "ice"],
        baseStats: {hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60},
        weightkg: 220,
        movepool: ["ancientpower", "aquatail", "attract", "avalanche", "blizzard", "block", "bodyslam", "brine", "captivate", "confuseray", "curse", "dive", "doubleedge", "doubleteam", "dragondance", "dragonpulse", "dreameater", "endure", "facade", "fissure", "foresight", "frustration", "gigaimpact", "growl", "hail", "headbutt", "healbell", "hiddenpower", "horndrill", "hydropump", "hyperbeam", "icebeam", "iceshard", "icywind", "ironhead", "irontail", "mimic", "mist", "naturalgift", "nightmare", "outrage", "perishsong", "protect", "psychic", "raindance", "refresh", "rest", "return", "roar", "rocksmash", "safeguard", "secretpower", "sheercold", "shockwave", "signalbeam", "sing", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "thunder", "thunderbolt", "tickle", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Eevee:
    {
        id: 133,
        uid: 111,
        name: "Eevee",
        abilities: ["runaway", "adaptability"],
        types: ["normal", "???"],
        baseStats: {hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55},
        weightkg: 6.5,
        movepool: ["attract", "batonpass", "bite", "bodyslam", "captivate", "charm", "covet", "curse", "detect", "dig", "doubleedge", "doubleteam", "endure", "facade", "faketears", "flail", "frustration", "growl", "headbutt", "healbell", "helpinghand", "hiddenpower", "irontail", "lastresort", "mimic", "mudslap", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "sandattack", "secretpower", "shadowball", "sleeptalk", "snore", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "takedown", "tickle", "toxic", "trumpcard", "wish", "yawn"]
    },
    Snorlax:
    {
        id: 143,
        uid: 112,
        name: "Snorlax",
        abilities: ["immunity", "thickfat"],
        types: ["normal", "???"],
        baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30},
        weightkg: 460,
        movepool: ["amnesia", "attract", "bellydrum", "blizzard", "block", "bodyslam", "brickbreak", "captivate", "charm", "counter", "covet", "crunch", "curse", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firepunch", "fissure", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "gunkshot", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "ironhead", "lastresort", "lick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "outrage", "protect", "psychic", "psychup", "pursuit", "raindance", "recycle", "refresh", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "seedbomb", "seismictoss", "selfdestruct", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "tackle", "thunder", "thunderbolt", "thunderpunch", "toxic", "waterpulse", "whirlpool", "whirlwind", "yawn", "zenheadbutt"]
    },
    Trapinch:
    {
        id: 328,
        uid: 113,
        name: "Trapinch",
        abilities: ["hypercutter", "arenatrap"],
        types: ["ground", "???"],
        baseStats: {hp: 45, atk: 100, def: 45, spa: 45, spd: 45, spe: 10},
        weightkg: 15,
        movepool: ["attract", "bite", "bodyslam", "bugbite", "captivate", "crunch", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "feint", "feintattack", "fissure", "flail", "focusenergy", "frustration", "furycutter", "gigadrain", "gust", "headbutt", "hiddenpower", "hyperbeam", "mimic", "mudshot", "mudslap", "naturalgift", "protect", "quickattack", "rest", "return", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "sandtomb", "secretpower", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "toxic"]
    },
    Vibrava:
    {
        id: 329,
        uid: 114,
        name: "Vibrava",
        abilities: ["levitate"],
        types: ["ground", "dragon"],
        baseStats: {hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 70},
        weightkg: 15.3,
        movepool: ["aircutter", "attract", "bite", "bodyslam", "bugbite", "captivate", "crunch", "defog", "dig", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonpulse", "earthpower", "earthquake", "endure", "facade", "feintattack", "fly", "frustration", "furycutter", "gigadrain", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "mimic", "mudslap", "naturalgift", "ominouswind", "outrage", "protect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roost", "sandattack", "sandstorm", "sandtomb", "screech", "secretpower", "silverwind", "sleeptalk", "snore", "solarbeam", "sonicboom", "steelwing", "strength", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tailwind", "toxic", "twister", "uturn"]
    },
    Flygon:
    {
        id: 330,
        uid: 115,
        name: "Flygon",
        abilities: ["levitate"],
        types: ["ground", "dragon"],
        baseStats: {hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100},
        weightkg: 82,
        movepool: ["aerialace", "aircutter", "attract", "bite", "bodyslam", "bugbite", "captivate", "crunch", "defog", "dig", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "earthpower", "earthquake", "endure", "facade", "feintattack", "fireblast", "firepunch", "flamethrower", "fly", "frustration", "furycutter", "gigadrain", "gigaimpact", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "irontail", "mimic", "mudslap", "naturalgift", "ominouswind", "outrage", "protect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roost", "sandattack", "sandstorm", "sandtomb", "screech", "secretpower", "silverwind", "sleeptalk", "snore", "solarbeam", "sonicboom", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tailwind", "thunderpunch", "toxic", "twister", "uturn"]
    },
    Leafeon:
    {
        id: 470,
        uid: 116,
        name: "Leafeon",
        abilities: ["leafguard"],
        types: ["grass", "???"],
        baseStats: {hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95},
        weightkg: 25.5,
        movepool: ["aerialace", "attract", "bulletseed", "captivate", "dig", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "grasswhistle", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "knockoff", "lastresort", "leafblade", "magicalleaf", "mudslap", "naturalgift", "protect", "quickattack", "raindance", "razorleaf", "rest", "return", "roar", "rocksmash", "sandattack", "secretpower", "seedbomb", "shadowball", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "tackle", "tailwhip", "toxic", "worryseed", "xscissor"]
    },
    Glaceon:
    {
        id: 471,
        uid: 117,
        name: "Glaceon",
        abilities: ["snowcloak"],
        types: ["ice", "???"],
        baseStats: {hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65},
        weightkg: 25.9,
        movepool: ["aquatail", "attract", "avalanche", "barrier", "bite", "blizzard", "captivate", "dig", "doubleteam", "endure", "facade", "frustration", "gigaimpact", "hail", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icefang", "iceshard", "icywind", "irontail", "lastresort", "mirrorcoat", "mudslap", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "roar", "rocksmash", "sandattack", "secretpower", "shadowball", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "toxic", "waterpulse"]
    },
    Gallade:
    {
        id: 475,
        uid: 118,
        name: "Gallade",
        abilities: ["steadfast"],
        types: ["psychic", "fighting"],
        baseStats: {hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80},
        weightkg: 52,
        movepool: ["aerialace", "attract", "brickbreak", "bulkup", "calmmind", "captivate", "chargebeam", "closecombat", "confusion", "cut", "doubleteam", "drainpunch", "dreameater", "earthquake", "endure", "facade", "falseswipe", "feint", "firepunch", "flash", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "grassknot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "knockoff", "leafblade", "leer", "lightscreen", "lowkick", "magiccoat", "mudslap", "naturalgift", "nightslash", "painsplit", "poisonjab", "protect", "psychic", "psychocut", "psychup", "raindance", "recycle", "reflect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "slash", "sleeptalk", "snatch", "snore", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "taunt", "teleport", "thief", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "vacuumwave", "xscissor", "zenheadbutt"]
    },
    Bulbasaur:
    {
        id: 1,
        uid: 119,
        name: "Bulbasaur",
        abilities: ["overgrow"],
        types: ["grass", "poison"],
        baseStats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
        weightkg: 6.9,
        movepool: ["amnesia", "attract", "bodyslam", "bulletseed", "captivate", "charm", "curse", "cut", "defensecurl", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "furycutter", "gigadrain", "grassknot", "grasswhistle", "growl", "growth", "headbutt", "hiddenpower", "ingrain", "knockoff", "leafstorm", "leechseed", "lightscreen", "magicalleaf", "mimic", "mudslap", "naturalgift", "naturepower", "petaldance", "poisonpowder", "powerwhip", "protect", "razorleaf", "rest", "return", "rocksmash", "safeguard", "secretpower", "seedbomb", "skullbash", "sleeppowder", "sleeptalk", "sludge", "sludgebomb", "snore", "solarbeam", "strength", "stringshot", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tackle", "takedown", "toxic", "vinewhip", "worryseed"]
    },
    Ivysaur:
    {
        id: 2,
        uid: 120,
        name: "Ivysaur",
        abilities: ["overgrow"],
        types: ["grass", "poison"],
        baseStats: {hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60},
        weightkg: 13,
        movepool: ["attract", "bodyslam", "bulletseed", "captivate", "cut", "defensecurl", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "furycutter", "gigadrain", "grassknot", "growl", "growth", "headbutt", "hiddenpower", "knockoff", "leechseed", "mimic", "mudslap", "naturalgift", "poisonpowder", "protect", "razorleaf", "rest", "return", "rocksmash", "secretpower", "seedbomb", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "strength", "stringshot", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tackle", "takedown", "toxic", "vinewhip", "worryseed"]
    },
    Venusaur:
    {
        id: 3,
        uid: 121,
        name: "Venusaur",
        abilities: ["overgrow"],
        types: ["grass", "poison"],
        baseStats: {hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80},
        weightkg: 100,
        movepool: ["attract", "block", "bodyslam", "bulletseed", "captivate", "cut", "defensecurl", "doubleedge", "doubleteam", "earthquake", "endure", "energyball", "facade", "flash", "frenzyplant", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "growl", "growth", "headbutt", "hiddenpower", "hyperbeam", "knockoff", "leechseed", "mimic", "mudslap", "naturalgift", "outrage", "petaldance", "poisonpowder", "protect", "razorleaf", "rest", "return", "roar", "rockclimb", "rocksmash", "secretpower", "seedbomb", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "strength", "stringshot", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tackle", "takedown", "toxic", "vinewhip", "worryseed"]
    },
    Charmander:
    {
        id: 4,
        uid: 122,
        name: "Charmander",
        abilities: ["blaze"],
        types: ["fire", "???"],
        baseStats: {hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65},
        weightkg: 8.5,
        movepool: ["aerialace", "ancientpower", "attract", "beatup", "bellydrum", "bite", "bodyslam", "brickbreak", "captivate", "counter", "crunch", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dragonclaw", "dragondance", "dragonrage", "dragonrush", "dynamicpunch", "ember", "endure", "facade", "fireblast", "firefang", "firepunch", "firespin", "flamethrower", "flareblitz", "fling", "focuspunch", "frustration", "furycutter", "growl", "headbutt", "heatwave", "hiddenpower", "howl", "irontail", "megakick", "megapunch", "metalclaw", "mimic", "mudslap", "naturalgift", "outrage", "overheat", "protect", "quickattack", "rage", "rest", "return", "rockslide", "rocksmash", "rocktomb", "scaryface", "scratch", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "smokescreen", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thunderpunch", "toxic", "willowisp"]
    },
    Charmeleon:
    {
        id: 5,
        uid: 123,
        name: "Charmeleon",
        abilities: ["blaze"],
        types: ["fire", "???"],
        baseStats: {hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80},
        weightkg: 19,
        movepool: ["aerialace", "attract", "bodyslam", "brickbreak", "captivate", "counter", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dragonclaw", "dragonrage", "dynamicpunch", "ember", "endure", "facade", "fireblast", "firefang", "firepunch", "firespin", "flamethrower", "fling", "focuspunch", "frustration", "furycutter", "growl", "headbutt", "heatwave", "hiddenpower", "irontail", "megakick", "megapunch", "metalclaw", "mimic", "mudslap", "naturalgift", "overheat", "protect", "rage", "rest", "return", "rockslide", "rocksmash", "rocktomb", "scaryface", "scratch", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "smokescreen", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thunderpunch", "toxic", "willowisp"]
    },
    Squirtle:
    {
        id: 7,
        uid: 124,
        name: "Squirtle",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43},
        weightkg: 9,
        movepool: ["aquajet", "aquaring", "aquatail", "attract", "bite", "blizzard", "bodyslam", "brickbreak", "brine", "bubble", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "fakeout", "flail", "fling", "focuspunch", "foresight", "frustration", "gyroball", "hail", "haze", "headbutt", "hiddenpower", "hydropump", "icebeam", "icepunch", "icywind", "irondefense", "irontail", "megakick", "megapunch", "mimic", "mirrorcoat", "mist", "muddywater", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rapidspin", "refresh", "rest", "return", "rocksmash", "rocktomb", "rollout", "secretpower", "seismictoss", "skullbash", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "tackle", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "waterspout", "whirlpool", "withdraw", "yawn", "zenheadbutt"]
    },
    Wartortle:
    {
        id: 8,
        uid: 125,
        name: "Wartortle",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58},
        weightkg: 22.5,
        movepool: ["aquatail", "attract", "bite", "blizzard", "bodyslam", "brickbreak", "brine", "bubble", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "fling", "focuspunch", "frustration", "gyroball", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icepunch", "icywind", "irondefense", "irontail", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "raindance", "rapidspin", "rest", "return", "rocksmash", "rocktomb", "rollout", "secretpower", "seismictoss", "skullbash", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "tackle", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "withdraw", "zenheadbutt"]
    },
    Blastoise:
    {
        id: 9,
        uid: 126,
        name: "Blastoise",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78},
        weightkg: 85.5,
        movepool: ["aquatail", "attract", "avalanche", "bite", "blizzard", "bodyslam", "brickbreak", "brine", "bubble", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "gyroball", "hail", "headbutt", "hiddenpower", "hydrocannon", "hydropump", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "irontail", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "protect", "raindance", "rapidspin", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "seismictoss", "signalbeam", "skullbash", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "tackle", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "withdraw", "zenheadbutt"]
    },
    Caterpie:
    {
        id: 10,
        uid: 127,
        name: "Caterpie",
        abilities: ["shielddust"],
        types: ["bug", "???"],
        baseStats: {hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45},
        weightkg: 2.9,
        movepool: ["bugbite", "snore", "stringshot", "tackle"]
    },
    Metapod:
    {
        id: 11,
        uid: 128,
        name: "Metapod",
        abilities: ["shedskin"],
        types: ["bug", "???"],
        baseStats: {hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30},
        weightkg: 9.9,
        movepool: ["bugbite", "harden", "irondefense", "stringshot"]
    },
    Weedle:
    {
        id: 13,
        uid: 129,
        name: "Weedle",
        abilities: ["shielddust"],
        types: ["bug", "poison"],
        baseStats: {hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50},
        weightkg: 3.2,
        movepool: ["bugbite", "poisonsting", "stringshot"]
    },
    Kakuna:
    {
        id: 14,
        uid: 130,
        name: "Kakuna",
        abilities: ["shedskin"],
        types: ["bug", "poison"],
        baseStats: {hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35},
        weightkg: 10,
        movepool: ["bugbite", "harden", "irondefense", "stringshot"]
    },
    Pidgey:
    {
        id: 16,
        uid: 131,
        name: "Pidgey",
        abilities: ["keeneye", "tangledfeet"],
        types: ["normal", "flying"],
        baseStats: {hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56},
        weightkg: 1.8,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "attract", "bravebird", "captivate", "defog", "doubleedge", "doubleteam", "endure", "facade", "featherdance", "feintattack", "fly", "foresight", "frustration", "gust", "heatwave", "hiddenpower", "mimic", "mirrormove", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "pursuit", "quickattack", "raindance", "rest", "return", "roost", "sandattack", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "toxic", "twister", "uproar", "uturn", "whirlwind", "wingattack"]
    },
    Pidgeotto:
    {
        id: 17,
        uid: 132,
        name: "Pidgeotto",
        abilities: ["keeneye", "tangledfeet"],
        types: ["normal", "flying"],
        baseStats: {hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71},
        weightkg: 30,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "attract", "captivate", "defog", "doubleedge", "doubleteam", "endure", "facade", "featherdance", "fly", "frustration", "gust", "heatwave", "hiddenpower", "mimic", "mirrormove", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "quickattack", "raindance", "refresh", "rest", "return", "roost", "sandattack", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "toxic", "twister", "uproar", "uturn", "whirlwind", "wingattack"]
    },
    Rattata:
    {
        id: 19,
        uid: 133,
        name: "Rattata",
        abilities: ["runaway", "guts"],
        types: ["normal", "???"],
        baseStats: {hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72},
        weightkg: 3.5,
        movepool: ["assurance", "attract", "bite", "blizzard", "bodyslam", "captivate", "chargebeam", "counter", "crunch", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "endeavor", "endure", "facade", "flamewheel", "focusenergy", "frustration", "furyswipes", "grassknot", "headbutt", "hiddenpower", "hyperfang", "icebeam", "icywind", "irontail", "lastresort", "mefirst", "mimic", "mudslap", "naturalgift", "pluck", "protect", "pursuit", "quickattack", "raindance", "rest", "return", "reversal", "rocksmash", "screech", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "swift", "tackle", "tailwhip", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "uproar", "uturn", "zenheadbutt"]
    },
    Raticate:
    {
        id: 20,
        uid: 134,
        name: "Raticate",
        abilities: ["runaway", "guts"],
        types: ["normal", "???"],
        baseStats: {hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97},
        weightkg: 18.5,
        movepool: ["assurance", "attract", "bite", "blizzard", "bodyslam", "captivate", "chargebeam", "counter", "crunch", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "endeavor", "endure", "facade", "focusenergy", "frustration", "gigaimpact", "grassknot", "headbutt", "hiddenpower", "hyperbeam", "hyperfang", "icebeam", "icywind", "irontail", "lastresort", "mimic", "mudslap", "naturalgift", "pluck", "protect", "pursuit", "quickattack", "raindance", "refresh", "rest", "return", "roar", "rocksmash", "scaryface", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "swift", "swordsdance", "tackle", "tailwhip", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "uturn", "zenheadbutt"]
    },
    Spearow:
    {
        id: 21,
        uid: 135,
        name: "Spearow",
        abilities: ["keeneye"],
        types: ["normal", "flying"],
        baseStats: {hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70},
        weightkg: 2,
        movepool: ["aerialace", "agility", "aircutter", "assurance", "astonish", "attract", "batonpass", "captivate", "defog", "doubleedge", "doubleteam", "drillpeck", "endure", "facade", "falseswipe", "featherdance", "feintattack", "fly", "frustration", "furyattack", "growl", "heatwave", "hiddenpower", "leer", "mimic", "mirrormove", "mudslap", "naturalgift", "ominouswind", "peck", "pluck", "protect", "pursuit", "quickattack", "raindance", "rest", "return", "roost", "scaryface", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thief", "toxic", "triattack", "twister", "uproar", "uturn", "whirlwind"]
    },
    Fearow:
    {
        id: 22,
        uid: 136,
        name: "Fearow",
        abilities: ["keeneye"],
        types: ["normal", "flying"],
        baseStats: {hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100},
        weightkg: 38,
        movepool: ["aerialace", "agility", "aircutter", "assurance", "attract", "captivate", "defog", "doubleedge", "doubleteam", "drillpeck", "endure", "facade", "fly", "frustration", "furyattack", "gigaimpact", "growl", "heatwave", "hiddenpower", "hyperbeam", "leer", "mimic", "mirrormove", "mudslap", "naturalgift", "ominouswind", "peck", "pluck", "protect", "pursuit", "raindance", "rest", "return", "roost", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thief", "toxic", "twister", "uturn"]
    },
    Ekans:
    {
        id: 23,
        uid: 137,
        name: "Ekans",
        abilities: ["intimidate", "shedskin"],
        types: ["poison", "???"],
        baseStats: {hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55},
        weightkg: 6.9,
        movepool: ["acid", "aquatail", "attract", "beatup", "bite", "bodyslam", "captivate", "darkpulse", "dig", "disable", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "frustration", "gastroacid", "gigadrain", "glare", "gunkshot", "haze", "headbutt", "hiddenpower", "irontail", "leer", "mimic", "mudbomb", "naturalgift", "payback", "poisonfang", "poisonjab", "poisonsting", "poisontail", "protect", "pursuit", "raindance", "rest", "return", "rockslide", "rocktomb", "scaryface", "screech", "secretpower", "seedbomb", "slam", "sleeptalk", "sludgebomb", "snatch", "snore", "spite", "spitup", "stockpile", "strength", "substitute", "sunnyday", "swagger", "swallow", "switcheroo", "thief", "torment", "toxic", "wrap"]
    },
    Sandshrew:
    {
        id: 27,
        uid: 138,
        name: "Sandshrew",
        abilities: ["sandveil"],
        types: ["ground", "???"],
        baseStats: {hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40},
        weightkg: 12,
        movepool: ["aerialace", "attract", "bodyslam", "brickbreak", "captivate", "counter", "crushclaw", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "facade", "flail", "fling", "focuspunch", "frustration", "furycutter", "furyswipes", "gyroball", "headbutt", "hiddenpower", "irontail", "knockoff", "metalclaw", "mimic", "mudshot", "mudslap", "naturalgift", "nightslash", "poisonjab", "poisonsting", "protect", "rapidspin", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandattack", "sandstorm", "sandtomb", "scratch", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "sunnyday", "superfang", "swagger", "swift", "swordsdance", "thief", "toxic", "xscissor"]
    },
    Sandslash:
    {
        id: 28,
        uid: 139,
        name: "Sandslash",
        abilities: ["sandveil"],
        types: ["ground", "???"],
        baseStats: {hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65},
        weightkg: 29.5,
        movepool: ["aerialace", "attract", "bodyslam", "brickbreak", "captivate", "counter", "crushclaw", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "facade", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "furyswipes", "gigaimpact", "gyroball", "headbutt", "hiddenpower", "hyperbeam", "irontail", "knockoff", "mimic", "mudslap", "naturalgift", "poisonjab", "poisonsting", "protect", "rapidspin", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "sandattack", "sandstorm", "sandtomb", "scratch", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superfang", "swagger", "swift", "swordsdance", "thief", "toxic", "xscissor"]
    },
    "Nidoran-F":
    {
        id: 29,
        uid: 140,
        name: "Nidoran-F",
        abilities: ["poisonpoint", "rivalry"],
        types: ["poison", "???"],
        baseStats: {hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41},
        weightkg: 7,
        movepool: ["aerialace", "attract", "beatup", "bite", "blizzard", "bodyslam", "captivate", "charm", "counter", "crunch", "cut", "defensecurl", "dig", "disable", "doubleedge", "doublekick", "doubleteam", "endure", "facade", "flatter", "focusenergy", "frustration", "furyswipes", "growl", "headbutt", "helpinghand", "hiddenpower", "icebeam", "irontail", "mimic", "mudslap", "naturalgift", "poisonfang", "poisonjab", "poisonsting", "protect", "pursuit", "raindance", "rest", "return", "rocksmash", "scratch", "secretpower", "shadowclaw", "shockwave", "skullbash", "sleeptalk", "sludgebomb", "snore", "strength", "substitute", "sunnyday", "superfang", "supersonic", "swagger", "tailwhip", "takedown", "thief", "thunder", "thunderbolt", "toxic", "toxicspikes", "waterpulse"]
    },
    Nidorina:
    {
        id: 30,
        uid: 141,
        name: "Nidorina",
        abilities: ["poisonpoint", "rivalry"],
        types: ["poison", "???"],
        baseStats: {hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56},
        weightkg: 20,
        movepool: ["aerialace", "attract", "bite", "blizzard", "bodyslam", "captivate", "counter", "crunch", "cut", "defensecurl", "dig", "doubleedge", "doublekick", "doubleteam", "endure", "facade", "flatter", "frustration", "furyswipes", "growl", "headbutt", "helpinghand", "hiddenpower", "icebeam", "irontail", "mimic", "mudslap", "naturalgift", "poisonfang", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "rocksmash", "scratch", "secretpower", "shadowclaw", "shockwave", "sleeptalk", "sludgebomb", "snore", "strength", "substitute", "sunnyday", "superfang", "swagger", "tailwhip", "thief", "thunder", "thunderbolt", "toxic", "toxicspikes", "waterpulse"]
    },
    "Nidoran-M":
    {
        id: 32,
        uid: 142,
        name: "Nidoran-M",
        abilities: ["poisonpoint", "rivalry"],
        types: ["poison", "???"],
        baseStats: {hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50},
        weightkg: 9,
        movepool: ["amnesia", "attract", "beatup", "blizzard", "bodyslam", "captivate", "confusion", "counter", "cut", "defensecurl", "dig", "disable", "doubleedge", "doublekick", "doubleteam", "endure", "facade", "flatter", "focusenergy", "frustration", "furyattack", "headbutt", "headsmash", "helpinghand", "hiddenpower", "hornattack", "horndrill", "icebeam", "irontail", "leer", "mimic", "mudslap", "naturalgift", "peck", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "rocksmash", "secretpower", "shadowclaw", "shockwave", "sleeptalk", "sludgebomb", "snore", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "supersonic", "swagger", "takedown", "thief", "thunder", "thunderbolt", "toxic", "toxicspikes", "waterpulse"]
    },
    Nidorino:
    {
        id: 33,
        uid: 143,
        name: "Nidorino",
        abilities: ["poisonpoint", "rivalry"],
        types: ["poison", "???"],
        baseStats: {hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65},
        weightkg: 19.5,
        movepool: ["attract", "blizzard", "bodyslam", "captivate", "counter", "cut", "defensecurl", "dig", "doubleedge", "doublekick", "doubleteam", "endure", "facade", "flatter", "focusenergy", "frustration", "furyattack", "headbutt", "helpinghand", "hiddenpower", "hornattack", "horndrill", "icebeam", "irontail", "leer", "mimic", "mudslap", "naturalgift", "peck", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "rocksmash", "secretpower", "shadowclaw", "shockwave", "sleeptalk", "sludgebomb", "snore", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "thief", "thunder", "thunderbolt", "toxic", "toxicspikes", "waterpulse"]
    },
    Vulpix:
    {
        id: 37,
        uid: 144,
        name: "Vulpix",
        abilities: ["flashfire"],
        types: ["fire", "???"],
        baseStats: {hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65},
        weightkg: 9.9,
        movepool: ["attract", "bodyslam", "captivate", "charm", "confuseray", "darkpulse", "dig", "disable", "doubleedge", "doubleteam", "ember", "endure", "energyball", "extrasensory", "facade", "feintattack", "fireblast", "firespin", "flail", "flamethrower", "flareblitz", "frustration", "grudge", "headbutt", "heatwave", "hiddenpower", "howl", "hypnosis", "imprison", "irontail", "mimic", "naturalgift", "ominouswind", "overheat", "painsplit", "payback", "powerswap", "protect", "psychup", "quickattack", "rest", "return", "roar", "roleplay", "safeguard", "secretpower", "sleeptalk", "snore", "spite", "substitute", "sunnyday", "swagger", "swift", "tailwhip", "toxic", "willowisp", "zenheadbutt"]
    },
    Ninetales:
    {
        id: 38,
        uid: 145,
        name: "Ninetales",
        abilities: ["flashfire"],
        types: ["fire", "???"],
        baseStats: {hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100},
        weightkg: 19.9,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "confuseray", "darkpulse", "dig", "doubleedge", "doubleteam", "dreameater", "ember", "endure", "facade", "fireblast", "firespin", "flamethrower", "frustration", "gigaimpact", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "irontail", "mimic", "nastyplot", "naturalgift", "ominouswind", "overheat", "painsplit", "payback", "protect", "psychup", "quickattack", "rest", "return", "roar", "roleplay", "safeguard", "secretpower", "sleeptalk", "snore", "solarbeam", "spite", "substitute", "sunnyday", "swagger", "swift", "toxic", "willowisp", "zenheadbutt"]
    },
    Zubat:
    {
        id: 41,
        uid: 146,
        name: "Zubat",
        abilities: ["innerfocus"],
        types: ["poison", "flying"],
        baseStats: {hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55},
        weightkg: 7.5,
        movepool: ["aerialace", "aircutter", "airslash", "astonish", "attract", "bite", "bravebird", "captivate", "confuseray", "curse", "defog", "doubleedge", "doubleteam", "endure", "facade", "feintattack", "fly", "frustration", "gigadrain", "gust", "haze", "heatwave", "hiddenpower", "hypnosis", "leechlife", "meanlook", "mimic", "nastyplot", "naturalgift", "ominouswind", "payback", "pluck", "poisonfang", "protect", "pursuit", "quickattack", "raindance", "rest", "return", "roost", "secretpower", "shadowball", "sleeptalk", "sludgebomb", "snatch", "snore", "steelwing", "substitute", "sunnyday", "superfang", "supersonic", "swagger", "swift", "tailwind", "taunt", "thief", "torment", "toxic", "twister", "uproar", "uturn", "whirlwind", "wingattack", "zenheadbutt"]
    },
    Golbat:
    {
        id: 42,
        uid: 147,
        name: "Golbat",
        abilities: ["innerfocus"],
        types: ["poison", "flying"],
        baseStats: {hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90},
        weightkg: 55,
        movepool: ["aerialace", "aircutter", "airslash", "astonish", "attract", "bite", "captivate", "confuseray", "defog", "doubleedge", "doubleteam", "endure", "facade", "fly", "frustration", "gigadrain", "gigaimpact", "haze", "heatwave", "hiddenpower", "hyperbeam", "leechlife", "meanlook", "mimic", "naturalgift", "ominouswind", "payback", "pluck", "poisonfang", "protect", "raindance", "rest", "return", "roost", "screech", "secretpower", "shadowball", "sleeptalk", "sludgebomb", "snatch", "snore", "steelwing", "substitute", "sunnyday", "superfang", "supersonic", "swagger", "swift", "tailwind", "taunt", "thief", "torment", "toxic", "twister", "uproar", "uturn", "wingattack", "zenheadbutt"]
    },
    Oddish:
    {
        id: 43,
        uid: 148,
        name: "Oddish",
        abilities: ["chlorophyll"],
        types: ["grass", "poison"],
        baseStats: {hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30},
        weightkg: 5.4,
        movepool: ["absorb", "acid", "attract", "bulletseed", "captivate", "charm", "cut", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flail", "flash", "frustration", "gastroacid", "gigadrain", "grassknot", "hiddenpower", "ingrain", "leechseed", "luckychant", "megadrain", "mimic", "moonlight", "naturalgift", "petaldance", "poisonpowder", "protect", "razorleaf", "rest", "return", "secretpower", "seedbomb", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stunspore", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "teeterdance", "tickle", "toxic", "worryseed"]
    },
    Gloom:
    {
        id: 44,
        uid: 149,
        name: "Gloom",
        abilities: ["chlorophyll"],
        types: ["grass", "poison"],
        baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40},
        weightkg: 8.6,
        movepool: ["absorb", "acid", "attract", "bulletseed", "captivate", "cut", "doubleedge", "doubleteam", "drainpunch", "endure", "energyball", "facade", "flash", "fling", "frustration", "gastroacid", "gigadrain", "grassknot", "hiddenpower", "luckychant", "megadrain", "mimic", "moonlight", "naturalgift", "petaldance", "poisonpowder", "protect", "rest", "return", "secretpower", "seedbomb", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stunspore", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "toxic", "worryseed"]
    },
    Paras:
    {
        id: 46,
        uid: 150,
        name: "Paras",
        abilities: ["effectspore", "dryskin"],
        types: ["bug", "grass"],
        baseStats: {hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25},
        weightkg: 5.4,
        movepool: ["aerialace", "agility", "aromatherapy", "attract", "bodyslam", "brickbreak", "bugbite", "bulletseed", "captivate", "counter", "crosspoison", "cut", "dig", "doubleedge", "doubleteam", "endure", "energyball", "facade", "falseswipe", "flail", "flash", "frustration", "furycutter", "gigadrain", "grassknot", "growth", "hiddenpower", "knockoff", "leechlife", "lightscreen", "metalclaw", "mimic", "naturalgift", "poisonpowder", "protect", "psybeam", "pursuit", "refresh", "rest", "return", "rocksmash", "scratch", "screech", "secretpower", "seedbomb", "slash", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spore", "stringshot", "stunspore", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "thief", "toxic", "worryseed", "xscissor"]
    },
    Parasect:
    {
        id: 47,
        uid: 151,
        name: "Parasect",
        abilities: ["effectspore", "dryskin"],
        types: ["bug", "grass"],
        baseStats: {hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30},
        weightkg: 29.5,
        movepool: ["aerialace", "aromatherapy", "attract", "bodyslam", "brickbreak", "bugbite", "bulletseed", "captivate", "counter", "crosspoison", "cut", "dig", "doubleedge", "doubleteam", "endure", "energyball", "facade", "falseswipe", "flash", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "growth", "hiddenpower", "hyperbeam", "knockoff", "leechlife", "mimic", "naturalgift", "poisonpowder", "protect", "rest", "return", "rocksmash", "scratch", "secretpower", "seedbomb", "slash", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spore", "stringshot", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "thief", "toxic", "worryseed", "xscissor"]
    },
    Venonat:
    {
        id: 48,
        uid: 152,
        name: "Venonat",
        abilities: ["compoundeyes", "tintedlens"],
        types: ["bug", "poison"],
        baseStats: {hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45},
        weightkg: 30,
        movepool: ["agility", "attract", "batonpass", "bugbite", "captivate", "confusion", "disable", "doubleedge", "doubleteam", "endure", "facade", "flash", "foresight", "frustration", "gigadrain", "hiddenpower", "leechlife", "mimic", "morningsun", "naturalgift", "poisonfang", "poisonpowder", "protect", "psybeam", "psychic", "rest", "return", "screech", "secretpower", "signalbeam", "skillswap", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stringshot", "stunspore", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "thief", "toxic", "toxicspikes", "zenheadbutt"]
    },
    Venomoth:
    {
        id: 49,
        uid: 153,
        name: "Venomoth",
        abilities: ["shielddust", "tintedlens"],
        types: ["bug", "poison"],
        baseStats: {hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90},
        weightkg: 12.5,
        movepool: ["aerialace", "aircutter", "attract", "bugbite", "bugbuzz", "captivate", "confusion", "defog", "disable", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "foresight", "frustration", "gigadrain", "gigaimpact", "gust", "hiddenpower", "hyperbeam", "leechlife", "mimic", "naturalgift", "ominouswind", "poisonfang", "poisonpowder", "protect", "psybeam", "psychic", "refresh", "rest", "return", "roost", "secretpower", "signalbeam", "silverwind", "skillswap", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stringshot", "stunspore", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "tailwind", "thief", "toxic", "twister", "uturn", "zenheadbutt"]
    },
    Diglett:
    {
        id: 50,
        uid: 154,
        name: "Diglett",
        abilities: ["sandveil", "arenatrap"],
        types: ["ground", "???"],
        baseStats: {hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95},
        weightkg: 0.8,
        movepool: ["aerialace", "ancientpower", "astonish", "attract", "beatup", "bodyslam", "captivate", "cut", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "feintattack", "fissure", "frustration", "furyswipes", "growl", "hiddenpower", "magnitude", "mimic", "mudbomb", "mudslap", "naturalgift", "protect", "pursuit", "rest", "return", "reversal", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "scratch", "screech", "secretpower", "shadowclaw", "slash", "sleeptalk", "sludgebomb", "snore", "stealthrock", "substitute", "suckerpunch", "sunnyday", "swagger", "thief", "toxic", "uproar"]
    },
    Persian:
    {
        id: 53,
        uid: 155,
        name: "Persian",
        abilities: ["limber", "technician"],
        types: ["normal", "???"],
        baseStats: {hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115},
        weightkg: 32,
        movepool: ["aerialace", "assurance", "attract", "bite", "bodyslam", "captivate", "cut", "darkpulse", "defensecurl", "dig", "doubleedge", "doubleteam", "dreameater", "embargo", "endure", "facade", "fakeout", "feint", "feintattack", "flash", "frustration", "furyswipes", "gigaimpact", "growl", "gunkshot", "headbutt", "hiddenpower", "hyperbeam", "icywind", "irontail", "knockoff", "lastresort", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "nightslash", "payback", "payday", "powergem", "protect", "psychup", "raindance", "rest", "return", "roar", "scratch", "screech", "secretpower", "seedbomb", "shadowball", "shadowclaw", "shockwave", "slash", "sleeptalk", "snatch", "snore", "spite", "substitute", "sunnyday", "swagger", "swift", "switcheroo", "taunt", "thief", "thunder", "thunderbolt", "torment", "toxic", "uproar", "uturn", "waterpulse"]
    },
    Psyduck:
    {
        id: 54,
        uid: 156,
        name: "Psyduck",
        abilities: ["damp", "cloudnine"],
        types: ["water", "???"],
        baseStats: {hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55},
        weightkg: 19.6,
        movepool: ["aerialace", "amnesia", "aquatail", "attract", "blizzard", "bodyslam", "brickbreak", "brine", "calmmind", "captivate", "confuseray", "confusion", "counter", "crosschop", "dig", "disable", "dive", "doubleedge", "doubleteam", "dynamicpunch", "encore", "endure", "facade", "flash", "fling", "focuspunch", "foresight", "frustration", "furyswipes", "futuresight", "hail", "headbutt", "hiddenpower", "hydropump", "hypnosis", "icebeam", "icepunch", "icywind", "irontail", "lightscreen", "megakick", "megapunch", "mimic", "mudbomb", "mudslap", "mudsport", "naturalgift", "protect", "psybeam", "psychic", "psychup", "raindance", "refresh", "rest", "return", "rocksmash", "roleplay", "scratch", "screech", "secretpower", "seismictoss", "shadowclaw", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "swift", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool", "worryseed", "yawn", "zenheadbutt"]
    },
    Golduck:
    {
        id: 55,
        uid: 157,
        name: "Golduck",
        abilities: ["damp", "cloudnine"],
        types: ["water", "???"],
        baseStats: {hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85},
        weightkg: 76.6,
        movepool: ["aerialace", "amnesia", "aquajet", "aquatail", "attract", "blizzard", "bodyslam", "brickbreak", "brine", "calmmind", "captivate", "charm", "confusion", "counter", "dig", "disable", "dive", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "flash", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "furyswipes", "gigaimpact", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "psychic", "psychup", "raindance", "rest", "return", "rockclimb", "rocksmash", "roleplay", "scratch", "screech", "secretpower", "seismictoss", "shadowclaw", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "swift", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool", "worryseed", "zenheadbutt"]
    },
    Mankey:
    {
        id: 56,
        uid: 158,
        name: "Mankey",
        abilities: ["vitalspirit", "angerpoint"],
        types: ["fighting", "???"],
        baseStats: {hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70},
        weightkg: 28,
        movepool: ["aerialace", "assurance", "attract", "beatup", "bodyslam", "brickbreak", "bulkup", "captivate", "closecombat", "counter", "covet", "crosschop", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "encore", "endeavor", "endure", "facade", "firepunch", "fling", "focusblast", "focusenergy", "focuspunch", "foresight", "frustration", "furyswipes", "gunkshot", "headbutt", "helpinghand", "hiddenpower", "icepunch", "irontail", "karatechop", "leer", "lowkick", "meditate", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "outrage", "overheat", "payback", "poisonjab", "protect", "psychup", "punishment", "raindance", "rest", "return", "revenge", "reversal", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "scratch", "screech", "secretpower", "seedbomb", "seismictoss", "sleeptalk", "smellingsalts", "snore", "spite", "strength", "substitute", "sunnyday", "swagger", "swift", "taunt", "thief", "thrash", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "uturn", "vacuumwave"]
    },
    Primeape:
    {
        id: 57,
        uid: 159,
        name: "Primeape",
        abilities: ["vitalspirit", "angerpoint"],
        types: ["fighting", "???"],
        baseStats: {hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95},
        weightkg: 32,
        movepool: ["aerialace", "assurance", "attract", "bodyslam", "brickbreak", "bulkup", "captivate", "closecombat", "counter", "crosschop", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endeavor", "endure", "facade", "firepunch", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "furyswipes", "gigaimpact", "gunkshot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "irontail", "karatechop", "leer", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "outrage", "overheat", "payback", "poisonjab", "protect", "psychup", "punishment", "rage", "raindance", "rest", "return", "reversal", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "scratch", "screech", "secretpower", "seedbomb", "seismictoss", "sleeptalk", "snore", "spite", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "taunt", "thief", "thrash", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "uturn", "vacuumwave"]
    },
    Growlithe:
    {
        id: 58,
        uid: 160,
        name: "Growlithe",
        abilities: ["intimidate", "flashfire"],
        types: ["fire", "???"],
        baseStats: {hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60},
        weightkg: 19,
        movepool: ["aerialace", "agility", "attract", "bite", "bodyslam", "captivate", "charm", "crunch", "dig", "doubleedge", "doubleteam", "ember", "endure", "facade", "fireblast", "firefang", "firespin", "flamethrower", "flamewheel", "flareblitz", "frustration", "headbutt", "heatwave", "helpinghand", "hiddenpower", "howl", "irontail", "leer", "mimic", "morningsun", "mudslap", "naturalgift", "odorsleuth", "overheat", "protect", "rest", "return", "reversal", "roar", "rocksmash", "safeguard", "secretpower", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "takedown", "thief", "thrash", "toxic", "willowisp"]
    },
    Arcanine:
    {
        id: 59,
        uid: 161,
        name: "Arcanine",
        abilities: ["intimidate", "flashfire"],
        types: ["fire", "???"],
        baseStats: {hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95},
        weightkg: 155,
        movepool: ["aerialace", "attract", "bite", "bodyslam", "captivate", "crunch", "dig", "doubleedge", "doubleteam", "dragonpulse", "ember", "endure", "extremespeed", "facade", "fireblast", "firefang", "flamethrower", "flareblitz", "frustration", "gigaimpact", "headbutt", "heatwave", "helpinghand", "hiddenpower", "hyperbeam", "ironhead", "irontail", "mimic", "mudslap", "naturalgift", "odorsleuth", "overheat", "protect", "rest", "return", "roar", "rockclimb", "rocksmash", "secretpower", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "swift", "thief", "thunderfang", "toxic", "willowisp"]
    },
    Poliwag:
    {
        id: 60,
        uid: 162,
        name: "Poliwag",
        abilities: ["waterabsorb", "damp"],
        types: ["water", "???"],
        baseStats: {hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90},
        weightkg: 12.4,
        movepool: ["attract", "bellydrum", "blizzard", "bodyslam", "bubble", "bubblebeam", "captivate", "defensecurl", "dig", "dive", "doubleedge", "doubleslap", "doubleteam", "encore", "endeavor", "endure", "facade", "frustration", "hail", "haze", "headbutt", "helpinghand", "hiddenpower", "hydropump", "hypnosis", "iceball", "icebeam", "icywind", "mimic", "mindreader", "mist", "mudbomb", "mudshot", "naturalgift", "protect", "psychic", "raindance", "refresh", "rest", "return", "secretpower", "sleeptalk", "snore", "splash", "substitute", "surf", "swagger", "sweetkiss", "thief", "toxic", "wakeupslap", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool"]
    },
    Poliwhirl:
    {
        id: 61,
        uid: 163,
        name: "Poliwhirl",
        abilities: ["waterabsorb", "damp"],
        types: ["water", "???"],
        baseStats: {hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90},
        weightkg: 20,
        movepool: ["attract", "bellydrum", "blizzard", "bodyslam", "brickbreak", "bubble", "bubblebeam", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleslap", "doubleteam", "earthquake", "endure", "facade", "fling", "focuspunch", "frustration", "hail", "headbutt", "helpinghand", "hiddenpower", "hydropump", "hypnosis", "icebeam", "icepunch", "icywind", "megakick", "megapunch", "metronome", "mimic", "mudbomb", "mudshot", "mudslap", "naturalgift", "protect", "psychic", "raindance", "rest", "return", "rocksmash", "secretpower", "seismictoss", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "thief", "toxic", "wakeupslap", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool"]
    },
    Abra:
    {
        id: 63,
        uid: 164,
        name: "Abra",
        abilities: ["synchronize", "innerfocus"],
        types: ["psychic", "???"],
        baseStats: {hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90},
        weightkg: 19.5,
        movepool: ["attract", "barrier", "bodyslam", "calmmind", "captivate", "chargebeam", "counter", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "embargo", "encore", "endure", "energyball", "facade", "firepunch", "flash", "fling", "focuspunch", "frustration", "grassknot", "gravity", "guardswap", "headbutt", "hiddenpower", "icepunch", "irontail", "knockoff", "lightscreen", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "naturalgift", "nightmare", "powertrick", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "taunt", "teleport", "thief", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Kadabra:
    {
        id: 64,
        uid: 165,
        name: "Kadabra",
        abilities: ["synchronize", "innerfocus"],
        types: ["psychic", "???"],
        baseStats: {hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105},
        weightkg: 56.5,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "chargebeam", "confusion", "counter", "disable", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "embargo", "endure", "energyball", "facade", "firepunch", "flash", "fling", "focuspunch", "frustration", "futuresight", "grassknot", "gravity", "headbutt", "hiddenpower", "icepunch", "irontail", "kinesis", "knockoff", "lightscreen", "magiccoat", "megakick", "megapunch", "metronome", "mimic", "miracleeye", "naturalgift", "nightmare", "protect", "psybeam", "psychic", "psychocut", "psychup", "raindance", "recover", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "taunt", "teleport", "thief", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Machop:
    {
        id: 66,
        uid: 166,
        name: "Machop",
        abilities: ["guts", "noguard"],
        types: ["fighting", "???"],
        baseStats: {hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35},
        weightkg: 19.5,
        movepool: ["attract", "bodyslam", "brickbreak", "bulkup", "bulletpunch", "captivate", "closecombat", "counter", "crosschop", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "encore", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "foresight", "frustration", "headbutt", "helpinghand", "hiddenpower", "icepunch", "karatechop", "leer", "lightscreen", "lowkick", "meditate", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "payback", "poisonjab", "powertrick", "protect", "raindance", "rest", "return", "revenge", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "rollingkick", "scaryface", "secretpower", "seismictoss", "sleeptalk", "smellingsalts", "snore", "strength", "submission", "substitute", "sunnyday", "superpower", "swagger", "thief", "thunderpunch", "toxic", "vacuumwave", "vitalthrow", "wakeupslap"]
    },
    Machoke:
    {
        id: 67,
        uid: 167,
        name: "Machoke",
        abilities: ["guts", "noguard"],
        types: ["fighting", "???"],
        baseStats: {hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45},
        weightkg: 70.5,
        movepool: ["attract", "bodyslam", "brickbreak", "bulkup", "captivate", "counter", "crosschop", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "foresight", "frustration", "headbutt", "helpinghand", "hiddenpower", "icepunch", "karatechop", "leer", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "payback", "poisonjab", "protect", "raindance", "rest", "return", "revenge", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "scaryface", "secretpower", "seismictoss", "sleeptalk", "snore", "strength", "submission", "substitute", "sunnyday", "superpower", "swagger", "thief", "thunderpunch", "toxic", "vacuumwave", "vitalthrow", "wakeupslap"]
    },
    Bellsprout:
    {
        id: 69,
        uid: 168,
        name: "Bellsprout",
        abilities: ["chlorophyll"],
        types: ["grass", "poison"],
        baseStats: {hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40},
        weightkg: 4,
        movepool: ["acid", "attract", "bulletseed", "captivate", "cut", "doubleedge", "doubleteam", "encore", "endure", "energyball", "facade", "flash", "frustration", "gastroacid", "gigadrain", "grassknot", "growth", "hiddenpower", "ingrain", "knockoff", "leechlife", "magicalleaf", "mimic", "naturalgift", "poisonpowder", "protect", "razorleaf", "reflect", "rest", "return", "secretpower", "seedbomb", "slam", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stunspore", "substitute", "suckerpunch", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "teeterdance", "thief", "tickle", "toxic", "vinewhip", "weatherball", "worryseed", "wrap", "wringout"]
    },
    Weepinbell:
    {
        id: 70,
        uid: 169,
        name: "Weepinbell",
        abilities: ["chlorophyll"],
        types: ["grass", "poison"],
        baseStats: {hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55},
        weightkg: 6.4,
        movepool: ["acid", "attract", "bulletseed", "captivate", "cut", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gastroacid", "gigadrain", "grassknot", "growth", "hiddenpower", "knockoff", "magicalleaf", "mimic", "morningsun", "naturalgift", "poisonpowder", "protect", "razorleaf", "rest", "return", "secretpower", "seedbomb", "slam", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stunspore", "substitute", "suckerpunch", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "thief", "toxic", "vinewhip", "worryseed", "wrap", "wringout"]
    },
    Tentacool:
    {
        id: 72,
        uid: 170,
        name: "Tentacool",
        abilities: ["clearbody", "liquidooze"],
        types: ["water", "poison"],
        baseStats: {hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70},
        weightkg: 45.5,
        movepool: ["acid", "acupressure", "attract", "aurorabeam", "barrier", "blizzard", "brine", "bubblebeam", "captivate", "confuseray", "constrict", "cut", "dive", "doubleedge", "doubleteam", "endure", "facade", "frustration", "gigadrain", "hail", "haze", "hiddenpower", "hydropump", "icebeam", "icywind", "knockoff", "magiccoat", "mimic", "mirrorcoat", "muddywater", "naturalgift", "payback", "poisonjab", "poisonsting", "protect", "raindance", "rapidspin", "rest", "return", "safeguard", "screech", "secretpower", "sleeptalk", "sludgebomb", "snore", "substitute", "supersonic", "surf", "swagger", "swordsdance", "thief", "toxic", "toxicspikes", "waterfall", "waterpulse", "whirlpool", "wrap", "wringout"]
    },
    Tentacruel:
    {
        id: 73,
        uid: 171,
        name: "Tentacruel",
        abilities: ["clearbody", "liquidooze"],
        types: ["water", "poison"],
        baseStats: {hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100},
        weightkg: 55,
        movepool: ["acid", "attract", "barrier", "blizzard", "brine", "bubblebeam", "captivate", "constrict", "cut", "dive", "doubleedge", "doubleteam", "endure", "facade", "frustration", "gigadrain", "gigaimpact", "hail", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "knockoff", "magiccoat", "mimic", "naturalgift", "payback", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "screech", "secretpower", "sleeptalk", "sludgebomb", "snore", "substitute", "supersonic", "surf", "swagger", "swordsdance", "thief", "toxic", "toxicspikes", "waterfall", "waterpulse", "whirlpool", "wrap", "wringout"]
    },
    Geodude:
    {
        id: 74,
        uid: 172,
        name: "Geodude",
        abilities: ["rockhead", "sturdy"],
        types: ["rock", "ground"],
        baseStats: {hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20},
        weightkg: 20,
        movepool: ["ancientpower", "attract", "block", "bodyslam", "brickbreak", "captivate", "counter", "curse", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "explosion", "facade", "fireblast", "firepunch", "flail", "flamethrower", "fling", "focuspunch", "frustration", "gyroball", "hammerarm", "headbutt", "hiddenpower", "magnitude", "megapunch", "metronome", "mimic", "mudslap", "mudsport", "naturalgift", "protect", "rest", "return", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "sandstorm", "secretpower", "seismictoss", "selfdestruct", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "superpower", "swagger", "tackle", "thunderpunch", "toxic"]
    },
    Graveler:
    {
        id: 75,
        uid: 173,
        name: "Graveler",
        abilities: ["rockhead", "sturdy"],
        types: ["rock", "ground"],
        baseStats: {hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35},
        weightkg: 105,
        movepool: ["ancientpower", "attract", "block", "bodyslam", "brickbreak", "captivate", "counter", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "explosion", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focuspunch", "frustration", "gyroball", "headbutt", "hiddenpower", "magnitude", "megapunch", "metronome", "mimic", "mudslap", "mudsport", "naturalgift", "protect", "rest", "return", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "sandstorm", "secretpower", "seismictoss", "selfdestruct", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "superpower", "swagger", "tackle", "thunderpunch", "toxic"]
    },
    Ponyta:
    {
        id: 77,
        uid: 174,
        name: "Ponyta",
        abilities: ["runaway", "flashfire"],
        types: ["fire", "???"],
        baseStats: {hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90},
        weightkg: 30,
        movepool: ["agility", "attract", "bodyslam", "bounce", "captivate", "charm", "doubleedge", "doublekick", "doubleteam", "ember", "endure", "facade", "fireblast", "firespin", "flamethrower", "flamewheel", "flareblitz", "frustration", "growl", "headbutt", "heatwave", "hiddenpower", "horndrill", "hypnosis", "irontail", "mimic", "morningsun", "naturalgift", "overheat", "protect", "quickattack", "rest", "return", "secretpower", "sleeptalk", "snore", "solarbeam", "stomp", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "takedown", "thrash", "toxic", "willowisp"]
    },
    Rapidash:
    {
        id: 78,
        uid: 175,
        name: "Rapidash",
        abilities: ["runaway", "flashfire"],
        types: ["fire", "???"],
        baseStats: {hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
        weightkg: 95,
        movepool: ["agility", "attract", "batonpass", "bodyslam", "bounce", "captivate", "doubleedge", "doubleteam", "ember", "endure", "facade", "fireblast", "firespin", "flamethrower", "flamewheel", "flareblitz", "frustration", "furyattack", "gigaimpact", "growl", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "irontail", "megahorn", "mimic", "naturalgift", "overheat", "poisonjab", "protect", "quickattack", "rest", "return", "secretpower", "sleeptalk", "snore", "solarbeam", "stomp", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "takedown", "toxic", "willowisp"]
    },
    Slowpoke:
    {
        id: 79,
        uid: 176,
        name: "Slowpoke",
        abilities: ["oblivious", "owntempo"],
        types: ["water", "psychic"],
        baseStats: {hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15},
        weightkg: 36,
        movepool: ["amnesia", "aquatail", "attract", "bellydrum", "blizzard", "block", "bodyslam", "brine", "calmmind", "captivate", "confusion", "curse", "dig", "disable", "dive", "doubleedge", "doubleteam", "dreameater", "earthquake", "endure", "facade", "fireblast", "flamethrower", "flash", "frustration", "futuresight", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "icebeam", "icywind", "irontail", "lightscreen", "magiccoat", "mefirst", "mimic", "mudslap", "mudsport", "naturalgift", "nightmare", "protect", "psychic", "psychup", "raindance", "recycle", "rest", "return", "safeguard", "secretpower", "shadowball", "signalbeam", "skillswap", "slackoff", "sleeptalk", "snore", "stomp", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "tackle", "thunderwave", "toxic", "trick", "trickroom", "watergun", "waterpulse", "whirlpool", "yawn", "zenheadbutt"]
    },
    Slowbro:
    {
        id: 80,
        uid: 177,
        name: "Slowbro",
        abilities: ["oblivious", "owntempo"],
        types: ["water", "psychic"],
        baseStats: {hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30},
        weightkg: 78.5,
        movepool: ["amnesia", "aquatail", "attract", "avalanche", "blizzard", "block", "bodyslam", "brickbreak", "brine", "calmmind", "captivate", "confusion", "counter", "curse", "dig", "disable", "dive", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "flamethrower", "flash", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "irontail", "lightscreen", "magiccoat", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "nightmare", "protect", "psychic", "psychup", "raindance", "recycle", "rest", "return", "rocksmash", "safeguard", "secretpower", "seismictoss", "shadowball", "signalbeam", "skillswap", "slackoff", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "tackle", "thunderwave", "toxic", "trick", "trickroom", "watergun", "waterpulse", "whirlpool", "withdraw", "yawn", "zenheadbutt"]
    },
    Magnemite:
    {
        id: 81,
        uid: 178,
        name: "Magnemite",
        abilities: ["magnetpull", "sturdy"],
        types: ["electric", "steel"],
        baseStats: {hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45},
        weightkg: 6,
        movepool: ["chargebeam", "discharge", "doubleedge", "doubleteam", "endure", "explosion", "facade", "flash", "flashcannon", "frustration", "gravity", "gyroball", "hiddenpower", "irondefense", "lightscreen", "lockon", "magiccoat", "magnetbomb", "magnetrise", "metalsound", "mimic", "mirrorshot", "naturalgift", "protect", "psychup", "raindance", "recycle", "reflect", "rest", "return", "rollout", "screech", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "sonicboom", "spark", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "zapcannon"]
    },
    Magneton:
    {
        id: 82,
        uid: 179,
        name: "Magneton",
        abilities: ["magnetpull", "sturdy"],
        types: ["electric", "steel"],
        baseStats: {hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70},
        weightkg: 60,
        movepool: ["chargebeam", "discharge", "doubleedge", "doubleteam", "endure", "explosion", "facade", "flash", "flashcannon", "frustration", "gigaimpact", "gravity", "gyroball", "hiddenpower", "hyperbeam", "irondefense", "lightscreen", "lockon", "magiccoat", "magnetbomb", "magnetrise", "metalsound", "mimic", "mirrorshot", "naturalgift", "protect", "psychup", "raindance", "recycle", "reflect", "refresh", "rest", "return", "rollout", "screech", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "sonicboom", "spark", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "triattack", "zapcannon"]
    },
    Doduo:
    {
        id: 84,
        uid: 180,
        name: "Doduo",
        abilities: ["runaway", "earlybird"],
        types: ["normal", "flying"],
        baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
        weightkg: 39.2,
        movepool: ["acupressure", "aerialace", "agility", "aircutter", "attract", "bodyslam", "bravebird", "captivate", "doubleedge", "doublehit", "doubleteam", "drillpeck", "endeavor", "endure", "facade", "feintattack", "flail", "fly", "frustration", "furyattack", "growl", "haze", "hiddenpower", "knockoff", "mimic", "mirrormove", "mudslap", "naturalgift", "peck", "pluck", "protect", "pursuit", "quickattack", "rage", "rest", "return", "roost", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "supersonic", "swagger", "swift", "thief", "toxic", "triattack", "uproar"]
    },
    Seel:
    {
        id: 86,
        uid: 181,
        name: "Seel",
        abilities: ["thickfat", "hydration"],
        types: ["water", "???"],
        baseStats: {hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45},
        weightkg: 90,
        movepool: ["aquajet", "aquaring", "aquatail", "attract", "aurorabeam", "blizzard", "bodyslam", "brine", "captivate", "disable", "dive", "doubleedge", "doubleteam", "encore", "endure", "facade", "fakeout", "fling", "frustration", "growl", "hail", "headbutt", "helpinghand", "hiddenpower", "horndrill", "icebeam", "iceshard", "iciclespear", "icywind", "lick", "mimic", "naturalgift", "perishsong", "protect", "raindance", "rest", "return", "safeguard", "secretpower", "signalbeam", "slam", "sleeptalk", "snore", "spitup", "stockpile", "substitute", "surf", "swagger", "swallow", "takedown", "thief", "toxic", "waterfall", "waterpulse", "watersport", "whirlpool"]
    },
    Dewgong:
    {
        id: 87,
        uid: 182,
        name: "Dewgong",
        abilities: ["thickfat", "hydration"],
        types: ["water", "ice"],
        baseStats: {hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70},
        weightkg: 120,
        movepool: ["aquajet", "aquaring", "aquatail", "attract", "aurorabeam", "avalanche", "blizzard", "bodyslam", "brine", "captivate", "dive", "doubleedge", "doubleteam", "encore", "endure", "facade", "fling", "frustration", "gigaimpact", "growl", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "iceshard", "icywind", "mimic", "naturalgift", "protect", "raindance", "rest", "return", "safeguard", "secretpower", "sheercold", "signalbeam", "sleeptalk", "snore", "substitute", "surf", "swagger", "takedown", "thief", "toxic", "waterfall", "waterpulse", "whirlpool"]
    },
    Grimer:
    {
        id: 88,
        uid: 183,
        name: "Grimer",
        abilities: ["stench", "stickyhold"],
        types: ["poison", "???"],
        baseStats: {hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25},
        weightkg: 30,
        movepool: ["acidarmor", "attract", "bodyslam", "captivate", "curse", "dig", "disable", "doubleteam", "dynamicpunch", "endure", "explosion", "facade", "fireblast", "firepunch", "flamethrower", "fling", "frustration", "gigadrain", "gunkshot", "harden", "haze", "helpinghand", "hiddenpower", "icepunch", "imprison", "lick", "meanlook", "memento", "mimic", "minimize", "mudbomb", "mudslap", "naturalgift", "painsplit", "payback", "poisongas", "poisonjab", "pound", "protect", "raindance", "rest", "return", "rockslide", "rocktomb", "screech", "secretpower", "selfdestruct", "shadowball", "shadowpunch", "shadowsneak", "shockwave", "sleeptalk", "sludge", "sludgebomb", "snore", "spitup", "stockpile", "strength", "substitute", "sunnyday", "swagger", "swallow", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "torment", "toxic"]
    },
    Muk:
    {
        id: 89,
        uid: 184,
        name: "Muk",
        abilities: ["stench", "stickyhold"],
        types: ["poison", "???"],
        baseStats: {hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50},
        weightkg: 30,
        movepool: ["acidarmor", "attract", "block", "bodyslam", "brickbreak", "captivate", "darkpulse", "dig", "disable", "doubleteam", "dynamicpunch", "endure", "explosion", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "gigadrain", "gigaimpact", "gunkshot", "harden", "hiddenpower", "hyperbeam", "icepunch", "memento", "mimic", "minimize", "mudbomb", "mudslap", "naturalgift", "painsplit", "payback", "poisongas", "poisonjab", "pound", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "screech", "secretpower", "selfdestruct", "shadowball", "shockwave", "sleeptalk", "sludge", "sludgebomb", "snore", "strength", "substitute", "sunnyday", "swagger", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "torment", "toxic"]
    },
    Shellder:
    {
        id: 90,
        uid: 185,
        name: "Shellder",
        abilities: ["shellarmor", "skilllink"],
        types: ["water", "???"],
        baseStats: {hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40},
        weightkg: 4,
        movepool: ["attract", "aurorabeam", "barrier", "blizzard", "brine", "bubblebeam", "captivate", "clamp", "dive", "doubleedge", "doubleteam", "endure", "explosion", "facade", "frustration", "hail", "hiddenpower", "icebeam", "iceshard", "iciclespear", "icywind", "irondefense", "leer", "mimic", "mudshot", "naturalgift", "payback", "protect", "raindance", "rapidspin", "refresh", "rest", "return", "rockblast", "screech", "secretpower", "selfdestruct", "sleeptalk", "snore", "substitute", "supersonic", "surf", "swagger", "swift", "tackle", "takedown", "toxic", "waterpulse", "whirlpool", "withdraw"]
    },
    Cloyster:
    {
        id: 91,
        uid: 186,
        name: "Cloyster",
        abilities: ["shellarmor", "skilllink"],
        types: ["water", "ice"],
        baseStats: {hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70},
        weightkg: 132.5,
        movepool: ["attract", "aurorabeam", "avalanche", "blizzard", "brine", "captivate", "dive", "doubleedge", "doubleteam", "endure", "explosion", "facade", "frustration", "gigaimpact", "hail", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irondefense", "mimic", "naturalgift", "payback", "poisonjab", "protect", "raindance", "rest", "return", "secretpower", "selfdestruct", "signalbeam", "sleeptalk", "snore", "spikecannon", "spikes", "substitute", "supersonic", "surf", "swagger", "swift", "torment", "toxic", "toxicspikes", "waterpulse", "whirlpool", "withdraw"]
    },
    Gastly:
    {
        id: 92,
        uid: 187,
        name: "Gastly",
        abilities: ["levitate"],
        types: ["ghost", "poison"],
        baseStats: {hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80},
        weightkg: 0.1,
        movepool: ["astonish", "attract", "captivate", "confuseray", "curse", "darkpulse", "destinybond", "disable", "doubleteam", "dreameater", "embargo", "endure", "energyball", "explosion", "facade", "firepunch", "frustration", "gigadrain", "grudge", "haze", "hiddenpower", "hypnosis", "icepunch", "icywind", "knockoff", "lick", "meanlook", "mimic", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "perishsong", "protect", "psychic", "psychup", "psywave", "raindance", "rest", "return", "secretpower", "selfdestruct", "shadowball", "skillswap", "sleeptalk", "sludgebomb", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunderbolt", "thunderpunch", "torment", "toxic", "trick", "trickroom", "uproar", "willowisp"]
    },
    Haunter:
    {
        id: 93,
        uid: 188,
        name: "Haunter",
        abilities: ["levitate"],
        types: ["ghost", "poison"],
        baseStats: {hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95},
        weightkg: 0.1,
        movepool: ["attract", "captivate", "confuseray", "curse", "darkpulse", "destinybond", "doubleteam", "dreameater", "embargo", "endure", "energyball", "explosion", "facade", "firepunch", "fling", "frustration", "gigadrain", "hiddenpower", "hypnosis", "icepunch", "icywind", "knockoff", "lick", "meanlook", "mimic", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "poisonjab", "protect", "psychic", "psychup", "raindance", "rest", "return", "secretpower", "selfdestruct", "shadowball", "shadowclaw", "shadowpunch", "skillswap", "sleeptalk", "sludgebomb", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunderbolt", "thunderpunch", "torment", "toxic", "trick", "trickroom", "uproar", "willowisp"]
    },
    Onix:
    {
        id: 95,
        uid: 189,
        name: "Onix",
        abilities: ["rockhead", "sturdy"],
        types: ["rock", "ground"],
        baseStats: {hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70},
        weightkg: 210,
        movepool: ["ancientpower", "attract", "bind", "block", "bodyslam", "captivate", "curse", "defensecurl", "dig", "doubleedge", "doubleteam", "dragonbreath", "dragonpulse", "earthpower", "earthquake", "endure", "explosion", "facade", "flail", "flashcannon", "frustration", "gyroball", "harden", "headbutt", "hiddenpower", "ironhead", "irontail", "mimic", "mudslap", "mudsport", "naturalgift", "payback", "protect", "psychup", "rage", "rest", "return", "roar", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "sandstorm", "sandtomb", "screech", "secretpower", "selfdestruct", "slam", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "tackle", "taunt", "torment", "toxic", "twister"]
    },
    Drowzee:
    {
        id: 96,
        uid: 190,
        name: "Drowzee",
        abilities: ["insomnia", "forewarn"],
        types: ["psychic", "???"],
        baseStats: {hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42},
        weightkg: 32.4,
        movepool: ["assist", "attract", "barrier", "bellydrum", "bodyslam", "brickbreak", "calmmind", "captivate", "confusion", "counter", "disable", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "facade", "firepunch", "flash", "flatter", "fling", "focuspunch", "frustration", "futuresight", "grassknot", "guardswap", "headbutt", "hiddenpower", "hypnosis", "icepunch", "lightscreen", "lowkick", "magiccoat", "meditate", "megakick", "megapunch", "metronome", "mimic", "nastyplot", "naturalgift", "nightmare", "poisongas", "pound", "protect", "psybeam", "psychic", "psychocut", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "taunt", "thief", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "wish", "zenheadbutt"]
    },
    Hypno:
    {
        id: 97,
        uid: 191,
        name: "Hypno",
        abilities: ["insomnia", "forewarn"],
        types: ["psychic", "???"],
        baseStats: {hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67},
        weightkg: 75.6,
        movepool: ["attract", "batonpass", "bodyslam", "brickbreak", "calmmind", "captivate", "confusion", "counter", "disable", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "facade", "firepunch", "flash", "fling", "focusblast", "focuspunch", "frustration", "futuresight", "gigaimpact", "grassknot", "headbutt", "hiddenpower", "hyperbeam", "hypnosis", "icepunch", "lightscreen", "lowkick", "magiccoat", "meditate", "megakick", "megapunch", "metronome", "mimic", "nastyplot", "naturalgift", "nightmare", "poisongas", "pound", "protect", "psybeam", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "switcheroo", "taunt", "thief", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Krabby:
    {
        id: 98,
        uid: 192,
        name: "Krabby",
        abilities: ["hypercutter", "shellarmor"],
        types: ["water", "???"],
        baseStats: {hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50},
        weightkg: 6.5,
        movepool: ["agility", "amnesia", "ancientpower", "attract", "blizzard", "bodyslam", "brickbreak", "brine", "bubble", "bubblebeam", "captivate", "crabhammer", "cut", "dig", "dive", "doubleedge", "doubleteam", "endure", "facade", "falseswipe", "flail", "fling", "frustration", "furycutter", "guillotine", "hail", "harden", "haze", "hiddenpower", "icebeam", "icywind", "irondefense", "knockoff", "leer", "metalclaw", "mimic", "mudshot", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "secretpower", "slam", "sleeptalk", "snore", "stomp", "strength", "substitute", "superpower", "surf", "swagger", "swordsdance", "thief", "tickle", "toxic", "visegrip", "waterpulse", "whirlpool", "xscissor"]
    },
    Voltorb:
    {
        id: 100,
        uid: 193,
        name: "Voltorb",
        abilities: ["soundproof", "static"],
        types: ["electric", "???"],
        baseStats: {hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100},
        weightkg: 10.4,
        movepool: ["charge", "chargebeam", "doubleteam", "endure", "explosion", "facade", "flash", "frustration", "gyroball", "headbutt", "hiddenpower", "lightscreen", "magiccoat", "magnetrise", "mimic", "mirrorcoat", "naturalgift", "protect", "raindance", "refresh", "rest", "return", "rollout", "screech", "secretpower", "selfdestruct", "shockwave", "signalbeam", "sleeptalk", "snore", "sonicboom", "spark", "substitute", "suckerpunch", "swagger", "swift", "tackle", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic"]
    },
    Exeggcute:
    {
        id: 102,
        uid: 194,
        name: "Exeggcute",
        abilities: ["chlorophyll"],
        types: ["grass", "psychic"],
        baseStats: {hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40},
        weightkg: 2.5,
        movepool: ["ancientpower", "attract", "barrage", "bulletseed", "captivate", "confusion", "curse", "doubleedge", "doubleteam", "dreameater", "endure", "energyball", "explosion", "facade", "flash", "frustration", "gigadrain", "grassknot", "gravity", "hiddenpower", "hypnosis", "ingrain", "leafstorm", "leechseed", "lightscreen", "luckychant", "mimic", "moonlight", "naturalgift", "naturepower", "nightmare", "poisonpowder", "powerswap", "protect", "psychic", "psychup", "reflect", "rest", "return", "rollout", "secretpower", "seedbomb", "selfdestruct", "skillswap", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "strength", "stunspore", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "thief", "toxic", "trickroom", "uproar", "wish", "worryseed"]
    },
    Cubone:
    {
        id: 104,
        uid: 195,
        name: "Cubone",
        abilities: ["rockhead", "lightningrod"],
        types: ["ground", "???"],
        baseStats: {hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35},
        weightkg: 6.5,
        movepool: ["aerialace", "ancientpower", "attract", "bellydrum", "blizzard", "bodyslam", "boneclub", "bonemerang", "bonerush", "brickbreak", "captivate", "counter", "detect", "dig", "doubleedge", "doublekick", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endeavor", "endure", "facade", "falseswipe", "fireblast", "firepunch", "flamethrower", "fling", "focusenergy", "focuspunch", "frustration", "furycutter", "growl", "headbutt", "hiddenpower", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "knockoff", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "perishsong", "protect", "rage", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandstorm", "screech", "secretpower", "seismictoss", "skullbash", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "swordsdance", "tailwhip", "thief", "thrash", "thunderpunch", "toxic", "uproar"]
    },
    Marowak:
    {
        id: 105,
        uid: 196,
        name: "Marowak",
        abilities: ["rockhead", "lightningrod"],
        types: ["ground", "???"],
        baseStats: {hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45},
        weightkg: 45,
        movepool: ["aerialace", "attract", "blizzard", "bodyslam", "boneclub", "bonemerang", "bonerush", "brickbreak", "captivate", "counter", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endeavor", "endure", "facade", "falseswipe", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "furycutter", "gigaimpact", "growl", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irondefense", "irontail", "knockoff", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "protect", "rage", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "seismictoss", "sing", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swordsdance", "tailwhip", "thief", "thrash", "thunderpunch", "toxic", "uproar"]
    },
    Hitmonlee:
    {
        id: 106,
        uid: 197,
        name: "Hitmonlee",
        abilities: ["limber", "reckless"],
        types: ["fighting", "???"],
        baseStats: {hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87},
        weightkg: 49.8,
        movepool: ["attract", "blazekick", "bodyslam", "bounce", "brickbreak", "bulkup", "captivate", "closecombat", "counter", "doubleedge", "doublekick", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "feint", "fling", "focusblast", "focusenergy", "focuspunch", "foresight", "frustration", "headbutt", "helpinghand", "hiddenpower", "highjumpkick", "jumpkick", "knockoff", "lowkick", "meditate", "megakick", "megapunch", "metronome", "mimic", "mindreader", "mudslap", "naturalgift", "poisonjab", "protect", "raindance", "refresh", "rest", "return", "revenge", "reversal", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "rollingkick", "secretpower", "seismictoss", "sleeptalk", "snore", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "superpower", "swagger", "swift", "thief", "toxic", "vacuumwave"]
    },
    Hitmonchan:
    {
        id: 107,
        uid: 198,
        name: "Hitmonchan",
        abilities: ["keeneye", "ironfist"],
        types: ["fighting", "???"],
        baseStats: {hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76},
        weightkg: 50.2,
        movepool: ["agility", "attract", "bodyslam", "brickbreak", "bulkup", "bulletpunch", "captivate", "closecombat", "cometpunch", "counter", "detect", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "earthquake", "endure", "facade", "feint", "firepunch", "fling", "focusblast", "focuspunch", "frustration", "headbutt", "helpinghand", "hiddenpower", "icepunch", "lowkick", "machpunch", "megakick", "megapunch", "metronome", "mimic", "mindreader", "mudslap", "naturalgift", "protect", "pursuit", "raindance", "rest", "return", "revenge", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "secretpower", "seismictoss", "skyuppercut", "sleeptalk", "snore", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "thief", "thunderpunch", "toxic", "vacuumwave"]
    },
    Lickitung:
    {
        id: 108,
        uid: 199,
        name: "Lickitung",
        abilities: ["owntempo", "oblivious"],
        types: ["normal", "???"],
        baseStats: {hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30},
        weightkg: 65.5,
        movepool: ["amnesia", "aquatail", "attract", "bellydrum", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "curse", "cut", "defensecurl", "dig", "disable", "doubleedge", "doubleteam", "dreameater", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focuspunch", "frustration", "gigaimpact", "hammerarm", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "lick", "magnitude", "mefirst", "megakick", "megapunch", "mimic", "muddywater", "mudslap", "naturalgift", "nightmare", "powerwhip", "protect", "psychup", "raindance", "refresh", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "screech", "secretpower", "seismictoss", "shadowball", "shockwave", "slam", "sleeptalk", "smellingsalts", "snore", "solarbeam", "stomp", "strength", "substitute", "sunnyday", "supersonic", "surf", "swagger", "swordsdance", "thief", "thunder", "thunderbolt", "thunderpunch", "toxic", "waterpulse", "whirlpool", "wish", "wrap", "wringout", "zenheadbutt"]
    },
    Rhyhorn:
    {
        id: 111,
        uid: 200,
        name: "Rhyhorn",
        abilities: ["lightningrod", "rockhead"],
        types: ["ground", "rock"],
        baseStats: {hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25},
        weightkg: 115,
        movepool: ["ancientpower", "aquatail", "attract", "blizzard", "bodyslam", "captivate", "counter", "crunch", "crushclaw", "curse", "dig", "doubleedge", "doubleteam", "dragonpulse", "dragonrush", "earthpower", "earthquake", "endeavor", "endure", "facade", "fireblast", "firefang", "flamethrower", "frustration", "furyattack", "headbutt", "hiddenpower", "hornattack", "horndrill", "icebeam", "icefang", "icywind", "irontail", "magnitude", "megahorn", "mimic", "mudslap", "naturalgift", "payback", "poisonjab", "protect", "raindance", "rest", "return", "reversal", "roar", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "scaryface", "secretpower", "shockwave", "skullbash", "sleeptalk", "snore", "spite", "stealthrock", "stomp", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "swordsdance", "tailwhip", "takedown", "thief", "thunder", "thunderbolt", "thunderfang", "toxic", "uproar"]
    },
    Rhydon:
    {
        id: 112,
        uid: 201,
        name: "Rhydon",
        abilities: ["lightningrod", "rockhead"],
        types: ["ground", "rock"],
        baseStats: {hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40},
        weightkg: 120,
        movepool: ["ancientpower", "aquatail", "attract", "avalanche", "blizzard", "block", "bodyslam", "brickbreak", "captivate", "counter", "cut", "dig", "doubleedge", "doubleteam", "dragonpulse", "dynamicpunch", "earthpower", "earthquake", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "furyattack", "furycutter", "gigaimpact", "hammerarm", "headbutt", "helpinghand", "hiddenpower", "hornattack", "horndrill", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "megahorn", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "payback", "poisonjab", "protect", "raindance", "rest", "return", "roar", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "scaryface", "secretpower", "seismictoss", "shadowclaw", "shockwave", "sleeptalk", "snore", "spite", "stealthrock", "stomp", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "swordsdance", "tailwhip", "takedown", "thief", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "whirlpool"]
    },
    Chansey:
    {
        id: 113,
        uid: 202,
        name: "Chansey",
        abilities: ["naturalcure", "serenegrace"],
        types: ["normal", "???"],
        baseStats: {hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50},
        weightkg: 34.6,
        movepool: ["aromatherapy", "attract", "blizzard", "bodyslam", "brickbreak", "calmmind", "captivate", "chargebeam", "counter", "defensecurl", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "earthquake", "eggbomb", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "growl", "hail", "headbutt", "healbell", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "lastresort", "lightscreen", "megakick", "megapunch", "metronome", "mimic", "minimize", "mudbomb", "mudslap", "naturalgift", "pound", "present", "protect", "psychic", "psychup", "raindance", "recycle", "refresh", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shockwave", "sing", "skillswap", "sleeptalk", "snatch", "snore", "softboiled", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "sweetkiss", "sweetscent", "tailwhip", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "waterpulse", "wish", "zenheadbutt"]
    },
    Tangela:
    {
        id: 114,
        uid: 203,
        name: "Tangela",
        abilities: ["chlorophyll", "leafguard"],
        types: ["grass", "???"],
        baseStats: {hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60},
        weightkg: 35,
        movepool: ["absorb", "amnesia", "ancientpower", "attract", "bind", "bodyslam", "bulletseed", "captivate", "confusion", "constrict", "cut", "doubleedge", "doubleteam", "endeavor", "endure", "energyball", "facade", "flail", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "growth", "headbutt", "hiddenpower", "hyperbeam", "ingrain", "knockoff", "leafstorm", "leechseed", "megadrain", "mimic", "morningsun", "naturalgift", "naturepower", "painsplit", "poisonpowder", "powerswap", "powerwhip", "protect", "psychup", "reflect", "rest", "return", "rocksmash", "secretpower", "seedbomb", "shockwave", "slam", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "thief", "tickle", "toxic", "vinewhip", "worryseed", "wringout"]
    },
    Kangaskhan:
    {
        id: 115,
        uid: 204,
        name: "Kangaskhan",
        abilities: ["earlybird", "scrappy"],
        types: ["normal", "???"],
        baseStats: {hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90},
        weightkg: 80,
        movepool: ["aerialace", "aquatail", "attract", "avalanche", "bite", "blizzard", "bodyslam", "brickbreak", "captivate", "cometpunch", "counter", "crunch", "crushclaw", "cut", "dig", "disable", "dizzypunch", "doubleedge", "doublehit", "doubleteam", "drainpunch", "dynamicpunch", "earthquake", "endeavor", "endure", "facade", "fakeout", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "foresight", "frustration", "furycutter", "gigaimpact", "hail", "hammerarm", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "outrage", "protect", "rage", "raindance", "rest", "return", "reversal", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shockwave", "sing", "sleeptalk", "snore", "solarbeam", "spite", "stomp", "strength", "substitute", "suckerpunch", "sunnyday", "surf", "swagger", "tailwhip", "thief", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "waterpulse", "whirlpool", "wish", "yawn"]
    },
    Horsea:
    {
        id: 116,
        uid: 205,
        name: "Horsea",
        abilities: ["swiftswim", "sniper"],
        types: ["water", "???"],
        baseStats: {hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60},
        weightkg: 8,
        movepool: ["agility", "attract", "aurorabeam", "blizzard", "bounce", "brine", "bubble", "bubblebeam", "captivate", "disable", "dive", "doubleedge", "doubleteam", "dragonbreath", "dragondance", "dragonpulse", "dragonrage", "endure", "facade", "flail", "flashcannon", "focusenergy", "frustration", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icywind", "leer", "mimic", "muddywater", "naturalgift", "octazooka", "outrage", "protect", "raindance", "razorwind", "rest", "return", "secretpower", "signalbeam", "sleeptalk", "smokescreen", "snore", "splash", "substitute", "surf", "swagger", "swift", "toxic", "twister", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Seadra:
    {
        id: 117,
        uid: 206,
        name: "Seadra",
        abilities: ["poisonpoint", "sniper"],
        types: ["water", "???"],
        baseStats: {hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85},
        weightkg: 25,
        movepool: ["agility", "attract", "blizzard", "bounce", "brine", "bubble", "bubblebeam", "captivate", "dive", "doubleedge", "doubleteam", "dragondance", "dragonpulse", "endure", "facade", "flashcannon", "focusenergy", "frustration", "gigaimpact", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "leer", "mimic", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "secretpower", "signalbeam", "sleeptalk", "smokescreen", "snore", "substitute", "surf", "swagger", "swift", "toxic", "twister", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Goldeen:
    {
        id: 118,
        uid: 207,
        name: "Goldeen",
        abilities: ["swiftswim", "waterveil"],
        types: ["water", "???"],
        baseStats: {hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63},
        weightkg: 15,
        movepool: ["agility", "aquaring", "aquatail", "attract", "blizzard", "bodyslam", "bounce", "captivate", "dive", "doubleedge", "doubleteam", "endure", "facade", "flail", "frustration", "furyattack", "furycutter", "hail", "haze", "hiddenpower", "hornattack", "horndrill", "hydropump", "icebeam", "icywind", "knockoff", "megahorn", "mimic", "mudslap", "mudsport", "naturalgift", "peck", "poisonjab", "protect", "psybeam", "raindance", "rest", "return", "secretpower", "sleeptalk", "snore", "substitute", "supersonic", "surf", "swagger", "swift", "tailwhip", "toxic", "waterfall", "waterpulse", "watersport", "whirlpool"]
    },
    Seaking:
    {
        id: 119,
        uid: 208,
        name: "Seaking",
        abilities: ["swiftswim", "waterveil"],
        types: ["water", "???"],
        baseStats: {hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68},
        weightkg: 39,
        movepool: ["agility", "aquaring", "aquatail", "attract", "blizzard", "bounce", "captivate", "dive", "doubleedge", "doubleteam", "endure", "facade", "flail", "frustration", "furyattack", "furycutter", "gigaimpact", "hail", "hiddenpower", "hornattack", "horndrill", "hyperbeam", "icebeam", "icywind", "knockoff", "megahorn", "mimic", "mudslap", "naturalgift", "peck", "poisonjab", "protect", "raindance", "rest", "return", "secretpower", "sleeptalk", "snore", "substitute", "supersonic", "surf", "swagger", "swift", "tailwhip", "toxic", "waterfall", "waterpulse", "watersport", "whirlpool"]
    },
    Staryu:
    {
        id: 120,
        uid: 209,
        name: "Staryu",
        abilities: ["illuminate", "naturalcure"],
        types: ["water", "???"],
        baseStats: {hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85},
        weightkg: 34.5,
        movepool: ["blizzard", "brine", "bubblebeam", "camouflage", "cosmicpower", "dive", "doubleedge", "doubleteam", "endure", "facade", "flash", "flashcannon", "frustration", "gravity", "gyroball", "hail", "harden", "hiddenpower", "hydropump", "icebeam", "icywind", "lightscreen", "magiccoat", "mimic", "minimize", "naturalgift", "painsplit", "powergem", "protect", "psychic", "psychup", "raindance", "rapidspin", "recover", "recycle", "reflect", "rest", "return", "rollout", "secretpower", "signalbeam", "sleeptalk", "snore", "substitute", "surf", "swagger", "swift", "tackle", "thunder", "thunderbolt", "thunderwave", "toxic", "twister", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Starmie:
    {
        id: 121,
        uid: 210,
        name: "Starmie",
        abilities: ["illuminate", "naturalcure"],
        types: ["water", "psychic"],
        baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115},
        weightkg: 80,
        movepool: ["avalanche", "blizzard", "brine", "confuseray", "dive", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "flash", "flashcannon", "frustration", "gigaimpact", "grassknot", "gravity", "gyroball", "hail", "hiddenpower", "hyperbeam", "icebeam", "icywind", "lightscreen", "magiccoat", "mimic", "naturalgift", "nightmare", "painsplit", "protect", "psychic", "psychup", "raindance", "rapidspin", "recover", "recycle", "reflect", "refresh", "rest", "return", "rollout", "secretpower", "signalbeam", "skillswap", "sleeptalk", "snore", "substitute", "surf", "swagger", "swift", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Scyther:
    {
        id: 123,
        uid: 211,
        name: "Scyther",
        abilities: ["swarm", "technician"],
        types: ["bug", "flying"],
        baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105},
        weightkg: 56,
        movepool: ["aerialace", "agility", "airslash", "attract", "batonpass", "brickbreak", "bugbite", "bugbuzz", "captivate", "counter", "cut", "defog", "doubleedge", "doublehit", "doubleteam", "endure", "facade", "falseswipe", "feint", "focusenergy", "frustration", "furycutter", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "knockoff", "leer", "lightscreen", "mimic", "morningsun", "naturalgift", "nightslash", "ominouswind", "protect", "pursuit", "quickattack", "raindance", "razorwind", "rest", "return", "reversal", "rocksmash", "roost", "safeguard", "secretpower", "silverwind", "slash", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "tailwind", "thief", "toxic", "uturn", "vacuumwave", "wingattack", "xscissor"]
    },
    Jynx:
    {
        id: 124,
        uid: 212,
        name: "Jynx",
        abilities: ["oblivious", "forewarn"],
        types: ["ice", "psychic"],
        baseStats: {hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95},
        weightkg: 40.6,
        movepool: ["attract", "avalanche", "blizzard", "bodyslam", "brickbreak", "calmmind", "captivate", "counter", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "facade", "faketears", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "hail", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "lick", "lightscreen", "lovelykiss", "magiccoat", "meanlook", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "nightmare", "payback", "perishsong", "pound", "powdersnow", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "secretpower", "seismictoss", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "substitute", "swagger", "taunt", "thief", "torment", "toxic", "trick", "trickroom", "wakeupslap", "waterpulse", "wringout", "zenheadbutt"]
    },
    Electabuzz:
    {
        id: 125,
        uid: 213,
        name: "Electabuzz",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105},
        weightkg: 30,
        movepool: ["attract", "bodyslam", "brickbreak", "captivate", "chargebeam", "counter", "crosschop", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "firepunch", "flash", "fling", "focusblast", "focuspunch", "followme", "frustration", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "irontail", "leer", "lightscreen", "lowkick", "magnetrise", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "psychic", "quickattack", "raindance", "rest", "return", "rockclimb", "rocksmash", "screech", "secretpower", "seismictoss", "shockwave", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "swagger", "swift", "thief", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "toxic"]
    },
    Magmar:
    {
        id: 126,
        uid: 214,
        name: "Magmar",
        abilities: ["flamebody"],
        types: ["fire", "???"],
        baseStats: {hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93},
        weightkg: 44.5,
        movepool: ["attract", "bodyslam", "brickbreak", "captivate", "confuseray", "counter", "crosschop", "doubleedge", "doubleteam", "dynamicpunch", "ember", "endure", "facade", "feintattack", "fireblast", "firepunch", "firespin", "flamethrower", "fling", "focusblast", "focuspunch", "followme", "frustration", "gigaimpact", "headbutt", "heatwave", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "lavaplume", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "overheat", "protect", "psychic", "rest", "return", "rockclimb", "rocksmash", "secretpower", "seismictoss", "sleeptalk", "smog", "smokescreen", "snore", "strength", "substitute", "sunnyday", "swagger", "thief", "thunderpunch", "toxic", "willowisp"]
    },
    Pinsir:
    {
        id: 127,
        uid: 215,
        name: "Pinsir",
        abilities: ["hypercutter", "moldbreaker"],
        types: ["bug", "???"],
        baseStats: {hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85},
        weightkg: 55,
        movepool: ["attract", "bind", "bodyslam", "brickbreak", "bulkup", "captivate", "closecombat", "cut", "dig", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "falseswipe", "feint", "feintattack", "flail", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "furyattack", "furycutter", "gigaimpact", "guillotine", "harden", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "irondefense", "knockoff", "mimic", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "revenge", "rockclimb", "rockslide", "rocksmash", "rocktomb", "secretpower", "seismictoss", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "stringshot", "submission", "substitute", "sunnyday", "superpower", "swagger", "swordsdance", "thief", "thrash", "toxic", "visegrip", "vitalthrow", "xscissor"]
    },
    Tauros:
    {
        id: 128,
        uid: 216,
        name: "Tauros",
        abilities: ["intimidate", "angerpoint"],
        types: ["normal", "???"],
        baseStats: {hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110},
        weightkg: 88.4,
        movepool: ["attract", "blizzard", "bodyslam", "captivate", "doubleedge", "doubleteam", "earthquake", "endeavor", "endure", "facade", "fireblast", "flamethrower", "frustration", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hornattack", "hyperbeam", "icebeam", "icywind", "ironhead", "irontail", "mimic", "naturalgift", "outrage", "payback", "protect", "pursuit", "rage", "raindance", "refresh", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "sandstorm", "scaryface", "secretpower", "shockwave", "sleeptalk", "snore", "solarbeam", "spite", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "tackle", "tailwhip", "takedown", "thrash", "thunder", "thunderbolt", "toxic", "uproar", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Magikarp:
    {
        id: 129,
        uid: 217,
        name: "Magikarp",
        abilities: ["swiftswim"],
        types: ["water", "???"],
        baseStats: {hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80},
        weightkg: 10,
        movepool: ["bounce", "flail", "splash", "tackle"]
    },
    Gyarados:
    {
        id: 130,
        uid: 218,
        name: "Gyarados",
        abilities: ["intimidate"],
        types: ["water", "flying"],
        baseStats: {hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81},
        weightkg: 235,
        movepool: ["aquatail", "attract", "avalanche", "bite", "blizzard", "bodyslam", "bounce", "brine", "captivate", "darkpulse", "dive", "doubleedge", "doubleteam", "dragondance", "dragonpulse", "dragonrage", "earthquake", "endure", "facade", "fireblast", "flamethrower", "frustration", "gigaimpact", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icefang", "icywind", "ironhead", "leer", "mimic", "naturalgift", "outrage", "payback", "protect", "raindance", "rest", "return", "roar", "rocksmash", "sandstorm", "secretpower", "sleeptalk", "snore", "spite", "stoneedge", "strength", "substitute", "surf", "swagger", "taunt", "thrash", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "twister", "uproar", "waterfall", "waterpulse", "whirlpool"]
    },
    Ditto:
    {
        id: 132,
        uid: 219,
        name: "Ditto",
        abilities: ["limber"],
        types: ["normal", "???"],
        baseStats: {hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48},
        weightkg: 4,
        movepool: ["transform"]
    },
    Vaporeon:
    {
        id: 134,
        uid: 220,
        name: "Vaporeon",
        abilities: ["waterabsorb"],
        types: ["water", "???"],
        baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65},
        weightkg: 29,
        movepool: ["acidarmor", "aquaring", "aquatail", "attract", "aurorabeam", "bite", "blizzard", "bodyslam", "brine", "captivate", "dig", "dive", "doubleedge", "doubleteam", "endure", "facade", "frustration", "gigaimpact", "hail", "haze", "headbutt", "healbell", "helpinghand", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "irontail", "lastresort", "mimic", "muddywater", "mudslap", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "roar", "rocksmash", "sandattack", "secretpower", "shadowball", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "tackle", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Jolteon:
    {
        id: 135,
        uid: 221,
        name: "Jolteon",
        abilities: ["voltabsorb"],
        types: ["electric", "???"],
        baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130},
        weightkg: 24.5,
        movepool: ["agility", "attract", "bodyslam", "captivate", "chargebeam", "dig", "discharge", "doubleedge", "doublekick", "doubleteam", "endure", "facade", "flash", "frustration", "gigaimpact", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "lastresort", "lightscreen", "magnetrise", "mimic", "mudslap", "naturalgift", "pinmissile", "protect", "quickattack", "raindance", "rest", "return", "roar", "rocksmash", "sandattack", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "thunder", "thunderbolt", "thunderfang", "thundershock", "thunderwave", "toxic"]
    },
    Flareon:
    {
        id: 136,
        uid: 222,
        name: "Flareon",
        abilities: ["flashfire"],
        types: ["fire", "???"],
        baseStats: {hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65},
        weightkg: 25,
        movepool: ["attract", "bite", "bodyslam", "captivate", "dig", "doubleedge", "doubleteam", "ember", "endure", "facade", "fireblast", "firefang", "firespin", "flamethrower", "frustration", "gigaimpact", "headbutt", "healbell", "heatwave", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "lastresort", "lavaplume", "leer", "mimic", "mudslap", "naturalgift", "overheat", "protect", "quickattack", "raindance", "rest", "return", "roar", "rocksmash", "sandattack", "scaryface", "secretpower", "shadowball", "sleeptalk", "smog", "snore", "strength", "substitute", "sunnyday", "superpower", "swagger", "swift", "tackle", "tailwhip", "toxic", "willowisp"]
    },
    Porygon:
    {
        id: 137,
        uid: 223,
        name: "Porygon",
        abilities: ["trace", "download"],
        types: ["normal", "???"],
        baseStats: {hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40},
        weightkg: 36.5,
        movepool: ["aerialace", "agility", "blizzard", "chargebeam", "conversion2", "conversion", "discharge", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "gigaimpact", "gravity", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "lastresort", "lockon", "magiccoat", "magnetrise", "mimic", "naturalgift", "nightmare", "painsplit", "protect", "psybeam", "psychic", "psychup", "raindance", "recover", "recycle", "rest", "return", "secretpower", "shadowball", "sharpen", "shockwave", "signalbeam", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "tackle", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "triattack", "trick", "trickroom", "zapcannon", "zenheadbutt"]
    },
    Omanyte:
    {
        id: 138,
        uid: 224,
        name: "Omanyte",
        abilities: ["swiftswim", "shellarmor"],
        types: ["rock", "water"],
        baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35},
        weightkg: 7.5,
        movepool: ["ancientpower", "attract", "aurorabeam", "bite", "blizzard", "bodyslam", "brine", "bubblebeam", "captivate", "constrict", "dive", "doubleedge", "doubleteam", "earthpower", "endure", "facade", "frustration", "gyroball", "hail", "haze", "headbutt", "hiddenpower", "hydropump", "icebeam", "icywind", "irondefense", "knockoff", "leer", "mimic", "muddywater", "mudshot", "naturalgift", "protect", "raindance", "rest", "return", "rockblast", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "slam", "sleeptalk", "snore", "spikes", "stealthrock", "substitute", "supersonic", "surf", "swagger", "thief", "tickle", "toxic", "toxicspikes", "waterfall", "watergun", "waterpulse", "whirlpool", "withdraw", "wringout"]
    },
    Omastar:
    {
        id: 139,
        uid: 225,
        name: "Omastar",
        abilities: ["swiftswim", "shellarmor"],
        types: ["rock", "water"],
        baseStats: {hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55},
        weightkg: 35,
        movepool: ["ancientpower", "attract", "bite", "blizzard", "bodyslam", "brine", "captivate", "constrict", "dive", "doubleedge", "doubleteam", "earthpower", "endure", "facade", "frustration", "gigaimpact", "gyroball", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "irondefense", "knockoff", "leer", "mimic", "mudshot", "naturalgift", "protect", "raindance", "rest", "return", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "seismictoss", "sleeptalk", "snore", "spikecannon", "stealthrock", "stoneedge", "substitute", "surf", "swagger", "thief", "tickle", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "withdraw"]
    },
    Kabuto:
    {
        id: 140,
        uid: 226,
        name: "Kabuto",
        abilities: ["swiftswim", "battlearmor"],
        types: ["rock", "water"],
        baseStats: {hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55},
        weightkg: 11.5,
        movepool: ["absorb", "aerialace", "ancientpower", "aquajet", "attract", "aurorabeam", "blizzard", "bodyslam", "brine", "bubblebeam", "captivate", "confuseray", "dig", "doubleedge", "doubleteam", "earthpower", "endure", "facade", "flail", "frustration", "gigadrain", "hail", "harden", "hiddenpower", "icebeam", "icywind", "irondefense", "knockoff", "leer", "megadrain", "metalsound", "mimic", "mudshot", "mudslap", "naturalgift", "protect", "raindance", "rapidspin", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandattack", "sandstorm", "scratch", "screech", "secretpower", "sleeptalk", "snore", "stealthrock", "substitute", "surf", "swagger", "thief", "toxic", "waterfall", "waterpulse", "whirlpool", "wringout"]
    },
    Kabutops:
    {
        id: 141,
        uid: 227,
        name: "Kabutops",
        abilities: ["swiftswim", "battlearmor"],
        types: ["rock", "water"],
        baseStats: {hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80},
        weightkg: 40.5,
        movepool: ["absorb", "aerialace", "ancientpower", "aquajet", "aquatail", "attract", "blizzard", "bodyslam", "brickbreak", "brine", "captivate", "cut", "dig", "dive", "doubleedge", "doubleteam", "earthpower", "endure", "facade", "feint", "frustration", "furycutter", "gigadrain", "gigaimpact", "hail", "harden", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irondefense", "knockoff", "leer", "lowkick", "megadrain", "megakick", "metalsound", "mimic", "mudshot", "mudslap", "naturalgift", "nightslash", "protect", "raindance", "rest", "return", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandattack", "sandstorm", "scratch", "secretpower", "seismictoss", "slash", "sleeptalk", "snore", "stealthrock", "stoneedge", "substitute", "superpower", "surf", "swagger", "swordsdance", "thief", "toxic", "waterfall", "waterpulse", "whirlpool", "wringout", "xscissor"]
    },
    Aerodactyl:
    {
        id: 142,
        uid: 228,
        name: "Aerodactyl",
        abilities: ["rockhead", "pressure"],
        types: ["rock", "flying"],
        baseStats: {hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130},
        weightkg: 59,
        movepool: ["aerialace", "agility", "aircutter", "ancientpower", "aquatail", "assurance", "attract", "bite", "captivate", "crunch", "curse", "defog", "doubleedge", "doubleteam", "dragonbreath", "dragonclaw", "dragonpulse", "earthpower", "earthquake", "endure", "facade", "fireblast", "firefang", "flamethrower", "fly", "foresight", "frustration", "gigaimpact", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "icefang", "ironhead", "irontail", "mimic", "naturalgift", "ominouswind", "payback", "protect", "pursuit", "raindance", "rest", "return", "roar", "rockpolish", "rockslide", "rocksmash", "rocktomb", "roost", "sandstorm", "scaryface", "secretpower", "skyattack", "sleeptalk", "snore", "stealthrock", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tailwind", "takedown", "taunt", "thief", "thunderfang", "torment", "toxic", "twister", "whirlwind", "wingattack"]
    },
    Dratini:
    {
        id: 147,
        uid: 229,
        name: "Dratini",
        abilities: ["shedskin"],
        types: ["dragon", "???"],
        baseStats: {hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50},
        weightkg: 3.3,
        movepool: ["agility", "aquatail", "attract", "blizzard", "bodyslam", "captivate", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragondance", "dragonpulse", "dragonrage", "dragonrush", "endure", "extremespeed", "facade", "fireblast", "flamethrower", "frustration", "hail", "haze", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "leer", "lightscreen", "mimic", "mist", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "safeguard", "secretpower", "shockwave", "slam", "sleeptalk", "snore", "substitute", "sunnyday", "supersonic", "surf", "swagger", "swift", "thunder", "thunderbolt", "thunderwave", "toxic", "twister", "waterfall", "waterpulse", "whirlpool", "wrap"]
    },
    Dragonair:
    {
        id: 148,
        uid: 230,
        name: "Dragonair",
        abilities: ["shedskin"],
        types: ["dragon", "???"],
        baseStats: {hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70},
        weightkg: 16.5,
        movepool: ["agility", "aquatail", "attract", "blizzard", "bodyslam", "captivate", "doubleedge", "doubleteam", "dracometeor", "dragondance", "dragonpulse", "dragonrage", "dragonrush", "endure", "facade", "fireblast", "flamethrower", "frustration", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "leer", "mimic", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "safeguard", "secretpower", "shockwave", "slam", "sleeptalk", "snore", "substitute", "sunnyday", "surf", "swagger", "swift", "thunder", "thunderbolt", "thunderwave", "toxic", "twister", "waterfall", "waterpulse", "whirlpool", "wrap"]
    },
    Dragonite:
    {
        id: 149,
        uid: 231,
        name: "Dragonite",
        abilities: ["innerfocus"],
        types: ["dragon", "flying"],
        baseStats: {hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80},
        weightkg: 210,
        movepool: ["aerialace", "agility", "aircutter", "aquatail", "attract", "blizzard", "bodyslam", "brickbreak", "captivate", "cut", "defog", "dive", "doubleedge", "doubleteam", "dracometeor", "dragonclaw", "dragondance", "dragonpulse", "dragonrage", "dragonrush", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "fly", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "hail", "headbutt", "healbell", "heatwave", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "ironhead", "irontail", "leer", "mimic", "mudslap", "naturalgift", "ominouswind", "outrage", "protect", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "roost", "safeguard", "sandstorm", "secretpower", "shockwave", "slam", "sleeptalk", "snore", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "twister", "waterfall", "waterpulse", "whirlpool", "wingattack", "wrap"]
    },
    Mewtwo:
    {
        id: 150,
        uid: 232,
        name: "Mewtwo",
        abilities: ["pressure"],
        types: ["psychic", "???"],
        baseStats: {hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130},
        weightkg: 122,
        movepool: ["aerialace", "amnesia", "aquatail", "aurasphere", "avalanche", "barrier", "blizzard", "bodyslam", "brickbreak", "bulkup", "calmmind", "chargebeam", "confusion", "counter", "disable", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "earthquake", "embargo", "endure", "energyball", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focusblast", "focuspunch", "frustration", "futuresight", "gigaimpact", "grassknot", "gravity", "guardswap", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "lightscreen", "lowkick", "magiccoat", "mefirst", "megakick", "megapunch", "metronome", "mimic", "miracleeye", "mist", "mudslap", "naturalgift", "nightmare", "poisonjab", "powerswap", "protect", "psychic", "psychocut", "psychup", "raindance", "recover", "recycle", "reflect", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "safeguard", "sandstorm", "secretpower", "seismictoss", "selfdestruct", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "solarbeam", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "taunt", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "waterpulse", "willowisp", "zenheadbutt"]
    },
    Mew:
    {
        id: 151,
        uid: 233,
        name: "Mew",
        abilities: ["synchronize"],
        types: ["psychic", "???"],
        baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
        weightkg: 4,
        movepool: ["aerialace", "aircutter", "amnesia", "ancientpower", "aquatail", "attract", "aurasphere", "avalanche", "barrier", "batonpass", "blizzard", "block", "bodyslam", "bounce", "brickbreak", "brine", "bugbite", "bulkup", "bulletseed", "calmmind", "captivate", "chargebeam", "counter", "cut", "darkpulse", "defensecurl", "defog", "dig", "dive", "doubleedge", "doubleteam", "dragonclaw", "dragonpulse", "drainpunch", "dreameater", "dynamicpunch", "earthpower", "earthquake", "embargo", "endeavor", "endure", "energyball", "explosion", "facade", "fakeout", "falseswipe", "feintattack", "fireblast", "firepunch", "flamethrower", "flash", "flashcannon", "fling", "fly", "focusblast", "focuspunch", "frustration", "furycutter", "gastroacid", "gigadrain", "gigaimpact", "grassknot", "gravity", "gunkshot", "gyroball", "hail", "headbutt", "healbell", "heatwave", "helpinghand", "hiddenpower", "hyperbeam", "hypnosis", "icebeam", "icepunch", "icywind", "irondefense", "ironhead", "irontail", "knockoff", "lastresort", "lightscreen", "lowkick", "magiccoat", "magnetrise", "mefirst", "megakick", "megapunch", "metronome", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "nightshade", "ominouswind", "outrage", "overheat", "painsplit", "payback", "pluck", "poisonjab", "pound", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "roleplay", "rollout", "roost", "safeguard", "sandstorm", "secretpower", "seedbomb", "seismictoss", "selfdestruct", "shadowball", "shadowclaw", "shockwave", "signalbeam", "silverwind", "skillswap", "skyattack", "sleeptalk", "sludgebomb", "snatch", "snore", "softboiled", "solarbeam", "spite", "stealthrock", "steelwing", "stoneedge", "strength", "stringshot", "substitute", "suckerpunch", "sunnyday", "superfang", "superpower", "surf", "swagger", "swift", "swordsdance", "synthesis", "tailwind", "taunt", "teleport", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "transform", "trick", "trickroom", "twister", "uproar", "uturn", "vacuumwave", "waterfall", "waterpulse", "whirlpool", "willowisp", "worryseed", "xscissor", "zapcannon", "zenheadbutt"]
    },
    Sentret:
    {
        id: 161,
        uid: 234,
        name: "Sentret",
        abilities: ["runaway", "keeneye"],
        types: ["normal", "???"],
        baseStats: {hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20},
        weightkg: 6,
        movepool: ["amnesia", "aquatail", "assist", "attract", "batonpass", "bodyslam", "brickbreak", "captivate", "chargebeam", "charm", "covet", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "firepunch", "flamethrower", "fling", "focusenergy", "focuspunch", "followme", "foresight", "frustration", "furycutter", "furyswipes", "grassknot", "headbutt", "helpinghand", "hiddenpower", "hypervoice", "icebeam", "icepunch", "irontail", "knockoff", "lastresort", "mefirst", "mimic", "mudslap", "naturalgift", "protect", "pursuit", "quickattack", "raindance", "rest", "return", "reversal", "rollout", "scratch", "secretpower", "shadowball", "shadowclaw", "shockwave", "slam", "slash", "sleeptalk", "snore", "solarbeam", "substitute", "suckerpunch", "sunnyday", "superfang", "surf", "swagger", "swift", "thief", "thunderbolt", "thunderpunch", "toxic", "trick", "uproar", "uturn", "waterpulse", "whirlpool"]
    },
    Furret:
    {
        id: 162,
        uid: 235,
        name: "Furret",
        abilities: ["runaway", "keeneye"],
        types: ["normal", "???"],
        baseStats: {hp: 85, atk: 76, def: 64, spa: 45, spd: 55, spe: 90},
        weightkg: 32.5,
        movepool: ["amnesia", "aquatail", "attract", "batonpass", "blizzard", "bodyslam", "brickbreak", "captivate", "chargebeam", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "followme", "foresight", "frustration", "furycutter", "furyswipes", "gigaimpact", "grassknot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icepunch", "irontail", "knockoff", "lastresort", "mefirst", "mimic", "mudslap", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "rocksmash", "rollout", "scratch", "secretpower", "shadowball", "shadowclaw", "shockwave", "slam", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "surf", "swagger", "swift", "thief", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "uturn", "waterpulse", "whirlpool"]
    },
    Hoothoot:
    {
        id: 163,
        uid: 236,
        name: "Hoothoot",
        abilities: ["insomnia", "keeneye"],
        types: ["normal", "flying"],
        baseStats: {hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50},
        weightkg: 21.2,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "attract", "captivate", "confusion", "defog", "doubleedge", "doubleteam", "dreameater", "endure", "extrasensory", "facade", "featherdance", "feintattack", "flash", "fly", "foresight", "frustration", "growl", "heatwave", "hiddenpower", "hypnosis", "magiccoat", "mimic", "mirrormove", "mudslap", "naturalgift", "nightmare", "nightshade", "ominouswind", "peck", "pluck", "protect", "psychic", "psychoshift", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roost", "secretpower", "shadowball", "silverwind", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "tailwind", "takedown", "thief", "toxic", "twister", "uproar", "whirlwind", "wingattack", "zenheadbutt"]
    },
    Ledyba:
    {
        id: 165,
        uid: 237,
        name: "Ledyba",
        abilities: ["swarm", "earlybird"],
        types: ["bug", "flying"],
        baseStats: {hp: 40, atk: 20, def: 30, spa: 40, spd: 80, spe: 55},
        weightkg: 10.8,
        movepool: ["aerialace", "agility", "aircutter", "attract", "batonpass", "bide", "brickbreak", "bugbite", "bugbuzz", "captivate", "cometpunch", "dig", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "encore", "endure", "facade", "flash", "fling", "focuspunch", "frustration", "gigadrain", "headbutt", "hiddenpower", "icepunch", "knockoff", "lightscreen", "machpunch", "megapunch", "mimic", "naturalgift", "ominouswind", "protect", "psybeam", "reflect", "refresh", "rest", "return", "rollout", "roost", "safeguard", "screech", "secretpower", "silverwind", "sleeptalk", "snore", "solarbeam", "stringshot", "substitute", "sunnyday", "supersonic", "swagger", "swift", "swordsdance", "tackle", "tailwind", "thief", "thunderpunch", "toxic", "uproar", "uturn"]
    },
    Ledian:
    {
        id: 166,
        uid: 238,
        name: "Ledian",
        abilities: ["swarm", "earlybird"],
        types: ["bug", "flying"],
        baseStats: {hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85},
        weightkg: 35.6,
        movepool: ["aerialace", "agility", "aircutter", "attract", "batonpass", "brickbreak", "bugbite", "bugbuzz", "captivate", "cometpunch", "dig", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "endure", "facade", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigadrain", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "knockoff", "lightscreen", "machpunch", "megapunch", "mimic", "naturalgift", "ominouswind", "protect", "reflect", "rest", "return", "rocksmash", "rollout", "roost", "safeguard", "secretpower", "silverwind", "sleeptalk", "snore", "solarbeam", "strength", "stringshot", "substitute", "sunnyday", "supersonic", "swagger", "swift", "swordsdance", "tackle", "tailwind", "thief", "thunderpunch", "toxic", "uproar", "uturn"]
    },
    Spinarak:
    {
        id: 167,
        uid: 239,
        name: "Spinarak",
        abilities: ["swarm", "insomnia"],
        types: ["bug", "poison"],
        baseStats: {hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30},
        weightkg: 8.5,
        movepool: ["agility", "attract", "batonpass", "bodyslam", "bounce", "bugbite", "captivate", "constrict", "dig", "disable", "doubleedge", "doubleteam", "endure", "facade", "flash", "frustration", "furyswipes", "gigadrain", "hiddenpower", "leechlife", "mimic", "naturalgift", "nightshade", "pinmissile", "poisonjab", "poisonsting", "protect", "psybeam", "psychic", "pursuit", "refresh", "rest", "return", "scaryface", "secretpower", "shadowsneak", "signalbeam", "sleeptalk", "sludgebomb", "snore", "solarbeam", "sonicboom", "spiderweb", "stringshot", "substitute", "suckerpunch", "sunnyday", "swagger", "thief", "toxic", "toxicspikes"]
    },
    Crobat:
    {
        id: 169,
        uid: 240,
        name: "Crobat",
        abilities: ["innerfocus"],
        types: ["poison", "flying"],
        baseStats: {hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130},
        weightkg: 75,
        movepool: ["aerialace", "aircutter", "airslash", "astonish", "attract", "bite", "captivate", "confuseray", "crosspoison", "darkpulse", "defog", "doubleedge", "doubleteam", "endure", "facade", "fly", "frustration", "gigadrain", "gigaimpact", "haze", "heatwave", "hiddenpower", "hyperbeam", "leechlife", "meanlook", "mimic", "naturalgift", "ominouswind", "payback", "pluck", "poisonfang", "protect", "raindance", "rest", "return", "roost", "screech", "secretpower", "shadowball", "skyattack", "sleeptalk", "sludgebomb", "snatch", "snore", "steelwing", "substitute", "sunnyday", "superfang", "supersonic", "swagger", "swift", "tailwind", "taunt", "thief", "torment", "toxic", "twister", "uproar", "uturn", "wingattack", "xscissor", "zenheadbutt"]
    },
    Chinchou:
    {
        id: 170,
        uid: 241,
        name: "Chinchou",
        abilities: ["voltabsorb", "illuminate"],
        types: ["water", "electric"],
        baseStats: {hp: 75, atk: 38, def: 38, spa: 56, spd: 56, spe: 67},
        weightkg: 12,
        movepool: ["agility", "amnesia", "aquaring", "attract", "blizzard", "bounce", "brine", "bubble", "bubblebeam", "captivate", "charge", "chargebeam", "confuseray", "discharge", "dive", "doubleedge", "doubleteam", "endure", "facade", "flail", "flash", "frustration", "hail", "healbell", "hiddenpower", "hydropump", "icebeam", "icywind", "mimic", "mist", "naturalgift", "protect", "psybeam", "raindance", "rest", "return", "screech", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "substitute", "suckerpunch", "supersonic", "surf", "swagger", "takedown", "thunder", "thunderbolt", "thunderwave", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Lanturn:
    {
        id: 171,
        uid: 242,
        name: "Lanturn",
        abilities: ["voltabsorb", "illuminate"],
        types: ["water", "electric"],
        baseStats: {hp: 125, atk: 58, def: 58, spa: 76, spd: 76, spe: 67},
        weightkg: 22.5,
        movepool: ["aquaring", "aquatail", "attract", "blizzard", "bounce", "brine", "bubble", "bubblebeam", "captivate", "charge", "chargebeam", "confuseray", "discharge", "dive", "doubleedge", "doubleteam", "endure", "facade", "flail", "flash", "frustration", "gigaimpact", "hail", "healbell", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "mimic", "naturalgift", "protect", "raindance", "rest", "return", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "spitup", "stockpile", "substitute", "suckerpunch", "supersonic", "surf", "swagger", "swallow", "takedown", "thunder", "thunderbolt", "thunderwave", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Pichu:
    {
        id: 172,
        uid: 243,
        name: "Pichu",
        otherForms: ["pichuspikyeared"],
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60},
        weightkg: 2,
        movepool: ["attract", "bide", "bodyslam", "captivate", "charge", "chargebeam", "charm", "counter", "defensecurl", "doubleedge", "doubleslap", "doubleteam", "encore", "endeavor", "endure", "facade", "fakeout", "flail", "flash", "fling", "followme", "frustration", "grassknot", "headbutt", "helpinghand", "hiddenpower", "irontail", "lightscreen", "magnetrise", "megakick", "megapunch", "mimic", "mudslap", "nastyplot", "naturalgift", "present", "protect", "raindance", "rest", "return", "reversal", "rollout", "secretpower", "seismictoss", "shockwave", "signalbeam", "sleeptalk", "snore", "substitute", "surf", "swagger", "sweetkiss", "swift", "tailwhip", "teeterdance", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "tickle", "toxic", "uproar", "volttackle", "wish"]
    },
    "Pichu-Spiky-eared":
    {
        id: 172,
        uid: 244,
        name: "Pichu-Spiky-eared",
        baseSpecies: "Pichu",
        form: "Spiky-eared",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60},
        weightkg: 2,
        movepool: ["attract", "captivate", "chargebeam", "charm", "doubleteam", "endure", "facade", "flash", "fling", "frustration", "grassknot", "headbutt", "helpinghand", "hiddenpower", "irontail", "lightscreen", "magnetrise", "mudslap", "nastyplot", "naturalgift", "painsplit", "protect", "raindance", "rest", "return", "rollout", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "substitute", "swagger", "sweetkiss", "swift", "tailwhip", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "uproar", "volttackle", "bide", "bodyslam", "charge", "counter", "defensecurl", "doubleedge", "doubleslap", "encore", "endeavor", "fakeout", "flail", "followme", "megakick", "megapunch", "mimic", "present", "reversal", "seismictoss", "surf", "teeterdance", "thunderpunch", "tickle", "wish"]
    },
    Natu:
    {
        id: 177,
        uid: 245,
        name: "Natu",
        abilities: ["synchronize", "earlybird"],
        types: ["psychic", "flying"],
        baseStats: {hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70},
        weightkg: 2,
        movepool: ["aerialace", "aircutter", "attract", "batonpass", "calmmind", "captivate", "confuseray", "doubleedge", "doubleteam", "dreameater", "drillpeck", "endure", "facade", "featherdance", "feintattack", "flash", "frustration", "futuresight", "gigadrain", "grassknot", "guardswap", "haze", "heatwave", "hiddenpower", "leer", "lightscreen", "luckychant", "magiccoat", "mefirst", "mimic", "miracleeye", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "peck", "pluck", "powerswap", "protect", "psychic", "psychoshift", "psychup", "quickattack", "raindance", "reflect", "refresh", "rest", "return", "roost", "secretpower", "shadowball", "signalbeam", "silverwind", "skillswap", "skyattack", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tailwind", "teleport", "thief", "thunderwave", "toxic", "trick", "trickroom", "twister", "uturn", "wish", "zenheadbutt"]
    },
    Xatu:
    {
        id: 178,
        uid: 246,
        name: "Xatu",
        abilities: ["synchronize", "earlybird"],
        types: ["psychic", "flying"],
        baseStats: {hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 95},
        weightkg: 15,
        movepool: ["aerialace", "aircutter", "attract", "calmmind", "captivate", "confuseray", "defog", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "flash", "fly", "frustration", "futuresight", "gigadrain", "gigaimpact", "grassknot", "guardswap", "heatwave", "hiddenpower", "hyperbeam", "leer", "lightscreen", "luckychant", "magiccoat", "mefirst", "mimic", "miracleeye", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "peck", "pluck", "powerswap", "protect", "psychic", "psychoshift", "psychup", "raindance", "reflect", "rest", "return", "roost", "secretpower", "shadowball", "signalbeam", "silverwind", "skillswap", "skyattack", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tailwind", "teleport", "thief", "thunderwave", "toxic", "trick", "trickroom", "twister", "uturn", "wish", "zenheadbutt"]
    },
    Mareep:
    {
        id: 179,
        uid: 247,
        name: "Mareep",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35},
        weightkg: 7.8,
        movepool: ["attract", "bodyslam", "captivate", "charge", "chargebeam", "cottonspore", "defensecurl", "discharge", "doubleedge", "doubleteam", "endure", "facade", "flash", "flatter", "frustration", "growl", "headbutt", "healbell", "hiddenpower", "irontail", "lightscreen", "magnetrise", "mimic", "naturalgift", "odorsleuth", "powergem", "protect", "raindance", "reflect", "rest", "return", "safeguard", "sandattack", "screech", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "substitute", "swagger", "swift", "tackle", "takedown", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic"]
    },
    Flaaffy:
    {
        id: 180,
        uid: 248,
        name: "Flaaffy",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45},
        weightkg: 13.3,
        movepool: ["attract", "bodyslam", "brickbreak", "captivate", "charge", "chargebeam", "cottonspore", "counter", "defensecurl", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "firepunch", "flash", "fling", "focuspunch", "frustration", "growl", "headbutt", "healbell", "hiddenpower", "irontail", "lightscreen", "magnetrise", "megakick", "megapunch", "mimic", "naturalgift", "powergem", "protect", "raindance", "rest", "return", "rocksmash", "secretpower", "seismictoss", "shockwave", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "swagger", "swift", "tackle", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "toxic"]
    },
    Sudowoodo:
    {
        id: 185,
        uid: 249,
        name: "Sudowoodo",
        abilities: ["sturdy", "rockhead"],
        types: ["rock", "???"],
        baseStats: {hp: 70, atk: 100, def: 115, spa: 30, spd: 65, spe: 30},
        weightkg: 38,
        movepool: ["attract", "block", "bodyslam", "brickbreak", "calmmind", "captivate", "copycat", "counter", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "explosion", "facade", "feintattack", "firepunch", "flail", "fling", "focuspunch", "frustration", "hammerarm", "harden", "headbutt", "helpinghand", "hiddenpower", "icepunch", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "psychup", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "roleplay", "rollout", "sandstorm", "sandtomb", "secretpower", "seismictoss", "selfdestruct", "slam", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunderpunch", "torment", "toxic", "woodhammer"]
    },
    Politoed:
    {
        id: 186,
        uid: 250,
        name: "Politoed",
        abilities: ["waterabsorb", "damp"],
        types: ["water", "???"],
        baseStats: {hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70},
        weightkg: 33.9,
        movepool: ["attract", "blizzard", "bodyslam", "bounce", "brickbreak", "bubblebeam", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleslap", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "hail", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "hypervoice", "hypnosis", "icebeam", "icywind", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "payback", "perishsong", "protect", "psychic", "raindance", "rest", "return", "rocksmash", "secretpower", "seismictoss", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "thief", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Hoppip:
    {
        id: 187,
        uid: 251,
        name: "Hoppip",
        abilities: ["chlorophyll", "leafguard"],
        types: ["grass", "flying"],
        baseStats: {hp: 35, atk: 35, def: 40, spa: 35, spd: 55, spe: 50},
        weightkg: 0.5,
        movepool: ["aerialace", "amnesia", "aromatherapy", "attract", "bounce", "bulletseed", "captivate", "confusion", "cottonspore", "defensecurl", "doubleedge", "doubleteam", "encore", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "grassknot", "headbutt", "helpinghand", "hiddenpower", "leechseed", "megadrain", "memento", "mimic", "naturalgift", "poisonpowder", "protect", "psychup", "reflect", "rest", "return", "secretpower", "seedbomb", "silverwind", "sleeppowder", "sleeptalk", "snore", "solarbeam", "splash", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "tackle", "tailwhip", "toxic", "uturn", "worryseed"]
    },
    Skiploom:
    {
        id: 188,
        uid: 252,
        name: "Skiploom",
        abilities: ["chlorophyll", "leafguard"],
        types: ["grass", "flying"],
        baseStats: {hp: 55, atk: 45, def: 50, spa: 45, spd: 65, spe: 80},
        weightkg: 1,
        movepool: ["aerialace", "attract", "bounce", "bulletseed", "captivate", "cottonspore", "defensecurl", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "grassknot", "headbutt", "helpinghand", "hiddenpower", "leechseed", "megadrain", "memento", "mimic", "naturalgift", "poisonpowder", "protect", "rest", "return", "secretpower", "seedbomb", "silverwind", "sleeppowder", "sleeptalk", "snore", "solarbeam", "splash", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "tackle", "tailwhip", "toxic", "uturn", "worryseed"]
    },
    Aipom:
    {
        id: 190,
        uid: 253,
        name: "Aipom",
        abilities: ["runaway", "pickup"],
        types: ["normal", "???"],
        baseStats: {hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 85},
        weightkg: 11.5,
        movepool: ["aerialace", "agility", "astonish", "attract", "batonpass", "beatup", "bodyslam", "bounce", "brickbreak", "captivate", "counter", "covet", "cut", "defensecurl", "dig", "doubleedge", "doublehit", "doubleslap", "doubleteam", "dreameater", "dynamicpunch", "endure", "facade", "fakeout", "firepunch", "fling", "focuspunch", "frustration", "furycutter", "furyswipes", "grassknot", "gunkshot", "headbutt", "hiddenpower", "icepunch", "irontail", "knockoff", "lastresort", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "payback", "protect", "pursuit", "raindance", "rest", "return", "rocksmash", "roleplay", "sandattack", "scratch", "screech", "secretpower", "seedbomb", "seismictoss", "shadowball", "shadowclaw", "shockwave", "slam", "sleeptalk", "snatch", "snore", "solarbeam", "spite", "strength", "substitute", "sunnyday", "swagger", "swift", "tailwhip", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "tickle", "toxic", "uproar", "uturn", "waterpulse"]
    },
    Sunkern:
    {
        id: 191,
        uid: 254,
        name: "Sunkern",
        abilities: ["chlorophyll", "solarpower"],
        types: ["grass", "???"],
        baseStats: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30},
        weightkg: 1.8,
        movepool: ["absorb", "attract", "bulletseed", "captivate", "curse", "cut", "doubleedge", "doubleteam", "earthpower", "encore", "endeavor", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "grassknot", "grasswhistle", "growth", "helpinghand", "hiddenpower", "ingrain", "leechseed", "lightscreen", "megadrain", "mimic", "naturalgift", "naturepower", "protect", "razorleaf", "rest", "return", "safeguard", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "toxic", "uproar", "worryseed"]
    },
    Sunflora:
    {
        id: 192,
        uid: 255,
        name: "Sunflora",
        abilities: ["chlorophyll", "solarpower"],
        types: ["grass", "???"],
        baseStats: {hp: 75, atk: 75, def: 55, spa: 105, spd: 85, spe: 30},
        weightkg: 8.5,
        movepool: ["absorb", "attract", "bulletseed", "captivate", "cut", "doubleedge", "doubleteam", "earthpower", "endeavor", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "grasswhistle", "growth", "helpinghand", "hiddenpower", "hyperbeam", "ingrain", "leafstorm", "leechseed", "lightscreen", "megadrain", "mimic", "naturalgift", "petaldance", "pound", "protect", "razorleaf", "rest", "return", "safeguard", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "toxic", "uproar", "worryseed"]
    },
    Yanma:
    {
        id: 193,
        uid: 256,
        name: "Yanma",
        abilities: ["speedboost", "compoundeyes"],
        types: ["bug", "flying"],
        baseStats: {hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95},
        weightkg: 38,
        movepool: ["aerialace", "aircutter", "airslash", "ancientpower", "attract", "bugbite", "bugbuzz", "captivate", "defog", "detect", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "feint", "feintattack", "flash", "foresight", "frustration", "gigadrain", "headbutt", "hiddenpower", "hypnosis", "leechlife", "mimic", "naturalgift", "ominouswind", "protect", "psychic", "pursuit", "quickattack", "rest", "return", "reversal", "roost", "screech", "secretpower", "shadowball", "signalbeam", "silverwind", "sleeptalk", "snore", "solarbeam", "sonicboom", "steelwing", "stringshot", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "tailwind", "thief", "toxic", "uproar", "uturn", "whirlwind", "wingattack"]
    },
    Wooper:
    {
        id: 194,
        uid: 257,
        name: "Wooper",
        abilities: ["damp", "waterabsorb"],
        types: ["water", "ground"],
        baseStats: {hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15},
        weightkg: 8.5,
        movepool: ["amnesia", "ancientpower", "aquatail", "attract", "blizzard", "bodyslam", "captivate", "counter", "curse", "defensecurl", "dig", "dive", "doubleedge", "doublekick", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "encore", "endure", "facade", "flash", "frustration", "hail", "haze", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "irontail", "mimic", "mist", "mudbomb", "muddywater", "mudshot", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "recover", "rest", "return", "rocksmash", "rollout", "safeguard", "sandstorm", "secretpower", "slam", "sleeptalk", "sludgebomb", "snore", "spitup", "stockpile", "substitute", "surf", "swagger", "swallow", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "yawn"]
    },
    Quagsire:
    {
        id: 195,
        uid: 258,
        name: "Quagsire",
        abilities: ["damp", "waterabsorb"],
        types: ["water", "ground"],
        baseStats: {hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35},
        weightkg: 75,
        movepool: ["amnesia", "ancientpower", "aquatail", "attract", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "facade", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "hail", "haze", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "megakick", "megapunch", "mimic", "mist", "mudbomb", "muddywater", "mudshot", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "seismictoss", "slam", "sleeptalk", "sludgebomb", "snore", "stoneedge", "strength", "substitute", "surf", "swagger", "tailwhip", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "yawn"]
    },
    Espeon:
    {
        id: 196,
        uid: 259,
        name: "Espeon",
        abilities: ["synchronize"],
        types: ["psychic", "???"],
        baseStats: {hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110},
        weightkg: 26.5,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "confusion", "cut", "dig", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "futuresight", "gigaimpact", "grassknot", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "lastresort", "lightscreen", "magiccoat", "mimic", "morningsun", "mudslap", "naturalgift", "nightmare", "powerswap", "protect", "psybeam", "psychic", "psychup", "quickattack", "raindance", "reflect", "rest", "return", "sandattack", "secretpower", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Umbreon:
    {
        id: 197,
        uid: 260,
        name: "Umbreon",
        abilities: ["synchronize"],
        types: ["dark", "???"],
        baseStats: {hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65},
        weightkg: 27,
        movepool: ["assurance", "attract", "bodyslam", "captivate", "confuseray", "cut", "darkpulse", "dig", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "feintattack", "flash", "frustration", "gigaimpact", "guardswap", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "lastresort", "meanlook", "mimic", "moonlight", "mudslap", "naturalgift", "nightmare", "payback", "protect", "psychic", "psychup", "pursuit", "quickattack", "raindance", "rest", "return", "sandattack", "screech", "secretpower", "shadowball", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "taunt", "torment", "toxic"]
    },
    Murkrow:
    {
        id: 198,
        uid: 261,
        name: "Murkrow",
        abilities: ["insomnia", "superluck"],
        types: ["dark", "flying"],
        baseStats: {hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91},
        weightkg: 2.1,
        movepool: ["aerialace", "aircutter", "assurance", "astonish", "attract", "bravebird", "calmmind", "captivate", "confuseray", "darkpulse", "defog", "doubleedge", "doubleteam", "dreameater", "drillpeck", "embargo", "endure", "facade", "featherdance", "feintattack", "fly", "frustration", "haze", "heatwave", "hiddenpower", "icywind", "meanlook", "mimic", "mirrormove", "mudslap", "naturalgift", "nightmare", "nightshade", "ominouswind", "payback", "peck", "perishsong", "pluck", "protect", "psychic", "psychoshift", "psychup", "pursuit", "raindance", "rest", "return", "roost", "screech", "secretpower", "shadowball", "skyattack", "sleeptalk", "snatch", "snore", "spite", "steelwing", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tailwind", "taunt", "thief", "thunderwave", "torment", "toxic", "twister", "uproar", "whirlwind", "wingattack"]
    },
    Slowking:
    {
        id: 199,
        uid: 262,
        name: "Slowking",
        abilities: ["oblivious", "owntempo"],
        types: ["water", "psychic"],
        baseStats: {hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30},
        weightkg: 79.5,
        movepool: ["aquatail", "attract", "avalanche", "blizzard", "block", "bodyslam", "brickbreak", "brine", "calmmind", "captivate", "confusion", "counter", "curse", "dig", "disable", "dive", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "flamethrower", "flash", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "irontail", "lightscreen", "magiccoat", "megakick", "megapunch", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "powergem", "protect", "psychic", "psychup", "raindance", "recycle", "rest", "return", "rocksmash", "safeguard", "secretpower", "seismictoss", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "tackle", "thunderwave", "toxic", "trick", "trickroom", "trumpcard", "watergun", "waterpulse", "whirlpool", "yawn", "zenheadbutt"]
    },
    Misdreavus:
    {
        id: 200,
        uid: 263,
        name: "Misdreavus",
        abilities: ["levitate"],
        types: ["ghost", "???"],
        baseStats: {hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85},
        weightkg: 1,
        movepool: ["aerialace", "astonish", "attract", "calmmind", "captivate", "chargebeam", "confuseray", "curse", "darkpulse", "defensecurl", "destinybond", "doubleedge", "doubleteam", "dreameater", "embargo", "endure", "facade", "flash", "frustration", "growl", "grudge", "headbutt", "healbell", "hiddenpower", "icywind", "imprison", "magiccoat", "meanlook", "memento", "mimic", "nastyplot", "naturalgift", "nightmare", "ominouswind", "painsplit", "payback", "perishsong", "powergem", "protect", "psybeam", "psychic", "psychup", "psywave", "raindance", "rest", "return", "screech", "secretpower", "shadowball", "shadowsneak", "shockwave", "skillswap", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "trick", "trickroom", "uproar", "willowisp"]
    },
    Unown:
    {
        id: 201,
        uid: 264,
        name: "Unown",
        baseForm: "A",
        abilities: ["levitate"],
        types: ["psychic", "???"],
        baseStats: {hp: 48, atk: 72, def: 48, spa: 72, spd: 48, spe: 48},
        weightkg: 5,
        movepool: ["hiddenpower"]
    },
    Wobbuffet:
    {
        id: 202,
        uid: 265,
        name: "Wobbuffet",
        abilities: ["shadowtag"],
        types: ["psychic", "???"],
        baseStats: {hp: 190, atk: 33, def: 58, spa: 33, spd: 58, spe: 33},
        weightkg: 28.5,
        movepool: ["counter", "destinybond", "mirrorcoat", "safeguard"]
    },
    Girafarig:
    {
        id: 203,
        uid: 266,
        name: "Girafarig",
        abilities: ["innerfocus", "earlybird"],
        types: ["normal", "psychic"],
        baseStats: {hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85},
        weightkg: 41.5,
        movepool: ["agility", "amnesia", "assurance", "astonish", "attract", "batonpass", "beatup", "bodyslam", "calmmind", "captivate", "chargebeam", "confusion", "crunch", "doubleedge", "doublehit", "doublekick", "doubleteam", "dreameater", "earthquake", "endure", "energyball", "facade", "flash", "foresight", "frustration", "futuresight", "grassknot", "gravity", "growl", "guardswap", "headbutt", "hiddenpower", "irontail", "lightscreen", "magiccoat", "mimic", "mirrorcoat", "mudslap", "naturalgift", "nightmare", "odorsleuth", "powerswap", "protect", "psybeam", "psychic", "psychup", "raindance", "razorwind", "recycle", "reflect", "rest", "return", "rocksmash", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snore", "stomp", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tackle", "takedown", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "uproar", "wish", "zenheadbutt"]
    },
    Pineco:
    {
        id: 204,
        uid: 267,
        name: "Pineco",
        abilities: ["sturdy"],
        types: ["bug", "???"],
        baseStats: {hp: 50, atk: 65, def: 90, spa: 35, spd: 35, spe: 15},
        weightkg: 7.2,
        movepool: ["attract", "bide", "bodyslam", "bugbite", "captivate", "counter", "defensecurl", "dig", "doubleedge", "doubleteam", "earthquake", "endure", "explosion", "facade", "flail", "frustration", "gigadrain", "gravity", "gyroball", "headbutt", "hiddenpower", "irondefense", "lightscreen", "mimic", "naturalgift", "painsplit", "payback", "pinmissile", "powertrick", "protect", "rapidspin", "reflect", "refresh", "rest", "return", "revenge", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "sandtomb", "secretpower", "selfdestruct", "sleeptalk", "snore", "solarbeam", "spikes", "stealthrock", "strength", "stringshot", "substitute", "sunnyday", "swagger", "swift", "tackle", "takedown", "toxic", "toxicspikes"]
    },
    Forretress:
    {
        id: 205,
        uid: 268,
        name: "Forretress",
        abilities: ["sturdy"],
        types: ["bug", "steel"],
        baseStats: {hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40},
        weightkg: 125.8,
        movepool: ["attract", "bide", "block", "bodyslam", "bugbite", "captivate", "counter", "defensecurl", "dig", "doubleedge", "doubleteam", "earthquake", "endure", "explosion", "facade", "flashcannon", "frustration", "gigadrain", "gigaimpact", "gravity", "gyroball", "headbutt", "hiddenpower", "hyperbeam", "irondefense", "lightscreen", "magnetrise", "mimic", "mirrorshot", "naturalgift", "painsplit", "payback", "protect", "rapidspin", "reflect", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "selfdestruct", "signalbeam", "sleeptalk", "snore", "solarbeam", "spikes", "stealthrock", "strength", "stringshot", "substitute", "sunnyday", "swagger", "tackle", "takedown", "toxic", "toxicspikes", "zapcannon"]
    },
    Dunsparce:
    {
        id: 206,
        uid: 269,
        name: "Dunsparce",
        abilities: ["serenegrace", "runaway"],
        types: ["normal", "???"],
        baseStats: {hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45},
        weightkg: 14,
        movepool: ["agility", "ancientpower", "aquatail", "astonish", "attract", "bide", "bite", "blizzard", "bodyslam", "calmmind", "captivate", "chargebeam", "counter", "curse", "defensecurl", "dig", "doubleedge", "doubleteam", "dreameater", "earthquake", "endeavor", "endure", "facade", "fireblast", "flail", "flamethrower", "frustration", "glare", "gyroball", "headbutt", "hiddenpower", "icebeam", "irontail", "lastresort", "magiccoat", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "poisonjab", "protect", "psychup", "pursuit", "rage", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "roost", "screech", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "spite", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "takedown", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "trumpcard", "waterpulse", "yawn", "zenheadbutt"]
    },
    Gligar:
    {
        id: 207,
        uid: 270,
        name: "Gligar",
        abilities: ["hypercutter", "sandveil"],
        types: ["ground", "flying"],
        baseStats: {hp: 65, atk: 75, def: 105, spa: 35, spd: 65, spe: 85},
        weightkg: 64.8,
        movepool: ["aerialace", "agility", "aquatail", "attract", "batonpass", "brickbreak", "captivate", "counter", "crosspoison", "cut", "darkpulse", "defog", "dig", "doubleedge", "doubleteam", "dreameater", "earthpower", "earthquake", "endure", "facade", "falseswipe", "feint", "feintattack", "fling", "frustration", "furycutter", "guillotine", "harden", "headbutt", "hiddenpower", "irontail", "knockoff", "metalclaw", "mimic", "naturalgift", "nightslash", "payback", "poisonjab", "poisonsting", "powertrick", "protect", "quickattack", "raindance", "razorwind", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "roost", "sandattack", "sandstorm", "sandtomb", "screech", "secretpower", "slash", "sleeptalk", "sludgebomb", "snore", "stealthrock", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "tailwind", "taunt", "thief", "torment", "toxic", "uturn", "wingattack", "xscissor"]
    },
    Steelix:
    {
        id: 208,
        uid: 271,
        name: "Steelix",
        abilities: ["rockhead", "sturdy"],
        types: ["steel", "ground"],
        baseStats: {hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30},
        weightkg: 400,
        movepool: ["ancientpower", "aquatail", "attract", "bind", "block", "bodyslam", "captivate", "crunch", "curse", "cut", "darkpulse", "defensecurl", "dig", "doubleedge", "doubleteam", "dragonbreath", "dragonpulse", "earthpower", "earthquake", "endure", "explosion", "facade", "firefang", "flashcannon", "frustration", "gigaimpact", "gyroball", "harden", "headbutt", "hiddenpower", "hyperbeam", "icefang", "ironhead", "irontail", "magnetrise", "mimic", "mudslap", "mudsport", "naturalgift", "payback", "protect", "psychup", "rage", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "sandstorm", "screech", "secretpower", "selfdestruct", "slam", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "tackle", "taunt", "thunderfang", "torment", "toxic", "twister"]
    },
    Scizor:
    {
        id: 212,
        uid: 272,
        name: "Scizor",
        abilities: ["swarm", "technician"],
        types: ["bug", "steel"],
        baseStats: {hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65},
        weightkg: 118,
        movepool: ["aerialace", "agility", "attract", "brickbreak", "bugbite", "bulletpunch", "captivate", "counter", "cut", "defog", "doubleedge", "doublehit", "doubleteam", "endure", "facade", "falseswipe", "feint", "flashcannon", "fling", "focusenergy", "frustration", "furycutter", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "irondefense", "ironhead", "knockoff", "leer", "metalclaw", "mimic", "naturalgift", "nightslash", "ominouswind", "protect", "pursuit", "quickattack", "raindance", "razorwind", "rest", "return", "rocksmash", "roost", "sandstorm", "secretpower", "silverwind", "slash", "sleeptalk", "snore", "steelwing", "strength", "substitute", "sunnyday", "superpower", "swagger", "swift", "swordsdance", "tailwind", "thief", "toxic", "uturn", "xscissor"]
    },
    Shuckle:
    {
        id: 213,
        uid: 273,
        name: "Shuckle",
        abilities: ["sturdy", "gluttony"],
        types: ["bug", "rock"],
        baseStats: {hp: 20, atk: 10, def: 230, spa: 10, spd: 230, spe: 5},
        weightkg: 20.5,
        movepool: ["acupressure", "ancientpower", "attract", "bide", "bodyslam", "bugbite", "captivate", "constrict", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "encore", "endure", "facade", "flash", "frustration", "gastroacid", "gyroball", "headbutt", "helpinghand", "hiddenpower", "knockoff", "mimic", "mudslap", "naturalgift", "powertrick", "protect", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandstorm", "sandtomb", "secretpower", "sleeptalk", "sludgebomb", "snore", "stealthrock", "stoneedge", "strength", "stringshot", "substitute", "sunnyday", "swagger", "sweetscent", "toxic", "withdraw", "wrap"]
    },
    Heracross:
    {
        id: 214,
        uid: 274,
        name: "Heracross",
        abilities: ["swarm", "guts"],
        types: ["bug", "fighting"],
        baseStats: {hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85},
        weightkg: 54,
        movepool: ["aerialace", "attract", "bide", "bodyslam", "brickbreak", "bugbite", "bulkup", "captivate", "closecombat", "counter", "cut", "dig", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "falseswipe", "feint", "flail", "fling", "focusblast", "focuspunch", "frustration", "furyattack", "furycutter", "gigaimpact", "harden", "headbutt", "helpinghand", "hiddenpower", "hornattack", "hyperbeam", "irondefense", "knockoff", "leer", "lowkick", "megahorn", "mimic", "naturalgift", "nightslash", "protect", "pursuit", "raindance", "rest", "return", "revenge", "reversal", "rockslide", "rocksmash", "rocktomb", "secretpower", "seismictoss", "shadowclaw", "sleeptalk", "snore", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swordsdance", "tackle", "takedown", "thief", "toxic", "vacuumwave"]
    },
    Sneasel:
    {
        id: 215,
        uid: 275,
        name: "Sneasel",
        abilities: ["innerfocus", "keeneye"],
        types: ["dark", "ice"],
        baseStats: {hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115},
        weightkg: 28,
        movepool: ["aerialace", "agility", "assist", "attract", "avalanche", "beatup", "bite", "blizzard", "brickbreak", "calmmind", "captivate", "counter", "crushclaw", "cut", "darkpulse", "defensecurl", "dig", "doubleedge", "doublehit", "doubleteam", "dreameater", "dynamicpunch", "embargo", "endure", "facade", "fakeout", "falseswipe", "feintattack", "fling", "focuspunch", "foresight", "frustration", "furycutter", "furyswipes", "hail", "headbutt", "hiddenpower", "icebeam", "icepunch", "iceshard", "icywind", "irontail", "knockoff", "leer", "lowkick", "metalclaw", "mimic", "mudslap", "naturalgift", "nightmare", "payback", "poisonjab", "protect", "psychup", "punishment", "pursuit", "quickattack", "raindance", "reflect", "rest", "return", "rocksmash", "scratch", "screech", "secretpower", "shadowball", "shadowclaw", "slash", "sleeptalk", "snatch", "snore", "spite", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "taunt", "thief", "torment", "toxic", "whirlpool", "xscissor"]
    },
    Teddiursa:
    {
        id: 216,
        uid: 276,
        name: "Teddiursa",
        abilities: ["pickup", "quickfeet"],
        types: ["normal", "???"],
        baseStats: {hp: 60, atk: 80, def: 50, spa: 50, spd: 50, spe: 40},
        weightkg: 8.8,
        movepool: ["aerialace", "attract", "bellydrum", "bodyslam", "brickbreak", "bulkup", "captivate", "charm", "closecombat", "counter", "covet", "crosschop", "crunch", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "faketears", "feintattack", "firepunch", "fling", "focuspunch", "frustration", "furycutter", "furyswipes", "gunkshot", "headbutt", "hiddenpower", "icepunch", "lastresort", "leer", "lick", "megakick", "megapunch", "metalclaw", "metronome", "mimic", "mudslap", "naturalgift", "nightslash", "payback", "protect", "raindance", "refresh", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "rollout", "scratch", "secretpower", "seedbomb", "seismictoss", "shadowclaw", "slash", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "superpower", "swagger", "sweetscent", "swift", "swordsdance", "takedown", "taunt", "thief", "thrash", "thunderpunch", "torment", "toxic", "yawn"]
    },
    Ursaring:
    {
        id: 217,
        uid: 277,
        name: "Ursaring",
        abilities: ["guts", "quickfeet"],
        types: ["normal", "???"],
        baseStats: {hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55},
        weightkg: 125.8,
        movepool: ["aerialace", "attract", "avalanche", "bodyslam", "brickbreak", "bulkup", "captivate", "counter", "covet", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "faketears", "feintattack", "firepunch", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "furyswipes", "gigaimpact", "gunkshot", "hammerarm", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "lastresort", "leer", "lick", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "payback", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "scaryface", "scratch", "secretpower", "seedbomb", "seismictoss", "shadowclaw", "slash", "sleeptalk", "snore", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "sweetscent", "swift", "swordsdance", "taunt", "thief", "thrash", "thunderpunch", "torment", "toxic", "uproar"]
    },
    Slugma:
    {
        id: 218,
        uid: 278,
        name: "Slugma",
        abilities: ["magmaarmor", "flamebody"],
        types: ["fire", "???"],
        baseStats: {hp: 40, atk: 40, def: 40, spa: 70, spd: 40, spe: 20},
        weightkg: 35,
        movepool: ["acidarmor", "amnesia", "ancientpower", "attract", "bodyslam", "captivate", "curse", "defensecurl", "doubleedge", "doubleteam", "earthpower", "ember", "endure", "facade", "fireblast", "flamethrower", "frustration", "harden", "heatwave", "hiddenpower", "irondefense", "lavaplume", "lightscreen", "memento", "mimic", "mudslap", "naturalgift", "overheat", "painsplit", "protect", "recover", "reflect", "rest", "return", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "secretpower", "selfdestruct", "sleeptalk", "smog", "smokescreen", "snore", "spitup", "stockpile", "substitute", "sunnyday", "swagger", "swallow", "toxic", "willowisp", "yawn"]
    },
    Swinub:
    {
        id: 220,
        uid: 279,
        name: "Swinub",
        abilities: ["oblivious", "snowcloak"],
        types: ["ice", "ground"],
        baseStats: {hp: 50, atk: 50, def: 40, spa: 30, spd: 30, spe: 50},
        weightkg: 6.5,
        movepool: ["amnesia", "ancientpower", "attract", "bite", "blizzard", "bodyslam", "captivate", "charm", "curse", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endeavor", "endure", "facade", "fissure", "frustration", "hail", "headbutt", "hiddenpower", "icebeam", "iceshard", "iciclespear", "icywind", "lightscreen", "mimic", "mist", "mudbomb", "mudshot", "mudslap", "mudsport", "naturalgift", "odorsleuth", "powdersnow", "protect", "raindance", "reflect", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "superpower", "swagger", "tackle", "takedown", "toxic"]
    },
    Piloswine:
    {
        id: 221,
        uid: 280,
        name: "Piloswine",
        abilities: ["oblivious", "snowcloak"],
        types: ["ice", "ground"],
        baseStats: {hp: 100, atk: 100, def: 80, spa: 60, spd: 60, spe: 50},
        weightkg: 55.8,
        movepool: ["amnesia", "ancientpower", "attract", "avalanche", "blizzard", "bodyslam", "captivate", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endeavor", "endure", "facade", "frustration", "furyattack", "gigaimpact", "hail", "headbutt", "hiddenpower", "hornattack", "hyperbeam", "icebeam", "icefang", "icywind", "lightscreen", "mimic", "mist", "mudbomb", "mudslap", "mudsport", "naturalgift", "odorsleuth", "peck", "powdersnow", "protect", "raindance", "reflect", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "superpower", "swagger", "takedown", "toxic"]
    },
    Remoraid:
    {
        id: 223,
        uid: 281,
        name: "Remoraid",
        abilities: ["hustle", "sniper"],
        types: ["water", "???"],
        baseStats: {hp: 35, atk: 65, def: 35, spa: 65, spd: 35, spe: 65},
        weightkg: 12,
        movepool: ["attract", "aurorabeam", "blizzard", "bounce", "brine", "bubblebeam", "bulletseed", "captivate", "chargebeam", "defensecurl", "dive", "doubleedge", "doubleteam", "endure", "facade", "fireblast", "flail", "flamethrower", "focusenergy", "frustration", "gunkshot", "haze", "hiddenpower", "hyperbeam", "icebeam", "icywind", "lockon", "mimic", "mudslap", "naturalgift", "octazooka", "protect", "psybeam", "psychic", "raindance", "rest", "return", "rockblast", "screech", "secretpower", "seedbomb", "signalbeam", "sleeptalk", "snore", "stringshot", "substitute", "sunnyday", "supersonic", "surf", "swagger", "swift", "thief", "thunderwave", "toxic", "waterfall", "watergun", "waterpulse", "waterspout", "whirlpool"]
    },
    Octillery:
    {
        id: 224,
        uid: 282,
        name: "Octillery",
        abilities: ["suctioncups", "sniper"],
        types: ["water", "???"],
        baseStats: {hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 45},
        weightkg: 28.5,
        movepool: ["attract", "aurorabeam", "blizzard", "bounce", "brine", "bubblebeam", "bulletseed", "captivate", "chargebeam", "constrict", "defensecurl", "dive", "doubleedge", "doubleteam", "endure", "energyball", "facade", "fireblast", "flamethrower", "flashcannon", "focusenergy", "frustration", "gigaimpact", "gunkshot", "hiddenpower", "hyperbeam", "icebeam", "icywind", "mimic", "mudslap", "naturalgift", "octazooka", "payback", "protect", "psybeam", "psychic", "raindance", "rest", "return", "rockblast", "secretpower", "seedbomb", "seismictoss", "signalbeam", "sleeptalk", "sludgebomb", "snore", "stringshot", "substitute", "sunnyday", "surf", "swagger", "swift", "thief", "thunderwave", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "wringout"]
    },
    Delibird:
    {
        id: 225,
        uid: 283,
        name: "Delibird",
        abilities: ["vitalspirit", "hustle"],
        types: ["ice", "flying"],
        baseStats: {hp: 45, atk: 55, def: 45, spa: 65, spd: 45, spe: 75},
        weightkg: 16,
        movepool: ["aerialace", "attract", "aurorabeam", "avalanche", "blizzard", "bodyslam", "bounce", "brickbreak", "captivate", "counter", "defog", "doubleedge", "doubleteam", "endure", "facade", "fakeout", "fling", "fly", "focuspunch", "frustration", "futuresight", "gunkshot", "hail", "headbutt", "hiddenpower", "iceball", "icebeam", "icepunch", "iceshard", "icywind", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "pluck", "present", "protect", "quickattack", "raindance", "rapidspin", "recycle", "rest", "return", "rollout", "secretpower", "seedbomb", "seismictoss", "signalbeam", "skyattack", "sleeptalk", "snore", "splash", "substitute", "swagger", "swift", "thief", "toxic", "waterpulse"]
    },
    Skarmory:
    {
        id: 227,
        uid: 284,
        name: "Skarmory",
        abilities: ["keeneye", "sturdy"],
        types: ["steel", "flying"],
        baseStats: {hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70},
        weightkg: 50.5,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "assurance", "attract", "bravebird", "captivate", "counter", "curse", "cut", "darkpulse", "defog", "doubleedge", "doubleteam", "drillpeck", "endure", "facade", "feint", "flash", "flashcannon", "fly", "frustration", "furyattack", "furycutter", "guardswap", "hiddenpower", "icywind", "irondefense", "leer", "metalsound", "mimic", "mudslap", "naturalgift", "nightslash", "ominouswind", "payback", "peck", "pluck", "protect", "pursuit", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "roost", "sandattack", "sandstorm", "secretpower", "skyattack", "slash", "sleeptalk", "snore", "spikes", "stealthrock", "steelwing", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "tailwind", "taunt", "thief", "torment", "toxic", "twister", "whirlwind", "xscissor"]
    },
    Houndour:
    {
        id: 228,
        uid: 285,
        name: "Houndour",
        abilities: ["earlybird", "flashfire"],
        types: ["dark", "fire"],
        baseStats: {hp: 45, atk: 60, def: 30, spa: 80, spd: 50, spe: 65},
        weightkg: 10.8,
        movepool: ["attract", "beatup", "bite", "bodyslam", "captivate", "charm", "counter", "crunch", "darkpulse", "doubleedge", "doubleteam", "dreameater", "embargo", "ember", "endure", "facade", "feint", "feintattack", "fireblast", "firefang", "firespin", "flamethrower", "frustration", "headbutt", "heatwave", "hiddenpower", "howl", "irontail", "leer", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "odorsleuth", "overheat", "payback", "protect", "punishment", "pursuit", "rage", "rest", "return", "reversal", "roar", "rocksmash", "roleplay", "secretpower", "shadowball", "sleeptalk", "sludgebomb", "smog", "snatch", "snore", "solarbeam", "spite", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "swift", "taunt", "thief", "thunderfang", "torment", "toxic", "uproar", "willowisp"]
    },
    Houndoom:
    {
        id: 229,
        uid: 286,
        name: "Houndoom",
        abilities: ["earlybird", "flashfire"],
        types: ["dark", "fire"],
        baseStats: {hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95},
        weightkg: 35,
        movepool: ["attract", "beatup", "bite", "bodyslam", "captivate", "counter", "crunch", "darkpulse", "doubleedge", "doubleteam", "dreameater", "embargo", "ember", "endure", "facade", "feintattack", "fireblast", "firefang", "flamethrower", "frustration", "gigaimpact", "headbutt", "heatwave", "hiddenpower", "howl", "hyperbeam", "irontail", "leer", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "odorsleuth", "overheat", "payback", "protect", "rest", "return", "roar", "rocksmash", "roleplay", "secretpower", "shadowball", "sleeptalk", "sludgebomb", "smog", "snatch", "snore", "solarbeam", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "swift", "taunt", "thief", "thunderfang", "torment", "toxic", "uproar", "willowisp"]
    },
    Kingdra:
    {
        id: 230,
        uid: 287,
        name: "Kingdra",
        abilities: ["swiftswim", "sniper"],
        types: ["water", "dragon"],
        baseStats: {hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85},
        weightkg: 152,
        movepool: ["agility", "attract", "blizzard", "bodyslam", "bounce", "brine", "bubble", "bubblebeam", "captivate", "dive", "doubleedge", "doubleteam", "dracometeor", "dragondance", "dragonpulse", "endure", "facade", "flashcannon", "focusenergy", "frustration", "gigaimpact", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "ironhead", "leer", "mimic", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "secretpower", "signalbeam", "sleeptalk", "smokescreen", "snore", "substitute", "surf", "swagger", "swift", "toxic", "twister", "waterfall", "watergun", "waterpulse", "whirlpool", "yawn"]
    },
    Phanpy:
    {
        id: 231,
        uid: 288,
        name: "Phanpy",
        abilities: ["pickup"],
        types: ["ground", "???"],
        baseStats: {hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40},
        weightkg: 33.5,
        movepool: ["ancientpower", "attract", "bodyslam", "captivate", "charm", "counter", "defensecurl", "doubleedge", "doubleteam", "earthpower", "earthquake", "endeavor", "endure", "facade", "fissure", "flail", "focusenergy", "frustration", "growl", "gunkshot", "headbutt", "headsmash", "hiddenpower", "iceshard", "irontail", "knockoff", "lastresort", "mimic", "mudslap", "naturalgift", "odorsleuth", "protect", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "seedbomb", "slam", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "sunnyday", "superpower", "swagger", "tackle", "takedown", "toxic"]
    },
    Donphan:
    {
        id: 232,
        uid: 289,
        name: "Donphan",
        abilities: ["sturdy"],
        types: ["ground", "???"],
        baseStats: {hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50},
        weightkg: 120,
        movepool: ["ancientpower", "assurance", "attract", "block", "bodyslam", "bounce", "captivate", "counter", "defensecurl", "doubleedge", "doubleteam", "earthpower", "earthquake", "endeavor", "endure", "facade", "firefang", "flail", "frustration", "furyattack", "gigaimpact", "growl", "gunkshot", "gyroball", "headbutt", "hiddenpower", "hornattack", "hyperbeam", "irondefense", "irontail", "knockoff", "magnitude", "mimic", "mudslap", "naturalgift", "odorsleuth", "poisonjab", "protect", "rapidspin", "rest", "return", "roar", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "scaryface", "secretpower", "seedbomb", "slam", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "thunderfang", "toxic"]
    },
    Porygon2:
    {
        id: 233,
        uid: 290,
        name: "Porygon2",
        abilities: ["trace", "download"],
        types: ["normal", "???"],
        baseStats: {hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60},
        weightkg: 32.5,
        movepool: ["aerialace", "agility", "blizzard", "chargebeam", "conversion2", "conversion", "defensecurl", "discharge", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "gigaimpact", "gravity", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "lastresort", "lockon", "magiccoat", "magnetrise", "mimic", "naturalgift", "nightmare", "painsplit", "protect", "psybeam", "psychic", "psychup", "raindance", "recover", "recycle", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "tackle", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "triattack", "trick", "trickroom", "zapcannon", "zenheadbutt"]
    },
    Stantler:
    {
        id: 234,
        uid: 291,
        name: "Stantler",
        abilities: ["intimidate", "frisk"],
        types: ["normal", "???"],
        baseStats: {hp: 73, atk: 95, def: 62, spa: 85, spd: 65, spe: 85},
        weightkg: 71.2,
        movepool: ["astonish", "attract", "bite", "bodyslam", "bounce", "calmmind", "captivate", "chargebeam", "confuseray", "disable", "doubleedge", "doublekick", "doubleteam", "dreameater", "earthquake", "endure", "energyball", "extrasensory", "facade", "flash", "frustration", "gigaimpact", "gravity", "headbutt", "hiddenpower", "hypnosis", "imprison", "irontail", "lastresort", "leer", "lightscreen", "mefirst", "megahorn", "mimic", "mudslap", "naturalgift", "nightmare", "protect", "psychic", "psychup", "raindance", "reflect", "rest", "return", "roar", "roleplay", "sandattack", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "spite", "stomp", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tackle", "takedown", "thief", "thrash", "thunder", "thunderbolt", "thunderwave", "toxic", "trickroom", "uproar", "zenheadbutt"]
    },
    Smeargle:
    {
        id: 235,
        uid: 292,
        name: "Smeargle",
        abilities: ["owntempo", "technician"],
        types: ["normal", "???"],
        baseStats: {hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75},
        weightkg: 58,
        movepool: ["sketch"]
    },
    Tyrogue:
    {
        id: 236,
        uid: 293,
        name: "Tyrogue",
        abilities: ["guts", "steadfast"],
        types: ["fighting", "???"],
        baseStats: {hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35},
        weightkg: 21,
        movepool: ["attract", "bodyslam", "brickbreak", "bulkup", "bulletpunch", "captivate", "counter", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "fakeout", "foresight", "frustration", "headbutt", "helpinghand", "hiddenpower", "highjumpkick", "lowkick", "machpunch", "megakick", "mimic", "mindreader", "mudslap", "naturalgift", "protect", "raindance", "rapidspin", "rest", "return", "rockslide", "rocksmash", "roleplay", "secretpower", "seismictoss", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "thief", "toxic", "uproar", "vacuumwave"]
    },
    Hitmontop:
    {
        id: 237,
        uid: 294,
        name: "Hitmontop",
        abilities: ["intimidate", "technician"],
        types: ["fighting", "???"],
        baseStats: {hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70},
        weightkg: 48,
        movepool: ["aerialace", "agility", "attract", "bodyslam", "brickbreak", "bulkup", "captivate", "closecombat", "counter", "detect", "dig", "doubleedge", "doubleteam", "earthquake", "endeavor", "endure", "facade", "feint", "focusenergy", "frustration", "gyroball", "headbutt", "helpinghand", "hiddenpower", "lowkick", "megakick", "mimic", "mudslap", "naturalgift", "protect", "pursuit", "quickattack", "raindance", "rapidspin", "rest", "return", "revenge", "rockslide", "rocksmash", "roleplay", "rollingkick", "rollout", "sandstorm", "secretpower", "seismictoss", "sleeptalk", "snore", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "thief", "toxic", "triplekick", "twister", "vacuumwave"]
    },
    Smoochum:
    {
        id: 238,
        uid: 295,
        name: "Smoochum",
        abilities: ["oblivious", "forewarn"],
        types: ["ice", "psychic"],
        baseStats: {hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65},
        weightkg: 6,
        movepool: ["attract", "avalanche", "blizzard", "bodyslam", "calmmind", "captivate", "confusion", "copycat", "counter", "doubleedge", "doubleteam", "dreameater", "dynamicpunch", "endure", "facade", "fakeout", "faketears", "flash", "fling", "frustration", "grassknot", "hail", "healbell", "helpinghand", "hiddenpower", "icebeam", "icepunch", "icywind", "lick", "lightscreen", "luckychant", "magiccoat", "meanlook", "meditate", "megakick", "megapunch", "metronome", "mimic", "miracleeye", "mudslap", "nastyplot", "naturalgift", "nightmare", "payback", "perishsong", "pound", "powdersnow", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "secretpower", "seismictoss", "shadowball", "signalbeam", "sing", "skillswap", "sleeptalk", "snore", "substitute", "swagger", "sweetkiss", "thief", "toxic", "trick", "trickroom", "uproar", "waterpulse", "wish", "zenheadbutt"]
    },
    Elekid:
    {
        id: 239,
        uid: 296,
        name: "Elekid",
        abilities: ["static"],
        types: ["electric", "???"],
        baseStats: {hp: 45, atk: 63, def: 37, spa: 65, spd: 55, spe: 95},
        weightkg: 23.5,
        movepool: ["attract", "barrier", "bodyslam", "brickbreak", "captivate", "chargebeam", "counter", "crosschop", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "endure", "facade", "feint", "firepunch", "flash", "fling", "focuspunch", "frustration", "headbutt", "helpinghand", "hiddenpower", "icepunch", "karatechop", "leer", "lightscreen", "lowkick", "magnetrise", "meditate", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "psychic", "quickattack", "raindance", "rest", "return", "rocksmash", "rollingkick", "screech", "secretpower", "seismictoss", "shockwave", "signalbeam", "sleeptalk", "snore", "substitute", "swagger", "swift", "thief", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "toxic", "uproar"]
    },
    Magby:
    {
        id: 240,
        uid: 297,
        name: "Magby",
        abilities: ["flamebody"],
        types: ["fire", "???"],
        baseStats: {hp: 45, atk: 75, def: 37, spa: 70, spd: 55, spe: 83},
        weightkg: 21.4,
        movepool: ["attract", "barrier", "bellydrum", "bodyslam", "brickbreak", "captivate", "confuseray", "counter", "crosschop", "doubleedge", "doubleteam", "dynamicpunch", "ember", "endure", "facade", "feintattack", "fireblast", "firepunch", "firespin", "flamethrower", "flareblitz", "fling", "focuspunch", "frustration", "headbutt", "heatwave", "helpinghand", "hiddenpower", "irontail", "karatechop", "lavaplume", "leer", "machpunch", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "overheat", "protect", "psychic", "rest", "return", "rocksmash", "screech", "secretpower", "seismictoss", "sleeptalk", "smog", "smokescreen", "snore", "substitute", "sunnyday", "swagger", "thief", "thunderpunch", "toxic", "uproar", "willowisp"]
    },
    Miltank:
    {
        id: 241,
        uid: 298,
        name: "Miltank",
        abilities: ["thickfat", "scrappy"],
        types: ["normal", "???"],
        baseStats: {hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100},
        weightkg: 75.5,
        movepool: ["attract", "bide", "blizzard", "block", "bodyslam", "brickbreak", "captivate", "counter", "curse", "defensecurl", "dizzypunch", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "firepunch", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "growl", "gyroball", "hammerarm", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "ironhead", "irontail", "megakick", "megapunch", "metronome", "milkdrink", "mimic", "mudslap", "naturalgift", "present", "protect", "psychup", "punishment", "raindance", "rest", "return", "reversal", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "seismictoss", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "stealthrock", "stomp", "strength", "substitute", "sunnyday", "surf", "swagger", "tackle", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "wakeupslap", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Blissey:
    {
        id: 242,
        uid: 299,
        name: "Blissey",
        abilities: ["naturalcure", "serenegrace"],
        types: ["normal", "???"],
        baseStats: {hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55},
        weightkg: 46.8,
        movepool: ["attract", "avalanche", "blizzard", "block", "bodyslam", "brickbreak", "calmmind", "captivate", "chargebeam", "counter", "defensecurl", "doubleedge", "doubleslap", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "earthquake", "eggbomb", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "growl", "hail", "headbutt", "healbell", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "lastresort", "lightscreen", "megakick", "megapunch", "metronome", "mimic", "minimize", "mudslap", "naturalgift", "pound", "protect", "psychic", "psychup", "raindance", "recycle", "refresh", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shockwave", "sing", "skillswap", "sleeptalk", "snatch", "snore", "softboiled", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "tailwhip", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "waterpulse", "zenheadbutt"]
    },
    Larvitar:
    {
        id: 246,
        uid: 300,
        name: "Larvitar",
        abilities: ["guts"],
        types: ["rock", "ground"],
        baseStats: {hp: 50, atk: 64, def: 50, spa: 45, spd: 50, spe: 41},
        weightkg: 72,
        movepool: ["ancientpower", "assurance", "attract", "bite", "bodyslam", "brickbreak", "captivate", "crunch", "curse", "darkpulse", "dig", "doubleedge", "doubleteam", "dragondance", "earthpower", "earthquake", "endure", "facade", "focusenergy", "frustration", "headbutt", "hiddenpower", "hyperbeam", "irondefense", "ironhead", "leer", "mimic", "mudslap", "naturalgift", "outrage", "payback", "protect", "pursuit", "raindance", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "screech", "secretpower", "sleeptalk", "snore", "spite", "stealthrock", "stomp", "stoneedge", "substitute", "sunnyday", "superpower", "swagger", "taunt", "thrash", "torment", "toxic", "uproar"]
    },
    Pupitar:
    {
        id: 247,
        uid: 301,
        name: "Pupitar",
        abilities: ["shedskin"],
        types: ["rock", "ground"],
        baseStats: {hp: 70, atk: 84, def: 70, spa: 65, spd: 70, spe: 51},
        weightkg: 152,
        movepool: ["ancientpower", "attract", "bite", "bodyslam", "brickbreak", "captivate", "crunch", "darkpulse", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "frustration", "headbutt", "hiddenpower", "hyperbeam", "irondefense", "ironhead", "leer", "mimic", "mudslap", "naturalgift", "payback", "protect", "raindance", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "screech", "secretpower", "sleeptalk", "snore", "spite", "stealthrock", "stoneedge", "substitute", "sunnyday", "superpower", "swagger", "taunt", "thrash", "torment", "toxic", "uproar"]
    },
    Tyranitar:
    {
        id: 248,
        uid: 302,
        name: "Tyranitar",
        abilities: ["sandstream"],
        types: ["rock", "dark"],
        baseStats: {hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61},
        weightkg: 202,
        movepool: ["aerialace", "ancientpower", "aquatail", "attract", "avalanche", "bite", "blizzard", "block", "bodyslam", "brickbreak", "captivate", "counter", "crunch", "cut", "darkpulse", "dig", "doubleedge", "doubleteam", "dragonclaw", "dragonpulse", "dynamicpunch", "earthpower", "earthquake", "endure", "facade", "fireblast", "firefang", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icefang", "icepunch", "ironhead", "irontail", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "nightmare", "outrage", "payback", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "screech", "secretpower", "seismictoss", "shadowclaw", "shockwave", "sleeptalk", "snore", "spite", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "taunt", "thrash", "thunder", "thunderbolt", "thunderfang", "thunderpunch", "thunderwave", "torment", "toxic", "uproar", "waterpulse", "whirlpool"]
    },
    Lugia:
    {
        id: 249,
        uid: 303,
        name: "Lugia",
        abilities: ["pressure"],
        types: ["psychic", "flying"],
        baseStats: {hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110},
        weightkg: 216,
        movepool: ["aerialace", "aeroblast", "aircutter", "ancientpower", "aquatail", "avalanche", "blizzard", "bodyslam", "brine", "calmmind", "chargebeam", "defog", "dive", "doubleedge", "doubleteam", "dragonpulse", "dragonrush", "dreameater", "earthpower", "earthquake", "endure", "extrasensory", "facade", "featherdance", "flash", "fly", "frustration", "futuresight", "gigadrain", "gigaimpact", "gust", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "ironhead", "irontail", "lightscreen", "mimic", "mudslap", "naturalgift", "nightmare", "ominouswind", "protect", "psychic", "psychoboost", "psychup", "punishment", "raindance", "recover", "reflect", "rest", "return", "roar", "rocksmash", "roost", "safeguard", "sandstorm", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "skyattack", "sleeptalk", "snore", "steelwing", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "twister", "waterfall", "waterpulse", "weatherball", "whirlpool", "whirlwind", "zenheadbutt"]
    },
    "Ho-Oh":
    {
        id: 250,
        uid: 304,
        name: "Ho-Oh",
        abilities: ["pressure"],
        types: ["fire", "flying"],
        baseStats: {hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90},
        weightkg: 199,
        movepool: ["aerialace", "aircutter", "ancientpower", "bravebird", "calmmind", "chargebeam", "defog", "doubleedge", "doubleteam", "dreameater", "earthpower", "earthquake", "endure", "extrasensory", "facade", "fireblast", "flamethrower", "flash", "fly", "frustration", "futuresight", "gigadrain", "gigaimpact", "gust", "heatwave", "hiddenpower", "hyperbeam", "ironhead", "lightscreen", "mimic", "mudslap", "naturalgift", "nightmare", "ominouswind", "overheat", "pluck", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "reflect", "rest", "return", "roar", "rocksmash", "roost", "sacredfire", "safeguard", "sandstorm", "secretpower", "shadowball", "shockwave", "signalbeam", "skyattack", "sleeptalk", "snore", "solarbeam", "steelwing", "strength", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "twister", "weatherball", "whirlwind", "willowisp", "zenheadbutt"]
    },
    Celebi:
    {
        id: 251,
        uid: 305,
        name: "Celebi",
        abilities: ["naturalcure"],
        types: ["psychic", "grass"],
        baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
        weightkg: 5,
        movepool: ["aerialace", "ancientpower", "batonpass", "calmmind", "chargebeam", "confusion", "cut", "defensecurl", "doubleedge", "doubleteam", "dreameater", "earthpower", "endure", "energyball", "facade", "flash", "fling", "frustration", "futuresight", "gigadrain", "gigaimpact", "grassknot", "healbell", "healblock", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "lastresort", "leafstorm", "leechseed", "lightscreen", "magicalleaf", "magiccoat", "metronome", "mimic", "mudslap", "nastyplot", "naturalgift", "nightmare", "perishsong", "protect", "psychic", "psychup", "raindance", "recover", "reflect", "rest", "return", "safeguard", "sandstorm", "secretpower", "seedbomb", "shadowball", "shockwave", "signalbeam", "silverwind", "skillswap", "sleeptalk", "snore", "solarbeam", "stealthrock", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "thunderwave", "toxic", "trick", "trickroom", "uproar", "uturn", "waterpulse", "worryseed", "zenheadbutt"]
    },
    Treecko:
    {
        id: 252,
        uid: 306,
        name: "Treecko",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70},
        weightkg: 5,
        movepool: ["absorb", "aerialace", "agility", "attract", "bodyslam", "brickbreak", "bulletseed", "captivate", "counter", "crunch", "crushclaw", "cut", "detect", "dig", "doubleedge", "doublekick", "doubleteam", "dragonbreath", "drainpunch", "dynamicpunch", "endeavor", "endure", "energyball", "facade", "flash", "fling", "focuspunch", "frustration", "furycutter", "gigadrain", "grassknot", "grasswhistle", "headbutt", "hiddenpower", "irontail", "leafstorm", "leechseed", "leer", "lowkick", "magicalleaf", "megadrain", "megakick", "megapunch", "mimic", "mudslap", "mudsport", "naturalgift", "pound", "protect", "pursuit", "quickattack", "razorwind", "rest", "return", "rockslide", "rocksmash", "rocktomb", "safeguard", "screech", "secretpower", "seedbomb", "seismictoss", "slam", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "thunderpunch", "toxic", "worryseed"]
    },
    Grovyle:
    {
        id: 253,
        uid: 307,
        name: "Grovyle",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 50, atk: 65, def: 45, spa: 85, spd: 65, spe: 95},
        weightkg: 21.6,
        movepool: ["absorb", "aerialace", "agility", "attract", "bodyslam", "brickbreak", "bulletseed", "captivate", "counter", "cut", "detect", "dig", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "endeavor", "endure", "energyball", "facade", "falseswipe", "flash", "fling", "focuspunch", "frustration", "furycutter", "gigadrain", "grassknot", "headbutt", "hiddenpower", "irontail", "leafblade", "leafstorm", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "pound", "protect", "pursuit", "quickattack", "rest", "return", "rockslide", "rocksmash", "rocktomb", "safeguard", "screech", "secretpower", "seedbomb", "seismictoss", "slam", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "thunderpunch", "toxic", "worryseed", "xscissor"]
    },
    Sceptile:
    {
        id: 254,
        uid: 308,
        name: "Sceptile",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120},
        weightkg: 52.2,
        movepool: ["absorb", "aerialace", "agility", "attract", "bodyslam", "brickbreak", "bulletseed", "captivate", "counter", "cut", "detect", "dig", "doubleedge", "doubleteam", "dragonclaw", "dragonpulse", "drainpunch", "dynamicpunch", "earthquake", "endeavor", "endure", "energyball", "facade", "falseswipe", "flash", "fling", "focusblast", "focuspunch", "frenzyplant", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "headbutt", "hiddenpower", "hyperbeam", "irontail", "leafblade", "leafstorm", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "nightslash", "outrage", "pound", "protect", "pursuit", "quickattack", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "screech", "secretpower", "seedbomb", "seismictoss", "slam", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "thunderpunch", "toxic", "worryseed", "xscissor"]
    },
    Torchic:
    {
        id: 255,
        uid: 309,
        name: "Torchic",
        abilities: ["blaze"],
        types: ["fire", "???"],
        baseStats: {hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45},
        weightkg: 2.5,
        movepool: ["aerialace", "agility", "attract", "batonpass", "bodyslam", "bounce", "captivate", "counter", "crushclaw", "cut", "dig", "doubleedge", "doubleteam", "ember", "endure", "facade", "featherdance", "feint", "fireblast", "firespin", "flamethrower", "focusenergy", "frustration", "growl", "headbutt", "heatwave", "helpinghand", "hiddenpower", "lastresort", "megakick", "megapunch", "mimic", "mirrormove", "mudslap", "naturalgift", "nightslash", "overheat", "peck", "protect", "quickattack", "rest", "return", "reversal", "rockslide", "rocksmash", "rocktomb", "sandattack", "scratch", "secretpower", "seismictoss", "shadowclaw", "slash", "sleeptalk", "smellingsalts", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "toxic", "willowisp"]
    },
    Combusken:
    {
        id: 256,
        uid: 310,
        name: "Combusken",
        abilities: ["blaze"],
        types: ["fire", "fighting"],
        baseStats: {hp: 60, atk: 85, def: 60, spa: 85, spd: 60, spe: 55},
        weightkg: 19.5,
        movepool: ["aerialace", "attract", "bodyslam", "bounce", "brickbreak", "bulkup", "captivate", "counter", "cut", "dig", "doubleedge", "doublekick", "doubleteam", "dynamicpunch", "ember", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flareblitz", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "furycutter", "growl", "headbutt", "heatwave", "helpinghand", "hiddenpower", "lastresort", "lowkick", "megakick", "megapunch", "mimic", "mirrormove", "mudslap", "naturalgift", "overheat", "peck", "poisonjab", "protect", "quickattack", "rest", "return", "rockslide", "rocksmash", "rocktomb", "sandattack", "scratch", "secretpower", "seismictoss", "shadowclaw", "skyuppercut", "slash", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thunderpunch", "toxic", "vacuumwave", "willowisp"]
    },
    Blaziken:
    {
        id: 257,
        uid: 311,
        name: "Blaziken",
        abilities: ["blaze"],
        types: ["fire", "fighting"],
        baseStats: {hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80},
        weightkg: 52,
        movepool: ["aerialace", "attract", "blastburn", "blazekick", "bodyslam", "bounce", "bravebird", "brickbreak", "bulkup", "captivate", "counter", "cut", "dig", "doubleedge", "doublekick", "doubleteam", "dynamicpunch", "earthquake", "ember", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flareblitz", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "furycutter", "gigaimpact", "growl", "headbutt", "heatwave", "helpinghand", "hiddenpower", "hyperbeam", "knockoff", "lastresort", "lowkick", "megakick", "megapunch", "mimic", "mirrormove", "mudslap", "naturalgift", "overheat", "peck", "poisonjab", "protect", "quickattack", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "sandattack", "scratch", "secretpower", "seismictoss", "shadowclaw", "skyuppercut", "slash", "sleeptalk", "snore", "solarbeam", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "swift", "swordsdance", "thunderpunch", "toxic", "vacuumwave", "willowisp"]
    },
    Mudkip:
    {
        id: 258,
        uid: 312,
        name: "Mudkip",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40},
        weightkg: 7.6,
        movepool: ["ancientpower", "aquatail", "attract", "bide", "bite", "blizzard", "bodyslam", "captivate", "counter", "curse", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "earthpower", "endeavor", "endure", "facade", "foresight", "frustration", "growl", "hail", "headbutt", "hiddenpower", "hydropump", "iceball", "icebeam", "icywind", "irontail", "lowkick", "mimic", "mirrorcoat", "mudbomb", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "refresh", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "sleeptalk", "sludge", "snore", "stomp", "strength", "substitute", "superpower", "surf", "swagger", "tackle", "takedown", "toxic", "uproar", "waterfall", "watergun", "waterpulse", "whirlpool", "yawn"]
    },
    Marshtomp:
    {
        id: 259,
        uid: 313,
        name: "Marshtomp",
        abilities: ["torrent"],
        types: ["water", "ground"],
        baseStats: {hp: 70, atk: 85, def: 70, spa: 60, spd: 70, spe: 50},
        weightkg: 28,
        movepool: ["ancientpower", "aquatail", "attract", "bide", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endeavor", "endure", "facade", "fling", "foresight", "frustration", "growl", "hail", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "irontail", "lowkick", "megakick", "megapunch", "mimic", "mudbomb", "muddywater", "mudshot", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "seismictoss", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "superpower", "surf", "swagger", "tackle", "takedown", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Swampert:
    {
        id: 260,
        uid: 314,
        name: "Swampert",
        abilities: ["torrent"],
        types: ["water", "ground"],
        baseStats: {hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60},
        weightkg: 81.9,
        movepool: ["ancientpower", "aquatail", "attract", "avalanche", "bide", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "defensecurl", "dig", "dive", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endeavor", "endure", "facade", "fling", "focusblast", "focuspunch", "foresight", "frustration", "gigaimpact", "growl", "hail", "hammerarm", "headbutt", "hiddenpower", "hydrocannon", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "lowkick", "megakick", "megapunch", "mimic", "mudbomb", "muddywater", "mudshot", "mudslap", "mudsport", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "seismictoss", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "superpower", "surf", "swagger", "tackle", "takedown", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Poochyena:
    {
        id: 261,
        uid: 315,
        name: "Poochyena",
        abilities: ["runaway", "quickfeet"],
        types: ["dark", "???"],
        baseStats: {hp: 35, atk: 55, def: 35, spa: 30, spd: 30, spe: 35},
        weightkg: 13.6,
        movepool: ["assurance", "astonish", "attract", "bite", "bodyslam", "captivate", "counter", "covet", "crunch", "darkpulse", "dig", "doubleedge", "doubleteam", "embargo", "endure", "facade", "firefang", "frustration", "headbutt", "healbell", "hiddenpower", "howl", "icefang", "irontail", "leer", "mefirst", "mimic", "mudslap", "naturalgift", "odorsleuth", "payback", "poisonfang", "protect", "psychup", "raindance", "rest", "return", "roar", "rocksmash", "sandattack", "scaryface", "secretpower", "shadowball", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "tackle", "takedown", "taunt", "thief", "thunderfang", "torment", "toxic", "uproar", "yawn"]
    },
    Mightyena:
    {
        id: 262,
        uid: 316,
        name: "Mightyena",
        abilities: ["intimidate", "quickfeet"],
        types: ["dark", "???"],
        baseStats: {hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 70},
        weightkg: 37,
        movepool: ["assurance", "attract", "bite", "bodyslam", "captivate", "counter", "crunch", "darkpulse", "dig", "doubleedge", "doubleteam", "embargo", "endure", "facade", "frustration", "gigaimpact", "headbutt", "hiddenpower", "howl", "hyperbeam", "irontail", "mimic", "mudslap", "naturalgift", "odorsleuth", "payback", "protect", "psychup", "raindance", "rest", "return", "roar", "rocksmash", "sandattack", "scaryface", "secretpower", "shadowball", "sleeptalk", "snatch", "snore", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "tackle", "takedown", "taunt", "thief", "torment", "toxic", "uproar"]
    },
    Zigzagoon:
    {
        id: 263,
        uid: 317,
        name: "Zigzagoon",
        abilities: ["pickup", "gluttony"],
        types: ["normal", "???"],
        baseStats: {hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60},
        weightkg: 17.5,
        movepool: ["attract", "bellydrum", "blizzard", "bodyslam", "captivate", "chargebeam", "charm", "covet", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "endure", "extremespeed", "facade", "flail", "fling", "frustration", "furycutter", "grassknot", "growl", "gunkshot", "headbutt", "helpinghand", "hiddenpower", "icebeam", "icywind", "irontail", "lastresort", "mimic", "mudslap", "mudsport", "naturalgift", "odorsleuth", "pinmissile", "protect", "pursuit", "raindance", "rest", "return", "rocksmash", "rollout", "sandattack", "secretpower", "seedbomb", "shadowball", "shockwave", "sleeptalk", "snore", "substitute", "sunnyday", "superfang", "surf", "swagger", "swift", "tackle", "tailwhip", "thief", "thunder", "thunderbolt", "thunderwave", "tickle", "toxic", "trick", "waterpulse", "whirlpool"]
    },
    Linoone:
    {
        id: 264,
        uid: 318,
        name: "Linoone",
        abilities: ["pickup", "gluttony"],
        types: ["normal", "???"],
        baseStats: {hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100},
        weightkg: 32.5,
        movepool: ["attract", "bellydrum", "blizzard", "bodyslam", "captivate", "chargebeam", "covet", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "endure", "facade", "fling", "frustration", "furycutter", "furyswipes", "gigaimpact", "grassknot", "growl", "gunkshot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "lastresort", "mimic", "mudslap", "mudsport", "naturalgift", "odorsleuth", "protect", "raindance", "rest", "return", "roar", "rocksmash", "rollout", "sandattack", "secretpower", "seedbomb", "shadowball", "shadowclaw", "shockwave", "slash", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "superfang", "surf", "swagger", "swift", "switcheroo", "tackle", "tailwhip", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "waterpulse", "whirlpool"]
    },
    Wurmple:
    {
        id: 265,
        uid: 319,
        name: "Wurmple",
        abilities: ["shielddust"],
        types: ["bug", "???"],
        baseStats: {hp: 45, atk: 45, def: 35, spa: 20, spd: 30, spe: 20},
        weightkg: 3.6,
        movepool: ["bugbite", "poisonsting", "snore", "stringshot", "tackle"]
    },
    Silcoon:
    {
        id: 266,
        uid: 320,
        name: "Silcoon",
        abilities: ["shedskin"],
        types: ["bug", "???"],
        baseStats: {hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15},
        weightkg: 10,
        movepool: ["bugbite", "harden", "irondefense", "stringshot"]
    },
    Cascoon:
    {
        id: 268,
        uid: 321,
        name: "Cascoon",
        abilities: ["shedskin"],
        types: ["bug", "???"],
        baseStats: {hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15},
        weightkg: 11.5,
        movepool: ["bugbite", "harden", "irondefense", "stringshot"]
    },
    Dustox:
    {
        id: 269,
        uid: 322,
        name: "Dustox",
        abilities: ["shielddust"],
        types: ["bug", "poison"],
        baseStats: {hp: 60, atk: 50, def: 70, spa: 50, spd: 90, spe: 65},
        weightkg: 31.6,
        movepool: ["aerialace", "aircutter", "attract", "bugbite", "bugbuzz", "captivate", "confusion", "defog", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "gust", "hiddenpower", "hyperbeam", "lightscreen", "mimic", "moonlight", "naturalgift", "ominouswind", "protect", "psybeam", "psychic", "rest", "return", "roost", "secretpower", "shadowball", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "stringshot", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thief", "toxic", "twister", "uturn", "whirlwind"]
    },
    Lotad:
    {
        id: 270,
        uid: 323,
        name: "Lotad",
        abilities: ["swiftswim", "raindish"],
        types: ["water", "grass"],
        baseStats: {hp: 40, atk: 30, def: 30, spa: 40, spd: 50, spe: 30},
        weightkg: 2.6,
        movepool: ["absorb", "astonish", "attract", "blizzard", "bodyslam", "bubblebeam", "bulletseed", "captivate", "counter", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flail", "flash", "frustration", "gigadrain", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "icebeam", "icywind", "leechseed", "megadrain", "mimic", "mist", "naturalgift", "naturepower", "protect", "raindance", "razorleaf", "rest", "return", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "surf", "swagger", "sweetscent", "swordsdance", "synthesis", "thief", "tickle", "toxic", "uproar", "watergun", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Lombre:
    {
        id: 271,
        uid: 324,
        name: "Lombre",
        abilities: ["swiftswim", "raindish"],
        types: ["water", "grass"],
        baseStats: {hp: 60, atk: 50, def: 50, spa: 60, spd: 70, spe: 50},
        weightkg: 32.5,
        movepool: ["absorb", "astonish", "attract", "blizzard", "bodyslam", "brickbreak", "bubblebeam", "bulletseed", "captivate", "dive", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "endure", "energyball", "facade", "fakeout", "firepunch", "flash", "fling", "frustration", "furyswipes", "gigadrain", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icepunch", "icywind", "mimic", "mudslap", "naturalgift", "naturepower", "protect", "raindance", "rest", "return", "rocksmash", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "surf", "swagger", "swordsdance", "synthesis", "thief", "thunderpunch", "toxic", "uproar", "waterfall", "waterpulse", "watersport", "whirlpool", "zenheadbutt"]
    },
    Ludicolo:
    {
        id: 272,
        uid: 325,
        name: "Ludicolo",
        abilities: ["swiftswim", "raindish"],
        types: ["water", "grass"],
        baseStats: {hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70},
        weightkg: 55,
        movepool: ["absorb", "astonish", "attract", "blizzard", "bodyslam", "brickbreak", "bulletseed", "captivate", "counter", "dive", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "endure", "energyball", "facade", "firepunch", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigadrain", "gigaimpact", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "megadrain", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "naturepower", "protect", "raindance", "rest", "return", "rockclimb", "rocksmash", "secretpower", "seedbomb", "seismictoss", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "surf", "swagger", "swordsdance", "synthesis", "thief", "thunderpunch", "toxic", "uproar", "waterfall", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Seedot:
    {
        id: 273,
        uid: 326,
        name: "Seedot",
        abilities: ["chlorophyll", "earlybird"],
        types: ["grass", "???"],
        baseStats: {hp: 40, atk: 40, def: 50, spa: 30, spd: 30, spe: 30},
        weightkg: 4,
        movepool: ["amnesia", "attract", "bide", "bodyslam", "bulletseed", "captivate", "defensecurl", "dig", "doubleedge", "doubleteam", "endure", "energyball", "explosion", "facade", "falseswipe", "flash", "frustration", "gigadrain", "grassknot", "growth", "harden", "headbutt", "hiddenpower", "leechseed", "mimic", "nastyplot", "naturalgift", "naturepower", "powerswap", "protect", "quickattack", "razorwind", "refresh", "rest", "return", "rocksmash", "rollout", "secretpower", "seedbomb", "selfdestruct", "shadowball", "sleeptalk", "snore", "solarbeam", "spite", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "takedown", "toxic", "worryseed"]
    },
    Nuzleaf:
    {
        id: 274,
        uid: 327,
        name: "Nuzleaf",
        abilities: ["chlorophyll", "earlybird"],
        types: ["grass", "dark"],
        baseStats: {hp: 70, atk: 70, def: 40, spa: 60, spd: 40, spe: 60},
        weightkg: 28,
        movepool: ["attract", "bodyslam", "brickbreak", "bulletseed", "captivate", "cut", "darkpulse", "defensecurl", "dig", "doubleedge", "doubleteam", "embargo", "endure", "energyball", "explosion", "extrasensory", "facade", "fakeout", "feintattack", "flash", "fling", "frustration", "furycutter", "gigadrain", "grassknot", "growth", "harden", "headbutt", "hiddenpower", "hyperbeam", "lowkick", "megakick", "mimic", "mudslap", "naturalgift", "naturepower", "payback", "pound", "protect", "psychup", "razorleaf", "razorwind", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "seedbomb", "selfdestruct", "shadowball", "sleeptalk", "snore", "solarbeam", "spite", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "thief", "torment", "toxic", "worryseed"]
    },
    Shiftry:
    {
        id: 275,
        uid: 328,
        name: "Shiftry",
        abilities: ["chlorophyll", "earlybird"],
        types: ["grass", "dark"],
        baseStats: {hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 80},
        weightkg: 59.6,
        movepool: ["aerialace", "aircutter", "attract", "bodyslam", "bounce", "brickbreak", "bulletseed", "captivate", "cut", "darkpulse", "defensecurl", "defog", "dig", "doubleedge", "doubleteam", "embargo", "endure", "energyball", "explosion", "facade", "feintattack", "flash", "fling", "focusblast", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "growth", "harden", "headbutt", "hiddenpower", "hyperbeam", "icywind", "knockoff", "leafstorm", "lowkick", "megakick", "mimic", "mudslap", "nastyplot", "naturalgift", "naturepower", "ominouswind", "payback", "pound", "protect", "psychup", "razorleaf", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "seedbomb", "selfdestruct", "shadowball", "silverwind", "sleeptalk", "snore", "solarbeam", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "tailwind", "thief", "torment", "toxic", "twister", "whirlwind", "worryseed", "xscissor"]
    },
    Taillow:
    {
        id: 276,
        uid: 329,
        name: "Taillow",
        abilities: ["guts"],
        types: ["normal", "flying"],
        baseStats: {hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 85},
        weightkg: 2.3,
        movepool: ["aerialace", "agility", "aircutter", "airslash", "attract", "bravebird", "captivate", "counter", "defog", "doubleedge", "doubleteam", "endeavor", "endure", "facade", "featherdance", "fly", "focusenergy", "frustration", "growl", "heatwave", "hiddenpower", "mimic", "mirrormove", "mudslap", "naturalgift", "ominouswind", "peck", "pluck", "protect", "pursuit", "quickattack", "rage", "raindance", "refresh", "rest", "return", "roost", "secretpower", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tailwind", "thief", "toxic", "twister", "uturn", "whirlwind", "wingattack"]
    },
    Surskit:
    {
        id: 283,
        uid: 330,
        name: "Surskit",
        abilities: ["swiftswim"],
        types: ["bug", "water"],
        baseStats: {hp: 40, atk: 30, def: 32, spa: 50, spd: 52, spe: 65},
        weightkg: 1.7,
        movepool: ["agility", "attract", "batonpass", "blizzard", "bubble", "bubblebeam", "bugbite", "captivate", "doubleedge", "doubleteam", "endure", "facade", "flash", "foresight", "frustration", "gigadrain", "haze", "hiddenpower", "hydropump", "icebeam", "icywind", "mimic", "mindreader", "mist", "mudshot", "mudslap", "mudsport", "naturalgift", "protect", "psybeam", "psychup", "quickattack", "raindance", "rest", "return", "secretpower", "shadowball", "signalbeam", "sleeptalk", "snore", "solarbeam", "stringshot", "substitute", "sunnyday", "swagger", "sweetscent", "swift", "thief", "toxic", "waterpulse", "watersport"]
    },
    Shroomish:
    {
        id: 285,
        uid: 331,
        name: "Shroomish",
        abilities: ["effectspore", "poisonheal"],
        types: ["grass", "???"],
        baseStats: {hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35},
        weightkg: 4.5,
        movepool: ["absorb", "attract", "bodyslam", "bulletseed", "captivate", "charm", "doubleedge", "doubleteam", "endure", "energyball", "facade", "faketears", "falseswipe", "flash", "frustration", "gigadrain", "grassknot", "growth", "headbutt", "helpinghand", "hiddenpower", "leechseed", "megadrain", "mimic", "naturalgift", "poisonpowder", "protect", "refresh", "rest", "return", "safeguard", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snatch", "snore", "solarbeam", "spore", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "tackle", "toxic", "wakeupslap", "worryseed"]
    },
    Breloom:
    {
        id: 286,
        uid: 332,
        name: "Breloom",
        abilities: ["effectspore", "poisonheal"],
        types: ["grass", "fighting"],
        baseStats: {hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70},
        weightkg: 39.2,
        movepool: ["absorb", "attract", "bodyslam", "brickbreak", "bulkup", "bulletseed", "captivate", "counter", "cut", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "endure", "energyball", "facade", "flash", "fling", "focusblast", "focuspunch", "forcepalm", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "leechseed", "machpunch", "megadrain", "megakick", "megapunch", "mimic", "mindreader", "mudslap", "naturalgift", "protect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "safeguard", "secretpower", "seedbomb", "seismictoss", "skyuppercut", "sleeptalk", "sludgebomb", "snatch", "snore", "solarbeam", "stoneedge", "strength", "stunspore", "substitute", "sunnyday", "superpower", "swagger", "swordsdance", "synthesis", "tackle", "thunderpunch", "toxic", "vacuumwave", "worryseed"]
    },
    Slakoth:
    {
        id: 287,
        uid: 333,
        name: "Slakoth",
        abilities: ["truant"],
        types: ["normal", "???"],
        baseStats: {hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30},
        weightkg: 24,
        movepool: ["aerialace", "amnesia", "attract", "blizzard", "bodyslam", "brickbreak", "bulkup", "captivate", "counter", "covet", "crushclaw", "curse", "cut", "doubleedge", "doubleteam", "dynamicpunch", "encore", "endure", "facade", "feintattack", "fireblast", "firepunch", "flail", "flamethrower", "fling", "focuspunch", "frustration", "furycutter", "gunkshot", "hammerarm", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "nightslash", "protect", "pursuit", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "scratch", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shockwave", "slackoff", "slash", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "thunder", "thunderbolt", "thunderpunch", "toxic", "waterpulse", "yawn"]
    },
    Vigoroth:
    {
        id: 288,
        uid: 334,
        name: "Vigoroth",
        abilities: ["vitalspirit"],
        types: ["normal", "???"],
        baseStats: {hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90},
        weightkg: 46.5,
        movepool: ["aerialace", "attract", "blizzard", "bodyslam", "brickbreak", "bulkup", "captivate", "counter", "cut", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "encore", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "furycutter", "furyswipes", "gunkshot", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "reversal", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "scratch", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shockwave", "slash", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "waterpulse"]
    },
    Slaking:
    {
        id: 289,
        uid: 335,
        name: "Slaking",
        abilities: ["truant"],
        types: ["normal", "???"],
        baseStats: {hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100},
        weightkg: 130.5,
        movepool: ["aerialace", "amnesia", "attract", "blizzard", "block", "bodyslam", "brickbreak", "bulkup", "captivate", "counter", "covet", "cut", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "encore", "endure", "facade", "feintattack", "fireblast", "firepunch", "flail", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "gunkshot", "hammerarm", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "protect", "punishment", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "scratch", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shockwave", "slackoff", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thunder", "thunderbolt", "thunderpunch", "toxic", "waterpulse", "yawn"]
    },
    Nincada:
    {
        id: 290,
        uid: 336,
        name: "Nincada",
        abilities: ["compoundeyes"],
        types: ["bug", "ground"],
        baseStats: {hp: 31, atk: 45, def: 90, spa: 30, spd: 30, spe: 40},
        weightkg: 5.5,
        movepool: ["aerialace", "bugbite", "bugbuzz", "cut", "dig", "doubleedge", "doubleteam", "endure", "facade", "falseswipe", "feintattack", "flash", "frustration", "furycutter", "furyswipes", "gigadrain", "gust", "harden", "hiddenpower", "leechlife", "metalclaw", "mimic", "mindreader", "mudslap", "naturalgift", "nightslash", "protect", "rest", "return", "sandattack", "sandstorm", "scratch", "secretpower", "shadowball", "silverwind", "sleeptalk", "snore", "solarbeam", "spite", "stringshot", "substitute", "sunnyday", "swagger", "toxic", "xscissor"]
    },
    Ninjask:
    {
        id: 291,
        uid: 337,
        name: "Ninjask",
        abilities: ["speedboost"],
        types: ["bug", "flying"],
        baseStats: {hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160},
        weightkg: 12,
        movepool: ["aerialace", "agility", "aircutter", "attract", "batonpass", "bugbite", "captivate", "cut", "defog", "dig", "doubleedge", "doubleteam", "endure", "facade", "falseswipe", "flash", "frustration", "furycutter", "furyswipes", "gigadrain", "gigaimpact", "harden", "hiddenpower", "hyperbeam", "leechlife", "mimic", "mindreader", "mudslap", "naturalgift", "ominouswind", "protect", "rest", "return", "roost", "sandattack", "sandstorm", "scratch", "screech", "secretpower", "shadowball", "silverwind", "slash", "sleeptalk", "snore", "solarbeam", "spite", "stringshot", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thief", "toxic", "uproar", "uturn", "xscissor"]
    },
    Shedinja:
    {
        id: 292,
        uid: 338,
        name: "Shedinja",
        abilities: ["wonderguard"],
        types: ["bug", "ghost"],
        baseStats: {hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40},
        weightkg: 1.2,
        movepool: ["aerialace", "agility", "batonpass", "bugbite", "confuseray", "cut", "dig", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "falseswipe", "flash", "frustration", "furycutter", "furyswipes", "gigadrain", "gigaimpact", "grudge", "harden", "healblock", "hiddenpower", "hyperbeam", "leechlife", "mimic", "mindreader", "mudslap", "naturalgift", "nightmare", "protect", "rest", "return", "sandattack", "sandstorm", "scratch", "screech", "secretpower", "shadowball", "shadowclaw", "shadowsneak", "slash", "sleeptalk", "snore", "solarbeam", "spite", "stringshot", "substitute", "suckerpunch", "sunnyday", "swagger", "swordsdance", "thief", "toxic", "trick", "willowisp", "xscissor"]
    },
    Whismur:
    {
        id: 293,
        uid: 339,
        name: "Whismur",
        abilities: ["soundproof"],
        types: ["normal", "???"],
        baseStats: {hp: 64, atk: 51, def: 23, spa: 51, spd: 23, spe: 28},
        weightkg: 16.3,
        movepool: ["astonish", "attract", "blizzard", "bodyslam", "captivate", "counter", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "endeavor", "endure", "extrasensory", "facade", "fireblast", "firepunch", "flamethrower", "fling", "frustration", "hammerarm", "headbutt", "hiddenpower", "howl", "hypervoice", "icebeam", "icepunch", "icywind", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "pound", "protect", "psychup", "raindance", "rest", "return", "roar", "rollout", "screech", "secretpower", "seismictoss", "shadowball", "shockwave", "sleeptalk", "smellingsalts", "smokescreen", "snore", "solarbeam", "stomp", "substitute", "sunnyday", "supersonic", "swagger", "takedown", "teeterdance", "thunderpunch", "toxic", "uproar", "waterpulse", "zenheadbutt"]
    },
    Loudred:
    {
        id: 294,
        uid: 340,
        name: "Loudred",
        abilities: ["soundproof"],
        types: ["normal", "???"],
        baseStats: {hp: 84, atk: 71, def: 43, spa: 71, spd: 43, spe: 48},
        weightkg: 40.5,
        movepool: ["astonish", "attract", "bite", "blizzard", "bodyslam", "brickbreak", "captivate", "counter", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "frustration", "headbutt", "hiddenpower", "howl", "hypervoice", "icebeam", "icepunch", "icywind", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "overheat", "pound", "protect", "psychup", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "rollout", "screech", "secretpower", "seismictoss", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "stomp", "strength", "substitute", "sunnyday", "supersonic", "swagger", "taunt", "thunderpunch", "torment", "toxic", "uproar", "waterpulse", "zenheadbutt"]
    },
    Makuhita:
    {
        id: 296,
        uid: 341,
        name: "Makuhita",
        abilities: ["thickfat", "guts"],
        types: ["fighting", "???"],
        baseStats: {hp: 72, atk: 60, def: 30, spa: 20, spd: 30, spe: 25},
        weightkg: 86.4,
        movepool: ["armthrust", "attract", "bellydrum", "bodyslam", "brickbreak", "bulkup", "bulletpunch", "captivate", "closecombat", "counter", "crosschop", "detect", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fakeout", "feint", "feintattack", "firepunch", "fling", "focusblast", "focusenergy", "focuspunch", "forcepalm", "foresight", "frustration", "headbutt", "helpinghand", "hiddenpower", "icepunch", "knockoff", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "poisonjab", "protect", "raindance", "refresh", "rest", "return", "revenge", "reversal", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "sandattack", "secretpower", "seismictoss", "sleeptalk", "smellingsalts", "snore", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "tackle", "thunderpunch", "toxic", "vacuumwave", "vitalthrow", "wakeupslap", "whirlpool", "whirlwind"]
    },
    Hariyama:
    {
        id: 297,
        uid: 342,
        name: "Hariyama",
        abilities: ["thickfat", "guts"],
        types: ["fighting", "???"],
        baseStats: {hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 50},
        weightkg: 253.8,
        movepool: ["armthrust", "attract", "bellydrum", "bodyslam", "brickbreak", "brine", "bulkup", "captivate", "closecombat", "counter", "dig", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "facade", "fakeout", "firepunch", "fling", "focusblast", "focusenergy", "focuspunch", "forcepalm", "frustration", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "ironhead", "knockoff", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "payback", "poisonjab", "protect", "raindance", "rest", "return", "reversal", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "sandattack", "secretpower", "seismictoss", "sleeptalk", "smellingsalts", "snore", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "tackle", "thunderpunch", "toxic", "vacuumwave", "vitalthrow", "wakeupslap", "whirlpool", "whirlwind"]
    },
    Nosepass:
    {
        id: 299,
        uid: 343,
        name: "Nosepass",
        abilities: ["sturdy", "magnetpull"],
        types: ["rock", "???"],
        baseStats: {hp: 30, atk: 45, def: 135, spa: 45, spd: 90, spe: 30},
        weightkg: 97,
        movepool: ["ancientpower", "attract", "block", "bodyslam", "captivate", "defensecurl", "discharge", "doubleedge", "doubleteam", "dynamicpunch", "earthpower", "earthquake", "endure", "explosion", "facade", "firepunch", "frustration", "gravity", "harden", "headbutt", "helpinghand", "hiddenpower", "icepunch", "irondefense", "lockon", "magiccoat", "magnetrise", "magnitude", "mimic", "mudslap", "naturalgift", "painsplit", "powergem", "protect", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rockthrow", "rocktomb", "rollout", "sandstorm", "secretpower", "selfdestruct", "shockwave", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "tackle", "taunt", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "zapcannon"]
    },
    Skitty:
    {
        id: 300,
        uid: 344,
        name: "Skitty",
        abilities: ["cutecharm", "normalize"],
        types: ["normal", "???"],
        baseStats: {hp: 50, atk: 45, def: 45, spa: 35, spd: 35, spe: 50},
        weightkg: 11,
        movepool: ["assist", "attract", "batonpass", "blizzard", "bodyslam", "calmmind", "captivate", "chargebeam", "charm", "copycat", "covet", "defensecurl", "dig", "doubleedge", "doubleslap", "doubleteam", "dreameater", "endure", "facade", "fakeout", "faketears", "feintattack", "flash", "foresight", "frustration", "grassknot", "growl", "headbutt", "healbell", "helpinghand", "hiddenpower", "icebeam", "icywind", "irontail", "lastresort", "mimic", "mudbomb", "mudslap", "naturalgift", "payback", "payday", "protect", "psychup", "raindance", "rest", "return", "rollout", "safeguard", "secretpower", "shadowball", "shockwave", "sing", "sleeptalk", "snore", "solarbeam", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tackle", "tailwhip", "thunder", "thunderbolt", "thunderwave", "tickle", "toxic", "uproar", "wakeupslap", "waterpulse", "wish", "zenheadbutt"]
    },
    Sableye:
    {
        id: 302,
        uid: 345,
        name: "Sableye",
        abilities: ["keeneye", "stall"],
        types: ["dark", "ghost"],
        baseStats: {hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50},
        weightkg: 11,
        movepool: ["aerialace", "astonish", "attract", "bodyslam", "brickbreak", "calmmind", "captivate", "confuseray", "counter", "cut", "darkpulse", "detect", "dig", "doubleedge", "doubleteam", "dreameater", "dynamicpunch", "embargo", "endure", "facade", "fakeout", "feint", "feintattack", "firepunch", "flash", "flatter", "fling", "focuspunch", "foresight", "frustration", "furycutter", "furyswipes", "gravity", "headbutt", "helpinghand", "hiddenpower", "icepunch", "icywind", "knockoff", "leer", "lowkick", "magiccoat", "meanlook", "megakick", "megapunch", "metronome", "mimic", "moonlight", "mudslap", "nastyplot", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "poisonjab", "powergem", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "rest", "return", "rocksmash", "rocktomb", "roleplay", "scratch", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowsneak", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunderpunch", "torment", "toxic", "trick", "waterpulse", "willowisp", "zenheadbutt"]
    },
    Aron:
    {
        id: 304,
        uid: 346,
        name: "Aron",
        abilities: ["sturdy", "rockhead"],
        types: ["steel", "rock"],
        baseStats: {hp: 50, atk: 70, def: 100, spa: 40, spd: 40, spe: 30},
        weightkg: 60,
        movepool: ["aerialace", "ancientpower", "attract", "bodyslam", "captivate", "curse", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dragonrush", "earthpower", "earthquake", "endeavor", "endure", "facade", "frustration", "furycutter", "harden", "headbutt", "headsmash", "hiddenpower", "irondefense", "ironhead", "irontail", "magnetrise", "metalburst", "metalclaw", "metalsound", "mimic", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "roar", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "screech", "secretpower", "shadowclaw", "shockwave", "sleeptalk", "smellingsalts", "snore", "spite", "stealthrock", "stomp", "strength", "substitute", "sunnyday", "superpower", "swagger", "tackle", "takedown", "toxic", "uproar", "waterpulse"]
    },
    Lairon:
    {
        id: 305,
        uid: 347,
        name: "Lairon",
        abilities: ["sturdy", "rockhead"],
        types: ["steel", "rock"],
        baseStats: {hp: 60, atk: 90, def: 140, spa: 50, spd: 50, spe: 40},
        weightkg: 120,
        movepool: ["aerialace", "ancientpower", "attract", "bodyslam", "captivate", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endeavor", "endure", "facade", "frustration", "furycutter", "harden", "headbutt", "hiddenpower", "irondefense", "ironhead", "irontail", "magnetrise", "metalburst", "metalclaw", "metalsound", "mimic", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "roar", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "shadowclaw", "shockwave", "sleeptalk", "snore", "spite", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "tackle", "takedown", "toxic", "uproar", "waterpulse"]
    },
    Aggron:
    {
        id: 306,
        uid: 348,
        name: "Aggron",
        abilities: ["sturdy", "rockhead"],
        types: ["steel", "rock"],
        baseStats: {hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50},
        weightkg: 360,
        movepool: ["aerialace", "ancientpower", "aquatail", "attract", "avalanche", "blizzard", "block", "bodyslam", "brickbreak", "captivate", "counter", "cut", "darkpulse", "defensecurl", "dig", "doubleedge", "doubleteam", "dragonclaw", "dragonpulse", "dynamicpunch", "earthpower", "earthquake", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "harden", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "ironhead", "irontail", "lowkick", "magnetrise", "megakick", "megapunch", "metalburst", "metalclaw", "metalsound", "mimic", "mudslap", "naturalgift", "outrage", "payback", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "seismictoss", "shadowclaw", "shockwave", "sleeptalk", "snore", "solarbeam", "spite", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "tackle", "takedown", "taunt", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "uproar", "waterpulse", "whirlpool"]
    },
    Meditite:
    {
        id: 307,
        uid: 349,
        name: "Meditite",
        abilities: ["purepower"],
        types: ["fighting", "psychic"],
        baseStats: {hp: 30, atk: 40, def: 55, spa: 40, spd: 55, spe: 60},
        weightkg: 11.2,
        movepool: ["attract", "batonpass", "bide", "bodyslam", "brickbreak", "bulkup", "bulletpunch", "calmmind", "captivate", "confusion", "counter", "detect", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "facade", "fakeout", "feint", "firepunch", "flash", "fling", "focusblast", "focuspunch", "forcepalm", "foresight", "frustration", "grassknot", "gravity", "guardswap", "headbutt", "helpinghand", "hiddenpower", "highjumpkick", "icepunch", "lightscreen", "lowkick", "magiccoat", "meditate", "megakick", "megapunch", "metronome", "mimic", "mindreader", "mudslap", "naturalgift", "painsplit", "poisonjab", "powerswap", "powertrick", "protect", "psychic", "psychocut", "psychup", "raindance", "recover", "recycle", "reflect", "rest", "return", "reversal", "rockslide", "rocksmash", "rocktomb", "roleplay", "secretpower", "seismictoss", "shadowball", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "thunderpunch", "toxic", "trick", "vacuumwave", "zenheadbutt"]
    },
    Medicham:
    {
        id: 308,
        uid: 350,
        name: "Medicham",
        abilities: ["purepower"],
        types: ["fighting", "psychic"],
        baseStats: {hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 80},
        weightkg: 31.5,
        movepool: ["attract", "bide", "bodyslam", "brickbreak", "bulkup", "calmmind", "captivate", "confusion", "counter", "detect", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "facade", "feint", "firepunch", "flash", "fling", "focusblast", "focuspunch", "forcepalm", "frustration", "gigaimpact", "grassknot", "gravity", "headbutt", "helpinghand", "hiddenpower", "highjumpkick", "hyperbeam", "icepunch", "lightscreen", "lowkick", "magiccoat", "meditate", "megakick", "megapunch", "metronome", "mimic", "mindreader", "mudslap", "naturalgift", "painsplit", "poisonjab", "powertrick", "protect", "psychic", "psychup", "raindance", "recover", "recycle", "reflect", "rest", "return", "reversal", "rockslide", "rocksmash", "rocktomb", "roleplay", "secretpower", "seismictoss", "shadowball", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "thunderpunch", "toxic", "trick", "vacuumwave", "zenheadbutt"]
    },
    Electrike:
    {
        id: 309,
        uid: 351,
        name: "Electrike",
        abilities: ["static", "lightningrod"],
        types: ["electric", "???"],
        baseStats: {hp: 40, atk: 45, def: 40, spa: 65, spd: 40, spe: 65},
        weightkg: 15.2,
        movepool: ["attract", "bite", "bodyslam", "captivate", "charge", "chargebeam", "crunch", "curse", "discharge", "doubleedge", "doubleteam", "endure", "facade", "firefang", "flamethrower", "flash", "frustration", "headbutt", "hiddenpower", "howl", "icefang", "irontail", "leer", "lightscreen", "magnetrise", "mimic", "mudslap", "naturalgift", "odorsleuth", "protect", "quickattack", "raindance", "rest", "return", "roar", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "strength", "substitute", "swagger", "swift", "switcheroo", "tackle", "thief", "thunder", "thunderbolt", "thunderfang", "thunderwave", "toxic", "uproar"]
    },
    Manectric:
    {
        id: 310,
        uid: 352,
        name: "Manectric",
        abilities: ["static", "lightningrod"],
        types: ["electric", "???"],
        baseStats: {hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105},
        weightkg: 40.2,
        movepool: ["attract", "bite", "bodyslam", "captivate", "charge", "chargebeam", "discharge", "doubleedge", "doubleteam", "endure", "facade", "firefang", "flamethrower", "flash", "frustration", "gigaimpact", "headbutt", "hiddenpower", "howl", "hyperbeam", "irontail", "leer", "lightscreen", "magnetrise", "mimic", "mudslap", "naturalgift", "odorsleuth", "overheat", "protect", "quickattack", "raindance", "refresh", "rest", "return", "roar", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "strength", "substitute", "swagger", "swift", "tackle", "thief", "thunder", "thunderbolt", "thunderfang", "thunderwave", "toxic"]
    },
    Roselia:
    {
        id: 315,
        uid: 353,
        name: "Roselia",
        abilities: ["naturalcure", "poisonpoint"],
        types: ["grass", "poison"],
        baseStats: {hp: 50, atk: 60, def: 45, spa: 100, spd: 80, spe: 65},
        weightkg: 2,
        movepool: ["absorb", "aromatherapy", "attract", "bodyslam", "bulletseed", "captivate", "cottonspore", "cut", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "furycutter", "gigadrain", "grassknot", "grasswhistle", "growth", "hiddenpower", "ingrain", "leafstorm", "leechseed", "magicalleaf", "megadrain", "mimic", "mindreader", "mudslap", "naturalgift", "nightmare", "petaldance", "pinmissile", "poisonjab", "poisonsting", "protect", "psychup", "raindance", "razorleaf", "rest", "return", "secretpower", "seedbomb", "shadowball", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spikes", "stunspore", "substitute", "sunnyday", "swagger", "sweetkiss", "sweetscent", "swift", "swordsdance", "synthesis", "toxic", "toxicspikes", "worryseed"]
    },
    Gulpin:
    {
        id: 316,
        uid: 354,
        name: "Gulpin",
        abilities: ["liquidooze", "stickyhold"],
        types: ["poison", "???"],
        baseStats: {hp: 70, atk: 43, def: 53, spa: 43, spd: 53, spe: 40},
        weightkg: 10.3,
        movepool: ["acidarmor", "amnesia", "attract", "bodyslam", "bulletseed", "captivate", "counter", "curse", "defensecurl", "destinybond", "doubleedge", "doubleteam", "dreameater", "dynamicpunch", "encore", "endure", "explosion", "facade", "firepunch", "frustration", "gastroacid", "gigadrain", "gunkshot", "headbutt", "hiddenpower", "icebeam", "icepunch", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "poisongas", "pound", "protect", "raindance", "rest", "return", "rocksmash", "rollout", "secretpower", "seedbomb", "selfdestruct", "shadowball", "shockwave", "sing", "sleeptalk", "sludge", "sludgebomb", "smog", "snatch", "snore", "solarbeam", "spitup", "stockpile", "strength", "substitute", "sunnyday", "swagger", "swallow", "thunderpunch", "toxic", "waterpulse", "wringout", "yawn"]
    },
    Swalot:
    {
        id: 317,
        uid: 355,
        name: "Swalot",
        abilities: ["liquidooze", "stickyhold"],
        types: ["poison", "???"],
        baseStats: {hp: 100, atk: 73, def: 83, spa: 73, spd: 83, spe: 55},
        weightkg: 80,
        movepool: ["amnesia", "attract", "block", "bodyslam", "bulletseed", "captivate", "counter", "defensecurl", "doubleedge", "doubleteam", "dreameater", "dynamicpunch", "earthquake", "encore", "endure", "explosion", "facade", "firepunch", "frustration", "gastroacid", "gigadrain", "gigaimpact", "gunkshot", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "mimic", "mudslap", "naturalgift", "nightmare", "painsplit", "poisongas", "pound", "protect", "raindance", "rest", "return", "rocksmash", "rollout", "secretpower", "seedbomb", "selfdestruct", "shadowball", "shockwave", "sleeptalk", "sludge", "sludgebomb", "snatch", "snore", "solarbeam", "spitup", "stockpile", "strength", "substitute", "sunnyday", "swagger", "swallow", "thunderpunch", "toxic", "waterpulse", "wringout", "yawn"]
    },
    Carvanha:
    {
        id: 318,
        uid: 356,
        name: "Carvanha",
        abilities: ["roughskin"],
        types: ["water", "dark"],
        baseStats: {hp: 45, atk: 90, def: 20, spa: 65, spd: 20, spe: 65},
        weightkg: 20.8,
        movepool: ["agility", "ancientpower", "aquajet", "assurance", "attract", "bite", "blizzard", "bounce", "brine", "captivate", "crunch", "darkpulse", "dive", "doubleedge", "doubleteam", "endure", "facade", "focusenergy", "frustration", "furycutter", "hail", "hiddenpower", "hydropump", "icebeam", "icefang", "icywind", "leer", "mimic", "mudslap", "naturalgift", "payback", "protect", "rage", "raindance", "refresh", "rest", "return", "scaryface", "screech", "secretpower", "sleeptalk", "snore", "spite", "substitute", "superfang", "surf", "swagger", "swift", "takedown", "taunt", "thief", "thrash", "torment", "toxic", "uproar", "waterfall", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Sharpedo:
    {
        id: 319,
        uid: 357,
        name: "Sharpedo",
        abilities: ["roughskin"],
        types: ["water", "dark"],
        baseStats: {hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95},
        weightkg: 88.8,
        movepool: ["agility", "ancientpower", "aquajet", "assurance", "attract", "avalanche", "bite", "blizzard", "bounce", "brine", "captivate", "crunch", "darkpulse", "dive", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "feint", "focusenergy", "frustration", "furycutter", "gigaimpact", "hail", "hiddenpower", "hyperbeam", "icebeam", "icefang", "icywind", "leer", "mimic", "mudslap", "naturalgift", "nightslash", "payback", "poisonjab", "protect", "rage", "raindance", "rest", "return", "roar", "rocksmash", "rocktomb", "scaryface", "screech", "secretpower", "skullbash", "slash", "sleeptalk", "snore", "spite", "strength", "substitute", "superfang", "surf", "swagger", "swift", "taunt", "thief", "torment", "toxic", "uproar", "waterfall", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Wailmer:
    {
        id: 320,
        uid: 358,
        name: "Wailmer",
        abilities: ["waterveil", "oblivious"],
        types: ["water", "???"],
        baseStats: {hp: 130, atk: 70, def: 35, spa: 70, spd: 35, spe: 60},
        weightkg: 130,
        movepool: ["amnesia", "aquaring", "astonish", "attract", "avalanche", "blizzard", "bodyslam", "bounce", "brine", "captivate", "curse", "defensecurl", "dive", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "fissure", "frustration", "growl", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icywind", "mimic", "mist", "naturalgift", "protect", "raindance", "rest", "return", "roar", "rocksmash", "rocktomb", "rollout", "secretpower", "selfdestruct", "sleeptalk", "snore", "splash", "strength", "substitute", "surf", "swagger", "thrash", "tickle", "toxic", "waterfall", "watergun", "waterpulse", "waterspout", "whirlpool"]
    },
    Wailord:
    {
        id: 321,
        uid: 359,
        name: "Wailord",
        abilities: ["waterveil", "oblivious"],
        types: ["water", "???"],
        baseStats: {hp: 170, atk: 90, def: 45, spa: 90, spd: 45, spe: 60},
        weightkg: 398,
        movepool: ["amnesia", "astonish", "attract", "avalanche", "blizzard", "block", "bodyslam", "bounce", "brine", "captivate", "defensecurl", "dive", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "frustration", "gigaimpact", "growl", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "ironhead", "mimic", "mist", "naturalgift", "protect", "raindance", "rest", "return", "roar", "rocksmash", "rocktomb", "rollout", "secretpower", "selfdestruct", "sleeptalk", "snore", "splash", "strength", "substitute", "surf", "swagger", "toxic", "waterfall", "watergun", "waterpulse", "waterspout", "whirlpool"]
    },
    Numel:
    {
        id: 322,
        uid: 360,
        name: "Numel",
        abilities: ["oblivious", "simple"],
        types: ["fire", "ground"],
        baseStats: {hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35},
        weightkg: 24,
        movepool: ["amnesia", "ancientpower", "attract", "bodyslam", "captivate", "charm", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "ember", "endure", "facade", "fireblast", "flamethrower", "focusenergy", "frustration", "growl", "headbutt", "heatwave", "hiddenpower", "howl", "lavaplume", "magnitude", "mimic", "mudbomb", "mudslap", "naturalgift", "overheat", "protect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "scaryface", "secretpower", "sleeptalk", "snore", "spitup", "stealthrock", "stockpile", "stomp", "strength", "substitute", "sunnyday", "swagger", "swallow", "tackle", "takedown", "toxic", "willowisp", "yawn"]
    },
    Camerupt:
    {
        id: 323,
        uid: 361,
        name: "Camerupt",
        abilities: ["magmaarmor", "solidrock"],
        types: ["fire", "ground"],
        baseStats: {hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40},
        weightkg: 220,
        movepool: ["amnesia", "attract", "bodyslam", "captivate", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "ember", "endure", "eruption", "explosion", "facade", "fireblast", "fissure", "flamethrower", "flashcannon", "focusenergy", "frustration", "gigaimpact", "growl", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "ironhead", "lavaplume", "magnitude", "mimic", "mudslap", "naturalgift", "overheat", "protect", "rest", "return", "roar", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "selfdestruct", "sleeptalk", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "tackle", "takedown", "toxic", "willowisp"]
    },
    Spoink:
    {
        id: 325,
        uid: 362,
        name: "Spoink",
        abilities: ["thickfat", "owntempo"],
        types: ["psychic", "???"],
        baseStats: {hp: 60, atk: 25, def: 35, spa: 70, spd: 80, spe: 60},
        weightkg: 30.6,
        movepool: ["amnesia", "attract", "bodyslam", "bounce", "calmmind", "captivate", "chargebeam", "confuseray", "doubleedge", "doubleteam", "dreameater", "endure", "extrasensory", "facade", "flash", "frustration", "futuresight", "grassknot", "headbutt", "healbell", "hiddenpower", "icywind", "irontail", "lightscreen", "magiccoat", "mimic", "mirrorcoat", "naturalgift", "odorsleuth", "payback", "powergem", "protect", "psybeam", "psychic", "psychup", "psywave", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "splash", "substitute", "sunnyday", "swagger", "swift", "taunt", "thief", "thunderwave", "torment", "toxic", "trick", "trickroom", "uproar", "zenheadbutt"]
    },
    Grumpig:
    {
        id: 326,
        uid: 363,
        name: "Grumpig",
        abilities: ["thickfat", "owntempo"],
        types: ["psychic", "???"],
        baseStats: {hp: 80, atk: 45, def: 65, spa: 90, spd: 110, spe: 80},
        weightkg: 71.5,
        movepool: ["attract", "bodyslam", "bounce", "brickbreak", "calmmind", "captivate", "chargebeam", "confuseray", "counter", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "facade", "firepunch", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "headbutt", "healbell", "hiddenpower", "hyperbeam", "icepunch", "icywind", "irontail", "lightscreen", "magiccoat", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "odorsleuth", "payback", "powergem", "protect", "psybeam", "psychic", "psychup", "psywave", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "splash", "substitute", "sunnyday", "swagger", "swift", "taunt", "thief", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Spinda:
    {
        id: 327,
        uid: 364,
        name: "Spinda",
        abilities: ["owntempo", "tangledfeet"],
        types: ["normal", "???"],
        baseStats: {hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60},
        weightkg: 5,
        movepool: ["assist", "attract", "batonpass", "bodyslam", "brickbreak", "calmmind", "captivate", "copycat", "counter", "defensecurl", "dig", "disable", "dizzypunch", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "encore", "endure", "facade", "fakeout", "feintattack", "firepunch", "flail", "flash", "fling", "focuspunch", "frustration", "headbutt", "helpinghand", "hiddenpower", "hypnosis", "icepunch", "icywind", "lastresort", "lowkick", "megakick", "megapunch", "metronome", "mimic", "mudslap", "naturalgift", "nightmare", "protect", "psybeam", "psychic", "psychocut", "psychup", "raindance", "recycle", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roleplay", "rollout", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "sing", "skillswap", "sleeptalk", "smellingsalts", "snatch", "snore", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "tackle", "teeterdance", "thief", "thrash", "thunderpunch", "toxic", "trick", "trickroom", "uproar", "waterpulse", "wish", "zenheadbutt"]
    },
    Cacnea:
    {
        id: 331,
        uid: 365,
        name: "Cacnea",
        abilities: ["sandveil"],
        types: ["grass", "???"],
        baseStats: {hp: 50, atk: 85, def: 40, spa: 85, spd: 40, spe: 35},
        weightkg: 51.3,
        movepool: ["absorb", "acid", "attract", "bodyslam", "brickbreak", "bulletseed", "captivate", "cottonspore", "counter", "cut", "darkpulse", "destinybond", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "encore", "endure", "energyball", "facade", "feintattack", "flash", "fling", "focuspunch", "frustration", "furycutter", "gigadrain", "grassknot", "grasswhistle", "growth", "headbutt", "hiddenpower", "ingrain", "leechseed", "leer", "lowkick", "magicalleaf", "megapunch", "mimic", "mudslap", "nastyplot", "naturalgift", "needlearm", "payback", "pinmissile", "poisonjab", "poisonsting", "protect", "rest", "return", "roleplay", "sandattack", "sandstorm", "secretpower", "seedbomb", "seismictoss", "sleeptalk", "smellingsalts", "snore", "solarbeam", "spikes", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swordsdance", "synthesis", "teeterdance", "thunderpunch", "toxic", "worryseed"]
    },
    Cacturne:
    {
        id: 332,
        uid: 366,
        name: "Cacturne",
        abilities: ["sandveil"],
        types: ["grass", "dark"],
        baseStats: {hp: 70, atk: 115, def: 60, spa: 115, spd: 60, spe: 55},
        weightkg: 77.4,
        movepool: ["absorb", "attract", "bodyslam", "brickbreak", "bulletseed", "captivate", "cottonspore", "counter", "cut", "darkpulse", "destinybond", "doubleedge", "doubleteam", "drainpunch", "dynamicpunch", "embargo", "endure", "energyball", "facade", "feintattack", "flash", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "growth", "headbutt", "hiddenpower", "hyperbeam", "ingrain", "leechseed", "leer", "lowkick", "megakick", "megapunch", "mimic", "mudslap", "naturalgift", "needlearm", "payback", "pinmissile", "poisonjab", "poisonsting", "protect", "rest", "return", "revenge", "roleplay", "sandattack", "sandstorm", "secretpower", "seedbomb", "seismictoss", "sleeptalk", "snore", "solarbeam", "spikes", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "superpower", "swagger", "swordsdance", "synthesis", "thunderpunch", "toxic", "worryseed"]
    },
    Swablu:
    {
        id: 333,
        uid: 367,
        name: "Swablu",
        abilities: ["naturalcure"],
        types: ["normal", "flying"],
        baseStats: {hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50},
        weightkg: 1.2,
        movepool: ["aerialace", "agility", "aircutter", "astonish", "attract", "bodyslam", "captivate", "doubleedge", "doubleteam", "dragonpulse", "dragonrush", "dreameater", "endure", "facade", "falseswipe", "featherdance", "fly", "frustration", "furyattack", "growl", "haze", "healbell", "heatwave", "hiddenpower", "icebeam", "mimic", "mirrormove", "mist", "mudslap", "naturalgift", "ominouswind", "outrage", "peck", "perishsong", "pluck", "powerswap", "protect", "psychup", "pursuit", "rage", "raindance", "refresh", "rest", "return", "roost", "safeguard", "secretpower", "sing", "skyattack", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "takedown", "thief", "toxic", "twister", "uproar"]
    },
    Altaria:
    {
        id: 334,
        uid: 368,
        name: "Altaria",
        abilities: ["naturalcure"],
        types: ["dragon", "flying"],
        baseStats: {hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80},
        weightkg: 20.6,
        movepool: ["aerialace", "aircutter", "astonish", "attract", "bodyslam", "captivate", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragondance", "dragonpulse", "dreameater", "earthquake", "endure", "facade", "fireblast", "flamethrower", "fly", "frustration", "furyattack", "gigaimpact", "growl", "healbell", "heatwave", "hiddenpower", "hyperbeam", "icebeam", "irontail", "mimic", "mist", "mudslap", "naturalgift", "ominouswind", "outrage", "peck", "perishsong", "pluck", "protect", "psychup", "raindance", "refresh", "rest", "return", "roar", "rocksmash", "roost", "safeguard", "secretpower", "sing", "skyattack", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tailwind", "takedown", "thief", "toxic", "twister", "uproar"]
    },
    Zangoose:
    {
        id: 335,
        uid: 369,
        name: "Zangoose",
        abilities: ["immunity"],
        types: ["normal", "???"],
        baseStats: {hp: 73, atk: 115, def: 60, spa: 60, spd: 60, spe: 90},
        weightkg: 40.3,
        movepool: ["aerialace", "attract", "blizzard", "bodyslam", "brickbreak", "captivate", "closecombat", "counter", "crushclaw", "curse", "defensecurl", "detect", "dig", "disable", "doubleedge", "doublehit", "doublekick", "doubleteam", "dynamicpunch", "embargo", "endeavor", "endure", "facade", "falseswipe", "fireblast", "firepunch", "flail", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "furyswipes", "gigadrain", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "lastresort", "leer", "lowkick", "megakick", "megapunch", "metalclaw", "mimic", "mudslap", "naturalgift", "nightslash", "payback", "poisonjab", "protect", "pursuit", "quickattack", "raindance", "razorwind", "refresh", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "scratch", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shockwave", "slash", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "waterpulse", "xscissor"]
    },
    Seviper:
    {
        id: 336,
        uid: 370,
        name: "Seviper",
        abilities: ["shedskin"],
        types: ["poison", "???"],
        baseStats: {hp: 73, atk: 100, def: 60, spa: 100, spd: 60, spe: 65},
        weightkg: 52.5,
        movepool: ["aquatail", "assurance", "attract", "bite", "bodyslam", "captivate", "crunch", "darkpulse", "dig", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "flamethrower", "frustration", "furycutter", "gigadrain", "glare", "haze", "headbutt", "hiddenpower", "irontail", "knockoff", "lick", "mimic", "mudslap", "naturalgift", "nightslash", "payback", "poisonfang", "poisonjab", "poisontail", "protect", "raindance", "rest", "return", "rocksmash", "scaryface", "screech", "secretpower", "sleeptalk", "sludgebomb", "snatch", "snore", "spitup", "stockpile", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swallow", "swift", "switcheroo", "taunt", "thief", "toxic", "wrap", "wringout", "xscissor"]
    },
    Barboach:
    {
        id: 339,
        uid: 371,
        name: "Barboach",
        abilities: ["oblivious", "anticipation"],
        types: ["water", "ground"],
        baseStats: {hp: 50, atk: 48, def: 43, spa: 46, spd: 41, spe: 60},
        weightkg: 1.9,
        movepool: ["amnesia", "aquatail", "attract", "blizzard", "bounce", "captivate", "dive", "doubleedge", "doubleteam", "dragondance", "earthpower", "earthquake", "endure", "facade", "fissure", "flail", "frustration", "futuresight", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icywind", "magnitude", "mimic", "mudbomb", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "rocktomb", "sandstorm", "secretpower", "sleeptalk", "snore", "spark", "substitute", "surf", "swagger", "takedown", "thrash", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool"]
    },
    Whiscash:
    {
        id: 340,
        uid: 372,
        name: "Whiscash",
        abilities: ["oblivious", "anticipation"],
        types: ["water", "ground"],
        baseStats: {hp: 110, atk: 78, def: 73, spa: 76, spd: 71, spe: 60},
        weightkg: 23.6,
        movepool: ["amnesia", "aquatail", "attract", "blizzard", "bounce", "captivate", "dive", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "fissure", "frustration", "futuresight", "gigaimpact", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icywind", "magnitude", "mimic", "mudbomb", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "sleeptalk", "snore", "stoneedge", "strength", "substitute", "surf", "swagger", "tickle", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool", "zenheadbutt"]
    },
    Corphish:
    {
        id: 341,
        uid: 373,
        name: "Corphish",
        abilities: ["hypercutter", "shellarmor"],
        types: ["water", "???"],
        baseStats: {hp: 43, atk: 80, def: 65, spa: 50, spd: 35, spe: 35},
        weightkg: 11.5,
        movepool: ["aerialace", "ancientpower", "attract", "blizzard", "bodyslam", "brickbreak", "bubble", "bubblebeam", "captivate", "counter", "crabhammer", "crunch", "cut", "dig", "doubleedge", "doubleteam", "dragondance", "endeavor", "endure", "facade", "falseswipe", "fling", "frustration", "furycutter", "guillotine", "hail", "harden", "hiddenpower", "icebeam", "icywind", "irondefense", "knockoff", "leer", "metalclaw", "mimic", "mudslap", "mudsport", "naturalgift", "nightslash", "payback", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "secretpower", "sleeptalk", "sludgebomb", "snore", "spite", "strength", "substitute", "superpower", "surf", "swagger", "swordsdance", "taunt", "toxic", "visegrip", "waterfall", "waterpulse", "watersport", "whirlpool", "xscissor"]
    },
    Crawdaunt:
    {
        id: 342,
        uid: 374,
        name: "Crawdaunt",
        abilities: ["hypercutter", "shellarmor"],
        types: ["water", "dark"],
        baseStats: {hp: 63, atk: 120, def: 85, spa: 90, spd: 55, spe: 55},
        weightkg: 32.8,
        movepool: ["aerialace", "ancientpower", "attract", "avalanche", "blizzard", "bodyslam", "brickbreak", "bubble", "bubblebeam", "captivate", "counter", "crabhammer", "crunch", "cut", "darkpulse", "dig", "dive", "doubleedge", "doubleteam", "endeavor", "endure", "facade", "falseswipe", "fling", "frustration", "furycutter", "gigaimpact", "guillotine", "hail", "harden", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irondefense", "knockoff", "leer", "mimic", "mudslap", "naturalgift", "nightslash", "payback", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "secretpower", "sleeptalk", "sludgebomb", "snore", "spite", "strength", "substitute", "superpower", "surf", "swagger", "swift", "swordsdance", "taunt", "toxic", "visegrip", "waterfall", "waterpulse", "whirlpool", "xscissor"]
    },
    Baltoy:
    {
        id: 343,
        uid: 375,
        name: "Baltoy",
        abilities: ["levitate"],
        types: ["ground", "psychic"],
        baseStats: {hp: 40, atk: 40, def: 55, spa: 40, spd: 70, spe: 55},
        weightkg: 21.5,
        movepool: ["ancientpower", "calmmind", "chargebeam", "confusion", "cosmicpower", "dig", "doubleedge", "doubleteam", "dreameater", "earthpower", "earthquake", "endure", "explosion", "facade", "flash", "frustration", "grassknot", "gravity", "gyroball", "harden", "headbutt", "healblock", "hiddenpower", "icebeam", "lightscreen", "magiccoat", "mimic", "mudslap", "naturalgift", "powertrick", "protect", "psybeam", "psychic", "psychup", "raindance", "rapidspin", "recycle", "reflect", "refresh", "rest", "return", "rockpolish", "rockslide", "rocktomb", "safeguard", "sandstorm", "secretpower", "selfdestruct", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "stealthrock", "substitute", "sunnyday", "swagger", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Claydol:
    {
        id: 344,
        uid: 376,
        name: "Claydol",
        abilities: ["levitate"],
        types: ["ground", "psychic"],
        baseStats: {hp: 60, atk: 70, def: 105, spa: 70, spd: 120, spe: 75},
        weightkg: 108,
        movepool: ["ancientpower", "calmmind", "chargebeam", "confusion", "cosmicpower", "dig", "doubleedge", "doubleteam", "dreameater", "earthpower", "earthquake", "endure", "explosion", "facade", "flash", "frustration", "gigaimpact", "grassknot", "gravity", "gyroball", "harden", "headbutt", "healblock", "hiddenpower", "hyperbeam", "icebeam", "lightscreen", "magiccoat", "mimic", "mudslap", "naturalgift", "powertrick", "protect", "psybeam", "psychic", "psychup", "raindance", "rapidspin", "recycle", "reflect", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "selfdestruct", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "teleport", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Lileep:
    {
        id: 345,
        uid: 377,
        name: "Lileep",
        abilities: ["suctioncups"],
        types: ["rock", "grass"],
        baseStats: {hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23},
        weightkg: 23.8,
        movepool: ["acid", "amnesia", "ancientpower", "astonish", "attract", "barrier", "bodyslam", "bulletseed", "captivate", "confuseray", "constrict", "curse", "doubleedge", "doubleteam", "earthpower", "endure", "energyball", "facade", "flash", "frustration", "gastroacid", "gigadrain", "grassknot", "hiddenpower", "ingrain", "mimic", "mirrorcoat", "mudslap", "naturalgift", "painsplit", "protect", "psychup", "recover", "rest", "return", "rockpolish", "rockslide", "rocktomb", "sandstorm", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spitup", "stealthrock", "stockpile", "stringshot", "substitute", "sunnyday", "swagger", "swallow", "swordsdance", "synthesis", "tickle", "toxic", "worryseed", "wringout"]
    },
    Cradily:
    {
        id: 346,
        uid: 378,
        name: "Cradily",
        abilities: ["suctioncups"],
        types: ["rock", "grass"],
        baseStats: {hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43},
        weightkg: 60.4,
        movepool: ["acid", "amnesia", "ancientpower", "astonish", "attract", "block", "bodyslam", "bulletseed", "captivate", "confuseray", "constrict", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "energyball", "facade", "flash", "frustration", "gastroacid", "gigadrain", "gigaimpact", "grassknot", "headbutt", "hiddenpower", "hyperbeam", "ingrain", "mimic", "mudslap", "naturalgift", "painsplit", "protect", "psychup", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "seedbomb", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spitup", "stealthrock", "stockpile", "stoneedge", "strength", "stringshot", "substitute", "sunnyday", "swagger", "swallow", "swordsdance", "synthesis", "toxic", "worryseed", "wringout"]
    },
    Anorith:
    {
        id: 347,
        uid: 379,
        name: "Anorith",
        abilities: ["battlearmor"],
        types: ["rock", "bug"],
        baseStats: {hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75},
        weightkg: 12.5,
        movepool: ["aerialace", "ancientpower", "attract", "bodyslam", "brickbreak", "captivate", "crosspoison", "crushclaw", "curse", "cut", "dig", "doubleedge", "doubleteam", "earthpower", "endure", "facade", "falseswipe", "frustration", "furycutter", "harden", "headbutt", "hiddenpower", "irondefense", "knockoff", "metalclaw", "mimic", "mudslap", "mudsport", "naturalgift", "protect", "rapidspin", "rest", "return", "rockblast", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "scratch", "screech", "secretpower", "slash", "sleeptalk", "snore", "stealthrock", "stringshot", "substitute", "sunnyday", "swagger", "swordsdance", "toxic", "watergun", "waterpulse", "xscissor"]
    },
    Armaldo:
    {
        id: 348,
        uid: 380,
        name: "Armaldo",
        abilities: ["battlearmor"],
        types: ["rock", "bug"],
        baseStats: {hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 45},
        weightkg: 68.2,
        movepool: ["aerialace", "ancientpower", "aquatail", "attract", "block", "bodyslam", "brickbreak", "captivate", "crushclaw", "cut", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "falseswipe", "flashcannon", "frustration", "furycutter", "gigaimpact", "harden", "headbutt", "hiddenpower", "hyperbeam", "irondefense", "irontail", "knockoff", "lowkick", "metalclaw", "mimic", "mudslap", "mudsport", "naturalgift", "protect", "rest", "return", "rockblast", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scratch", "secretpower", "seismictoss", "slash", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "stringshot", "substitute", "sunnyday", "superpower", "swagger", "swordsdance", "toxic", "watergun", "waterpulse", "xscissor"]
    },
    Feebas:
    {
        id: 349,
        uid: 381,
        name: "Feebas",
        abilities: ["swiftswim", "oblivious"],
        types: ["water", "???"],
        baseStats: {hp: 20, atk: 15, def: 20, spa: 10, spd: 55, spe: 80},
        weightkg: 7.4,
        movepool: ["attract", "blizzard", "captivate", "confuseray", "dive", "doubleedge", "doubleteam", "dragonbreath", "endure", "facade", "flail", "frustration", "hail", "haze", "hiddenpower", "hypnosis", "icebeam", "icywind", "lightscreen", "mimic", "mirrorcoat", "mist", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "secretpower", "sleeptalk", "snore", "splash", "substitute", "surf", "swagger", "swift", "tackle", "tickle", "toxic", "waterfall", "waterpulse", "whirlpool"]
    },
    "Castform-Snowy":
    {
        id: 351,
        uid: 382,
        name: "Castform-Snowy",
        baseSpecies: "Castform",
        form: "Snowy",
        abilities: ["forecast"],
        types: ["ice", "???"],
        baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
        weightkg: 0.8,
        movepool: ["amnesia", "attract", "avalanche", "blizzard", "bodyslam", "captivate", "defensecurl", "disable", "doubleedge", "doubleteam", "ember", "endure", "energyball", "facade", "fireblast", "flamethrower", "flash", "frustration", "futuresight", "hail", "hiddenpower", "icebeam", "icywind", "lastresort", "luckychant", "mimic", "naturalgift", "ominouswind", "powdersnow", "protect", "psychup", "raindance", "rest", "return", "sandstorm", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "watergun", "waterpulse", "weatherball"]
    },
    Shuppet:
    {
        id: 353,
        uid: 383,
        name: "Shuppet",
        abilities: ["insomnia", "frisk"],
        types: ["ghost", "???"],
        baseStats: {hp: 44, atk: 75, def: 35, spa: 63, spd: 33, spe: 45},
        weightkg: 2.3,
        movepool: ["astonish", "attract", "bodyslam", "calmmind", "captivate", "chargebeam", "confuseray", "curse", "darkpulse", "destinybond", "disable", "doubleedge", "doubleteam", "dreameater", "embargo", "endure", "facade", "feintattack", "flash", "foresight", "frustration", "grudge", "headbutt", "hiddenpower", "icywind", "imprison", "knockoff", "magiccoat", "mimic", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "pursuit", "raindance", "rest", "return", "roleplay", "screech", "secretpower", "shadowball", "shadowsneak", "shockwave", "skillswap", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "trick", "trickroom", "willowisp"]
    },
    Banette:
    {
        id: 354,
        uid: 384,
        name: "Banette",
        abilities: ["insomnia", "frisk"],
        types: ["ghost", "???"],
        baseStats: {hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65},
        weightkg: 12.5,
        movepool: ["attract", "bodyslam", "calmmind", "captivate", "chargebeam", "curse", "darkpulse", "doubleedge", "doubleteam", "dreameater", "embargo", "endure", "facade", "feintattack", "flash", "fling", "frustration", "gigaimpact", "grudge", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icywind", "knockoff", "magiccoat", "metronome", "mimic", "mudslap", "naturalgift", "nightmare", "nightshade", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "raindance", "rest", "return", "roleplay", "screech", "secretpower", "shadowball", "shadowclaw", "shadowsneak", "shockwave", "skillswap", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "trick", "trickroom", "willowisp"]
    },
    Tropius:
    {
        id: 357,
        uid: 385,
        name: "Tropius",
        abilities: ["chlorophyll", "solarpower"],
        types: ["grass", "flying"],
        baseStats: {hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51},
        weightkg: 100,
        movepool: ["aerialace", "aircutter", "airslash", "attract", "bodyslam", "bulletseed", "captivate", "curse", "cut", "defog", "doubleedge", "doubleteam", "dragondance", "earthquake", "endure", "energyball", "facade", "flash", "fly", "frustration", "furycutter", "gigadrain", "gigaimpact", "grassknot", "growth", "gust", "headbutt", "hiddenpower", "hyperbeam", "leafblade", "leafstorm", "leechseed", "leer", "magicalleaf", "mimic", "mudslap", "naturalgift", "naturepower", "ominouswind", "outrage", "protect", "razorleaf", "razorwind", "rest", "return", "roar", "rocksmash", "roost", "safeguard", "secretpower", "silverwind", "slam", "sleeptalk", "snore", "solarbeam", "steelwing", "stomp", "strength", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tailwind", "toxic", "twister", "whirlwind", "worryseed"]
    },
    Absol:
    {
        id: 359,
        uid: 386,
        name: "Absol",
        abilities: ["pressure", "superluck"],
        types: ["dark", "???"],
        baseStats: {hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75},
        weightkg: 47,
        movepool: ["aerialace", "assurance", "attract", "batonpass", "bite", "blizzard", "bodyslam", "bounce", "calmmind", "captivate", "chargebeam", "counter", "curse", "cut", "darkpulse", "detect", "doubleedge", "doubleteam", "dreameater", "endure", "facade", "falseswipe", "feint", "feintattack", "fireblast", "flamethrower", "flash", "frustration", "furycutter", "futuresight", "gigaimpact", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "knockoff", "leer", "magiccoat", "meanlook", "mefirst", "megahorn", "mimic", "mudslap", "naturalgift", "nightmare", "nightslash", "payback", "perishsong", "protect", "psychocut", "psychup", "punishment", "pursuit", "quickattack", "raindance", "razorwind", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roleplay", "sandstorm", "scratch", "secretpower", "shadowball", "shadowclaw", "shockwave", "slash", "sleeptalk", "snatch", "snore", "spite", "stoneedge", "strength", "substitute", "suckerpunch", "sunnyday", "superpower", "swagger", "swift", "swordsdance", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "waterpulse", "willowisp", "wish", "xscissor", "zenheadbutt"]
    },
    Wynaut:
    {
        id: 360,
        uid: 387,
        name: "Wynaut",
        abilities: ["shadowtag"],
        types: ["psychic", "???"],
        baseStats: {hp: 95, atk: 23, def: 48, spa: 23, spd: 48, spe: 23},
        weightkg: 14,
        movepool: ["charm", "counter", "destinybond", "encore", "mirrorcoat", "safeguard", "splash", "tickle"]
    },
    Snorunt:
    {
        id: 361,
        uid: 388,
        name: "Snorunt",
        abilities: ["innerfocus", "icebody"],
        types: ["ice", "???"],
        baseStats: {hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
        weightkg: 16.8,
        movepool: ["attract", "avalanche", "bide", "bite", "blizzard", "block", "bodyslam", "captivate", "crunch", "disable", "doubleedge", "doubleteam", "endure", "facade", "flash", "frustration", "hail", "headbutt", "hiddenpower", "icebeam", "icefang", "iceshard", "icywind", "leer", "lightscreen", "mimic", "naturalgift", "powdersnow", "protect", "raindance", "rest", "return", "rollout", "safeguard", "secretpower", "shadowball", "sing", "sleeptalk", "snore", "spikes", "spite", "substitute", "swagger", "toxic", "waterpulse", "weatherball"]
    },
    Glalie:
    {
        id: 362,
        uid: 389,
        name: "Glalie",
        abilities: ["innerfocus", "icebody"],
        types: ["ice", "???"],
        baseStats: {hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80},
        weightkg: 256.5,
        movepool: ["attract", "avalanche", "bite", "blizzard", "block", "bodyslam", "captivate", "crunch", "darkpulse", "defensecurl", "doubleedge", "doubleteam", "earthquake", "endure", "explosion", "facade", "flash", "frustration", "gigaimpact", "gyroball", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icefang", "icywind", "ironhead", "leer", "lightscreen", "mimic", "naturalgift", "payback", "powdersnow", "protect", "raindance", "rest", "return", "rollout", "safeguard", "secretpower", "selfdestruct", "shadowball", "sheercold", "signalbeam", "sleeptalk", "snore", "spite", "substitute", "superfang", "swagger", "taunt", "torment", "toxic", "waterpulse"]
    },
    Spheal:
    {
        id: 363,
        uid: 390,
        name: "Spheal",
        abilities: ["thickfat", "icebody"],
        types: ["ice", "water"],
        baseStats: {hp: 70, atk: 40, def: 50, spa: 55, spd: 50, spe: 25},
        weightkg: 39.5,
        movepool: ["aquaring", "aquatail", "attract", "aurorabeam", "blizzard", "bodyslam", "brine", "captivate", "charm", "curse", "defensecurl", "dive", "doubleedge", "doubleteam", "earthquake", "encore", "endure", "facade", "fissure", "frustration", "growl", "hail", "headbutt", "hiddenpower", "iceball", "icebeam", "icywind", "irontail", "mimic", "mudslap", "naturalgift", "powdersnow", "protect", "raindance", "rest", "return", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "sheercold", "signalbeam", "sleeptalk", "snore", "spitup", "stockpile", "strength", "substitute", "superfang", "surf", "swagger", "swallow", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool", "yawn"]
    },
    Sealeo:
    {
        id: 364,
        uid: 391,
        name: "Sealeo",
        abilities: ["thickfat", "icebody"],
        types: ["ice", "water"],
        baseStats: {hp: 90, atk: 60, def: 70, spa: 75, spd: 70, spe: 45},
        weightkg: 87.6,
        movepool: ["aquatail", "attract", "aurorabeam", "blizzard", "bodyslam", "brine", "captivate", "defensecurl", "dive", "doubleedge", "doubleteam", "earthquake", "encore", "endure", "facade", "frustration", "growl", "hail", "headbutt", "hiddenpower", "iceball", "icebeam", "icywind", "irontail", "mimic", "mudslap", "naturalgift", "powdersnow", "protect", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "sheercold", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "superfang", "surf", "swagger", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Walrein:
    {
        id: 365,
        uid: 392,
        name: "Walrein",
        abilities: ["thickfat", "icebody"],
        types: ["ice", "water"],
        baseStats: {hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65},
        weightkg: 150.6,
        movepool: ["aquatail", "attract", "aurorabeam", "avalanche", "blizzard", "block", "bodyslam", "brine", "captivate", "crunch", "defensecurl", "dive", "doubleedge", "doubleteam", "earthquake", "encore", "endure", "facade", "frustration", "furycutter", "gigaimpact", "growl", "hail", "headbutt", "hiddenpower", "hyperbeam", "iceball", "icebeam", "icefang", "icywind", "ironhead", "irontail", "mimic", "mudslap", "naturalgift", "powdersnow", "protect", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "rollout", "secretpower", "sheercold", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "superfang", "surf", "swagger", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Clamperl:
    {
        id: 366,
        uid: 393,
        name: "Clamperl",
        abilities: ["shellarmor"],
        types: ["water", "???"],
        baseStats: {hp: 35, atk: 64, def: 85, spa: 74, spd: 55, spe: 32},
        weightkg: 52.5,
        movepool: ["aquaring", "attract", "barrier", "blizzard", "bodyslam", "brine", "captivate", "clamp", "confuseray", "dive", "doubleedge", "doubleteam", "endure", "facade", "frustration", "hail", "hiddenpower", "icebeam", "icywind", "irondefense", "mimic", "muddywater", "mudsport", "naturalgift", "protect", "raindance", "refresh", "rest", "return", "secretpower", "sleeptalk", "snore", "substitute", "supersonic", "surf", "swagger", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Huntail:
    {
        id: 367,
        uid: 394,
        name: "Huntail",
        abilities: ["swiftswim"],
        types: ["water", "???"],
        baseStats: {hp: 55, atk: 104, def: 105, spa: 94, spd: 75, spe: 52},
        weightkg: 27,
        movepool: ["aquatail", "attract", "batonpass", "bite", "blizzard", "bodyslam", "bounce", "brine", "captivate", "crunch", "dive", "doubleedge", "doubleteam", "endure", "facade", "frustration", "gigaimpact", "hail", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icefang", "icywind", "mimic", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "rocktomb", "scaryface", "screech", "secretpower", "sleeptalk", "snatch", "snore", "substitute", "suckerpunch", "superfang", "surf", "swagger", "swift", "toxic", "waterfall", "waterpulse", "whirlpool"]
    },
    Gorebyss:
    {
        id: 368,
        uid: 395,
        name: "Gorebyss",
        abilities: ["swiftswim"],
        types: ["water", "???"],
        baseStats: {hp: 55, atk: 84, def: 105, spa: 114, spd: 75, spe: 52},
        weightkg: 22.6,
        movepool: ["agility", "amnesia", "aquaring", "aquatail", "attract", "batonpass", "blizzard", "bodyslam", "bounce", "brine", "captivate", "confusion", "dive", "doubleedge", "doubleteam", "endure", "facade", "frustration", "gigaimpact", "hail", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "mimic", "mudslap", "naturalgift", "protect", "psychic", "psychup", "raindance", "rest", "return", "safeguard", "secretpower", "shadowball", "signalbeam", "sleeptalk", "snore", "substitute", "surf", "swagger", "swift", "toxic", "waterfall", "waterpulse", "whirlpool"]
    },
    Relicanth:
    {
        id: 369,
        uid: 396,
        name: "Relicanth",
        abilities: ["swiftswim", "rockhead"],
        types: ["water", "rock"],
        baseStats: {hp: 100, atk: 90, def: 130, spa: 45, spd: 65, spe: 55},
        weightkg: 23.4,
        movepool: ["amnesia", "ancientpower", "aquatail", "attract", "blizzard", "bodyslam", "bounce", "brine", "calmmind", "captivate", "dive", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "frustration", "gigaimpact", "hail", "harden", "headbutt", "headsmash", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "magnitude", "mimic", "muddywater", "mudslap", "mudsport", "naturalgift", "protect", "psychup", "raindance", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "skullbash", "sleeptalk", "snore", "stealthrock", "stoneedge", "substitute", "surf", "swagger", "tackle", "takedown", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool", "yawn"]
    },
    Luvdisc:
    {
        id: 370,
        uid: 397,
        name: "Luvdisc",
        abilities: ["swiftswim"],
        types: ["water", "???"],
        baseStats: {hp: 43, atk: 30, def: 55, spa: 40, spd: 65, spe: 97},
        weightkg: 8.7,
        movepool: ["agility", "aquajet", "aquaring", "attract", "blizzard", "bounce", "brine", "captivate", "charm", "dive", "doubleedge", "doubleteam", "endure", "facade", "flail", "frustration", "hail", "hiddenpower", "icebeam", "icywind", "luckychant", "mimic", "mudsport", "naturalgift", "protect", "psychup", "raindance", "rest", "return", "safeguard", "secretpower", "sleeptalk", "snore", "splash", "substitute", "supersonic", "surf", "swagger", "sweetkiss", "swift", "tackle", "takedown", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool"]
    },
    Bagon:
    {
        id: 371,
        uid: 398,
        name: "Bagon",
        abilities: ["rockhead"],
        types: ["dragon", "???"],
        baseStats: {hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50},
        weightkg: 42.1,
        movepool: ["aerialace", "attract", "bite", "bodyslam", "brickbreak", "captivate", "crunch", "cut", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragondance", "dragonpulse", "dragonrage", "dragonrush", "ember", "endure", "facade", "fireblast", "firefang", "flamethrower", "focusenergy", "frustration", "furycutter", "headbutt", "hiddenpower", "hydropump", "irondefense", "leer", "mimic", "mudslap", "naturalgift", "outrage", "protect", "rage", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "scaryface", "secretpower", "shadowclaw", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "thrash", "toxic", "twister", "wish", "zenheadbutt"]
    },
    Shelgon:
    {
        id: 372,
        uid: 399,
        name: "Shelgon",
        abilities: ["rockhead"],
        types: ["dragon", "???"],
        baseStats: {hp: 65, atk: 95, def: 100, spa: 60, spd: 50, spe: 50},
        weightkg: 110.5,
        movepool: ["aerialace", "attract", "bite", "bodyslam", "brickbreak", "captivate", "crunch", "cut", "defensecurl", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "ember", "endure", "facade", "fireblast", "flamethrower", "focusenergy", "frustration", "furycutter", "headbutt", "hiddenpower", "irondefense", "leer", "mimic", "mudslap", "naturalgift", "outrage", "protect", "rage", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "rollout", "scaryface", "secretpower", "shadowclaw", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "toxic", "twister", "zenheadbutt"]
    },
    Salamence:
    {
        id: 373,
        uid: 400,
        name: "Salamence",
        abilities: ["intimidate"],
        types: ["dragon", "flying"],
        baseStats: {hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100},
        weightkg: 102.6,
        movepool: ["aerialace", "aircutter", "aquatail", "attract", "bite", "bodyslam", "brickbreak", "captivate", "crunch", "cut", "defensecurl", "defog", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragondance", "dragonpulse", "earthquake", "ember", "endure", "facade", "fireblast", "firefang", "flamethrower", "fly", "focusenergy", "frustration", "furycutter", "gigaimpact", "headbutt", "heatwave", "hiddenpower", "hydropump", "hyperbeam", "irontail", "leer", "mimic", "mudslap", "naturalgift", "ominouswind", "outrage", "protect", "rage", "raindance", "refresh", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "rollout", "roost", "scaryface", "secretpower", "shadowclaw", "sleeptalk", "snore", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thunderfang", "toxic", "twister", "zenheadbutt"]
    },
    Beldum:
    {
        id: 374,
        uid: 401,
        name: "Beldum",
        abilities: ["clearbody"],
        types: ["steel", "psychic"],
        baseStats: {hp: 40, atk: 55, def: 80, spa: 35, spd: 60, spe: 30},
        weightkg: 95.2,
        movepool: ["headbutt", "irondefense", "ironhead", "takedown", "zenheadbutt"]
    },
    Metang:
    {
        id: 375,
        uid: 402,
        name: "Metang",
        abilities: ["clearbody"],
        types: ["steel", "psychic"],
        baseStats: {hp: 60, atk: 75, def: 100, spa: 55, spd: 80, spe: 50},
        weightkg: 202.5,
        movepool: ["aerialace", "agility", "bodyslam", "brickbreak", "bulletpunch", "confusion", "cut", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "explosion", "facade", "flash", "flashcannon", "frustration", "furycutter", "grassknot", "gravity", "gyroball", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "icywind", "irondefense", "ironhead", "lightscreen", "magnetrise", "metalclaw", "meteormash", "mimic", "mudslap", "naturalgift", "protect", "psychic", "psychup", "pursuit", "raindance", "reflect", "refresh", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "scaryface", "secretpower", "selfdestruct", "shadowball", "signalbeam", "sleeptalk", "sludgebomb", "snore", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "swift", "takedown", "thunderpunch", "toxic", "trick", "zenheadbutt"]
    },
    Metagross:
    {
        id: 376,
        uid: 403,
        name: "Metagross",
        abilities: ["clearbody"],
        types: ["steel", "psychic"],
        baseStats: {hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70},
        weightkg: 550,
        movepool: ["aerialace", "agility", "block", "bodyslam", "brickbreak", "bulletpunch", "confusion", "cut", "defensecurl", "doubleedge", "doubleteam", "dynamicpunch", "earthquake", "endure", "explosion", "facade", "flash", "flashcannon", "frustration", "furycutter", "gigaimpact", "grassknot", "gravity", "gyroball", "hammerarm", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "icywind", "irondefense", "ironhead", "lightscreen", "magnetrise", "metalclaw", "meteormash", "mimic", "mudslap", "naturalgift", "protect", "psychic", "psychup", "pursuit", "raindance", "reflect", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "scaryface", "secretpower", "selfdestruct", "shadowball", "signalbeam", "sleeptalk", "sludgebomb", "snore", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "swift", "takedown", "thunderpunch", "toxic", "trick", "zenheadbutt"]
    },
    Latias:
    {
        id: 380,
        uid: 404,
        name: "Latias",
        abilities: ["levitate"],
        types: ["dragon", "psychic"],
        baseStats: {hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110},
        weightkg: 40,
        movepool: ["aerialace", "attract", "bodyslam", "calmmind", "captivate", "chargebeam", "charm", "cut", "defog", "dive", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "dreameater", "earthquake", "endure", "energyball", "facade", "flash", "fly", "frustration", "furycutter", "gigaimpact", "grassknot", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icywind", "lastresort", "lightscreen", "magiccoat", "mimic", "mistball", "mudslap", "naturalgift", "outrage", "protect", "psychic", "psychoshift", "psychup", "psywave", "raindance", "recover", "reflect", "refresh", "rest", "return", "roar", "roleplay", "roost", "safeguard", "sandstorm", "secretpower", "shadowball", "shadowclaw", "shockwave", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "suckerpunch", "sunnyday", "surf", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "twister", "waterfall", "waterpulse", "watersport", "whirlpool", "wish", "zenheadbutt"]
    },
    Latios:
    {
        id: 381,
        uid: 405,
        name: "Latios",
        abilities: ["levitate"],
        types: ["dragon", "psychic"],
        baseStats: {hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 110},
        weightkg: 60,
        movepool: ["aerialace", "attract", "bodyslam", "calmmind", "captivate", "chargebeam", "cut", "defog", "dive", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragondance", "dragonpulse", "dreameater", "earthquake", "endure", "energyball", "facade", "flash", "fly", "frustration", "furycutter", "gigaimpact", "grassknot", "healblock", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icywind", "lastresort", "lightscreen", "lusterpurge", "magiccoat", "memento", "mimic", "mudslap", "naturalgift", "outrage", "protect", "psychic", "psychoshift", "psychup", "psywave", "raindance", "recover", "reflect", "refresh", "rest", "return", "roar", "roost", "safeguard", "sandstorm", "secretpower", "shadowball", "shadowclaw", "shockwave", "sleeptalk", "snore", "solarbeam", "steelwing", "substitute", "sunnyday", "surf", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "twister", "waterfall", "waterpulse", "whirlpool", "zenheadbutt"]
    },
    Kyogre:
    {
        id: 382,
        uid: 406,
        name: "Kyogre",
        abilities: ["drizzle"],
        types: ["water", "???"],
        baseStats: {hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90},
        weightkg: 352,
        movepool: ["ancientpower", "aquaring", "aquatail", "avalanche", "blizzard", "block", "bodyslam", "brickbreak", "brine", "calmmind", "defensecurl", "dive", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "frustration", "gigaimpact", "hail", "headbutt", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "icywind", "ironhead", "mimic", "muddywater", "mudslap", "naturalgift", "protect", "psychup", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "safeguard", "scaryface", "secretpower", "sheercold", "shockwave", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "surf", "swagger", "swift", "thunder", "thunderbolt", "thunderwave", "toxic", "uproar", "waterfall", "waterpulse", "waterspout", "whirlpool"]
    },
    Groudon:
    {
        id: 383,
        uid: 407,
        name: "Groudon",
        abilities: ["drought"],
        types: ["ground", "???"],
        baseStats: {hp: 100, atk: 150, def: 140, spa: 100, spd: 90, spe: 90},
        weightkg: 950,
        movepool: ["aerialace", "ancientpower", "block", "bodyslam", "brickbreak", "bulkup", "counter", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "dragonclaw", "dragonpulse", "dynamicpunch", "earthpower", "earthquake", "endure", "eruption", "facade", "fireblast", "firepunch", "fissure", "flamethrower", "fling", "focusblast", "frustration", "furycutter", "gigaimpact", "hammerarm", "headbutt", "hiddenpower", "hyperbeam", "ironhead", "irontail", "lavaplume", "megakick", "megapunch", "mimic", "mudshot", "mudslap", "naturalgift", "overheat", "protect", "psychup", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandstorm", "scaryface", "secretpower", "seismictoss", "shadowclaw", "shockwave", "slash", "sleeptalk", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "uproar"]
    },
    Rayquaza:
    {
        id: 384,
        uid: 408,
        name: "Rayquaza",
        abilities: ["airlock"],
        types: ["dragon", "flying"],
        baseStats: {hp: 105, atk: 150, def: 90, spa: 150, spd: 90, spe: 95},
        weightkg: 206.5,
        movepool: ["aerialace", "airslash", "ancientpower", "aquatail", "avalanche", "blizzard", "bodyslam", "brickbreak", "bulkup", "crunch", "dive", "doubleedge", "doubleteam", "dracometeor", "dragonclaw", "dragondance", "dragonpulse", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "fling", "fly", "focusblast", "frustration", "furycutter", "gigaimpact", "gyroball", "headbutt", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "ironhead", "irontail", "mimic", "mudslap", "naturalgift", "outrage", "overheat", "protect", "psychup", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "secretpower", "shadowclaw", "shockwave", "sleeptalk", "snore", "solarbeam", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "twister", "uproar", "waterfall", "waterpulse", "whirlpool"]
    },
    Jirachi:
    {
        id: 385,
        uid: 409,
        name: "Jirachi",
        abilities: ["serenegrace"],
        types: ["steel", "psychic"],
        baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
        weightkg: 1.1,
        movepool: ["aerialace", "ancientpower", "bodyslam", "calmmind", "chargebeam", "confusion", "cosmicpower", "defensecurl", "doomdesire", "doubleedge", "doubleteam", "dracometeor", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "facade", "firepunch", "flash", "flashcannon", "fling", "frustration", "futuresight", "gigaimpact", "grassknot", "gravity", "headbutt", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "icywind", "irondefense", "ironhead", "lastresort", "lightscreen", "magiccoat", "metronome", "mimic", "mudslap", "naturalgift", "nightmare", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "refresh", "rest", "return", "safeguard", "sandstorm", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snore", "stealthrock", "substitute", "sunnyday", "swagger", "swift", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trick", "trickroom", "uproar", "uturn", "waterpulse", "wish", "zenheadbutt"]
    },
    Deoxys:
    {
        id: 386,
        uid: 410,
        name: "Deoxys",
        baseForm: "Normal",
        otherForms: ["deoxysattack", "deoxysdefense", "deoxysspeed"],
        abilities: ["pressure"],
        types: ["psychic", "???"],
        baseStats: {hp: 50, atk: 150, def: 50, spa: 150, spd: 50, spe: 150},
        weightkg: 60.8,
        movepool: ["aerialace", "agility", "amnesia", "avalanche", "bodyslam", "brickbreak", "calmmind", "chargebeam", "cosmicpower", "counter", "cut", "detect", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "extremespeed", "facade", "firepunch", "flash", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "knockoff", "leer", "lightscreen", "lowkick", "magiccoat", "megakick", "megapunch", "meteormash", "mimic", "mirrorcoat", "mudslap", "naturalgift", "nightmare", "nightshade", "poisonjab", "protect", "psychic", "psychoboost", "psychoshift", "psychup", "pursuit", "raindance", "recover", "recycle", "reflect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "solarbeam", "spikes", "stealthrock", "strength", "substitute", "sunnyday", "superpower", "swagger", "swift", "taunt", "teleport", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "waterpulse", "wrap", "zapcannon", "zenheadbutt"]
    },
    "Deoxys-Attack":
    {
        id: 386,
        uid: 411,
        name: "Deoxys-Attack",
        baseSpecies: "Deoxys",
        form: "Attack",
        abilities: ["pressure"],
        types: ["psychic", "???"],
        baseStats: {hp: 50, atk: 180, def: 20, spa: 180, spd: 20, spe: 150},
        weightkg: 60.8,
        movepool: ["aerialace", "agility", "amnesia", "avalanche", "bodyslam", "brickbreak", "calmmind", "chargebeam", "cosmicpower", "counter", "cut", "detect", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "extremespeed", "facade", "firepunch", "flash", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "knockoff", "leer", "lightscreen", "lowkick", "magiccoat", "megakick", "megapunch", "meteormash", "mimic", "mirrorcoat", "mudslap", "naturalgift", "nightmare", "nightshade", "poisonjab", "protect", "psychic", "psychoboost", "psychoshift", "psychup", "pursuit", "raindance", "recover", "recycle", "reflect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "solarbeam", "spikes", "stealthrock", "strength", "substitute", "sunnyday", "superpower", "swagger", "swift", "taunt", "teleport", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "waterpulse", "wrap", "zapcannon", "zenheadbutt"]
    },
    "Deoxys-Defense":
    {
        id: 386,
        uid: 412,
        name: "Deoxys-Defense",
        baseSpecies: "Deoxys",
        form: "Defense",
        abilities: ["pressure"],
        types: ["psychic", "???"],
        baseStats: {hp: 50, atk: 70, def: 160, spa: 70, spd: 160, spe: 90},
        weightkg: 60.8,
        movepool: ["aerialace", "agility", "amnesia", "avalanche", "bodyslam", "brickbreak", "calmmind", "chargebeam", "cosmicpower", "counter", "cut", "detect", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "extremespeed", "facade", "firepunch", "flash", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "knockoff", "leer", "lightscreen", "lowkick", "magiccoat", "megakick", "megapunch", "meteormash", "mimic", "mirrorcoat", "mudslap", "naturalgift", "nightmare", "nightshade", "poisonjab", "protect", "psychic", "psychoboost", "psychoshift", "psychup", "pursuit", "raindance", "recover", "recycle", "reflect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "solarbeam", "spikes", "stealthrock", "strength", "substitute", "sunnyday", "superpower", "swagger", "swift", "taunt", "teleport", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "waterpulse", "wrap", "zapcannon", "zenheadbutt"]
    },
    "Deoxys-Speed":
    {
        id: 386,
        uid: 413,
        name: "Deoxys-Speed",
        baseSpecies: "Deoxys",
        form: "Speed",
        abilities: ["pressure"],
        types: ["psychic", "???"],
        baseStats: {hp: 50, atk: 95, def: 90, spa: 95, spd: 90, spe: 180},
        weightkg: 60.8,
        movepool: ["aerialace", "agility", "amnesia", "avalanche", "bodyslam", "brickbreak", "calmmind", "chargebeam", "cosmicpower", "counter", "cut", "detect", "doubleedge", "doubleteam", "drainpunch", "dreameater", "dynamicpunch", "endure", "energyball", "extremespeed", "facade", "firepunch", "flash", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "grassknot", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irondefense", "knockoff", "leer", "lightscreen", "lowkick", "magiccoat", "megakick", "megapunch", "meteormash", "mimic", "mirrorcoat", "mudslap", "naturalgift", "nightmare", "nightshade", "poisonjab", "protect", "psychic", "psychoboost", "psychoshift", "psychup", "pursuit", "raindance", "recover", "recycle", "reflect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "roleplay", "safeguard", "secretpower", "seismictoss", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "solarbeam", "spikes", "stealthrock", "strength", "substitute", "sunnyday", "superpower", "swagger", "swift", "taunt", "teleport", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "waterpulse", "wrap", "zapcannon", "zenheadbutt"]
    },
    Turtwig:
    {
        id: 387,
        uid: 414,
        name: "Turtwig",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 55, atk: 68, def: 64, spa: 45, spd: 55, spe: 31},
        weightkg: 10.2,
        movepool: ["absorb", "amnesia", "attract", "bite", "bodyslam", "bulletseed", "captivate", "crunch", "curse", "cut", "doubleedge", "doubleteam", "earthpower", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "grassknot", "growth", "headbutt", "hiddenpower", "irontail", "leafstorm", "leechseed", "lightscreen", "megadrain", "mudslap", "naturalgift", "protect", "razorleaf", "reflect", "rest", "return", "rockclimb", "rocksmash", "safeguard", "sandtomb", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "spitup", "stealthrock", "stockpile", "strength", "substitute", "sunnyday", "superpower", "swagger", "swallow", "swordsdance", "synthesis", "tackle", "thrash", "tickle", "toxic", "withdraw", "worryseed"]
    },
    Grotle:
    {
        id: 388,
        uid: 415,
        name: "Grotle",
        abilities: ["overgrow"],
        types: ["grass", "???"],
        baseStats: {hp: 75, atk: 89, def: 85, spa: 55, spd: 65, spe: 36},
        weightkg: 97,
        movepool: ["absorb", "attract", "bite", "bulletseed", "captivate", "crunch", "curse", "cut", "doubleteam", "earthpower", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "grassknot", "headbutt", "hiddenpower", "irontail", "leafstorm", "leechseed", "lightscreen", "megadrain", "mudslap", "naturalgift", "protect", "razorleaf", "reflect", "rest", "return", "rockclimb", "rocksmash", "safeguard", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "superpower", "swagger", "swordsdance", "synthesis", "tackle", "toxic", "withdraw", "worryseed"]
    },
    Torterra:
    {
        id: 389,
        uid: 416,
        name: "Torterra",
        abilities: ["overgrow"],
        types: ["grass", "ground"],
        baseStats: {hp: 95, atk: 109, def: 105, spa: 75, spd: 85, spe: 56},
        weightkg: 310,
        movepool: ["absorb", "attract", "bite", "block", "bulletseed", "captivate", "crunch", "curse", "cut", "doubleteam", "earthpower", "earthquake", "endure", "energyball", "facade", "flash", "frenzyplant", "frustration", "gigadrain", "gigaimpact", "grassknot", "headbutt", "hiddenpower", "hyperbeam", "ironhead", "irontail", "leafstorm", "leechseed", "lightscreen", "megadrain", "mudslap", "naturalgift", "outrage", "protect", "razorleaf", "reflect", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "swordsdance", "synthesis", "tackle", "toxic", "withdraw", "woodhammer", "worryseed"]
    },
    Chimchar:
    {
        id: 390,
        uid: 417,
        name: "Chimchar",
        abilities: ["blaze"],
        types: ["fire", "???"],
        baseStats: {hp: 44, atk: 58, def: 44, spa: 58, spd: 44, spe: 61},
        weightkg: 6.2,
        movepool: ["aerialace", "assist", "attract", "blazekick", "brickbreak", "bulkup", "captivate", "counter", "cut", "dig", "doublekick", "doubleteam", "ember", "encore", "endeavor", "endure", "facade", "fakeout", "fireblast", "firepunch", "firespin", "flamethrower", "flamewheel", "fling", "focusenergy", "focuspunch", "frustration", "furyswipes", "grassknot", "gunkshot", "headbutt", "heatwave", "helpinghand", "hiddenpower", "irontail", "leer", "lowkick", "mudslap", "nastyplot", "naturalgift", "overheat", "protect", "rest", "return", "rockclimb", "rocksmash", "roleplay", "rollout", "scratch", "secretpower", "shadowclaw", "slackoff", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "taunt", "thunderpunch", "torment", "toxic", "uproar", "uturn", "vacuumwave", "willowisp"]
    },
    Monferno:
    {
        id: 391,
        uid: 418,
        name: "Monferno",
        abilities: ["blaze"],
        types: ["fire", "fighting"],
        baseStats: {hp: 64, atk: 78, def: 52, spa: 78, spd: 52, spe: 81},
        weightkg: 22,
        movepool: ["aerialace", "attract", "brickbreak", "bulkup", "captivate", "closecombat", "cut", "dig", "doubleteam", "ember", "endeavor", "endure", "facade", "feint", "fireblast", "firepunch", "firespin", "flamethrower", "flamewheel", "flareblitz", "fling", "focusblast", "focuspunch", "frustration", "furyswipes", "grassknot", "gunkshot", "headbutt", "heatwave", "helpinghand", "hiddenpower", "irontail", "leer", "lowkick", "machpunch", "mudslap", "naturalgift", "overheat", "poisonjab", "protect", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "rollout", "scratch", "secretpower", "shadowclaw", "slackoff", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "taunt", "thunderpunch", "torment", "toxic", "uturn", "vacuumwave", "willowisp"]
    },
    Infernape:
    {
        id: 392,
        uid: 419,
        name: "Infernape",
        abilities: ["blaze"],
        types: ["fire", "fighting"],
        baseStats: {hp: 76, atk: 104, def: 71, spa: 104, spd: 71, spe: 108},
        weightkg: 55,
        movepool: ["aerialace", "attract", "blastburn", "brickbreak", "bulkup", "calmmind", "captivate", "closecombat", "cut", "dig", "doubleteam", "earthquake", "ember", "endeavor", "endure", "facade", "feint", "fireblast", "firepunch", "firespin", "flamethrower", "flamewheel", "flareblitz", "fling", "focusblast", "focuspunch", "frustration", "furyswipes", "gigaimpact", "grassknot", "gunkshot", "headbutt", "heatwave", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "leer", "lowkick", "machpunch", "mudslap", "naturalgift", "overheat", "poisonjab", "protect", "punishment", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "rollout", "scratch", "secretpower", "shadowclaw", "sleeptalk", "snore", "solarbeam", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "taunt", "thunderpunch", "torment", "toxic", "uturn", "vacuumwave", "willowisp"]
    },
    Piplup:
    {
        id: 393,
        uid: 420,
        name: "Piplup",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 53, atk: 51, def: 53, spa: 61, spd: 56, spe: 40},
        weightkg: 5.2,
        movepool: ["aerialace", "agility", "aquaring", "attract", "bide", "blizzard", "brickbreak", "brine", "bubble", "bubblebeam", "captivate", "cut", "defog", "dig", "dive", "doublehit", "doubleteam", "drillpeck", "endure", "facade", "featherdance", "flail", "fling", "frustration", "furyattack", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icywind", "mist", "mudslap", "mudsport", "naturalgift", "peck", "pluck", "pound", "protect", "raindance", "rest", "return", "rocktomb", "secretpower", "signalbeam", "sleeptalk", "snore", "stealthrock", "substitute", "supersonic", "surf", "swagger", "toxic", "waterfall", "waterpulse", "watersport", "whirlpool", "yawn"]
    },
    Prinplup:
    {
        id: 394,
        uid: 421,
        name: "Prinplup",
        abilities: ["torrent"],
        types: ["water", "???"],
        baseStats: {hp: 64, atk: 66, def: 68, spa: 81, spd: 76, spe: 50},
        weightkg: 23,
        movepool: ["aerialace", "attract", "bide", "blizzard", "brickbreak", "brine", "bubble", "bubblebeam", "captivate", "cut", "defog", "dig", "dive", "doubleteam", "drillpeck", "endure", "facade", "fling", "frustration", "furyattack", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "hydropump", "icebeam", "icywind", "metalclaw", "mist", "mudslap", "naturalgift", "peck", "pluck", "protect", "raindance", "rest", "return", "rocksmash", "rocktomb", "secretpower", "shadowclaw", "signalbeam", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "surf", "swagger", "tackle", "toxic", "waterfall", "waterpulse", "watersport", "whirlpool"]
    },
    Empoleon:
    {
        id: 395,
        uid: 422,
        name: "Empoleon",
        abilities: ["torrent"],
        types: ["water", "steel"],
        baseStats: {hp: 84, atk: 86, def: 88, spa: 111, spd: 101, spe: 60},
        weightkg: 84.5,
        movepool: ["aerialace", "aquajet", "attract", "avalanche", "blizzard", "brickbreak", "brine", "bubble", "bubblebeam", "captivate", "cut", "defog", "dig", "dive", "doubleteam", "drillpeck", "earthquake", "endure", "facade", "flashcannon", "fling", "frustration", "furyattack", "furycutter", "gigaimpact", "grassknot", "growl", "hail", "headbutt", "hiddenpower", "hydrocannon", "hydropump", "hyperbeam", "icebeam", "icywind", "irondefense", "knockoff", "metalclaw", "mist", "mudslap", "naturalgift", "peck", "pluck", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "secretpower", "shadowclaw", "signalbeam", "sleeptalk", "snore", "stealthrock", "steelwing", "strength", "substitute", "surf", "swagger", "swordsdance", "tackle", "toxic", "waterfall", "waterpulse", "whirlpool"]
    },
    Staravia:
    {
        id: 397,
        uid: 423,
        name: "Staravia",
        abilities: ["intimidate"],
        types: ["normal", "flying"],
        baseStats: {hp: 55, atk: 75, def: 50, spa: 40, spd: 40, spe: 80},
        weightkg: 15.5,
        movepool: ["aerialace", "agility", "aircutter", "attract", "bravebird", "captivate", "defog", "doubleteam", "endeavor", "endure", "facade", "fly", "frustration", "growl", "heatwave", "hiddenpower", "mudslap", "naturalgift", "ominouswind", "pluck", "protect", "quickattack", "raindance", "rest", "return", "roost", "secretpower", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "takedown", "thief", "toxic", "twister", "uturn", "whirlwind", "wingattack"]
    },
    Bidoof:
    {
        id: 399,
        uid: 424,
        name: "Bidoof",
        abilities: ["simple", "unaware"],
        types: ["normal", "???"],
        baseStats: {hp: 59, atk: 45, def: 40, spa: 35, spd: 40, spe: 31},
        weightkg: 20,
        movepool: ["amnesia", "aquatail", "attract", "blizzard", "captivate", "chargebeam", "curse", "cut", "defensecurl", "dig", "doubleedge", "doubleteam", "endure", "facade", "frustration", "furycutter", "furyswipes", "grassknot", "growl", "headbutt", "hiddenpower", "hyperfang", "icebeam", "icywind", "irontail", "lastresort", "mudslap", "naturalgift", "odorsleuth", "pluck", "protect", "quickattack", "raindance", "rest", "return", "rocksmash", "rollout", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "stealthrock", "substitute", "sunnyday", "superfang", "superpower", "swagger", "swift", "tackle", "takedown", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "watersport", "yawn"]
    },
    Bibarel:
    {
        id: 400,
        uid: 425,
        name: "Bibarel",
        abilities: ["simple", "unaware"],
        types: ["normal", "water"],
        baseStats: {hp: 79, atk: 85, def: 60, spa: 55, spd: 60, spe: 71},
        weightkg: 31.5,
        movepool: ["amnesia", "aquatail", "attract", "blizzard", "captivate", "chargebeam", "curse", "cut", "defensecurl", "dig", "dive", "doubleteam", "endure", "facade", "fling", "focuspunch", "frustration", "furycutter", "gigaimpact", "grassknot", "growl", "headbutt", "hiddenpower", "hyperbeam", "hyperfang", "icebeam", "icywind", "irontail", "lastresort", "mudslap", "naturalgift", "pluck", "protect", "raindance", "rest", "return", "rockclimb", "rocksmash", "rollout", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "stealthrock", "strength", "substitute", "sunnyday", "superfang", "superpower", "surf", "swagger", "swift", "tackle", "takedown", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "waterfall", "watergun", "waterpulse", "whirlpool", "yawn"]
    },
    Kricketot:
    {
        id: 401,
        uid: 426,
        name: "Kricketot",
        abilities: ["shedskin"],
        types: ["bug", "???"],
        baseStats: {hp: 37, atk: 25, def: 41, spa: 25, spd: 41, spe: 25},
        weightkg: 2.2,
        movepool: ["bide", "bugbite", "endeavor", "growl", "mudslap", "snore", "stringshot", "uproar"]
    },
    Kricketune:
    {
        id: 402,
        uid: 427,
        name: "Kricketune",
        abilities: ["swarm"],
        types: ["bug", "???"],
        baseStats: {hp: 77, atk: 85, def: 51, spa: 55, spd: 51, spe: 65},
        weightkg: 25.5,
        movepool: ["aerialace", "attract", "bide", "brickbreak", "bugbite", "bugbuzz", "captivate", "cut", "doubleteam", "endeavor", "endure", "facade", "falseswipe", "flash", "focusenergy", "frustration", "furycutter", "gigaimpact", "growl", "hiddenpower", "hyperbeam", "knockoff", "leechlife", "mudslap", "naturalgift", "nightslash", "perishsong", "protect", "raindance", "rest", "return", "rocksmash", "screech", "secretpower", "silverwind", "sing", "slash", "sleeptalk", "snore", "strength", "stringshot", "substitute", "sunnyday", "swagger", "swordsdance", "taunt", "toxic", "uproar", "xscissor"]
    },
    Shinx:
    {
        id: 403,
        uid: 428,
        name: "Shinx",
        abilities: ["rivalry", "intimidate"],
        types: ["electric", "???"],
        baseStats: {hp: 45, atk: 65, def: 34, spa: 40, spd: 34, spe: 45},
        weightkg: 9.5,
        movepool: ["attract", "bite", "captivate", "charge", "chargebeam", "crunch", "discharge", "doubleteam", "endure", "facade", "firefang", "flash", "frustration", "furycutter", "headbutt", "hiddenpower", "howl", "icefang", "irontail", "leer", "lightscreen", "magnetrise", "mudslap", "naturalgift", "nightslash", "protect", "quickattack", "raindance", "rest", "return", "roar", "scaryface", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "strength", "substitute", "swagger", "swift", "tackle", "takedown", "thief", "thunder", "thunderbolt", "thunderfang", "thunderwave", "toxic"]
    },
    Luxio:
    {
        id: 404,
        uid: 429,
        name: "Luxio",
        abilities: ["rivalry", "intimidate"],
        types: ["electric", "???"],
        baseStats: {hp: 60, atk: 85, def: 49, spa: 60, spd: 49, spe: 60},
        weightkg: 30.5,
        movepool: ["attract", "bite", "captivate", "charge", "chargebeam", "crunch", "discharge", "doubleteam", "endure", "facade", "flash", "frustration", "furycutter", "headbutt", "hiddenpower", "irontail", "leer", "lightscreen", "magnetrise", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "roar", "scaryface", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "strength", "substitute", "swagger", "swift", "tackle", "thief", "thunder", "thunderbolt", "thunderfang", "thunderwave", "toxic"]
    },
    Luxray:
    {
        id: 405,
        uid: 430,
        name: "Luxray",
        abilities: ["rivalry", "intimidate"],
        types: ["electric", "???"],
        baseStats: {hp: 80, atk: 120, def: 79, spa: 95, spd: 79, spe: 70},
        weightkg: 42,
        movepool: ["attract", "bite", "captivate", "charge", "chargebeam", "crunch", "discharge", "doubleteam", "endure", "facade", "flash", "frustration", "furycutter", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "irontail", "leer", "lightscreen", "magnetrise", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "roar", "scaryface", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "spark", "strength", "substitute", "superpower", "swagger", "swift", "tackle", "thief", "thunder", "thunderbolt", "thunderfang", "thunderwave", "toxic"]
    },
    Budew:
    {
        id: 406,
        uid: 431,
        name: "Budew",
        abilities: ["naturalcure", "poisonpoint"],
        types: ["grass", "poison"],
        baseStats: {hp: 40, atk: 30, def: 35, spa: 50, spd: 70, spe: 55},
        weightkg: 1.2,
        movepool: ["absorb", "attract", "bulletseed", "captivate", "cottonspore", "cut", "doubleteam", "endure", "energyball", "extrasensory", "facade", "flash", "frustration", "gigadrain", "grassknot", "growth", "hiddenpower", "leafstorm", "megadrain", "mindreader", "mudslap", "naturalgift", "pinmissile", "protect", "psychup", "raindance", "razorleaf", "rest", "return", "secretpower", "seedbomb", "shadowball", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spikes", "stunspore", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "synthesis", "toxic", "uproar", "watersport", "worryseed"]
    },
    Cranidos:
    {
        id: 408,
        uid: 432,
        name: "Cranidos",
        abilities: ["moldbreaker"],
        types: ["rock", "???"],
        baseStats: {hp: 67, atk: 125, def: 40, spa: 30, spd: 30, spe: 58},
        weightkg: 31.5,
        movepool: ["ancientpower", "assurance", "attract", "blizzard", "captivate", "crunch", "curse", "dig", "doubleedge", "doubleteam", "dragonpulse", "earthpower", "earthquake", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusenergy", "frustration", "hammerarm", "headbutt", "headsmash", "hiddenpower", "icebeam", "ironhead", "irontail", "leer", "mudslap", "naturalgift", "payback", "protect", "pursuit", "raindance", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "screech", "secretpower", "shockwave", "slam", "sleeptalk", "snore", "spite", "stealthrock", "stomp", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "swordsdance", "takedown", "thief", "thrash", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "whirlwind", "zenheadbutt"]
    },
    Rampardos:
    {
        id: 409,
        uid: 433,
        name: "Rampardos",
        abilities: ["moldbreaker"],
        types: ["rock", "???"],
        baseStats: {hp: 97, atk: 165, def: 60, spa: 65, spd: 50, spe: 58},
        weightkg: 102.5,
        movepool: ["ancientpower", "assurance", "attract", "avalanche", "blizzard", "brickbreak", "captivate", "cut", "dig", "doubleteam", "dragonpulse", "earthpower", "earthquake", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focusenergy", "focuspunch", "frustration", "gigaimpact", "headbutt", "headsmash", "hiddenpower", "hyperbeam", "icebeam", "ironhead", "irontail", "leer", "mudslap", "naturalgift", "outrage", "painsplit", "payback", "protect", "pursuit", "raindance", "rest", "return", "roar", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "screech", "secretpower", "shockwave", "sleeptalk", "snore", "spite", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "swordsdance", "takedown", "thief", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "whirlpool", "zenheadbutt"]
    },
    Shieldon:
    {
        id: 410,
        uid: 434,
        name: "Shieldon",
        abilities: ["sturdy"],
        types: ["rock", "steel"],
        baseStats: {hp: 30, atk: 42, def: 118, spa: 42, spd: 88, spe: 30},
        weightkg: 57,
        movepool: ["ancientpower", "attract", "blizzard", "bodyslam", "captivate", "counter", "curse", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "fireblast", "fissure", "flamethrower", "flashcannon", "focusenergy", "frustration", "headbutt", "hiddenpower", "icebeam", "irondefense", "ironhead", "irontail", "magnetrise", "metalburst", "metalsound", "mudslap", "naturalgift", "protect", "raindance", "rest", "return", "roar", "rockblast", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "screech", "secretpower", "shockwave", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "tackle", "takedown", "taunt", "thunder", "thunderbolt", "torment", "toxic"]
    },
    Bastiodon:
    {
        id: 411,
        uid: 435,
        name: "Bastiodon",
        abilities: ["sturdy"],
        types: ["rock", "steel"],
        baseStats: {hp: 60, atk: 52, def: 168, spa: 47, spd: 138, spe: 30},
        weightkg: 149.5,
        movepool: ["ancientpower", "attract", "avalanche", "blizzard", "block", "captivate", "dig", "doubleteam", "earthpower", "earthquake", "endure", "facade", "fireblast", "flamethrower", "flashcannon", "frustration", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "irondefense", "ironhead", "irontail", "magiccoat", "magnetrise", "metalburst", "metalsound", "mudslap", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "roar", "rockpolish", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "shockwave", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "tackle", "takedown", "taunt", "thunder", "thunderbolt", "torment", "toxic"]
    },
    Mothim:
    {
        id: 414,
        uid: 436,
        name: "Mothim",
        abilities: ["swarm"],
        types: ["bug", "flying"],
        baseStats: {hp: 70, atk: 94, def: 50, spa: 94, spd: 50, spe: 66},
        weightkg: 23.3,
        movepool: ["aerialace", "aircutter", "airslash", "attract", "bugbite", "bugbuzz", "camouflage", "captivate", "confusion", "defog", "doubleteam", "dreameater", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "gust", "hiddenpower", "hyperbeam", "mudslap", "naturalgift", "ominouswind", "poisonpowder", "protect", "psybeam", "psychic", "psychup", "raindance", "rest", "return", "roost", "safeguard", "secretpower", "shadowball", "signalbeam", "silverwind", "skillswap", "sleeptalk", "snore", "solarbeam", "stringshot", "substitute", "sunnyday", "swagger", "swift", "tackle", "tailwind", "thief", "toxic", "twister", "uturn"]
    },
    Combee:
    {
        id: 415,
        uid: 437,
        name: "Combee",
        abilities: ["honeygather"],
        types: ["bug", "flying"],
        baseStats: {hp: 30, atk: 30, def: 42, spa: 30, spd: 42, spe: 70},
        weightkg: 5.5,
        movepool: ["aircutter", "bugbite", "endeavor", "gust", "mudslap", "ominouswind", "snore", "stringshot", "sweetscent", "swift", "tailwind"]
    },
    Vespiquen:
    {
        id: 416,
        uid: 438,
        name: "Vespiquen",
        abilities: ["pressure"],
        types: ["bug", "flying"],
        baseStats: {hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 40},
        weightkg: 38.5,
        movepool: ["aerialace", "aircutter", "attackorder", "attract", "bugbite", "captivate", "confuseray", "cut", "defendorder", "defog", "destinybond", "doubleteam", "endeavor", "endure", "facade", "flash", "fling", "frustration", "furycutter", "furyswipes", "gigaimpact", "gust", "healorder", "hiddenpower", "hyperbeam", "mudslap", "naturalgift", "ominouswind", "poisonsting", "powergem", "protect", "pursuit", "raindance", "rest", "return", "roost", "secretpower", "signalbeam", "silverwind", "slash", "sleeptalk", "sludgebomb", "snore", "stringshot", "substitute", "sunnyday", "swagger", "sweetscent", "swift", "tailwind", "thief", "toxic", "uturn", "xscissor"]
    },
    Pachirisu:
    {
        id: 417,
        uid: 439,
        name: "Pachirisu",
        abilities: ["runaway", "pickup"],
        types: ["electric", "???"],
        baseStats: {hp: 60, atk: 45, def: 70, spa: 45, spd: 90, spe: 95},
        weightkg: 3.9,
        movepool: ["attract", "bide", "bite", "captivate", "chargebeam", "charm", "covet", "cut", "defensecurl", "dig", "discharge", "doubleteam", "endure", "facade", "faketears", "flail", "flash", "flatter", "fling", "frustration", "grassknot", "growl", "gunkshot", "headbutt", "helpinghand", "hiddenpower", "irontail", "lastresort", "lightscreen", "magnetrise", "mudslap", "naturalgift", "protect", "quickattack", "raindance", "rest", "return", "rollout", "secretpower", "seedbomb", "shockwave", "sleeptalk", "snore", "spark", "substitute", "superfang", "swagger", "sweetkiss", "swift", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "uproar", "uturn"]
    },
    Buizel:
    {
        id: 418,
        uid: 440,
        name: "Buizel",
        abilities: ["swiftswim"],
        types: ["water", "???"],
        baseStats: {hp: 55, atk: 65, def: 35, spa: 60, spd: 30, spe: 85},
        weightkg: 29.5,
        movepool: ["agility", "aquajet", "attract", "batonpass", "blizzard", "brickbreak", "brine", "bulkup", "captivate", "dig", "dive", "doubleslap", "doubleteam", "endure", "facade", "focuspunch", "frustration", "furycutter", "furyswipes", "growl", "hail", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "irontail", "mudslap", "naturalgift", "odorsleuth", "protect", "pursuit", "quickattack", "raindance", "razorwind", "rest", "return", "rocksmash", "rocktomb", "secretpower", "slash", "sleeptalk", "snore", "sonicboom", "strength", "substitute", "surf", "swagger", "swift", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool"]
    },
    Floatzel:
    {
        id: 419,
        uid: 441,
        name: "Floatzel",
        abilities: ["swiftswim"],
        types: ["water", "???"],
        baseStats: {hp: 85, atk: 105, def: 55, spa: 85, spd: 50, spe: 115},
        weightkg: 33.5,
        movepool: ["agility", "aquajet", "aquatail", "attract", "blizzard", "brickbreak", "brine", "bulkup", "captivate", "crunch", "dig", "dive", "doubleteam", "endure", "facade", "focusblast", "focuspunch", "frustration", "gigaimpact", "growl", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icefang", "icepunch", "icywind", "irontail", "lowkick", "mudslap", "naturalgift", "payback", "protect", "pursuit", "quickattack", "raindance", "razorwind", "rest", "return", "roar", "rocksmash", "rocktomb", "secretpower", "sleeptalk", "snore", "sonicboom", "strength", "substitute", "surf", "swagger", "swift", "taunt", "torment", "toxic", "waterfall", "watergun", "waterpulse", "watersport", "whirlpool"]
    },
    Cherubi:
    {
        id: 420,
        uid: 442,
        name: "Cherubi",
        abilities: ["chlorophyll"],
        types: ["grass", "???"],
        baseStats: {hp: 45, atk: 35, def: 45, spa: 62, spd: 53, spe: 35},
        weightkg: 3.3,
        movepool: ["aromatherapy", "attract", "bulletseed", "captivate", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "grassknot", "grasswhistle", "growth", "helpinghand", "hiddenpower", "leechseed", "luckychant", "magicalleaf", "naturalgift", "naturepower", "protect", "razorleaf", "rest", "return", "rollout", "safeguard", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetscent", "swordsdance", "synthesis", "tackle", "takedown", "tickle", "toxic", "weatherball", "worryseed"]
    },
    "Cherrim-Sunshine":
    {
        id: 421,
        uid: 443,
        name: "Cherrim-Sunshine",
        baseSpecies: "Cherrim",
        form: "Sunshine",
        abilities: ["flowergift"],
        types: ["grass", "???"],
        baseStats: {hp: 70, atk: 60, def: 70, spa: 87, spd: 78, spe: 85},
        weightkg: 9.3,
        movepool: ["attract", "bulletseed", "captivate", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "growth", "helpinghand", "hiddenpower", "hyperbeam", "leechseed", "luckychant", "magicalleaf", "naturalgift", "petaldance", "protect", "rest", "return", "rollout", "safeguard", "secretpower", "seedbomb", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "tackle", "takedown", "toxic", "worryseed"]
    },
    Shellos:
    {
        id: 422,
        uid: 444,
        name: "Shellos",
        baseForm: "West",
        abilities: ["stickyhold", "stormdrain"],
        types: ["water", "???"],
        baseStats: {hp: 76, atk: 48, def: 48, spa: 57, spd: 62, spe: 34},
        weightkg: 6.3,
        movepool: ["amnesia", "ancientpower", "attract", "blizzard", "bodyslam", "brine", "captivate", "counter", "curse", "dive", "doubleteam", "earthpower", "endure", "facade", "fissure", "frustration", "hail", "harden", "headbutt", "hiddenpower", "icebeam", "icywind", "memento", "mirrorcoat", "mudbomb", "muddywater", "mudslap", "mudsport", "naturalgift", "painsplit", "protect", "raindance", "recover", "rest", "return", "secretpower", "sleeptalk", "sludge", "snore", "spitup", "stockpile", "stringshot", "substitute", "surf", "swagger", "swallow", "toxic", "trumpcard", "waterpulse", "whirlpool", "yawn"]
    },
    Gastrodon:
    {
        id: 423,
        uid: 445,
        name: "Gastrodon",
        baseForm: "West",
        abilities: ["stickyhold", "stormdrain"],
        types: ["water", "ground"],
        baseStats: {hp: 111, atk: 83, def: 68, spa: 92, spd: 82, spe: 39},
        weightkg: 29.9,
        movepool: ["ancientpower", "attract", "blizzard", "block", "bodyslam", "brine", "captivate", "dig", "dive", "doubleteam", "earthpower", "earthquake", "endure", "facade", "flash", "frustration", "gigaimpact", "hail", "harden", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icywind", "mudbomb", "muddywater", "mudslap", "mudsport", "naturalgift", "painsplit", "protect", "raindance", "recover", "rest", "return", "rockslide", "rocksmash", "rocktomb", "sandstorm", "secretpower", "sleeptalk", "sludgebomb", "snore", "stoneedge", "strength", "stringshot", "substitute", "surf", "swagger", "toxic", "waterfall", "waterpulse", "whirlpool"]
    },
    Ambipom:
    {
        id: 424,
        uid: 446,
        name: "Ambipom",
        abilities: ["technician", "pickup"],
        types: ["normal", "???"],
        baseStats: {hp: 75, atk: 100, def: 66, spa: 60, spd: 66, spe: 115},
        weightkg: 20.3,
        movepool: ["aerialace", "agility", "astonish", "attract", "batonpass", "bounce", "brickbreak", "captivate", "cut", "dig", "doublehit", "doubleteam", "dreameater", "endure", "facade", "firepunch", "fling", "focuspunch", "frustration", "furycutter", "furyswipes", "gigaimpact", "grassknot", "gunkshot", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "irontail", "knockoff", "lastresort", "lowkick", "mudslap", "nastyplot", "naturalgift", "payback", "protect", "raindance", "rest", "return", "rocksmash", "roleplay", "sandattack", "scratch", "screech", "secretpower", "seedbomb", "shadowball", "shadowclaw", "shockwave", "sleeptalk", "snatch", "snore", "solarbeam", "spite", "strength", "substitute", "sunnyday", "swagger", "swift", "tailwhip", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "tickle", "toxic", "uproar", "uturn", "waterpulse"]
    },
    Drifloon:
    {
        id: 425,
        uid: 447,
        name: "Drifloon",
        abilities: ["aftermath", "unburden"],
        types: ["ghost", "flying"],
        baseStats: {hp: 90, atk: 50, def: 34, spa: 60, spd: 44, spe: 70},
        weightkg: 1.2,
        movepool: ["aircutter", "astonish", "attract", "batonpass", "bodyslam", "calmmind", "captivate", "chargebeam", "constrict", "cut", "defog", "destinybond", "disable", "doubleteam", "dreameater", "embargo", "endure", "explosion", "facade", "flash", "focusenergy", "frustration", "gust", "gyroball", "haze", "hiddenpower", "hypnosis", "icywind", "knockoff", "magiccoat", "memento", "minimize", "mudslap", "naturalgift", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "raindance", "recycle", "rest", "return", "rollout", "secretpower", "shadowball", "shockwave", "silverwind", "skillswap", "sleeptalk", "snore", "spite", "spitup", "stockpile", "substitute", "suckerpunch", "sunnyday", "swagger", "swallow", "swift", "tailwind", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "weatherball", "willowisp"]
    },
    Drifblim:
    {
        id: 426,
        uid: 448,
        name: "Drifblim",
        abilities: ["aftermath", "unburden"],
        types: ["ghost", "flying"],
        baseStats: {hp: 150, atk: 80, def: 44, spa: 90, spd: 54, spe: 80},
        weightkg: 15,
        movepool: ["aircutter", "astonish", "attract", "batonpass", "calmmind", "captivate", "chargebeam", "constrict", "cut", "defog", "doubleteam", "dreameater", "embargo", "endure", "explosion", "facade", "flash", "fly", "focusenergy", "frustration", "gigaimpact", "gust", "gyroball", "hiddenpower", "hyperbeam", "icywind", "knockoff", "magiccoat", "minimize", "mudslap", "naturalgift", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "raindance", "recycle", "rest", "return", "rollout", "secretpower", "shadowball", "shockwave", "silverwind", "skillswap", "sleeptalk", "snore", "spite", "spitup", "stockpile", "substitute", "suckerpunch", "sunnyday", "swagger", "swallow", "swift", "tailwind", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "willowisp"]
    },
    Buneary:
    {
        id: 427,
        uid: 449,
        name: "Buneary",
        abilities: ["runaway", "klutz"],
        types: ["normal", "???"],
        baseStats: {hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85},
        weightkg: 5.5,
        movepool: ["agility", "attract", "batonpass", "bounce", "captivate", "chargebeam", "charm", "cut", "defensecurl", "dig", "dizzypunch", "doublehit", "doubleteam", "drainpunch", "encore", "endeavor", "endure", "facade", "fakeout", "faketears", "firepunch", "flail", "fling", "focuspunch", "foresight", "frustration", "grassknot", "headbutt", "healbell", "healingwish", "helpinghand", "hiddenpower", "icebeam", "icepunch", "irontail", "jumpkick", "lastresort", "lowkick", "magiccoat", "mudslap", "naturalgift", "pound", "protect", "quickattack", "raindance", "rest", "return", "rocksmash", "secretpower", "shadowball", "shockwave", "skyuppercut", "sleeptalk", "snore", "solarbeam", "splash", "substitute", "sunnyday", "swagger", "sweetkiss", "swift", "switcheroo", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "uproar", "waterpulse"]
    },
    Lopunny:
    {
        id: 428,
        uid: 450,
        name: "Lopunny",
        abilities: ["cutecharm", "klutz"],
        types: ["normal", "???"],
        baseStats: {hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105},
        weightkg: 33.3,
        movepool: ["agility", "attract", "batonpass", "blizzard", "bounce", "captivate", "chargebeam", "charm", "cut", "defensecurl", "dig", "dizzypunch", "doubleteam", "drainpunch", "endeavor", "endure", "facade", "firepunch", "fling", "focusblast", "focuspunch", "foresight", "frustration", "furycutter", "gigaimpact", "grassknot", "headbutt", "healbell", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "irontail", "jumpkick", "lastresort", "lowkick", "magiccoat", "mirrorcoat", "mudslap", "naturalgift", "pound", "protect", "quickattack", "raindance", "rest", "return", "rocksmash", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "splash", "strength", "substitute", "sunnyday", "swagger", "swift", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "uproar", "waterpulse"]
    },
    Mismagius:
    {
        id: 429,
        uid: 451,
        name: "Mismagius",
        abilities: ["levitate"],
        types: ["ghost", "???"],
        baseStats: {hp: 60, atk: 60, def: 60, spa: 105, spd: 105, spe: 105},
        weightkg: 4.4,
        movepool: ["aerialace", "astonish", "attract", "calmmind", "captivate", "chargebeam", "darkpulse", "doubleteam", "dreameater", "embargo", "endure", "energyball", "facade", "flash", "frustration", "gigaimpact", "growl", "headbutt", "healbell", "hiddenpower", "hyperbeam", "icywind", "luckychant", "magicalleaf", "magiccoat", "naturalgift", "ominouswind", "painsplit", "payback", "protect", "psychic", "psychup", "psywave", "raindance", "rest", "return", "secretpower", "shadowball", "shockwave", "skillswap", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "trick", "trickroom", "uproar", "willowisp"]
    },
    Honchkrow:
    {
        id: 430,
        uid: 452,
        name: "Honchkrow",
        abilities: ["insomnia", "superluck"],
        types: ["dark", "flying"],
        baseStats: {hp: 100, atk: 125, def: 52, spa: 105, spd: 52, spe: 71},
        weightkg: 27.3,
        movepool: ["aerialace", "aircutter", "astonish", "attract", "calmmind", "captivate", "darkpulse", "defog", "doubleteam", "dreameater", "embargo", "endure", "facade", "fly", "frustration", "gigaimpact", "haze", "heatwave", "hiddenpower", "hyperbeam", "mudslap", "nastyplot", "naturalgift", "nightslash", "ominouswind", "payback", "pluck", "protect", "psychic", "psychup", "pursuit", "raindance", "rest", "return", "roost", "secretpower", "shadowball", "skyattack", "sleeptalk", "snatch", "spite", "steelwing", "substitute", "suckerpunch", "sunnyday", "superpower", "swagger", "swift", "tailwind", "taunt", "thief", "thunderwave", "torment", "toxic", "twister", "uproar", "wingattack"]
    },
    Glameow:
    {
        id: 431,
        uid: 453,
        name: "Glameow",
        abilities: ["limber", "owntempo"],
        types: ["normal", "???"],
        baseStats: {hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 85},
        weightkg: 3.9,
        movepool: ["aerialace", "assist", "assurance", "attract", "bite", "captivate", "charm", "cut", "dig", "doubleteam", "dreameater", "endure", "facade", "fakeout", "faketears", "feintattack", "flail", "flash", "frustration", "furycutter", "furyswipes", "growl", "headbutt", "hiddenpower", "hypnosis", "irontail", "knockoff", "lastresort", "mudslap", "naturalgift", "payback", "protect", "psychup", "quickattack", "raindance", "rest", "return", "sandattack", "scratch", "secretpower", "shadowball", "shadowclaw", "shockwave", "slash", "sleeptalk", "snatch", "snore", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "swift", "tailwhip", "taunt", "thief", "thunder", "thunderbolt", "torment", "toxic", "uturn", "waterpulse"]
    },
    Purugly:
    {
        id: 432,
        uid: 454,
        name: "Purugly",
        abilities: ["thickfat", "owntempo"],
        types: ["normal", "???"],
        baseStats: {hp: 71, atk: 82, def: 64, spa: 64, spd: 59, spe: 112},
        weightkg: 43.8,
        movepool: ["aerialace", "assist", "attract", "bodyslam", "captivate", "charm", "cut", "dig", "doubleteam", "dreameater", "endure", "facade", "fakeout", "feintattack", "flash", "frustration", "furycutter", "furyswipes", "gigaimpact", "growl", "headbutt", "hiddenpower", "hyperbeam", "hypnosis", "irontail", "knockoff", "lastresort", "mudslap", "naturalgift", "payback", "protect", "psychup", "raindance", "rest", "return", "roar", "rollout", "scratch", "secretpower", "shadowball", "shadowclaw", "shockwave", "slash", "sleeptalk", "snatch", "snore", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "swift", "taunt", "thief", "thunder", "thunderbolt", "torment", "toxic", "uturn", "waterpulse"]
    },
    Chingling:
    {
        id: 433,
        uid: 455,
        name: "Chingling",
        abilities: ["levitate"],
        types: ["psychic", "???"],
        baseStats: {hp: 45, atk: 30, def: 50, spa: 65, spd: 50, spe: 45},
        weightkg: 0.6,
        movepool: ["astonish", "attract", "calmmind", "captivate", "chargebeam", "confusion", "curse", "disable", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "futuresight", "grassknot", "gravity", "growl", "healbell", "helpinghand", "hiddenpower", "hypnosis", "icywind", "knockoff", "lastresort", "lightscreen", "magiccoat", "naturalgift", "protect", "psychic", "psychup", "raindance", "recover", "recycle", "reflect", "rest", "return", "rollout", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snatch", "snore", "substitute", "sunnyday", "swagger", "swift", "taunt", "thunderwave", "torment", "toxic", "trick", "trickroom", "uproar", "wish", "wrap", "zenheadbutt"]
    },
    Stunky:
    {
        id: 434,
        uid: 456,
        name: "Stunky",
        abilities: ["stench", "aftermath"],
        types: ["poison", "dark"],
        baseStats: {hp: 63, atk: 63, def: 47, spa: 41, spd: 41, spe: 74},
        weightkg: 19.2,
        movepool: ["astonish", "attract", "captivate", "crunch", "cut", "darkpulse", "defog", "dig", "doubleedge", "doubleteam", "endure", "explosion", "facade", "feint", "fireblast", "flamethrower", "focusenergy", "frustration", "furycutter", "furyswipes", "haze", "headbutt", "hiddenpower", "irontail", "leer", "memento", "mudslap", "naturalgift", "nightslash", "payback", "poisongas", "protect", "punishment", "pursuit", "raindance", "rest", "return", "roar", "rocksmash", "scaryface", "scratch", "screech", "secretpower", "shadowball", "shadowclaw", "slash", "sleeptalk", "sludgebomb", "smog", "smokescreen", "snatch", "snore", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "taunt", "thief", "torment", "toxic"]
    },
    Skuntank:
    {
        id: 435,
        uid: 457,
        name: "Skuntank",
        abilities: ["stench", "aftermath"],
        types: ["poison", "dark"],
        baseStats: {hp: 103, atk: 93, def: 67, spa: 71, spd: 61, spe: 84},
        weightkg: 38,
        movepool: ["attract", "captivate", "cut", "darkpulse", "defog", "dig", "doubleteam", "endure", "explosion", "facade", "feint", "fireblast", "flamethrower", "focusenergy", "frustration", "furycutter", "furyswipes", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "irontail", "memento", "mudslap", "naturalgift", "nightslash", "payback", "poisongas", "poisonjab", "protect", "raindance", "rest", "return", "roar", "rocksmash", "scratch", "screech", "secretpower", "shadowball", "shadowclaw", "slash", "sleeptalk", "sludgebomb", "smokescreen", "snatch", "snore", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "taunt", "thief", "torment", "toxic"]
    },
    Bronzor:
    {
        id: 436,
        uid: 458,
        name: "Bronzor",
        abilities: ["levitate", "heatproof"],
        types: ["steel", "psychic"],
        baseStats: {hp: 57, atk: 24, def: 86, spa: 24, spd: 86, spe: 23},
        weightkg: 60.5,
        movepool: ["ancientpower", "calmmind", "chargebeam", "confuseray", "confusion", "doubleteam", "dreameater", "earthquake", "endure", "extrasensory", "facade", "feintattack", "flash", "flashcannon", "frustration", "futuresight", "grassknot", "gravity", "gyroball", "healblock", "hiddenpower", "hypnosis", "imprison", "irondefense", "lightscreen", "naturalgift", "payback", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "rockpolish", "rockslide", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "stealthrock", "substitute", "sunnyday", "swagger", "tackle", "toxic", "trick", "trickroom"]
    },
    Bronzong:
    {
        id: 437,
        uid: 459,
        name: "Bronzong",
        abilities: ["levitate", "heatproof"],
        types: ["steel", "psychic"],
        baseStats: {hp: 67, atk: 89, def: 116, spa: 79, spd: 116, spe: 33},
        weightkg: 187,
        movepool: ["ancientpower", "block", "calmmind", "chargebeam", "confuseray", "confusion", "doubleteam", "dreameater", "earthquake", "endure", "explosion", "extrasensory", "facade", "feintattack", "flash", "flashcannon", "frustration", "futuresight", "gigaimpact", "grassknot", "gravity", "gyroball", "healblock", "hiddenpower", "hyperbeam", "hypnosis", "imprison", "irondefense", "ironhead", "lightscreen", "naturalgift", "payback", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "safeguard", "sandstorm", "secretpower", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "stealthrock", "strength", "substitute", "sunnyday", "swagger", "tackle", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Bonsly:
    {
        id: 438,
        uid: 460,
        name: "Bonsly",
        abilities: ["sturdy", "rockhead"],
        types: ["rock", "???"],
        baseStats: {hp: 50, atk: 80, def: 95, spa: 10, spd: 45, spe: 10},
        weightkg: 15,
        movepool: ["attract", "block", "brickbreak", "calmmind", "captivate", "copycat", "defensecurl", "dig", "doubleedge", "doubleteam", "earthpower", "endure", "explosion", "facade", "faketears", "feintattack", "flail", "frustration", "harden", "headbutt", "helpinghand", "hiddenpower", "lowkick", "mimic", "naturalgift", "protect", "psychup", "rest", "return", "rockpolish", "rockslide", "rockthrow", "rocktomb", "roleplay", "rollout", "sandstorm", "sandtomb", "secretpower", "selfdestruct", "slam", "sleeptalk", "snore", "stealthrock", "substitute", "suckerpunch", "sunnyday", "swagger", "thief", "toxic", "uproar"]
    },
    Happiny:
    {
        id: 440,
        uid: 461,
        name: "Happiny",
        abilities: ["naturalcure", "serenegrace"],
        types: ["normal", "???"],
        baseStats: {hp: 100, atk: 5, def: 5, spa: 15, spd: 65, spe: 30},
        weightkg: 24.4,
        movepool: ["aromatherapy", "attract", "captivate", "charm", "copycat", "counter", "doubleteam", "drainpunch", "dreameater", "endeavor", "endure", "facade", "fireblast", "flamethrower", "flash", "fling", "frustration", "grassknot", "gravity", "hail", "headbutt", "healbell", "helpinghand", "hiddenpower", "icywind", "lastresort", "lightscreen", "metronome", "mudbomb", "mudslap", "naturalgift", "pound", "present", "protect", "psychic", "psychup", "raindance", "recycle", "refresh", "rest", "return", "rollout", "safeguard", "secretpower", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetkiss", "thunderwave", "toxic", "uproar", "waterpulse", "zenheadbutt"]
    },
    Chatot:
    {
        id: 441,
        uid: 462,
        name: "Chatot",
        abilities: ["keeneye", "tangledfeet"],
        types: ["normal", "flying"],
        baseStats: {hp: 76, atk: 65, def: 45, spa: 92, spd: 42, spe: 91},
        weightkg: 1.9,
        movepool: ["aerialace", "agility", "aircutter", "attract", "captivate", "chatter", "defog", "doubleteam", "encore", "endure", "facade", "featherdance", "fly", "frustration", "furyattack", "growl", "heatwave", "hiddenpower", "hypervoice", "mimic", "mirrormove", "mudslap", "nastyplot", "naturalgift", "nightshade", "ominouswind", "peck", "pluck", "protect", "raindance", "rest", "return", "roleplay", "roost", "secretpower", "sing", "skyattack", "sleeptalk", "snore", "steelwing", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tailwind", "taunt", "thief", "torment", "toxic", "twister", "uproar", "uturn"]
    },
    Spiritomb:
    {
        id: 442,
        uid: 463,
        name: "Spiritomb",
        abilities: ["pressure"],
        types: ["ghost", "dark"],
        baseStats: {hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 35},
        weightkg: 108,
        movepool: ["attract", "calmmind", "captivate", "confuseray", "curse", "darkpulse", "destinybond", "doubleteam", "dreameater", "embargo", "endure", "facade", "feintattack", "flash", "frustration", "gigaimpact", "grudge", "hiddenpower", "hyperbeam", "hypnosis", "icywind", "imprison", "memento", "nastyplot", "naturalgift", "ominouswind", "painsplit", "protect", "psychic", "psychup", "pursuit", "raindance", "rest", "return", "rocktomb", "secretpower", "shadowball", "shadowsneak", "shockwave", "silverwind", "sleeptalk", "smokescreen", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "taunt", "thief", "torment", "toxic", "trick", "uproar", "waterpulse", "willowisp"]
    },
    Gible:
    {
        id: 443,
        uid: 464,
        name: "Gible",
        abilities: ["sandveil"],
        types: ["dragon", "ground"],
        baseStats: {hp: 58, atk: 70, def: 45, spa: 40, spd: 45, spe: 42},
        weightkg: 20.5,
        movepool: ["aerialace", "attract", "bodyslam", "captivate", "cut", "dig", "doubleedge", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "dragonrage", "dragonrush", "earthpower", "earthquake", "endure", "facade", "fireblast", "flamethrower", "frustration", "furycutter", "headbutt", "hiddenpower", "ironhead", "metalclaw", "mudshot", "mudslap", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "sandtomb", "scaryface", "secretpower", "shadowclaw", "slash", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "takedown", "thrash", "toxic", "twister"]
    },
    Gabite:
    {
        id: 444,
        uid: 465,
        name: "Gabite",
        abilities: ["sandveil"],
        types: ["dragon", "ground"],
        baseStats: {hp: 68, atk: 90, def: 65, spa: 50, spd: 55, spe: 82},
        weightkg: 56,
        movepool: ["aerialace", "attract", "captivate", "cut", "dig", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dragonrage", "dragonrush", "earthpower", "earthquake", "endure", "facade", "fireblast", "flamethrower", "frustration", "furycutter", "headbutt", "hiddenpower", "ironhead", "irontail", "mudslap", "naturalgift", "outrage", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "sandtomb", "secretpower", "shadowclaw", "slash", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "tackle", "takedown", "toxic", "twister"]
    },
    Garchomp:
    {
        id: 445,
        uid: 466,
        name: "Garchomp",
        abilities: ["sandveil"],
        types: ["dragon", "ground"],
        baseStats: {hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102},
        weightkg: 95,
        movepool: ["aerialace", "aquatail", "attract", "brickbreak", "captivate", "crunch", "cut", "dig", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dragonrage", "dragonrush", "earthpower", "earthquake", "endure", "facade", "falseswipe", "fireblast", "firefang", "flamethrower", "fling", "frustration", "furycutter", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "ironhead", "irontail", "mudslap", "naturalgift", "outrage", "poisonjab", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "sandtomb", "secretpower", "shadowclaw", "slash", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tackle", "takedown", "toxic", "twister", "whirlpool"]
    },
    Munchlax:
    {
        id: 446,
        uid: 467,
        name: "Munchlax",
        abilities: ["pickup", "thickfat"],
        types: ["normal", "???"],
        baseStats: {hp: 135, atk: 85, def: 40, spa: 40, spd: 85, spe: 5},
        weightkg: 105,
        movepool: ["amnesia", "attract", "blizzard", "bodyslam", "brickbreak", "captivate", "charm", "counter", "curse", "defensecurl", "doubleedge", "doubleteam", "earthquake", "endure", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focuspunch", "frustration", "gunkshot", "headbutt", "hiddenpower", "icebeam", "icepunch", "icywind", "lastresort", "lick", "metronome", "mudslap", "naturalgift", "odorsleuth", "protect", "psychic", "pursuit", "raindance", "recycle", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "screech", "secretpower", "seedbomb", "selfdestruct", "shadowball", "shockwave", "sleeptalk", "snore", "solarbeam", "stockpile", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "swallow", "tackle", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "waterpulse", "whirlpool", "whirlwind", "zenheadbutt"]
    },
    Riolu:
    {
        id: 447,
        uid: 468,
        name: "Riolu",
        abilities: ["steadfast", "innerfocus"],
        types: ["fighting", "???"],
        baseStats: {hp: 40, atk: 70, def: 40, spa: 35, spd: 40, spe: 60},
        weightkg: 20.2,
        movepool: ["agility", "attract", "aurasphere", "bite", "blazekick", "brickbreak", "bulkup", "bulletpunch", "captivate", "copycat", "counter", "crosschop", "crunch", "detect", "dig", "doubleteam", "drainpunch", "earthquake", "endure", "facade", "feint", "fling", "focusblast", "focuspunch", "followme", "forcepalm", "foresight", "frustration", "furycutter", "headbutt", "helpinghand", "hiddenpower", "highjumpkick", "icepunch", "irondefense", "irontail", "lowkick", "magnetrise", "mindreader", "mudslap", "naturalgift", "payback", "poisonjab", "protect", "quickattack", "raindance", "rest", "return", "reversal", "roar", "rockslide", "rocksmash", "rocktomb", "roleplay", "screech", "secretpower", "shadowclaw", "skyuppercut", "sleeptalk", "snore", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thunderpunch", "toxic", "vacuumwave", "zenheadbutt"]
    },
    Lucario:
    {
        id: 448,
        uid: 469,
        name: "Lucario",
        abilities: ["steadfast", "innerfocus"],
        types: ["fighting", "steel"],
        baseStats: {hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90},
        weightkg: 54,
        movepool: ["attract", "aurasphere", "blazekick", "bonerush", "brickbreak", "bulkup", "calmmind", "captivate", "closecombat", "counter", "darkpulse", "detect", "dig", "doubleteam", "dragonpulse", "drainpunch", "earthquake", "endure", "extremespeed", "facade", "feint", "flashcannon", "fling", "focusblast", "focuspunch", "forcepalm", "foresight", "frustration", "furycutter", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "irondefense", "irontail", "lowkick", "magnetrise", "mefirst", "metalclaw", "metalsound", "mudslap", "naturalgift", "payback", "poisonjab", "protect", "psychic", "quickattack", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "secretpower", "shadowball", "shadowclaw", "sleeptalk", "snore", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "thunderpunch", "toxic", "vacuumwave", "waterpulse", "zenheadbutt"]
    },
    Hippopotas:
    {
        id: 449,
        uid: 470,
        name: "Hippopotas",
        abilities: ["sandstream"],
        types: ["ground", "???"],
        baseStats: {hp: 68, atk: 72, def: 78, spa: 38, spd: 42, spe: 32},
        weightkg: 49.5,
        movepool: ["attract", "bite", "bodyslam", "captivate", "crunch", "curse", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "fissure", "frustration", "headbutt", "hiddenpower", "irontail", "mudslap", "naturalgift", "protect", "rest", "return", "revenge", "roar", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "sandtomb", "secretpower", "slackoff", "sleeptalk", "snore", "spitup", "stealthrock", "stockpile", "strength", "substitute", "sunnyday", "superpower", "swagger", "swallow", "tackle", "takedown", "toxic", "waterpulse", "yawn"]
    },
    Hippowdon:
    {
        id: 450,
        uid: 471,
        name: "Hippowdon",
        abilities: ["sandstream"],
        types: ["ground", "???"],
        baseStats: {hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47},
        weightkg: 300,
        movepool: ["attract", "bite", "captivate", "crunch", "dig", "doubleedge", "doubleteam", "earthpower", "earthquake", "endure", "facade", "firefang", "fissure", "frustration", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "icefang", "ironhead", "irontail", "mudslap", "naturalgift", "protect", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "sandattack", "sandstorm", "sandtomb", "secretpower", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "tackle", "takedown", "thunderfang", "toxic", "waterpulse", "yawn"]
    },
    Skorupi:
    {
        id: 451,
        uid: 472,
        name: "Skorupi",
        abilities: ["battlearmor", "sniper"],
        types: ["poison", "bug"],
        baseStats: {hp: 40, atk: 50, def: 90, spa: 30, spd: 55, spe: 65},
        weightkg: 12,
        movepool: ["acupressure", "aerialace", "agility", "aquatail", "attract", "bite", "brickbreak", "bugbite", "captivate", "confuseray", "crosspoison", "crunch", "cut", "darkpulse", "dig", "doubleteam", "endure", "facade", "falseswipe", "feintattack", "flash", "fling", "frustration", "furycutter", "headbutt", "hiddenpower", "irontail", "knockoff", "leer", "mudslap", "naturalgift", "nightslash", "payback", "pinmissile", "poisonfang", "poisonjab", "poisonsting", "protect", "pursuit", "raindance", "rest", "return", "rocksmash", "rocktomb", "sandattack", "scaryface", "screech", "secretpower", "shadowball", "slash", "sleeptalk", "sludgebomb", "snore", "strength", "substitute", "sunnyday", "swagger", "swordsdance", "taunt", "thief", "torment", "toxic", "toxicspikes", "whirlwind", "xscissor"]
    },
    Drapion:
    {
        id: 452,
        uid: 473,
        name: "Drapion",
        abilities: ["battlearmor", "sniper"],
        types: ["poison", "dark"],
        baseStats: {hp: 70, atk: 90, def: 110, spa: 60, spd: 75, spe: 95},
        weightkg: 61.5,
        movepool: ["acupressure", "aerialace", "aquatail", "attract", "bite", "brickbreak", "bugbite", "captivate", "crosspoison", "crunch", "cut", "darkpulse", "dig", "doubleteam", "earthquake", "endure", "facade", "falseswipe", "firefang", "flash", "fling", "frustration", "furycutter", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "icefang", "irontail", "knockoff", "leer", "mudslap", "naturalgift", "payback", "pinmissile", "poisonfang", "poisonjab", "poisonsting", "protect", "raindance", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "scaryface", "secretpower", "shadowball", "sleeptalk", "sludgebomb", "snore", "strength", "substitute", "sunnyday", "swagger", "swordsdance", "taunt", "thief", "thunderfang", "torment", "toxic", "toxicspikes", "xscissor"]
    },
    Croagunk:
    {
        id: 453,
        uid: 474,
        name: "Croagunk",
        abilities: ["anticipation", "dryskin"],
        types: ["poison", "fighting"],
        baseStats: {hp: 48, atk: 61, def: 40, spa: 61, spd: 40, spe: 50},
        weightkg: 23,
        movepool: ["astonish", "attract", "bounce", "brickbreak", "bulkup", "bulletpunch", "captivate", "counter", "crosschop", "darkpulse", "dig", "doubleteam", "dynamicpunch", "earthquake", "embargo", "endure", "facade", "fakeout", "feint", "feintattack", "flatter", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gunkshot", "headbutt", "helpinghand", "hiddenpower", "icepunch", "icywind", "knockoff", "lowkick", "meditate", "mefirst", "mudbomb", "mudslap", "nastyplot", "naturalgift", "payback", "poisonjab", "poisonsting", "protect", "pursuit", "raindance", "rest", "return", "revenge", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "secretpower", "shadowball", "sleeptalk", "sludgebomb", "smellingsalts", "snatch", "snore", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "superfang", "swagger", "taunt", "thief", "thunderpunch", "torment", "toxic", "vacuumwave", "wakeupslap", "xscissor"]
    },
    Toxicroak:
    {
        id: 454,
        uid: 475,
        name: "Toxicroak",
        abilities: ["anticipation", "dryskin"],
        types: ["poison", "fighting"],
        baseStats: {hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 85},
        weightkg: 44.4,
        movepool: ["astonish", "attract", "bounce", "brickbreak", "bulkup", "captivate", "cut", "darkpulse", "dig", "doubleteam", "earthquake", "embargo", "endure", "facade", "feintattack", "flatter", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "gunkshot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "icywind", "knockoff", "lowkick", "mudbomb", "mudslap", "nastyplot", "naturalgift", "payback", "poisonjab", "poisonsting", "protect", "pursuit", "raindance", "rest", "return", "revenge", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "secretpower", "shadowball", "sleeptalk", "sludgebomb", "snatch", "snore", "spite", "stoneedge", "strength", "suckerpunch", "sunnyday", "superfang", "swagger", "swordsdance", "taunt", "thief", "thunderpunch", "torment", "toxic", "vacuumwave", "xscissor"]
    },
    Carnivine:
    {
        id: 455,
        uid: 476,
        name: "Carnivine",
        abilities: ["levitate"],
        types: ["grass", "???"],
        baseStats: {hp: 74, atk: 100, def: 72, spa: 90, spd: 72, spe: 46},
        weightkg: 27,
        movepool: ["attract", "bind", "bite", "bugbite", "bulletseed", "captivate", "crunch", "cut", "doubleteam", "endure", "energyball", "facade", "feintattack", "flash", "fling", "frustration", "furycutter", "gastroacid", "gigadrain", "gigaimpact", "grassknot", "growth", "hiddenpower", "hyperbeam", "ingrain", "knockoff", "leechseed", "magicalleaf", "mudslap", "naturalgift", "payback", "powerwhip", "protect", "razorleaf", "rest", "return", "secretpower", "seedbomb", "slam", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spitup", "stockpile", "stunspore", "substitute", "sunnyday", "swagger", "swallow", "sweetscent", "swordsdance", "synthesis", "thief", "toxic", "vinewhip", "worryseed", "wringout"]
    },
    Finneon:
    {
        id: 456,
        uid: 477,
        name: "Finneon",
        abilities: ["swiftswim", "stormdrain"],
        types: ["water", "???"],
        baseStats: {hp: 49, atk: 49, def: 56, spa: 49, spd: 61, spe: 66},
        weightkg: 7,
        movepool: ["agility", "aircutter", "aquaring", "aquatail", "attract", "blizzard", "bounce", "brine", "captivate", "charm", "defog", "dive", "doubleteam", "endure", "facade", "flail", "flash", "frustration", "gust", "hail", "hiddenpower", "icebeam", "icywind", "naturalgift", "ominouswind", "payback", "pound", "protect", "psybeam", "psychup", "raindance", "rest", "return", "safeguard", "secretpower", "silverwind", "sleeptalk", "snore", "splash", "substitute", "surf", "swagger", "sweetkiss", "swift", "tailwind", "tickle", "toxic", "twister", "uturn", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Lumineon:
    {
        id: 457,
        uid: 478,
        name: "Lumineon",
        abilities: ["swiftswim", "stormdrain"],
        types: ["water", "???"],
        baseStats: {hp: 69, atk: 69, def: 76, spa: 69, spd: 86, spe: 91},
        weightkg: 24,
        movepool: ["aircutter", "aquaring", "aquatail", "attract", "blizzard", "bounce", "brine", "captivate", "defog", "dive", "doubleteam", "endure", "facade", "flash", "frustration", "gigaimpact", "gust", "hail", "hiddenpower", "hyperbeam", "icebeam", "icywind", "naturalgift", "ominouswind", "payback", "pound", "protect", "psychup", "raindance", "rest", "return", "safeguard", "secretpower", "silverwind", "sleeptalk", "snore", "substitute", "surf", "swagger", "swift", "tailwind", "toxic", "twister", "uturn", "waterfall", "watergun", "waterpulse", "whirlpool"]
    },
    Mantyke:
    {
        id: 458,
        uid: 479,
        name: "Mantyke",
        abilities: ["swiftswim", "waterabsorb"],
        types: ["water", "flying"],
        baseStats: {hp: 45, atk: 20, def: 50, spa: 60, spd: 120, spe: 50},
        weightkg: 65,
        movepool: ["aerialace", "agility", "aircutter", "aquaring", "attract", "blizzard", "bounce", "bubble", "bubblebeam", "captivate", "confuseray", "dive", "doubleteam", "earthquake", "endure", "facade", "frustration", "hail", "haze", "headbutt", "helpinghand", "hiddenpower", "hydropump", "icebeam", "icywind", "mirrorcoat", "mudslap", "mudsport", "naturalgift", "protect", "raindance", "rest", "return", "rockslide", "secretpower", "signalbeam", "slam", "sleeptalk", "snore", "splash", "substitute", "supersonic", "surf", "swagger", "swift", "tackle", "takedown", "toxic", "twister", "waterfall", "waterpulse", "watersport", "whirlpool", "wingattack"]
    },
    Snover:
    {
        id: 459,
        uid: 480,
        name: "Snover",
        abilities: ["snowwarning"],
        types: ["grass", "ice"],
        baseStats: {hp: 60, atk: 62, def: 50, spa: 62, spd: 60, spe: 40},
        weightkg: 50.5,
        movepool: ["attract", "avalanche", "blizzard", "bulletseed", "captivate", "doubleedge", "doubleteam", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "grassknot", "grasswhistle", "growth", "hail", "headbutt", "hiddenpower", "icebeam", "icepunch", "iceshard", "icywind", "ingrain", "irontail", "leechseed", "leer", "lightscreen", "magicalleaf", "mist", "mudslap", "naturalgift", "powdersnow", "protect", "raindance", "razorleaf", "rest", "return", "roleplay", "safeguard", "secretpower", "seedbomb", "shadowball", "sheercold", "skullbash", "sleeptalk", "snore", "solarbeam", "stomp", "substitute", "swagger", "swordsdance", "synthesis", "toxic", "waterpulse", "woodhammer", "worryseed"]
    },
    Abomasnow:
    {
        id: 460,
        uid: 481,
        name: "Abomasnow",
        abilities: ["snowwarning"],
        types: ["grass", "ice"],
        baseStats: {hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60},
        weightkg: 135.5,
        movepool: ["attract", "avalanche", "blizzard", "block", "brickbreak", "bulletseed", "captivate", "doubleteam", "earthquake", "endure", "energyball", "facade", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigadrain", "gigaimpact", "grassknot", "grasswhistle", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "iceshard", "icywind", "ingrain", "irontail", "leer", "lightscreen", "mist", "mudslap", "naturalgift", "outrage", "powdersnow", "protect", "raindance", "razorleaf", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "roleplay", "safeguard", "secretpower", "seedbomb", "shadowball", "sheercold", "sleeptalk", "snore", "solarbeam", "strength", "substitute", "swagger", "swordsdance", "synthesis", "toxic", "waterpulse", "woodhammer", "worryseed"]
    },
    Weavile:
    {
        id: 461,
        uid: 482,
        name: "Weavile",
        abilities: ["pressure"],
        types: ["dark", "ice"],
        baseStats: {hp: 70, atk: 120, def: 65, spa: 45, spd: 85, spe: 125},
        weightkg: 34,
        movepool: ["aerialace", "assurance", "attract", "avalanche", "blizzard", "brickbreak", "calmmind", "captivate", "cut", "darkpulse", "dig", "doubleteam", "dreameater", "embargo", "endure", "facade", "fakeout", "falseswipe", "feintattack", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "furyswipes", "gigaimpact", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "iceshard", "icywind", "irontail", "knockoff", "leer", "lowkick", "metalclaw", "mudslap", "nastyplot", "naturalgift", "nightslash", "payback", "poisonjab", "protect", "psychup", "quickattack", "raindance", "rest", "return", "revenge", "rocksmash", "scratch", "screech", "secretpower", "shadowball", "shadowclaw", "sleeptalk", "snatch", "snore", "spite", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "taunt", "thief", "torment", "toxic", "whirlpool", "xscissor"]
    },
    Magnezone:
    {
        id: 462,
        uid: 483,
        name: "Magnezone",
        abilities: ["magnetpull", "sturdy"],
        types: ["electric", "steel"],
        baseStats: {hp: 70, atk: 70, def: 115, spa: 130, spd: 90, spe: 60},
        weightkg: 180,
        movepool: ["barrier", "chargebeam", "discharge", "doubleteam", "endure", "explosion", "facade", "flash", "flashcannon", "frustration", "gigaimpact", "gravity", "gyroball", "hiddenpower", "hyperbeam", "irondefense", "ironhead", "lightscreen", "lockon", "magiccoat", "magnetbomb", "magnetrise", "metalsound", "mirrorcoat", "mirrorshot", "naturalgift", "protect", "psychup", "raindance", "recycle", "reflect", "rest", "return", "rollout", "screech", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "sonicboom", "spark", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "zapcannon"]
    },
    Lickilicky:
    {
        id: 463,
        uid: 484,
        name: "Lickilicky",
        abilities: ["owntempo", "oblivious"],
        types: ["normal", "???"],
        baseStats: {hp: 110, atk: 85, def: 95, spa: 80, spd: 95, spe: 50},
        weightkg: 140,
        movepool: ["aquatail", "attract", "blizzard", "block", "brickbreak", "captivate", "cut", "defensecurl", "dig", "disable", "doubleteam", "dreameater", "earthquake", "endure", "explosion", "facade", "fireblast", "firepunch", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "gyroball", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "icywind", "irontail", "knockoff", "lick", "mefirst", "mudslap", "naturalgift", "powerwhip", "protect", "psychup", "raindance", "refresh", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "screech", "secretpower", "shadowball", "shockwave", "slam", "sleeptalk", "snore", "solarbeam", "stomp", "strength", "substitute", "sunnyday", "supersonic", "surf", "swagger", "swordsdance", "thief", "thunder", "thunderbolt", "thunderpunch", "toxic", "waterpulse", "whirlpool", "wrap", "wringout", "zenheadbutt"]
    },
    Rhyperior:
    {
        id: 464,
        uid: 485,
        name: "Rhyperior",
        abilities: ["lightningrod", "solidrock"],
        types: ["ground", "rock"],
        baseStats: {hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40},
        weightkg: 282.8,
        movepool: ["ancientpower", "aquatail", "attract", "avalanche", "blizzard", "block", "brickbreak", "captivate", "cut", "dig", "doubleteam", "dragonpulse", "earthpower", "earthquake", "endeavor", "endure", "facade", "fireblast", "firepunch", "flamethrower", "flashcannon", "fling", "focusblast", "focuspunch", "frustration", "furyattack", "furycutter", "gigaimpact", "hammerarm", "headbutt", "hiddenpower", "hornattack", "horndrill", "hyperbeam", "icebeam", "icepunch", "icywind", "ironhead", "irontail", "megahorn", "mudslap", "naturalgift", "outrage", "payback", "poisonjab", "protect", "raindance", "rest", "return", "roar", "rockblast", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rockwrecker", "rollout", "sandstorm", "scaryface", "secretpower", "shadowclaw", "shockwave", "sleeptalk", "snore", "spite", "stealthrock", "stomp", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "surf", "swagger", "swordsdance", "tailwhip", "takedown", "thief", "thunder", "thunderbolt", "thunderpunch", "toxic", "uproar", "whirlpool"]
    },
    Tangrowth:
    {
        id: 465,
        uid: 486,
        name: "Tangrowth",
        abilities: ["chlorophyll", "leafguard"],
        types: ["grass", "???"],
        baseStats: {hp: 100, atk: 100, def: 125, spa: 110, spd: 50, spe: 50},
        weightkg: 128.6,
        movepool: ["absorb", "aerialace", "ancientpower", "attract", "bind", "block", "brickbreak", "bulletseed", "captivate", "constrict", "cut", "doubleteam", "earthquake", "endure", "energyball", "facade", "flash", "fling", "focusblast", "frustration", "gigadrain", "gigaimpact", "grassknot", "growth", "headbutt", "hiddenpower", "hyperbeam", "ingrain", "knockoff", "megadrain", "morningsun", "mudslap", "naturalgift", "painsplit", "payback", "poisonjab", "poisonpowder", "powerwhip", "protect", "psychup", "reflect", "rest", "return", "rockslide", "rocksmash", "rocktomb", "secretpower", "seedbomb", "shockwave", "slam", "sleeppowder", "sleeptalk", "sludgebomb", "snore", "solarbeam", "strength", "stunspore", "substitute", "sunnyday", "swagger", "swordsdance", "synthesis", "thief", "tickle", "toxic", "vinewhip", "worryseed", "wringout"]
    },
    Electivire:
    {
        id: 466,
        uid: 487,
        name: "Electivire",
        abilities: ["motordrive"],
        types: ["electric", "???"],
        baseStats: {hp: 75, atk: 123, def: 67, spa: 95, spd: 85, spe: 95},
        weightkg: 138.6,
        movepool: ["attract", "brickbreak", "captivate", "chargebeam", "crosschop", "dig", "discharge", "doubleteam", "earthquake", "endure", "facade", "firepunch", "flamethrower", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "irontail", "leer", "lightscreen", "lowkick", "magnetrise", "mudslap", "naturalgift", "protect", "psychic", "quickattack", "raindance", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "screech", "secretpower", "shockwave", "signalbeam", "sleeptalk", "snore", "strength", "substitute", "swagger", "swift", "taunt", "thief", "thunder", "thunderbolt", "thunderpunch", "thundershock", "thunderwave", "torment", "toxic"]
    },
    Magmortar:
    {
        id: 467,
        uid: 488,
        name: "Magmortar",
        abilities: ["flamebody"],
        types: ["fire", "???"],
        baseStats: {hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 83},
        weightkg: 68,
        movepool: ["attract", "brickbreak", "captivate", "confuseray", "doubleteam", "earthquake", "ember", "endure", "facade", "feintattack", "fireblast", "firepunch", "firespin", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "headbutt", "heatwave", "helpinghand", "hiddenpower", "hyperbeam", "irontail", "lavaplume", "leer", "lowkick", "mudslap", "naturalgift", "overheat", "protect", "psychic", "rest", "return", "rockclimb", "rockslide", "rocksmash", "rocktomb", "secretpower", "sleeptalk", "smog", "smokescreen", "snore", "solarbeam", "strength", "substitute", "sunnyday", "swagger", "taunt", "thief", "thunderbolt", "thunderpunch", "torment", "toxic", "willowisp"]
    },
    Yanmega:
    {
        id: 469,
        uid: 489,
        name: "Yanmega",
        abilities: ["speedboost", "tintedlens"],
        types: ["bug", "flying"],
        baseStats: {hp: 86, atk: 76, def: 86, spa: 116, spd: 56, spe: 95},
        weightkg: 51.5,
        movepool: ["aerialace", "aircutter", "airslash", "ancientpower", "attract", "bugbite", "bugbuzz", "captivate", "defog", "detect", "doubleteam", "dreameater", "endure", "facade", "feint", "flash", "foresight", "frustration", "gigadrain", "gigaimpact", "headbutt", "hiddenpower", "hyperbeam", "mudslap", "naturalgift", "nightslash", "ominouswind", "protect", "psychic", "psychup", "pursuit", "quickattack", "rest", "return", "roost", "screech", "secretpower", "shadowball", "signalbeam", "silverwind", "slash", "sleeptalk", "snore", "solarbeam", "sonicboom", "steelwing", "stringshot", "substitute", "sunnyday", "supersonic", "swagger", "swift", "tackle", "tailwind", "thief", "toxic", "uproar", "uturn"]
    },
    Gliscor:
    {
        id: 472,
        uid: 490,
        name: "Gliscor",
        abilities: ["hypercutter", "sandveil"],
        types: ["ground", "flying"],
        baseStats: {hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95},
        weightkg: 42.5,
        movepool: ["aerialace", "aquatail", "attract", "brickbreak", "captivate", "cut", "darkpulse", "defog", "dig", "doubleteam", "earthpower", "earthquake", "endure", "facade", "falseswipe", "feintattack", "firefang", "fling", "frustration", "furycutter", "gigaimpact", "guillotine", "harden", "headbutt", "hiddenpower", "hyperbeam", "icefang", "irontail", "knockoff", "mudslap", "naturalgift", "nightslash", "payback", "poisonjab", "protect", "quickattack", "raindance", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "roost", "sandattack", "sandstorm", "screech", "secretpower", "skyattack", "sleeptalk", "sludgebomb", "snore", "stealthrock", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "swordsdance", "tailwind", "taunt", "thief", "thunderfang", "torment", "toxic", "uturn", "xscissor"]
    },
    Mamoswine:
    {
        id: 473,
        uid: 491,
        name: "Mamoswine",
        abilities: ["oblivious", "snowcloak"],
        types: ["ice", "ground"],
        baseStats: {hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80},
        weightkg: 291,
        movepool: ["ancientpower", "attract", "avalanche", "blizzard", "block", "captivate", "dig", "doublehit", "doubleteam", "earthpower", "earthquake", "endeavor", "endure", "facade", "frustration", "furycutter", "gigaimpact", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icefang", "icywind", "ironhead", "knockoff", "lightscreen", "mist", "mudbomb", "mudslap", "mudsport", "naturalgift", "odorsleuth", "peck", "powdersnow", "protect", "raindance", "reflect", "rest", "return", "roar", "rockclimb", "rockslide", "rocksmash", "rocktomb", "sandstorm", "scaryface", "secretpower", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "superpower", "swagger", "takedown", "toxic"]
    },
    "Porygon-Z":
    {
        id: 474,
        uid: 492,
        name: "Porygon-Z",
        abilities: ["adaptability", "download"],
        types: ["normal", "???"],
        baseStats: {hp: 85, atk: 80, def: 70, spa: 135, spd: 75, spe: 90},
        weightkg: 34,
        movepool: ["aerialace", "agility", "blizzard", "chargebeam", "conversion2", "conversion", "darkpulse", "discharge", "doubleteam", "dreameater", "embargo", "endure", "facade", "flash", "frustration", "gigaimpact", "gravity", "hiddenpower", "hyperbeam", "icebeam", "icywind", "irontail", "lastresort", "lockon", "magiccoat", "magnetrise", "nastyplot", "naturalgift", "painsplit", "protect", "psybeam", "psychic", "psychup", "raindance", "recover", "recycle", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "tackle", "thief", "thunder", "thunderbolt", "thunderwave", "toxic", "triattack", "trick", "trickroom", "uproar", "zapcannon", "zenheadbutt"]
    },
    Probopass:
    {
        id: 476,
        uid: 493,
        name: "Probopass",
        abilities: ["sturdy", "magnetpull"],
        types: ["rock", "steel"],
        baseStats: {hp: 60, atk: 55, def: 145, spa: 75, spd: 150, spe: 40},
        weightkg: 340,
        movepool: ["ancientpower", "attract", "block", "captivate", "discharge", "doubleteam", "earthpower", "earthquake", "endure", "explosion", "facade", "firepunch", "flashcannon", "frustration", "gigaimpact", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "irondefense", "ironhead", "lockon", "magiccoat", "magnetbomb", "magnetrise", "mudslap", "naturalgift", "painsplit", "powergem", "protect", "rest", "return", "rockpolish", "rockslide", "rocksmash", "rocktomb", "rollout", "sandstorm", "secretpower", "shockwave", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "tackle", "taunt", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "zapcannon"]
    },
    Froslass:
    {
        id: 478,
        uid: 494,
        name: "Froslass",
        abilities: ["snowcloak"],
        types: ["ice", "ghost"],
        baseStats: {hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110},
        weightkg: 26.6,
        movepool: ["astonish", "attract", "avalanche", "blizzard", "block", "captivate", "confuseray", "destinybond", "doubleteam", "dreameater", "embargo", "endure", "facade", "flash", "fling", "frustration", "gigaimpact", "hail", "headbutt", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "iceshard", "icywind", "leer", "lightscreen", "mudslap", "naturalgift", "ominouswind", "painsplit", "payback", "powdersnow", "protect", "psychic", "psychup", "raindance", "rest", "return", "rollout", "safeguard", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "swagger", "taunt", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "trick", "wakeupslap", "waterpulse"]
    },
    Rotom:
    {
        id: 479,
        uid: 495,
        name: "Rotom",
        otherForms: ["rotomheat", "rotomwash", "rotomfrost", "rotomfan", "rotommow"],
        abilities: ["levitate"],
        types: ["electric", "ghost"],
        baseStats: {hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91},
        weightkg: 0.3,
        movepool: ["astonish", "charge", "chargebeam", "confuseray", "darkpulse", "discharge", "doubleteam", "dreameater", "endure", "facade", "flash", "frustration", "hiddenpower", "lightscreen", "mudslap", "naturalgift", "ominouswind", "painsplit", "protect", "psychup", "raindance", "reflect", "rest", "return", "secretpower", "shadowball", "shockwave", "signalbeam", "sleeptalk", "snatch", "snore", "spite", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "thief", "thunder", "thunderbolt", "thundershock", "thunderwave", "toxic", "trick", "uproar", "willowisp"]
    },
    Uxie:
    {
        id: 480,
        uid: 496,
        name: "Uxie",
        abilities: ["levitate"],
        types: ["psychic", "???"],
        baseStats: {hp: 75, atk: 75, def: 130, spa: 75, spd: 130, spe: 95},
        weightkg: 0.3,
        movepool: ["amnesia", "calmmind", "chargebeam", "confusion", "doubleteam", "dreameater", "endure", "energyball", "extrasensory", "facade", "firepunch", "flail", "flash", "fling", "frustration", "futuresight", "gigadrain", "gigaimpact", "grassknot", "headbutt", "healbell", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "imprison", "irontail", "knockoff", "lightscreen", "magiccoat", "memento", "mudslap", "naturalgift", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "sandstorm", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snore", "solarbeam", "stealthrock", "substitute", "sunnyday", "swagger", "swift", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trick", "trickroom", "uturn", "waterpulse", "yawn", "zenheadbutt"]
    },
    Mesprit:
    {
        id: 481,
        uid: 497,
        name: "Mesprit",
        abilities: ["levitate"],
        types: ["psychic", "???"],
        baseStats: {hp: 80, atk: 105, def: 105, spa: 105, spd: 105, spe: 80},
        weightkg: 0.3,
        movepool: ["blizzard", "calmmind", "chargebeam", "charm", "confusion", "copycat", "doubleteam", "dreameater", "endure", "energyball", "extrasensory", "facade", "firepunch", "flash", "fling", "frustration", "futuresight", "gigaimpact", "grassknot", "headbutt", "healingwish", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icepunch", "imprison", "irontail", "knockoff", "lightscreen", "luckychant", "magiccoat", "mudslap", "naturalgift", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "sandstorm", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snore", "stealthrock", "substitute", "sunnyday", "swagger", "swift", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "trick", "trickroom", "uturn", "waterpulse", "zenheadbutt"]
    },
    Azelf:
    {
        id: 482,
        uid: 498,
        name: "Azelf",
        abilities: ["levitate"],
        types: ["psychic", "???"],
        baseStats: {hp: 75, atk: 125, def: 70, spa: 125, spd: 70, spe: 115},
        weightkg: 0.3,
        movepool: ["calmmind", "chargebeam", "confusion", "detect", "doubleteam", "dreameater", "endure", "energyball", "explosion", "extrasensory", "facade", "fireblast", "firepunch", "flamethrower", "flash", "fling", "frustration", "futuresight", "gigaimpact", "grassknot", "headbutt", "helpinghand", "hiddenpower", "hyperbeam", "icepunch", "imprison", "irontail", "knockoff", "lastresort", "lightscreen", "magiccoat", "mudslap", "nastyplot", "naturalgift", "payback", "protect", "psychic", "psychup", "raindance", "recycle", "reflect", "rest", "return", "roleplay", "safeguard", "sandstorm", "secretpower", "shadowball", "shockwave", "signalbeam", "skillswap", "sleeptalk", "snore", "stealthrock", "substitute", "sunnyday", "swagger", "swift", "taunt", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "torment", "toxic", "trick", "trickroom", "uproar", "uturn", "waterpulse", "zenheadbutt"]
    },
    Dialga:
    {
        id: 483,
        uid: 499,
        name: "Dialga",
        abilities: ["pressure"],
        types: ["steel", "dragon"],
        baseStats: {hp: 100, atk: 120, def: 120, spa: 150, spd: 100, spe: 90},
        weightkg: 683,
        movepool: ["aerialace", "ancientpower", "aurasphere", "blizzard", "brickbreak", "bulkup", "cut", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "earthpower", "earthquake", "endure", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "frustration", "furycutter", "gigaimpact", "gravity", "headbutt", "healblock", "hiddenpower", "hyperbeam", "icebeam", "irondefense", "ironhead", "irontail", "magnetrise", "metalburst", "metalclaw", "mudslap", "naturalgift", "outrage", "overheat", "powergem", "protect", "psychup", "raindance", "rest", "return", "roar", "roaroftime", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "scaryface", "secretpower", "shadowclaw", "shockwave", "slash", "sleeptalk", "snore", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "thunder", "thunderbolt", "thunderwave", "toxic", "trickroom", "twister"]
    },
    Palkia:
    {
        id: 484,
        uid: 500,
        name: "Palkia",
        abilities: ["pressure"],
        types: ["water", "dragon"],
        baseStats: {hp: 90, atk: 120, def: 100, spa: 150, spd: 120, spe: 100},
        weightkg: 336,
        movepool: ["aerialace", "ancientpower", "aquatail", "aurasphere", "avalanche", "blizzard", "brickbreak", "brine", "bulkup", "cut", "dive", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "earthpower", "earthquake", "endure", "facade", "fireblast", "flamethrower", "fling", "focusblast", "focuspunch", "frustration", "furycutter", "gigaimpact", "gravity", "hail", "headbutt", "healblock", "hiddenpower", "hydropump", "hyperbeam", "icebeam", "mudslap", "naturalgift", "outrage", "powergem", "protect", "psychup", "raindance", "rest", "return", "roar", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "scaryface", "secretpower", "shadowclaw", "shockwave", "slash", "sleeptalk", "snore", "spacialrend", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "thunder", "thunderbolt", "thunderwave", "toxic", "trickroom", "twister", "waterpulse", "whirlpool"]
    },
    Regigigas:
    {
        id: 486,
        uid: 501,
        name: "Regigigas",
        abilities: ["slowstart"],
        types: ["normal", "???"],
        baseStats: {hp: 110, atk: 160, def: 110, spa: 80, spd: 110, spe: 100},
        weightkg: 420,
        movepool: ["aerialace", "ancientpower", "avalanche", "block", "brickbreak", "confuseray", "crushgrip", "dizzypunch", "doubleteam", "drainpunch", "earthpower", "earthquake", "endure", "facade", "firepunch", "fling", "focusblast", "focuspunch", "foresight", "frustration", "gigaimpact", "gravity", "headbutt", "hiddenpower", "hyperbeam", "icepunch", "icywind", "ironhead", "knockoff", "megapunch", "mudslap", "naturalgift", "psychup", "raindance", "return", "revenge", "rockclimb", "rockpolish", "rockslide", "rocksmash", "rocktomb", "safeguard", "secretpower", "shockwave", "sleeptalk", "snore", "stomp", "stoneedge", "strength", "substitute", "sunnyday", "superpower", "swagger", "thunder", "thunderbolt", "thunderpunch", "thunderwave", "toxic", "zenheadbutt"]
    },
    Giratina:
    {
        id: 487,
        uid: 502,
        name: "Giratina",
        baseForm: "Altered",
        otherForms: ["giratinaorigin"],
        abilities: ["pressure"],
        types: ["ghost", "dragon"],
        baseStats: {hp: 150, atk: 100, def: 120, spa: 100, spd: 120, spe: 90},
        weightkg: 750,
        movepool: ["aerialace", "aircutter", "ancientpower", "aquatail", "aurasphere", "calmmind", "chargebeam", "cut", "darkpulse", "defog", "destinybond", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "facade", "fly", "frustration", "furycutter", "gigaimpact", "gravity", "headbutt", "healblock", "hiddenpower", "hyperbeam", "icywind", "ironhead", "irontail", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "painsplit", "payback", "protect", "psychic", "psychup", "raindance", "rest", "return", "roar", "rockclimb", "rocksmash", "safeguard", "scaryface", "secretpower", "shadowball", "shadowclaw", "shadowforce", "shadowsneak", "shockwave", "silverwind", "slash", "sleeptalk", "snore", "spite", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "twister", "willowisp"]
    },
    "Giratina-Origin":
    {
        id: 487,
        uid: 503,
        name: "Giratina-Origin",
        baseSpecies: "Giratina",
        form: "Origin",
        abilities: ["levitate"],
        types: ["ghost", "dragon"],
        baseStats: {hp: 150, atk: 120, def: 100, spa: 120, spd: 100, spe: 90},
        weightkg: 650,
        movepool: ["aerialace", "aircutter", "ancientpower", "aquatail", "aurasphere", "calmmind", "chargebeam", "cut", "darkpulse", "defog", "destinybond", "doubleteam", "dracometeor", "dragonbreath", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "facade", "fly", "frustration", "furycutter", "gigaimpact", "gravity", "headbutt", "healblock", "hiddenpower", "hyperbeam", "icywind", "ironhead", "irontail", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "painsplit", "payback", "protect", "psychic", "psychup", "raindance", "rest", "return", "roar", "rockclimb", "rocksmash", "safeguard", "scaryface", "secretpower", "shadowball", "shadowclaw", "shadowforce", "shadowsneak", "shockwave", "silverwind", "slash", "sleeptalk", "snore", "spite", "steelwing", "stoneedge", "strength", "substitute", "sunnyday", "swagger", "swift", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "twister", "willowisp"]
    },
    Cresselia:
    {
        id: 488,
        uid: 504,
        name: "Cresselia",
        abilities: ["levitate"],
        types: ["psychic", "???"],
        baseStats: {hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85},
        weightkg: 85.6,
        movepool: ["attract", "aurorabeam", "calmmind", "captivate", "chargebeam", "confusion", "doubleteam", "dreameater", "endure", "energyball", "facade", "flash", "frustration", "furycutter", "futuresight", "gigaimpact", "grassknot", "gravity", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icywind", "lightscreen", "lunardance", "magiccoat", "mist", "moonlight", "mudslap", "naturalgift", "protect", "psychic", "psychocut", "psychoshift", "psychup", "raindance", "recycle", "reflect", "rest", "return", "safeguard", "secretpower", "shadowball", "signalbeam", "skillswap", "slash", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "swift", "thunderwave", "toxic", "trick", "trickroom", "zenheadbutt"]
    },
    Phione:
    {
        id: 489,
        uid: 505,
        name: "Phione",
        abilities: ["hydration"],
        types: ["water", "???"],
        baseStats: {hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80},
        weightkg: 3.1,
        movepool: ["acidarmor", "ancientpower", "aquaring", "blizzard", "bounce", "brine", "bubble", "bubblebeam", "charm", "dive", "doubleteam", "endure", "facade", "fling", "frustration", "grassknot", "hail", "healbell", "helpinghand", "hiddenpower", "icebeam", "icywind", "knockoff", "lastresort", "mudslap", "naturalgift", "protect", "psychup", "raindance", "rest", "return", "safeguard", "secretpower", "signalbeam", "sleeptalk", "snore", "substitute", "supersonic", "surf", "swagger", "swift", "toxic", "uproar", "uturn", "waterfall", "waterpulse", "watersport", "whirlpool"]
    },
    Manaphy:
    {
        id: 490,
        uid: 506,
        name: "Manaphy",
        abilities: ["hydration"],
        types: ["water", "???"],
        baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
        weightkg: 1.4,
        movepool: ["acidarmor", "ancientpower", "aquaring", "blizzard", "bounce", "brine", "bubble", "bubblebeam", "calmmind", "charm", "dive", "doubleteam", "endure", "energyball", "facade", "flash", "fling", "frustration", "gigaimpact", "grassknot", "hail", "healbell", "heartswap", "helpinghand", "hiddenpower", "hyperbeam", "icebeam", "icywind", "knockoff", "lastresort", "lightscreen", "mudslap", "naturalgift", "protect", "psychic", "psychup", "raindance", "reflect", "rest", "return", "safeguard", "secretpower", "shadowball", "signalbeam", "skillswap", "sleeptalk", "snore", "substitute", "supersonic", "surf", "swagger", "swift", "tailglow", "toxic", "uproar", "uturn", "waterfall", "waterpulse", "watersport", "whirlpool"]
    },
    Darkrai:
    {
        id: 491,
        uid: 507,
        name: "Darkrai",
        abilities: ["baddreams"],
        types: ["dark", "???"],
        baseStats: {hp: 70, atk: 90, def: 90, spa: 135, spd: 90, spe: 125},
        weightkg: 50.5,
        movepool: ["aerialace", "blizzard", "brickbreak", "calmmind", "chargebeam", "cut", "darkpulse", "darkvoid", "disable", "doubleteam", "drainpunch", "dreameater", "embargo", "endure", "facade", "feintattack", "flash", "fling", "focusblast", "focuspunch", "frustration", "gigaimpact", "haze", "headbutt", "hiddenpower", "hyperbeam", "hypnosis", "icebeam", "icywind", "knockoff", "lastresort", "mudslap", "nastyplot", "naturalgift", "nightmare", "nightshade", "ominouswind", "payback", "poisonjab", "protect", "psychic", "psychup", "pursuit", "quickattack", "raindance", "rest", "return", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "secretpower", "shadowball", "shadowclaw", "shockwave", "sleeptalk", "sludgebomb", "snatch", "snore", "spacialrend", "spite", "strength", "substitute", "suckerpunch", "sunnyday", "swagger", "swift", "swordsdance", "taunt", "thief", "thunder", "thunderbolt", "thunderwave", "torment", "toxic", "trick", "willowisp", "xscissor"]
    },
    Shaymin:
    {
        id: 492,
        uid: 508,
        name: "Shaymin",
        baseForm: "Land",
        otherForms: ["shayminsky"],
        abilities: ["naturalcure"],
        types: ["grass", "???"],
        baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
        weightkg: 2.1,
        movepool: ["aircutter", "airslash", "aromatherapy", "bulletseed", "defensecurl", "doubleteam", "earthpower", "endeavor", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "grasswhistle", "growth", "headbutt", "healingwish", "hiddenpower", "hyperbeam", "lastresort", "leafstorm", "leechseed", "luckychant", "magicalleaf", "mudslap", "naturalgift", "ominouswind", "protect", "psychic", "psychup", "quickattack", "rest", "return", "safeguard", "secretpower", "seedbomb", "seedflare", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetkiss", "sweetscent", "swift", "swordsdance", "synthesis", "tailwind", "toxic", "worryseed", "zenheadbutt"]
    },
    "Shaymin-Sky":
    {
        id: 492,
        uid: 509,
        name: "Shaymin-Sky",
        baseSpecies: "Shaymin",
        form: "Sky",
        abilities: ["serenegrace"],
        types: ["grass", "flying"],
        baseStats: {hp: 100, atk: 103, def: 75, spa: 120, spd: 75, spe: 127},
        weightkg: 5.2,
        movepool: ["aircutter", "airslash", "aromatherapy", "bulletseed", "defensecurl", "doubleteam", "earthpower", "endeavor", "endure", "energyball", "facade", "flash", "frustration", "gigadrain", "gigaimpact", "grassknot", "grasswhistle", "growth", "headbutt", "healingwish", "hiddenpower", "hyperbeam", "lastresort", "leafstorm", "leechseed", "luckychant", "magicalleaf", "mudslap", "naturalgift", "ominouswind", "protect", "psychic", "psychup", "quickattack", "rest", "return", "safeguard", "secretpower", "seedbomb", "seedflare", "sleeptalk", "snore", "solarbeam", "substitute", "sunnyday", "swagger", "sweetkiss", "sweetscent", "swift", "swordsdance", "synthesis", "tailwind", "toxic", "worryseed", "zenheadbutt"]
    },
    "Arceus-Bug":
    {
        id: 493,
        uid: 510,
        name: "Arceus-Bug",
        baseSpecies: "Arceus",
        form: "Bug",
        abilities: ["multitype"],
        types: ["bug", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Dark":
    {
        id: 493,
        uid: 511,
        name: "Arceus-Dark",
        baseSpecies: "Arceus",
        form: "Dark",
        abilities: ["multitype"],
        types: ["dark", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Dragon":
    {
        id: 493,
        uid: 512,
        name: "Arceus-Dragon",
        baseSpecies: "Arceus",
        form: "Dragon",
        abilities: ["multitype"],
        types: ["dragon", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Electric":
    {
        id: 493,
        uid: 513,
        name: "Arceus-Electric",
        baseSpecies: "Arceus",
        form: "Electric",
        abilities: ["multitype"],
        types: ["electric", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Fighting":
    {
        id: 493,
        uid: 514,
        name: "Arceus-Fighting",
        baseSpecies: "Arceus",
        form: "Fighting",
        abilities: ["multitype"],
        types: ["fighting", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Fire":
    {
        id: 493,
        uid: 515,
        name: "Arceus-Fire",
        baseSpecies: "Arceus",
        form: "Fire",
        abilities: ["multitype"],
        types: ["fire", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Flying":
    {
        id: 493,
        uid: 516,
        name: "Arceus-Flying",
        baseSpecies: "Arceus",
        form: "Flying",
        abilities: ["multitype"],
        types: ["flying", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Ghost":
    {
        id: 493,
        uid: 517,
        name: "Arceus-Ghost",
        baseSpecies: "Arceus",
        form: "Ghost",
        abilities: ["multitype"],
        types: ["ghost", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Grass":
    {
        id: 493,
        uid: 518,
        name: "Arceus-Grass",
        baseSpecies: "Arceus",
        form: "Grass",
        abilities: ["multitype"],
        types: ["grass", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Ground":
    {
        id: 493,
        uid: 519,
        name: "Arceus-Ground",
        baseSpecies: "Arceus",
        form: "Ground",
        abilities: ["multitype"],
        types: ["ground", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Ice":
    {
        id: 493,
        uid: 520,
        name: "Arceus-Ice",
        baseSpecies: "Arceus",
        form: "Ice",
        abilities: ["multitype"],
        types: ["ice", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Poison":
    {
        id: 493,
        uid: 521,
        name: "Arceus-Poison",
        baseSpecies: "Arceus",
        form: "Poison",
        abilities: ["multitype"],
        types: ["poison", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Psychic":
    {
        id: 493,
        uid: 522,
        name: "Arceus-Psychic",
        baseSpecies: "Arceus",
        form: "Psychic",
        abilities: ["multitype"],
        types: ["psychic", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Rock":
    {
        id: 493,
        uid: 523,
        name: "Arceus-Rock",
        baseSpecies: "Arceus",
        form: "Rock",
        abilities: ["multitype"],
        types: ["rock", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Steel":
    {
        id: 493,
        uid: 524,
        name: "Arceus-Steel",
        baseSpecies: "Arceus",
        form: "Steel",
        abilities: ["multitype"],
        types: ["steel", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    },
    "Arceus-Water":
    {
        id: 493,
        uid: 525,
        name: "Arceus-Water",
        baseSpecies: "Arceus",
        form: "Water",
        abilities: ["multitype"],
        types: ["water", "???"],
        baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
        weightkg: 320,
        movepool: ["aerialace", "ancientpower", "aquatail", "avalanche", "blizzard", "brickbreak", "brine", "bulletseed", "calmmind", "chargebeam", "cosmicpower", "cut", "darkpulse", "defog", "dive", "doubleteam", "dracometeor", "dragonclaw", "dragonpulse", "dreameater", "earthpower", "earthquake", "endure", "energyball", "extremespeed", "facade", "fireblast", "flamethrower", "flash", "flashcannon", "fly", "focusblast", "frustration", "furycutter", "futuresight", "gigadrain", "gigaimpact", "grassknot", "gravity", "hail", "headbutt", "heatwave", "hiddenpower", "hyperbeam", "hypervoice", "icebeam", "icywind", "irondefense", "ironhead", "irontail", "judgment", "lastresort", "lightscreen", "magiccoat", "mudslap", "naturalgift", "ominouswind", "outrage", "overheat", "payback", "perishsong", "poisonjab", "protect", "psychic", "psychup", "punishment", "raindance", "recover", "recycle", "reflect", "refresh", "rest", "return", "roar", "roaroftime", "rockclimb", "rockslide", "rocksmash", "rocktomb", "safeguard", "sandstorm", "secretpower", "seismictoss", "shadowball", "shadowclaw", "shadowforce", "shockwave", "signalbeam", "silverwind", "sleeptalk", "sludgebomb", "snore", "solarbeam", "spacialrend", "stealthrock", "stoneedge", "strength", "substitute", "sunnyday", "surf", "swagger", "swift", "swordsdance", "tailwind", "thunder", "thunderbolt", "thunderwave", "toxic", "trick", "trickroom", "twister", "waterfall", "waterpulse", "whirlpool", "willowisp", "xscissor", "zenheadbutt"]
    }
};

const abilities: {readonly [name: string]: number} =
{
    marvelscale: 0,
    levitate: 1,
    compoundeyes: 2,
    swarm: 3,
    keeneye: 4,
    tangledfeet: 5,
    static: 6,
    poisonpoint: 7,
    rivalry: 8,
    cutecharm: 9,
    magicguard: 10,
    chlorophyll: 11,
    waterabsorb: 12,
    damp: 13,
    synchronize: 14,
    innerfocus: 15,
    rockhead: 16,
    sturdy: 17,
    soundproof: 18,
    filter: 19,
    pressure: 20,
    overgrow: 21,
    blaze: 22,
    torrent: 23,
    hustle: 24,
    serenegrace: 25,
    thickfat: 26,
    hugepower: 27,
    leafguard: 28,
    intimidate: 29,
    runaway: 30,
    quickfeet: 31,
    trace: 32,
    hypercutter: 33,
    plus: 34,
    minus: 35,
    colorchange: 36,
    clearbody: 37,
    naturalcure: 38,
    flashfire: 39,
    shedskin: 40,
    sandveil: 41,
    arenatrap: 42,
    earlybird: 43,
    insomnia: 44,
    swiftswim: 45,
    magmaarmor: 46,
    flamebody: 47,
    guts: 48,
    normalize: 49,
    illuminate: 50,
    oblivious: 51,
    tintedlens: 52,
    whitesmoke: 53,
    forecast: 54,
    anticipation: 55,
    flowergift: 56,
    multitype: 57,
    pickup: 58,
    technician: 59,
    noguard: 60,
    shellarmor: 61,
    adaptability: 62,
    immunity: 63,
    snowcloak: 64,
    steadfast: 65,
    shielddust: 66,
    effectspore: 67,
    dryskin: 68,
    limber: 69,
    cloudnine: 70,
    vitalspirit: 71,
    angerpoint: 72,
    liquidooze: 73,
    owntempo: 74,
    magnetpull: 75,
    hydration: 76,
    stench: 77,
    stickyhold: 78,
    skilllink: 79,
    forewarn: 80,
    lightningrod: 81,
    reckless: 82,
    ironfist: 83,
    scrappy: 84,
    sniper: 85,
    waterveil: 86,
    moldbreaker: 87,
    voltabsorb: 88,
    download: 89,
    battlearmor: 90,
    solarpower: 91,
    speedboost: 92,
    superluck: 93,
    shadowtag: 94,
    gluttony: 95,
    suctioncups: 96,
    frisk: 97,
    sandstream: 98,
    raindish: 99,
    poisonheal: 100,
    truant: 101,
    wonderguard: 102,
    stall: 103,
    purepower: 104,
    roughskin: 105,
    simple: 106,
    solidrock: 107,
    icebody: 108,
    drizzle: 109,
    drought: 110,
    airlock: 111,
    unaware: 112,
    honeygather: 113,
    stormdrain: 114,
    aftermath: 115,
    unburden: 116,
    klutz: 117,
    heatproof: 118,
    snowwarning: 119,
    motordrive: 120,
    slowstart: 121,
    baddreams: 122
};

const moves: {readonly [name: string]: MoveData} =
{
    absorb: {uid: 0, pp: [25, 40], target: "normal", mirror: true},
    acupressure: {uid: 1, pp: [30, 48], target: "adjacentAllyOrSelf", mirror: false},
    armthrust: {uid: 2, pp: [20, 32], target: "normal", mirror: true},
    aromatherapy: {uid: 3, pp: [5, 8], target: "allyTeam", mirror: false},
    aquaring: {uid: 4, pp: [20, 32], target: "self", volatileEffect: "aquaring", mirror: false},
    assist: {uid: 5, pp: [20, 32], target: "self", mirror: false},
    assurance: {uid: 6, pp: [10, 16], target: "normal", mirror: true},
    avalanche: {uid: 7, pp: [10, 16], target: "normal", mirror: true},
    barrage: {uid: 8, pp: [20, 32], target: "normal", mirror: true},
    beatup: {uid: 9, pp: [10, 16], target: "normal", mirror: true},
    bide: {uid: 10, pp: [10, 16], target: "self", volatileEffect: "bide", mirror: false},
    bind: {uid: 11, pp: [20, 32], target: "normal", volatileEffect: "partiallytrapped", mirror: true},
    block: {uid: 12, pp: [5, 8], target: "normal", mirror: true},
    bonerush: {uid: 13, pp: [10, 16], target: "normal", mirror: true},
    bonemerang: {uid: 14, pp: [10, 16], target: "normal", mirror: true},
    bounce: {uid: 15, pp: [5, 8], target: "any", mirror: true},
    bravebird: {uid: 16, pp: [15, 24], target: "any", mirror: true},
    brickbreak: {uid: 17, pp: [15, 24], target: "normal", mirror: true},
    bugbite: {uid: 18, pp: [20, 32], target: "normal", mirror: true},
    bulletseed: {uid: 19, pp: [30, 48], target: "normal", mirror: true},
    camouflage: {uid: 20, pp: [20, 32], target: "self", mirror: false},
    chatter: {uid: 21, pp: [20, 32], target: "any", mirror: false},
    clamp: {uid: 22, pp: [10, 16], target: "normal", volatileEffect: "partiallytrapped", mirror: true},
    cometpunch: {uid: 23, pp: [15, 24], target: "normal", mirror: true},
    conversion: {uid: 24, pp: [30, 48], target: "self", mirror: false},
    conversion2: {uid: 25, pp: [30, 48], target: "normal", mirror: false},
    copycat: {uid: 26, pp: [20, 32], target: "self", mirror: false},
    cottonspore: {uid: 27, pp: [40, 64], target: "normal", mirror: true},
    counter: {uid: 28, pp: [20, 32], target: "scripted", mirror: false},
    covet: {uid: 29, pp: [40, 64], target: "normal", mirror: true},
    crabhammer: {uid: 30, pp: [10, 16], target: "normal", mirror: true},
    crushgrip: {uid: 31, pp: [5, 8], target: "normal", mirror: true},
    curse: {uid: 32, pp: [10, 16], target: "normal", volatileEffect: "curse", mirror: false},
    defog: {uid: 33, pp: [15, 24], target: "normal", mirror: true},
    detect: {uid: 34, pp: [5, 8], target: "self", volatileEffect: "protect", mirror: false},
    dig: {uid: 35, pp: [10, 16], target: "normal", mirror: true},
    disable: {uid: 36, pp: [20, 32], target: "normal", volatileEffect: "disable", mirror: true},
    dive: {uid: 37, pp: [10, 16], target: "normal", mirror: true},
    doomdesire: {uid: 38, pp: [5, 8], target: "normal", mirror: false},
    doubleedge: {uid: 39, pp: [15, 24], target: "normal", mirror: true},
    doublehit: {uid: 40, pp: [10, 16], target: "normal", mirror: true},
    doublekick: {uid: 41, pp: [30, 48], target: "normal", mirror: true},
    doubleslap: {uid: 42, pp: [10, 16], target: "normal", mirror: true},
    drainpunch: {uid: 43, pp: [5, 8], target: "normal", mirror: true},
    dreameater: {uid: 44, pp: [15, 24], target: "normal", mirror: true},
    earthquake: {uid: 45, pp: [10, 16], target: "allAdjacent", mirror: true},
    embargo: {uid: 46, pp: [15, 24], target: "normal", volatileEffect: "embargo", mirror: true},
    encore: {uid: 47, pp: [5, 8], target: "normal", volatileEffect: "encore", mirror: true},
    endeavor: {uid: 48, pp: [5, 8], target: "normal", mirror: true},
    endure: {uid: 49, pp: [10, 16], target: "self", volatileEffect: "endure", mirror: false},
    explosion: {uid: 50, pp: [5, 8], target: "allAdjacent", mirror: true},
    extremespeed: {uid: 51, pp: [5, 8], target: "normal", mirror: true},
    fakeout: {uid: 52, pp: [10, 16], target: "normal", mirror: true},
    feint: {uid: 53, pp: [10, 16], target: "normal", mirror: false},
    firefang: {uid: 54, pp: [15, 24], target: "normal", mirror: true},
    firespin: {uid: 55, pp: [15, 24], target: "normal", volatileEffect: "partiallytrapped", mirror: true},
    flail: {uid: 56, pp: [15, 24], target: "normal", mirror: true},
    flareblitz: {uid: 57, pp: [15, 24], target: "normal", mirror: true},
    fling: {uid: 58, pp: [10, 16], target: "normal", mirror: true},
    fly: {uid: 59, pp: [15, 24], target: "any", mirror: true},
    focuspunch: {uid: 60, pp: [20, 32], target: "normal", mirror: false},
    followme: {uid: 61, pp: [20, 32], target: "self", volatileEffect: "followme", mirror: false},
    foresight: {uid: 62, pp: [40, 64], target: "normal", volatileEffect: "foresight", mirror: true},
    furyattack: {uid: 63, pp: [20, 32], target: "normal", mirror: true},
    furycutter: {uid: 64, pp: [20, 32], target: "normal", mirror: true},
    furyswipes: {uid: 65, pp: [15, 24], target: "normal", mirror: true},
    futuresight: {uid: 66, pp: [15, 24], target: "normal", mirror: false},
    gigadrain: {uid: 67, pp: [10, 16], target: "normal", mirror: true},
    glare: {uid: 68, pp: [30, 48], target: "normal", mirror: true},
    gravity: {uid: 69, pp: [5, 8], target: "all", mirror: false},
    growth: {uid: 70, pp: [40, 64], target: "self", mirror: false},
    gust: {uid: 71, pp: [35, 56], target: "any", mirror: true},
    hail: {uid: 72, pp: [10, 16], target: "all", mirror: false},
    headsmash: {uid: 73, pp: [5, 8], target: "normal", mirror: true},
    healbell: {uid: 74, pp: [5, 8], target: "allyTeam", mirror: false},
    healblock: {uid: 75, pp: [15, 24], target: "allAdjacentFoes", volatileEffect: "healblock", mirror: true},
    healingwish: {uid: 76, pp: [10, 16], target: "self", mirror: false},
    healorder: {uid: 77, pp: [10, 16], target: "self", mirror: false},
    highjumpkick: {uid: 78, pp: [20, 32], target: "normal", mirror: true},
    iciclespear: {uid: 79, pp: [30, 48], target: "normal", mirror: true},
    imprison: {uid: 80, pp: [10, 16], target: "self", volatileEffect: "imprison", mirror: false},
    ingrain: {uid: 81, pp: [20, 32], target: "self", volatileEffect: "ingrain", mirror: false},
    jumpkick: {uid: 82, pp: [25, 40], target: "normal", mirror: true},
    knockoff: {uid: 83, pp: [20, 32], target: "normal", mirror: true},
    lastresort: {uid: 84, pp: [5, 8], target: "normal", mirror: true},
    leechlife: {uid: 85, pp: [15, 24], target: "normal", mirror: true},
    lightscreen: {uid: 86, pp: [30, 48], target: "allySide", sideCondition: "lightscreen", mirror: false},
    lockon: {uid: 87, pp: [5, 8], target: "normal", mirror: true},
    luckychant: {uid: 88, pp: [30, 48], target: "allySide", sideCondition: "luckychant", mirror: false},
    lunardance: {uid: 89, pp: [10, 16], target: "self", sideCondition: "lunardance", mirror: false},
    magiccoat: {uid: 90, pp: [15, 24], target: "self", volatileEffect: "magiccoat", mirror: false},
    magmastorm: {uid: 91, pp: [5, 8], target: "normal", volatileEffect: "partiallytrapped", mirror: true},
    magnetrise: {uid: 92, pp: [10, 16], target: "self", volatileEffect: "magnetrise", mirror: false},
    magnitude: {uid: 93, pp: [30, 48], target: "allAdjacent", mirror: true},
    meanlook: {uid: 94, pp: [5, 8], target: "normal", mirror: true},
    mefirst: {uid: 95, pp: [20, 32], target: "adjacentFoe", mirror: false},
    megadrain: {uid: 96, pp: [15, 24], target: "normal", mirror: true},
    memento: {uid: 97, pp: [10, 16], target: "normal", mirror: true},
    metalburst: {uid: 98, pp: [10, 16], target: "scripted", mirror: true},
    metronome: {uid: 99, pp: [10, 16], target: "self", mirror: false},
    milkdrink: {uid: 100, pp: [10, 16], target: "self", mirror: false},
    mimic: {uid: 101, pp: [10, 16], target: "normal", mirror: false},
    mindreader: {uid: 102, pp: [5, 8], target: "normal", mirror: true},
    minimize: {uid: 103, pp: [20, 32], target: "self", volatileEffect: "minimize", mirror: false},
    miracleeye: {uid: 104, pp: [40, 64], target: "normal", volatileEffect: "miracleeye", mirror: true},
    mirrorcoat: {uid: 105, pp: [20, 32], target: "scripted", mirror: false},
    mirrormove: {uid: 106, pp: [20, 32], target: "self", mirror: false},
    moonlight: {uid: 107, pp: [5, 8], target: "self", mirror: false},
    morningsun: {uid: 108, pp: [5, 8], target: "self", mirror: false},
    mudsport: {uid: 109, pp: [15, 24], target: "all", volatileEffect: "mudsport", mirror: false},
    naturalgift: {uid: 110, pp: [15, 24], target: "normal", mirror: true},
    naturepower: {uid: 111, pp: [20, 32], target: "self", mirror: false},
    odorsleuth: {uid: 112, pp: [40, 64], target: "normal", volatileEffect: "foresight", mirror: true},
    outrage: {uid: 113, pp: [15, 24], target: "randomNormal", selfVolatileEffect: "lockedmove", mirror: true},
    payback: {uid: 114, pp: [10, 16], target: "normal", mirror: true},
    petaldance: {uid: 115, pp: [20, 32], target: "randomNormal", selfVolatileEffect: "lockedmove", mirror: true},
    pinmissile: {uid: 116, pp: [20, 32], target: "normal", mirror: true},
    pluck: {uid: 117, pp: [20, 32], target: "any", mirror: true},
    poisongas: {uid: 118, pp: [40, 64], target: "normal", mirror: true},
    powertrick: {uid: 119, pp: [10, 16], target: "self", volatileEffect: "powertrick", mirror: false},
    protect: {uid: 120, pp: [10, 16], target: "self", volatileEffect: "protect", mirror: false},
    psychup: {uid: 121, pp: [10, 16], target: "normal", mirror: false},
    psywave: {uid: 122, pp: [15, 24], target: "normal", mirror: true},
    pursuit: {uid: 123, pp: [20, 32], target: "normal", mirror: true},
    rapidspin: {uid: 124, pp: [40, 64], target: "normal", mirror: true},
    razorwind: {uid: 125, pp: [10, 16], target: "allAdjacentFoes", mirror: true},
    recover: {uid: 126, pp: [10, 16], target: "self", mirror: false},
    recycle: {uid: 127, pp: [10, 16], target: "self", mirror: false},
    reflect: {uid: 128, pp: [20, 32], target: "allySide", sideCondition: "reflect", mirror: false},
    revenge: {uid: 129, pp: [10, 16], target: "normal", mirror: true},
    reversal: {uid: 130, pp: [15, 24], target: "normal", mirror: true},
    roar: {uid: 131, pp: [20, 32], target: "normal", mirror: true},
    rockblast: {uid: 132, pp: [10, 16], target: "normal", mirror: true},
    roleplay: {uid: 133, pp: [10, 16], target: "normal", mirror: false},
    roost: {uid: 134, pp: [10, 16], target: "self", selfVolatileEffect: "roost", mirror: false},
    sandtomb: {uid: 135, pp: [15, 24], target: "normal", volatileEffect: "partiallytrapped", mirror: true},
    sandstorm: {uid: 136, pp: [10, 16], target: "all", mirror: false},
    scaryface: {uid: 137, pp: [10, 16], target: "normal", mirror: true},
    secretpower: {uid: 138, pp: [20, 32], target: "normal", mirror: true},
    selfdestruct: {uid: 139, pp: [5, 8], target: "allAdjacent", mirror: true},
    sketch: {uid: 140, pp: [1, 1], target: "normal", mirror: false},
    skillswap: {uid: 141, pp: [10, 16], target: "normal", mirror: true},
    skyuppercut: {uid: 142, pp: [15, 24], target: "normal", mirror: true},
    slackoff: {uid: 143, pp: [10, 16], target: "self", mirror: false},
    sleeptalk: {uid: 144, pp: [10, 16], target: "self", mirror: false},
    smellingsalts: {uid: 145, pp: [10, 16], target: "normal", mirror: true},
    snatch: {uid: 146, pp: [10, 16], target: "self", volatileEffect: "snatch", mirror: false},
    softboiled: {uid: 147, pp: [10, 16], target: "self", mirror: false},
    solarbeam: {uid: 148, pp: [10, 16], target: "normal", mirror: true},
    spiderweb: {uid: 149, pp: [10, 16], target: "normal", mirror: true},
    spikecannon: {uid: 150, pp: [15, 24], target: "normal", mirror: true},
    spikes: {uid: 151, pp: [20, 32], target: "foeSide", sideCondition: "spikes", mirror: false},
    spite: {uid: 152, pp: [10, 16], target: "normal", mirror: true},
    spitup: {uid: 153, pp: [10, 16], target: "normal", mirror: false},
    stealthrock: {uid: 154, pp: [20, 32], target: "foeSide", sideCondition: "stealthrock", mirror: false},
    stomp: {uid: 155, pp: [20, 32], target: "normal", mirror: true},
    struggle: {uid: 156, pp: [1, 1], target: "randomNormal", mirror: false},
    submission: {uid: 157, pp: [25, 40], target: "normal", mirror: true},
    substitute: {uid: 158, pp: [10, 16], target: "self", volatileEffect: "substitute", mirror: false},
    suckerpunch: {uid: 159, pp: [5, 8], target: "normal", mirror: true},
    surf: {uid: 160, pp: [15, 24], target: "allAdjacent", mirror: true},
    swallow: {uid: 161, pp: [10, 16], target: "self", mirror: false},
    switcheroo: {uid: 162, pp: [10, 16], target: "normal", mirror: true},
    synthesis: {uid: 163, pp: [5, 8], target: "self", mirror: false},
    tackle: {uid: 164, pp: [35, 56], target: "normal", mirror: true},
    tailglow: {uid: 165, pp: [20, 32], target: "self", mirror: false},
    tailwind: {uid: 166, pp: [30, 48], target: "allySide", sideCondition: "tailwind", mirror: false},
    takedown: {uid: 167, pp: [20, 32], target: "normal", mirror: true},
    taunt: {uid: 168, pp: [20, 32], target: "normal", volatileEffect: "taunt", mirror: true},
    thief: {uid: 169, pp: [10, 16], target: "normal", mirror: true},
    thrash: {uid: 170, pp: [20, 32], target: "randomNormal", selfVolatileEffect: "lockedmove", mirror: true},
    thunder: {uid: 171, pp: [10, 16], target: "normal", mirror: true},
    torment: {uid: 172, pp: [15, 24], target: "normal", volatileEffect: "torment", mirror: true},
    toxic: {uid: 173, pp: [10, 16], target: "normal", mirror: true},
    toxicspikes: {uid: 174, pp: [20, 32], target: "foeSide", sideCondition: "toxicspikes", mirror: false},
    transform: {uid: 175, pp: [10, 16], target: "normal", mirror: false},
    trick: {uid: 176, pp: [10, 16], target: "normal", mirror: true},
    trickroom: {uid: 177, pp: [5, 8], target: "all", mirror: true},
    triplekick: {uid: 178, pp: [10, 16], target: "normal", mirror: true},
    twineedle: {uid: 179, pp: [20, 32], target: "normal", mirror: true},
    twister: {uid: 180, pp: [20, 32], target: "allAdjacentFoes", mirror: true},
    uproar: {uid: 181, pp: [10, 16], target: "randomNormal", selfVolatileEffect: "uproar", mirror: true},
    uturn: {uid: 182, pp: [20, 32], target: "normal", selfSwitch: true, mirror: true},
    volttackle: {uid: 183, pp: [15, 24], target: "normal", mirror: true},
    wakeupslap: {uid: 184, pp: [10, 16], target: "normal", mirror: true},
    watersport: {uid: 185, pp: [15, 24], target: "all", volatileEffect: "watersport", mirror: false},
    whirlpool: {uid: 186, pp: [15, 24], target: "normal", volatileEffect: "partiallytrapped", mirror: true},
    whirlwind: {uid: 187, pp: [20, 32], target: "normal", mirror: true},
    wish: {uid: 188, pp: [10, 16], target: "self", mirror: false},
    woodhammer: {uid: 189, pp: [15, 24], target: "normal", mirror: true},
    worryseed: {uid: 190, pp: [10, 16], target: "normal", mirror: true},
    wrap: {uid: 191, pp: [20, 32], target: "normal", volatileEffect: "partiallytrapped", mirror: true},
    wringout: {uid: 192, pp: [5, 8], target: "normal", mirror: true},
    acidarmor: {uid: 193, pp: [40, 64], target: "self", mirror: false},
    aircutter: {uid: 194, pp: [25, 40], target: "allAdjacentFoes", mirror: true},
    airslash: {uid: 195, pp: [20, 32], target: "any", mirror: true},
    attract: {uid: 196, pp: [15, 24], target: "normal", volatileEffect: "attract", mirror: true},
    aurasphere: {uid: 197, pp: [20, 32], target: "any", mirror: true},
    barrier: {uid: 198, pp: [30, 48], target: "self", mirror: false},
    blizzard: {uid: 199, pp: [5, 8], target: "allAdjacentFoes", mirror: true},
    bodyslam: {uid: 200, pp: [15, 24], target: "normal", mirror: true},
    bubble: {uid: 201, pp: [30, 48], target: "allAdjacentFoes", mirror: true},
    bugbuzz: {uid: 202, pp: [10, 16], target: "normal", mirror: true},
    charm: {uid: 203, pp: [20, 32], target: "normal", mirror: true},
    dracometeor: {uid: 204, pp: [5, 8], target: "normal", mirror: true},
    dragonpulse: {uid: 205, pp: [10, 16], target: "any", mirror: true},
    dragonrush: {uid: 206, pp: [10, 16], target: "normal", mirror: true},
    energyball: {uid: 207, pp: [10, 16], target: "normal", mirror: true},
    extrasensory: {uid: 208, pp: [30, 48], target: "normal", mirror: true},
    facade: {uid: 209, pp: [20, 32], target: "normal", mirror: true},
    fireblast: {uid: 210, pp: [5, 8], target: "normal", mirror: true},
    flamethrower: {uid: 211, pp: [15, 24], target: "normal", mirror: true},
    grasswhistle: {uid: 212, pp: [15, 24], target: "normal", mirror: true},
    growl: {uid: 213, pp: [40, 64], target: "allAdjacentFoes", mirror: true},
    gunkshot: {uid: 214, pp: [5, 8], target: "normal", mirror: true},
    gyroball: {uid: 215, pp: [5, 8], target: "normal", mirror: true},
    heatwave: {uid: 216, pp: [10, 16], target: "allAdjacentFoes", mirror: true},
    hiddenpower: {uid: 217, pp: [15, 24], target: "normal", mirror: true},
    hydropump: {uid: 218, pp: [5, 8], target: "normal", mirror: true},
    hypervoice: {uid: 219, pp: [10, 16], target: "allAdjacentFoes", mirror: true},
    icebeam: {uid: 220, pp: [10, 16], target: "normal", mirror: true},
    leafstorm: {uid: 221, pp: [5, 8], target: "normal", mirror: true},
    lick: {uid: 222, pp: [30, 48], target: "normal", mirror: true},
    metalsound: {uid: 223, pp: [40, 64], target: "normal", mirror: true},
    meteormash: {uid: 224, pp: [10, 16], target: "normal", mirror: true},
    muddywater: {uid: 225, pp: [10, 16], target: "allAdjacentFoes", mirror: true},
    overheat: {uid: 226, pp: [5, 8], target: "normal", mirror: true},
    perishsong: {uid: 227, pp: [5, 8], target: "all", mirror: false},
    poisonfang: {uid: 228, pp: [15, 24], target: "normal", mirror: true},
    poisonpowder: {uid: 229, pp: [35, 56], target: "normal", mirror: true},
    powergem: {uid: 230, pp: [20, 32], target: "normal", mirror: true},
    psychoshift: {uid: 231, pp: [10, 16], target: "normal", mirror: true},
    rocktomb: {uid: 232, pp: [10, 16], target: "normal", mirror: true},
    screech: {uid: 233, pp: [40, 64], target: "normal", mirror: true},
    shadowforce: {uid: 234, pp: [5, 8], target: "normal", mirror: true},
    sing: {uid: 235, pp: [15, 24], target: "normal", mirror: true},
    skullbash: {uid: 236, pp: [15, 24], target: "normal", mirror: true},
    sleeppowder: {uid: 237, pp: [15, 24], target: "normal", mirror: true},
    smog: {uid: 238, pp: [20, 32], target: "normal", mirror: true},
    snore: {uid: 239, pp: [15, 24], target: "normal", mirror: true},
    spore: {uid: 240, pp: [15, 24], target: "normal", mirror: true},
    stringshot: {uid: 241, pp: [40, 64], target: "allAdjacentFoes", mirror: true},
    stunspore: {uid: 242, pp: [30, 48], target: "normal", mirror: true},
    supersonic: {uid: 243, pp: [20, 32], target: "normal", volatileEffect: "confusion", mirror: true},
    sweetkiss: {uid: 244, pp: [10, 16], target: "normal", volatileEffect: "confusion", mirror: true},
    sweetscent: {uid: 245, pp: [20, 32], target: "allAdjacentFoes", mirror: true},
    swordsdance: {uid: 246, pp: [30, 48], target: "self", mirror: false},
    thunderbolt: {uid: 247, pp: [15, 24], target: "normal", mirror: true},
    vinewhip: {uid: 248, pp: [15, 24], target: "normal", mirror: true},
    weatherball: {uid: 249, pp: [10, 16], target: "normal", mirror: true},
    willowisp: {uid: 250, pp: [15, 24], target: "normal", mirror: true},
    darkvoid: {uid: 251, pp: [10, 16], target: "allAdjacentFoes", mirror: true},
    destinybond: {uid: 252, pp: [5, 8], target: "self", volatileEffect: "destinybond", mirror: false},
    gastroacid: {uid: 253, pp: [10, 16], target: "normal", volatileEffect: "gastroacid", mirror: true},
    iceball: {uid: 254, pp: [20, 32], target: "normal", mirror: true},
    rollout: {uid: 255, pp: [20, 32], target: "normal", mirror: true},
    sheercold: {uid: 256, pp: [5, 8], target: "normal", mirror: true},
    stockpile: {uid: 257, pp: [20, 32], target: "self", volatileEffect: "stockpile", mirror: false},
    swagger: {uid: 258, pp: [15, 24], target: "normal", volatileEffect: "confusion", mirror: true},
    thunderwave: {uid: 259, pp: [20, 32], target: "normal", mirror: true},
    aeroblast: {uid: 260, pp: [5, 8], target: "any", mirror: true},
    boneclub: {uid: 261, pp: [20, 32], target: "normal", mirror: true},
    captivate: {uid: 262, pp: [20, 32], target: "allAdjacentFoes", mirror: true},
    constrict: {uid: 263, pp: [35, 56], target: "normal", mirror: true},
    dizzypunch: {uid: 264, pp: [10, 16], target: "normal", mirror: true},
    dragonrage: {uid: 265, pp: [10, 16], target: "normal", mirror: true},
    eggbomb: {uid: 266, pp: [10, 16], target: "normal", mirror: true},
    feintattack: {uid: 267, pp: [20, 32], target: "normal", mirror: true},
    flash: {uid: 268, pp: [20, 32], target: "normal", mirror: true},
    frustration: {uid: 269, pp: [20, 32], target: "normal", mirror: true},
    grassknot: {uid: 270, pp: [20, 32], target: "normal", mirror: true},
    heartswap: {uid: 271, pp: [10, 16], target: "normal", mirror: true},
    howl: {uid: 272, pp: [40, 64], target: "self", mirror: false},
    hyperfang: {uid: 273, pp: [15, 24], target: "normal", mirror: true},
    judgment: {uid: 274, pp: [10, 16], target: "normal", mirror: true},
    karatechop: {uid: 275, pp: [25, 40], target: "normal", mirror: true},
    kinesis: {uid: 276, pp: [15, 24], target: "normal", mirror: true},
    lovelykiss: {uid: 277, pp: [10, 16], target: "normal", mirror: true},
    lowkick: {uid: 278, pp: [20, 32], target: "normal", mirror: true},
    lusterpurge: {uid: 279, pp: [5, 8], target: "normal", mirror: true},
    magnetbomb: {uid: 280, pp: [20, 32], target: "normal", mirror: true},
    meditate: {uid: 281, pp: [40, 64], target: "self", mirror: false},
    mirrorshot: {uid: 282, pp: [10, 16], target: "normal", mirror: true},
    mistball: {uid: 283, pp: [5, 8], target: "normal", mirror: true},
    mudbomb: {uid: 284, pp: [10, 16], target: "normal", mirror: true},
    needlearm: {uid: 285, pp: [15, 24], target: "normal", mirror: true},
    nightmare: {uid: 286, pp: [15, 24], target: "normal", volatileEffect: "nightmare", mirror: true},
    ominouswind: {uid: 287, pp: [5, 8], target: "normal", mirror: true},
    psychoboost: {uid: 288, pp: [5, 8], target: "normal", mirror: true},
    punishment: {uid: 289, pp: [5, 8], target: "normal", mirror: true},
    rage: {uid: 290, pp: [20, 32], target: "normal", selfVolatileEffect: "rage", mirror: true},
    refresh: {uid: 291, pp: [20, 32], target: "self", mirror: false},
    return: {uid: 292, pp: [20, 32], target: "normal", mirror: true},
    roaroftime: {uid: 293, pp: [5, 8], target: "normal", selfVolatileEffect: "mustrecharge", mirror: true},
    rockclimb: {uid: 294, pp: [20, 32], target: "normal", mirror: true},
    rollingkick: {uid: 295, pp: [15, 24], target: "normal", mirror: true},
    sacredfire: {uid: 296, pp: [5, 8], target: "normal", mirror: true},
    seedflare: {uid: 297, pp: [5, 8], target: "normal", mirror: true},
    sharpen: {uid: 298, pp: [30, 48], target: "self", mirror: false},
    signalbeam: {uid: 299, pp: [15, 24], target: "normal", mirror: true},
    silverwind: {uid: 300, pp: [5, 8], target: "normal", mirror: true},
    sonicboom: {uid: 301, pp: [20, 32], target: "normal", mirror: true},
    spacialrend: {uid: 302, pp: [5, 8], target: "normal", mirror: true},
    teleport: {uid: 303, pp: [20, 32], target: "self", mirror: false},
    trumpcard: {uid: 304, pp: [5, 5], target: "normal", mirror: true},
    acid: {uid: 305, pp: [30, 48], target: "allAdjacentFoes", mirror: true},
    aerialace: {uid: 306, pp: [20, 32], target: "any", mirror: true},
    agility: {uid: 307, pp: [30, 48], target: "self", mirror: false},
    amnesia: {uid: 308, pp: [20, 32], target: "self", mirror: false},
    ancientpower: {uid: 309, pp: [5, 8], target: "normal", mirror: true},
    aquajet: {uid: 310, pp: [20, 32], target: "normal", mirror: true},
    aquatail: {uid: 311, pp: [10, 16], target: "normal", mirror: true},
    astonish: {uid: 312, pp: [15, 24], target: "normal", mirror: true},
    attackorder: {uid: 313, pp: [15, 24], target: "normal", mirror: true},
    aurorabeam: {uid: 314, pp: [20, 32], target: "normal", mirror: true},
    batonpass: {uid: 315, pp: [40, 64], target: "self", selfSwitch: "copyvolatile", mirror: false},
    bellydrum: {uid: 316, pp: [10, 16], target: "self", mirror: false},
    bite: {uid: 317, pp: [25, 40], target: "normal", mirror: true},
    blastburn: {uid: 318, pp: [5, 8], target: "normal", selfVolatileEffect: "mustrecharge", mirror: true},
    blazekick: {uid: 319, pp: [10, 16], target: "normal", mirror: true},
    brine: {uid: 320, pp: [10, 16], target: "normal", mirror: true},
    bubblebeam: {uid: 321, pp: [20, 32], target: "normal", mirror: true},
    bulkup: {uid: 322, pp: [20, 32], target: "self", mirror: false},
    bulletpunch: {uid: 323, pp: [30, 48], target: "normal", mirror: true},
    calmmind: {uid: 324, pp: [20, 32], target: "self", mirror: false},
    charge: {uid: 325, pp: [20, 32], target: "self", volatileEffect: "charge", mirror: false},
    chargebeam: {uid: 326, pp: [10, 16], target: "normal", mirror: true},
    closecombat: {uid: 327, pp: [5, 8], target: "normal", mirror: true},
    confuseray: {uid: 328, pp: [10, 16], target: "normal", volatileEffect: "confusion", mirror: true},
    confusion: {uid: 329, pp: [25, 40], target: "normal", mirror: true},
    cosmicpower: {uid: 330, pp: [20, 32], target: "self", mirror: false},
    crosschop: {uid: 331, pp: [5, 8], target: "normal", mirror: true},
    crosspoison: {uid: 332, pp: [20, 32], target: "normal", mirror: true},
    crunch: {uid: 333, pp: [15, 24], target: "normal", mirror: true},
    crushclaw: {uid: 334, pp: [10, 16], target: "normal", mirror: true},
    cut: {uid: 335, pp: [30, 48], target: "normal", mirror: true},
    darkpulse: {uid: 336, pp: [15, 24], target: "any", mirror: true},
    defendorder: {uid: 337, pp: [10, 16], target: "self", mirror: false},
    defensecurl: {uid: 338, pp: [40, 64], target: "self", volatileEffect: "defensecurl", mirror: false},
    discharge: {uid: 339, pp: [15, 24], target: "allAdjacent", mirror: true},
    doubleteam: {uid: 340, pp: [15, 24], target: "self", mirror: false},
    dragonbreath: {uid: 341, pp: [20, 32], target: "normal", mirror: true},
    dragonclaw: {uid: 342, pp: [15, 24], target: "normal", mirror: true},
    dragondance: {uid: 343, pp: [20, 32], target: "self", mirror: false},
    drillpeck: {uid: 344, pp: [20, 32], target: "any", mirror: true},
    dynamicpunch: {uid: 345, pp: [5, 8], target: "normal", mirror: true},
    earthpower: {uid: 346, pp: [10, 16], target: "normal", mirror: true},
    ember: {uid: 347, pp: [25, 40], target: "normal", mirror: true},
    eruption: {uid: 348, pp: [5, 8], target: "allAdjacentFoes", mirror: true},
    faketears: {uid: 349, pp: [20, 32], target: "normal", mirror: true},
    falseswipe: {uid: 350, pp: [40, 64], target: "normal", mirror: true},
    featherdance: {uid: 351, pp: [15, 24], target: "normal", mirror: true},
    firepunch: {uid: 352, pp: [15, 24], target: "normal", mirror: true},
    fissure: {uid: 353, pp: [5, 8], target: "normal", mirror: true},
    flamewheel: {uid: 354, pp: [25, 40], target: "normal", mirror: true},
    flashcannon: {uid: 355, pp: [10, 16], target: "normal", mirror: true},
    flatter: {uid: 356, pp: [15, 24], target: "normal", volatileEffect: "confusion", mirror: true},
    focusblast: {uid: 357, pp: [5, 8], target: "normal", mirror: true},
    focusenergy: {uid: 358, pp: [30, 48], target: "self", volatileEffect: "focusenergy", mirror: false},
    forcepalm: {uid: 359, pp: [10, 16], target: "normal", mirror: true},
    frenzyplant: {uid: 360, pp: [5, 8], target: "normal", selfVolatileEffect: "mustrecharge", mirror: true},
    gigaimpact: {uid: 361, pp: [5, 8], target: "normal", selfVolatileEffect: "mustrecharge", mirror: true},
    grudge: {uid: 362, pp: [5, 8], target: "self", volatileEffect: "grudge", mirror: false},
    guardswap: {uid: 363, pp: [10, 16], target: "normal", mirror: true},
    guillotine: {uid: 364, pp: [5, 8], target: "normal", mirror: true},
    hammerarm: {uid: 365, pp: [10, 16], target: "normal", mirror: true},
    harden: {uid: 366, pp: [30, 48], target: "self", mirror: false},
    haze: {uid: 367, pp: [30, 48], target: "all", mirror: false},
    headbutt: {uid: 368, pp: [15, 24], target: "normal", mirror: true},
    helpinghand: {uid: 369, pp: [20, 32], target: "adjacentAlly", volatileEffect: "helpinghand", mirror: false},
    hornattack: {uid: 370, pp: [25, 40], target: "normal", mirror: true},
    horndrill: {uid: 371, pp: [5, 8], target: "normal", mirror: true},
    hydrocannon: {uid: 372, pp: [5, 8], target: "normal", selfVolatileEffect: "mustrecharge", mirror: true},
    hyperbeam: {uid: 373, pp: [5, 8], target: "normal", selfVolatileEffect: "mustrecharge", mirror: true},
    hypnosis: {uid: 374, pp: [20, 32], target: "normal", mirror: true},
    icefang: {uid: 375, pp: [15, 24], target: "normal", mirror: true},
    icepunch: {uid: 376, pp: [15, 24], target: "normal", mirror: true},
    iceshard: {uid: 377, pp: [30, 48], target: "normal", mirror: true},
    icywind: {uid: 378, pp: [15, 24], target: "allAdjacentFoes", mirror: true},
    irondefense: {uid: 379, pp: [15, 24], target: "self", mirror: false},
    ironhead: {uid: 380, pp: [15, 24], target: "normal", mirror: true},
    irontail: {uid: 381, pp: [15, 24], target: "normal", mirror: true},
    lavaplume: {uid: 382, pp: [15, 24], target: "allAdjacent", mirror: true},
    leafblade: {uid: 383, pp: [15, 24], target: "normal", mirror: true},
    leechseed: {uid: 384, pp: [10, 16], target: "normal", volatileEffect: "leechseed", mirror: true},
    leer: {uid: 385, pp: [30, 48], target: "allAdjacentFoes", mirror: true},
    machpunch: {uid: 386, pp: [30, 48], target: "normal", mirror: true},
    magicalleaf: {uid: 387, pp: [20, 32], target: "normal", mirror: true},
    megahorn: {uid: 388, pp: [10, 16], target: "normal", mirror: true},
    megakick: {uid: 389, pp: [5, 8], target: "normal", mirror: true},
    megapunch: {uid: 390, pp: [20, 32], target: "normal", mirror: true},
    metalclaw: {uid: 391, pp: [35, 56], target: "normal", mirror: true},
    mist: {uid: 392, pp: [30, 48], target: "allySide", sideCondition: "mist", mirror: false},
    mudshot: {uid: 393, pp: [15, 24], target: "normal", mirror: true},
    mudslap: {uid: 394, pp: [10, 16], target: "normal", mirror: true},
    nastyplot: {uid: 395, pp: [20, 32], target: "self", mirror: false},
    nightshade: {uid: 396, pp: [15, 24], target: "normal", mirror: true},
    nightslash: {uid: 397, pp: [15, 24], target: "normal", mirror: true},
    octazooka: {uid: 398, pp: [10, 16], target: "normal", mirror: true},
    painsplit: {uid: 399, pp: [20, 32], target: "normal", mirror: true},
    payday: {uid: 400, pp: [20, 32], target: "normal", mirror: true},
    peck: {uid: 401, pp: [35, 56], target: "any", mirror: true},
    poisonjab: {uid: 402, pp: [20, 32], target: "normal", mirror: true},
    poisonsting: {uid: 403, pp: [35, 56], target: "normal", mirror: true},
    poisontail: {uid: 404, pp: [25, 40], target: "normal", mirror: true},
    pound: {uid: 405, pp: [35, 56], target: "normal", mirror: true},
    powdersnow: {uid: 406, pp: [25, 40], target: "allAdjacentFoes", mirror: true},
    powerswap: {uid: 407, pp: [10, 16], target: "normal", mirror: true},
    powerwhip: {uid: 408, pp: [10, 16], target: "normal", mirror: true},
    present: {uid: 409, pp: [15, 24], target: "normal", mirror: true},
    psybeam: {uid: 410, pp: [20, 32], target: "normal", mirror: true},
    psychic: {uid: 411, pp: [10, 16], target: "normal", mirror: true},
    psychocut: {uid: 412, pp: [20, 32], target: "normal", mirror: true},
    quickattack: {uid: 413, pp: [30, 48], target: "normal", mirror: true},
    raindance: {uid: 414, pp: [5, 8], target: "all", mirror: false},
    razorleaf: {uid: 415, pp: [25, 40], target: "allAdjacentFoes", mirror: true},
    rest: {uid: 416, pp: [10, 16], target: "self", mirror: false},
    rockpolish: {uid: 417, pp: [20, 32], target: "self", mirror: false},
    rockslide: {uid: 418, pp: [10, 16], target: "allAdjacentFoes", mirror: true},
    rocksmash: {uid: 419, pp: [15, 24], target: "normal", mirror: true},
    rockthrow: {uid: 420, pp: [15, 24], target: "normal", mirror: true},
    rockwrecker: {uid: 421, pp: [5, 8], target: "normal", selfVolatileEffect: "mustrecharge", mirror: true},
    safeguard: {uid: 422, pp: [25, 40], target: "allySide", sideCondition: "safeguard", mirror: false},
    sandattack: {uid: 423, pp: [15, 24], target: "normal", mirror: true},
    scratch: {uid: 424, pp: [35, 56], target: "normal", mirror: true},
    seedbomb: {uid: 425, pp: [15, 24], target: "normal", mirror: true},
    seismictoss: {uid: 426, pp: [20, 32], target: "normal", mirror: true},
    shadowball: {uid: 427, pp: [15, 24], target: "normal", mirror: true},
    shadowclaw: {uid: 428, pp: [15, 24], target: "normal", mirror: true},
    shadowpunch: {uid: 429, pp: [20, 32], target: "normal", mirror: true},
    shadowsneak: {uid: 430, pp: [30, 48], target: "normal", mirror: true},
    shockwave: {uid: 431, pp: [20, 32], target: "normal", mirror: true},
    skyattack: {uid: 432, pp: [5, 8], target: "any", mirror: true},
    slam: {uid: 433, pp: [20, 32], target: "normal", mirror: true},
    slash: {uid: 434, pp: [20, 32], target: "normal", mirror: true},
    sludge: {uid: 435, pp: [20, 32], target: "normal", mirror: true},
    sludgebomb: {uid: 436, pp: [10, 16], target: "normal", mirror: true},
    smokescreen: {uid: 437, pp: [20, 32], target: "normal", mirror: true},
    spark: {uid: 438, pp: [20, 32], target: "normal", mirror: true},
    splash: {uid: 439, pp: [40, 64], target: "self", mirror: false},
    steelwing: {uid: 440, pp: [25, 40], target: "normal", mirror: true},
    stoneedge: {uid: 441, pp: [5, 8], target: "normal", mirror: true},
    strength: {uid: 442, pp: [15, 24], target: "normal", mirror: true},
    sunnyday: {uid: 443, pp: [5, 8], target: "all", mirror: false},
    superfang: {uid: 444, pp: [10, 16], target: "normal", mirror: true},
    superpower: {uid: 445, pp: [5, 8], target: "normal", mirror: true},
    swift: {uid: 446, pp: [20, 32], target: "allAdjacentFoes", mirror: true},
    tailwhip: {uid: 447, pp: [30, 48], target: "allAdjacentFoes", mirror: true},
    teeterdance: {uid: 448, pp: [20, 32], target: "allAdjacent", volatileEffect: "confusion", mirror: true},
    thunderfang: {uid: 449, pp: [15, 24], target: "normal", mirror: true},
    thunderpunch: {uid: 450, pp: [15, 24], target: "normal", mirror: true},
    thundershock: {uid: 451, pp: [30, 48], target: "normal", mirror: true},
    tickle: {uid: 452, pp: [20, 32], target: "normal", mirror: true},
    triattack: {uid: 453, pp: [10, 16], target: "normal", mirror: true},
    vacuumwave: {uid: 454, pp: [30, 48], target: "normal", mirror: true},
    visegrip: {uid: 455, pp: [30, 48], target: "normal", mirror: true},
    vitalthrow: {uid: 456, pp: [10, 16], target: "normal", mirror: true},
    waterfall: {uid: 457, pp: [15, 24], target: "normal", mirror: true},
    watergun: {uid: 458, pp: [25, 40], target: "normal", mirror: true},
    waterpulse: {uid: 459, pp: [20, 32], target: "any", mirror: true},
    waterspout: {uid: 460, pp: [5, 8], target: "allAdjacentFoes", mirror: true},
    wingattack: {uid: 461, pp: [35, 56], target: "any", mirror: true},
    withdraw: {uid: 462, pp: [40, 64], target: "self", mirror: false},
    xscissor: {uid: 463, pp: [15, 24], target: "normal", mirror: true},
    yawn: {uid: 464, pp: [10, 16], target: "normal", volatileEffect: "yawn", mirror: true},
    zapcannon: {uid: 465, pp: [5, 8], target: "normal", mirror: true},
    zenheadbutt: {uid: 466, pp: [15, 24], target: "normal", mirror: true}
};

/** Set of all future moves. Maps move name to its id within this object. */
export const futureMoves =
{
    doomdesire: 0,
    futuresight: 1
} as const;

/** Types of future moves. */
export type FutureMove = keyof typeof futureMoves;

/** Number of future moves that exist. */
export const numFutureMoves = 2;

/** Checks if a value is a FutureMove. */
export function isFutureMove(value: any): value is FutureMove
{
    return futureMoves.hasOwnProperty(value);
}

/** Set of all locked moves. Maps move name to its id within this object. */
export const lockedMoves =
{
    outrage: 0,
    petaldance: 1,
    thrash: 2
} as const;

/** Types of locked moves. */
export type LockedMove = keyof typeof lockedMoves;

/** Number of locked moves that exist. */
export const numLockedMoves = 3;

/** Checks if a value is a LockedMove. */
export function isLockedMove(value: any): value is LockedMove
{
    return lockedMoves.hasOwnProperty(value);
}

/** Set of all two-turn moves. Maps move name to its id within this object. */
export const twoTurnMoves =
{
    bounce: 0,
    dig: 1,
    dive: 2,
    fly: 3,
    razorwind: 4,
    solarbeam: 5,
    shadowforce: 6,
    skullbash: 7,
    skyattack: 8
} as const;

/** Types of two-turn moves. */
export type TwoTurnMove = keyof typeof twoTurnMoves;

/** Number of two-turn moves that exist. */
export const numTwoTurnMoves = 9;

/** Checks if a value is a TwoTurnMove. */
export function isTwoTurnMove(value: any): value is TwoTurnMove
{
    return twoTurnMoves.hasOwnProperty(value);
}

const items: {readonly [name: string]: number} =
{
    none: 0,
    adamantorb: 1,
    bigroot: 2,
    choiceband: 3,
    choicescarf: 4,
    choicespecs: 5,
    chopleberry: 6,
    custapberry: 7,
    deepseascale: 8,
    deepseatooth: 9,
    focussash: 10,
    griseousorb: 11,
    ironball: 12,
    jabocaberry: 13,
    kingsrock: 14,
    lifeorb: 15,
    lightball: 16,
    luckypunch: 17,
    lustrousorb: 18,
    mentalherb: 19,
    metronome: 20,
    razorfang: 21,
    rowapberry: 22,
    stick: 23,
    thickclub: 24,
    aguavberry: 25,
    apicotberry: 26,
    aspearberry: 27,
    babiriberry: 28,
    belueberry: 29,
    blukberry: 30,
    chartiberry: 31,
    cheriberry: 32,
    chestoberry: 33,
    chilanberry: 34,
    cobaberry: 35,
    colburberry: 36,
    cornnberry: 37,
    durinberry: 38,
    enigmaberry: 39,
    figyberry: 40,
    ganlonberry: 41,
    grepaberry: 42,
    habanberry: 43,
    hondewberry: 44,
    iapapaberry: 45,
    kasibberry: 46,
    kebiaberry: 47,
    kelpsyberry: 48,
    lansatberry: 49,
    leppaberry: 50,
    liechiberry: 51,
    lumberry: 52,
    mail: 53,
    magoberry: 54,
    magostberry: 55,
    micleberry: 56,
    nanabberry: 57,
    nomelberry: 58,
    occaberry: 59,
    oranberry: 60,
    pamtreberry: 61,
    passhoberry: 62,
    payapaberry: 63,
    pechaberry: 64,
    persimberry: 65,
    petayaberry: 66,
    pinapberry: 67,
    pomegberry: 68,
    qualotberry: 69,
    rabutaberry: 70,
    rawstberry: 71,
    razzberry: 72,
    rindoberry: 73,
    salacberry: 74,
    shucaberry: 75,
    sitrusberry: 76,
    souldew: 77,
    spelonberry: 78,
    starfberry: 79,
    tamatoberry: 80,
    tangaberry: 81,
    wacanberry: 82,
    watmelberry: 83,
    wepearberry: 84,
    wikiberry: 85,
    yacheberry: 86,
    lightclay: 87,
    machobrace: 88,
    leafstone: 89,
    thunderstone: 90,
    armorfossil: 91,
    berryjuice: 92,
    blackbelt: 93,
    blacksludge: 94,
    blackglasses: 95,
    brightpowder: 96,
    charcoal: 97,
    cherishball: 98,
    clawfossil: 99,
    damprock: 100,
    dawnstone: 101,
    destinyknot: 102,
    diveball: 103,
    domefossil: 104,
    dracoplate: 105,
    dragonfang: 106,
    dragonscale: 107,
    dreadplate: 108,
    dubiousdisc: 109,
    duskball: 110,
    duskstone: 111,
    earthplate: 112,
    electirizer: 113,
    energypowder: 114,
    expertbelt: 115,
    fastball: 116,
    firestone: 117,
    fistplate: 118,
    flameorb: 119,
    flameplate: 120,
    focusband: 121,
    friendball: 122,
    fullincense: 123,
    greatball: 124,
    gripclaw: 125,
    hardstone: 126,
    healball: 127,
    heatrock: 128,
    heavyball: 129,
    helixfossil: 130,
    icicleplate: 131,
    icyrock: 132,
    insectplate: 133,
    ironplate: 134,
    laggingtail: 135,
    laxincense: 136,
    leftovers: 137,
    levelball: 138,
    loveball: 139,
    lureball: 140,
    luxuryball: 141,
    magmarizer: 142,
    magnet: 143,
    masterball: 144,
    meadowplate: 145,
    metalcoat: 146,
    metalpowder: 147,
    mindplate: 148,
    miracleseed: 149,
    moonball: 150,
    moonstone: 151,
    muscleband: 152,
    mysticwater: 153,
    nestball: 154,
    netball: 155,
    nevermeltice: 156,
    oddincense: 157,
    oldamber: 158,
    ovalstone: 159,
    parkball: 160,
    poisonbarb: 161,
    pokeball: 162,
    poweranklet: 163,
    powerband: 164,
    powerbelt: 165,
    powerbracer: 166,
    powerherb: 167,
    powerlens: 168,
    powerweight: 169,
    premierball: 170,
    protector: 171,
    quickball: 172,
    quickclaw: 173,
    quickpowder: 174,
    rarebone: 175,
    razorclaw: 176,
    reapercloth: 177,
    repeatball: 178,
    rockincense: 179,
    rootfossil: 180,
    roseincense: 181,
    safariball: 182,
    scopelens: 183,
    seaincense: 184,
    sharpbeak: 185,
    shedshell: 186,
    shellbell: 187,
    shinystone: 188,
    silkscarf: 189,
    silverpowder: 190,
    skullfossil: 191,
    skyplate: 192,
    smoothrock: 193,
    softsand: 194,
    spelltag: 195,
    splashplate: 196,
    spookyplate: 197,
    sportball: 198,
    stickybarb: 199,
    stoneplate: 200,
    sunstone: 201,
    timerball: 202,
    toxicorb: 203,
    toxicplate: 204,
    twistedspoon: 205,
    ultraball: 206,
    upgrade: 207,
    waterstone: 208,
    waveincense: 209,
    whiteherb: 210,
    widelens: 211,
    wiseglasses: 212,
    zapplate: 213,
    zoomlens: 214
};

/** Set of all berry items. Maps name to Natural Gift move data. */
export const berries: {readonly [name: string]: NaturalGiftData} =
{
    chopleberry: {basePower: 60, type: "fighting"},
    custapberry: {basePower: 80, type: "ghost"},
    jabocaberry: {basePower: 80, type: "dragon"},
    rowapberry: {basePower: 80, type: "dark"},
    aguavberry: {basePower: 60, type: "dragon"},
    apicotberry: {basePower: 80, type: "ground"},
    aspearberry: {basePower: 60, type: "ice"},
    babiriberry: {basePower: 60, type: "steel"},
    belueberry: {basePower: 80, type: "electric"},
    blukberry: {basePower: 70, type: "fire"},
    chartiberry: {basePower: 60, type: "rock"},
    cheriberry: {basePower: 60, type: "fire"},
    chestoberry: {basePower: 60, type: "water"},
    chilanberry: {basePower: 60, type: "normal"},
    cobaberry: {basePower: 60, type: "flying"},
    colburberry: {basePower: 60, type: "dark"},
    cornnberry: {basePower: 70, type: "bug"},
    durinberry: {basePower: 80, type: "water"},
    enigmaberry: {basePower: 80, type: "bug"},
    figyberry: {basePower: 60, type: "bug"},
    ganlonberry: {basePower: 80, type: "ice"},
    grepaberry: {basePower: 70, type: "flying"},
    habanberry: {basePower: 60, type: "dragon"},
    hondewberry: {basePower: 70, type: "ground"},
    iapapaberry: {basePower: 60, type: "dark"},
    kasibberry: {basePower: 60, type: "ghost"},
    kebiaberry: {basePower: 60, type: "poison"},
    kelpsyberry: {basePower: 70, type: "fighting"},
    lansatberry: {basePower: 80, type: "flying"},
    leppaberry: {basePower: 60, type: "fighting"},
    liechiberry: {basePower: 80, type: "grass"},
    lumberry: {basePower: 60, type: "flying"},
    magoberry: {basePower: 60, type: "ghost"},
    magostberry: {basePower: 70, type: "rock"},
    micleberry: {basePower: 80, type: "rock"},
    nanabberry: {basePower: 70, type: "water"},
    nomelberry: {basePower: 70, type: "dragon"},
    occaberry: {basePower: 60, type: "fire"},
    oranberry: {basePower: 60, type: "poison"},
    pamtreberry: {basePower: 70, type: "steel"},
    passhoberry: {basePower: 60, type: "water"},
    payapaberry: {basePower: 60, type: "psychic"},
    pechaberry: {basePower: 60, type: "electric"},
    persimberry: {basePower: 60, type: "ground"},
    petayaberry: {basePower: 80, type: "poison"},
    pinapberry: {basePower: 70, type: "grass"},
    pomegberry: {basePower: 70, type: "ice"},
    qualotberry: {basePower: 70, type: "poison"},
    rabutaberry: {basePower: 70, type: "ghost"},
    rawstberry: {basePower: 60, type: "grass"},
    razzberry: {basePower: 60, type: "steel"},
    rindoberry: {basePower: 60, type: "grass"},
    salacberry: {basePower: 80, type: "fighting"},
    shucaberry: {basePower: 60, type: "ground"},
    sitrusberry: {basePower: 60, type: "psychic"},
    spelonberry: {basePower: 70, type: "dark"},
    starfberry: {basePower: 80, type: "psychic"},
    tamatoberry: {basePower: 70, type: "psychic"},
    tangaberry: {basePower: 60, type: "bug"},
    wacanberry: {basePower: 60, type: "electric"},
    watmelberry: {basePower: 80, type: "fire"},
    wepearberry: {basePower: 70, type: "electric"},
    wikiberry: {basePower: 60, type: "rock"},
    yacheberry: {basePower: 60, type: "ice"}
};

/** Contains all relevant Pokemon-related data. */
export const dex: Dex =
{
    pokemon, numPokemon: 526, abilities, numAbilities: 123, moves,
    numMoves: 467, items, numItems: 215
};
