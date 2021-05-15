import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../../GlobalConstants';

interface Props {
    xpos: number,
    ypos: number,
    neighbors: []
}

interface State {
}

export default class Chunk extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <View style={
                [
                    styles.Chunk,
                    {
                        position: 'absolute',
                        top: this.props.ypos,
                        left: this.props.xpos
                    }
                ]
            }></View> 
        );
    }
}

const styles = StyleSheet.create({
    Chunk: {
        width: 500,
        height: 500,
        backgroundColor: 'pink',
        borderWidth: 2
    }
});
