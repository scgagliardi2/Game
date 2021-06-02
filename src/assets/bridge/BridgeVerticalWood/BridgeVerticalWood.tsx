import StretchTexture from "../../../game/world/textures/StretchTexture"
import { TextureLevel } from "../../../game/world/textures/Texture"
import Tile from "../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../game/inputs/MoveSet"

export default class BridgeVerticalWood extends StretchTexture {

	constructor(xpos: number, ypos: number, level: TextureLevel, length: number) {
		super('8e59484cb8aac7f552266fa30b966f432f5b4c1339c6f051c1ab8fbd45317931', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [MoveSetType.RIGHT], [MoveSetType.LEFT]),
				new Tile(require('./0-1.png'), [], []),
				new Tile(require('./0-2.png'), [MoveSetType.LEFT], [MoveSetType.RIGHT])
			],
			[
				new Tile(require('./1-0.png'), [MoveSetType.RIGHT], [MoveSetType.LEFT]),
				new Tile(require('./1-1.png'), [], []),
				new Tile(require('./1-2.png'), [MoveSetType.LEFT], [MoveSetType.RIGHT])
			],
			[
				new Tile(require('./2-0.png'), [MoveSetType.RIGHT], [MoveSetType.LEFT]),
				new Tile(require('./2-1.png'), [], []),
				new Tile(require('./2-2.png'), [MoveSetType.LEFT], [MoveSetType.RIGHT])
			]
		], false, length, 1)
	}
}
