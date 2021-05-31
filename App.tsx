import React from 'react';
import Display from './src/game/Display';
import Builder from './src/mapBuilder/Builder';
import TestingGame from './src/maps/TestingGame';
import { setGame } from './src/game/Game'
import PokeReactBuilder from './src/mapBuilder/PokeReactBuilder';

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
    return (
      <Display/>
    )
  }
}
