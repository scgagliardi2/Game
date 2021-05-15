import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../GlobalConstants';
import NavButton from '../components/NavButton';

interface Props {
    onNavigate: (screen: string) => any,
}

interface State {
}

export default class NavBar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.NavBar}>
                <NavButton title="Menu" onPress={() => this.props.onNavigate('Menu')}/>
                <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                <NavButton title="World" onPress={() => this.props.onNavigate('World')}/>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    NavBar: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        maxWidth: 600,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }
});
