import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Screens } from '../../Display';

interface Props {
    onNavigate: (screen: Screens) => any,
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