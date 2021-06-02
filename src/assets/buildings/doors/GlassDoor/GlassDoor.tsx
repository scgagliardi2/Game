import Texture, { TextureLevel } from "../../../../game/world/textures/Texture"
import Tile from "../../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../../game/inputs/MoveSet"

export default class GlassDoor extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('525a7ad74dd65a1ea3ade0aca4089e68cc04dbe36f9fc94bd65fe4a32afa7e04', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], [])
			]
		])
	}
}
