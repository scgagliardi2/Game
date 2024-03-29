import React from 'react';
import { View, StyleSheet} from 'react-native';
import A_Button from './A_Button';
import B_Button from './B_Button';

interface Props {
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

    render() {
        return (
            <View style={styles.InputsContainer}>
                <A_Button pressed={this.props.buttonPressed}/>
                <B_Button pressed={this.props.buttonPressed}/>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    InputsContainer: {
        width: 120,
        justifyContent: 'space-evenly'
    }
});
