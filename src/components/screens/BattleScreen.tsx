import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
}

interface State {
}

export default class BattleScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.screen}>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightblue'
    },
});