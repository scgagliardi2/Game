export default class Tile {
    Source: any
    CanWalkThrough: boolean

    constructor(source: any, canWalkThrough: boolean) {
        this.Source = source
        this.CanWalkThrough = canWalkThrough
    }
}
