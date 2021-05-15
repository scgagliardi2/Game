import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../GlobalConstants';

interface Props {
    direction: string
}

interface State {
}

export default class Player extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        switch (this.props.direction) {

            case 'left':

                return (
                    <View style={
                        [
                            styles.Player,
                            {
                                position: 'absolute',
                                borderLeftWidth: 2
                            }
                        ]}></View> 
                );

            case 'right':

                return (
                    <View style={
                        [
                            styles.Player,
                            {
                                position: 'absolute',
                                borderRightWidth: 2
                            }
                        ]}></View> 
                );

            case 'up':

                return (
                    <View style={
                        [
                            styles.Player,
                            {
                                position: 'absolute',
                                borderTopWidth: 2
                            }
                        ]}></View> 
                );

            case 'down':

                return (
                    <View style={
                        [
                            styles.Player,
                            {
                                position: 'absolute',
                                borderBottomWidth: 2
                            }
                        ]}></View> 
                );
        };
    }
}

const styles = StyleSheet.create({
    Player: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
    }
});
