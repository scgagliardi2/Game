import React from 'react';
import {View, StyleSheet} from 'react-native';
import Palyer from '../components/Player';
import NavButton from '../components/NavButton';
import Player from '../components/Player';

interface Props {
    onNavigate: (screen: string) => any,
}

interface State {
}

export default class World extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.world}>
                <Player/>
                <NavButton title="Menu" onPress={() => this.props.onNavigate('Menu')}/>
                <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    world: {
        position: 'absolute',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});