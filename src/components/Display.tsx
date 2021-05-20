import React from 'react';
import {View, StyleSheet} from 'react-native';
import BattleScreen from './screens/BattleScreen';
import Menu from './screens/Menu';
import World, { cellSize, windowWidth } from './world/World';
import GameMap from './world/GameMap';
import TestingMap from './world/TestingMap';
import InputsContainer from './inputs/InputsContainer';
import { MoveSetType } from './inputs/MoveSet';
import Player from './Player'
import Tileset from './world/tiles/Tileset';

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
            Map: new TestingMap(() => {}),
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
                () => { this.checkMove(direction) },
                100
            )
        }
    }

    HandleHoldEnd(e: any, direction: MoveSetType) {
        this.EndMove = true
    }

    checkMove(direction: MoveSetType) {
        if (!this.EndMove || this.MoveCounter > 0) {
            this.move(direction)
        }
        else {
            clearInterval(this.MoveInterval)
            this.MoveInterval = undefined
        }
    }

    move(direction: MoveSetType) {

        var nextPosition: [number, number] = this.getConvertedNextPosition(direction)

        var nextTile = undefined

        if (this.state.Map.Tiles[nextPosition[0]] != undefined) {
            nextTile = this.state.Map.Tiles[nextPosition[0]][nextPosition[1]]
        }

        if (nextTile != undefined) {
            if (nextTile.willTransition()) {
                this.MoveCounter = 0
                nextTile.callTransition()
            }
            else if (nextTile.canWalkOn()) {
                var position: [number, number] = this.getConvertedPosition(direction)

                var shouldMapMove: boolean = 
                    this.state.Map.canMove(direction) &&
                    ((
                        this.state.Map.isCenteredHorizontally(position[0]) && 
                        (direction == MoveSetType.LEFT || direction == MoveSetType.RIGHT)
                    ) || 
                    (
                        this.state.Map.isCenteredVertically(position[1]) && 
                        (direction == MoveSetType.DOWN || direction == MoveSetType.UP)
                    ))
    
                // only move the map if we can
                if (shouldMapMove) {
                    this.state.Map.move(direction)
                }
                else {
                    this.props.player.Texture.move(direction)
                }
    
                // update the player's tile
                this.props.player.Texture.nextTile()
            
                if (this.MoveCounter == 3 && shouldMapMove) {
                    this.state.Map.resetOffsetsAfterMove(direction)
                }
    
                this.setState({
                    Map: this.state.Map,
                    UpdateKey: (this.state.UpdateKey + 1) % 2
                })
            }
        }

        this.MoveCounter = (this.MoveCounter + 1) % 4
    }

    getConvertedNextPosition(direction: MoveSetType): [number, number] {
        switch (direction) {
            case MoveSetType.DOWN:
                var x: number = Math.floor(this.props.player.Texture.X) + this.state.Map.X
                var y: number = Math.floor(this.props.player.Texture.Y + 1) + this.state.Map.Y
                return [x, y]
            case MoveSetType.RIGHT:
                var x: number = Math.floor(this.props.player.Texture.X + 1) + this.state.Map.X
                var y: number = Math.floor(this.props.player.Texture.Y) + this.state.Map.Y
                return [x, y]
            case MoveSetType.LEFT:
                var x: number = Math.ceil(this.props.player.Texture.X - 1) + this.state.Map.X
                var y: number = Math.ceil(this.props.player.Texture.Y) + this.state.Map.Y
                return [x, y]
            case MoveSetType.UP:
                var x: number = Math.ceil(this.props.player.Texture.X) + this.state.Map.X
                var y: number = Math.ceil(this.props.player.Texture.Y - 1) + this.state.Map.Y
                return [x, y]
        }
    }

    getConvertedPosition(direction: MoveSetType): [number, number] {
        switch (direction) {
            case MoveSetType.DOWN:
            case MoveSetType.RIGHT:
                var x: number = Math.floor(this.props.player.Texture.X) + this.state.Map.X
                var y: number = Math.floor(this.props.player.Texture.Y) + this.state.Map.Y
                return [x, y]
            case MoveSetType.LEFT:
            case MoveSetType.UP:
                var x: number = Math.ceil(this.props.player.Texture.X) + this.state.Map.X
                var y: number = Math.ceil(this.props.player.Texture.Y) + this.state.Map.Y
                return [x, y]
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
