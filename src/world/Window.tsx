import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import GameMap from './GameMap';

interface Props {
    map: GameMap
}

interface State {
}

export const blocks = 6
const windowWidth = Dimensions.get('window').width * .4;
export const cellSize = windowWidth / blocks

export default class Window extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    renderCell(col: number, image: any) {
        return (
            <View style={styles.cell} key={col}>
                {image}
            </View>
        )
    }

    renderRow(index: number, cells: any[]) {
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

    renderTextures(images: any[][]) {
        var rows = []

        for (let r = 0; r < blocks; r++) {
            var cells: any[] = []

            for (let c = 0; c < blocks; c++) {
                var image = images[r][c]

                if (image == undefined) {
                    cells.push((<View/>))
                }
                else {
                    cells.push(image)
                }
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
        let characterImages = map[1]
        let landscapeImages = map[2]

        return (
            <View>
                {this.renderTextures(baseImages)}
                {this.renderTextures(characterImages)}
                {this.renderTextures(landscapeImages)}
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