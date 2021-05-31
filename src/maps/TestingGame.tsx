import Red from "../assets/player/Red/Red";
import GrassBase from "../assets/terrain/ground/grass/GrassBase/GrassBase";
import Game from "../game/Game";
import Player from "../game/Player";
import { buildFrom } from "../game/world/GameMap";
import MapModel from "../game/world/MapModel";
import Testing2Map from "./Testing2Map";
import TestingMap from "./TestingMap";

const yaml = require('js-yaml')

var text = `name: Test
id: 2342-5646-2344-3656
width: 3
height: 3
textures: {
  barrier: [],
  base: [
    {
      class: "GrassBase",
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      streches: false,
      length: 0
    },
    {
      class: "GrassBase",
      x: 1,
      y: 0,
      width: 1,
      height: 1,
      streches: false,
      length: 0
    },
    {
      class: "GrassBase",
      x: 0,
      y: 1,
      width: 1,
      height: 1,
      streches: false,
      length: 0
    },
    {
      class: "GrassBase",
      x: 1,
      y: 1,
      width: 1,
      height: 1,
      streches: false,
      length: 0
    }
  ],
  low: [],
  sprite: [],
  high: [
    {
      class: "MedBrownTree",
      x: 1,
      y: 1,
      width: 1,
      height: 2,
      streches: false,
      length: 0
    }
  ]
}
`

export default class TestingGame extends Game {
    constructor() {
        let data = yaml.load(text);

        super(
            [
                buildFrom(data)
            ],
            new Player('red', new Red(4, 8))
        )
    }
}
