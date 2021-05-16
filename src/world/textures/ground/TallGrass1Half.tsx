import Texture, { TextureLevel } from '../Texture'
import Tile from '../Tile'

export default class TallGrass1Half extends Texture {
    constructor(xpos: number, ypos: number, upper: boolean) {
        super(
            xpos, 
            ypos, 
            upper ? TextureLevel.LOWLANDSCAPE : TextureLevel.HIGHLANDSCAPE,
            [
                [
                    new Tile(
                        require('./tall_grass_1_half.png'),
                        false,
                        upper,
                        !upper
                    )
                ]
            ]
        )
    }
}
