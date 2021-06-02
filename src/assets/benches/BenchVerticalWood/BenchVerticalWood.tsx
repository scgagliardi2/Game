import Texture, { TextureLevel } from "../../../game/world/textures/Texture"
import Tile from "../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../game/inputs/MoveSet"

export default class BenchVerticalWood extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('f029c15cc5f9b59533ef6ec658a8d580792d88203857a8687905029d09bb339f', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], [])
			],
			[
				new Tile(require('./1-0.png'), [], [])
			]
		])
	}
}
