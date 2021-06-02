import { IOTextureModel } from "./IOTextureModel";
import { IOTransitionModel } from "./IOTransitionModel";

export default interface MapModel {
    id: string,
    width: number,
    height: number,
    textures: {
        barrier: IOTextureModel[],
        base: IOTextureModel[],
        low: IOTextureModel[],
        sprite: IOTextureModel[],
        high: IOTextureModel[]
    },
    transitions: IOTransitionModel[]
}
