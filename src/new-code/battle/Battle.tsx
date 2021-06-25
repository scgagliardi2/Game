import { BattleState } from "./BattleMain"

export const BIT_SIDE = 1

export function GET_BATTLER_POSITION(battler: number) {
    return (BattleState.BattlerPositions[battler])
}

export function GET_BATTLER_SIDE2(battler: number) {
    return (GET_BATTLER_POSITION(battler) & BIT_SIDE)
}
