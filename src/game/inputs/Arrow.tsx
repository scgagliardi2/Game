import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../GlobalConstants';
import { MoveSetType } from './MoveSet';

interface Props {
    direction: MoveSetType,
    width: number,
    onTap: (direction: MoveSetType) => any,
    onHold: (e: any, direction: MoveSetType) => any,
    onHoldEnd: (e: any, direction: MoveSetType) => any
}

interface State {
}

export default class Arrow extends React.Component<Props, State> {

    Timer: number
    WalkTimer: any
    EndInterval: boolean

    constructor(props: Props) {
        super(props);

        this.Timer = 0
        this.WalkTimer = undefined
        this.EndInterval = false

        this.state = {
        }
    }

    render() {
        var style: any

        switch (this.props.direction) {
            case MoveSetType.UP:
                style = styles.up
                break
            case MoveSetType.DOWN:
                style = styles.down
                break
            case MoveSetType.LEFT:
                style = styles.left
                break
            case MoveSetType.RIGHT:
                style = styles.right
                break
        }

        return (
            <View style={{width: this.props.width, alignItems: 'center'}}>
                <TouchableOpacity 
                    style={styles.Arrow}
                    delayLongPress={35}
                    onPress={() => { this.props.onTap(this.props.direction)}}
                    onPressIn={(e: any) => { this.props.onHold(e, this.props.direction) }}
                    onPressOut={(e: any) => { this.props.onHoldEnd(e, this.props.direction) }}
                >
                    <View style={style}></View>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Arrow: {
        width: 50,
        height: 30,
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
