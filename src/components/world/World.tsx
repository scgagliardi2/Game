import React from 'react';
import { View, StyleSheet } from 'react-native';
import constants from '../../GlobalConstants'
import { TextureLevel } from './textures/Texture';
import Player from '../Player';
import GameMap from './GameMap';

interface Props {
    map: GameMap,
    player: Player
}

interface State {
}

export const iosAdjustment = 0.5 * (constants.size.windowTiles - 1)
export const windowWidth = constants.size.width > 512 ? 512 : constants.size.width
export const cellSize = windowWidth / constants.size.windowTiles
export const increment = 1 / 4

export default class World extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    renderCell(row: number, col: number, textureLevel: TextureLevel) {
        
        var tile = this.props.map.getTile(col, row, textureLevel)

        if (tile == undefined) {
            return (
                <View style={styles.cell} key={col}/>
            )
        }
        else {
            return (
                <View style={styles.cell} key={col}>
                    {tile.getImage()}
                </View>
            )
        } 
    }

    renderRow(row: number, textureLevel: TextureLevel) {
        var cells = []

        for (let column = 0; column < this.props.map.Width; column++) {
            if (this.props.map.isColVisible(column)){
                cells.push(this.renderCell(row, column, textureLevel))
            }
        }

        return (
            <View style={styles.row} key={row}>
                {cells}
            </View>
        )
    }

    renderTextures(textureLevel: TextureLevel) {
        var rows = []

        for (let r = 0; r < this.props.map.Height; r++) {
            if (this.props.map.isRowVisible(r)) {
                rows.push(this.renderRow(r, textureLevel))
            }
        }

        return (
            <View 
                style={{
                    ...styles.window,
                    ...this.props.map.getStyle(),
                    position: 'absolute',
                    paddingTop: iosAdjustment / 2,
                    paddingLeft: iosAdjustment / 2
                }}
            >
                {rows}
            </View> 
        )
    }

    renderPlayer() {
        var player: Player = this.props.player

        var x = player.Texture.X
        var y = player.Texture.Y

        return (
            <View 
                style={{
                    position: 'absolute',
                    top: y * (cellSize),
                    left: x * (cellSize)
                }} 
            >
                {player.Texture.getTile().getImage()}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.window}>
                {this.renderTextures(TextureLevel.BASE)}
                {this.renderTextures(TextureLevel.LOWLANDSCAPE)}
                {this.renderTextures(TextureLevel.SPRITES)}
                {this.renderPlayer()}
                {this.renderTextures(TextureLevel.HIGHLANDSCAPE)}
                <View style={styles.border}/>
            </View>    
        );
    }
}

export const styles = StyleSheet.create({
    cell: {
        flexDirection: 'column', 
        width: cellSize , 
        height: cellSize,
        // NECESSARY FOR IOS TO NOT HAVE RANDOM WHITE LINES
        marginRight: -0.5,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderRightColor: 'grey',
        borderRightWidth: 1
    },
    row: {
        flexDirection: 'row', 
        width: '100%', 
        height: cellSize,
        // NECESSARY FOR IOS TO NOT HAVE RANDOM WHITE LINES
        marginBottom: -0.5
    },    
    border: {
        width: constants.size.windowTiles * cellSize,
        height: constants.size.windowTiles * cellSize,
        top: 0,
        left: 0,
        position: 'absolute',
        borderColor: 'black',
        // NECESSARY TO COMPENSATE FOR IOS WHITE LINE ISSUE
        borderWidth: 1// cellSize + (iosAdjustment / 2) + 1
    },
    window: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
});