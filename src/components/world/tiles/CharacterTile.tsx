import Tile from "./Tile"


export default class CharacterTile extends Tile {
    Source: any

    constructor(source: any) {
        super(source, false)

        this.IsSprite = true
    }
}
