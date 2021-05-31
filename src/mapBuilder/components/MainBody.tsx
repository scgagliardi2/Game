import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { StyleSheet, Text, View } from 'react-native';
import Constants from '../Constants';
import Data from '../../assets/Textures'
import MappedTextureModel from '../models/MappedTextureModel';
import TextureModel from '../../assets/TextureModel';
import MapView from './body/MapView';
import TextureList from './body/TextureList';

interface Props {
}

interface State {
    Textures: MappedTextureModel[]
}

export default class MainBody extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this)

        this.state = {
            Textures: []
        }
    }

    onDragEnd(info: any) {
        var destination = info.destination == undefined ? Constants.dndAreas.dropRegion : info.destination.droppableId

        // we only care about things dropped on the map
        if (destination == Constants.dndAreas.dropRegion) {
            var source = info.source.droppableId

            // get initial x,y. We will convert them depending on where the image is from
            var x = Math.round((Constants.mouseReleasePosition.x - Constants.imagePosition.x) / Constants.cellSize)
            var y = Math.round((Constants.mouseReleasePosition.y - Constants.imagePosition.y) / Constants.cellSize)

            // the texture we will add/update
            var texture: MappedTextureModel

            var textures = this.state.Textures

            if (source != Constants.dndAreas.dropRegion && source != Constants.dndAreas.map) {
                // if this is from a texture list (not already placed)
                // create a new texture to be placed on the map

                // get the corresponding model from the stored map
                var textureModel: TextureModel = Data.textures.get(info.draggableId)!

                // add in the extra information
                texture = {
                    X: x,
                    Y: y,
                    ...textureModel
                }

                // append the new texture
                textures.push(texture)
            }
            else {
                // this is trigger when we move an existing texture

                // get the existing texture and update the position
                texture = textures[info.source.index]

                texture.X = x
                texture.Y = y
            }

            this.setState({
                Textures: textures
            })
        }
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <View style={styles.body} >
                    <View style={styles.row}>
                        <View style={{width: '25%'}}/>
                        <MapView width={20} height={10} textures={this.state.Textures}/>
                    </View> 
                    <View style={styles.row}>
                        <View style={{width: '25%'}}/>
                        <TextureList/>
                    </View>
                </View>
            </DragDropContext>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    }
});
