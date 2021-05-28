import { MoveSetType } from "../../inputs/MoveSet";
import Tile from "../tiles/Tile";

export default class TextureLayer {

    Tiles: Tile[][]

    constructor() {
        this.Tiles = []
    }

    canWalkOn(x: number, y: number, direction: MoveSetType): boolean {
        var tile: Tile = this.getTile(x, y)!

        return tile == undefined || !(tile.BlockedOnDirections.includes(direction))
    }

    canLeave(x: number, y: number, direction: MoveSetType): boolean {
        var tile: Tile = this.getTile(x, y)!

        return tile == undefined || !(tile.BlockedOffDirections.includes(direction))
    }

    getTile(x: number, y: number): Tile | undefined {
        if (this.Tiles[x] == undefined) {
            return undefined
        }

        return this.Tiles[x][y]
    }

    addTile(x: number, y: number, tile: Tile) {
        if (this.Tiles[x] == undefined) {
            this.Tiles[x] = []
        }

        this.Tiles[x][y] = tile
    }
}