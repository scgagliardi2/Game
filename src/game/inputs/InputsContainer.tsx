import React from 'react';
import { View, StyleSheet} from 'react-native';
import { MoveSetType } from './MoveSet';
import ButtonsContainer from './ButtonsContainer';
import D_Pad from './D_Pad';
import MenuButton from './Menu_Button';

interface Props {
    onTap: (direction: MoveSetType) => any,
    onHold: (e: any, direction: MoveSetType) => any,
    onHoldEnd: (e: any, direction: MoveSetType) => any,
    displayMenuButton: boolean,
    buttonPressed: (button: string) => any
}

interface State {
}

export default class InputsContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }
    
    render() {
            if (this.props.displayMenuButton) {
                return (
                    <View style={styles.InputsContainer}>
                        <D_Pad onTap={this.props.onTap} onHold={this.props.onHold} onHoldEnd={this.props.onHoldEnd}/>
                        <View style={styles.lockMenu}>
                            <MenuButton pressed={this.props.buttonPressed}/>
                        </View>
                        <ButtonsContainer buttonPressed={this.props.buttonPressed}/>
                    </View>  
                )
            } else {
                return (
                    <View style={styles.InputsContainer}>
                        <D_Pad onTap={this.props.onTap} onHold={this.props.onHold} onHoldEnd={this.props.onHoldEnd}/>
                        <ButtonsContainer buttonPressed={this.props.buttonPressed}/>
                    </View>  
                ) 
            }
        
    }
}

const styles = StyleSheet.create({
    InputsContainer: {
        width: '100%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0
    },
    lockMenu: {
        position: 'absolute',
        bottom: 30,
        left: '45%'
    }
});
