import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import data from '../../../assets/Textures'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import MappedTextureModel from '../../models/MappedTextureModel';
import Constants from '../../Constants';

interface Props {
    width: number,
    height: number,
    textures: MappedTextureModel[]
}

interface State {
}

export default class MapView extends React.Component<Props, State> {

    MainRegionStyle: any    
    MainViewStyle: any

    constructor(props: Props) {
        super(props);

        this.renderTexture = this.renderTexture.bind(this)

        this.MainViewStyle = {
            padding: 1,
            border: "1px solid black",
            borderTopWidth: 2
        }

        this.MainRegionStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: this.props.width * Constants.cellSize + 1, 
            height: this.props.height * Constants.cellSize + 1
        }

        this.state = {
        }
    }

    renderGridRow(row: number) {
        var cols: any[] = []

        for (var c = 0; c < this.props.width; c++) {
            cols.push(<View style={styles.gridCell} key={c}/>)
        }

        return (
            <View style={styles.gridRow} key={row}>
                {cols}
            </View>
        )
    }

    renderMapGrid() {
        var rows = []

        for (var r = 0; r < this.props.height; r++) {
            rows.push(this.renderGridRow(r))
        }

        return (
            <View style={styles.mapGrid}>
                {rows}
            </View>
        )
    }

    renderDropRegion() {
        return (
            <View style={this.MainRegionStyle}>
                <Droppable droppableId={Constants.dndAreas.dropRegion}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={this.MainRegionStyle}
                            {...provided.droppableProps}
                        >                  
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </View>
        )
    }

    renderTexture(texture: MappedTextureModel, index: number) {
        var style = {
            width: Constants.cellSize * texture.width + 'px',
            height: Constants.cellSize * texture.height + 'px',
            left: Constants.cellSize * texture.X + 'px',
            top: Constants.cellSize * texture.Y + 'px',
            position: 'absolute'
        }

        return (
            <Draggable key={index} draggableId={index.toString()} index={index} >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}  
                        {...provided.dragHandleProps}    
                        onMouseDown={(e: any) => {
                            // we want the offset from the click to the top corner of this view
                            var x = e.nativeEvent.offsetX
                            var y = e.nativeEvent.offsetY

                            Constants.imagePosition = {
                                x: x,
                                y: y
                            }

                            Constants.isDraging = true
                        }} 
                    >      
                        <View>
                            <Image source={texture.source} style={style} key={index}/>
                        </View>
                    </div>
                )}
            </Draggable>
        )
    }

    renderTextureRegion() {
        return (
            <View style={this.MainRegionStyle}>
                <Droppable droppableId={Constants.dndAreas.map} isDropDisabled={true}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={this.MainRegionStyle}
                            {...provided.droppableProps}
                            onMouseUp={(e: any) => {
                                // we want the offset from the click to the top corner of this view
                                var x = e.nativeEvent.offsetX
                                var y = e.nativeEvent.offsetY

                                Constants.mouseReleasePosition = {
                                    x: x,
                                    y: y
                                }

                                Constants.isDraging = false
                            }}
                        >                
                            {this.props.textures.map(this.renderTexture)}  
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </View>
        )
    }

    render() {
        return (
            <View style={this.MainViewStyle}>
                {this.renderDropRegion()}
                {this.renderMapGrid()}
                {this.renderTextureRegion()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapGrid: {
        flexDirection: 'column'
    },
    gridRow: {
        width: '100%',
        flexDirection: 'row'
    },
    gridCell: {
        height: Constants.cellSize + 'px',
        width: Constants.cellSize + 'px',
        outlineColor: "rgba(0, 0, 0, 0.3)",
        outlineStyle: "solid",
        outlineWidth: 1,
    }
});
