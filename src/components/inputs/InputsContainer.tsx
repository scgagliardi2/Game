import React from 'react';
import { View, StyleSheet} from 'react-native';
import { MoveSetType } from '../world/textures/MoveSet';
import ButtonsContainer from './ButtonsContainer';
import D_Pad from './D_Pad';
import MenuButton from './Menu_Button';

interface Props {
    inputDpadTap: (direction: MoveSetType, tap: boolean) => any,
    inputDpadLongPress: (direction: MoveSetType, tap: boolean) => any,
    displayMenuButton: boolean,
    buttonPressed: (button: string) => any
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
            if (this.props.displayMenuButton) {
                return (
                    <View style={styles.InputsContainer}>
                        <D_Pad dpad_input_Tap={this.dpad_Tap} dpad_input_LongPress={this.dpad_LongPress}/>
                        <View style={styles.lockMenu}>
                            <MenuButton pressed={this.props.buttonPressed}/>
                        </View>
                        <ButtonsContainer buttonPressed={this.props.buttonPressed}/>
                    </View>  
                )
            } else {
                return (
                    <View style={styles.InputsContainer}>
                        <D_Pad dpad_input_Tap={this.dpad_Tap} dpad_input_LongPress={this.dpad_LongPress}/>
                        <ButtonsContainer buttonPressed={this.props.buttonPressed}/>
                    </View>  
                ) 
            }
        
    }
}

const styles = StyleSheet.create({
    InputsContainer: {
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lockMenu: {
        position: 'absolute',
        bottom: 20,
        left: '50%'
    }
});
