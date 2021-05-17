import Tile from './Tile';

export enum TextureLevel {
    BASE = 0,
    LOWLANDSCAPE = 1,
    SPRITES = 2,
    HIGHLANDSCAPE = 3
}

export default class Texture {
    Tiles: Tile[][]

    Height: number
    Width: number

    Xpos: number
    Ypos: number

    Level: TextureLevel

    constructor(xpos: number, ypos: number, level: TextureLevel, tiles: Tile[][]) {
        this.Tiles = tiles
        this.Height = tiles.length
        this.Width = tiles[0].length
        this.Xpos = xpos
        this.Ypos = ypos
        this.Level = level
    }
}
