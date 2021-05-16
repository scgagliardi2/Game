import React from 'react';
import { View, StyleSheet} from 'react-native';
import { MoveSetType } from '../../src/world/textures/characters/MoveSet';
import ButtonsContainer from './ButtonsContainer';
import D_Pad from './D_Pad';

interface Props {
    inputDpadTap: (direction: MoveSetType, tap: boolean) => any,
    inputDpadLongPress: (direction: MoveSetType, tap: boolean) => any,
}

interface State {
}

export default class InputsContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    dpad_Tap = (direction: string) => {
        this.props.inputDpadTap(this.dpadToMoveSetType(direction), true);
    }

    dpad_LongPress = (direction: string) => {
        this.props.inputDpadLongPress(this.dpadToMoveSetType(direction), false);
    }

    dpadToMoveSetType(direction: string): MoveSetType {
        switch (direction) {
            case 'down': 
                return MoveSetType.DOWN
            case 'left': 
                return MoveSetType.LEFT
            case 'right': 
                return MoveSetType.RIGHT
            case 'up': 
            default:
                return MoveSetType.UP
        }
    }

    render() {
        return (
            <View style={styles.InputsContainer}>
                <D_Pad dpad_input_Tap={this.dpad_Tap} dpad_input_LongPress={this.dpad_LongPress}/>
                <ButtonsContainer/>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    InputsContainer: {
        top: '600px',
        height: 200,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
