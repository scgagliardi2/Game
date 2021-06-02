import Texture, { TextureLevel } from "../../../../../game/world/textures/Texture"
import Tile from "../../../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../../../game/inputs/MoveSet"

export default class GrassBase extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f', xpos, ypos, level, [
			[
				new Tile(require('./grass_base_tile.png'), [], [])
			]
		])
	}
}
