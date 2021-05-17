import Tile from "../../../components/world/tiles/Tile"

export default class CharacterTile extends Tile {
    Source: any

    constructor(source: any) {
        super(source, false)
    }
}
