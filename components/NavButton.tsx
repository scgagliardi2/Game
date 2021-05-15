import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../GlobalConstants';

interface Props {
    title: String,
    onPress: () => any,
}

interface State {
}

export default class NavButton extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.navButton}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>    
        );
    }
}

const styles = StyleSheet.create({
    navButton: {
        padding: 10,
        flex: 1,
        height: '90%',
        backgroundColor: GlobalConstants.colors.primary,
        marginBottom: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: GlobalConstants.colors.accent,
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.7,
        shadowRadius: 6,
    },
    title: {
        fontSize: 16,
    }
});
