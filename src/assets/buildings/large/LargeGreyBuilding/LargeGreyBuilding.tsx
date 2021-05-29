import Texture, { TextureLevel } from "../../../../components/world/textures/Texture"
import Tile from "../../../../components/world/tiles/Tile"
import { MoveSetType } from "../../../../components/inputs/MoveSet"

export default class LargeGreyBuilding extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super(xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), [], []),
				new Tile(require('./0-1.png'), [], []),
				new Tile(require('./0-2.png'), [], []),
				new Tile(require('./0-3.png'), [], []),
				new Tile(require('./0-4.png'), [], []),
				new Tile(require('./0-5.png'), [], []),
				new Tile(require('./0-6.png'), [], [])
			],
			[
				new Tile(require('./1-0.png'), undefined, undefined),
				new Tile(require('./1-1.png'), undefined, undefined),
				new Tile(require('./1-2.png'), undefined, undefined),
				new Tile(require('./1-3.png'), undefined, undefined),
				new Tile(require('./1-4.png'), undefined, undefined),
				new Tile(require('./1-5.png'), undefined, undefined),
				new Tile(require('./1-6.png'), undefined, undefined)
			],
			[
				new Tile(require('./2-0.png'), undefined, undefined),
				new Tile(require('./2-1.png'), undefined, undefined),
				new Tile(require('./2-2.png'), undefined, undefined),
				new Tile(require('./2-3.png'), undefined, undefined),
				new Tile(require('./2-4.png'), undefined, undefined),
				new Tile(require('./2-5.png'), undefined, undefined),
				new Tile(require('./2-6.png'), undefined, undefined)
			],
			[
				new Tile(require('./3-0.png'), undefined, undefined),
				new Tile(require('./3-1.png'), undefined, undefined),
				new Tile(require('./3-2.png'), undefined, undefined),
				new Tile(require('./3-3.png'), undefined, undefined),
				new Tile(require('./3-4.png'), undefined, undefined),
				new Tile(require('./3-5.png'), undefined, undefined),
				new Tile(require('./3-6.png'), undefined, undefined)
			],
			[
				new Tile(require('./4-0.png'), undefined, undefined),
				new Tile(require('./4-1.png'), undefined, undefined),
				new Tile(require('./4-2.png'), undefined, undefined),
				new Tile(require('./4-3.png'), undefined, undefined),
				new Tile(require('./4-4.png'), undefined, undefined),
				new Tile(require('./4-5.png'), undefined, undefined),
				new Tile(require('./4-6.png'), undefined, undefined)
			],
			[
				new Tile(require('./5-0.png'), undefined, undefined),
				new Tile(require('./5-1.png'), undefined, undefined),
				new Tile(require('./5-2.png'), undefined, undefined),
				new Tile(undefined, [], undefined),
				new Tile(require('./5-3-door.png'), undefined, undefined),
				new Tile(require('./5-4.png'), undefined, undefined),
				new Tile(require('./5-5.png'), undefined, undefined)
			]
		])
	}
}
