import React from 'react';
import { View } from 'react-native';
import { MoveSetType } from '../../inputs/MoveSet';
import { cellSize } from '../World';
import TileImage from './TileImage';

export default class Tile {
    Source: any

    BlockedOnDirections: MoveSetType[]
    BlockedOffDirections: MoveSetType[]

    IsSprite: boolean

    constructor(source: any, blockedOnDirections: MoveSetType[] | undefined, blockedOffDirections: MoveSetType[] | undefined) {
        this.Source = source
        
        if (blockedOnDirections == undefined) {
            blockedOnDirections = [
                MoveSetType.DOWN,
                MoveSetType.LEFT,
                MoveSetType.RIGHT,
                MoveSetType.UP
            ]
        }

        if (blockedOffDirections == undefined) {
            blockedOffDirections = [
                MoveSetType.DOWN,
                MoveSetType.LEFT,
                MoveSetType.RIGHT,
                MoveSetType.UP
            ]
        }

        this.BlockedOnDirections = blockedOnDirections
        this.BlockedOffDirections = blockedOffDirections

        this.IsSprite = false
    }

    getImage() {
        let style: any

        style = {
            width: cellSize,
            height: cellSize,
            resizeMode: 'cover'
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
