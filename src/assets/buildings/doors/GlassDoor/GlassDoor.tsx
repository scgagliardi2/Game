import Texture, { TextureLevel } from "../../../../components/world/textures/Texture"
import Tile from "../../../../components/world/tiles/Tile"

export default class GlassDoor extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super(xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), true)
			]
		])
	}
}
