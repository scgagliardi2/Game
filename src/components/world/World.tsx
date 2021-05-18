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

export default class World extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    renderCell(row: number, col: number, textureLevel: TextureLevel) {
        
        if (this.props.map.Tiles[col] == undefined || this.props.map.Tiles[col][row] == undefined) {
            return (
                <View style={styles.cell} key={col}>
                    <View/>
                </View>
            )
        }

        var tile = this.props.map.getPlayerAdjustedTile(col, row, textureLevel)

        return (
            <View style={styles.cell} key={col}>
                {tile == undefined ? 
                    (<View/>)
                    :
                    tile.getImage()
                }
            </View>
        )
    }

    renderRow(row: number, textureLevel: TextureLevel) {
        var cells = []

        for (let column = 0; column < constants.size.windowTiles; column++) {
            cells.push(this.renderCell(row, column, textureLevel))
        }

        return (
            <View style={styles.row} key={row}>
                {cells}
            </View>
        )
    }

    renderTextures(textureLevel: TextureLevel) {
        var rows = []

        for (let r = 0; r < constants.size.windowTiles; r++) {
            rows.push(this.renderRow(r, textureLevel))
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
                        top: `${this.props.map.OffsetY}px`,
                        left: `${this.props.map.OffsetX}px`
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


export const windowWidth = constants.size.width > 512 ? 512 : constants.size.width * 1
export const cellSize = windowWidth / constants.size.cellCountWidth

export const styles = StyleSheet.create({
    cell: {
        flexDirection: 'column', 
        width: cellSize, 
        height: cellSize,
        borderBottomColor: 'grey',
        borderRightColor: 'grey',
        borderBottomWidth: 0,
        borderRightWidth: 0
    },
    row: {
        flexDirection: 'row', 
        width: '100%', 
        height: cellSize
    },
    border: {
        width: `${(constants.size.windowTiles) * cellSize}px`,
        height: `${(constants.size.windowTiles) * cellSize}px`,
        top: `0px`,
        left: `0px`,
        position: 'absolute',
        borderColor: 'black',
        borderWidth: cellSize
    },
    window: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
});