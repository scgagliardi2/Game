import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../../GlobalConstants';
import Arrow from './Arrow';

interface Props {
    dpad_input_Tap: (direction: string) => any,
    dpad_input_LongPress: (direction: string) => any,
}

interface State {
}

export default class D_Pad extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            data: null
        }
    }

    handleArrowPress = (direction: string) => {
        this.props.dpad_input_Tap(direction);
    }

    handleLongArrowPress = (direction: string) => {
        this.props.dpad_input_LongPress(direction);
    }

    render() {
        return (
            <View style={styles.D_Pad}>
                <Arrow direction={'^'} width={200} arrowPress={this.handleArrowPress} arrowLongPress={this.handleLongArrowPress}/>
                <Arrow direction={'<'} width={100} arrowPress={this.handleArrowPress} arrowLongPress={this.handleLongArrowPress}/>
                <Arrow direction={'>'} width={100} arrowPress={this.handleArrowPress} arrowLongPress={this.handleLongArrowPress}/>
                <Arrow direction={'v'} width={200} arrowPress={this.handleArrowPress} arrowLongPress={this.handleLongArrowPress}/>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    D_Pad: {
        width: 200,
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
