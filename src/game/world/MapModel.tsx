export interface InputTextureModel {
    x: number,
    y: number,
    width: number,
    height: number,
    stretches: boolean,
    length: number,
    class: string
}

export default interface MapModel {
    name: string,
    id: string,
    width: number,
    height: number,
    textures: {
        barrier: InputTextureModel[],
        base: InputTextureModel[],
        low: InputTextureModel[],
        sprite: InputTextureModel[],
        high: InputTextureModel[]
    }
}
