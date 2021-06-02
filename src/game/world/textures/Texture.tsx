import { InputTextureModel } from '../../../mapBuilder/models/MapModel';
import Tile from '../tiles/Tile';

export enum TextureLevel {
    BARRIER = -1,
    BASE = 0,
    LOWLANDSCAPE = 1,
    SPRITES = 2,
    HIGHLANDSCAPE = 3
}

export default class Texture {
    ID: string

    Tiles: Tile[][]

    Height: number
    Width: number

    X: number
    Y: number

    Level: TextureLevel

    constructor(id: string, xpos: number, ypos: number, level: TextureLevel, tiles: Tile[][]) {
        this.ID = id
        this.Tiles = tiles
        this.Height = tiles.length
        this.Width = tiles[0].length
        this.X = xpos
        this.Y = ypos
        this.Level = level
    }

    toYaml(): InputTextureModel {
        return {
            x: this.X,
            y: this.Y,
            width: this.Width,
            height: this.Height,
            stretches: false,
            length: 0,
            repeatIndex: 0,
            class: this.ID
        }
    }
}
