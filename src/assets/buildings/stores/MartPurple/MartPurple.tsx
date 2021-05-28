import Texture, { TextureLevel } from "../../../../components/world/textures/Texture"
import Tile from "../../../../components/world/tiles/Tile"

export default class MartPurple extends Texture {

	constructor(xpos: number, ypos: number, level: TextureLevel) {
		super(xpos, ypos, level, [
			[
				new Tile(require('./0-0.png'), true),
				new Tile(require('./0-1.png'), true),
				new Tile(require('./0-2.png'), true),
				new Tile(require('./0-3.png'), true)
			],
			[
				new Tile(require('./1-0.png'), false),
				new Tile(require('./1-1.png'), false),
				new Tile(require('./1-2.png'), false),
				new Tile(require('./1-3.png'), false)
			],
			[
				new Tile(require('./2-0.png'), false),
				new Tile(require('./2-1.png'), false),
				new Tile(require('./2-2.png'), false),
				new Tile(require('./2-3.png'), false)
			],
			[
				new Tile(require('./3-0.png'), false),
				new Tile(require('./3-1.png'), false),
				new Tile(require('./3-2.png'), false),
				new Tile(require('./3-3.png'), false)
			],
			[
				new Tile(require('./4-0.png'), false),
				new Tile(require('./4-1.png'), false),
				new Tile(undefined, true),
				new Tile(require('./4-3.png'), false)
			]
		])
	}
}
