import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputsContainer from './components/inputs/InputsContainer';
import BattleScreen from './components/screens/BattleScreen';
import Menu from './components/screens/Menu';
import World from './components/screens/World';
import { MoveSetType } from './assets/textures/characters/MoveSet';


interface Props {
}

interface State {
    Content: string,
    world_position: [number, number],
    active_chunk: number
}

export default class Display extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.changeScreen = this.changeScreen.bind(this);
        this.move = this.move.bind(this);

        this.state = {
            Content: 'World',
            world_position: [100, 100],
            active_chunk: 0
        }
    }

    changeScreen(screen: string) {
        this.setState({
          Content: screen,
        });
    }

    move(direction: MoveSetType) {
        console.log(direction)
    }

    render() {
        switch (this.state.Content) {
            case 'Menu':
                return (
                    <View style={styles.display}>
                        <Menu onNavigate={this.changeScreen}/>
                        <InputsContainer inputDpadTap={this.move} inputDpadLongPress={this.move}/>
                    </View>
                );
            case 'BattleScreen':
                return (
                    <View style={styles.display}>
                        <BattleScreen onNavigate={this.changeScreen}/>
                        <InputsContainer inputDpadTap={this.move} inputDpadLongPress={this.move}/>
                    </View>
                );
            case 'World':
                return (
                    <View style={styles.display}>
                        <World onNavigate={this.changeScreen}/>
                        <View style={styles.lock_position}>
                            <InputsContainer inputDpadTap={this.move} inputDpadLongPress={this.move}/>
                        </View>
                    </View>
                );
        };
    }
}

const styles = StyleSheet.create({
    display: {
        width: '100%',
        maxWidth: 512,
        height: '100%',
        maxHeight: 736,
    },
    lock_position: {
        position: 'absolute',
        bottom: 0,
        width: '95%'
    }
});