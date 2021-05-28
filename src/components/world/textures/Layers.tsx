import { MoveSetType } from "../../inputs/MoveSet";
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

    isWalkable(x: number, y: number, direction: MoveSetType): boolean {

        if (this.hasLayer(TextureLevel.HIGHLANDSCAPE) && !this.Layers.get(TextureLevel.HIGHLANDSCAPE)!.canWalkOn(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.SPRITES) && !this.Layers.get(TextureLevel.SPRITES)!.canWalkOn(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.LOWLANDSCAPE) && !this.Layers.get(TextureLevel.LOWLANDSCAPE)!.canWalkOn(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.BASE) && !this.Layers.get(TextureLevel.BASE)!.canWalkOn(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.BARRIER) && !this.Layers.get(TextureLevel.BARRIER)!.canWalkOn(x , y, direction)){
            return false
        }

        return true
    }

    isLeavable(x: number, y: number, direction: MoveSetType): boolean {

        if (this.hasLayer(TextureLevel.HIGHLANDSCAPE) && !this.Layers.get(TextureLevel.HIGHLANDSCAPE)!.canLeave(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.SPRITES) && !this.Layers.get(TextureLevel.SPRITES)!.canLeave(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.LOWLANDSCAPE) && !this.Layers.get(TextureLevel.LOWLANDSCAPE)!.canLeave(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.BASE) && !this.Layers.get(TextureLevel.BASE)!.canLeave(x , y, direction)){
            return false
        }

        if (this.hasLayer(TextureLevel.BARRIER) && !this.Layers.get(TextureLevel.BARRIER)!.canLeave(x , y, direction)){
            return false
        }

        return true
    }
}