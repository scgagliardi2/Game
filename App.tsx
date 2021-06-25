import React from 'react';
import TestingGame from './src/maps/TestingGame';
import { setGame } from './src/game/Game'
import { View } from 'react-native';
import { Pokemon } from './src/new-code/Pokemon';
import { Pokedex } from './src/new-code/data-dex/Pokedex';
import { getAnimatedBattler } from './src/new-code/imaging/AnimatedBattler';
import { getStaticBattler } from './src/new-code/imaging/StaticBattler';

interface Props {
}

export interface AppState {
}

export default class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    
    setGame(new TestingGame())

    this.state = {
    }
  }


  render() {
    var p = new Pokemon(Pokedex.ABSOL, 1)

    var animation = getAnimatedBattler(p, true)
    var statc = getStaticBattler(p, true)

    return (
      <View>
        {animation.render(200)}
        {statc.render(200)}
      </View>
    )
  }
}
