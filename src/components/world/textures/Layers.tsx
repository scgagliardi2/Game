import { TextureLevel } from "./Texture";
import TextureLayer from "./TextureLayer";

export default class Layers {

    Layers: Map<TextureLevel, TextureLayer>

    constructor() {
        this.Layers = new Map<TextureLevel, TextureLayer>()
    }

    hasLayer(level: TextureLevel): boolean {
        return this.get(level) != undefined
    }

    get(level: TextureLevel): TextureLayer | undefined {
        return this.Layers.get(level)
    }

    create(level: TextureLevel) {
        this.Layers.set(level, new TextureLayer())
    }

    isWalkable(x: number, y: number): boolean {

        if (this.hasLayer(TextureLevel.HIGHLANDSCAPE) && !this.Layers.get(TextureLevel.HIGHLANDSCAPE)!.canWalkOn(x , y)){
            return false
        }

        if (this.hasLayer(TextureLevel.SPRITES) && !this.Layers.get(TextureLevel.SPRITES)!.canWalkOn(x , y)){
            return false
        }

        if (this.hasLayer(TextureLevel.LOWLANDSCAPE) && !this.Layers.get(TextureLevel.LOWLANDSCAPE)!.canWalkOn(x , y)){
            return false
        }

        if (this.hasLayer(TextureLevel.BASE) && !this.Layers.get(TextureLevel.BASE)!.canWalkOn(x , y)){
            return false
        }

        return true
    }
}