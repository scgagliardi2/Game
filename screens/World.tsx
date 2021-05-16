import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import NavButton from '../components/NavButton';
import Player from '../components/Player';
import InputsContainer from '../components/inputs/InputsContainer';
import Chunk from '../components/world/Chunk';
import Window from '../components/world/Window'
import Cell from '../src/world/Cell'

interface Props {
    onNavigate: (screen: string) => any,
}

interface State {
    world_position: [number, number],
    player_direction: string,
    active_chunk: number
}

export default class World extends React.Component<Props, State> {

    Textures: Cell[]


    constructor(props: Props) {
        super(props);

        this.Textures = [
            new Cell('../../assets/grass1.png', true)
        ]

        this.state = {
            world_position: [100, 100],
            player_direction: 'down',
            active_chunk: 0
        }
    }

    move = (direction: string, tap: boolean) => {

        this.changePlayerDirection(direction);

        if (!tap) {
            this.moveWorld(direction);
        }
    }

    changePlayerDirection = (direction: string) => {
        this.setState({
            player_direction: direction
        });
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
        return (
            <View style={styles.world}>
                <Window textures={this.Textures}/>
                <InputsContainer inputDpadTap={this.move} inputDpadLongPress={this.move}/>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    world: {
        width: '100%',
        maxWidth: 600,
        flexDirection: 'column-reverse',
        flex: 7,
        padding: 5,
        paddingTop: 50,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'grey'
    },
    centerPlayer: {
        alignItems: 'center',
        positon: 'absolute',
        top: -380
    }
});