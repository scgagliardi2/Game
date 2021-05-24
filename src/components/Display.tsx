import React from 'react';
import {View, StyleSheet} from 'react-native';
import BattleScreen from './screens/BattleScreen';
import Menu from './screens/Menu';
import World, { cellSize, windowWidth } from './world/World';
import TestingMap from './world/TestingMap';
import InputsContainer from './inputs/InputsContainer';
import { MoveSetType } from './inputs/MoveSet';
import Player from './Player'
import GameMap from './world/GameMap';
import constants from '../GlobalConstants'

interface Props {
    player: Player
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

    MoveInterval: any
    MoveCounter: number
    EndMove: boolean

    constructor(props: Props) {
        super(props);

        this.MoveInterval = undefined
        this.MoveCounter = 0
        this.EndMove = false

        this.handleHoldStart = this.handleHoldStart.bind(this);
        this.HandleHoldEnd = this.HandleHoldEnd.bind(this);

        this.state = {
            Content: Screens.WORLD,
            Map: new TestingMap(
                (mapX: number, mapY: number) => {
                    this.props.player.Texture.X = Math.floor(constants.size.windowTiles / 2)
                    this.props.player.Texture.Y = Math.floor(constants.size.windowTiles / 2)

                    this.state.Map.Top = mapY - constants.size.windowTiles + 1
                    this.state.Map.Left = mapX - constants.size.windowTiles + 1

                    this.setState({
                        Map: this.state.Map,
                        UpdateKey: (this.state.UpdateKey + 1) % 2
                    })
                }
            ),
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

    handleHoldStart(e: any, direction: MoveSetType) {
        // only do stuff when the previous interval is wiped
        if (this.MoveInterval == undefined) {      
            this.props.player.Texture.look(direction)

            this.setState({
                Map: this.state.Map,
                UpdateKey: (this.state.UpdateKey + 1) % 2
            })

            this.EndMove = false
            this.MoveCounter = 0

            this.MoveInterval = setInterval(
                () => { this.moveCycle(direction) },
                100
            )
        }
    }

    HandleHoldEnd(e: any, direction: MoveSetType) {
        this.EndMove = true
    }

    moveCycle(direction: MoveSetType) {

        if (!this.EndMove || this.MoveCounter > 0) {
            this.move(direction)
        }
        else {
            clearInterval(this.MoveInterval)
            this.MoveCounter = 0
            this.MoveInterval = undefined
        }
    }

    move(direction: MoveSetType) {

        // get the player's position in map coordinates
        var currentTilePosition: [number, number] = this.state.Map.getConvertedPosition(
            this.props.player.Texture.X, this.props.player.Texture.Y
        )

        // check if there is a walk off transition at the players current location
        var walkOffTransition = this.state.Map.getTransition(
            currentTilePosition[0], currentTilePosition[1], direction, false
        )

        // if a transition is triggered when the player leaves this tile
        if (walkOffTransition != undefined) {
            walkOffTransition.Callback()
        }
        else {
            // get the next tile position in map coordinates
            var nextTilePosition: [number, number] = this.state.Map.getConvertedNextPosition(
                this.props.player.Texture.X, this.props.player.Texture.Y, direction
            )

            // check if there is a walk on transition at the next location
            var walkOnTransition = this.state.Map.getTransition(
                nextTilePosition[0], nextTilePosition[1], direction, true
            )

            // if a transition is triggered when the player walks on the next tile
            // only trigger right before the player lands
            if (walkOnTransition != undefined && this.MoveCounter == 3) {
                walkOnTransition!.Callback()
            }

            // check if the player can walk on the next tile
            var canMoveToTile: boolean = this.state.Map.isWalkable(nextTilePosition[0], nextTilePosition[1])

            if (canMoveToTile) {
                // check if the map can move
                var shouldMapMove: boolean = this.state.Map.canMove(direction, this.props.player)

                // move either the map or the player, never both
                if (shouldMapMove) {
                    this.state.Map.move(direction)
                }
                else {
                    this.props.player.Texture.move(direction)
                }

                // update the player's tile
                this.props.player.Texture.nextTile()
            
                // update the state to trigger a refresh
                this.setState({
                    Map: this.state.Map,
                    UpdateKey: (this.state.UpdateKey + 1) % 2
                })
            } 
        }

        this.MoveCounter = (this.MoveCounter + 1) % 4
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
                content = (<World map={this.state.Map} player={this.props.player}/>)
                break
        };

        return (
            <View style={styles.display}>
                {content}
                <View style={styles.blocker}/>
                <InputsContainer 
                    onTap={() => {}} 
                    onHold={this.handleHoldStart}
                    onHoldEnd={this.HandleHoldEnd}
                    displayMenuButton={this.state.displayMenu}
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
