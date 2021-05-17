import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import GameMap from './GameMap';
import Tile from '../../assets/textures/Tile';

interface Props {
    map: GameMap
}

interface State {
}

export const blocks = 12
const windowWidth = Dimensions.get('window').width * .4;
export const cellSize = windowWidth / blocks

export default class Window extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    renderCell(col: number, tile: Tile) {
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

    renderRow(index: number, cells: Tile[]) {
        var cellViews = []

        for (let i = 0; i < blocks; i++) {
            cellViews.push(this.renderCell(i, cells[i]))
        }

        return (
            <View style={styles.row} key={index}>
                {cellViews}
            </View>
        )
    }

    renderTextures(images: Tile[][]) {
        var rows = []

        for (let r = 0; r < blocks; r++) {
            var cells: Tile[] = []

            for (let c = 0; c < blocks; c++) {
                cells.push(images[r][c])
            }

            rows.push(this.renderRow(r, cells))
        }

        return (
            <View style={styles.window}>
                {rows}
            </View> 
        )
    }

    render() {
        let map = this.props.map.buildMap()

        let baseImages = map[0]
        let lowLandscapeImages = map[1]
        let characterImages = map[2]
        let highLandscapeImages = map[3]

        return (
            <View>
                {this.renderTextures(baseImages)}
                {this.renderTextures(lowLandscapeImages)}
                {this.renderTextures(characterImages)}
                {this.renderTextures(highLandscapeImages)}
            </View>

        );
    }
}

export const styles = StyleSheet.create({
    cell: {
        flex: 1, 
        flexDirection: 'column', 
        width: cellSize, 
        height: cellSize,
        borderBottomColor: 'grey',
        borderRightColor: 'grey',
        borderBottomWidth: 1,
        borderRightWidth: 1
    },
    row: {
        flex: 1, 
        flexDirection: 'row', 
        width: windowWidth, 
        height: cellSize
    },
    window: {
        width: windowWidth, 
        height: windowWidth,
        position: 'absolute'
    }
});