import Texture, { TextureLevel } from "./textures/Texture";


export default class GameMap {

    Name: string

    BaseTextures: Texture[]
    SpriteTextures: Texture[]
    LandscapeTextures: Texture[]

    Width: number
    Height: number

    constructor(name: string, width: number, height: number) {
        this.BaseTextures = []
        this.SpriteTextures = []
        this.LandscapeTextures = []

        this.Name = name
        this.Width = width
        this.Height = height
    }

    addTexture(texture: Texture) {
        if ((texture.Xpos >= this.Width) || (texture.Ypos >= this.Height)) {
            throw new Error(`Texture is out of map bounds. Map name ${this.Name}`)
        }

        switch (texture.Level) {
            case TextureLevel.BASE:
                this.BaseTextures.push(texture)
                break;
            case TextureLevel.LANDSCAPE:
                this.LandscapeTextures.push(texture)
                break
            case TextureLevel.SPRITES:
                this.SpriteTextures.push(texture)
                break    
        }
    }

    buildMap(): any[] {
        var baseTiles: any[] = []
        var spriteTiles: any[] = []
        var landscapeTiles: any[] = []

        for (let y = 0; y < this.Height; y++) {
            baseTiles[y] = []
            spriteTiles[y] = []
            landscapeTiles[y] = []
        }

        for (let i = 0; i < this.BaseTextures.length; i++) {
            var texture: Texture = this.BaseTextures[i]

            // add all images to the 2D array
            for (let r = 0; r < texture.Height; r++) {
                for (let c = 0; c < texture.Width; c++) {
                    baseTiles[r + texture.Ypos][c + texture.Xpos] = texture.getImage(r, c)
                }
            }
        }

        for (let i = 0; i < this.SpriteTextures.length; i++) {
            var texture: Texture = this.SpriteTextures[i]

            // add all images to the 2D array
            for (let r = 0; r < texture.Height; r++) {
                for (let c = 0; c < texture.Width; c++) {
                    spriteTiles[r + texture.Ypos][c + texture.Xpos] = texture.getImage(r, c)
                }
            }
        }

        for (let i = 0; i < this.LandscapeTextures.length; i++) {
            var texture: Texture = this.LandscapeTextures[i]

            // add all images to the 2D array
            for (let r = 0; r < texture.Height; r++) {
                for (let c = 0; c < texture.Width; c++) {
                    landscapeTiles[r + texture.Ypos][c + texture.Xpos] = texture.getImage(r, c)
                }
            }
        }

        return [baseTiles, spriteTiles, landscapeTiles]
    }
}