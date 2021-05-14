import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './screens/Menu';
import BattleScreen from './screens/BattleScreen';
import World from './screens/World';

interface Props {

}

interface State {
  Content: string,
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);

    this.state = {
      Content: 'World',
    };
  }
  
  changeScreen(screen: string) {
    this.setState({
      Content: screen,
    });
  }

  render() {
    switch (this.state.Content) {
      case 'Menu':
        return (
          <Menu onNavigate={this.changeScreen}/>
        );
      case 'BattleScreen':
        return (
          <BattleScreen onNavigate={this.changeScreen}/>
        );
        case 'World':
          return (
            <World onNavigate={this.changeScreen}/>
          );
    };
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
