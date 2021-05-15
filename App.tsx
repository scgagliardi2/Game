import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './screens/Menu';
import BattleScreen from './screens/BattleScreen';
import World from './screens/World';
import NavBar from './components/NavBar';

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
          <View style={styles.screen}>
            <Menu onNavigate={this.changeScreen}/>
            <NavBar onNavigate={this.changeScreen}/>
          </View>
        );
      case 'BattleScreen':
        return (
          <View style={styles.screen}>
            <BattleScreen onNavigate={this.changeScreen}/>
            <NavBar onNavigate={this.changeScreen}/>
          </View>
        );
        case 'World':
          return (
            <View style={styles.screen}>
              <World onNavigate={this.changeScreen}/>
              <NavBar onNavigate={this.changeScreen}/>
            </View>
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
