import Texture, { TextureLevel } from "../../../../components/world/textures/Texture"
import Tile from "../../../../components/world/tiles/Tile"
import { MoveSetType } from "../../../../components/inputs/MoveSet"

export default class GlassDoor extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super(xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], [])
			]
		])
	}
}
