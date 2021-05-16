import GameMap from "./GameMap";
import Grass1 from "./textures/ground/Grass1";
import TallGrass1 from "./textures/ground/TallGrass1";
import TallGrass1Half from "./textures/ground/TallGrass1Half";

export default class TestingMap extends GameMap {

    constructor() {
        super('Testing Map', 6, 6)

        // add the grass
        for (let r = 0; r < this.Width; r++) {
            for (let c = 0; c < this.Height; c++) {
                this.addTexture(new Grass1(r, c))
            }
        }

        // add some tall grass
        this.addTexture(new TallGrass1(0, 0))
        this.addTexture(new TallGrass1(1, 0))
        this.addTexture(new TallGrass1(0, 1))
        this.addTexture(new TallGrass1Half(1, 1, true))
        this.addTexture(new TallGrass1Half(1, 1, false))

        this.addTexture(new TallGrass1(5, 5))
    }
}