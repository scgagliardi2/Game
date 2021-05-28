import React from 'react';
import Red from './src/assets/player/Red/Red';
import Display from './src/components/Display';
import Player from './src/components/Player';
import TestingMap from './src/components/world/TestingMap';
import GameState from './src/GameState';

interface Props {
}

export interface AppState {
}

export default class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    
    this.initializeGameState()

    this.state = {
    }
  }

  initializeGameState() {
    GameState.Player = new Player('name', new Red(4, 8))
    GameState.Map = new TestingMap(0, 0)
  }

  render() {
    return (
      <Display/>
    )
  }
}
