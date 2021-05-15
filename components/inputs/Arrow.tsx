import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../../GlobalConstants';

interface Props {
    direction: string,
    width: number,
    arrowPress: (direction: string) => any,
    arrowLongPress: (direction: string) => any,
}

interface State {
    direction: string
}

export default class Arrow extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        var dir = '';

        switch (this.props.direction) {
            case '^':
                dir = 'up';
                break;
            case 'v':
                dir = 'down';
                break;
            case '<':
                dir = 'left';
                break;
            case '>':
                dir = 'right';
                break;
        }

        this.state = {
            direction: dir
        }
    }

    render() {
        return (
            <View style={{width: this.props.width, alignItems: 'center'}}>
                <TouchableOpacity 
                    style={styles.Arrow}
                    delayLongPress={35}
                    onPress={() => this.props.arrowPress(this.state.direction)}
                    onLongPress={() => this.props.arrowLongPress(this.state.direction)}
                >
                    <Text style={styles.Letter}>
                        {this.props.direction}
                    </Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Arrow: {
        flex: 1,
        width: 60,
        margin: 5,
        borderRadius: 8,
        borderWidth: .5,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: GlobalConstants.colors.accent,
        shadowOffset: {width: 1, height: 1},
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
