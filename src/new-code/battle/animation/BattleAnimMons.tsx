import { GET_BATTLER_POSITION, GET_BATTLER_SIDE2 } from "../Battle";
import { BattleState } from "../BattleMain";

export function GetBattlerSide(battlerId: number): number {
    return GET_BATTLER_SIDE2(battlerId);
}

export function GetBattlerPosition(battlerId: number): number {
    return GET_BATTLER_POSITION(battlerId);
}

export function GetBattlerAtPosition(position: number): number {
    let i;

    for (i = 0; i < BattleState.BattlersCount; ++i)
        if (BattleState.BattlerPositions[i] == position)
            break;
    return i;
}