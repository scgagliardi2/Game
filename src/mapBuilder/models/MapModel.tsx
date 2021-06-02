import { MoveSetType } from "../../game/inputs/MoveSet";

export interface InputTextureModel {
    x: number,
    y: number,
    width: number,
    height: number,
    stretches: boolean,
    length: number,
    repeatIndex: number,
    class: string
}

export interface InputTransitionModel {
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

export default interface MapModel {
    id: string,
    width: number,
    height: number,
    textures: {
        barrier: InputTextureModel[],
        base: InputTextureModel[],
        low: InputTextureModel[],
        sprite: InputTextureModel[],
        high: InputTextureModel[]
    },
    transitions: InputTransitionModel[]
}
