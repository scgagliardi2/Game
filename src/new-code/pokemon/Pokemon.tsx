import { HOLD_EFFECT } from "../item/data/HoldEffects";
import { ITEM } from "../item/data/Items";
import { ItemId_GetHoldEffect } from "../item/Item";
import { IsNationalPokedexEnabled } from "../misc/EventData";
import { SPECIES } from "./data/Species";
import { EvolutionTable } from "./evolution/EvolutionTable";
import { EVO_METHOD } from "./evolution/EvoMethod";
import { EVO_MODE } from "./evolution/EvoMode";
import { Pokemon } from "./IPokemon";
import { SaveBlock1 } from "./../State"

export function GetEvolutionTargetSpecies(mon: Pokemon, type: EVO_MODE, evolutionItem: ITEM): SPECIES {
    let i;
    let targetSpecies = 0;
    let species = mon.box.secure.substructs.type0.species
    let heldItem = mon.box.secure.substructs.type0.heldItem
    let personality = mon.box.personality
    let level;
    let friendship;
    let beauty = mon.box.secure.substructs.type2.beauty
    let upperPersonality = personality >> 16;
    let holdEffect;

    if (heldItem == ITEM.ENIGMA_BERRY)
        holdEffect = SaveBlock1.enigmaBerry?.holdEffect;
    else
        holdEffect = ItemId_GetHoldEffect(heldItem);

    if (holdEffect == HOLD_EFFECT.PREVENT_EVOLVE && type != EVO_MODE.ITEM_CHECK)
        return SPECIES.NONE

    var evos = EvolutionTable[species]

    switch (type) {
        case EVO_MODE.NORMAL:
            level = mon.level
            friendship = mon.box.secure.substructs.type0.friendship

            for (i = 0; i < evos.length; i++) {
                switch (evos[i].method) {
                    case EVO_METHOD.FRIENDSHIP:
                        if (friendship >= 220)
                            targetSpecies = evos[i].targetSpecies;
                        break;
                    // TODO - implement FR/LG removed the time of day evolutions due to having no RTC.
                    case EVO_METHOD.FRIENDSHIP_DAY:
                        /*
                        RtcCalcLocalTime();
                        if (gLocalTime.hours >= 12 && gLocalTime.hours < 24 && friendship >= 220)
                            targetSpecies = gEvolutionTable[species][i].targetSpecies;
                        */
                        break;
                    case EVO_METHOD.FRIENDSHIP_NIGHT:
                        /*
                        RtcCalcLocalTime();
                        if (gLocalTime.hours >= 0 && gLocalTime.hours < 12 && friendship >= 220)
                            targetSpecies = gEvolutionTable[species][i].targetSpecies;
                        */
                        break;
                    case EVO_METHOD.LEVEL:
                        if (evos[i].param <= level)
                            targetSpecies = EvolutionTable[species][i].targetSpecies;
                        break;
                    case EVO_METHOD.LEVEL_ATK_GT_DEF:
                        if (evos[i].param <= level && mon.attack > mon.defense)
                                targetSpecies = evos[i].targetSpecies;
                        break;
                    case EVO_METHOD.LEVEL_ATK_EQ_DEF:
                        if (evos[i].param <= level && mon.attack == mon.defense)
                            targetSpecies = evos[i].targetSpecies;
                    break;
                    case EVO_METHOD.LEVEL_ATK_LT_DEF:
                        if (evos[i].param <= level && mon.attack < mon.defense)
                            targetSpecies = evos[i].targetSpecies;
                        break;
                    case EVO_METHOD.LEVEL_SILCOON:
                        if (evos[i].param <= level && (upperPersonality % 10) <= 4)
                            targetSpecies = evos[i].targetSpecies;
                        break;
                    case EVO_METHOD.LEVEL_CASCOON:
                        if (evos[i].param <= level && (upperPersonality % 10) > 4)
                            targetSpecies = evos[i].targetSpecies;
                        break;
                    case EVO_METHOD.LEVEL_NINJASK:
                        if (evos[i].param <= level)
                            targetSpecies = evos[i].targetSpecies;
                        break;
                    case EVO_METHOD.BEAUTY:
                        if (evos[i].param <= beauty)
                            targetSpecies = evos[i].targetSpecies;
                        break;
                    }
                }
            break;
        case EVO_MODE.TRADE:
            for (i = 0; i < evos.length; i++) {
                switch (evos[i].method) {
                    case EVO_METHOD.TRADE:
                        targetSpecies = EvolutionTable[species][i].targetSpecies;
                        break;
                    case EVO_METHOD.TRADE_ITEM:
                        if (EvolutionTable[species][i].param == heldItem) {
                            targetSpecies = EvolutionTable[species][i].targetSpecies;

                            if (IsNationalPokedexEnabled() || targetSpecies <= 151) {
                                mon.box.secure.substructs.type0.heldItem = ITEM.NONE
                                targetSpecies = EvolutionTable[species][i].targetSpecies;
                            }
                        }
                        break;
                    }
                }
            break;
        case EVO_MODE.ITEM_USE:
        case EVO_MODE.ITEM_CHECK:
            for (i = 0; i < evos.length; i++) {
                if (evos[i].method == EVO_METHOD.ITEM && evos[i].param == evolutionItem){
                    targetSpecies = evos[i].targetSpecies;
                    break;
                }
            }
        break;
    }

    return targetSpecies;
}

// This function was stubbed from RS, but it is stubbed badly.
// This variable is likely the u8 passed to SetMonData in RSE.
// The pointer reference causes agbcc to reserve it on the stack before even checking
// whether it's used.
export function RandomlyGivePartyPokerus(party: Pokemon[]) {

    //u8 foo;
    //&foo;
}

// These two functions are stubbed from RS, but they're stubbed badly.
// See note on RandomlyGivePartyPokerus above.
export function UpdatePartyPokerusTime() {
    // u8 foo;
    // &foo;
}

export function PartySpreadPokerus(party: Pokemon[]) {
    // u8 foo;
    // &foo;
}
