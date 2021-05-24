import Red from "./assets/player/Red/Red";
import Player from "./components/Player";
import GameMap from "./components/world/GameMap";
import TestingMap from "./components/world/TestingMap";

export default class GameManager {
    Player: Player
    
    CurrentMap: GameMap

    constructor() {
        this.Player = new Player("Red", new Red(0, 0))

        this.CurrentMap = new TestingMap((x: number, y: number) => {})
    }

    
}