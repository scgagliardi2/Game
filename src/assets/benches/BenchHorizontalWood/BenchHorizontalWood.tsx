import Texture, { TextureLevel } from "../../../game/world/textures/Texture"
import Tile from "../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../game/inputs/MoveSet"

export default class BenchHorizontalWood extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('86f3987b9fa62a2d37caf22cc394068010b4e21274e13384723ee18b9c533eba', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], []),
				new Tile(require('./0-1.png'), [], [])
			]
		])
	}
}
