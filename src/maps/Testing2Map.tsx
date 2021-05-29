import GlassDoor from "../assets/buildings/doors/GlassDoor/GlassDoor";
import MartPurple from "../assets/buildings/stores/MartPurple/MartPurple";
import GrassBase from "../assets/terrain/ground/grass/GrassBase/GrassBase";
import MedBrownTree from "../assets/terrain/trees/medium_trees/MedBrownTree/MedBrownTree";
import TestingMap from "./TestingMap";
import { MoveSetType } from "../game/inputs/MoveSet";
import GameMap from "../game/world/GameMap";
import { TextureLevel } from "../game/world/textures/Texture";
import MovementManager from "../game/MovementManager";
import { TestingMapName } from "./TestingMap";

export let Testing2MapName = "Testing 2 Map"

export default class Testing2Map extends GameMap {

    constructor(startX: number, startY: number) {
        super(Testing2MapName, 18, 18, startX, startY)

        // add the grass
        for (let r = 0; r < this.Width; r++) {
            for (let c = 0; c < this.Height; c++) {
                this.addTexture(new GrassBase(r, c, TextureLevel.BASE))
            }
        }

        this.addTexture(new MedBrownTree(0, 0, TextureLevel.HIGHLANDSCAPE))

        this.addTexture(new MartPurple(10, 3, TextureLevel.HIGHLANDSCAPE))
        this.addTexture(new GlassDoor(12, 7, TextureLevel.LOWLANDSCAPE))

        this.addTransition(12, 7, MoveSetType.UP, (doneCallback: () => any) => { 
            MovementManager.transition(
                TestingMapName,
                0, 0,
                6, 7,
                MoveSetType.DOWN
            ) 

            doneCallback()
         }, true)
    }
}