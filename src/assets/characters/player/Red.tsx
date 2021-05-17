import Character from "./Character"
import CharacterTile from "../../../components/world/tiles/CharacterTile"
import MoveSet from "./MoveSet"



export default class Red extends Character {

    constructor(xpos: number, ypos: number) {
        super(
            xpos,
            ypos,
            new MoveSet([
                new CharacterTile(require('./red/fd-0.png')),            
                new CharacterTile(require('./red/fd-1.png')),
                new CharacterTile(require('./red/fd-2.png')),
                new CharacterTile(require('./red/fd-3.png'))
            ]),
            new MoveSet([
                new CharacterTile(require('./red/fl-0.png')),            
                new CharacterTile(require('./red/fl-1.png')),
                new CharacterTile(require('./red/fl-2.png')),
                new CharacterTile(require('./red/fl-3.png'))
            ]),
             new MoveSet([
                new CharacterTile(require('./red/fr-0.png')),            
                new CharacterTile(require('./red/fr-1.png')),
                new CharacterTile(require('./red/fr-2.png')),
                new CharacterTile(require('./red/fr-3.png'))
            ]),
            new MoveSet([
                new CharacterTile(require('./red/fu-0.png')),            
                new CharacterTile(require('./red/fu-1.png')),
                new CharacterTile(require('./red/fu-2.png')),
                new CharacterTile(require('./red/fu-3.png'))
            ])
        )
    }
}
