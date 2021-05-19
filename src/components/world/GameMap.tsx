import Red from "../../assets/player/Red/Red";
import Character from "./textures/Character";
import { MoveSetType } from "./textures/MoveSet";
import Texture, { TextureLevel } from "./textures/Texture";
import Tileset from "./tiles/Tileset";
import constants from '../../GlobalConstants'
import { cellSize } from './World';
import Tile from "./tiles/Tile";

const half = Math.floor(constants.size.windowTiles / 2)

export default class GameMap {

    Name: string

    Tiles: Tileset[][]

    Player: Character

    Width: number
    Height: number

    OffsetX: number
    OffsetY: number
    AnimationIndex: number
    IsMoving: boolean

    constructor(name: string, width: number, height: number, player_start: [number, number]) {
        this.Tiles = [[]]

        // add the player to the games
        this.Player = new Red(player_start[0], player_start[1])
        this.addTexture(this.Player)

        this.Name = name
        this.Width = width
        this.Height = height

        this.OffsetX = 0
        this.OffsetY = 0
        this.calculateFinalOffset()

        this.AnimationIndex = 0
        this.IsMoving = false

        this.handleMove = this.handleMove.bind(this)
        this.addTexture = this.addTexture.bind(this)
        this.updateTexture = this.updateTexture.bind(this)
        this.removeTexture = this.removeTexture.bind(this)
    }

    isRowVisible(y: number): boolean {
        var r: number[] = []

        if (this.Player.Ypos - half < 0) {
            r = [0, constants.size.windowTiles - 2]
        }
        else if (this.Height < this.Player.Ypos + half) {
            r = [this.Height - constants.size.windowTiles + 1, this.Height - 1]
        }
        else {
            r = [this.Player.Ypos - half, this.Player.Ypos + half]
        }

        return y >= r[0] && y <= r[1]
    }

    isColVisible(x: number): boolean {

        var r: number[] = []

        if (this.Player.Xpos - half < 0) {
            r = [0, constants.size.windowTiles - 2]
        }
        else if (this.Width < this.Player.Xpos + half) {
            r = [this.Width - constants.size.windowTiles + 1, this.Width - 1]
        }
        else {
            r = [this.Player.Xpos - half, this.Player.Xpos + half]
        }

        return x >= r[0] && x <= r[1]
    }

    getTile(x: number, y: number, textureLevel: TextureLevel): Tile | undefined {
        if (this.Tiles[y] == undefined || this.Tiles[y][x] == undefined) {
            return undefined
        }

        return this.Tiles[y][x].Tiles.get(textureLevel)
    }

    handleMove(direction: MoveSetType, tap: boolean, update: () => void): any{  
        if (!this.IsMoving) {
            let facingCoords: number[] = this.Player.look(direction, update, this.updateTexture)

            // not facing the edges
            if (facingCoords[0] >= 0 && facingCoords[0] < this.Width && facingCoords[1] >= 0 && facingCoords[1] < this.Height){
                var nextTile: Tileset = this.Tiles[facingCoords[0]][facingCoords[1]]
    
                if (!tap && nextTile.canWalkOn()) {
                    this.IsMoving = true
    
                    var moving = setInterval(() => { 
                        // increment animation index
                        this.AnimationIndex++
        
                        if (this.AnimationIndex == 4) {
                            
                            this.moveCleanup(facingCoords)
        
                            clearInterval(moving)
                        }
                        else {
                            this.calculateWindowOffsetDuringMove(direction)
                        }
    
                        // update player tile
                        this.Player.nextTile()
                        
                        this.updateTexture(this.Player)
    
                        update()
                    },
                    100)
                    
                    if (nextTile.willTransition()) {
                        nextTile.callTransition()
                    }
                }
            }
        }
    }

    moveCleanup(facingCoords: number[]) {
        // remove the 'old' player texture
        this.removeTexture(this.Player)

        this.AnimationIndex = 0

        // update the players location
        this.Player.Xpos = facingCoords[0] 
        this.Player.Ypos = facingCoords[1]

        this.IsMoving = false

        this.calculateFinalOffset()
    }

    getPlayerAdjustedTile(x: number, y: number, level: TextureLevel): Tile {

        var cx: number = this.Player.Xpos
        var cy: number = this.Player.Ypos

        if (cx - half <= 0) {
            cx = half
        }
        else if (cx + half >= this.Width) {
            cx = this.Width - half - 1
        }

        if (cy - half <= 0) {
            cy = half
        }
        else if (cy + half >= this.Height) {
            cy = this.Height - half - 1
        }

        var dx = Math.floor(cx - half)
        var dy = Math.floor(cy - half)

        return this.Tiles[x + dx][y + dy].Tiles.get(level)!
    }

    calculateFinalOffset() {
        if (this.Player.Xpos - half < 0) {
            this.OffsetX = 1
        }
        else {
            this.OffsetX = 0
        }

        if (this.Player.Ypos - half < 0) {
            this.OffsetY = 1
        }
        else {
            this.OffsetY = 0
        }
    }

    calculateWindowOffsetDuringMove(direction: MoveSetType) {
        var increment = 1 / 4

        if (direction == MoveSetType.DOWN || direction == MoveSetType.UP) {
            var cantY = 
                (this.Player.Ypos - half == -1 && direction == MoveSetType.UP) ||
                (this.Player.Ypos - half < -1) ||
                (this.Player.Ypos + half == this.Height && direction == MoveSetType.DOWN) ||
                (this.Player.Ypos + half > this.Height)

            if (!cantY) {
                var negY = direction == MoveSetType.DOWN ? -1 : 1

                increment = negY * increment

                this.OffsetY += increment
            }
        }
        else {
            var cantX = 
                (this.Player.Xpos - half == -1 && direction == MoveSetType.LEFT) ||
                (this.Player.Xpos - half < -1) ||
                (this.Player.Xpos + half == this.Width && direction == MoveSetType.RIGHT) ||
                (this.Player.Xpos + half > this.Width)

            if (!cantX) {
                var negX = direction == MoveSetType.RIGHT ? -1 : 1

                increment = negX * increment

                this.OffsetX += increment
            }
        }
    }

    removeTexture(texture: Texture) {
        for (let x = 0; x < texture.Width; x++) {
            for (let y = 0; y < texture.Height; y++) {
                // is there a tileset here to remove a tile from
                if (this.Tiles[x + texture.Xpos] != undefined && this.Tiles[x + texture.Xpos][y + texture.Ypos] != undefined) {
                    var tileset: Tileset = this.Tiles[x + texture.Xpos][y + texture.Ypos]
                    
                    tileset.Tiles.delete(texture.Level)
                }
            }
        }
    }

    updateTexture(texture: Texture) {
        for (let x = 0; x < texture.Width; x++) {
            for (let y = 0; y < texture.Height; y++) {
                // is there a tileset here to remove a tile from
                if (this.Tiles[x + texture.Xpos] != undefined && this.Tiles[x + texture.Xpos][y + texture.Ypos] != undefined) {
                    var tileset: Tileset = this.Tiles[x + texture.Xpos][y + texture.Ypos]

                    tileset.addTile(texture.Tiles[y][x], texture)
                }
            }
        }
    }

    addTexture(texture: Texture) {
        if ((texture.Xpos + texture.Width > this.Width) || (texture.Ypos + texture.Height > this.Height)) {
            throw new Error(`Texture is out of map bounds. Map name ${this.Name}`)
        }   

        for (let x = 0; x < texture.Width; x++) {
            for (let y = 0; y < texture.Height; y++) {
                // do we have a list?
                if (this.Tiles[x + texture.Xpos] == undefined) {
                    this.Tiles[x + texture.Xpos] = []
                }

                // do we have a Tileset here?
                if (this.Tiles[x + texture.Xpos][y + texture.Ypos] == undefined) {
                    this.Tiles[x + texture.Xpos][y + texture.Ypos] = new Tileset()
                }

                // add the tile to the set
                var tileset: Tileset = this.Tiles[x + texture.Xpos][y + texture.Ypos]
                tileset.addTile(texture.Tiles[y][x], texture)
            }
        }
    }
}