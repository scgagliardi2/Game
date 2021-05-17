import Tile from './Tile';

export default class TransitionTile extends Tile {

    constructor(source: any, transitionCallback: () => any) {
        super(source, true)

        this.IsTransition = true
        this.TransitionCallback = transitionCallback
    }
}
