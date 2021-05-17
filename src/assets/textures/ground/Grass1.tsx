import Texture, { TextureLevel } from '../Texture'
import Tile from '../Tile'

export default class Grass1 extends Texture {
    constructor(xpos: number, ypos: number) {
        super(
            xpos, 
            ypos, 
            TextureLevel.BASE,
            [
                [
                    new Tile(
                        require('./grass1.png'),
                        false
                    )
                ]
            ]
        )
    }
}
