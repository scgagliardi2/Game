import GlassDoor from "../../assets/buildings/doors/GlassDoor/GlassDoor";
import PokeCenter from "../../assets/buildings/stores/PokeCenter/PokeCenter";
import GrassBase from "../../assets/terrain/ground/grass/GrassBase/GrassBase";
import MedBrownTree from "../../assets/terrain/trees/medium_trees/MedBrownTree/MedBrownTree";
import GameState from "../../GameState";
import { MoveSetType } from "../inputs/MoveSet";
import MovementManager from "../MovementManager";
import GameMap from "./GameMap";
import Testing2Map from "./Testing2Map";
import { TextureLevel } from "./textures/Texture";

export default class TestingMap extends GameMap {

    constructor(startX: number, startY: number) {
        super('Testing Map', 14, 14, startX, startY)

        // add the grass
        for (let r = 0; r < this.Width; r++) {
            for (let c = 0; c < this.Height; c++) {
                this.addTexture(new GrassBase(r, c, TextureLevel.BASE))
            }
        }

        this.addTexture(new MedBrownTree(0, 0, TextureLevel.HIGHLANDSCAPE))

        this.addTexture(new PokeCenter(3, 3, TextureLevel.HIGHLANDSCAPE))
        this.addTexture(new GlassDoor(4, 7, TextureLevel.LOWLANDSCAPE))

        this.addTransition(4, 7, MoveSetType.UP, (doneCallback: () => any) => { 
            
            MovementManager.transition(
                new Testing2Map(4, 2),
                8, 6,
                MoveSetType.DOWN
            ) 
            
            doneCallback()
        }, true)
    }
}