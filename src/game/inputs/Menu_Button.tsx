import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../../GlobalConstants';

interface Props {
    pressed: (button: string) => any
}

interface State {
}

export default class MenuButton extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
        
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.MenuButton}
                onPress={() => this.props.pressed('Menu')}
            >
                <Text style={styles.Letter}>
                    Menu
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    MenuButton: {
        width: 50,
        height: 30,
        borderRadius:10,
        borderWidth: .5,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: GlobalConstants.colors.accent,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        opacity: .4,
        backgroundColor: 'white'
    },
    Letter: {
        fontWeight: 'bold',
        fontSize: 10
    }
});
