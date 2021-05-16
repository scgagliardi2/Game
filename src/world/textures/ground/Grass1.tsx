import Texture from '../Texture'

export default class Grass1 extends Texture {
    constructor() {
        super("./grass1.png", true)
        this.Source = require('./grass1.png')
    }
}
