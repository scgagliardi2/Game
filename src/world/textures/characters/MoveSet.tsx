import Tile from "../Tile"

export enum MoveSetType {
    DOWN,
    LEFT,
    RIGHT,
    UP
}

export default class MoveSet {
    Source: Tile[]

    constructor(sources: Tile[]) {
        this.Source = sources
    }
}
