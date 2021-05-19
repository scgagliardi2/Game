import constants from '../GlobalConstants'

export default class Player {

    Name: String

    Pack: Object
    Pokemon: Object

    constructor(name: string) {

        this.Name = name

        this.Pack = {
            money: 0,
            items: {}
        }

        this.Pokemon = {}
    }
}
