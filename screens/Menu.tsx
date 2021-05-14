import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NavButton from '../components/NavButton';

interface Props {
    onNavigate: (screen: string) => any,
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
                <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                <NavButton title='World' onPress={() => this.props.onNavigate('World')}/>
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