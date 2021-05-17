import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Screens } from '../../Display';

interface Props {
    onNavigate: (screen: Screens) => any,
}

interface State {
}

export default class Menu extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text>Menu</Text>
            </View>
        );  
    }
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightred'
    }
});