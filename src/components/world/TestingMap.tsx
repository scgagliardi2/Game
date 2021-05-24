import GlassDoor from "../../assets/buildings/doors/GlassDoor/GlassDoor";
import MartPurple from "../../assets/buildings/stores/MartPurple/MartPurple";
import PokeCenter from "../../assets/buildings/stores/PokeCenter/PokeCenter";
import GrassBase from "../../assets/terrain/ground/grass/GrassBase/GrassBase";
import MedBrownTree from "../../assets/terrain/trees/medium_trees/MedBrownTree/MedBrownTree";
import { MoveSetType } from "../inputs/MoveSet";
import GameMap from "./GameMap";
import { TextureLevel } from "./textures/Texture";


export default class TestingMap extends GameMap {

    constructor(transition: (x: number, y: number) => any) {
        super('Testing Map', 14, 14, 0, 0)

        // add the grass
        for (let r = 0; r < this.Width; r++) {
            for (let c = 0; c < this.Height; c++) {
                this.addTexture(new GrassBase(r, c, TextureLevel.BASE))
            }
        }

        this.addTexture(new MedBrownTree(0, 0, TextureLevel.HIGHLANDSCAPE))

        this.addTexture(new MartPurple(6, 0, TextureLevel.HIGHLANDSCAPE))
        this.addTexture(new GlassDoor(8, 4, TextureLevel.LOWLANDSCAPE))

        this.addTexture(new PokeCenter(0, 3, TextureLevel.HIGHLANDSCAPE))
        this.addTexture(new GlassDoor(1, 7, TextureLevel.LOWLANDSCAPE))

        this.addTransition(8, 4, MoveSetType.UP, () => { console.log('test')}, true)
    }
}