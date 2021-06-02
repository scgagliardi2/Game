import GlassDoor from "../assets/buildings/doors/GlassDoor/GlassDoor";
import MartPurple from "../assets/buildings/stores/MartPurple/MartPurple";
import GrassBase from "../assets/terrain/ground/grass/GrassBase/GrassBase";
import MedBrownTree from "../assets/terrain/trees/medium_trees/MedBrownTree/MedBrownTree";
import { MoveSetType } from "../game/inputs/MoveSet";
import GameMap from "../game/world/GameMap";
import { TextureLevel } from "../game/world/textures/Texture";
import Transition from "../game/world/Transition";
import TestingMap from './TestingMap'

var m = new GameMap(18, 18, 0, 0)

// add the grass
for (let r = 0; r < m.Width; r++) {
    for (let c = 0; c < m.Height; c++) {
        m.addTexture(new GrassBase(r, c, TextureLevel.BASE))
    }
}

m.addTexture(new MedBrownTree(0, 0, TextureLevel.HIGHLANDSCAPE))

m.addTexture(new MartPurple(10, 3, TextureLevel.HIGHLANDSCAPE))
m.addTexture(new GlassDoor(12, 7, TextureLevel.LOWLANDSCAPE))

m.LoadTransitionFunctions.push((map: GameMap) => {
    map.addTransition(new Transition(
        12, 7, MoveSetType.UP, true,
        TestingMap.id(), 0, 0,
        MoveSetType.DOWN, 6, 7
    ))
})

export default m;