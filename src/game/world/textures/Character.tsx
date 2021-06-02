import MoveSet, { MoveSetType } from '../../inputs/MoveSet';
import Texture, { TextureLevel } from './Texture';
import Tile from '../tiles/Tile';
import { increment } from '../World';

export default class Character extends Texture {
    DownMoveSet: MoveSet
    LeftMoveSet: MoveSet
    RightMoveSet: MoveSet
    UpMoveSet: MoveSet

    Facing: MoveSetType

    TileIndex: number

    constructor(id: string, x: number, y: number, dms: MoveSet, lms: MoveSet, rms: MoveSet, ums: MoveSet) {
        super(
            id,
            x, 
            y,
            TextureLevel.SPRITES,
            [
                [
                    dms.Source[0]
                ]
            ]
        )

        this.Facing = MoveSetType.DOWN

        this.TileIndex = 0

        this.DownMoveSet = dms
        this.LeftMoveSet = lms
        this.RightMoveSet = rms
        this.UpMoveSet = ums
    }

    look(direction: MoveSetType): [number, number] {
          // change facing direction
          this.Facing = direction

          // change display tile
          this.Tiles[0][0] = this.getTile()

        // return the block we are looking at
        switch (this.Facing) {
            case MoveSetType.DOWN:
                return [this.X, this.Y + 1]
            case MoveSetType.LEFT:
                return [this.X - 1, this.Y]
            case MoveSetType.RIGHT:
                return [this.X + 1, this.Y]
            case MoveSetType.UP:
                return [this.X, this.Y - 1]
        }
    }

    move(direction: MoveSetType) {
        switch (direction) {
            case MoveSetType.DOWN:
                this.Y += increment
                break
            case MoveSetType.LEFT:
                this.X -= increment
                break
            case MoveSetType.RIGHT:
                this.X += increment
                break
            case MoveSetType.UP:
                this.Y -= increment
                break
        }
    }

    nextTile() {
        this.TileIndex = (this.TileIndex + 1) % 4

        this.Tiles[0][0] = this.getTile()
    }

    getTile(): Tile {
        switch (this.Facing) {
            case MoveSetType.DOWN:
                return this.DownMoveSet.Source[this.TileIndex]
            case MoveSetType.LEFT:
                return this.LeftMoveSet.Source[this.TileIndex]
            case MoveSetType.RIGHT:
                return this.RightMoveSet.Source[this.TileIndex]
            case MoveSetType.UP:
                return this.UpMoveSet.Source[this.TileIndex]
        }
    }
}