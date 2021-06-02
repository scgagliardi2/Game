import Texture, { TextureLevel } from "../../../../game/world/textures/Texture"
import Tile from "../../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../../game/inputs/MoveSet"

export default class MartPurple extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('6002a97356b87dcc7524ac22fcf33865bf0224a44f78a427bd30ed33093933a9', xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], []),
				new Tile(require('./0-1.png'), [], []),
				new Tile(require('./0-2.png'), [], []),
				new Tile(require('./0-3.png'), [], [])
			],
			[
				new Tile(require('./1-0.png'), undefined, undefined),
				new Tile(require('./1-1.png'), undefined, undefined),
				new Tile(require('./1-2.png'), undefined, undefined),
				new Tile(require('./1-3.png'), undefined, undefined)
			],
			[
				new Tile(require('./2-0.png'), undefined, undefined),
				new Tile(require('./2-1.png'), undefined, undefined),
				new Tile(require('./2-2.png'), undefined, undefined),
				new Tile(require('./2-3.png'), undefined, undefined)
			],
			[
				new Tile(require('./3-0.png'), undefined, undefined),
				new Tile(require('./3-1.png'), undefined, undefined),
				new Tile(require('./3-2.png'), undefined, undefined),
				new Tile(require('./3-3.png'), undefined, undefined)
			],
			[
				new Tile(require('./4-0.png'), undefined, undefined),
				new Tile(require('./4-1.png'), undefined, undefined),
				new Tile(undefined, [], undefined),
				new Tile(require('./4-3.png'), undefined, undefined)
			]
		])
	}
}
