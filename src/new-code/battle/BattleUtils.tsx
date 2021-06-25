import { GetCurrentWeather } from "../environment/FieldWeather";
import { ABILITY } from "../pokemon/data/Ability"
import { BattlePokemon, Pokemon } from "../pokemon/IPokemon";
import { B_ANIM } from "./animation/BattleAnim";
import { IBattleState } from "./BattleMain";
import { ABILITYEFFECT } from "./enums/AbilityEffect"
import { B_SIDE } from "./enums/BattleSide";
import { BATTLE_TYPE } from "./enums/BattleType";

export let WEATHER.HAS_EFFECT = () => ((!AbilityBattleEffects(ABILITYEFFECT.CHECK_ON_FIELD, 0, ABILITY.CLOUD_NINE, 0, 0) && !AbilityBattleEffects(ABILITYEFFECT.CHECK_ON_FIELD, 0, ABILITY.AIR_LOCK, 0, 0)))
export let WEATHER.HAS_EFFECT2 = () => ((!AbilityBattleEffects(ABILITYEFFECT.FIELD_SPORT, 0, ABILITY.CLOUD_NINE, 0, 0) && !AbilityBattleEffects(ABILITYEFFECT.FIELD_SPORT, 0, ABILITY.AIR_LOCK, 0, 0)))

export function IS_BATTLE_TYPE_GHOST_WITHOUT_SCOPE(flags: any) {
    return (flags) & BATTLE_TYPE.GHOST && !((flags) & BATTLE_TYPE.GHOST_UNVEILED)
}
export function IS_BATTLE_TYPE_GHOST_WITH_SCOPE(flags: any) {
    return (flags) & BATTLE_TYPE.GHOST && (flags) & BATTLE_TYPE.GHOST_UNVEILED
}


export function GET_MOVE_TYPE(move: number, state: IBattleState) {
    return state.BattleStruct.dynamicMoveType ? state.BattleStruct.dynamicMoveType & 0x3F : state.BattleMoves[move].type                
}

export function customAbilityBattleEffects(   
    caseID: ABILITYEFFECT,
    pokeAtk: Pokemon, pokeDef: Pokemon, battler: number, 
    battleType: BATTLE_TYPE, special: ABILITY , moveArg: number,
    state: IBattleState
) {
    let effect = 0;

    if (!(battleType & BATTLE_TYPE.SAFARI)) {
        let speciesAtk = pokeAtk.attack
        let pidAtk = pokeAtk.box.personality
        let speciesDef = pokeDef.defense
        let pidDef = pokeDef.box.personality

        var lastUsedAbility: ABILITY
        
        if (special) {
            state.LastUsedAbility = special
        }
        else {
            state.LastUsedAbility = state.BattleMons[battler].ability
        }

        if (!moveArg) {
            moveArg = state.CurrentMove;
        }

        let moveType = GET_MOVE_TYPE(moveArg, state);

        if (IS_BATTLE_TYPE_GHOST_WITHOUT_SCOPE(state.BattleTypeFlags) && 
            (state.LastUsedAbility == ABILITY.INTIMIDATE || state.LastUsedAbility == ABILITY.TRACE)) 
        {
            return effect;
        }
        
        switch (caseID) {
            case ABILITYEFFECT.ON_SWITCHIN: // 0
                if (state.BattlerAttacker >= state.BattlersCount)
                    state.BattlerAttacker = battler;
                switch (state.LastUsedAbility) {
                    case ABILITYEFFECT.SWITCH_IN_WEATHER:
                        switch (GetCurrentWeather()) {
                            case WEATHER.RAIN:
                            case WEATHER.RAIN_THUNDERSTORM:
                            case WEATHER.DOWNPOUR:
                                if (!(state.BattleWeather & WEATHER.RAIN_ANY))
                                {
                                    state.BattleWeather = (WEATHER.RAIN_TEMPORARY | WEATHER.RAIN_PERMANENT);
                                    state.BattleScripting.animArg1 = B_ANIM.RAIN_CONTINUES;
                                    state.BattleScripting.battler = battler;
                                    ++effect;
                                }
                                break;
                            case WEATHER.SANDSTORM:
                                if (!(state.BattleWeather & WEATHER.SANDSTORM_ANY))
                                {
                                    state.BattleWeather = (WEATHER.SANDSTORM_PERMANENT | WEATHER.SANDSTORM_TEMPORARY);
                                    state.BattleScripting.animArg1 = B_ANIM.SANDSTORM_CONTINUES;
                                    state.BattleScripting.battler = battler;
                                    ++effect;
                                }
                                break;
                            case WEATHER.DROUGHT:
                                if (!(state.BattleWeather & WEATHER.SUN_ANY))
                                {
                                    state.BattleWeather = (WEATHER.SUN_PERMANENT | WEATHER.SUN_TEMPORARY);
                                    state.BattleScripting.animArg1 = B_ANIM.SUN_CONTINUES;
                                    state.BattleScripting.battler = battler;
                                    ++effect;
                                }
                                break;
                        }
                        if (effect) {
                            state.BattleCommunication[MULTISTRING_CHOOSER] = GetCurrentWeather();
                            BattleScriptPushCursorAndCallback(BattleScript_OverworldWeatherStarts);
                        }
                        break;
                    case ABILITY.DRIZZLE:
                        if (!(state.BattleWeather & WEATHER.RAIN_PERMANENT))
                        {
                            state.BattleWeather = (WEATHER.RAIN_PERMANENT | WEATHER.RAIN_TEMPORARY);
                            BattleScriptPushCursorAndCallback(BattleScript_DrizzleActivates);
                            state.BattleScripting.battler = battler;
                            ++effect;
                        }
                        break;
                    case ABILITY.SAND_STREAM:
                        if (!(state.BattleWeather & WEATHER.SANDSTORM_PERMANENT))
                        {
                            state.BattleWeather = (WEATHER.SANDSTORM_PERMANENT | WEATHER.SANDSTORM_TEMPORARY);
                            BattleScriptPushCursorAndCallback(BattleScript_SandstreamActivates);
                            state.BattleScripting.battler = battler;
                            ++effect;
                        }
                        break;
                    case ABILITY.DROUGHT:
                        if (!(state.BattleWeather & WEATHER.SUN_PERMANENT))
                        {
                            state.BattleWeather = (WEATHER.SUN_PERMANENT | WEATHER.SUN_TEMPORARY);
                            BattleScriptPushCursorAndCallback(BattleScript_DroughtActivates);
                            state.BattleScripting.battler = battler;
                            ++effect;
                        }
                        break;
                    case ABILITY.INTIMIDATE:
                        if (!(gSpecialStatuses[battler].intimidatedMon))
                        {
                            gStatuses3[battler] |= STATUS3_INTIMIDATE_POKES;
                            gSpecialStatuses[battler].intimidatedMon = 1;
                        }
                        break;
                    case ABILITY.FORECAST:
                        effect = CastformDataTypeChange(battler);
                        if (effect != 0)
                        {
                            BattleScriptPushCursorAndCallback(BattleScript_CastformChange);
                            state.BattleScripting.battler = battler;
                            *(&state.BattleStruct->formToChangeInto) = effect - 1;
                        }
                        break;
                    case ABILITY.TRACE:
                        if (!(gSpecialStatuses[battler].traced))
                        {
                            gStatuses3[battler] |= STATUS3_TRACE;
                            gSpecialStatuses[battler].traced = 1;
                        }
                        break;
                    case ABILITY.CLOUD_NINE:
                    case ABILITY.AIR_LOCK:
                        {
                            for (target1 = 0; target1 < state.BattlersCount; ++target1)
                            {
                                effect = CastformDataTypeChange(target1);
                                if (effect != 0)
                                {
                                    BattleScriptPushCursorAndCallback(BattleScript_CastformChange);
                                    state.BattleScripting.battler = target1;
                                    *(&state.BattleStruct->formToChangeInto) = effect - 1;
                                    break;
                                }
                            }
                        }
                        break;
                }
                break;
            case ABILITYEFFECT.ENDTURN: // 1
                if (state.BattleMons[battler].hp != 0)
                {
                    state.BattlerAttacker = battler;
                    switch (gLastUsedAbility)
                    {
                    case ABILITY.RAIN_DISH:
                        if (WEATHER.HAS_EFFECT && (state.BattleWeather & WEATHER.RAIN_ANY)
                            && state.BattleMons[battler].maxHP > state.BattleMons[battler].hp)
                        {
                            gLastUsedAbility = ABILITY.RAIN_DISH; // why
                            BattleScriptPushCursorAndCallback(BattleScript_RainDishActivates);
                            state.BattleMoveDamage = state.BattleMons[battler].maxHP / 16;
                            if (state.BattleMoveDamage == 0)
                                state.BattleMoveDamage = 1;
                            state.BattleMoveDamage *= -1;
                            ++effect;
                        }
                        break;
                    case ABILITY.SHED_SKIN:
                        if ((state.BattleMons[battler].status1 & STATUS1_ANY) && (Random() % 3) == 0)
                        {
                            if (state.BattleMons[battler].status1 & (STATUS1_POISON | STATUS1_TOXIC_POISON))
                                StringCopy(state.BattleTextBuff1, gStatusConditionString_PoisonJpn);
                            if (state.BattleMons[battler].status1 & STATUS1_SLEEP)
                                StringCopy(state.BattleTextBuff1, gStatusConditionString_SleepJpn);
                            if (state.BattleMons[battler].status1 & STATUS1_PARALYSIS)
                                StringCopy(state.BattleTextBuff1, gStatusConditionString_ParalysisJpn);
                            if (state.BattleMons[battler].status1 & STATUS1_BURN)
                                StringCopy(state.BattleTextBuff1, gStatusConditionString_BurnJpn);
                            if (state.BattleMons[battler].status1 & STATUS1_FREEZE)
                                StringCopy(state.BattleTextBuff1, gStatusConditionString_IceJpn);
                            state.BattleMons[battler].status1 = 0;
                            state.BattleMons[battler].status2 &= ~(STATUS2_NIGHTMARE);  // fix nightmare glitch
                            state.BattleScripting.battler = gActiveBattler = battler;
                            BattleScriptPushCursorAndCallback(BattleScript_ShedSkinActivates);
                            BtlController_EmitSetMonData(0, REQUEST_STATUS_BATTLE, 0, 4, &state.BattleMons[battler].status1);
                            MarkBattlerForControllerExec(gActiveBattler);
                            ++effect;
                        }
                        break;
                    case ABILITY.SPEED_BOOST:
                        if (state.BattleMons[battler].statStages[STAT_SPEED] < 0xC && gDisableStructs[battler].isFirstTurn != 2)
                        {
                            ++state.BattleMons[battler].statStages[STAT_SPEED];
                            state.BattleScripting.animArg1 = 0x11;
                            state.BattleScripting.animArg2 = 0;
                            BattleScriptPushCursorAndCallback(BattleScript_SpeedBoostActivates);
                            state.BattleScripting.battler = battler;
                            ++effect;
                        }
                        break;
                    case ABILITY.TRUANT:
                        gDisableStructs[state.BattlerAttacker].truantCounter ^= 1;
                        break;
                    }
                }
                break;
            case ABILITYEFFECT.MOVES_BLOCK: // 2
                if (gLastUsedAbility == ABILITY.SOUNDPROOF)
                {
                    for (i = 0; sSoundMovesTable[i] != 0xFFFF; ++i)
                        if (sSoundMovesTable[i] == moveArg)
                            break;
                    if (sSoundMovesTable[i] != 0xFFFF)
                    {
                        if (state.BattleMons[state.BattlerAttacker].status2 & STATUS2_MULTIPLETURNS)
                            gHitMarker |= HITMARKER_NO_PPDEDUCT;
                        state.BattlescriptCurrInstr = BattleScript_SoundproofProtected;
                        effect = 1;
                    }
                }
                break;
            case ABILITYEFFECT.ABSORBING: // 3
                if (moveArg)
                {
                    switch (gLastUsedAbility)
                    {
                    case ABILITY.VOLT_ABSORB:
                        if (moveType == TYPE_ELECTRIC && state.BattleMoves[moveArg].power != 0)
                        {
                            if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                                state.BattlescriptCurrInstr = BattleScript_MoveHPDrain;
                            else
                                state.BattlescriptCurrInstr = BattleScript_MoveHPDrain_PPLoss;
                            effect = 1;
                        }
                        break;
                    case ABILITY.WATER_ABSORB:
                        if (moveType == TYPE_WATER && state.BattleMoves[moveArg].power != 0)
                        {
                            if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                                state.BattlescriptCurrInstr = BattleScript_MoveHPDrain;
                            else
                                state.BattlescriptCurrInstr = BattleScript_MoveHPDrain_PPLoss;
                            effect = 1;
                        }
                        break;
                    case ABILITY.FLASH_FIRE:
                        if (moveType == TYPE_FIRE && !(state.BattleMons[battler].status1 & STATUS1_FREEZE))
                        {
                            if (!(state.BattleResources->flags->flags[battler] & RESOURCE_FLAG_FLASH_FIRE))
                            {
                                state.BattleCommunication[MULTISTRING_CHOOSER] = 0;
                                if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                                    state.BattlescriptCurrInstr = BattleScript_FlashFireBoost;
                                else
                                    state.BattlescriptCurrInstr = BattleScript_FlashFireBoost_PPLoss;
                                state.BattleResources->flags->flags[battler] |= RESOURCE_FLAG_FLASH_FIRE;
                                effect = 2;
                            }
                            else
                            {
                                state.BattleCommunication[MULTISTRING_CHOOSER] = 1;
                                if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                                    state.BattlescriptCurrInstr = BattleScript_FlashFireBoost;
                                else
                                    state.BattlescriptCurrInstr = BattleScript_FlashFireBoost_PPLoss;
                                effect = 2;
                            }
                        }
                        break;
                    }
                    if (effect == 1)
                    {
                        if (state.BattleMons[battler].maxHP == state.BattleMons[battler].hp)
                        {
                            if ((gProtectStructs[state.BattlerAttacker].notFirstStrike))
                                state.BattlescriptCurrInstr = BattleScript_MonMadeMoveUseless;
                            else
                                state.BattlescriptCurrInstr = BattleScript_MonMadeMoveUseless_PPLoss;
                        }
                        else
                        {
                            state.BattleMoveDamage = state.BattleMons[battler].maxHP / 4;
                            if (state.BattleMoveDamage == 0)
                                state.BattleMoveDamage = 1;
                            state.BattleMoveDamage *= -1;
                        }
                    }
                }
                break;
            case ABILITYEFFECT.MOVE_END: // Think contact abilities.
                switch (gLastUsedAbility)
                {
                case ABILITY.COLOR_CHANGE:
                    if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                        && moveArg != MOVE_STRUGGLE
                        && state.BattleMoves[moveArg].power != 0
                        && TARGET_TURN_DAMAGED
                        && !IS_BATTLER_OF_TYPE(battler, moveType)
                        && state.BattleMons[battler].hp != 0)
                    {
                        SET_BATTLER_TYPE(battler, moveType);
                        PREPARE_TYPE_BUFFER(state.BattleTextBuff1, moveType);
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_ColorChangeActivates;
                        ++effect;
                    }
                    break;
                case ABILITY.ROUGH_SKIN:
                    if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                        && state.BattleMons[state.BattlerAttacker].hp != 0
                        && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                        && TARGET_TURN_DAMAGED
                        && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT))
                    {
                        state.BattleMoveDamage = state.BattleMons[state.BattlerAttacker].maxHP / 16;
                        if (state.BattleMoveDamage == 0)
                            state.BattleMoveDamage = 1;
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_RoughSkinActivates;
                        ++effect;
                    }
                    break;
                case ABILITY.EFFECT_SPORE:
                    if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                        && state.BattleMons[state.BattlerAttacker].hp != 0
                        && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                        && TARGET_TURN_DAMAGED
                        && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                        && (Random() % 10) == 0)
                    {
                        do
                            state.BattleCommunication[MOVE_EFFECT_BYTE] = Random() & 3;
                        while (state.BattleCommunication[MOVE_EFFECT_BYTE] == 0);

                        if (state.BattleCommunication[MOVE_EFFECT_BYTE] == MOVE_EFFECT_BURN)
                            state.BattleCommunication[MOVE_EFFECT_BYTE] += 2; // 5 MOVE_EFFECT_PARALYSIS
                        state.BattleCommunication[MOVE_EFFECT_BYTE] += MOVE_EFFECT_AFFECTS_USER;
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                        gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                        ++effect;
                    }
                    break;
                case ABILITY.POISON_POINT:
                    if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                        && state.BattleMons[state.BattlerAttacker].hp != 0
                        && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                        && TARGET_TURN_DAMAGED
                        && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                        && (Random() % 3) == 0)
                    {
                        state.BattleCommunication[MOVE_EFFECT_BYTE] = MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_POISON;
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                        gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                        ++effect;
                    }
                    break;
                case ABILITY.STATIC:
                    if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                        && state.BattleMons[state.BattlerAttacker].hp != 0
                        && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                        && TARGET_TURN_DAMAGED
                        && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                        && (Random() % 3) == 0)
                    {
                        state.BattleCommunication[MOVE_EFFECT_BYTE] = MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_PARALYSIS;
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                        gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                        ++effect;
                    }
                    break;
                case ABILITY.FLAME_BODY:
                    if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                        && state.BattleMons[state.BattlerAttacker].hp != 0
                        && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                        && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                        && TARGET_TURN_DAMAGED
                        && (Random() % 3) == 0)
                    {
                        state.BattleCommunication[MOVE_EFFECT_BYTE] = MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_BURN;
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                        gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                        ++effect;
                    }
                    break;
                case ABILITY.CUTE_CHARM:
                    if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                        && state.BattleMons[state.BattlerAttacker].hp != 0
                        && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                        && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                        && TARGET_TURN_DAMAGED
                        && state.BattleMons[state.BattlerTarget].hp != 0
                        && (Random() % 3) == 0
                        && state.BattleMons[state.BattlerAttacker].ability != ABILITY.OBLIVIOUS
                        && GetGenderFromSpeciesAndPersonality(speciesAtk, pidAtk) != GetGenderFromSpeciesAndPersonality(speciesDef, pidDef)
                        && !(state.BattleMons[state.BattlerAttacker].status2 & STATUS2_INFATUATION)
                        && GetGenderFromSpeciesAndPersonality(speciesAtk, pidAtk) != MON_GENDERLESS
                        && GetGenderFromSpeciesAndPersonality(speciesDef, pidDef) != MON_GENDERLESS)
                    {
                        state.BattleMons[state.BattlerAttacker].status2 |= STATUS2_INFATUATED_WITH(state.BattlerTarget);
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_CuteCharmActivates;
                        ++effect;
                    }
                    break;
                }
                break;
            case ABILITYEFFECT.IMMUNITY: // 5
                for (battler = 0; battler < state.BattlersCount; ++battler)
                {
                    switch (state.BattleMons[battler].ability)
                    {
                    case ABILITY.IMMUNITY:
                        if (state.BattleMons[battler].status1 & (STATUS1_POISON | STATUS1_TOXIC_POISON | STATUS1_TOXIC_COUNTER))
                        {
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_PoisonJpn);
                            effect = 1;
                        }
                        break;
                    case ABILITY.OWN_TEMPO:
                        if (state.BattleMons[battler].status2 & STATUS2_CONFUSION)
                        {
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_ConfusionJpn);
                            effect = 2;
                        }
                        break;
                    case ABILITY.LIMBER:
                        if (state.BattleMons[battler].status1 & STATUS1_PARALYSIS)
                        {
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_ParalysisJpn);
                            effect = 1;
                        }
                        break;
                    case ABILITY.INSOMNIA:
                    case ABILITY.VITAL_SPIRIT:
                        if (state.BattleMons[battler].status1 & STATUS1_SLEEP)
                        {
                            state.BattleMons[battler].status2 &= ~(STATUS2_NIGHTMARE);
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_SleepJpn);
                            effect = 1;
                        }
                        break;
                    case ABILITY.WATER_VEIL:
                        if (state.BattleMons[battler].status1 & STATUS1_BURN)
                        {
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_BurnJpn);
                            effect = 1;
                        }
                        break;
                    case ABILITY.MAGMA_ARMOR:
                        if (state.BattleMons[battler].status1 & STATUS1_FREEZE)
                        {
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_IceJpn);
                            effect = 1;
                        }
                        break;
                    case ABILITY.OBLIVIOUS:
                        if (state.BattleMons[battler].status2 & STATUS2_INFATUATION)
                        {
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_LoveJpn);
                            effect = 3;
                        }
                        break;
                    }
                    if (effect)
                    {
                        switch (effect)
                        {
                        case 1: // status cleared
                            state.BattleMons[battler].status1 = 0;
                            break;
                        case 2: // get rid of confusion
                            state.BattleMons[battler].status2 &= ~(STATUS2_CONFUSION);
                            break;
                        case 3: // get rid of infatuation
                            state.BattleMons[battler].status2 &= ~(STATUS2_INFATUATION);
                            break;
                        }

                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_AbilityCuredStatus;
                        state.BattleScripting.battler = battler;
                        gActiveBattler = battler;
                        BtlController_EmitSetMonData(0, REQUEST_STATUS_BATTLE, 0, 4, &state.BattleMons[gActiveBattler].status1);
                        MarkBattlerForControllerExec(gActiveBattler);
                        return effect;
                    }
                }
                break;
            case ABILITYEFFECT.FORECAST: // 6
                for (battler = 0; battler < state.BattlersCount; ++battler)
                {
                    if (state.BattleMons[battler].ability == ABILITY.FORECAST)
                    {
                        effect = CastformDataTypeChange(battler);
                        if (effect)
                        {
                            BattleScriptPushCursorAndCallback(BattleScript_CastformChange);
                            state.BattleScripting.battler = battler;
                            *(&state.BattleStruct->formToChangeInto) = effect - 1;
                            return effect;
                        }
                    }
                }
                break;
            case ABILITYEFFECT.SYNCHRONIZE: // 7
                if (gLastUsedAbility == ABILITY.SYNCHRONIZE && (gHitMarker & HITMARKER_SYNCHRONISE_EFFECT))
                {
                    gHitMarker &= ~(HITMARKER_SYNCHRONISE_EFFECT);
                    state.BattleStruct->synchronizeMoveEffect &= ~(MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_CERTAIN);
                    if (state.BattleStruct->synchronizeMoveEffect == MOVE_EFFECT_TOXIC)
                        state.BattleStruct->synchronizeMoveEffect = MOVE_EFFECT_POISON;
                    state.BattleCommunication[MOVE_EFFECT_BYTE] = state.BattleStruct->synchronizeMoveEffect + MOVE_EFFECT_AFFECTS_USER;
                    state.BattleScripting.battler = state.BattlerTarget;
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_SynchronizeActivates;
                    gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                    ++effect;
                }
                break;
            case ABILITYEFFECT.ATK_SYNCHRONIZE: // 8
                if (gLastUsedAbility == ABILITY.SYNCHRONIZE && (gHitMarker & HITMARKER_SYNCHRONISE_EFFECT))
                {
                    gHitMarker &= ~(HITMARKER_SYNCHRONISE_EFFECT);
                    state.BattleStruct->synchronizeMoveEffect &= ~(MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_CERTAIN);
                    if (state.BattleStruct->synchronizeMoveEffect == MOVE_EFFECT_TOXIC)
                        state.BattleStruct->synchronizeMoveEffect = MOVE_EFFECT_POISON;
                    state.BattleCommunication[MOVE_EFFECT_BYTE] = state.BattleStruct->synchronizeMoveEffect;
                    state.BattleScripting.battler = state.BattlerAttacker;
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_SynchronizeActivates;
                    gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                    ++effect;
                }
                break;
            case ABILITYEFFECT.INTIMIDATE1: // 9
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (state.BattleMons[i].ability == ABILITY.INTIMIDATE && gStatuses3[i] & STATUS3_INTIMIDATE_POKES)
                    {
                        gLastUsedAbility = ABILITY.INTIMIDATE;
                        gStatuses3[i] &= ~(STATUS3_INTIMIDATE_POKES);
                        BattleScriptPushCursorAndCallback(BattleScript_IntimidateActivatesEnd3);
                        state.BattleStruct->intimidateBattler = i;
                        ++effect;
                        break;
                    }
                }
                break;
            case ABILITYEFFECT.TRACE: // 11
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (state.BattleMons[i].ability == ABILITY.TRACE && (gStatuses3[i] & STATUS3_TRACE))
                    {
                        u8 target2;
                        
                        side = (GetBattlerPosition(i) ^ BIT_SIDE) & BIT_SIDE; // side of the opposing pokemon
                        target1 = GetBattlerAtPosition(side);
                        target2 = GetBattlerAtPosition(side + BIT_FLANK);
                        if (state.BattleTypeFlags & BATTLE_TYPE_DOUBLE)
                        {
                            if (state.BattleMons[target1].ability != 0 && state.BattleMons[target1].hp != 0
                                && state.BattleMons[target2].ability != 0 && state.BattleMons[target2].hp != 0)
                            {
                                gActiveBattler = GetBattlerAtPosition(((Random() & 1) * 2) | side);
                                state.BattleMons[i].ability = state.BattleMons[gActiveBattler].ability;
                                gLastUsedAbility = state.BattleMons[gActiveBattler].ability;
                                ++effect;
                            }
                            else if (state.BattleMons[target1].ability != 0 && state.BattleMons[target1].hp != 0)
                            {
                                gActiveBattler = target1;
                                state.BattleMons[i].ability = state.BattleMons[gActiveBattler].ability;
                                gLastUsedAbility = state.BattleMons[gActiveBattler].ability;
                                ++effect;
                            }
                            else if (state.BattleMons[target2].ability != 0 && state.BattleMons[target2].hp != 0)
                            {
                                gActiveBattler = target2;
                                state.BattleMons[i].ability = state.BattleMons[gActiveBattler].ability;
                                gLastUsedAbility = state.BattleMons[gActiveBattler].ability;
                                ++effect;
                            }
                        }
                        else
                        {
                            gActiveBattler = target1;
                            if (state.BattleMons[target1].ability && state.BattleMons[target1].hp)
                            {
                                state.BattleMons[i].ability = state.BattleMons[target1].ability;
                                gLastUsedAbility = state.BattleMons[target1].ability;
                                ++effect;
                            }
                        }
                        if (effect)
                        {
                            BattleScriptPushCursorAndCallback(BattleScript_TraceActivates);
                            gStatuses3[i] &= ~(STATUS3_TRACE);
                            state.BattleScripting.battler = i;
                            PREPARE_MON_NICK_WITH_PREFIX_BUFFER(state.BattleTextBuff1, gActiveBattler, state.BattlerPartyIndexes[gActiveBattler])
                            PREPARE_ABILITY.BUFFER(state.BattleTextBuff2, gLastUsedAbility)
                            break;
                        }
                    }
                }
                break;
            case ABILITYEFFECT.INTIMIDATE2: // 10
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (state.BattleMons[i].ability == ABILITY.INTIMIDATE && (gStatuses3[i] & STATUS3_INTIMIDATE_POKES))
                    {
                        gLastUsedAbility = ABILITY.INTIMIDATE;
                        gStatuses3[i] &= ~(STATUS3_INTIMIDATE_POKES);
                        BattleScriptPushCursor();
                        state.BattlescriptCurrInstr = BattleScript_IntimidateActivates;
                        state.BattleStruct->intimidateBattler = i;
                        ++effect;
                        break;
                    }
                }
                break;
            case ABILITYEFFECT.CHECK_OTHER_SIDE: // 12
                side = GetBattlerSide(battler);
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (GetBattlerSide(i) != side && state.BattleMons[i].ability == ability)
                    {
                        gLastUsedAbility = ability;
                        effect = i + 1;
                    }
                }
                break;
            case ABILITYEFFECT.CHECK_BATTLER_SIDE: // 13
                side = GetBattlerSide(battler);
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (GetBattlerSide(i) == side && state.BattleMons[i].ability == ability)
                    {
                        gLastUsedAbility = ability;
                        effect = i + 1;
                    }
                }
                break;
            case ABILITYEFFECT.FIELD_SPORT: // 14
                switch (gLastUsedAbility)
                {
                case 0xFD:
                    for (i = 0; i < state.BattlersCount; ++i)
                        if (gStatuses3[i] & STATUS3_MUDSPORT)
                            effect = i + 1;
                    break;
                case 0xFE:
                    for (i = 0; i < state.BattlersCount; ++i)
                        if (gStatuses3[i] & STATUS3_WATERSPORT)
                            effect = i + 1;
                    break;
                default:
                    for (i = 0; i < state.BattlersCount; ++i)
                    {
                        if (state.BattleMons[i].ability == ability)
                        {
                            gLastUsedAbility = ability;
                            effect = i + 1;
                        }
                    }
                    break;
                }
                break;
            case ABILITYEFFECT.CHECK_ON_FIELD: // 19
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (state.BattleMons[i].ability == ability && state.BattleMons[i].hp != 0)
                    {
                        gLastUsedAbility = ability;
                        effect = i + 1;
                    }
                }
                break;
            case ABILITYEFFECT.CHECK_FIELD_EXCEPT_BATTLER: // 15
                side = GetBattlerSide(battler);
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (GetBattlerSide(i) != side && state.BattleMons[i].ability == ability)
                    {
                        gLastUsedAbility = ability;
                        effect = i + 1;
                        break;
                    }
                }
                if (!effect)
                {
                    for (i = 0; i < state.BattlersCount; ++i)
                    {
                        if (state.BattleMons[i].ability == ability && GetBattlerSide(i) == side && i != battler)
                        {
                            gLastUsedAbility = ability;
                            effect = i + 1;
                        }
                    }
                }
                break;
            case ABILITYEFFECT.COUNT_OTHER_SIDE: // 16
                side = GetBattlerSide(battler);
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (GetBattlerSide(i) != side && state.BattleMons[i].ability == ability)
                    {
                        gLastUsedAbility = ability;
                        ++effect;
                    }
                }
                break;
            case ABILITYEFFECT.COUNT_BATTLER_SIDE: // 17
                side = GetBattlerSide(battler);
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (GetBattlerSide(i) == side && state.BattleMons[i].ability == ability)
                    {
                        gLastUsedAbility = ability;
                        ++effect;
                    }
                }
                break;
            case ABILITYEFFECT.COUNT_ON_FIELD: // 18
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (state.BattleMons[i].ability == ability && i != battler)
                    {
                        gLastUsedAbility = ability;
                        ++effect;
                    }
                }
                break;
        }

    }

    return effect



}

export function AbilityBattleEffects(caseID: ABILITYEFFECT, battler: number, ability: ABILITY, special: number, moveArg: number) {

    if (!(state.BattleTypeFlags & BATTLE_TYPE_SAFARI)) // Why isn't that check done at the beginning?
    {

        switch (caseID)
        {
        case ABILITYEFFECT.ON_SWITCHIN: // 0
            if (state.BattlerAttacker >= state.BattlersCount)
                state.BattlerAttacker = battler;
            switch (gLastUsedAbility)
            {
            case ABILITYEFFECT.SWITCH_IN_WEATHER:
                switch (GetCurrentWeather())
                {
                case WEATHER.RAIN:
                case WEATHER.RAIN_THUNDERSTORM:
                case WEATHER.DOWNPOUR:
                    if (!(state.BattleWeather & WEATHER.RAIN_ANY))
                    {
                        state.BattleWeather = (WEATHER.RAIN_TEMPORARY | WEATHER.RAIN_PERMANENT);
                        state.BattleScripting.animArg1 = B_ANIM.RAIN_CONTINUES;
                        state.BattleScripting.battler = battler;
                        ++effect;
                    }
                    break;
                case WEATHER.SANDSTORM:
                    if (!(state.BattleWeather & WEATHER.SANDSTORM_ANY))
                    {
                        state.BattleWeather = (WEATHER.SANDSTORM_PERMANENT | WEATHER.SANDSTORM_TEMPORARY);
                        state.BattleScripting.animArg1 = B_ANIM.SANDSTORM_CONTINUES;
                        state.BattleScripting.battler = battler;
                        ++effect;
                    }
                    break;
                case WEATHER.DROUGHT:
                    if (!(state.BattleWeather & WEATHER.SUN_ANY))
                    {
                        state.BattleWeather = (WEATHER.SUN_PERMANENT | WEATHER.SUN_TEMPORARY);
                        state.BattleScripting.animArg1 = B_ANIM.SUN_CONTINUES;
                        state.BattleScripting.battler = battler;
                        ++effect;
                    }
                    break;
                }
                if (effect)
                {
                    state.BattleCommunication[MULTISTRING_CHOOSER] = GetCurrentWeather();
                    BattleScriptPushCursorAndCallback(BattleScript_OverworldWeatherStarts);
                }
                break;
            case ABILITY.DRIZZLE:
                if (!(state.BattleWeather & WEATHER.RAIN_PERMANENT))
                {
                    state.BattleWeather = (WEATHER.RAIN_PERMANENT | WEATHER.RAIN_TEMPORARY);
                    BattleScriptPushCursorAndCallback(BattleScript_DrizzleActivates);
                    state.BattleScripting.battler = battler;
                    ++effect;
                }
                break;
            case ABILITY.SAND_STREAM:
                if (!(state.BattleWeather & WEATHER.SANDSTORM_PERMANENT))
                {
                    state.BattleWeather = (WEATHER.SANDSTORM_PERMANENT | WEATHER.SANDSTORM_TEMPORARY);
                    BattleScriptPushCursorAndCallback(BattleScript_SandstreamActivates);
                    state.BattleScripting.battler = battler;
                    ++effect;
                }
                break;
            case ABILITY.DROUGHT:
                if (!(state.BattleWeather & WEATHER.SUN_PERMANENT))
                {
                    state.BattleWeather = (WEATHER.SUN_PERMANENT | WEATHER.SUN_TEMPORARY);
                    BattleScriptPushCursorAndCallback(BattleScript_DroughtActivates);
                    state.BattleScripting.battler = battler;
                    ++effect;
                }
                break;
            case ABILITY.INTIMIDATE:
                if (!(gSpecialStatuses[battler].intimidatedMon))
                {
                    gStatuses3[battler] |= STATUS3_INTIMIDATE_POKES;
                    gSpecialStatuses[battler].intimidatedMon = 1;
                }
                break;
            case ABILITY.FORECAST:
                effect = CastformDataTypeChange(battler);
                if (effect != 0)
                {
                    BattleScriptPushCursorAndCallback(BattleScript_CastformChange);
                    state.BattleScripting.battler = battler;
                    *(&state.BattleStruct->formToChangeInto) = effect - 1;
                }
                break;
            case ABILITY.TRACE:
                if (!(gSpecialStatuses[battler].traced))
                {
                    gStatuses3[battler] |= STATUS3_TRACE;
                    gSpecialStatuses[battler].traced = 1;
                }
                break;
            case ABILITY.CLOUD_NINE:
            case ABILITY.AIR_LOCK:
                {
                    for (target1 = 0; target1 < state.BattlersCount; ++target1)
                    {
                        effect = CastformDataTypeChange(target1);
                        if (effect != 0)
                        {
                            BattleScriptPushCursorAndCallback(BattleScript_CastformChange);
                            state.BattleScripting.battler = target1;
                            *(&state.BattleStruct->formToChangeInto) = effect - 1;
                            break;
                        }
                    }
                }
                break;
            }
            break;
        case ABILITYEFFECT.ENDTURN: // 1
            if (state.BattleMons[battler].hp != 0)
            {
                state.BattlerAttacker = battler;
                switch (gLastUsedAbility)
                {
                case ABILITY.RAIN_DISH:
                    if (WEATHER.HAS_EFFECT && (state.BattleWeather & WEATHER.RAIN_ANY)
                     && state.BattleMons[battler].maxHP > state.BattleMons[battler].hp)
                    {
                        gLastUsedAbility = ABILITY.RAIN_DISH; // why
                        BattleScriptPushCursorAndCallback(BattleScript_RainDishActivates);
                        state.BattleMoveDamage = state.BattleMons[battler].maxHP / 16;
                        if (state.BattleMoveDamage == 0)
                            state.BattleMoveDamage = 1;
                        state.BattleMoveDamage *= -1;
                        ++effect;
                    }
                    break;
                case ABILITY.SHED_SKIN:
                    if ((state.BattleMons[battler].status1 & STATUS1_ANY) && (Random() % 3) == 0)
                    {
                        if (state.BattleMons[battler].status1 & (STATUS1_POISON | STATUS1_TOXIC_POISON))
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_PoisonJpn);
                        if (state.BattleMons[battler].status1 & STATUS1_SLEEP)
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_SleepJpn);
                        if (state.BattleMons[battler].status1 & STATUS1_PARALYSIS)
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_ParalysisJpn);
                        if (state.BattleMons[battler].status1 & STATUS1_BURN)
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_BurnJpn);
                        if (state.BattleMons[battler].status1 & STATUS1_FREEZE)
                            StringCopy(state.BattleTextBuff1, gStatusConditionString_IceJpn);
                        state.BattleMons[battler].status1 = 0;
                        state.BattleMons[battler].status2 &= ~(STATUS2_NIGHTMARE);  // fix nightmare glitch
                        state.BattleScripting.battler = gActiveBattler = battler;
                        BattleScriptPushCursorAndCallback(BattleScript_ShedSkinActivates);
                        BtlController_EmitSetMonData(0, REQUEST_STATUS_BATTLE, 0, 4, &state.BattleMons[battler].status1);
                        MarkBattlerForControllerExec(gActiveBattler);
                        ++effect;
                    }
                    break;
                case ABILITY.SPEED_BOOST:
                    if (state.BattleMons[battler].statStages[STAT_SPEED] < 0xC && gDisableStructs[battler].isFirstTurn != 2)
                    {
                        ++state.BattleMons[battler].statStages[STAT_SPEED];
                        state.BattleScripting.animArg1 = 0x11;
                        state.BattleScripting.animArg2 = 0;
                        BattleScriptPushCursorAndCallback(BattleScript_SpeedBoostActivates);
                        state.BattleScripting.battler = battler;
                        ++effect;
                    }
                    break;
                case ABILITY.TRUANT:
                    gDisableStructs[state.BattlerAttacker].truantCounter ^= 1;
                    break;
                }
            }
            break;
        case ABILITYEFFECT.MOVES_BLOCK: // 2
            if (gLastUsedAbility == ABILITY.SOUNDPROOF)
            {
                for (i = 0; sSoundMovesTable[i] != 0xFFFF; ++i)
                    if (sSoundMovesTable[i] == moveArg)
                        break;
                if (sSoundMovesTable[i] != 0xFFFF)
                {
                    if (state.BattleMons[state.BattlerAttacker].status2 & STATUS2_MULTIPLETURNS)
                        gHitMarker |= HITMARKER_NO_PPDEDUCT;
                    state.BattlescriptCurrInstr = BattleScript_SoundproofProtected;
                    effect = 1;
                }
            }
            break;
        case ABILITYEFFECT.ABSORBING: // 3
            if (moveArg)
            {
                switch (gLastUsedAbility)
                {
                case ABILITY.VOLT_ABSORB:
                    if (moveType == TYPE_ELECTRIC && state.BattleMoves[moveArg].power != 0)
                    {
                        if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                            state.BattlescriptCurrInstr = BattleScript_MoveHPDrain;
                        else
                            state.BattlescriptCurrInstr = BattleScript_MoveHPDrain_PPLoss;
                        effect = 1;
                    }
                    break;
                case ABILITY.WATER_ABSORB:
                    if (moveType == TYPE_WATER && state.BattleMoves[moveArg].power != 0)
                    {
                        if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                            state.BattlescriptCurrInstr = BattleScript_MoveHPDrain;
                        else
                            state.BattlescriptCurrInstr = BattleScript_MoveHPDrain_PPLoss;
                        effect = 1;
                    }
                    break;
                case ABILITY.FLASH_FIRE:
                    if (moveType == TYPE_FIRE && !(state.BattleMons[battler].status1 & STATUS1_FREEZE))
                    {
                        if (!(state.BattleResources->flags->flags[battler] & RESOURCE_FLAG_FLASH_FIRE))
                        {
                            state.BattleCommunication[MULTISTRING_CHOOSER] = 0;
                            if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                                state.BattlescriptCurrInstr = BattleScript_FlashFireBoost;
                            else
                                state.BattlescriptCurrInstr = BattleScript_FlashFireBoost_PPLoss;
                            state.BattleResources->flags->flags[battler] |= RESOURCE_FLAG_FLASH_FIRE;
                            effect = 2;
                        }
                        else
                        {
                            state.BattleCommunication[MULTISTRING_CHOOSER] = 1;
                            if (gProtectStructs[state.BattlerAttacker].notFirstStrike)
                                state.BattlescriptCurrInstr = BattleScript_FlashFireBoost;
                            else
                                state.BattlescriptCurrInstr = BattleScript_FlashFireBoost_PPLoss;
                            effect = 2;
                        }
                    }
                    break;
                }
                if (effect == 1)
                {
                    if (state.BattleMons[battler].maxHP == state.BattleMons[battler].hp)
                    {
                        if ((gProtectStructs[state.BattlerAttacker].notFirstStrike))
                            state.BattlescriptCurrInstr = BattleScript_MonMadeMoveUseless;
                        else
                            state.BattlescriptCurrInstr = BattleScript_MonMadeMoveUseless_PPLoss;
                    }
                    else
                    {
                        state.BattleMoveDamage = state.BattleMons[battler].maxHP / 4;
                        if (state.BattleMoveDamage == 0)
                            state.BattleMoveDamage = 1;
                        state.BattleMoveDamage *= -1;
                    }
                }
            }
            break;
        case ABILITYEFFECT.MOVE_END: // Think contact abilities.
            switch (gLastUsedAbility)
            {
            case ABILITY.COLOR_CHANGE:
                if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                 && moveArg != MOVE_STRUGGLE
                 && state.BattleMoves[moveArg].power != 0
                 && TARGET_TURN_DAMAGED
                 && !IS_BATTLER_OF_TYPE(battler, moveType)
                 && state.BattleMons[battler].hp != 0)
                {
                    SET_BATTLER_TYPE(battler, moveType);
                    PREPARE_TYPE_BUFFER(state.BattleTextBuff1, moveType);
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_ColorChangeActivates;
                    ++effect;
                }
                break;
            case ABILITY.ROUGH_SKIN:
                if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                 && state.BattleMons[state.BattlerAttacker].hp != 0
                 && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                 && TARGET_TURN_DAMAGED
                 && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT))
                {
                    state.BattleMoveDamage = state.BattleMons[state.BattlerAttacker].maxHP / 16;
                    if (state.BattleMoveDamage == 0)
                        state.BattleMoveDamage = 1;
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_RoughSkinActivates;
                    ++effect;
                }
                break;
            case ABILITY.EFFECT_SPORE:
                if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                 && state.BattleMons[state.BattlerAttacker].hp != 0
                 && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                 && TARGET_TURN_DAMAGED
                 && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                 && (Random() % 10) == 0)
                {
                    do
                        state.BattleCommunication[MOVE_EFFECT_BYTE] = Random() & 3;
                    while (state.BattleCommunication[MOVE_EFFECT_BYTE] == 0);

                    if (state.BattleCommunication[MOVE_EFFECT_BYTE] == MOVE_EFFECT_BURN)
                        state.BattleCommunication[MOVE_EFFECT_BYTE] += 2; // 5 MOVE_EFFECT_PARALYSIS
                    state.BattleCommunication[MOVE_EFFECT_BYTE] += MOVE_EFFECT_AFFECTS_USER;
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                    gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                    ++effect;
                }
                break;
            case ABILITY.POISON_POINT:
                if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                 && state.BattleMons[state.BattlerAttacker].hp != 0
                 && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                 && TARGET_TURN_DAMAGED
                 && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                 && (Random() % 3) == 0)
                {
                    state.BattleCommunication[MOVE_EFFECT_BYTE] = MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_POISON;
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                    gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                    ++effect;
                }
                break;
            case ABILITY.STATIC:
                if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                 && state.BattleMons[state.BattlerAttacker].hp != 0
                 && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                 && TARGET_TURN_DAMAGED
                 && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                 && (Random() % 3) == 0)
                {
                    state.BattleCommunication[MOVE_EFFECT_BYTE] = MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_PARALYSIS;
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                    gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                    ++effect;
                }
                break;
            case ABILITY.FLAME_BODY:
                if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                 && state.BattleMons[state.BattlerAttacker].hp != 0
                 && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                 && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                 && TARGET_TURN_DAMAGED
                 && (Random() % 3) == 0)
                {
                    state.BattleCommunication[MOVE_EFFECT_BYTE] = MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_BURN;
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_ApplySecondaryEffect;
                    gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                    ++effect;
                }
                break;
            case ABILITY.CUTE_CHARM:
                if (!(gMoveResultFlags & MOVE_RESULT_NO_EFFECT)
                 && state.BattleMons[state.BattlerAttacker].hp != 0
                 && !gProtectStructs[state.BattlerAttacker].confusionSelfDmg
                 && (state.BattleMoves[moveArg].flags & FLAG_MAKES_CONTACT)
                 && TARGET_TURN_DAMAGED
                 && state.BattleMons[state.BattlerTarget].hp != 0
                 && (Random() % 3) == 0
                 && state.BattleMons[state.BattlerAttacker].ability != ABILITY.OBLIVIOUS
                 && GetGenderFromSpeciesAndPersonality(speciesAtk, pidAtk) != GetGenderFromSpeciesAndPersonality(speciesDef, pidDef)
                 && !(state.BattleMons[state.BattlerAttacker].status2 & STATUS2_INFATUATION)
                 && GetGenderFromSpeciesAndPersonality(speciesAtk, pidAtk) != MON_GENDERLESS
                 && GetGenderFromSpeciesAndPersonality(speciesDef, pidDef) != MON_GENDERLESS)
                {
                    state.BattleMons[state.BattlerAttacker].status2 |= STATUS2_INFATUATED_WITH(state.BattlerTarget);
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_CuteCharmActivates;
                    ++effect;
                }
                break;
            }
            break;
        case ABILITYEFFECT.IMMUNITY: // 5
            for (battler = 0; battler < state.BattlersCount; ++battler)
            {
                switch (state.BattleMons[battler].ability)
                {
                case ABILITY.IMMUNITY:
                    if (state.BattleMons[battler].status1 & (STATUS1_POISON | STATUS1_TOXIC_POISON | STATUS1_TOXIC_COUNTER))
                    {
                        StringCopy(state.BattleTextBuff1, gStatusConditionString_PoisonJpn);
                        effect = 1;
                    }
                    break;
                case ABILITY.OWN_TEMPO:
                    if (state.BattleMons[battler].status2 & STATUS2_CONFUSION)
                    {
                        StringCopy(state.BattleTextBuff1, gStatusConditionString_ConfusionJpn);
                        effect = 2;
                    }
                    break;
                case ABILITY.LIMBER:
                    if (state.BattleMons[battler].status1 & STATUS1_PARALYSIS)
                    {
                        StringCopy(state.BattleTextBuff1, gStatusConditionString_ParalysisJpn);
                        effect = 1;
                    }
                    break;
                case ABILITY.INSOMNIA:
                case ABILITY.VITAL_SPIRIT:
                    if (state.BattleMons[battler].status1 & STATUS1_SLEEP)
                    {
                        state.BattleMons[battler].status2 &= ~(STATUS2_NIGHTMARE);
                        StringCopy(state.BattleTextBuff1, gStatusConditionString_SleepJpn);
                        effect = 1;
                    }
                    break;
                case ABILITY.WATER_VEIL:
                    if (state.BattleMons[battler].status1 & STATUS1_BURN)
                    {
                        StringCopy(state.BattleTextBuff1, gStatusConditionString_BurnJpn);
                        effect = 1;
                    }
                    break;
                case ABILITY.MAGMA_ARMOR:
                    if (state.BattleMons[battler].status1 & STATUS1_FREEZE)
                    {
                        StringCopy(state.BattleTextBuff1, gStatusConditionString_IceJpn);
                        effect = 1;
                    }
                    break;
                case ABILITY.OBLIVIOUS:
                    if (state.BattleMons[battler].status2 & STATUS2_INFATUATION)
                    {
                        StringCopy(state.BattleTextBuff1, gStatusConditionString_LoveJpn);
                        effect = 3;
                    }
                    break;
                }
                if (effect)
                {
                    switch (effect)
                    {
                    case 1: // status cleared
                        state.BattleMons[battler].status1 = 0;
                        break;
                    case 2: // get rid of confusion
                        state.BattleMons[battler].status2 &= ~(STATUS2_CONFUSION);
                        break;
                    case 3: // get rid of infatuation
                        state.BattleMons[battler].status2 &= ~(STATUS2_INFATUATION);
                        break;
                    }

                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_AbilityCuredStatus;
                    state.BattleScripting.battler = battler;
                    gActiveBattler = battler;
                    BtlController_EmitSetMonData(0, REQUEST_STATUS_BATTLE, 0, 4, &state.BattleMons[gActiveBattler].status1);
                    MarkBattlerForControllerExec(gActiveBattler);
                    return effect;
                }
            }
            break;
        case ABILITYEFFECT.FORECAST: // 6
            for (battler = 0; battler < state.BattlersCount; ++battler)
            {
                if (state.BattleMons[battler].ability == ABILITY.FORECAST)
                {
                    effect = CastformDataTypeChange(battler);
                    if (effect)
                    {
                        BattleScriptPushCursorAndCallback(BattleScript_CastformChange);
                        state.BattleScripting.battler = battler;
                        *(&state.BattleStruct->formToChangeInto) = effect - 1;
                        return effect;
                    }
                }
            }
            break;
        case ABILITYEFFECT.SYNCHRONIZE: // 7
            if (gLastUsedAbility == ABILITY.SYNCHRONIZE && (gHitMarker & HITMARKER_SYNCHRONISE_EFFECT))
            {
                gHitMarker &= ~(HITMARKER_SYNCHRONISE_EFFECT);
                state.BattleStruct->synchronizeMoveEffect &= ~(MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_CERTAIN);
                if (state.BattleStruct->synchronizeMoveEffect == MOVE_EFFECT_TOXIC)
                    state.BattleStruct->synchronizeMoveEffect = MOVE_EFFECT_POISON;
                state.BattleCommunication[MOVE_EFFECT_BYTE] = state.BattleStruct->synchronizeMoveEffect + MOVE_EFFECT_AFFECTS_USER;
                state.BattleScripting.battler = state.BattlerTarget;
                BattleScriptPushCursor();
                state.BattlescriptCurrInstr = BattleScript_SynchronizeActivates;
                gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                ++effect;
            }
            break;
        case ABILITYEFFECT.ATK_SYNCHRONIZE: // 8
            if (gLastUsedAbility == ABILITY.SYNCHRONIZE && (gHitMarker & HITMARKER_SYNCHRONISE_EFFECT))
            {
                gHitMarker &= ~(HITMARKER_SYNCHRONISE_EFFECT);
                state.BattleStruct->synchronizeMoveEffect &= ~(MOVE_EFFECT_AFFECTS_USER | MOVE_EFFECT_CERTAIN);
                if (state.BattleStruct->synchronizeMoveEffect == MOVE_EFFECT_TOXIC)
                    state.BattleStruct->synchronizeMoveEffect = MOVE_EFFECT_POISON;
                state.BattleCommunication[MOVE_EFFECT_BYTE] = state.BattleStruct->synchronizeMoveEffect;
                state.BattleScripting.battler = state.BattlerAttacker;
                BattleScriptPushCursor();
                state.BattlescriptCurrInstr = BattleScript_SynchronizeActivates;
                gHitMarker |= HITMARKER_IGNORE_SAFEGUARD;
                ++effect;
            }
            break;
        case ABILITYEFFECT.INTIMIDATE1: // 9
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (state.BattleMons[i].ability == ABILITY.INTIMIDATE && gStatuses3[i] & STATUS3_INTIMIDATE_POKES)
                {
                    gLastUsedAbility = ABILITY.INTIMIDATE;
                    gStatuses3[i] &= ~(STATUS3_INTIMIDATE_POKES);
                    BattleScriptPushCursorAndCallback(BattleScript_IntimidateActivatesEnd3);
                    state.BattleStruct->intimidateBattler = i;
                    ++effect;
                    break;
                }
            }
            break;
        case ABILITYEFFECT.TRACE: // 11
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (state.BattleMons[i].ability == ABILITY.TRACE && (gStatuses3[i] & STATUS3_TRACE))
                {
                    u8 target2;
                    
                    side = (GetBattlerPosition(i) ^ BIT_SIDE) & BIT_SIDE; // side of the opposing pokemon
                    target1 = GetBattlerAtPosition(side);
                    target2 = GetBattlerAtPosition(side + BIT_FLANK);
                    if (state.BattleTypeFlags & BATTLE_TYPE_DOUBLE)
                    {
                        if (state.BattleMons[target1].ability != 0 && state.BattleMons[target1].hp != 0
                         && state.BattleMons[target2].ability != 0 && state.BattleMons[target2].hp != 0)
                        {
                            gActiveBattler = GetBattlerAtPosition(((Random() & 1) * 2) | side);
                            state.BattleMons[i].ability = state.BattleMons[gActiveBattler].ability;
                            gLastUsedAbility = state.BattleMons[gActiveBattler].ability;
                            ++effect;
                        }
                        else if (state.BattleMons[target1].ability != 0 && state.BattleMons[target1].hp != 0)
                        {
                            gActiveBattler = target1;
                            state.BattleMons[i].ability = state.BattleMons[gActiveBattler].ability;
                            gLastUsedAbility = state.BattleMons[gActiveBattler].ability;
                            ++effect;
                        }
                        else if (state.BattleMons[target2].ability != 0 && state.BattleMons[target2].hp != 0)
                        {
                            gActiveBattler = target2;
                            state.BattleMons[i].ability = state.BattleMons[gActiveBattler].ability;
                            gLastUsedAbility = state.BattleMons[gActiveBattler].ability;
                            ++effect;
                        }
                    }
                    else
                    {
                        gActiveBattler = target1;
                        if (state.BattleMons[target1].ability && state.BattleMons[target1].hp)
                        {
                            state.BattleMons[i].ability = state.BattleMons[target1].ability;
                            gLastUsedAbility = state.BattleMons[target1].ability;
                            ++effect;
                        }
                    }
                    if (effect)
                    {
                        BattleScriptPushCursorAndCallback(BattleScript_TraceActivates);
                        gStatuses3[i] &= ~(STATUS3_TRACE);
                        state.BattleScripting.battler = i;
                        PREPARE_MON_NICK_WITH_PREFIX_BUFFER(state.BattleTextBuff1, gActiveBattler, state.BattlerPartyIndexes[gActiveBattler])
                        PREPARE_ABILITY.BUFFER(state.BattleTextBuff2, gLastUsedAbility)
                        break;
                    }
                }
            }
            break;
        case ABILITYEFFECT.INTIMIDATE2: // 10
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (state.BattleMons[i].ability == ABILITY.INTIMIDATE && (gStatuses3[i] & STATUS3_INTIMIDATE_POKES))
                {
                    gLastUsedAbility = ABILITY.INTIMIDATE;
                    gStatuses3[i] &= ~(STATUS3_INTIMIDATE_POKES);
                    BattleScriptPushCursor();
                    state.BattlescriptCurrInstr = BattleScript_IntimidateActivates;
                    state.BattleStruct->intimidateBattler = i;
                    ++effect;
                    break;
                }
            }
            break;
        case ABILITYEFFECT.CHECK_OTHER_SIDE: // 12
            side = GetBattlerSide(battler);
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (GetBattlerSide(i) != side && state.BattleMons[i].ability == ability)
                {
                    gLastUsedAbility = ability;
                    effect = i + 1;
                }
            }
            break;
        case ABILITYEFFECT.CHECK_BATTLER_SIDE: // 13
            side = GetBattlerSide(battler);
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (GetBattlerSide(i) == side && state.BattleMons[i].ability == ability)
                {
                    gLastUsedAbility = ability;
                    effect = i + 1;
                }
            }
            break;
        case ABILITYEFFECT.FIELD_SPORT: // 14
            switch (gLastUsedAbility)
            {
            case 0xFD:
                for (i = 0; i < state.BattlersCount; ++i)
                    if (gStatuses3[i] & STATUS3_MUDSPORT)
                        effect = i + 1;
                break;
            case 0xFE:
                for (i = 0; i < state.BattlersCount; ++i)
                    if (gStatuses3[i] & STATUS3_WATERSPORT)
                        effect = i + 1;
                break;
            default:
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (state.BattleMons[i].ability == ability)
                    {
                        gLastUsedAbility = ability;
                        effect = i + 1;
                    }
                }
                break;
            }
            break;
        case ABILITYEFFECT.CHECK_ON_FIELD: // 19
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (state.BattleMons[i].ability == ability && state.BattleMons[i].hp != 0)
                {
                    gLastUsedAbility = ability;
                    effect = i + 1;
                }
            }
            break;
        case ABILITYEFFECT.CHECK_FIELD_EXCEPT_BATTLER: // 15
            side = GetBattlerSide(battler);
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (GetBattlerSide(i) != side && state.BattleMons[i].ability == ability)
                {
                    gLastUsedAbility = ability;
                    effect = i + 1;
                    break;
                }
            }
            if (!effect)
            {
                for (i = 0; i < state.BattlersCount; ++i)
                {
                    if (state.BattleMons[i].ability == ability && GetBattlerSide(i) == side && i != battler)
                    {
                        gLastUsedAbility = ability;
                        effect = i + 1;
                    }
                }
            }
            break;
        case ABILITYEFFECT.COUNT_OTHER_SIDE: // 16
            side = GetBattlerSide(battler);
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (GetBattlerSide(i) != side && state.BattleMons[i].ability == ability)
                {
                    gLastUsedAbility = ability;
                    ++effect;
                }
            }
            break;
        case ABILITYEFFECT.COUNT_BATTLER_SIDE: // 17
            side = GetBattlerSide(battler);
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (GetBattlerSide(i) == side && state.BattleMons[i].ability == ability)
                {
                    gLastUsedAbility = ability;
                    ++effect;
                }
            }
            break;
        case ABILITYEFFECT.COUNT_ON_FIELD: // 18
            for (i = 0; i < state.BattlersCount; ++i)
            {
                if (state.BattleMons[i].ability == ability && i != battler)
                {
                    gLastUsedAbility = ability;
                    ++effect;
                }
            }
            break;
        }
        if (effect && caseID < ABILITYEFFECT.CHECK_OTHER_SIDE && gLastUsedAbility != 0xFF)
            RecordAbilityBattle(battler, gLastUsedAbility);
    }
    return effect;
}
