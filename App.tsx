import React from 'react';
import Display from './src/game/Display';
import GameState from './src/game/GameState';
import Builder from './src/mapBuilder/Builder';

interface Props {
}

export interface AppState {
}

export default class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    
    GameState.initializeGameState()

    this.state = {
    }
  }


  render() {
    return (
      <Builder/>
    )
  }
}
