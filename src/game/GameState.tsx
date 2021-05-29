import Red from "../assets/player/Red/Red";
import Player from "./Player";
import GameMap from "./world/GameMap";
import TestingMap from "./maps/TestingMap";

export default class GameState {
    public static Player: Player
    public static Map: GameMap

    public static initializeGameState() {
        // TODO - this should pull from "saved" memory
        GameState.Player = new Player('name', new Red(4, 8))
        GameState.Map = new TestingMap(0, 0)
    }
}
