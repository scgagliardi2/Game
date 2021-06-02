import BridgeHorizontalWood from "../assets/bridge/BridgeHorizontalWood/BridgeHorizontalWood";
import BridgeVerticalWood from "../assets/bridge/BridgeVerticalWood/BridgeVerticalWood";
import GlassDoor from "../assets/buildings/doors/GlassDoor/GlassDoor";
import PokeCenter from "../assets/buildings/stores/PokeCenter/PokeCenter";
import GrassBase from "../assets/terrain/ground/grass/GrassBase/GrassBase";
import MedBrownTree from "../assets/terrain/trees/medium_trees/MedBrownTree/MedBrownTree";
import { MoveSetType } from "../game/inputs/MoveSet";
import GameMap from "../game/world/GameMap";
import { TextureLevel } from "../game/world/textures/Texture";
import Transition from "../game/world/Transition";
import Testing2Map from "./Testing2Map";

var m = new GameMap(14, 14, 0, 0)

// add the grass
for (let r = 0; r < m.Width; r++) {
    for (let c = 0; c < m.Height; c++) {
        m.addTexture(new GrassBase(r, c, TextureLevel.BASE))
    }
}

m.addTexture(new MedBrownTree(0, 0, TextureLevel.HIGHLANDSCAPE))

m.addTexture(new PokeCenter(5, 2, TextureLevel.HIGHLANDSCAPE))
m.addTexture(new GlassDoor(6, 6, TextureLevel.LOWLANDSCAPE))

m.addTexture(new BridgeVerticalWood(1, 4, TextureLevel.LOWLANDSCAPE, 10))

m.LoadTransitionFunctions.push((map: GameMap) => {
    map.addTransition(new Transition(
        6, 6, MoveSetType.UP, true,
        Testing2Map.id(), 4, 2,
        MoveSetType.DOWN, 8, 6
    ))
})

export default m;