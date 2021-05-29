import Character from '../game/world/textures/Character'

export default class Player {

    Name: String

    Pack: Object
    Pokemon: Object

    Texture: Character

    constructor(name: string, texture: Character | undefined) {

        this.Name = name

        this.Pack = {
            money: 0,
            items: {}
        }

        this.Pokemon = {}

        this.Texture = texture!
    }
}
