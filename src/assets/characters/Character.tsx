import MoveSet, { MoveSetType } from './MoveSet';
import { cellSize } from '../../components/world/Window'
import Texture, { TextureLevel } from '../Texture';
import Tile from '../../../components/world/tiles/Tile';

export default class Character extends Texture {
    DownMoveSet: MoveSet
    LeftMoveSet: MoveSet
    RightMoveSet: MoveSet
    UpMoveSet: MoveSet

    IsMoving: boolean

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
        this.IsMoving = false
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

    walk(update: () => void, updateTile: (texture: Texture) => void, remove: (texture: Texture) => void) {
        if (!this.IsMoving) {
            this.IsMoving = true;

            var dx: number = 0
            var dy: number = 0
    
            switch (this.Facing) {
                case MoveSetType.DOWN:
                    dy = 1
                    break;
                case MoveSetType.LEFT:
                    dx = -1
                    break;
                case MoveSetType.RIGHT:
                    dx = 1
                    break;
                case MoveSetType.UP:
                    dy = -1
                    break;
            }
    
            var moving = setInterval(() => { 
    
                // increment animation index
                this.AnimationIndex++

                var offsetX = 0
                var offsetY = 0

                if (this.AnimationIndex == 4) {
                    
                    remove(this)

                    this.AnimationIndex = 0
                    this.Xpos += dx 
                    this.Ypos += dy

                    this.IsMoving = false

                    offsetX = 0
                    offsetY = 0

                    clearInterval(moving)

                }
                else {
                    // set offsets
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
                }

                // update display tile
                let tile = this.getTile()

                tile.OffsetX = offsetX
                tile.OffsetY = offsetY

                this.Tiles[0][0] = tile

                updateTile(this)
                update()
            },
            200)
        }    
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
