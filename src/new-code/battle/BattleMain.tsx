import { GetMultiplayerId, ReceivedRemoteLinkPlayers } from "../link/Link";
import { m4aSongNumStop } from "../sound/m4a/M4A";
import { SE_LOW_HEALTH } from "../sound/Songs";
import { Main, SetHBlankCallback, SetMainCallback2, SetVBlankCallback } from "../Main";
import { SpecialVar } from "../misc/EventData";
import { SPECIES } from "../pokemon/data/Species";
import { EVO_MODE } from "../pokemon/evolution/EvoMode";
import { BattlePokemon, Pokemon } from "../pokemon/IPokemon";
import { GetEvolutionTargetSpecies, PartySpreadPokerus, RandomlyGivePartyPokerus } from "../pokemon/Pokemon";
import { SetRoamerInactive, UpdateRoamerHPStatus } from "../roamer/Roamer";
import { EvolutionScene } from "../scenes/EvolutionScene";
import { EnemyParty, PlayerParty } from "../State";
import { GetBattlerSide } from "./animation/BattleAnimMons";
import { B_ACTION } from "./enums/BattleAction";
import { B_OUTCOME } from "./enums/BattleOutcome";
import { B_SIDE } from "./enums/BattleSide";
import { BATTLE_TYPE } from "./enums/BattleType";
import { BattleResults, BattleStruct } from "./IBattle";
import { FadeOutMapMusic } from "../sound/Sound";
import { TrySetQuestLogBattleEvent } from "../quest/QuestLogBattle";
import { TRAINER } from "../trainer/Opponents";
import { HELPCONTEXT, SetHelpContext } from "../misc/HelpSystem";
import { HandleLinkBattleSetup } from "./BattleControllers";
import { RunTasks } from "../task/Task";
import { BIT_SIDE } from "./Battle";
import { AnimateSprites } from "../sprite/Sprite";
import { ABILITY } from "../pokemon/data/Ability";
import { WEATHER } from "../environment/Weather";
import { MOVE } from "../move/data/Moves";
import { ITEM } from "../item/data/Items";
import { HOLD_EFFECT } from "../item/data/HoldEffects";
import { WEATHER_RAIN_ANY, WEATHER_SUN_ANY } from "./BattleWeather";
import { WEATHER_HAS_EFFECT } from "./BattleUtils";
import { ItemId_GetHoldEffect } from "../item/Item";
import { ABILITYEFFECT } from "./enums/AbilityEffect";

export const MULTIUSE_STATE = 0x0

export interface IBattleState {
    BattleScripting: any;
    BattlerAttacker: number;
    BattleMoves: any;
    CurrentMove: number;
    LastUsedAbility: number;
    MainFunc: any,
    CurrentActionFuncId: B_ACTION,
    LeveledUpInBattle: boolean,
    LeveledUpItem: number,
    BattleTypeFlags: any,
    TrainerBattleOpponent_A: TRAINER

    BattleStruct: BattleStruct,
    BattleCommunication: any[],

    BattleOutcome: B_OUTCOME,
    BattleResults: BattleResults

    BattleWeather: number,

    ActiveBattler: number,
    BattlersCount: number,
    BattleMons: BattlePokemon[],
    BattlerPositions: number[],

    PreBattleCallback1: () => void
}

export const BattleState: IBattleState = {
    MainFunc: undefined,
    CurrentActionFuncId: B_ACTION.NONE,
    LeveledUpInBattle: false,
    LeveledUpItem: 0,
    BattleTypeFlags: 0,
    TrainerBattleOpponent_A: TRAINER.NONE,

    BattleStruct: {},
    BattleCommunication: [],

    BattleOutcome: B_OUTCOME.WON,
    BattleResults: {},

    BattleWeather: 0,

    ActiveBattler: 0,
    BattlersCount: 0,
    BattleMons: [],
    BattlerPositions: [],

    PreBattleCallback1: () => void
}








export function GetWhoStrikesFirst(battler1: number, battler2: number, ignoreChosenMoves: boolean): number {
    let strikesFirst = 0;
    let speedMultiplierBattler1 = 0, speedMultiplierBattler2 = 0;
    let speedBattler1 = 0, speedBattler2 = 0;
    let holdEffect = 0;
    let holdEffectParam = 0;
    let moveBattler1 = 0, moveBattler2 = 0;

    if (WEATHER_HAS_EFFECT()) {
        if ((BattleState.BattleMons[battler1].ability == ABILITY.SWIFT_SWIM && BattleState.BattleWeather & WEATHER_RAIN_ANY())
         || (BattleState.BattleMons[battler1].ability == ABILITY.CHLOROPHYLL && BattleState.BattleWeather & WEATHER_SUN_ANY()))
            speedMultiplierBattler1 = 2;
        else
            speedMultiplierBattler1 = 1;
        if ((BattleState.BattleMons[battler2].ability == ABILITY.SWIFT_SWIM && BattleState.BattleWeather & WEATHER_RAIN_ANY())
         || (BattleState.BattleMons[battler2].ability == ABILITY.CHLOROPHYLL && BattleState.BattleWeather & WEATHER_SUN_ANY()))
            speedMultiplierBattler2 = 2;
        else
            speedMultiplierBattler2 = 1;
    }
    else
    {
        speedMultiplierBattler1 = 1;
        speedMultiplierBattler2 = 1;
    }
    speedBattler1 = (BattleState.BattleMons[battler1].speed * speedMultiplierBattler1)
                    * (gStatStageRatios[BattleState.BattleMons[battler1].statStages[STAT_SPEED]][0])
                    / (gStatStageRatios[BattleState.BattleMons[battler1].statStages[STAT_SPEED]][1]);
    if (BattleState.BattleMons[battler1].item == ITEM.ENIGMA_BERRY)
    {
        holdEffect = gEnigmaBerries[battler1].holdEffect;
        holdEffectParam = gEnigmaBerries[battler1].holdEffectParam;
    }
    else
    {
        holdEffect = ItemId_GetHoldEffect(BattleState.BattleMons[battler1].item);
        holdEffectParam = ItemId_GetHoldEffectParam(BattleState.BattleMons[battler1].item);
    }
    // badge boost
    if (!(BattleState.BattleTypeFlags & BATTLE_TYPE.LINK)
     && FlagGet(FLAG_BADGE03_GET)
     && GetBattlerSide(battler1) == B_SIDE.PLAYER)
        speedBattler1 = (speedBattler1 * 110) / 100;
    if (holdEffect == HOLD_EFFECT.MACHO_BRACE)
        speedBattler1 /= 2;
    if (BattleState.BattleMons[battler1].status1 & STATUS1_PARALYSIS)
        speedBattler1 /= 4;
    if (holdEffect == HOLD_EFFECT.QUICK_CLAW && gRandomTurnNumber < (0xFFFF * holdEffectParam) / 100)
        speedBattler1 = UINT_MAX;
    // check second battlerId's speed
    speedBattler2 = (BattleState.BattleMons[battler2].speed * speedMultiplierBattler2)
                    * (gStatStageRatios[BattleState.BattleMons[battler2].statStages[STAT_SPEED]][0])
                    / (gStatStageRatios[BattleState.BattleMons[battler2].statStages[STAT_SPEED]][1]);
    if (BattleState.BattleMons[battler2].item == ITEM.ENIGMA_BERRY)
    {
        holdEffect = gEnigmaBerries[battler2].holdEffect;
        holdEffectParam = gEnigmaBerries[battler2].holdEffectParam;
    }
    else
    {
        holdEffect = ItemId_GetHoldEffect(BattleState.BattleMons[battler2].item);
        holdEffectParam = ItemId_GetHoldEffectParam(BattleState.BattleMons[battler2].item);
    }
    // badge boost
    if (!(BattleState.BattleTypeFlags & BATTLE_TYPE.LINK)
     && FlagGet(FLAG_BADGE03_GET)
     && GetBattlerSide(battler2) == B_SIDE.PLAYER)
        speedBattler2 = (speedBattler2 * 110) / 100;
    if (holdEffect == HOLD_EFFECT.MACHO_BRACE)
        speedBattler2 /= 2;
    if (BattleState.BattleMons[battler2].status1 & STATUS1_PARALYSIS)
        speedBattler2 /= 4;
    if (holdEffect == HOLD_EFFECT.QUICK_CLAW && gRandomTurnNumber < (0xFFFF * holdEffectParam) / 100)
        speedBattler2 = UINT_MAX;
    if (ignoreChosenMoves)
    {
        moveBattler1 = MOVE.NONE;
        moveBattler2 = MOVE.NONE;
    }
    else
    {
        if (gChosenActionByBattler[battler1] == B_ACTION.USE_MOVE)
        {
            if (gProtectStructs[battler1].noValidMoves)
                moveBattler1 = MOVE.STRUGGLE;
            else
                moveBattler1 = BattleState.BattleMons[battler1].moves[*(gBattleStruct->chosenMovePositions + battler1)];
        }
        else
            moveBattler1 = MOVE.NONE;
        if (gChosenActionByBattler[battler2] == B_ACTION.USE_MOVE)
        {
            if (gProtectStructs[battler2].noValidMoves)
                moveBattler2 = MOVE.STRUGGLE;
            else
                moveBattler2 = BattleState.BattleMons[battler2].moves[*(gBattleStruct->chosenMovePositions + battler2)];
        }
        else
            moveBattler2 = MOVE.NONE;
    }
    // both move priorities are different than 0
    if (gBattleMoves[moveBattler1].priority != 0 || gBattleMoves[moveBattler2].priority != 0)
    {
        // both priorities are the same
        if (gBattleMoves[moveBattler1].priority == gBattleMoves[moveBattler2].priority)
        {
            if (speedBattler1 == speedBattler2 && Random() & 1)
                strikesFirst = 2; // same speeds, same priorities
            else if (speedBattler1 < speedBattler2)
                strikesFirst = 1; // battler2 has more speed
            // else battler1 has more speed
        }
        else if (gBattleMoves[moveBattler1].priority < gBattleMoves[moveBattler2].priority)
            strikesFirst = 1; // battler2's move has greater priority
        // else battler1's move has greater priority
    }
    // both priorities are equal to 0
    else
    {
        if (speedBattler1 == speedBattler2 && Math.random() > 0.5)
            strikesFirst = 2; // same speeds, same priorities
        else if (speedBattler1 < speedBattler2)
            strikesFirst = 1; // battler2 has more speed
        // else battler1 has more speed
    }
    return strikesFirst;
}


export function TryEvolvePokemon(): boolean {

    while (BattleState.LeveledUpInBattle) {
        for (var i = 0; i < PlayerParty.length; ++i) {
            if (BattleState.LeveledUpInBattle){

                let item = BattleState.LeveledUpItem;
                var pokemon = PlayerParty[i]

                let species = GetEvolutionTargetSpecies(pokemon, EVO_MODE.NORMAL, item);

                if (species != SPECIES.NONE) {
                    EvolutionScene(pokemon, species, 0x81, i);

                    return true
                }
            }
        }
    }

    return false
}

