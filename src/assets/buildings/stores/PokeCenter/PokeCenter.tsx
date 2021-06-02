import Texture, { TextureLevel } from "../../../../game/world/textures/Texture"
import Tile from "../../../../game/world/tiles/Tile"
import { MoveSetType } from "../../../../game/inputs/MoveSet"

export default class PokeCenter extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super('204421c156500c4b332a6e8892e249473b870a830c357b599694a4222838f092', xpos, ypos, level, [
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
				new Tile(undefined, [], undefined),
				new Tile(require('./4-2.png'), undefined, undefined),
				new Tile(require('./4-3.png'), undefined, undefined)
			]
		])
	}
}
