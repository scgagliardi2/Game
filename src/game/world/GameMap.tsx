import constants from '../GlobalConstants'
import { MoveSetType } from '../inputs/MoveSet'
import Texture, { TextureLevel } from './textures/Texture'
import Tile from './tiles/Tile'
import { cellSize, increment } from './World'
import Layers from './textures/Layers'
import Transition, { getTransitionKey } from './Transition'
import { GameData } from '../Game'
import MapModel from '../../mapBuilder/models/MapModel'
import { textures } from '../../assets/textures'
import hash from "object-hash"
import { IOTextureModel } from '../../mapBuilder/models/IOTextureModel'
import { IOTransitionModel } from '../../mapBuilder/models/IOTransitionModel'

export const half = Math.floor(constants.size.windowTiles / 2)

export default class GameMap {
    Layers: Layers

    Textures: Texture[]

    Left: number
    Top: number

    Width: number
    Height: number

    Transitions: Map<string, Transition>

    LoadTransitionFunctions: any[]

    Hash: string

    constructor(width: number, height: number, startX: number, startY: number) {
        if (this.constructor !== GameMap) {
            throw new Error('Subclassing is not allowed')
        }

        this.Hash = ""

        this.Layers = new Layers()
        this.Textures = []
        
        this.Width = width
        this.Height = height

        this.Left = startX
        this.Top = startY

        this.Transitions = new Map<string, Transition>()

        this.LoadTransitionFunctions = []
    }

    loadTransitions() {
        this.LoadTransitionFunctions.forEach((func: any) => {
            func(this)
        })
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

    canMove(direction: MoveSetType): boolean {
        switch (direction) {
            case MoveSetType.DOWN:
                if (this.Top + constants.size.windowTiles >= this.Height + 1 || GameData().Player.Texture.Y < half) {
                    return false
                }
                break
            case MoveSetType.LEFT:
                if (this.Left <= -1 || GameData().Player.Texture.X > half) {
                    return false
                }
                break
            case MoveSetType.RIGHT:
                if (this.Left + constants.size.windowTiles >= this.Width + 1 || GameData().Player.Texture.X < half) {
                    return false
                }
                break
            case MoveSetType.UP:
                if (this.Top <= -1 || GameData().Player.Texture.Y > half) {
                    return false
                }
                break
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

    getConvertedPosition(x: number, y: number, direction: MoveSetType): [number, number] {
        switch (direction) {
            case MoveSetType.DOWN:
                var x: number = Math.floor(this.Left) + Math.floor(x)
                var y: number = Math.floor(this.Top) + Math.floor(y)
                return [x, y]
            case MoveSetType.RIGHT:
                var x: number = Math.floor(this.Left) + Math.floor(x)
                var y: number = Math.floor(this.Top) + Math.floor(y)
                return [x, y]
            case MoveSetType.LEFT:
                var x: number = Math.ceil(x) + Math.ceil(this.Left)
                var y: number = Math.ceil(y) + Math.ceil(this.Top)
                return [x, y]
            case MoveSetType.UP:
                var x: number = Math.ceil(x) + Math.ceil(this.Left)
                var y: number = Math.ceil(y) + Math.ceil(this.Top)
                return [x, y]
        }
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

    isWalkable(x: number, y: number, direction: MoveSetType): boolean {

        if (x < 0 || x > this.Width - 1) {
            return false
        }

        if (y < 0 || y > this.Height - 1) {
            return false
        }

        return this.Layers.isWalkable(x, y, direction)
    }

    isLeavable(x: number, y: number, direction: MoveSetType): boolean {
        return this.Layers.isLeavable(x, y, direction)
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

        this.Textures.push(texture)
    }

    addTransition(transition: Transition) {
        this.Transitions.set(
            transition.Key,
            transition
        )
    }

    getTransition(x: number, y: number, direction: MoveSetType, walkOnTrigged: boolean): Transition | undefined {
        return this.Transitions.get(getTransitionKey(x, y, direction, walkOnTrigged))
    }

    id(): string {
        if (this.Hash == "") {
            this.Hash = hash(this.toYaml())
        }

        return this.Hash
    }

    toYaml(): MapModel {
        var model: MapModel = {
            id: this.Hash,
            width: this.Width,
            height: this.Height,
            textures: {
                barrier: [],
                base: [],
                low: [],
                sprite: [],
                high: []
            },
            transitions: []
        }

        this.Textures.forEach((texture: Texture) => {
            var list: IOTextureModel[]

            switch (texture.Level) {
                case TextureLevel.BARRIER:
                    list = model.textures.barrier
                    break;
                case TextureLevel.BASE:    
                    list = model.textures.base
                    break;
                case TextureLevel.LOWLANDSCAPE:    
                    list = model.textures.low
                    break;
                case TextureLevel.SPRITES:    
                    list = model.textures.sprite
                    break;
                case TextureLevel.HIGHLANDSCAPE:    
                    list = model.textures.high
                    break;
            }

            list.push(texture.toYaml())
        })
            
        this.Transitions.forEach((transition: Transition, key: string) => {
            model.transitions.push(transition.toYaml())
        })

        return model
    }

    static buildFrom(model: MapModel): GameMap {
        var map = new GameMap(model.width, model.height, 0, 0)
    
        model.textures.barrier.forEach((texture: IOTextureModel) => {
            var cls = textures.get(texture.class)?.class()
    
            map.addTexture(
                new cls(texture.x, texture.y, texture.width, texture.height)
            )
        })

        var basicTexBuild = (m: GameMap, texture: IOTextureModel, level: TextureLevel) => {
            var cls = textures.get(texture.class)?.class()
    
            if (texture.stretches) {
                m.addTexture(
                    new cls(texture.x, texture.y, level, texture.length)
                )
            }
            else {
                m.addTexture(
                    new cls(texture.x, texture.y, level)
                )
            }
        }
    
        model.textures.base.forEach((texture: IOTextureModel) => {
            basicTexBuild(map, texture, TextureLevel.BASE)
        })
    
        model.textures.low.forEach((texture: IOTextureModel) => {
            basicTexBuild(map, texture, TextureLevel.LOWLANDSCAPE)
        })
    
        model.textures.sprite.forEach((texture: IOTextureModel) => {
            basicTexBuild(map, texture, TextureLevel.SPRITES)
        })
    
        model.textures.high.forEach((texture: IOTextureModel) => {
            basicTexBuild(map, texture, TextureLevel.HIGHLANDSCAPE)
        })
    
        map.LoadTransitionFunctions.push((m: GameMap) => {
            model.transitions.forEach((transition: IOTransitionModel) => {
                m.addTransition(Transition.buildFrom(transition))
            })
        })
    
        return map
    }
}