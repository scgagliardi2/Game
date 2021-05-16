import MoveSet, { MoveSetType } from './MoveSet';
import { cellSize } from '../../Window'
import App from '../../../../App'
import Texture, { TextureLevel } from '../Texture';
import Tile from '../Tile';

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

    look(app: App, direction: MoveSetType) {
        if (!this.IsMoving) {
            var characters = app.state.Characters
            
            // change facing direction
            characters[0].Facing = direction

            // change display tile
            characters[0].Tiles[0][0] = this.getTile()

            app.setState({
                Characters: characters
            })
        }
    }

    walk(app: App) {
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
    
                var characters = app.state.Characters
    
                // increment animation index
                characters[0].AnimationIndex = characters[0].AnimationIndex + 1
    
                if (characters[0].AnimationIndex == 4) {
                    characters[0].AnimationIndex = 0
                    characters[0].Xpos += dx 
                    characters[0].Ypos += dy

                    this.IsMoving = false
                    this.OffsetX = 0
                    this.OffsetY = 0

                    clearInterval(moving)
                }
                else {
                    // set offsets
                    switch (this.Facing) {
                        case MoveSetType.DOWN:
                        case MoveSetType.UP:
                            this.OffsetY = this.AnimationIndex * (cellSize / 4)
                        case MoveSetType.LEFT:
                        case MoveSetType.RIGHT:
                            this.OffsetX = this.AnimationIndex * (cellSize / 4)
                    }
                }

                // update display tile
                characters[0].Tiles[0][0] = this.getTile()

                app.setState({
                    Characters: characters
                })
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
