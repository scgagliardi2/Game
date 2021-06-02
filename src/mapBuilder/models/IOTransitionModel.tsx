import { MoveSetType } from "../../game/inputs/MoveSet";

export interface IOTransitionModel {
    mapX: number,
    mapY: number,
    walkOn: boolean,
    activationDirection: MoveSetType,
    newMapX: number,
    newMapY: number,
    newMapId: string,
    playerX: number,
    playerY: number,
    playerDirection: MoveSetType
}