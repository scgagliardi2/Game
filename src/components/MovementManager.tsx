import GameState from "../GameState"
import { MoveSetType } from "./inputs/MoveSet"
import GameMap from "./world/GameMap"

export default class MovementManager {

    FadeOutCallback: () => any
    FadeInCallback: () => any
    ShouldRefreshCallback: () => any

    MoveCounter: number
    EndMove: boolean

    constructor(fadeOutCallback: () => any, fadeInCallback: () => any, shouldRefreshCallback: () => any) {
        this.FadeOutCallback = fadeOutCallback
        this.FadeInCallback = fadeInCallback
        this.ShouldRefreshCallback = shouldRefreshCallback

        this.MoveCounter = 0
        this.EndMove = false
    }

    shouldMove(): boolean {
        return !this.EndMove || this.MoveCounter > 0
    }

    setReadyToMove() {
        this.EndMove = false
        this.MoveCounter = 0
    }

    public static transition(newMap: GameMap, playerX: number, playerY: number, playerDirection: MoveSetType) {
        GameState.Player.Texture.X = playerX
        GameState.Player.Texture.Y = playerY
        GameState.Player.Texture.nextTile()
        GameState.Player.Texture.look(playerDirection)

        GameState.Map = newMap
    }

    move(direction: MoveSetType) {

        // get the player's position in map coordinates
        var currentTilePosition: [number, number] = GameState.Map.getConvertedPosition(
            GameState.Player.Texture.X, GameState.Player.Texture.Y, direction
        )

        // check if there is a walk off transition at the players current location
        var walkOffTransition = GameState.Map.getTransition(
            currentTilePosition[0], currentTilePosition[1], direction, false
        )

        // if a transition is triggered when the player leaves this tile
        if (walkOffTransition != undefined) {
            this.FadeOutCallback()

            walkOffTransition.Callback(() => {
                setTimeout(
                    this.FadeInCallback,
                    300 
                )
            })
        }
        else {
            // get the next tile position in GameState.Map coordinates
            var nextTilePosition: [number, number] = GameState.Map.getConvertedNextPosition(
                GameState.Player.Texture.X, GameState.Player.Texture.Y, direction
            )

            // check if there is a walk on transition at the next location
            var walkOnTransition = GameState.Map.getTransition(
                nextTilePosition[0], nextTilePosition[1], direction, true
            )

            // if a transition is triggered when the player walks on the next tile
            // only trigger right before the player lands
            if (walkOnTransition != undefined && this.MoveCounter == 3) {
                walkOnTransition!.Callback(() => {
                    setTimeout(
                        this.FadeInCallback,
                        300 
                    )
                })
            }
            else {
                // trigger fading right away
                if (walkOnTransition != undefined && this.MoveCounter == 0) {
                    this.FadeOutCallback()
                }

                // check if the player can walk on the next tile
                var canMoveToTile: boolean = GameState.Map.isWalkable(nextTilePosition[0], nextTilePosition[1], direction)

                // check if the player can walk on the next tile
                var tilePosition: [number, number] = GameState.Map.getConvertedPosition(
                    GameState.Player.Texture.X, GameState.Player.Texture.Y, direction
                )

                var canLeaveTile: boolean = GameState.Map.isLeavable(tilePosition[0], tilePosition[1], direction)

                console.log(tilePosition)

                if (canMoveToTile && canLeaveTile) {
                    // check if the GameState.Map can move
                    var shouldMapMove: boolean = GameState.Map.canMove(direction)

                    // move either the GameState.Map or the player, never both
                    if (shouldMapMove) {
                        GameState.Map.move(direction)
                    }
                    else {
                        GameState.Player.Texture.move(direction)
                    }

                    // update the player's tile
                    GameState.Player.Texture.nextTile()
                
                    // update the state to trigger a refresh
                    this.ShouldRefreshCallback()
                } 
            }
        }

        this.MoveCounter = (this.MoveCounter + 1) % 4
    }
}