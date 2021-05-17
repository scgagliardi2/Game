import React from 'react';
import {View, StyleSheet} from 'react-native';
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
            </View>
        );  
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    column: {
        margin: 2,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});