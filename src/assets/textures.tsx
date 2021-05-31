import TextureModel from "./TextureModel"
import BenchHorizontalWood from './benches/BenchHorizontalWood/BenchHorizontalWood'
import BenchVerticalWood from './benches/BenchVerticalWood/BenchVerticalWood'
import BridgeHorizontalWood from './bridge/BridgeHorizontalWood/BridgeHorizontalWood'
import BridgeVerticalWood from './bridge/BridgeVerticalWood/BridgeVerticalWood'
import GlassDoor from './buildings/doors/GlassDoor/GlassDoor'
import GloorDoubleDoor from './buildings/doors/GloorDoubleDoor/GloorDoubleDoor'
import LargeBlueBuilding from './buildings/large/LargeBlueBuilding/LargeBlueBuilding'
import LargeBrownBuilding from './buildings/large/LargeBrownBuilding/LargeBrownBuilding'
import LargeGreenBuilding from './buildings/large/LargeGreenBuilding/LargeGreenBuilding'
import LargeGreyBuilding from './buildings/large/LargeGreyBuilding/LargeGreyBuilding'
import MartPurple from './buildings/stores/MartPurple/MartPurple'
import PokeCenter from './buildings/stores/PokeCenter/PokeCenter'
import Red from './player/Red/Red'
import GrassBase from './terrain/ground/grass/GrassBase/GrassBase'
import MedBrownTree from './terrain/trees/medium_trees/MedBrownTree/MedBrownTree'

export let textures = new Map<string, TextureModel>()

textures.set('BenchHorizontalWood', {
	name: 'BenchHorizontalWood',
	type: 'landscape',
	width: 2,
	height: 1,
	source: require('./benches/BenchHorizontalWood/texture.png'),
	class: BenchHorizontalWood
})

textures.set('BenchVerticalWood', {
	name: 'BenchVerticalWood',
	type: 'landscape',
	width: 1,
	height: 2,
	source: require('./benches/BenchVerticalWood/texture.png'),
	class: BenchVerticalWood
})

textures.set('BridgeHorizontalWood', {
	name: 'BridgeHorizontalWood',
	type: 'landscape',
	width: 3,
	height: 3,
	source: require('./bridge/BridgeHorizontalWood/texture.png'),
	class: BridgeHorizontalWood
})

textures.set('BridgeVerticalWood', {
	name: 'BridgeVerticalWood',
	type: 'landscape',
	width: 3,
	height: 3,
	source: require('./bridge/BridgeVerticalWood/texture.png'),
	class: BridgeVerticalWood
})

textures.set('GlassDoor', {
	name: 'GlassDoor',
	type: 'building',
	width: 1,
	height: 1,
	source: require('./buildings/doors/GlassDoor/texture.png'),
	class: GlassDoor
})

textures.set('GloorDoubleDoor', {
	name: 'GloorDoubleDoor',
	type: 'building',
	width: 1,
	height: 1,
	source: require('./buildings/doors/GloorDoubleDoor/texture.png'),
	class: GloorDoubleDoor
})

textures.set('LargeBlueBuilding', {
	name: 'LargeBlueBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeBlueBuilding/texture.png'),
	class: LargeBlueBuilding
})

textures.set('LargeBrownBuilding', {
	name: 'LargeBrownBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeBrownBuilding/texture.png'),
	class: LargeBrownBuilding
})

textures.set('LargeGreenBuilding', {
	name: 'LargeGreenBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeGreenBuilding/texture.png'),
	class: LargeGreenBuilding
})

textures.set('LargeGreyBuilding', {
	name: 'LargeGreyBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeGreyBuilding/texture.png'),
	class: LargeGreyBuilding
})

textures.set('MartPurple', {
	name: 'MartPurple',
	type: 'building',
	width: 4,
	height: 5,
	source: require('./buildings/stores/MartPurple/texture.png'),
	class: MartPurple
})

textures.set('PokeCenter', {
	name: 'PokeCenter',
	type: 'building',
	width: 4,
	height: 5,
	source: require('./buildings/stores/PokeCenter/texture.png'),
	class: PokeCenter
})

textures.set('Red', {
	name: 'Red',
	type: 'character',
	width: 1,
	height: 1,
	source: require('./player/Red/texture.png'),
	class: Red
})

textures.set('GrassBase', {
	name: 'GrassBase',
	type: 'ground',
	width: 1,
	height: 1,
	source: require('./terrain/ground/grass/GrassBase/texture.png'),
	class: GrassBase
})

textures.set('MedBrownTree', {
	name: 'MedBrownTree',
	type: 'landscape',
	width: 1,
	height: 2,
	source: require('./terrain/trees/medium_trees/MedBrownTree/texture.png'),
	class: MedBrownTree
})
export default { textures: textures }