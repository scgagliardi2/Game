import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../GlobalConstants';

interface Props {
}

interface State {
}

export default class Player extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.Player}>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    Player: {
        padding: 10,
        width: 30,
        backgroundColor: 'red',
        borderRadius: 5
    }
});
