import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
}

interface State {
}

export default class Header extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>
                    Poke React Builder
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});
