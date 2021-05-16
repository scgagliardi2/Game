import React from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from './screens/Menu';
import BattleScreen from './screens/BattleScreen';
import NavBar from './components/NavBar';
import Texture from './src/world/Texture'
import Window from './src/world/Window'
import Grass1 from './src/world/textures/Grass1';

interface Props {

}

interface State {
  Content: string,
}

export default class App extends React.Component<Props, State> {
  Textures: Texture[]

  constructor(props: Props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);

    this.Textures = [
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1(),
      new Grass1()
  ]

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
            <Window textures={this.Textures}/>
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
