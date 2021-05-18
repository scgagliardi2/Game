import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameMap from './GameMap';
import constants from '../../GlobalConstants'
import { TextureLevel } from '../../assets/Texture';

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
        var tile = this.props.map.Tiles[col][row].Tiles.get(textureLevel)

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

        for (let column = 0; column < this.props.map.Width; column++) {
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

        for (let r = 0; r < this.props.map.Height; r++) {
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
            <View >
                {this.renderTextures(TextureLevel.BASE)}
                {this.renderTextures(TextureLevel.LOWLANDSCAPE)}
                {this.renderTextures(TextureLevel.SPRITES)}
                {this.renderTextures(TextureLevel.HIGHLANDSCAPE)}
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
        borderBottomWidth: 1,
        borderRightWidth: 1
    },
    row: {
        flexDirection: 'row', 
        width: '100%', 
        height: cellSize
    },
    window: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
});