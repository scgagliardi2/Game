import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Texture from './textures/Texture'
import Character from './textures/characters/Character';
import TallGrass1 from './textures/ground/TallGrass1';
import CharacterLayer from './CharacterLayer';

interface Props {
    textures: Texture[],
    characters: Character[]
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

    renderBaseTextures() {
        var rows = []

        for (let r = 0; r < blocks; r++) {
            var cells: any[] = []

            for (let c = 0; c < blocks; c++) {
                cells.push(this.props.textures[r * blocks + c].getImage())
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
        return (
            <View>
                {this.renderBaseTextures()}
                <CharacterLayer
                    characters={this.props.characters}
                />
                <View style={styles.window}>
                    <View style={styles.row} key={0}>
                        <View style={styles.cell} key={0}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={1}>
                  
                        </View>
                        <View style={styles.cell} key={2}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={3}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={4}>
                            {new TallGrass1().getImage()}
                        </View>
                        <View style={styles.cell} key={5}>
                            {new TallGrass1().getImage()}
                        </View>
                    </View>
                </View> 
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