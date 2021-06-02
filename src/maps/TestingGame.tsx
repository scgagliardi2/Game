import Red from "../assets/player/Red/Red";
import Game from "../game/Game";
import Player from "../game/Player";
import { buildFrom } from "../game/world/GameMap";
import TestingMap from "./TestingMap";
import Testing2Map from "./Testing2Map";

const yaml = require('js-yaml')

var text2 = `
id: 6df1152253c05eca42c251ee0536814b9c3f2b26
width: 18
height: 18
textures:
  barrier: []
  base:
    - x: 0
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 0
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 1
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 2
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 3
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 4
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 5
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 6
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 7
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 8
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 9
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 10
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 11
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 12
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 13
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 14
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 15
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 16
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 0
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 1
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 2
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 3
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 4
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 5
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 6
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 8
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 9
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 10
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 11
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 12
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 13
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 14
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 15
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 16
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
    - x: 17
      'y': 17
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 12d194d914a25fe7955bc4579c509075e4d26f7d3f81bd1b9d120d8a73a6184f
  low:
    - x: 12
      'y': 7
      width: 1
      height: 1
      stretches: false
      length: 0
      repeatIndex: 0
      class: 525a7ad74dd65a1ea3ade0aca4089e68cc04dbe36f9fc94bd65fe4a32afa7e04
  sprite: []
  high:
    - x: 0
      'y': 0
      width: 1
      height: 2
      stretches: false
      length: 0
      repeatIndex: 0
      class: e3e336c734dcd0cb87c3f4690805ca990de7444bad81a773f1820584351a48d2
    - x: 10
      'y': 3
      width: 4
      height: 5
      stretches: false
      length: 0
      repeatIndex: 0
      class: 6002a97356b87dcc7524ac22fcf33865bf0224a44f78a427bd30ed33093933a9
transitions:
  - mapX: 12
    mapY: 7
    walkOn: true
    activationDirection: 3
    newMapX: 0
    newMapY: 0
    newMapId: 3c9ed3039bd374a9271a7d8827bf128d2766c354
    playerX: 6
    playerY: 7
    playerDirection: 0
`

export default class TestingGame extends Game {
    constructor() {
        let data = yaml.load(text2);

        super(
            [
                TestingMap,
                buildFrom(data)
            ],
            new Player('red', new Red(4, 8))
        )
    }
}
