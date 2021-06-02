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
export let names = new Map<string, string>()

textures.set('86f3987b9fa62a2d37caf22cc394068010b4e21274e13384723ee18b9c533eba', {
	id: '86f3987b9fa62a2d37caf22cc394068010b4e21274e13384723ee18b9c533eba',
	type: 'landscape',
	width: 2,
	height: 1,
	source: require('./benches/BenchHorizontalWood/texture.png'),
	class: BenchHorizontalWood
})
names.set('BenchHorizontalWood', '86f3987b9fa62a2d37caf22cc394068010b4e21274e13384723ee18b9c533eba')

textures.set('f029c15cc5f9b59533ef6ec658a8d580792d88203857a8687905029d09bb339f', {
	id: 'f029c15cc5f9b59533ef6ec658a8d580792d88203857a8687905029d09bb339f',
	type: 'landscape',
	width: 1,
	height: 2,
	source: require('./benches/BenchVerticalWood/texture.png'),
	class: BenchVerticalWood
})
names.set('BenchVerticalWood', 'f029c15cc5f9b59533ef6ec658a8d580792d88203857a8687905029d09bb339f')

textures.set('e2c962e3de47d4c7a98662e6d21cb81bd6b91648f242f50071b2895d8cfc0b29', {
	id: 'e2c962e3de47d4c7a98662e6d21cb81bd6b91648f242f50071b2895d8cfc0b29',
	type: 'landscape',
	width: 3,
	height: 3,
	source: require('./bridge/BridgeHorizontalWood/texture.png'),
	class: BridgeHorizontalWood
})
names.set('BridgeHorizontalWood', 'e2c962e3de47d4c7a98662e6d21cb81bd6b91648f242f50071b2895d8cfc0b29')

textures.set('8e59484cb8aac7f552266fa30b966f432f5b4c1339c6f051c1ab8fbd45317931', {
	id: '8e59484cb8aac7f552266fa30b966f432f5b4c1339c6f051c1ab8fbd45317931',
	type: 'landscape',
	width: 3,
	height: 3,
	source: require('./bridge/BridgeVerticalWood/texture.png'),
	class: BridgeVerticalWood
})
names.set('BridgeVerticalWood', '8e59484cb8aac7f552266fa30b966f432f5b4c1339c6f051c1ab8fbd45317931')

textures.set('525a7ad74dd65a1ea3ade0aca4089e68cc04dbe36f9fc94bd65fe4a32afa7e04', {
	id: '525a7ad74dd65a1ea3ade0aca4089e68cc04dbe36f9fc94bd65fe4a32afa7e04',
	type: 'building',
	width: 1,
	height: 1,
	source: require('./buildings/doors/GlassDoor/texture.png'),
	class: GlassDoor
})
names.set('GlassDoor', '525a7ad74dd65a1ea3ade0aca4089e68cc04dbe36f9fc94bd65fe4a32afa7e04')

textures.set('44613d06a5d84443d6f37b1a4732725b221fb200baf1f40cbfdafd76b67a5434', {
	id: '44613d06a5d84443d6f37b1a4732725b221fb200baf1f40cbfdafd76b67a5434',
	type: 'building',
	width: 1,
	height: 1,
	source: require('./buildings/doors/GloorDoubleDoor/texture.png'),
	class: GloorDoubleDoor
})
names.set('GloorDoubleDoor', '44613d06a5d84443d6f37b1a4732725b221fb200baf1f40cbfdafd76b67a5434')

textures.set('c65be00a93f70227c55159293cf8d9317039192c8b01711774fc12b4f7015560', {
	id: 'c65be00a93f70227c55159293cf8d9317039192c8b01711774fc12b4f7015560',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeBlueBuilding/texture.png'),
	class: LargeBlueBuilding
})
names.set('LargeBlueBuilding', 'c65be00a93f70227c55159293cf8d9317039192c8b01711774fc12b4f7015560')

textures.set('8009cfdcc6edf3ffa19e3b0ac0f31945d162bcb9245ebe94a03898e61f0377b4', {
	id: '8009cfdcc6edf3ffa19e3b0ac0f31945d162bcb9245ebe94a03898e61f0377b4',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeBrownBuilding/texture.png'),
	class: LargeBrownBuilding
})
names.set('LargeBrownBuilding', '8009cfdcc6edf3ffa19e3b0ac0f31945d162bcb9245ebe94a03898e61f0377b4')

textures.set('256ae689f19c7382629001b3907f2d68f443fe48e182f22761b1a551a14354e4', {
	id: '256ae689f19c7382629001b3907f2d68f443fe48e182f22761b1a551a14354e4',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeGreenBuilding/texture.png'),
	class: LargeGreenBuilding
})
names.set('LargeGreenBuilding', '256ae689f19c7382629001b3907f2d68f443fe48e182f22761b1a551a14354e4')

textures.set('8009cfdcc6edf3ffa19e3b0ac0f31945d162bcb9245ebe94a03898e61f0377b4', {
	id: '8009cfdcc6edf3ffa19e3b0ac0f31945d162bcb9245ebe94a03898e61f0377b4',
	type: 'building',
	width: 7,
	height: 6,
	source: require('./buildings/large/LargeGreyBuilding/texture.png'),
	class: LargeGreyBuilding
})
names.set('LargeGreyBuilding', '8009cfdcc6edf3ffa19e3b0ac0f31945d162bcb9245ebe94a03898e61f0377b4')

textures.set('6002a97356b87dcc7524ac22fcf33865bf0224a44f78a427bd30ed33093933a9', {
	id: '6002a97356b87dcc7524ac22fcf33865bf0224a44f78a427bd30ed33093933a9',
	type: 'building',
	width: 4,
	height: 5,
	source: require('./buildings/stores/MartPurple/texture.png'),
	class: MartPurple
})
names.set('MartPurple', '6002a97356b87dcc7524ac22fcf33865bf0224a44f78a427bd30ed33093933a9')

textures.set('204421c156500c4b332a6e8892e249473b870a830c357b599694a4222838f092', {
	id: '204421c156500c4b332a6e8892e249473b870a830c357b599694a4222838f092',
	type: 'building',
	width: 4,
	height: 5,
	source: require('./buildings/stores/PokeCenter/texture.png'),
	class: PokeCenter
})
names.set('PokeCenter', '204421c156500c4b332a6e8892e249473b870a830c357b599694a4222838f092')

textures.set('24d809f028257e441a83c1a8097fb47190f658e76bcde4776c05d98e867b42b0', {
	id: '24d809f028257e441a83c1a8097fb47190f658e76bcde4776c05d98e867b42b0',
	type: 'character',
	width: 1,
	height: 1,
	source: require('./player/Red/texture.png'),
	class: Red
})
names.set('Red', '24d809f028257e441a83c1a8097fb47190f658e76bcde4776c05d98e867b42b0')

textures.set('12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f', {
	id: '12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f',
	type: 'ground',
	width: 1,
	height: 1,
	source: require('./terrain/ground/grass/GrassBase/texture.png'),
	class: GrassBase
})
names.set('GrassBase', '12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f')

textures.set('e3e336c734dcd0cb87c3f4690805ca990de7444bad81a773f1820584351a48d2', {
	id: 'e3e336c734dcd0cb87c3f4690805ca990de7444bad81a773f1820584351a48d2',
	type: 'landscape',
	width: 1,
	height: 2,
	source: require('./terrain/trees/medium_trees/MedBrownTree/texture.png'),
	class: MedBrownTree
})
names.set('MedBrownTree', 'e3e336c734dcd0cb87c3f4690805ca990de7444bad81a773f1820584351a48d2')
export default { textures: textures }