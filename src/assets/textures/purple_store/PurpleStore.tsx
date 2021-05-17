import Texture, { TextureLevel } from '../../Texture'
import Tile from '../../../components/world/tiles/Tile'
import TransitionTile from '../../../components/world/tiles/TransitionTile'

export default class PurpleStore extends Texture {
    constructor(xpos: number, ypos: number, transitionCallback: () => any) {
        super(
            xpos, 
            ypos, 
            TextureLevel.HIGHLANDSCAPE,
            [
                [new Tile(require('../../buildings/purple_store/0-0.png'),false),new Tile(require('../../buildings/purple_store/0-1.png'),false),new Tile(require('../../buildings/purple_store/0-2.png'),false),new Tile(require('../../buildings/purple_store/0-3.png'),false)],
                [new Tile(require('../../buildings/purple_store/1-0.png'),false),new Tile(require('../../buildings/purple_store/1-1.png'),false),new Tile(require('../../buildings/purple_store/1-2.png'),false),new Tile(require('../../buildings/purple_store/1-3.png'),false)],
                [new Tile(require('../../buildings/purple_store/2-0.png'),false),new Tile(require('../../buildings/purple_store/2-1.png'),false),new Tile(require('../../buildings/purple_store/2-2.png'),false),new Tile(require('../../buildings/purple_store/2-3.png'),false)],
                [new Tile(require('../../buildings/purple_store/3-0.png'),false),new Tile(require('../../buildings/purple_store/3-1.png'),false),new Tile(require('../../buildings/purple_store/3-2.png'),false),new Tile(require('../../buildings/purple_store/3-3.png'),false)],
                [new Tile(require('../../buildings/purple_store/4-0.png'),false),new Tile(require('../../buildings/purple_store/4-1.png'),false),new TransitionTile(require('../../buildings/purple_store/4-2-door.png'), transitionCallback),new Tile(require('../../buildings/purple_store/4-3.png'),false)]
            ]
        )
    }
}
