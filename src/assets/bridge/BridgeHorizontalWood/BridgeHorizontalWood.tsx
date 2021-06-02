import StretchTexture from "../../../game/world/textures/StretchTexture"
import { TextureLevel } from "../../../game/world/textures/Texture"
import Tile from "../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../game/inputs/MoveSet"

export default class BridgeHorizontalWood extends StretchTexture {

	constructor(xpos: number, ypos: number, level: TextureLevel, length: number) {
		super('e2c962e3de47d4c7a98662e6d21cb81bd6b91648f242f50071b2895d8cfc0b29', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [MoveSetType.DOWN], [MoveSetType.UP]),
				new Tile(require('./0-1.png'), [MoveSetType.DOWN], [MoveSetType.UP]),
				new Tile(require('./0-2.png'), [MoveSetType.DOWN], [MoveSetType.UP])
			],
			[
				new Tile(require('./1-0.png'), [], []),
				new Tile(require('./1-1.png'), [], []),
				new Tile(require('./1-2.png'), [], [])
			],
			[
				new Tile(require('./2-0.png'), [MoveSetType.UP], [MoveSetType.DOWN]),
				new Tile(require('./2-1.png'), [MoveSetType.UP], [MoveSetType.DOWN]),
				new Tile(require('./2-2.png'), [MoveSetType.UP], [MoveSetType.DOWN])
			]
		], true, length, 1)
	}
}
