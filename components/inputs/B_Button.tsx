import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../../GlobalConstants';

interface Props {
}

interface State {
}

export default class B_Button extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
        
    }

    onPress = () => {
        console.log('b pressed');
    };

    render() {
        return (
            <TouchableOpacity 
                style={styles.B_Button}
                onPress={this.onPress}
            >
                <Text style={styles.Letter}>
                    B
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    B_Button: {
        width: 60,
        height: 60,
        borderRadius:30,
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
        fontSize: 20
    }
});
