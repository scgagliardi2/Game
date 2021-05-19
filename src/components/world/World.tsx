import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameMap from './GameMap';
import constants from '../../GlobalConstants'
import { TextureLevel } from './textures/Texture';

interface Props {
    map: GameMap
}

interface State {
}

export const windowWidth = constants.size.width > 512 ? 512 : constants.size.width
export const cellSize = windowWidth / constants.size.windowTiles

export default class World extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    renderCell(row: number, col: number, textureLevel: TextureLevel) {
        
        if (this.props.map.Tiles[col] == undefined || this.props.map.Tiles[col][row] == undefined) {
            return (
                <View style={styles.cell} key={col}/>
            )
        }

        var tile = this.props.map.Tiles[col][row].Tiles.get(textureLevel)

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
            <View style={styles.window}>
                {rows}
            </View> 
        )
    }

    render() {
        return (
            <View>
                <View 
                    style={{
                        top: this.props.map.OffsetY * cellSize,
                        left: this.props.map.OffsetX * cellSize
                    }}
                >
                    {this.renderTextures(TextureLevel.BASE)}
                    {this.renderTextures(TextureLevel.LOWLANDSCAPE)}
                    {this.renderTextures(TextureLevel.SPRITES)}
                    {this.renderTextures(TextureLevel.HIGHLANDSCAPE)}
                </View>
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
        marginRight: -0.5
    },
    row: {
        flexDirection: 'row', 
        width: windowWidth, 
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
        borderWidth: cellSize + (constants.size.windowTiles / 2)
    },
    window: {
        width: windowWidth,
        height: windowWidth,
        position: 'absolute'
    }
});