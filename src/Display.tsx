import React from 'react';
import {View, StyleSheet} from 'react-native';
import BattleScreen from './components/screens/BattleScreen';
import Menu from './components/screens/Menu';
import World from './components/world/World';
import GameMap from './components/world/GameMap';
import TestingMap from './components/world/TestingMap';
import constants from './GlobalConstants';
import InputsContainer from './components/inputs/InputsContainer';
import { MoveSetType } from './components/world/textures/MoveSet';

interface Props {
}

interface State {
    Content: Screens,
    Map: GameMap,
    UpdateKey: number,
    displayMenu: boolean
}

export enum Screens {
    MENU,
    BATTLE,
    WORLD
}

export default class Display extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
        this.move = this.move.bind(this);

        // TODO - temp for testing
        let trans = () => {
            setTimeout(() => {
                this.setState({
                    Map: new TestingMap(trans)
                })
            },
            500)
        }

        this.state = {
            Content: Screens.WORLD,
            Map: new TestingMap(trans),
            UpdateKey: 1,
            displayMenu: true
        }
    }


    handlePress(button: string) {
        console.log(button)
    }

    changeScreen(screen: Screens) {

        if (this.state.displayMenu) {
            this.setState({
                Content: screen,
                displayMenu: false
            });
        } else {
            this.setState({
                Content: screen,
                displayMenu: true
            });
        }
    }

    move(direction: MoveSetType, tap: boolean) {
        let update = () => {
            this.setState({
                Map: this.state.Map,
                UpdateKey: (this.state.UpdateKey + 1) % 2
            })
        }

        this.state.Map.handleMove(direction, tap, update)
    }

    render() {
        var content: any

        switch (this.state.Content) {
            case Screens.MENU:
                content = (<Menu onNavigate={this.changeScreen}/>);
                break
            case Screens.BATTLE:
                content = (<BattleScreen onNavigate={this.changeScreen}/>)
                break
            case Screens.WORLD:
                content = (<World map={this.state.Map}/>)
                break
        };

        return (
            <View style={styles.display}>
                {content}
                <InputsContainer 
                    inputDpadTap={this.move} 
                    inputDpadLongPress={this.move}
                    displayMenuButton={this.state.displayMenu}
                    buttonPressed={this.handlePress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    display: {
        width: constants.size.width,
        maxWidth: constants.size.cellCountWidth*50,
        height: constants.size.height,
        maxHeight: constants.size.cellCountHeight*50,
        backgroundColor: 'rgb(200, 200, 200)'
    }
});
