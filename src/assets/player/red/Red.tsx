import Character from "../../../game/world/textures/Character"
import CharacterTile from "../../../game/world/tiles/CharacterTile"
import MoveSet from "../../../game/inputs/MoveSet"

export default class Red extends Character {

	constructor(xpos: number, ypos: number) {
		super('24d809f028257e441a83c1a8097fb47190f658e76bcde4776c05d98e867b42b0', xpos, ypos,
			new MoveSet([
				new CharacterTile(require('./fd-0.png')),
				new CharacterTile(require('./fd-1.png')),
				new CharacterTile(require('./fd-2.png')),
				new CharacterTile(require('./fd-3.png'))
			]),
 			new MoveSet([
				new CharacterTile(require('./fl-0.png')),
				new CharacterTile(require('./fl-1.png')),
				new CharacterTile(require('./fl-2.png')),
				new CharacterTile(require('./fl-3.png'))
			]),
 			new MoveSet([
				new CharacterTile(require('./fr-0.png')),
				new CharacterTile(require('./fr-1.png')),
				new CharacterTile(require('./fr-2.png')),
				new CharacterTile(require('./fr-3.png'))
			]),
 			new MoveSet([
				new CharacterTile(require('./fu-0.png')),
				new CharacterTile(require('./fu-1.png')),
				new CharacterTile(require('./fu-2.png')),
				new CharacterTile(require('./fu-3.png'))
			]),
		)
	}
}
