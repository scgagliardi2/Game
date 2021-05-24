import { MoveSetType } from "../../inputs/MoveSet";

export default class Transition {
    Direction: MoveSetType

    X: number
    Y: number

    WalkOnTriggered: boolean

    Key: string
    
    Callback: () => void

    constructor(x: number, y: number, direction: MoveSetType, callback: () => void, walkOnTrigged: boolean = false) {
        this.Key = getTransitionKey(x, y, direction, walkOnTrigged)
        this.X = x
        this.Y = y
        this.Direction = direction
        this.WalkOnTriggered = walkOnTrigged
        this.Callback = callback
    }
}

export function getTransitionKey(x: number, y: number, direction: MoveSetType, walkOnTrigged: boolean = false): string {
    return `${x},${y}->${direction}:${walkOnTrigged}`
}