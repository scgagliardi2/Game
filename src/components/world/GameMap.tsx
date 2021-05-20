import constants from '../../GlobalConstants'
import { MoveSetType } from '../inputs/MoveSet'
import Player from '../Player'
import Texture, { TextureLevel } from './textures/Texture'
import Tile from './tiles/Tile'
import { cellSize, increment } from './World'
import Layers from './textures/Layers'

export const half = Math.floor(constants.size.windowTiles / 2)

export default class GameMap {

    Name: string

    Layers: Layers

    Left: number
    Top: number

    Width: number
    Height: number

    constructor(name: string, width: number, height: number, startX: number, startY: number) {
        this.Layers = new Layers()

        this.Name = name
        this.Width = width
        this.Height = height

        this.Left = startX
        this.Top = startY

        this.addTexture = this.addTexture.bind(this)
        this.getConvertedNextPosition = this.getConvertedNextPosition.bind(this)
        this.getConvertedPosition = this.getConvertedPosition.bind(this)
    }

    maxLeft() {
        return this.Width - constants.size.windowTiles + 1
    }

    maxTop() {
        return this.Height - constants.size.windowTiles + 1
    }

    getStyle() {
        var t = -1 * this.Top % 1
        var l = -1 * this.Left % 1

        if (this.Top == -1) {
            t = 1
        }
        else if (this.Top == this.maxTop()) {
            t = 0
        }

        if (this.Left == -1) {
            l = 1
        }
        else if (this.Left == this.maxLeft()) {
            l = 0
        }

        return {
            top: t * cellSize,
            left: l * cellSize,
        }
    }

    isRowVisible(y: number): boolean {
        if (this.Top == -1) {
            return y >= 0 && y <= constants.size.windowTiles - 2
        }
        else if (this.Top == this.maxTop()) {
            return y >= this.Top && y <= this.Top + constants.size.windowTiles - 1
        }
        else {
            return y >= Math.floor(this.Top) && y <= this.Top + constants.size.windowTiles - 1
        }
    }

    isColVisible(x: number): boolean {
        if (this.Left == -1) {
            return x >= 0 && x <= constants.size.windowTiles - 2
        }
        else if (this.Left == this.maxLeft()) {
            return x >= this.Left && x <= this.Left + constants.size.windowTiles - 1
        }
        else {
            return x >= Math.floor(this.Left) && x <= this.Left + constants.size.windowTiles - 1
        }
    }

    canMove(direction: MoveSetType, player: Player): boolean {
        switch (direction) {
            case MoveSetType.DOWN:
                if (this.Top + constants.size.windowTiles >= this.Height + 1) {
                    return false
                }
                break
            case MoveSetType.LEFT:
                if (this.Left <= -1) {
                    return false
                }
                break
            case MoveSetType.RIGHT:
                if (this.Left + constants.size.windowTiles >= this.Width + 1) {
                    return false
                }
                break
            case MoveSetType.UP:
                if (this.Top <= -1) {
                    return false
                }
                break
        }

        var position: [number, number] = this.getConvertedPosition(
            player.Texture.X,
            player.Texture.Y
        )

        if (
            (direction == MoveSetType.LEFT && position[0] != this.Left + half - 1)|| 
            (direction == MoveSetType.RIGHT && position[0] != this.Left + half)
        ) {
            return false
        }

        if (
            (direction == MoveSetType.UP && position[1] != this.Top + half - 1)|| 
            (direction == MoveSetType.DOWN && position[1] != this.Top + half)
        ) {
            return false
        }

        return true
    }

    getConvertedNextPosition(x: number, y: number, direction: MoveSetType): [number, number] {
        switch (direction) {
            case MoveSetType.DOWN:
                var x: number = Math.floor(this.Left) + Math.floor(x)
                var y: number = Math.floor(this.Top) + Math.floor(y + 1)
                return [x, y]
            case MoveSetType.RIGHT:
                var x: number = Math.floor(this.Left) + Math.floor(x + 1)
                var y: number = Math.floor(this.Top) + Math.floor(y)
                return [x, y]
            case MoveSetType.LEFT:
                var x: number = Math.ceil(x - 1) + Math.ceil(this.Left)
                var y: number = Math.ceil(y) + Math.ceil(this.Top)
                return [x, y]
            case MoveSetType.UP:
                var x: number = Math.ceil(x) + Math.ceil(this.Left)
                var y: number = Math.ceil(y - 1) + Math.ceil(this.Top)
                return [x, y]
        }
    }

    getConvertedPosition(x: number, y: number): [number, number] {
        var x: number = Math.floor(x) + this.Left
        var y: number = Math.floor(y) + this.Top

        return [x, y]
    }

    move(direction: MoveSetType) {
        switch (direction) {
            case MoveSetType.DOWN:
                this.Top += increment
                break
            case MoveSetType.LEFT:
                this.Left -= increment
                break
            case MoveSetType.RIGHT:
                this.Left += increment
                break
            case MoveSetType.UP:
                this.Top -= increment
                break
        }
    }

    isWalkable(x: number, y: number): boolean {

        if (x < 0 || x > this.Width - 1) {
            return false
        }

        if (y < 0 || y > this.Height - 1) {
            return false
        }

        return this.Layers.isWalkable(x, y)
    }

    getTile(x: number, y: number, textureLevel: TextureLevel): Tile | undefined {
        if (this.Layers.get(textureLevel) == undefined) {
            return undefined
        }

        return this.Layers.get(textureLevel)!.getTile(x, y)
    }

    addTexture(texture: Texture) {
        // create a new Layer if we don't have one
        if (!this.Layers.hasLayer(texture.Level)) {
            this.Layers.create(texture.Level)
        }

        // loop over the tiles
        for (let x = 0; x < texture.Width; x++) {
            for (let y = 0; y < texture.Height; y++) {
                // add the tile to the layer
                this.Layers.get(texture.Level)!.addTile(
                    x + texture.X,
                    y + texture.Y,
                    texture.Tiles[y][x]
                )
            }
        }
    }
}