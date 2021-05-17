import Tile from '../../../components/world/tiles/Tile'
import Texture, { TextureLevel } from '../../Texture'

export default class Grass1 extends Texture {
    constructor(xpos: number, ypos: number) {
        super(
            xpos, 
            ypos, 
            TextureLevel.BASE,
            [
                [
                    new Tile(
                        require('../../terrain/ground/grass/grass_base_tile.png'),
                        false
                    )
                ]
            ]
        )
    }
}
