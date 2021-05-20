import Tile from "../tiles/Tile";

export default class TextureLayer {

    Tiles: Tile[][]

    constructor() {
        this.Tiles = []
    }

    canWalkOn(x: number, y: number): boolean {
        var tile: Tile = this.getTile(x, y)!

        return tile == undefined || tile.CanWalkThrough
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

    getTransition(x: number, y: number) {
        var tile = this.getTile(x, y)

        if (tile != undefined && tile.IsTransition) {
            return tile.TransitionCallback
        }

        return undefined
    }
}