import { MoveSetType } from "../game/inputs/MoveSet"
import { GameData } from "./Game"

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

    public static transition(
        newMapName: string, mapX: number, mapY: number, 
        playerX: number, playerY: number, playerDirection: MoveSetType
    ) {
        GameData().Player.Texture.X = playerX
        GameData().Player.Texture.Y = playerY
        GameData().Player.Texture.nextTile()
        GameData().Player.Texture.look(playerDirection)

        var map = GameData().Maps.get(newMapName)!
        map.Top = mapY
        map.Left = mapX

        GameData().Map = map
    }

    move(direction: MoveSetType) {

        // get the player's position in map coordinates
        var currentTilePosition: [number, number] = GameData().Map.getConvertedPosition(
            GameData().Player.Texture.X, GameData().Player.Texture.Y, direction
        )

        // check if there is a walk off transition at the players current location
        var walkOffTransition = GameData().Map.getTransition(
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
            // get the next tile position in GameData().Map coordinates
            var nextTilePosition: [number, number] = GameData().Map.getConvertedNextPosition(
                GameData().Player.Texture.X, GameData().Player.Texture.Y, direction
            )

            // check if there is a walk on transition at the next location
            var walkOnTransition = GameData().Map.getTransition(
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
                var canMoveToTile: boolean = GameData().Map.isWalkable(nextTilePosition[0], nextTilePosition[1], direction)

                // check if the player can walk on the next tile
                var tilePosition: [number, number] = GameData().Map.getConvertedPosition(
                    GameData().Player.Texture.X, GameData().Player.Texture.Y, direction
                )

                var canLeaveTile: boolean = GameData().Map.isLeavable(tilePosition[0], tilePosition[1], direction)

                if (canMoveToTile && canLeaveTile) {
                    // check if the GameData().Map can move
                    var shouldMapMove: boolean = GameData().Map.canMove(direction)

                    // move either the GameData().Map or the player, never both
                    if (shouldMapMove) {
                        GameData().Map.move(direction)
                    }
                    else {
                        GameData().Player.Texture.move(direction)
                    }

                    // update the player's tile
                    GameData().Player.Texture.nextTile()
                
                    // update the state to trigger a refresh
                    this.ShouldRefreshCallback()
                } 
            }
        }

        this.MoveCounter = (this.MoveCounter + 1) % 4
    }
}