import React from 'react';
import { Image } from 'react-native';
import { cellSize } from '../World';
import TileImage from './TileImage';

export default class Tile {
    Source: any

    CanWalkThrough: boolean

    IsSprite: boolean

    IsTransition: boolean
    TransitionCallback: () => any

    OffsetX: number
    OffsetY: number

    UpperHalf: boolean
    LowerHalf: boolean

    constructor(source: any, canWalkThrough: boolean) {
        this.Source = source
        this.CanWalkThrough = canWalkThrough
        this.OffsetX = 0
        this.OffsetY = 0
        this.UpperHalf = false
        this.LowerHalf = false
        this.IsTransition = false
        this.IsSprite = false
        this.TransitionCallback = () => {}
    }

    getImage() {
        let style: any

        if (this.OffsetY > 0) {
            style = {
                width: cellSize,
                height: cellSize,
                resizeMode: 'cover',
                top: this.OffsetY
            }
        }
        else if (this.OffsetY < 0) {
            style = {
                width: cellSize,
                height: cellSize,
                resizeMode: 'cover',
                bottom: -1 * this.OffsetY
            }
        }
        else if (this.OffsetX < 0) {
            style = {
                width: cellSize,
                height: cellSize,
                resizeMode: 'cover',
                right: -1 * this.OffsetX
            }
        }
        else if (this.OffsetX > 0) {
            style = {
                width: cellSize,
                height: cellSize,
                resizeMode: 'cover',
                left: this.OffsetX
            }
        }
        else if (this.UpperHalf) {
            style = {
                width: cellSize,
                height: '50%',
                resizeMode: 'cover'
            }
        }
        else if (this.LowerHalf) {
            style = {
                width: cellSize,
                height: '50%',
                resizeMode: 'cover',
                top: '50%'
            }
        }
        else {
            style = {
                width: cellSize,
                height: cellSize,
                resizeMode: 'cover'
            }
        }

        return (
            <TileImage 
                source={this.Source} 
                style={style}
                isSprite={this.IsSprite}
            />
        )
    }
}
