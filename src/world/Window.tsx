import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Texture from './Texture'
import TallGrass1 from './textures/TallGrass1';

interface Props {
    textures: Texture[]
}

interface State {
}

const blocks = 6
const windowWidth = Dimensions.get('window').width * .4;
const cellSize = windowWidth / blocks

export default class Window extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    renderCell(row: number, col: number) {
        return (
            <View style={styles.cell} key={col}>
                {this.props.textures[row * blocks + col].getImage()}
            </View>
        )
    }

    renderRow(index: number) {
        var cells = []

        for (let i = 0; i < blocks; i++) {
            cells.push(this.renderCell(index, i))
        }

        return (
            <View style={styles.row} key={index}>
                {cells}
            </View>
        )
    }

    render() {

        var rows = []

        for (let i = 0; i < blocks; i++) {
            rows.push(this.renderRow(i))
        }

        return (
            <View>
                <View style={styles.window}>
                    {rows}
                </View> 
                <View style={styles.window}>
                    <View style={styles.row} key={0}>
                        <View style={styles.cell} key={0}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={0}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={0}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={0}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={0}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={0}>
                            {new TallGrass1().getImage()}
                        </View>
                    </View>
                </View> 
            </View>

        );
    }
}

const styles = StyleSheet.create({
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