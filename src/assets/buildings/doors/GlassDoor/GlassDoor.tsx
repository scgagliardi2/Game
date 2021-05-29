import Texture, { TextureLevel } from "../../../../game/world/textures/Texture"
import Tile from "../../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../../game/inputs/MoveSet"

export default class GlassDoor extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super(xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], [])
			]
		])
	}
}
