import { InputTransitionModel } from "../../mapBuilder/models/MapModel";
import { MoveSetType } from "../inputs/MoveSet";
import MovementManager from "../MovementManager";

export default class Transition {
    ActivationDirection: MoveSetType

    X: number
    Y: number

    WalkOnTriggered: boolean

    Key: string
    
    NewMapId: string
    NewMapX: number
    NewMapY: number

    PlayerDirection: MoveSetType
    PlayerX: number
    PlayerY: number

    constructor(
        x: number, y: number, activationDirection: MoveSetType, walkOnTrigged: boolean = false, 
        newMapId: string, newMapX: number, newMapY: number,
        playerDirection: MoveSetType, playerX: number, playerY: number
    ) {
        this.Key = getTransitionKey(x, y, activationDirection, walkOnTrigged)
        this.X = x
        this.Y = y
        this.ActivationDirection = activationDirection
        this.WalkOnTriggered = walkOnTrigged

        this.NewMapId = newMapId
        this.NewMapX = newMapX
        this.NewMapY = newMapY

        this.PlayerDirection = playerDirection
        this.PlayerX = playerX
        this.PlayerY = playerY
    }

    transition(doneCallback: () => any) {
        MovementManager.transition(
            this.NewMapId,
            this.NewMapX, this.NewMapY,
            this.PlayerX, this.PlayerY,
            this.PlayerDirection
        ) 
        
        doneCallback()
    }

    toYaml(): InputTransitionModel {
        return {
            mapX: this.X,
            mapY: this.Y,
            walkOn: this.WalkOnTriggered,
            activationDirection: this.ActivationDirection,
            newMapX: this.NewMapX,
            newMapY: this.NewMapY,
            newMapId: this.NewMapId,
            playerX: this.PlayerX,
            playerY: this.PlayerY,
            playerDirection: this.PlayerDirection
        }
    }

    static buildFrom(model: InputTransitionModel): Transition {
        return new Transition(
            model.mapX, model.mapY, model.activationDirection, model.walkOn,
            model.newMapId, model.newMapX, model.newMapY, 
            model.playerDirection, model.playerX, model.playerY
        )
    }
}

export function getTransitionKey(x: number, y: number, direction: MoveSetType, walkOnTrigged: boolean = false): string {
    return `${x},${y}->${direction}:${walkOnTrigged}`
}