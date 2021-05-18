import Texture, { TextureLevel } from "../../../../../components/world/textures/Texture"
import Tile from "../../../../../components/world/textures/tiles/Tile"

export default class GrassBase extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super(xpos, ypos, level, [
			[
				new Tile(require('./grass_base_tile.png'), true)
			]
		])
	}
}
