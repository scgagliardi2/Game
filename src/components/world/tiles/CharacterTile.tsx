import Tile from "./Tile"


export default class CharacterTile extends Tile {
    Source: any

    constructor(source: any) {
        super(source, undefined, undefined)

        this.IsSprite = true
    }
}
