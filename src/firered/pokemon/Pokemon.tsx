import { EnigmaBerries, TrainerBattleOpponent_A, Trainers } from "../battle/Battle";
import { BattleTypeFlags } from "../battle/BattleMain";
import { Text_BadEgg } from "../battle/BattleMessage";
import { BATTLE_TYPE_LINK_ESTABLISHED, BATTLE_TYPE_TRAINER } from "../data/BattleData";
import { HOLD_EFFECT_HAPPINESS_UP } from "../data/HoldEffectsData";
import { ITEM_ENIGMA_BERRY, ITEM_LUXURY_BALL } from "../data/ItemData";
import { MOVES_COUNT } from "../data/MoveData";
import { FRIENDSHIP_EVENT_LEAGUE_BATTLE, FRIENDSHIP_EVENT_WALKING, MON_DATA_ABILITY_NUM, MON_DATA_ARTIST_RIBBON, MON_DATA_ATK, MON_DATA_ATK2, MON_DATA_ATK_EV, MON_DATA_ATK_IV, MON_DATA_BEAUTY, MON_DATA_BEAUTY_RIBBON, MON_DATA_CHAMPION_RIBBON, MON_DATA_CHECKSUM, MON_DATA_COOL, MON_DATA_COOL_RIBBON, MON_DATA_COUNTRY_RIBBON, MON_DATA_CUTE, MON_DATA_CUTE_RIBBON, MON_DATA_DEF, MON_DATA_DEF2, MON_DATA_DEF_EV, MON_DATA_DEF_IV, MON_DATA_EARTH_RIBBON, MON_DATA_EFFORT_RIBBON, MON_DATA_ENCRYPT_SEPARATOR, MON_DATA_EVENT_LEGAL, MON_DATA_EXP, MON_DATA_FILLER, MON_DATA_FRIENDSHIP, MON_DATA_HELD_ITEM, MON_DATA_HP, MON_DATA_HP_EV, MON_DATA_HP_IV, MON_DATA_IS_EGG, MON_DATA_IVS, MON_DATA_KNOWN_MOVES, MON_DATA_LAND_RIBBON, MON_DATA_LANGUAGE, MON_DATA_LEVEL, MON_DATA_MAIL, MON_DATA_MARINE_RIBBON, MON_DATA_MARKINGS, MON_DATA_MAX_HP, MON_DATA_MET_GAME, MON_DATA_MET_LEVEL, MON_DATA_MET_LOCATION, MON_DATA_MOVE1, MON_DATA_MOVE2, MON_DATA_MOVE3, MON_DATA_MOVE4, MON_DATA_NATIONAL_RIBBON, MON_DATA_NICKNAME, MON_DATA_OT_GENDER, MON_DATA_OT_ID, MON_DATA_OT_NAME, MON_DATA_PERSONALITY, MON_DATA_POKEBALL, MON_DATA_POKERUS, MON_DATA_PP1, MON_DATA_PP2, MON_DATA_PP3, MON_DATA_PP4, MON_DATA_PP_BONUSES, MON_DATA_RIBBONS, MON_DATA_RIBBON_COUNT, MON_DATA_SANITY_HAS_SPECIES, MON_DATA_SANITY_IS_BAD_EGG, MON_DATA_SANITY_IS_EGG, MON_DATA_SHEEN, MON_DATA_SKY_RIBBON, MON_DATA_SMART, MON_DATA_SMART_RIBBON, MON_DATA_SPATK, MON_DATA_SPATK2, MON_DATA_SPATK_EV, MON_DATA_SPATK_IV, MON_DATA_SPDEF, MON_DATA_SPDEF2, MON_DATA_SPDEF_EV, MON_DATA_SPDEF_IV, MON_DATA_SPECIES, MON_DATA_SPECIES2, MON_DATA_SPEED, MON_DATA_SPEED2, MON_DATA_SPEED_EV, MON_DATA_SPEED_IV, MON_DATA_STATUS, MON_DATA_TOUGH, MON_DATA_TOUGH_RIBBON, MON_DATA_VICTORY_RIBBON, MON_DATA_WINNING_RIBBON, MON_DATA_WORLD_RIBBON, STAT_ATK, STAT_DEF, STAT_SPATK, STAT_SPDEF, STAT_SPEED } from "../data/PokemonData";
import { SPECIES_DEOXYS, SPECIES_EGG } from "../data/SpeciesData";
import { Text_EggNickname } from "../data/StringData";
import { EOS, EXT_CTRL_CODE_BEGIN, EXT_CTRL_CODE_ENG, EXT_CTRL_CODE_JPN } from "../data/TextData";
import { CLASS_CHAMPION_2, CLASS_ELITE_FOUR_2, CLASS_LEADER_2 } from "../data/TrainerClassesData";
import { BUGFIX_SETMONIVS, LANGUAGE_JAPANESE, POKEMON_NAME_LENGTH, SaveBlock1Ptr } from "../Global";
import { ItemId_GetHoldEffect } from "../item/Item";
import { Main } from "../Main";
import { GetCurrentRegionMapSectionId } from "../overworld/Overworld";
import { BitTable } from "../utils/Util";
import { Pokemon, BoxPokemon, PokemonSubstruct1, PokemonSubstruct0, PokemonSubstruct2, PokemonSubstruct3, PokemonSubstruct } from "./IPokemon";
import { DeoxysBaseStats, FriendshipEventDeltas, NatureStatTable } from "./PokemonTables";

export let PlayerParty: Pokemon[] = []

export function EncryptBoxMon(boxMon: BoxPokemon) {
    let i;

    for (i = 0; i < 12; i++) {
        boxMon.secure.raw[i] ^= boxMon.personality;
        boxMon.secure.raw[i] ^= boxMon.otId;
    }
}

export function DecryptBoxMon(boxMon: BoxPokemon) {
    let i;

    for (i = 0; i < 12; i++)
    {
        boxMon.secure.raw[i] ^= boxMon.otId;
        boxMon.secure.raw[i] ^= boxMon.personality;
    }
}


export function SUBSTRUCT_CASE(boxMon: BoxPokemon, substructType: number,  v1: number, v2: number, v3: number, v4: number): PokemonSubstruct {                                                                                                                  
    // WHAT DOES THIS DO?
    // let substructs0: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs1: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs2: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs3: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs4: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs5: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs6: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs7: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs8: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs9: PokemonSubstruct[] = boxMon.secure.substructs;    
    // let substructs10: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs11: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs12: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs13: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs14: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs15: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs16: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs17: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs18: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs19: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs20: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs21: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs22: PokemonSubstruct[] = boxMon.secure.substructs;   
    // let substructs23: PokemonSubstruct[] = boxMon.secure.substructs;   
        
    let substruct: PokemonSubstruct;

    switch (substructType) {    
        default:                                                           
        case 0:                                                         
            substruct = boxMon.secure.substructs[v1];                          
            break;                                                      
        case 1:                                                         
            substruct = boxMon.secure.substructs[v2];                          
            break;                                                      
        case 2:                                                         
            substruct = boxMon.secure.substructs[v3];                          
            break;                                                      
        case 3:                                                         
            substruct = boxMon.secure.substructs[v4];                          
            break;                                                      
    }                                                                  
    
    return substruct
}            

export function GetSubstruct(boxMon: BoxPokemon, personality: number, substructType: number): PokemonSubstruct {
    switch (personality % 24){
        default:
        case 0:
            return SUBSTRUCT_CASE(boxMon,substructType,0,1,2,3)
        case 1:
            return SUBSTRUCT_CASE(boxMon,substructType,0,1,3,2)
        case 2:
            return SUBSTRUCT_CASE(boxMon,substructType,0,2,1,3)
        case 3:
            return SUBSTRUCT_CASE(boxMon,substructType,0,3,1,2)
        case 4:
            return SUBSTRUCT_CASE(boxMon,substructType,0,2,3,1)
        case 5:
            return SUBSTRUCT_CASE(boxMon,substructType,0,3,2,1)
        case 6:
            return SUBSTRUCT_CASE(boxMon,substructType,1,0,2,3)
        case 7:
            return SUBSTRUCT_CASE(boxMon,substructType,1,0,3,2)
        case 8:
            return SUBSTRUCT_CASE(boxMon,substructType,2,0,1,3)
        case 9:
            return SUBSTRUCT_CASE(boxMon,substructType,3,0,1,2)
        case 10:
            return SUBSTRUCT_CASE(boxMon,substructType,2,0,3,1)
        case 11:
            return SUBSTRUCT_CASE(boxMon,substructType,3,0,2,1)
        case 12:
            return SUBSTRUCT_CASE(boxMon,substructType,1,2,0,3)
        case 13:
            return SUBSTRUCT_CASE(boxMon,substructType,1,3,0,2)
        case 14:
            return SUBSTRUCT_CASE(boxMon,substructType,2,1,0,3)
        case 15:
            return SUBSTRUCT_CASE(boxMon,substructType,3,1,0,2)
        case 16:
            return SUBSTRUCT_CASE(boxMon,substructType,2,3,0,1)
        case 17:
            return SUBSTRUCT_CASE(boxMon,substructType,3,2,0,1)
        case 18:
            return SUBSTRUCT_CASE(boxMon,substructType,1,2,3,0)
        case 19:
            return SUBSTRUCT_CASE(boxMon,substructType,1,3,2,0)
        case 20:
            return SUBSTRUCT_CASE(boxMon,substructType,2,1,3,0)
        case 21:
            return SUBSTRUCT_CASE(boxMon,substructType,3,1,2,0)
        case 22:
            return SUBSTRUCT_CASE(boxMon,substructType,2,3,1,0)
        case 23:
            return SUBSTRUCT_CASE(boxMon,substructType,3,2,1,0)
    }
}

export function CalculateBoxMonChecksum(boxMon: BoxPokemon): number {
    let checksum = 0;
    let substruct0 = GetSubstruct(boxMon, boxMon.personality, 0);
    let substruct1 = GetSubstruct(boxMon, boxMon.personality, 1);
    let substruct2 = GetSubstruct(boxMon, boxMon.personality, 2);
    let substruct3 = GetSubstruct(boxMon, boxMon.personality, 3);
    let i;

    for (i = 0; i < 6; i++)
        checksum += substruct0.raw[i];

    for (i = 0; i < 6; i++)
        checksum += substruct1.raw[i];

    for (i = 0; i < 6; i++)
        checksum += substruct2.raw[i];

    for (i = 0; i < 6; i++)
        checksum += substruct3.raw[i];

    return checksum;
}

export function GetMonData(mon: Pokemon, field: number, data: any): number {
    let ret;

    switch (field)
    {
        case MON_DATA_STATUS:
            ret = mon.status;
            break;
        case MON_DATA_LEVEL:
            ret = mon.level;
            break;
        case MON_DATA_HP:
            ret = mon.hp;
            break;
        case MON_DATA_MAX_HP:
            ret = mon.maxHP;
            break;
        case MON_DATA_ATK:
            ret = GetDeoxysStat(mon, STAT_ATK);
            if (!ret)
                ret = mon.attack;
            break;
        case MON_DATA_DEF:
            ret = GetDeoxysStat(mon, STAT_DEF);
            if (!ret)
                ret = mon.defense;
            break;
        case MON_DATA_SPEED:
            ret = GetDeoxysStat(mon, STAT_SPEED);
            if (!ret)
                ret = mon.speed;
            break;
        case MON_DATA_SPATK:
            ret = GetDeoxysStat(mon, STAT_SPATK);
            if (!ret)
                ret = mon.spAttack;
            break;
        case MON_DATA_SPDEF:
            ret = GetDeoxysStat(mon, STAT_SPDEF);
            if (!ret)
                ret = mon.spDefense;
            break;
        case MON_DATA_ATK2:
            ret = mon.attack;
            break;
        case MON_DATA_DEF2:
            ret = mon.defense;
            break;
        case MON_DATA_SPEED2:
            ret = mon.speed;
            break;
        case MON_DATA_SPATK2:
            ret = mon.spAttack;
            break;
        case MON_DATA_SPDEF2:
            ret = mon.spDefense;
            break;
        case MON_DATA_MAIL:
            ret = mon.mail;
            break;
        default:
            ret = GetBoxMonData(mon.box, field, data);
            break;
        }
    return ret;
}

export function GetBoxMonData(boxMon: BoxPokemon, field: number, data: any): number {
    let i;
    let retVal = 0;
    let substruct0: PokemonSubstruct0;
    let substruct1: PokemonSubstruct1;
    let substruct2: PokemonSubstruct2;
    let substruct3: PokemonSubstruct3;

    if (field > MON_DATA_ENCRYPT_SEPARATOR)
    {
        substruct0! = GetSubstruct(boxMon, boxMon.personality, 0).type0;
        substruct1! = GetSubstruct(boxMon, boxMon.personality, 1).type1;
        substruct2! = GetSubstruct(boxMon, boxMon.personality, 2).type2;
        substruct3! = GetSubstruct(boxMon, boxMon.personality, 3).type3;

        DecryptBoxMon(boxMon);

        if (CalculateBoxMonChecksum(boxMon) != boxMon.checksum)
        {
            boxMon.isBadEgg = 1;
            boxMon.isEgg = 1;
            substruct3!.isEgg = 1;
        }
    }

    switch (field)
    {
        case MON_DATA_PERSONALITY:
            retVal = boxMon.personality;
            break;
        case MON_DATA_OT_ID:
            retVal = boxMon.otId;
            break;
        case MON_DATA_NICKNAME:
        {
            if (boxMon.isBadEgg)
            {
                // does nothing
                // for (retVal = 0;
                //     retVal < POKEMON_NAME_LENGTH && Text_BadEgg[retVal] != EOS;
                //     data[retVal] = Text_BadEgg[retVal], retVal++) {}

                data = Text_BadEgg;
            }
            else if (boxMon.isEgg)
            {
                data = Text_EggNickname;
                retVal = data.length();
            }
            else if (boxMon.language == LANGUAGE_JAPANESE)
            {
                data[0] = EXT_CTRL_CODE_BEGIN;
                data[1] = EXT_CTRL_CODE_JPN;

                // FRLG changed i < 7 to i < 6
                for (retVal = 2, i = 0;
                    i < 6 && boxMon.nickname[i] != EOS;
                    data[retVal] = boxMon.nickname[i], retVal++, i++) {}

                data[retVal++] = EXT_CTRL_CODE_BEGIN;
                data[retVal++] = EXT_CTRL_CODE_ENG;
                data[retVal] = EOS;
            }
            else
            {
                for (retVal = 0;
                    retVal < POKEMON_NAME_LENGTH;
                    data[retVal] = boxMon.nickname[retVal], retVal++){}

                data[retVal] = EOS;
            }
            break;
        }
        case MON_DATA_LANGUAGE:
            retVal = boxMon.language;
            break;
        case MON_DATA_SANITY_IS_BAD_EGG:
            retVal = boxMon.isBadEgg;
            break;
        case MON_DATA_SANITY_HAS_SPECIES:
            retVal = boxMon.hasSpecies;
            break;
        case MON_DATA_SANITY_IS_EGG:
            retVal = boxMon.isEgg;
            break;
        case MON_DATA_OT_NAME:
        {
            retVal = 0;

            // FRLG changed this to 7 which used to be PLAYER_NAME_LENGTH + 1
            while (retVal < 7)
            {
                data[retVal] = boxMon.otName[retVal];
                retVal++;
            }

            data[retVal] = EOS;
            break;
        }
        case MON_DATA_MARKINGS:
            retVal = boxMon.markings;
            break;
        case MON_DATA_CHECKSUM:
            retVal = boxMon.checksum;
            break;
        case MON_DATA_ENCRYPT_SEPARATOR:
            retVal = boxMon.unknown;
            break;
        case MON_DATA_SPECIES:
            retVal = boxMon.isBadEgg ? SPECIES_EGG : substruct0!.species;
            break;
        case MON_DATA_HELD_ITEM:
            retVal = substruct0!.heldItem;
            break;
        case MON_DATA_EXP:
            retVal = substruct0!.experience;
            break;
        case MON_DATA_PP_BONUSES:
            retVal = substruct0!.ppBonuses;
            break;
        case MON_DATA_FRIENDSHIP:
            retVal = substruct0!.friendship;
            break;
        case MON_DATA_MOVE1:
        case MON_DATA_MOVE2:
        case MON_DATA_MOVE3:
        case MON_DATA_MOVE4:
            retVal = substruct1!.moves[field - MON_DATA_MOVE1];
            break;
        case MON_DATA_PP1:
        case MON_DATA_PP2:
        case MON_DATA_PP3:
        case MON_DATA_PP4:
            retVal = substruct1!.pp[field - MON_DATA_PP1];
            break;
        case MON_DATA_HP_EV:
            retVal = substruct2!.hpEV;
            break;
        case MON_DATA_ATK_EV:
            retVal = substruct2!.attackEV;
            break;
        case MON_DATA_DEF_EV:
            retVal = substruct2!.defenseEV;
            break;
        case MON_DATA_SPEED_EV:
            retVal = substruct2!.speedEV;
            break;
        case MON_DATA_SPATK_EV:
            retVal = substruct2!.spAttackEV;
            break;
        case MON_DATA_SPDEF_EV:
            retVal = substruct2!.spDefenseEV;
            break;
        case MON_DATA_COOL:
            retVal = substruct2!.cool;
            break;
        case MON_DATA_BEAUTY:
            retVal = substruct2!.beauty;
            break;
        case MON_DATA_CUTE:
            retVal = substruct2!.cute;
            break;
        case MON_DATA_SMART:
            retVal = substruct2!.smart;
            break;
        case MON_DATA_TOUGH:
            retVal = substruct2!.tough;
            break;
        case MON_DATA_SHEEN:
            retVal = substruct2!.sheen;
            break;
        case MON_DATA_POKERUS:
            retVal = substruct3!.pokerus;
            break;
        case MON_DATA_MET_LOCATION:
            retVal = substruct3!.metLocation;
            break;
        case MON_DATA_MET_LEVEL:
            retVal = substruct3!.metLevel;
            break;
        case MON_DATA_MET_GAME:
            retVal = substruct3!.metGame;
            break;
        case MON_DATA_POKEBALL:
            retVal = substruct3!.pokeball;
            break;
        case MON_DATA_OT_GENDER:
            retVal = substruct3!.otGender;
            break;
        case MON_DATA_HP_IV:
            retVal = substruct3!.hpIV;
            break;
        case MON_DATA_ATK_IV:
            retVal = substruct3!.attackIV;
            break;
        case MON_DATA_DEF_IV:
            retVal = substruct3!.defenseIV;
            break;
        case MON_DATA_SPEED_IV:
            retVal = substruct3!.speedIV;
            break;
        case MON_DATA_SPATK_IV:
            retVal = substruct3!.spAttackIV;
            break;
        case MON_DATA_SPDEF_IV:
            retVal = substruct3!.spDefenseIV;
            break;
        case MON_DATA_IS_EGG:
            retVal = substruct3!.isEgg;
            break;
        case MON_DATA_ABILITY_NUM:
            retVal = substruct3!.abilityNum;
            break;
        case MON_DATA_COOL_RIBBON:
            retVal = substruct3!.coolRibbon;
            break;
        case MON_DATA_BEAUTY_RIBBON:
            retVal = substruct3!.beautyRibbon;
            break;
        case MON_DATA_CUTE_RIBBON:
            retVal = substruct3!.cuteRibbon;
            break;
        case MON_DATA_SMART_RIBBON:
            retVal = substruct3!.smartRibbon;
            break;
        case MON_DATA_TOUGH_RIBBON:
            retVal = substruct3!.toughRibbon;
            break;
        case MON_DATA_CHAMPION_RIBBON:
            retVal = substruct3!.championRibbon;
            break;
        case MON_DATA_WINNING_RIBBON:
            retVal = substruct3!.winningRibbon;
            break;
        case MON_DATA_VICTORY_RIBBON:
            retVal = substruct3!.victoryRibbon;
            break;
        case MON_DATA_ARTIST_RIBBON:
            retVal = substruct3!.artistRibbon;
            break;
        case MON_DATA_EFFORT_RIBBON:
            retVal = substruct3!.effortRibbon;
            break;
        case MON_DATA_MARINE_RIBBON:
            retVal = substruct3!.marineRibbon;
            break;
        case MON_DATA_LAND_RIBBON:
            retVal = substruct3!.landRibbon;
            break;
        case MON_DATA_SKY_RIBBON:
            retVal = substruct3!.skyRibbon;
            break;
        case MON_DATA_COUNTRY_RIBBON:
            retVal = substruct3!.countryRibbon;
            break;
        case MON_DATA_NATIONAL_RIBBON:
            retVal = substruct3!.nationalRibbon;
            break;
        case MON_DATA_EARTH_RIBBON:
            retVal = substruct3!.earthRibbon;
            break;
        case MON_DATA_WORLD_RIBBON:
            retVal = substruct3!.worldRibbon;
            break;
        case MON_DATA_FILLER:
            retVal = substruct3!.filler;
            break;
        case MON_DATA_EVENT_LEGAL:
            retVal = substruct3!.eventLegal;
            break;
        case MON_DATA_SPECIES2:
            retVal = substruct0!.species;
            if (substruct0!.species && (substruct3!.isEgg || boxMon.isBadEgg))
                retVal = SPECIES_EGG;
            break;
        case MON_DATA_IVS:
            retVal = substruct3!.hpIV | (substruct3!.attackIV << 5) | (substruct3!.defenseIV << 10) | (substruct3!.speedIV << 15) | (substruct3!.spAttackIV << 20) | (substruct3!.spDefenseIV << 25);
            break;
        case MON_DATA_KNOWN_MOVES:
            if (substruct0!.species && !substruct3!.isEgg)
            {
                let moves = data;
                let i = 0;

                while (moves[i] != MOVES_COUNT)
                {
                    let move = moves[i];
                    if (substruct1!.moves[0] == move
                        || substruct1!.moves[1] == move
                        || substruct1!.moves[2] == move
                        || substruct1!.moves[3] == move)
                        retVal |= BitTable[i];
                    i++;
                }
            }
            break;
        case MON_DATA_RIBBON_COUNT:
            retVal = 0;
            if (substruct0!.species && !substruct3!.isEgg)
            {
                retVal += substruct3!.coolRibbon;
                retVal += substruct3!.beautyRibbon;
                retVal += substruct3!.cuteRibbon;
                retVal += substruct3!.smartRibbon;
                retVal += substruct3!.toughRibbon;
                retVal += substruct3!.championRibbon;
                retVal += substruct3!.winningRibbon;
                retVal += substruct3!.victoryRibbon;
                retVal += substruct3!.artistRibbon;
                retVal += substruct3!.effortRibbon;
                retVal += substruct3!.marineRibbon;
                retVal += substruct3!.landRibbon;
                retVal += substruct3!.skyRibbon;
                retVal += substruct3!.countryRibbon;
                retVal += substruct3!.nationalRibbon;
                retVal += substruct3!.earthRibbon;
                retVal += substruct3!.worldRibbon;
            }
            break;
        case MON_DATA_RIBBONS:
            retVal = 0;
            if (substruct0!.species && !substruct3!.isEgg)
            {
                retVal = substruct3!.championRibbon
                    | (substruct3!.coolRibbon << 1)
                    | (substruct3!.beautyRibbon << 4)
                    | (substruct3!.cuteRibbon << 7)
                    | (substruct3!.smartRibbon << 10)
                    | (substruct3!.toughRibbon << 13)
                    | (substruct3!.winningRibbon << 16)
                    | (substruct3!.victoryRibbon << 17)
                    | (substruct3!.artistRibbon << 18)
                    | (substruct3!.effortRibbon << 19)
                    | (substruct3!.marineRibbon << 20)
                    | (substruct3!.landRibbon << 21)
                    | (substruct3!.skyRibbon << 22)
                    | (substruct3!.countryRibbon << 23)
                    | (substruct3!.nationalRibbon << 24)
                    | (substruct3!.earthRibbon << 25)
                    | (substruct3!.worldRibbon << 26);
            }
            break;
        default:
            break;
    }

    if (field > MON_DATA_ENCRYPT_SEPARATOR)
        EncryptBoxMon(boxMon);

    return retVal;
}

export function SET8(lhs: any, data: any) { lhs = data }
export function SET16(lhs: any, data: any) { lhs = data }
export function SET32(lhs: any, data: any) { lhs = data }

export function SetMonData(mon: Pokemon, field: number, dataArg: any) {
    let data = dataArg;

    switch (field)
    {
        case MON_DATA_STATUS:
            SET32(mon.status, data);
            break;
        case MON_DATA_LEVEL:
            SET8(mon.level, data);
            break;
        case MON_DATA_HP:
            SET16(mon.hp, data);
            break;
        case MON_DATA_MAX_HP:
            SET16(mon.maxHP, data);
            break;
        case MON_DATA_ATK:
        case MON_DATA_ATK2:
            SET16(mon.attack, data);
            break;
        case MON_DATA_DEF:
        case MON_DATA_DEF2:
            SET16(mon.defense, data);
            break;
        case MON_DATA_SPEED:
        case MON_DATA_SPEED2:
            SET16(mon.speed, data);
            break;
        case MON_DATA_SPATK:
        case MON_DATA_SPATK2:
            SET16(mon.spAttack, data);
            break;
        case MON_DATA_SPDEF:
        case MON_DATA_SPDEF2:
            SET16(mon.spDefense, data);
            break;
        case MON_DATA_MAIL:
            SET8(mon.mail, data);
            break;
        case MON_DATA_SPECIES2:
            break;
        // why did FRLG go out of its way to specify all of these for default?
        case MON_DATA_IVS:
        case MON_DATA_CHAMPION_RIBBON:
        case MON_DATA_WINNING_RIBBON:
        case MON_DATA_VICTORY_RIBBON:
        case MON_DATA_ARTIST_RIBBON:
        case MON_DATA_EFFORT_RIBBON:
        case MON_DATA_MARINE_RIBBON:
        case MON_DATA_LAND_RIBBON:
        case MON_DATA_SKY_RIBBON:
        case MON_DATA_COUNTRY_RIBBON:
        case MON_DATA_NATIONAL_RIBBON:
        case MON_DATA_EARTH_RIBBON:
        case MON_DATA_WORLD_RIBBON:
        case MON_DATA_FILLER:
        case MON_DATA_EVENT_LEGAL:
        case MON_DATA_KNOWN_MOVES:
        case MON_DATA_RIBBON_COUNT:
        case MON_DATA_RIBBONS:
        default:
            SetBoxMonData(mon.box, field, data);
            break;
    }
}

export function SetBoxMonData(boxMon: BoxPokemon, field: number, dataArg: any) {
    let data = dataArg;
    let substruct0: PokemonSubstruct0;
    let substruct1: PokemonSubstruct1;
    let substruct2: PokemonSubstruct2;
    let substruct3: PokemonSubstruct3;

    if (field > MON_DATA_ENCRYPT_SEPARATOR)
    {
        substruct0 = GetSubstruct(boxMon, boxMon.personality, 0).type0;
        substruct1 = GetSubstruct(boxMon, boxMon.personality, 1).type1;
        substruct2 = GetSubstruct(boxMon, boxMon.personality, 2).type2;
        substruct3 = GetSubstruct(boxMon, boxMon.personality, 3).type3;

        DecryptBoxMon(boxMon);

        if (CalculateBoxMonChecksum(boxMon) != boxMon.checksum)
        {
            boxMon.isBadEgg = 1;
            boxMon.isEgg = 1;
            substruct3.isEgg = 1;
            EncryptBoxMon(boxMon);
            return;
        }
    }

    switch (field)
    {
        case MON_DATA_PERSONALITY:
            SET32(boxMon.personality, data);
            break;
        case MON_DATA_OT_ID:
            SET32(boxMon.otId, data);
            break;
        case MON_DATA_NICKNAME:
        {
            let i;
            for (i = 0; i < POKEMON_NAME_LENGTH; i++)
                boxMon.nickname[i] = data[i];
            break;
        }
        case MON_DATA_LANGUAGE:
            SET8(boxMon.language, data);
            break;
        case MON_DATA_SANITY_IS_BAD_EGG:
            SET8(boxMon.isBadEgg, data);
            break;
        case MON_DATA_SANITY_HAS_SPECIES:
            SET8(boxMon.hasSpecies, data);
            break;
        case MON_DATA_SANITY_IS_EGG:
            SET8(boxMon.isEgg, data);
            break;
        case MON_DATA_OT_NAME:
        {
            let i;
            for (i = 0; i < 7; i++)
                boxMon.otName[i] = data[i];
            break;
        }
        case MON_DATA_MARKINGS:
            SET8(boxMon.markings, data);
            break;
        case MON_DATA_CHECKSUM:
            SET16(boxMon.checksum, data);
            break;
        case MON_DATA_ENCRYPT_SEPARATOR:
            SET16(boxMon.unknown, data);
            break;
        case MON_DATA_SPECIES:
        {
            SET16(substruct0!.species, data);
            if (substruct0!.species)
                boxMon.hasSpecies = 1;
            else
                boxMon.hasSpecies = 0;
            break;
        }
        case MON_DATA_HELD_ITEM:
            SET16(substruct0!.heldItem, data);
            break;
        case MON_DATA_EXP:
            SET32(substruct0!.experience, data);
            break;
        case MON_DATA_PP_BONUSES:
            SET8(substruct0!.ppBonuses, data);
            break;
        case MON_DATA_FRIENDSHIP:
            SET8(substruct0!.friendship, data);
            break;
        case MON_DATA_MOVE1:
        case MON_DATA_MOVE2:
        case MON_DATA_MOVE3:
        case MON_DATA_MOVE4:
            SET16(substruct1!.moves[field - MON_DATA_MOVE1], data);
            break;
        case MON_DATA_PP1:
        case MON_DATA_PP2:
        case MON_DATA_PP3:
        case MON_DATA_PP4:
            SET8(substruct1!.pp[field - MON_DATA_PP1], data);
            break;
        case MON_DATA_HP_EV:
            SET8(substruct2!.hpEV, data);
            break;
        case MON_DATA_ATK_EV:
            SET8(substruct2!.attackEV, data);
            break;
        case MON_DATA_DEF_EV:
            SET8(substruct2!.defenseEV, data);
            break;
        case MON_DATA_SPEED_EV:
            SET8(substruct2!.speedEV, data);
            break;
        case MON_DATA_SPATK_EV:
            SET8(substruct2!.spAttackEV, data);
            break;
        case MON_DATA_SPDEF_EV:
            SET8(substruct2!.spDefenseEV, data);
            break;
        case MON_DATA_COOL:
            SET8(substruct2!.cool, data);
            break;
        case MON_DATA_BEAUTY:
            SET8(substruct2!.beauty, data);
            break;
        case MON_DATA_CUTE:
            SET8(substruct2!.cute, data);
            break;
        case MON_DATA_SMART:
            SET8(substruct2!.smart, data);
            break;
        case MON_DATA_TOUGH:
            SET8(substruct2!.tough, data);
            break;
        case MON_DATA_SHEEN:
            SET8(substruct2!.sheen, data);
            break;
        case MON_DATA_POKERUS:
            SET8(substruct3!.pokerus, data);
            break;
        case MON_DATA_MET_LOCATION:
            SET8(substruct3!.metLocation, data);
            break;
        case MON_DATA_MET_LEVEL:
        {
            let metLevel = data;
            substruct3!.metLevel = metLevel;
            break;
        }
        case MON_DATA_MET_GAME:
            SET8(substruct3!.metGame, data);
            break;
        case MON_DATA_POKEBALL:
        {
            let pokeball = data;
            substruct3!.pokeball = pokeball;
            break;
        }
        case MON_DATA_OT_GENDER:
            SET8(substruct3!.otGender, data);
            break;
        case MON_DATA_HP_IV:
            SET8(substruct3!.hpIV, data);
            break;
        case MON_DATA_ATK_IV:
            SET8(substruct3!.attackIV, data);
            break;
        case MON_DATA_DEF_IV:
            SET8(substruct3!.defenseIV, data);
            break;
        case MON_DATA_SPEED_IV:
            SET8(substruct3!.speedIV, data);
            break;
        case MON_DATA_SPATK_IV:
            SET8(substruct3!.spAttackIV, data);
            break;
        case MON_DATA_SPDEF_IV:
            SET8(substruct3!.spDefenseIV, data);
            break;
        case MON_DATA_IS_EGG:
            SET8(substruct3!.isEgg, data);
            if (substruct3!.isEgg)
                boxMon.isEgg = 1;
            else
                boxMon.isEgg = 0;
            break;
        case MON_DATA_ABILITY_NUM:
            SET8(substruct3!.abilityNum, data);
            break;
        case MON_DATA_COOL_RIBBON:
            SET8(substruct3!.coolRibbon, data);
            break;
        case MON_DATA_BEAUTY_RIBBON:
            SET8(substruct3!.beautyRibbon, data);
            break;
        case MON_DATA_CUTE_RIBBON:
            SET8(substruct3!.cuteRibbon, data);
            break;
        case MON_DATA_SMART_RIBBON:
            SET8(substruct3!.smartRibbon, data);
            break;
        case MON_DATA_TOUGH_RIBBON:
            SET8(substruct3!.toughRibbon, data);
            break;
        case MON_DATA_CHAMPION_RIBBON:
            SET8(substruct3!.championRibbon, data);
            break;
        case MON_DATA_WINNING_RIBBON:
            SET8(substruct3!.winningRibbon, data);
            break;
        case MON_DATA_VICTORY_RIBBON:
            SET8(substruct3!.victoryRibbon, data);
            break;
        case MON_DATA_ARTIST_RIBBON:
            SET8(substruct3!.artistRibbon, data);
            break;
        case MON_DATA_EFFORT_RIBBON:
            SET8(substruct3!.effortRibbon, data);
            break;
        case MON_DATA_MARINE_RIBBON:
            SET8(substruct3!.marineRibbon, data);
            break;
        case MON_DATA_LAND_RIBBON:
            SET8(substruct3!.landRibbon, data);
            break;
        case MON_DATA_SKY_RIBBON:
            SET8(substruct3!.skyRibbon, data);
            break;
        case MON_DATA_COUNTRY_RIBBON:
            SET8(substruct3!.countryRibbon, data);
            break;
        case MON_DATA_NATIONAL_RIBBON:
            SET8(substruct3!.nationalRibbon, data);
            break;
        case MON_DATA_EARTH_RIBBON:
            SET8(substruct3!.earthRibbon, data);
            break;
        case MON_DATA_WORLD_RIBBON:
            SET8(substruct3!.worldRibbon, data);
            break;
        case MON_DATA_FILLER:
            SET8(substruct3!.filler, data);
            break;
        case MON_DATA_EVENT_LEGAL:
            SET8(substruct3!.eventLegal, data);
            break;
        case MON_DATA_IVS:
        {
            let ivs
            if (BUGFIX_SETMONIVS) {
                ivs = data
            }
            else {
                // TODO = handle this
                ivs = data; // Bug: Only the HP IV and the lower 3 bits of the Attack IV are read. The rest become 0.
            }

            substruct3!.hpIV = ivs & 0x1F;
            substruct3!.attackIV = (ivs >> 5) & 0x1F;
            substruct3!.defenseIV = (ivs >> 10) & 0x1F;
            substruct3!.speedIV = (ivs >> 15) & 0x1F;
            substruct3!.spAttackIV = (ivs >> 20) & 0x1F;
            substruct3!.spDefenseIV = (ivs >> 25) & 0x1F;
            break;
        }
        default:
            break;
    }

    if (field > MON_DATA_ENCRYPT_SEPARATOR)
    {
        boxMon.checksum = CalculateBoxMonChecksum(boxMon);
        EncryptBoxMon(boxMon);
    }
}


export function GetNature(mon: Pokemon): number {
    return GetMonData(mon, MON_DATA_PERSONALITY, undefined) % 25;
}


export function ModifyStatByNature(nature: number, n: number, statIndex: number): number {
    if (statIndex < 1 || statIndex > 5)
    {
        // should just be "return n", but it wouldn't match without this
        let retVal = n;
        retVal++;
        retVal--;
        return retVal;
    }

    switch (NatureStatTable[nature][statIndex - 1])
    {
        case 1:
            return (n * 110) / 100;
        case -1:
            return (n * 90) / 100;
    }

    return n;
}

export function AdjustFriendship(mon: Pokemon, event: number)
{
    let species = GetMonData(mon, MON_DATA_SPECIES2, undefined);
    let heldItem = GetMonData(mon, MON_DATA_HELD_ITEM, undefined);
    let holdEffect;

    if (heldItem == ITEM_ENIGMA_BERRY)
    {
        if (Main.inBattle)
            holdEffect = EnigmaBerries[0].holdEffect;
        else
            holdEffect = SaveBlock1Ptr.enigmaBerry.holdEffect;
    }
    else
    {
        holdEffect = ItemId_GetHoldEffect(heldItem);
    }

    if (species && species != SPECIES_EGG)
    {
        let delta;
        // Friendship level refers to the column in sFriendshipEventDeltas.
        // 0-99: Level 0 (maximum increase, typically)
        // 100-199: Level 1
        // 200-255: Level 2
        let friendshipLevel = 0;
        let friendship = GetMonData(mon, MON_DATA_FRIENDSHIP, undefined);
        if (friendship >= 100)
            friendshipLevel++;
        if (friendship >= 200)
            friendshipLevel++;

        if (event == FRIENDSHIP_EVENT_WALKING)
        {
            // 50% chance every 128 steps
            if (Math.random() < 0.5)
                return;
        }
        if (event == FRIENDSHIP_EVENT_LEAGUE_BATTLE)
        {
            // Only if it's a trainer battle with league progression significance
            if (!(BattleTypeFlags & BATTLE_TYPE_TRAINER))
                return;
            if (!(Trainers[TrainerBattleOpponent_A].trainerClass == CLASS_LEADER_2
                || Trainers[TrainerBattleOpponent_A].trainerClass == CLASS_ELITE_FOUR_2
                || Trainers[TrainerBattleOpponent_A].trainerClass == CLASS_CHAMPION_2))
                return;
        }

        delta = FriendshipEventDeltas[event][friendshipLevel];
        if (delta > 0 && holdEffect == HOLD_EFFECT_HAPPINESS_UP)
            // 50% increase, rounding down
            delta = (150 * delta) / 100;

        friendship += delta;
        if (delta > 0)
        {
            if (GetMonData(mon, MON_DATA_POKEBALL, undefined) == ITEM_LUXURY_BALL)
                friendship++;
            if (GetMonData(mon, MON_DATA_MET_LOCATION, undefined) == GetCurrentRegionMapSectionId())
                friendship++;
        }

        // Clamp to u8
        if (friendship < 0)
            friendship = 0;
        if (friendship > 255)
            friendship = 255;

        SetMonData(mon, MON_DATA_FRIENDSHIP, friendship);
    }
}


export function GetDeoxysStat(mon: Pokemon, statId: number): number {
    let ivVal, evVal;
    let statValue;
    let nature;

    if (BattleTypeFlags & BATTLE_TYPE_LINK_ESTABLISHED || GetMonData(mon, MON_DATA_SPECIES, undefined) != SPECIES_DEOXYS){
        return statValue = 0;
    }
    else {
        ivVal = GetMonData(mon, MON_DATA_HP_IV + statId, undefined);
        evVal = GetMonData(mon, MON_DATA_HP_EV + statId, undefined);
        statValue = ((DeoxysBaseStats[statId] * 2 + ivVal + evVal / 4) * mon.level) / 100 + 5;
        nature = GetNature(mon);
        statValue = ModifyStatByNature(nature, statValue, statId);
    }
    return statValue;
}

