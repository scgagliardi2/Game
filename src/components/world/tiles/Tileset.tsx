import { TextureLevel } from '../textures/Texture';
import Tile from './Tile';

export default class Tileset {

    Tiles

    constructor() {
        this.Tiles = new Map<number, Tile>()
    }

    addTile(tile: Tile, textureLevel: TextureLevel) {
        this.Tiles.set(textureLevel, tile)
    }

    willTransition(): boolean {
        for (const tile of this.Tiles) {
            if (tile[1] != undefined && tile[1].IsTransition) {
                return true
            }
        }

        return false
    }

    callTransition() {
        this.Tiles.forEach((tile: Tile) => {
            if (tile != undefined && tile.IsTransition) {
                tile.TransitionCallback()
                return
            }
        })
    }

    canWalkOn(): boolean {
        if (this.hasHighLandscape()) {
            return this.Tiles.get(TextureLevel.HIGHLANDSCAPE)!.CanWalkThrough
        }

        if (this.hasSprite()) {
            return this.Tiles.get(TextureLevel.SPRITES)!.CanWalkThrough
        }

        return true
    }

    hasBase(): boolean {
        return this.Tiles.get(TextureLevel.BASE) != undefined
    }

    hasLowLandscape(): boolean {
        return this.Tiles.get(TextureLevel.LOWLANDSCAPE) != undefined
    }

    hasSprite(): boolean {
        return this.Tiles.get(TextureLevel.SPRITES) != undefined
    }

    hasHighLandscape(): boolean {
        return this.Tiles.get(TextureLevel.HIGHLANDSCAPE) != undefined
    }
}
