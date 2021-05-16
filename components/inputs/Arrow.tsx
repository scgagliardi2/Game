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
}

export default class Arrow extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        switch (this.props.direction) {
            case 'up' :
                return (
                <View style={{width: this.props.width, alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={styles.Arrow}
                        delayLongPress={35}
                        onPress={() => this.props.arrowPress(this.props.direction)}
                        onLongPress={() => this.props.arrowLongPress(this.props.direction)}
                    >
                        <View style={styles.up}></View>
                    </TouchableOpacity> 
                </View>
                )
            case 'down' :
                return (
                <View style={{width: this.props.width, alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={styles.Arrow}
                        delayLongPress={35}
                        onPress={() => this.props.arrowPress(this.props.direction)}
                        onLongPress={() => this.props.arrowLongPress(this.props.direction)}
                    >
                        <View style={styles.down}></View>
                    </TouchableOpacity> 
                </View>
                )
            case 'left' :
                return (
                <View style={{width: this.props.width, alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={styles.Arrow}
                        delayLongPress={35}
                        onPress={() => this.props.arrowPress(this.props.direction)}
                        onLongPress={() => this.props.arrowLongPress(this.props.direction)}
                    >
                        <View style={styles.left}></View>
                    </TouchableOpacity> 
                </View>
                )
            case 'right' :
                return (
                <View style={{width: this.props.width, alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={styles.Arrow}
                        delayLongPress={35}
                        onPress={() => this.props.arrowPress(this.props.direction)}
                        onLongPress={() => this.props.arrowLongPress(this.props.direction)}
                    >
                        <View style={styles.right}></View>
                    </TouchableOpacity> 
                </View>
                )
        }
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
    up: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
    },
    down: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
        transform: [{rotate: '180deg'}]
    },
    left: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
        transform: [{rotate: '270deg'}]
    },
    right: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
        transform: [{rotate: '90deg'}]
    },
});
