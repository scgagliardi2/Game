import React from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from './screens/Menu';
import BattleScreen from './screens/BattleScreen';
import NavBar from './components/NavBar';
import Texture from './src/world/textures/Texture'
import Window from './src/world/Window'
import Grass1 from './src/world/textures/ground/Grass1';
import InputsContainer from './components/inputs/InputsContainer';
import Red from './src/world/textures/characters/Red';
import Character from './src/world/textures/characters/Character';
import { MoveSetType } from './src/world/textures/characters/MoveSet';
import GameMap from './src/world/GameMap';
import TestingMap from './src/world/TestingMap';

interface Props {

}

export interface AppState {
  Content: string,
  world_position: [number, number],
  player_direction: string,
  active_chunk: number,
  Map: GameMap
}

export default class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);
    this.move = this.move.bind(this);
    
    this.state = {
      Content: 'World',
      world_position: [100, 100],
      player_direction: 'down',
      active_chunk: 0,
      Map: new TestingMap()
    }
  }
  
  changeScreen(screen: string) {
    this.setState({
      Content: screen,
    });
  }

  move(direction: MoveSetType, tap: boolean) {
    this.state.Map.handleMove(direction, tap, this)
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
            <View>
              <Window map={this.state.Map}/>
              <InputsContainer inputDpadTap={this.move} inputDpadLongPress={this.move}/>
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
