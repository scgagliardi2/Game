import Character from "./Character"
import MoveSet from "./MoveSet"



export default class Red extends Character {

    constructor() {
        super(
            new MoveSet([
                require('./red/fd-0.png'),            
                require('./red/fd-1.png'),
                require('./red/fd-2.png'),
                require('./red/fd-3.png')
            ]),
            new MoveSet([
                require('./red/fl-0.png'),            
                require('./red/fl-1.png'),
                require('./red/fl-2.png'),
                require('./red/fl-3.png')
            ]),
             new MoveSet([
                require('./red/fr-0.png'),            
                require('./red/fr-1.png'),
                require('./red/fr-2.png'),
                require('./red/fr-3.png')
            ]),
            new MoveSet([
                require('./red/fu-0.png'),            
                require('./red/fu-1.png'),
                require('./red/fu-2.png'),
                require('./red/fu-3.png')
            ])
        )

        this.Xpos = 1
    }
}
