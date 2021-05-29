import Tile from '../tiles/Tile';

export enum TextureLevel {
    BARRIER = -1,
    BASE = 0,
    LOWLANDSCAPE = 1,
    SPRITES = 2,
    HIGHLANDSCAPE = 3
}

export default class Texture {
    Tiles: Tile[][]

    Height: number
    Width: number

    X: number
    Y: number

    Level: TextureLevel

    constructor(xpos: number, ypos: number, level: TextureLevel, tiles: Tile[][]) {
        this.Tiles = tiles
        this.Height = tiles.length
        this.Width = tiles[0].length
        this.X = xpos
        this.Y = ypos
        this.Level = level
    }
}
