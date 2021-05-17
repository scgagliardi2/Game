import React from 'react';
import Display from './src/Display';

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
      <Display/>
    )
  }
}
