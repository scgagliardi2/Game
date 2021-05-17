import Character from "../../assets/characters/Character";
import { MoveSetType } from "../../assets/characters/MoveSet";
import Red from "../../assets/characters/Red";
import Texture from "../../assets/Texture";
import Tileset from "./tiles/Tileset";


export default class GameMap {

    Name: string

    Tiles: Tileset[][]

    Player: Character

    Width: number
    Height: number

    constructor(name: string, width: number, height: number) {
        this.Tiles = [[]]

        // add the player to the game
        this.Player = new Red(5, 6)
        this.addTexture(this.Player)

        this.Name = name
        this.Width = width
        this.Height = height

        this.updateTexture = this.updateTexture.bind(this)
        this.removeTexture = this.removeTexture.bind(this)
    }

    handleMove(direction: MoveSetType, tap: boolean, update: () => void): any{  
        let facingCoords: number[] = this.Player.look(direction, update, this.updateTexture)

        var nextTile: Tileset = this.Tiles[facingCoords[0]][facingCoords[1]]

        if (!tap && nextTile.canWalkOn()) {
            this.Player.walk(update, this.updateTexture, this.removeTexture)
            
            if (nextTile.willTransition()) {
                nextTile.callTransition()
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