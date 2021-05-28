import React from 'react';
import {View, StyleSheet} from 'react-native';
import BattleScreen from './screens/BattleScreen';
import Menu from './screens/Menu';
import World, { cellSize, windowWidth } from './world/World';
import InputsContainer from './inputs/InputsContainer';
import { MoveSetType } from './inputs/MoveSet';
import MovementManager from './MovementManager';
import GameState from '../GameState';

interface Props {
}

interface State {
    Content: Screens,
    UpdateKey: number,
    DisplayMenu: boolean,
    TransitionOpacity: number
}

export enum Screens {
    MENU,
    BATTLE,
    WORLD
}

export default class Display extends React.Component<Props, State> {

    MoveInterval: any
    QueuedInterval: any
    MoveManager: MovementManager

    constructor(props: Props) {
        super(props);

        this.MoveInterval = undefined
        this.QueuedInterval = undefined

        this.handleHoldStart = this.handleHoldStart.bind(this);
        this.handleHoldEnd = this.handleHoldEnd.bind(this);
        this.fadeOut = this.fadeOut.bind(this);
        this.fadeIn = this.fadeIn.bind(this);

        this.MoveManager = new MovementManager(this.fadeOut, this.fadeIn, () => {
            this.setState({
                UpdateKey: (this.state.UpdateKey + 1) % 2
            })
        })

        this.state = {
            Content: Screens.WORLD,
            UpdateKey: 1,
            DisplayMenu: true,
            TransitionOpacity: 0
        }
    }

    fadeOut() {
        let transInterval = setInterval(
            () => {
                this.setState({
                    TransitionOpacity: this.state.TransitionOpacity + 0.25
                },
                () => {
                    if (this.state.TransitionOpacity >= 0.99999999){
                        clearInterval(transInterval)
                    }
                })
            },
            50
        )
    }

    fadeIn() {
        var ready = false;

        let transInterval = setInterval(
            () => {
                if (ready) {
                    this.setState({
                        TransitionOpacity: this.state.TransitionOpacity - 0.2
                    },
                    () => {
                        if (this.state.TransitionOpacity <= 0) {
                            clearInterval(transInterval)
                        }
                    })
                }
                else if (this.state.TransitionOpacity >= 0.99999999) {
                    ready = true
                }
            },
            50
        )
    }

    handlePress(button: string) {
        console.log(button)
    }

    changeScreen(screen: Screens) {

        if (this.state.DisplayMenu) {
            this.setState({
                Content: screen,
                DisplayMenu: false
            });
        } else {
            this.setState({
                Content: screen,
                DisplayMenu: true
            });
        }
    }

    handleHoldStart(e: any, direction: MoveSetType) {
        // wipe old queue press
        if (this.QueuedInterval != undefined) {
            clearInterval(this.QueuedInterval)
            this.QueuedInterval = undefined
        }

        // wait for previous move to complete
        this.QueuedInterval = setInterval(
            () => {
                if (this.MoveInterval == undefined) {    
                    clearInterval(this.QueuedInterval)  
                    this.directionPressed(direction)
                    this.QueuedInterval = undefined
                }
            },
            10
        )
    }

    handleHoldEnd(e: any, direction: MoveSetType) {
        this.MoveManager.EndMove = true
    }

    directionPressed(direction: MoveSetType) {
        GameState.Player.Texture.look(direction)

        this.setState({
            UpdateKey: (this.state.UpdateKey + 1) % 2
        })

        this.MoveManager.setReadyToMove()

        this.MoveInterval = setInterval(
            () => { this.moveCycle(direction) },
            100
        )
    }

    moveCycle(direction: MoveSetType) {
        if (this.MoveManager.shouldMove()) {
            this.MoveManager.move(direction)
        }
        else {
            clearInterval(this.MoveInterval)
            this.MoveInterval = undefined
        }
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
                content = (
                    <World 
                        map={GameState.Map} 
                        player={GameState.Player} 
                        transitionOpacity={this.state.TransitionOpacity}
                    />
                )
                break
        };

        return (
            <View style={styles.display}>
                {content}
                <View style={styles.blocker}/>
                <InputsContainer 
                    onTap={() => {}} 
                    onHold={this.handleHoldStart}
                    onHoldEnd={this.handleHoldEnd}
                    displayMenuButton={this.state.DisplayMenu}
                    buttonPressed={this.handlePress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    display: {
        width: windowWidth,
        height: windowWidth * 2,
        backgroundColor: 'rgb(200, 200, 200)',
        overflow: 'hidden'
    },
    blocker: {
        width: windowWidth,
        height: cellSize * 2,
        top: windowWidth,
        backgroundColor: 'rgb(200, 200, 200)'
    }
});
