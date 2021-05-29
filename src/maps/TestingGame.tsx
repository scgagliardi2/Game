import Red from "../assets/player/Red/Red";
import Game from "../game/Game";
import Player from "../game/Player";
import Testing2Map from "./Testing2Map";
import TestingMap from "./TestingMap";

export default class TestingGame extends Game {
    constructor() {
        super(
            [
                new TestingMap(0, 0),
                new Testing2Map(0, 0)
            ],
            new Player('red', new Red(4, 8))
        )
    }
}
