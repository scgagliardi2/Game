import React from 'react';
import Display from './src/components/Display';
import Player from './src/components/Player';

interface Props {
}

export interface AppState {
}

export default class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
    }
  }

  render() {
    return (
      <Display player={new Player('name')}/>
    )
  }
}
