import React from 'react';
import { Image } from 'react-native';

export default class Tile {
    Source: any

    CanWalkThrough: boolean

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
        this.TransitionCallback = () => {}
    }

    getImage() {
        let style: any

        if (this.OffsetY > 0) {
            style = {
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                top: `${this.OffsetY}px`
            }
        }
        else if (this.OffsetY < 0) {
            style = {
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                bottom: `${-1 * this.OffsetY}px`
            }
        }
        else if (this.OffsetX < 0) {
            style = {
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                right: `${-1 * this.OffsetX}px`
            }
        }
        else if (this.OffsetX > 0) {
            style = {
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                left: `${this.OffsetX}px`
            }
        }
        else if (this.UpperHalf) {
            style = {
                width: '100%',
                height: '50%',
                resizeMode: 'cover'
            }
        }
        else if (this.LowerHalf) {
            style = {
                width: '100%',
                height: '50%',
                resizeMode: 'cover',
                top: '50%'
            }
        }
        else {
            style = {
                width: '100%',
                height: '100%',
                resizeMode: 'cover'
            }
        }

        return (
            <Image 
                source={this.Source} 
                style={style}
            />
        )
    }
}
