import Red from "../../assets/player/Red/Red";
import Character from "./textures/Character";
import { MoveSetType } from "../inputs/MoveSet";
import Texture, { TextureLevel } from "./textures/Texture";
import Tileset from "./tiles/Tileset";
import constants from '../../GlobalConstants'
import { increment } from './World';
import Tile from "./tiles/Tile";

export const half = Math.floor(constants.size.windowTiles / 2)

export default class GameMap {

    Name: string

    Tiles: Tileset[][]

    Width: number
    Height: number

    X: number
    Y: number
    OffsetX: number
    OffsetY: number

    constructor(name: string, width: number, height: number, topLeftIndex: [number, number]) {
        this.Tiles = [[]]

        this.Name = name
        this.Width = width
        this.Height = height

        this.X = topLeftIndex[0]
        this.Y = topLeftIndex[1]
        this.OffsetX = 0
        this.OffsetY = 0

        this.addTexture = this.addTexture.bind(this)
        this.updateTexture = this.updateTexture.bind(this)
        this.removeTexture = this.removeTexture.bind(this)
    }

    isRowVisible(y: number): boolean {
        return y >= this.Y && y <= this.Y + constants.size.windowTiles - 1
    }

    isColVisible(x: number): boolean {
        return x >= this.X && x <= this.X + constants.size.windowTiles - 1
    }

    getTile(x: number, y: number, textureLevel: TextureLevel): Tile | undefined {
        if (this.Tiles[y] == undefined || this.Tiles[y][x] == undefined) {
            return undefined
        }

        return this.Tiles[y][x].Tiles.get(textureLevel)
    }

    getTileSet(x: number, y: number): Tileset | undefined {
        if (this.Tiles[y] == undefined || this.Tiles[y][x] == undefined) {
            return undefined
        }

        return this.Tiles[y][x]
    }

    isCenteredVertically(y: number): boolean {
        return y == this.Y + half
    }

    isCenteredHorizontally(x: number): boolean {
        return x == this.X + half
    }

    canMove(direction: MoveSetType): boolean {
        switch (direction) {
            case MoveSetType.DOWN:
                if (this.Y + constants.size.windowTiles > this.Height) {
                    return false
                }
                break
            case MoveSetType.LEFT:
                if (this.X <= -1) {
                    return false
                }
                break
            case MoveSetType.RIGHT:
                if (this.X + constants.size.windowTiles > this.Width) {
                    return false
                }
                break
            case MoveSetType.UP:
                if (this.Y <= -1) {
                    return false
                }
                break
        }

        return true
    }

    move(direction: MoveSetType) {
        switch (direction) {
            case MoveSetType.DOWN:
                this.OffsetY -= increment
                break
            case MoveSetType.LEFT:
                this.OffsetX += increment
                break
            case MoveSetType.RIGHT:
                this.OffsetX -= increment
                break
            case MoveSetType.UP:
                this.OffsetY += increment
                break
        }
    }

    resetOffsetsAfterMove(direction: MoveSetType) {
        // get the new top corner (X,Y)
        switch (direction) {
            case MoveSetType.LEFT:
                this.OffsetX = this.OffsetX == 0 ? 1 : this.OffsetX
                
                this.X -= this.OffsetX

                this.OffsetX = this.X == -1 ? 1 : 0  
                break
            case MoveSetType.RIGHT:
                this.OffsetX = this.OffsetX == 0 ? -1 : this.OffsetX
                
                this.X -= this.OffsetX

                this.OffsetX = this.X == -1 ? 1 : 0  
                break
            case MoveSetType.DOWN:
          
                this.OffsetY = this.OffsetY == 0 ? -1 : this.OffsetY

                this.Y -= this.OffsetY

                this.OffsetY = this.Y == -1 ? 1 : 0  
                break
            case MoveSetType.UP:
                this.OffsetY = this.OffsetY == 0 ? 1 : this.OffsetY

                this.Y -= this.OffsetY

                this.OffsetY = this.Y == -1 ? 1 : 0  
                break
        }
    }


    removeTexture(texture: Texture) {
        for (let x = 0; x < texture.Width; x++) {
            for (let y = 0; y < texture.Height; y++) {
                // is there a tileset here to remove a tile from
                if (this.Tiles[x + texture.X] != undefined && this.Tiles[x + texture.X][y + texture.Y] != undefined) {
                    var tileset: Tileset = this.Tiles[x + texture.X][y + texture.Y]
                    
                    tileset.Tiles.delete(texture.Level)
                }
            }
        }
    }

    updateTexture(texture: Texture) {
        for (let x = 0; x < texture.Width; x++) {
            for (let y = 0; y < texture.Height; y++) {
                // is there a tileset here to remove a tile from
                if (this.Tiles[x + texture.X] != undefined && this.Tiles[x + texture.X][y + texture.Y] != undefined) {
                    var tileset: Tileset = this.Tiles[x + texture.X][y + texture.Y]

                    tileset.addTile(texture.Tiles[y][x], texture)
                }
            }
        }
    }

    addTexture(texture: Texture) {
        if ((texture.X + texture.Width > this.Width) || (texture.Y + texture.Height > this.Height)) {
            throw new Error(`Texture is out of map bounds. Map name ${this.Name}`)
        }   

        for (let x = 0; x < texture.Width; x++) {
            for (let y = 0; y < texture.Height; y++) {
                // do we have a list?
                if (this.Tiles[x + texture.X] == undefined) {
                    this.Tiles[x + texture.X] = []
                }

                // do we have a Tileset here?
                if (this.Tiles[x + texture.X][y + texture.Y] == undefined) {
                    this.Tiles[x + texture.X][y + texture.Y] = new Tileset()
                }

                // add the tile to the set
                var tileset: Tileset = this.Tiles[x + texture.X][y + texture.Y]
                tileset.addTile(texture.Tiles[y][x], texture)
            }
        }
    }
}