import Tile from '../tiles/Tile';
import Texture, { TextureLevel } from './Texture';

export default class StretchTexture extends Texture {


    constructor(
        xpos: number, ypos: number, level: TextureLevel, tiles: Tile[][], 
        horizontal: boolean, 
        length: number,
        repeatIndex: number
    ) {
        super(xpos, ypos, level, tiles)

        for (var row = 0; row < this.Tiles.length; row++) {
            if (horizontal) {
                // for horizontal, duplicate the tile at the repeat index length times
                for (var i = 0; i < length - this.Width; i++) {
                    this.Tiles[row].splice(repeatIndex, 0, this.Tiles[row][repeatIndex])           
                }
            }
            else {
                // for vertical, duplicate the whole row length times
                if (row == repeatIndex) {
                    for (var i = 0; i < length - this.Height; i++) {
                        this.Tiles.splice(repeatIndex, 0, this.Tiles[repeatIndex])        
                    }
                    break;
                }
            }
        }

        this.Height = tiles.length
        this.Width = tiles[0].length
    }
}
