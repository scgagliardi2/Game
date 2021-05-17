import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Player from '../Player';
import InputsContainer from '../inputs/InputsContainer';
import Chunk from '../world/Chunk';
import PurpleStore from "../../assets/textures/purple_store/PurpleStore";

interface Props {
    onNavigate: (screen: string) => any,
}

interface State {
    world_position: [number, number],
    player_direction: string,
    active_chunk: number
}

export default class World extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

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
                <View style={styles.centerPlayer} >
                    <Player direction={this.state.player_direction}/>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    world: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgray'
    },
    centerPlayer: {
        alignItems: 'center',
        positon: 'absolute',
        top: '50%'
    }
});