import React from 'react';
import { View } from 'react-native';
import { cellSize } from '../World';
import TileImage from './TileImage';

export default class Tile {
    Source: any

    CanWalkThrough: boolean

    IsSprite: boolean

    UpperHalf: boolean
    LowerHalf: boolean

    constructor(source: any, canWalkThrough: boolean) {
        this.Source = source
        
        this.CanWalkThrough = canWalkThrough

        this.UpperHalf = false
        this.LowerHalf = false

        this.IsSprite = false
    }

    getImage() {
        let style: any

        if (this.UpperHalf) {
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

        if (this.Source == undefined) {
            return (
                <View style={style}/>
            )
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
