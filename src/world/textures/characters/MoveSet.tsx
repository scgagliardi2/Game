import { ImageProps } from 'react-native'

export enum MoveSetType {
    DOWN,
    LEFT,
    RIGHT,
    UP
}

export default class MoveSet {
    Source: any[]

    constructor(sources: any[]) {
        this.Source = sources
    }
}
