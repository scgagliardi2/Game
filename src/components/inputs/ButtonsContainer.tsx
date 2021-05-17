import React from 'react';
import { View, StyleSheet} from 'react-native';
import GlobalConstants from '../../GlobalConstants';
import A_Button from './A_Button';
import B_Button from './B_Button';

interface Props {
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
                <A_Button/>
                <B_Button/>
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
