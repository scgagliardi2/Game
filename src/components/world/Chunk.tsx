import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../../GlobalConstants';

interface Props {
    map_coordinates: [number, number]
}

interface State {
    neighbors: []
}

export default class Chunk extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            neighbors: []
        }
    }

    render() {

        return (
            <View style={
                [
                    styles.Chunk,
                    {
                        position: 'absolute',
                        top: this.props.map_coordinates[0],
                        left: this.props.map_coordinates[1]
                    }
                ]
            }>
            </View> 
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
