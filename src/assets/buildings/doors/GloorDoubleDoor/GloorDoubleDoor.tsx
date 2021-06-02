import Texture, { TextureLevel } from "../../../../game/world/textures/Texture"
import Tile from "../../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../../game/inputs/MoveSet"

export default class GloorDoubleDoor extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('44613d06a5d84443d6f37b1a4732725b221fb200baf1f40cbfdafd76b67a5434', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], [])
			]
		])
	}
}
