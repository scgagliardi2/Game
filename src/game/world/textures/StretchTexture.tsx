import { IOTextureModel } from '../../../mapBuilder/models/IOTextureModel';
import Tile from '../tiles/Tile';
import Texture, { TextureLevel } from './Texture';

export default class StretchTexture extends Texture {

    Length: number
    RepeatIndex: number

    OrigWidth: number
    OrigHeight: number

    constructor(
        id: string, xpos: number, ypos: number, level: TextureLevel, tiles: Tile[][], 
        horizontal: boolean, 
        length: number,
        repeatIndex: number
    ) {
        super(id, xpos, ypos, level, tiles)

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

        this.OrigWidth = this.Width
        this.OrigHeight = this.Height
        this.Length = length
        this.RepeatIndex = repeatIndex

        this.Height = tiles.length
        this.Width = tiles[0].length
    }

    toYaml(): IOTextureModel {
        return {
            x: this.X,
            y: this.Y,
            width: this.OrigWidth,
            height: this.OrigHeight,
            stretches: true,
            length: this.Length,
            repeatIndex: this.RepeatIndex,
            class: typeof(this)
        }
    }
}
