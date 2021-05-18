import MoveSet, { MoveSetType } from './MoveSet';
import Texture, { TextureLevel } from './Texture';
import Tile from '../tiles/Tile';
import { cellSize } from '../World';

export default class Character extends Texture {
    DownMoveSet: MoveSet
    LeftMoveSet: MoveSet
    RightMoveSet: MoveSet
    UpMoveSet: MoveSet

    Facing: MoveSetType
    AnimationIndex: number

    constructor(xpos: number, ypos: number, dms: MoveSet, lms: MoveSet, rms: MoveSet, ums: MoveSet) {
        super(
            xpos, 
            ypos,
            TextureLevel.SPRITES,
            [
                [
                    dms.Source[0]
                ]
            ]
        )

        this.Facing = MoveSetType.DOWN
        this.AnimationIndex = 0
        this.DownMoveSet = dms
        this.LeftMoveSet = lms
        this.RightMoveSet = rms
        this.UpMoveSet = ums
    }

    look(direction: MoveSetType, update: () => void, updateTile: (texture: Texture) => void): number[] {
        if (!this.IsMoving) {

            // change facing direction
            this.Facing = direction

            // change display tile
            this.Tiles[0][0] = this.getTile()

            updateTile(this)
            update()
        }

        // return the block we are looking at
        switch (this.Facing) {
            case MoveSetType.DOWN:
                return [this.Xpos, this.Ypos + 1]
            case MoveSetType.LEFT:
                return [this.Xpos - 1, this.Ypos]
            case MoveSetType.RIGHT:
                return [this.Xpos + 1, this.Ypos]
            case MoveSetType.UP:
                return [this.Xpos, this.Ypos - 1]
        }
    }

    nextTile() {
        this.AnimationIndex = (this.AnimationIndex + 1) % 4

        var offsetX = 0
        var offsetY = 0

        switch (this.Facing) {
            case MoveSetType.DOWN:
                offsetY = this.AnimationIndex * (cellSize / 4)
                break
            case MoveSetType.UP:
                offsetY = -1 * this.AnimationIndex * (cellSize / 4)
                break
            case MoveSetType.LEFT:
                offsetX = -1 * this.AnimationIndex * (cellSize / 4)
                break
            case MoveSetType.RIGHT:
                offsetX = this.AnimationIndex * (cellSize / 4)
                break
        }

        let tile = this.getTile()

        tile.OffsetX = offsetX
        tile.OffsetY = offsetY

        this.Tiles[0][0] = tile
    }

    getTile(): Tile {
        switch (this.Facing) {
            case MoveSetType.DOWN:
                return this.DownMoveSet.Source[this.AnimationIndex]
            case MoveSetType.LEFT:
                return this.LeftMoveSet.Source[this.AnimationIndex]
            case MoveSetType.RIGHT:
                return this.RightMoveSet.Source[this.AnimationIndex]
            case MoveSetType.UP:
                return this.UpMoveSet.Source[this.AnimationIndex]
        }
    }
}