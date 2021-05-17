import React from 'react';
import BattleScreen from './components/screens/BattleScreen';
import Menu from './components/screens/Menu';
import Overlay from './Overlay'
import Window from './components/world/Window';
import GameMap from './components/world/GameMap';
import TestingMap from './components/world/TestingMap';
import { MoveSetType } from './assets/characters/MoveSet';

interface Props {
}

interface State {
    Content: Screens,
    Map: GameMap,
    UpdateKey: number
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
            UpdateKey: 1
        }
    }


    handlePress(button: string) {
        console.log(button)
    }

    changeScreen(screen: Screens) {
        this.setState({
            Content: screen,
        });
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
                content = (<Menu onNavigate={this.changeScreen}/>)
                break
            case Screens.BATTLE:
                content = (<BattleScreen onNavigate={this.changeScreen}/>)
                break
            case Screens.WORLD:
                content = (<Window map={this.state.Map}/>)
                break
        };

        return (
            <Overlay
                handleMove={this.move}
                handlePress={this.handlePress}
            >
                {content}
            </Overlay>
        )
    }
}
