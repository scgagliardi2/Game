import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MoveSetType } from './MoveSet';
import Arrow from './Arrow';

interface Props {
    onTap: (direction: MoveSetType) => any,
    onHold: (e: any, direction: MoveSetType) => any,
    onHoldEnd: (e: any, direction: MoveSetType) => any
}

interface State {
}

export default class D_Pad extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            data: null
        }
    }

    render() {
        return (
            <View style={styles.D_Pad}>
                <Arrow direction={MoveSetType.UP} width={200} onTap={this.props.onTap} onHold={this.props.onHold} onHoldEnd={this.props.onHoldEnd}/>
                <Arrow direction={MoveSetType.LEFT} width={100} onTap={this.props.onTap} onHold={this.props.onHold} onHoldEnd={this.props.onHoldEnd}/>
                <Arrow direction={MoveSetType.RIGHT} width={100} onTap={this.props.onTap} onHold={this.props.onHold} onHoldEnd={this.props.onHoldEnd}/>
                <Arrow direction={MoveSetType.DOWN} width={200} onTap={this.props.onTap} onHold={this.props.onHold} onHoldEnd={this.props.onHoldEnd}/>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    D_Pad: {
        width: 200,
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
