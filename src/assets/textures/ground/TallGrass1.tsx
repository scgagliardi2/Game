import Texture, { TextureLevel } from '../Texture'
import Tile from '../../../components/world/tiles/Tile'

export default class TallGrass1 extends Texture {
    constructor(xpos: number, ypos: number) {
        super(
            xpos, 
            ypos, 
            TextureLevel.HIGHLANDSCAPE,
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
