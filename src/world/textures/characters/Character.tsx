import { ImageProps } from 'react-native';
import MoveSet, { MoveSetType } from './MoveSet';
import { cellSize } from '../../Window'
import App from '../../../../App'

export default class Character {
    Facing: MoveSetType
    AnimationIndex: number
    Xpos: number
    Ypos: number
    DownMoveSet: MoveSet
    LeftMoveSet: MoveSet
    RightMoveSet: MoveSet
    UpMoveSet: MoveSet
    IsMoving: boolean

    constructor(dms: MoveSet, lms: MoveSet, rms: MoveSet, ums: MoveSet) {
        this.Xpos = 0,
        this.Ypos = 0,
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
            
            characters[0].Facing = direction

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
    
                characters[0].AnimationIndex = characters[0].AnimationIndex + 1
    
                if (characters[0].AnimationIndex == 4) {
                    characters[0].AnimationIndex = 0
                    characters[0].Xpos += dx 
                    characters[0].Ypos += dy

                    this.IsMoving = false

                    clearInterval(moving)
                }
    
                app.setState({
                    Characters: characters
                })
            },
            200)
        }    
    }

    _getImageProps(moveSet: MoveSetType, index: number): ImageProps {
        switch (moveSet) {
            case MoveSetType.DOWN:
                return {
                    source: this.DownMoveSet.Source[index],
                    style :{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        top: index * (cellSize / 4)
                    }
                }
            case MoveSetType.LEFT:
                return {
                    source: this.LeftMoveSet.Source[index],
                    style :{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        right: index * (cellSize / 4)
                    }
                }
            case MoveSetType.RIGHT:
                return {
                    source: this.RightMoveSet.Source[index],
                    style :{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        left: index * (cellSize / 4)
                    }
                }
            case MoveSetType.UP:
                return {
                    source: this.UpMoveSet.Source[index],
                    style :{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        bottom: index * (cellSize / 4)
                    }
                }
        }
    }

    getImageProps(): ImageProps {
        return this._getImageProps(this.Facing, this.AnimationIndex)
    }
}
