import Player from "./Player";
import GameMap from "./world/GameMap";

let running_game: Game

export function setGame(game: Game) {
    running_game = game
}

export function GameData() {
    return running_game
}

export default class Game {
    Player: Player
    Map: GameMap

    Maps: Map<string, GameMap>

    State: Map<string, any>

    constructor(maps: GameMap[], player: Player) {
        // defaults until initialization
        this.Player = player
        this.Map = maps[0]

        this.Maps = new Map<string, GameMap>()

        maps.forEach((map: GameMap) => {
            this.Maps.set(map.id(), map)

            // we load tranistions separately so as not to hit hash id conflicts
            map.loadTransitions()
        })

        this.State = new Map<string, any>()

        this.initializeGameState()
    }

    initializeGameState() {
        // TODO - this should pull from "saved" memory
    }
}
