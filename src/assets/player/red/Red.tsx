import Character from "../../../components/world/textures/Character"
import CharacterTile from "../../../components/world/textures/tiles/CharacterTile"
import MoveSet from "../../../components/world/textures/MoveSet"

export default class Red extends Character {

	constructor(xpos: number, ypos: number) {
		super(xpos, ypos,
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
