import { EVO_METHOD } from "./evolution/EvoMethod";
import { SPECIES } from "./data/Species";
import { ITEM } from "../item/data/Items";
import { MOVE } from "../move/data/Moves";
import { ABILITY } from "./data/Ability";
import { TYPE } from "./data/Type";

export interface PokemonSubstruct0 {
    species: SPECIES
    heldItem: ITEM
    experience: number
    ppBonuses: number
    friendship: number
}

export interface PokemonSubstruct1 {
    moves: MOVE[] // 4
    pp: number [] // 4
}

export interface PokemonSubstruct2 {
    hpEV: number
    attackEV: number
    defenseEV: number
    speedEV: number
    spAttackEV: number
    spDefenseEV: number
    cool: number
    beauty: number
    cute: number
    smart: number
    tough: number
    sheen: number
}

export interface PokemonSubstruct3 {
 /* 0x00 */ pokerus: number
 /* 0x01 */ metLocation: number

 /* 0x02 */ metLevel: number | 7;
 /* 0x02 */ metGame: number | 4;
 /* 0x03 */ pokeball: number | 4;
 /* 0x03 */ otGender: number | 1;

 /* 0x04 */ hpIV: number | 5;
 /* 0x04 */ attackIV: number | 5;
 /* 0x05 */ defenseIV: number | 5;
 /* 0x05 */ speedIV: number | 5;
 /* 0x05 */ spAttackIV: number | 5;
 /* 0x06 */ spDefenseIV: number | 5;
 /* 0x07 */ isEgg: number | 1;
 /* 0x07 */ abilityNum: number | 1;

 /* 0x08 */ coolRibbon: number | 3;
 /* 0x08 */ beautyRibbon: number | 3;
 /* 0x08 */ cuteRibbon: number | 3;
 /* 0x09 */ smartRibbon: number | 3;
 /* 0x09 */ toughRibbon: number | 3;
 /* 0x09 */ championRibbon: number | 1;
 /* 0x0A */ winningRibbon: number | 1;
 /* 0x0A */ victoryRibbon: number | 1;
 /* 0x0A */ artistRibbon: number | 1;
 /* 0x0A */ effortRibbon: number | 1;
 /* 0x0A */ marineRibbon: number | 1; // never distributed
 /* 0x0A */ landRibbon: number | 1; // never distributed
 /* 0x0A */ skyRibbon: number | 1; // never distributed
 /* 0x0A */ countryRibbon: number | 1; // distributed during Pokémon Festa '04 and '05 to tournament winners
 /* 0x0B */ nationalRibbon: number | 1;
 /* 0x0B */ earthRibbon: number | 1;
 /* 0x0B */ worldRibbon: number | 1; // distributed during Pokémon Festa '04 and '05 to tournament winners
 /* 0x0B */ filler: number | 4;
 /* 0x0B */ eventLegal: number | 1; // controls Mew & Deoxys obedience; if set, Pokémon is a fateful encounter in FRLG & Gen 4+ summary screens; set for in-game event island legendaries, some distributed events, and Pokémon from XD: number |  Gale of Darkness.
}

export interface PokemonSubstruct {
    type0: PokemonSubstruct0
    type1: PokemonSubstruct1
    type2: PokemonSubstruct2
    type3: PokemonSubstruct3
    raw: number[] // 6
}

export interface BoxPokemon {
    personality: number
    otId: number
    nickname: number[] // POKEMON_NAME_LENGTH
    language: number
    isBadEgg: number | 1
    hasSpecies: number | 1
    isEgg: number | 1
    unused: number | 5
    otName: number[] // OT_NAME_LENGTH
    markings: number
    checksum: number
    unknown: number
    secure: {
        raw: number[] //12
        substructs: PokemonSubstruct // 4
    }
}

export interface Pokemon {
    box: BoxPokemon
    status: number
    level: number
    mail: number
    hp: number
    maxHP: number
    attack: number
    defense: number
    speed: number
    spAttack: number
    spDefense: number
}

export interface BattlePokemon {
    species: SPECIES
    attack: number
    defense: number
    speed: number
    spAttack: number
    spDefense: number
    moves: MOVE[] 
    hpIV: number | 5
    attackIV: number | 5
    defenseIV: number | 5
    speedIV: number | 5
    spAttackIV: number | 5
    spDefenseIV: number | 5
    isEgg: boolean | 1
    abilityNum: number | 1;
    statStages: number[];
    ability: ABILITY
    type1: TYPE
    type2: TYPE
    unknown: number
    pp: number[]
    hp: number
    level: number
    friendship: number
    maxHP: number
    item: ITEM
    nickname: string
    ppBonuses: number
    otName: string
    experience: number
    personality: number
    status1: number
    status2: number
    otId: number
}

export interface Evolution
{
    method: EVO_METHOD
    param: number
    targetSpecies: SPECIES
};