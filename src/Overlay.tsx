import React from 'react';
import {View, StyleSheet} from 'react-native';
import { MoveSetType } from './assets/characters/MoveSet';
import InputsContainer from './components/inputs/InputsContainer';
import constants from './GlobalConstants'

interface Props {
    children: any,
    handleMove: (direction: MoveSetType, tap: boolean) => void,
    handlePress: (button: string) => void
}

interface State {
}

export default class Overlay extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.display}>
                {this.props.children}
                <InputsContainer 
                    inputDpadTap={this.props.handleMove} 
                    inputDpadLongPress={this.props.handleMove}
                    displayMenuButton={false}
                    buttonPressed={this.props.handlePress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    display: {
        width: constants.size.width,
        maxWidth: 512,
        height: constants.size.height,
        maxHeight: 736,
    },
    lock_position: {
        position: 'relative',
        width: '95%',
        bottom: '0px'
    }
});