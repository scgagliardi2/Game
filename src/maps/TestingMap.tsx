import BridgeHorizontalWood from "../assets/bridge/BridgeHorizontalWood/BridgeHorizontalWood";
import BridgeVerticalWood from "../assets/bridge/BridgeVerticalWood/BridgeVerticalWood";
import GlassDoor from "../assets/buildings/doors/GlassDoor/GlassDoor";
import PokeCenter from "../assets/buildings/stores/PokeCenter/PokeCenter";
import GrassBase from "../assets/terrain/ground/grass/GrassBase/GrassBase";
import MedBrownTree from "../assets/terrain/trees/medium_trees/MedBrownTree/MedBrownTree";
import { MoveSetType } from "../game/inputs/MoveSet";
import MovementManager from "../game/MovementManager";
import GameMap from "../game/world/GameMap";
import { TextureLevel } from "../game/world/textures/Texture";
import { Testing2MapName } from "./Testing2Map";

export let TestingMapName = "Testing Map"

export default class TestingMap extends GameMap {

    constructor(startX: number, startY: number) {
        super(TestingMapName, 14, 14, startX, startY)

        // add the grass
        for (let r = 0; r < this.Width; r++) {
            for (let c = 0; c < this.Height; c++) {
                this.addTexture(new GrassBase(r, c, TextureLevel.BASE))
            }
        }

        this.addTexture(new MedBrownTree(0, 0, TextureLevel.HIGHLANDSCAPE))

        this.addTexture(new PokeCenter(5, 2, TextureLevel.HIGHLANDSCAPE))
        this.addTexture(new GlassDoor(6, 6, TextureLevel.LOWLANDSCAPE))

        this.addTexture(new BridgeHorizontalWood(6, 8, TextureLevel.LOWLANDSCAPE, 4))

        this.addTexture(new BridgeVerticalWood(1, 4, TextureLevel.LOWLANDSCAPE, 4))

        this.addTransition(6, 6, MoveSetType.UP, (doneCallback: () => any) => { 
            
            MovementManager.transition(
                Testing2MapName,
                4, 2,
                8, 6,
                MoveSetType.DOWN
            ) 
            
            doneCallback()
        }, true)
    }
}