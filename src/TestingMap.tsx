import BenchHorizontalWood from "./assets/benches/BenchHorizontalWood/BenchHorizontalWood";
import MartPurple from "./assets/buildings/stores/MartPurple/MartPurple";
import PokeCenter from "./assets/buildings/stores/PokeCenter/PokeCenter";
import GrassBase from "./assets/terrain/ground/grass/GrassBase/GrassBase";
import MedBrownTree from "./assets/terrain/trees/medium_trees/MedBrownTree/MedBrownTree";
import GameMap from "./components/world/GameMap";
import { TextureLevel } from "./components/world/textures/Texture";


export default class TestingMap extends GameMap {

    constructor(transition: () => any) {
        super('Testing Map', 20, 20, [4, 4])

        // add the grass
        for (let r = 0; r < this.Width; r++) {
            for (let c = 0; c < this.Height; c++) {
                this.addTexture(new GrassBase(r, c, TextureLevel.BASE))
            }
        }


        this.addTexture(new BenchHorizontalWood(1, 0, TextureLevel.HIGHLANDSCAPE))

        this.addTexture(new MedBrownTree(0, 1, TextureLevel.HIGHLANDSCAPE))

        this.addTexture(new MartPurple(6 ,6 , TextureLevel.HIGHLANDSCAPE, transition))

        // this.addTexture(new PokeCenter(12, 1, TextureLevel.HIGHLANDSCAPE, transition))
    }
}