import React from 'react';
import { Image } from 'react-native'

export default class Texture {
    ImageUri: string
    CanMoveOn: boolean
    Source: any
    
    constructor(imageUri: string, canMoveOn: boolean) {
        this.ImageUri = imageUri
        this.CanMoveOn = canMoveOn
    }

    getImage() {
        return (
            <Image 
                source={this.Source} 
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover'
                }}
            />
        )
    }
}
