import { GetBattlerAtPosition, GetBattlerSide } from "../battle/animation/BattleAnimMons";
import { BattleState } from "../battle/BattleMain";
import { B_OUTCOME } from "../battle/enums/BattleOutcome";
import { B_SIDE } from "../battle/enums/BattleSide";
import { BATTLE_TYPE } from "../battle/enums/BattleType";
import { GetCurrentRegionMapSectionId } from "../environment/Overworld";
import { SPECIES } from "../pokemon/data/Species";
import { EnemyParty } from "../State";
import { TRAINER_CLASS } from "../trainer/TrainerClass";
import { Trainers } from "../trainer/Trainers";
import { QL_EVENT } from "./enums/QuestLogEvent";
import { SetQuestLogEvent } from "./QuestLogEvents";

export interface QuestLogStruct_TrainerBattleRecord {
    v0: number
    v2: number
    v4: number
    v6: number
    v7: number
}

export interface QuestLogStruct_WildBattleRecord {
    defeatedSpecies: number
    caughtSpecies: number
    mapSec: number
}

export function TrySetQuestLogBattleEvent() {
    if (!(BattleState.BattleTypeFlags & (BATTLE_TYPE.LINK | BATTLE_TYPE.OLD_MAN_TUTORIAL | BATTLE_TYPE.POKEDUDE)) && (BattleState.BattleOutcome == B_OUTCOME.WON || BattleState.BattleOutcome == B_OUTCOME.CAUGHT)) {
        let questLogTrainerBattleRecord: QuestLogStruct_TrainerBattleRecord = {
            v0: 0,
            v2: 0,
            v4: 0,
            v6: 0,
            v7: 0
        }
        let questLogWildBattleRecord: QuestLogStruct_WildBattleRecord = {
            defeatedSpecies: 0,
            caughtSpecies: 0,
            mapSec: 0
        }
        let eventId
        let playerEndingHP
        let playerMaxHP

        if (BattleState.BattleTypeFlags & BATTLE_TYPE.TRAINER) {
            switch (Trainers[BattleState.TrainerBattleOpponent_A].trainerClass) {
                case TRAINER_CLASS.LEADER_2:
                    eventId = QL_EVENT.DEFEATED_GYM_LEADER;
                    break;
                case TRAINER_CLASS.CHAMPION_2:
                    eventId = QL_EVENT.DEFEATED_CHAMPION;
                    break;
                case TRAINER_CLASS.ELITE_FOUR_2:
                    eventId = QL_EVENT.DEFEATED_E4_MEMBER;
                    break;
                default:
                    eventId = QL_EVENT.DEFEATED_TRAINER;
                    break;
            }
            questLogTrainerBattleRecord.v0 = BattleState.TrainerBattleOpponent_A;
            if (BattleState.BattleTypeFlags & BATTLE_TYPE.DOUBLE) {
                questLogTrainerBattleRecord.v2 = BattleState.BattleResults.lastOpponentSpecies;
                if (GetBattlerSide(BattleState.BattleStruct.field_182) == B_SIDE.PLAYER)
                    questLogTrainerBattleRecord.v4 = BattleState.BattleMons[BattleState.BattleStruct.field_182].species;
                else if (BattleState.BattleMons[GetBattlerAtPosition(0)].hp != 0)
                    questLogTrainerBattleRecord.v4 = BattleState.BattleMons[GetBattlerAtPosition(0)].species;
                else
                    questLogTrainerBattleRecord.v4 = BattleState.BattleMons[GetBattlerAtPosition(2)].species;
                playerEndingHP = BattleState.BattleMons[GetBattlerAtPosition(0)].hp + BattleState.BattleMons[GetBattlerAtPosition(2)].hp;
                playerMaxHP = BattleState.BattleMons[GetBattlerAtPosition(0)].maxHP + BattleState.BattleMons[GetBattlerAtPosition(2)].maxHP;
            }
            else {
                questLogTrainerBattleRecord.v2 = BattleState.BattleResults.lastOpponentSpecies;
                questLogTrainerBattleRecord.v4 = BattleState.BattleMons[GetBattlerAtPosition(0)].species;
                playerEndingHP = BattleState.BattleMons[GetBattlerAtPosition(0)].hp;
                playerMaxHP = BattleState.BattleMons[GetBattlerAtPosition(0)].maxHP;
            }
            questLogTrainerBattleRecord.v7 = GetCurrentRegionMapSectionId();
            questLogTrainerBattleRecord.v6 = 0;
            if (playerEndingHP < playerMaxHP / 3 * 2)
                questLogTrainerBattleRecord.v6 = 1;
            if (playerEndingHP < playerMaxHP / 3)
                questLogTrainerBattleRecord.v6++;
            SetQuestLogEvent(eventId, questLogTrainerBattleRecord);
        }
        else
        {
            if (BattleState.BattleOutcome == B_OUTCOME.WON) {
                questLogWildBattleRecord.defeatedSpecies = EnemyParty[0].box.secure.substructs.type0.species
                questLogWildBattleRecord.caughtSpecies = SPECIES.NONE;
            }
            else {// gBattleOutcome == B_OUTCOME_CAUGHT
                questLogWildBattleRecord.defeatedSpecies = SPECIES.NONE;
                questLogWildBattleRecord.caughtSpecies = EnemyParty[0].box.secure.substructs.type0.species
            }
            questLogWildBattleRecord.mapSec = GetCurrentRegionMapSectionId();
            SetQuestLogEvent(QL_EVENT.DEFEATED_WILD_MON, questLogWildBattleRecord);
        }
    }
}
