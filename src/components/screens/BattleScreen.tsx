import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
    onNavigate: (screen: string) => any,
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
        flex: 1,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});