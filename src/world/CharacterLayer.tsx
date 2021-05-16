import React from 'react';
import { View, Image } from 'react-native';
import Character from './textures/characters/Character';
import { blocks, styles } from './Window'

interface Props {
    characters: Character[]
}

interface State {
}

export default class CharacterLayer extends React.Component<Props, State> {

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

    render() {
        var images = []
        var rows = []

        for (let r = 0; r < blocks; r++) {
            for (let c = 0; c < blocks; c++) {
                images.push((<View/>))
            }
        }

        for (let c = 0; c < this.props.characters.length; c++) {
            var p: Character = this.props.characters[c]

            images[p.Ypos * blocks + p.Xpos] = (
                <Image
                    {...p.getImageProps()}
                />
            )
        }

        for (let r = 0; r < blocks; r++) {
            var cells: any[] = []

            for (let c = 0; c < blocks; c++) {
                cells.push(images[r * blocks + c])
            }

            rows.push(this.renderRow(r, cells))
        }

        return (
            <View style={styles.window}>
                {rows}
            </View> 
        )
    }
}
