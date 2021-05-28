import StretchTexture from "../../../components/world/textures/StretchTexture"
import { TextureLevel } from "../../../components/world/textures/Texture"
import Tile from "../../../components/world/tiles/Tile"
import { MoveSetType } from "../../../components/inputs/MoveSet"

export default class BridgeVerticalWood extends StretchTexture {

	constructor(xpos: number, ypos: number, level: TextureLevel, length: number) {
		super(xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [MoveSetType.RIGHT], [MoveSetType.LEFT]),
				new Tile(require('./0-1.png')),
				new Tile(require('./0-2.png'), [MoveSetType.LEFT], [MoveSetType.RIGHT])
			],
			[
				new Tile(require('./1-0.png'), [MoveSetType.RIGHT], [MoveSetType.LEFT]),
				new Tile(require('./1-1.png')),
				new Tile(require('./1-2.png'), [MoveSetType.LEFT], [MoveSetType.RIGHT])
			],
			[
				new Tile(require('./2-0.png'), [MoveSetType.RIGHT], [MoveSetType.LEFT]),
				new Tile(require('./2-1.png')),
				new Tile(require('./2-2.png'), [MoveSetType.LEFT], [MoveSetType.RIGHT])
			]
		], false, length, 1)
	}
}
