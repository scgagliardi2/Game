import React from 'react';
import { View, StyleSheet} from 'react-native';
import GlobalConstants from '../../GlobalConstants';
import ButtonsContainer from './ButtonsContainer';
import D_Pad from './D_Pad';

interface Props {
    inputDpadTap: (direction: string, tap: boolean) => any,
    inputDpadLongPress: (direction: string, tap: boolean) => any,
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
        this.props.inputDpadTap(direction, true);
    }

    dpad_LongPress = (direction: string) => {
        this.props.inputDpadLongPress(direction, false);
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
        height: 200,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
