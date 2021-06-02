import Texture, { TextureLevel } from "../../../../../game/world/textures/Texture"
import Tile from "../../../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../../../game/inputs/MoveSet"

export default class MedBrownTree extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('e3e336c734dcd0cb87c3f4690805ca990de7444bad81a773f1820584351a48d2', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], [])
			],
			[
				new Tile(require('./1-0.png'), undefined, undefined)
			]
		])
	}
}
