import Tile from '../tiles/Tile';
import Texture, { TextureLevel } from './Texture';

export default class BarrierTexture extends Texture {


    constructor(xpos: number, ypos: number, width: number, height: number) {

        var tiles: Tile[][] = []

        for (var r = 0; r < height; r++) {
            if (tiles[r] == undefined) {
                tiles[r] = []
            }

            for (var c = 0; c < width; c++) {
                tiles[r][c] = new Tile(undefined, undefined, undefined)
            }
        }

        super(xpos, ypos, TextureLevel.BARRIER, tiles)
    }
}
