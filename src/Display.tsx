import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputsContainer from './components/inputs/InputsContainer';
import BattleScreen from './components/screens/BattleScreen';
import Menu from './components/screens/Menu';
import World from './components/screens/World';
import { MoveSetType } from './assets/characters/MoveSet';


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

        this.handlePress = this.handlePress.bind(this);
        this.move = this.move.bind(this);

        this.state = {
            Content: 'World',
            world_position: [100, 100],
            active_chunk: 0
        }
    }

    handlePress(button: string) {
        console.log(button)
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
                        <Menu/>
                        <InputsContainer 
                            inputDpadTap={this.move} 
                            inputDpadLongPress={this.move} 
                            displayMenuButton={false}
                            buttonPressed={this.handlePress}
                        />
                    </View>
                );
            case 'BattleScreen':
                return (
                    <View style={styles.display}>
                        <BattleScreen/>
                        <InputsContainer 
                            inputDpadTap={this.move} 
                            inputDpadLongPress={this.move} 
                            displayMenuButton={false}
                            buttonPressed={this.handlePress}
                        />
                    </View>
                );
            case 'World':
                return (
                    <View style={styles.display}>
                        <World/>
                        <View style={styles.lock_position}>
                            <InputsContainer 
                                inputDpadTap={this.move} 
                                inputDpadLongPress={this.move} 
                                displayMenuButton={true}
                                buttonPressed={this.handlePress}
                            />
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