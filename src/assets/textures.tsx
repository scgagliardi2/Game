import TextureModel from "./TextureModel"

let textures = new Map<string, TextureModel>()

textures.set('BenchHorizontalWood', {
	name: 'BenchHorizontalWood',
	type: 'landscape',
	width: 2,
	height: 1,
	source: require('./benches/BenchHorizontalWood/texture.png')
})

textures.set('BenchVerticalWood', {
	name: 'BenchVerticalWood',
	type: 'landscape',
	width: 1,
	height: 2,
	source: require('./benches/BenchVerticalWood/texture.png')
})

textures.set('BridgeHorizontalWood', {
	name: 'BridgeHorizontalWood',
	type: 'landscape',
	width: 3,
	height: 3,
	source: require('./bridge/BridgeHorizontalWood/texture.png')
})

textures.set('BridgeVerticalWood', {
	name: 'BridgeVerticalWood',
	type: 'landscape',
	width: 3,
	height: 3,
	source: require('./bridge/BridgeVerticalWood/texture.png')
})

textures.set('GlassDoor', {
	name: 'GlassDoor',
	type: 'building',
	width: 1,
	height: 1,
	source: require('./buildings/doors/GlassDoor/texture.png')
})

textures.set('GloorDoubleDoor', {
	name: 'GloorDoubleDoor',
	type: 'building',
	width: 1,
	height: 1,
	source: require('./buildings/doors/GloorDoubleDoor/texture.png')
})

textures.set('LargeBlueBuilding', {
	name: 'LargeBlueBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeBlueBuilding/texture.png')
})

textures.set('LargeBrownBuilding', {
	name: 'LargeBrownBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeBrownBuilding/texture.png')
})

textures.set('LargeGreenBuilding', {
	name: 'LargeGreenBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeGreenBuilding/texture.png')
})

textures.set('LargeGreyBuilding', {
	name: 'LargeGreyBuilding',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeGreyBuilding/texture.png')
})

textures.set('MartPurple', {
	name: 'MartPurple',
	type: 'building',
	width: 4,
	height: 5,
	source: require('./buildings/stores/MartPurple/texture.png')
})

textures.set('PokeCenter', {
	name: 'PokeCenter',
	type: 'building',
	width: 4,
	height: 5,
	source: require('./buildings/stores/PokeCenter/texture.png')
})

textures.set('Red', {
	name: 'Red',
	type: 'character',
	width: 1,
	height: 1,
	source: require('./player/Red/texture.png')
})

textures.set('GrassBase', {
	name: 'GrassBase',
	type: 'ground',
	width: 1,
	height: 1,
	source: require('./terrain/ground/grass/GrassBase/texture.png')
})

textures.set('MedBrownTree', {
	name: 'MedBrownTree',
	type: 'landscape',
	width: 1,
	height: 2,
	source: require('./terrain/trees/medium_trees/MedBrownTree/texture.png')
})
export default { textures: textures }