import React from 'react';
import { Image } from 'react-native'
import Tile from './Tile';

export enum TextureLevel {
    BASE = 0,
    SPRITES = 1,
    LANDSCAPE = 2
}

export default class Texture {
    Tiles: Tile[][]

    Height: number
    Width: number

    Xpos: number
    Ypos: number

    Level: TextureLevel

    OffsetX: number
    OffsetY: number

    constructor(xpos: number, ypos: number, level: TextureLevel, tiles: Tile[][]) {
        this.Tiles = tiles
        this.Height = tiles.length
        this.Width = tiles[0].length
        this.Xpos = xpos
        this.Ypos = ypos
        this.Level = level
        this.OffsetX = 0
        this.OffsetY = 0
    }

    getImage(x: number, y: number) {
        return (
            <Image 
                source={this.Tiles[y][x].Source} 
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    top: `${this.OffsetY}px`,
                    bottom: `-${this.OffsetY}px`,     
                    left: `-${this.OffsetX}px`,
                    right: `${this.OffsetX}px`
                }}
            />
        )
    }
}
