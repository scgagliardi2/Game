import Texture, { TextureLevel } from '../Texture'
import Tile from '../Tile'

export default class TallGrass1 extends Texture {
    constructor(xpos: number, ypos: number) {
        super(
            xpos, 
            ypos, 
            TextureLevel.LANDSCAPE,
            [
                [
                    new Tile(
                        require('./tall_grass_1.png'),
                        false
                    )
                ]
            ]
        )
    }
}
