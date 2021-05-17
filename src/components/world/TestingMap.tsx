import GameMap from "./GameMap";
import Grass1 from "../../assets/textures/ground/Grass1";

export default class TestingMap extends GameMap {

    constructor(transition: () => any) {
        super('Testing Map', 12, 12)

        // add the grass
        for (let r = 0; r < this.Width; r++) {
            for (let c = 0; c < this.Height; c++) {
                this.addTexture(new Grass1(r, c))
            }
        }
    }
}