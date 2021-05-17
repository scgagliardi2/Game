import App from "../../../App";
import Character from "../../assets/characters/Character";
import { MoveSetType } from "../../assets/characters/MoveSet";
import Red from "../../assets/characters/Red";
import Texture, { TextureLevel } from "../../assets/Texture";


export default class GameMap {

    Name: string

    BaseTextures: Texture[]
    LowLandscapeTextures: Texture[]
    SpriteTextures: Texture[]
    HighLandscapeTextures: Texture[]

    Player: Character

    Width: number
    Height: number

    constructor(name: string, width: number, height: number) {
        this.BaseTextures = []
        this.LowLandscapeTextures = []
        this.SpriteTextures = []
        this.HighLandscapeTextures = []

        this.Player = new Red(2, 2)

        this.SpriteTextures.push(this.Player)

        this.Name = name
        this.Width = width
        this.Height = height
    }

    handleMove(direction: MoveSetType, tap: boolean, app: App): any{
        let update = () => {
            app.setState({
                Map: this
            })
        }
        
        this.Player.look(direction)

        if (!tap) {
            this.Player.walk(update)
        }

        update()
    }

    addTexture(texture: Texture) {
        if ((texture.Xpos >= this.Width) || (texture.Ypos >= this.Height)) {
            throw new Error(`Texture is out of map bounds. Map name ${this.Name}`)
        }

        switch (texture.Level) {
            case TextureLevel.BASE:
                this.BaseTextures.push(texture)
                break;
            case TextureLevel.LOWLANDSCAPE:
                this.LowLandscapeTextures.push(texture)
                break
            case TextureLevel.SPRITES:
                this.SpriteTextures.push(texture)
                break    
            case TextureLevel.HIGHLANDSCAPE:
                this.HighLandscapeTextures.push(texture)
                break
        }
    }

    buildMap(): any[] {
        var baseTiles: any[] = []
        var lowLandscapeTiles: any[] = []
        var spriteTiles: any[] = []
        var highLandscapeTiles: any[] = []

        for (let y = 0; y < this.Height; y++) {
            baseTiles[y] = []
            lowLandscapeTiles[y] = []
            spriteTiles[y] = []
            highLandscapeTiles[y] = []
        }

        for (let i = 0; i < this.BaseTextures.length; i++) {
            var texture: Texture = this.BaseTextures[i]

            // add all images to the 2D array
            for (let r = 0; r < texture.Height; r++) {
                for (let c = 0; c < texture.Width; c++) {
                    baseTiles[r + texture.Ypos][c + texture.Xpos] = texture.Tiles[r][c]
                }
            }
        }

        for (let i = 0; i < this.LowLandscapeTextures.length; i++) {
            var texture: Texture = this.LowLandscapeTextures[i]

            // add all images to the 2D array
            for (let r = 0; r < texture.Height; r++) {
                for (let c = 0; c < texture.Width; c++) {
                    lowLandscapeTiles[r + texture.Ypos][c + texture.Xpos] = texture.Tiles[r][c]
                }
            }
        }

        for (let i = 0; i < this.SpriteTextures.length; i++) {
            var texture: Texture = this.SpriteTextures[i]

            // add all images to the 2D array
            for (let r = 0; r < texture.Height; r++) {
                for (let c = 0; c < texture.Width; c++) {
                    spriteTiles[r + texture.Ypos][c + texture.Xpos] = texture.Tiles[r][c]
                }
            }
        }

        for (let i = 0; i < this.HighLandscapeTextures.length; i++) {
            var texture: Texture = this.HighLandscapeTextures[i]

            // add all images to the 2D array
            for (let r = 0; r < texture.Height; r++) {
                for (let c = 0; c < texture.Width; c++) {
                    highLandscapeTiles[r + texture.Ypos][c + texture.Xpos] = texture.Tiles[r][c]
                }
            }
        }

        return [baseTiles, lowLandscapeTiles, spriteTiles, highLandscapeTiles]
    }
}