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

interface Props {

}

export interface AppState {
  Content: string,
  world_position: [number, number],
  player_direction: string,
  active_chunk: number,
  Characters: Character[]
}

export default class App extends React.Component<Props, AppState> {
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
      world_position: [100, 100],
      player_direction: 'down',
      active_chunk: 0,
      Characters: [
        new Red()
      ]
    };
  }
  
  changeScreen(screen: string) {
    this.setState({
      Content: screen,
    });
  }

  move = (direction: MoveSetType, tap: boolean) => {

      this.state.Characters[0].look(this, direction);

      if (!tap) {
        this.state.Characters[0].walk(this)
      }
  }

  moveWorld = (direction: string) => {
    switch (direction) {
        case 'up':
            this.setState({
                world_position: [this.state.world_position[0], this.state.world_position[1] + 20]
            });
            break;
        case 'down':
            this.setState({
                world_position: [this.state.world_position[0], this.state.world_position[1] - 20]
            });
            break;
        case 'left':
            this.setState({
                world_position: [this.state.world_position[0] + 20, this.state.world_position[1]]
            });
            break;
        case 'right':
            this.setState({
                world_position: [this.state.world_position[0] - 20, this.state.world_position[1]]
            });
            break;
    }
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
              <Window textures={this.Textures} characters={this.state.Characters}/>
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
