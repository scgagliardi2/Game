import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import data from '../assets/textures'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TextureLoc from './TextureLoc';
import MapView from './MapView';

interface Props {
}

interface State {
    Textures: TextureLoc[]
}

const size = 25

export default class Builder extends React.Component<Props, State> {
    LatestX: number
    LatestY: number

    ImageX: number
    ImageY: number

    Scrolled: number

    IsNew: boolean
    IsMoving :boolean

    constructor(props: Props) {
        super(props);

        this.LatestX = 0
        this.LatestY = 0

        this.ImageX = 0
        this.ImageY = 0

        this.Scrolled = 0

        this.IsNew = true
        this.IsMoving = true

        this.onDragEnd = this.onDragEnd.bind(this)

        this.state = {
            Textures: []
        }
    }

    onDragEnd(info: any) {
        var x = (this.LatestX - this.ImageX) / size
        var y = (this.LatestY - this.ImageY) / size

        console.log(this.ImageY)

        if (info.destination == undefined) {
            // this is trigger when we move an existing texture so we just want to update the position
            x = x > 0 ? Math.floor(x) : Math.ceil(x)
            y = y > 0 ? Math.floor(y) : Math.ceil(y)

            var textures = this.state.Textures

            textures[info.source.index].X += x
            textures[info.source.index].Y += y

            this.setState({
                Textures: textures
            })
        }
        else if (info.destination.droppableId == "dropRegion") {
            if (info.source.droppableId == 'building') {
                x = Math.ceil(x)
                y = Math.ceil(y)

                var texture = data.textures.get(info.draggableId)!

                var textures = this.state.Textures

                textures.push(
                    new TextureLoc(x, y, texture.width, texture.height, texture.source)
                )

                this.setState({
                    Textures: textures
                })
            }

            if (info.source.droppableId == 'textures') {
                x = x > 0 ? Math.floor(x) : Math.ceil(x)
                y = y > 0 ? Math.floor(y) : Math.ceil(y)

               var textures = this.state.Textures

                textures[info.source.index].X += x
                textures[info.source.index].Y += y

                this.setState({
                    Textures: textures
                })
            }
        }
    }

    renderImage(texture: any, index: number) {
        return (
            <Draggable key={texture.name} draggableId={texture.name} index={index} >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}  
                        {...provided.dragHandleProps}     
                    >
                        <View 
                            style={styles.image}
                            onStartShouldSetResponder={(evt) => true}
                            onResponderStart={(e: any) => { 
                                this.ImageX = e.nativeEvent.pageX - e.currentTarget.offsetLeft + (size / 2) + 300
                                this.ImageY = e.nativeEvent.pageY - e.currentTarget.offsetTop + (size / 2) + this.Scrolled
                                this.IsNew = true
                                this.IsMoving = true
                            }}
                        >
                            <Image source={texture.source} style={{
                                width: (size * texture.width) + 'px',
                                height: (size * texture.height) + 'px',
                                resizeMode: 'center'
                            }}/>
                        </View>
                    </div>
                )}
            </Draggable>
        )
    }

    renderTextureList(data: any[], type: string) {
        return (
            <Droppable droppableId={type} isDropDisabled={true}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{ }}
                        {...provided.droppableProps}
                    >
                        <View 
                            style={styles.textureList}
                            onScroll={(event: any) => { 
                                this.Scrolled = event.nativeEvent.target.scrollTop
                            }}
                        >
                            {data.map((item, index) => {
                                return (this.renderImage(item, index))
                            })}
                        </View>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }

    renderTextureLists() {
        var buildings: any[] = []
        var landscapes = []

        data.textures.forEach((texture, index) => {
            if (texture.type == 'building') {
                buildings.push(texture)
            }
            else if (texture.type.toLowerCase() == 'landscape') {
                landscapes.push(texture)
            }
        })

        return (
            <View style={styles.testureLists}>
                {this.renderTextureList(buildings, "building")}
                {/* {this.renderTextureList(landscapes, "landscape")} */}
            </View>
        )
    }

    render() {
        return (
            <View 
                style={{flexDirection: 'row'}}
                onMoveShouldSetResponder={(evt) => true}
                onResponderRelease={(e: any) => { 
                    this.LatestX = e.nativeEvent.pageX
                    this.LatestY = e.nativeEvent.pageY

                    this.IsMoving = false
                }}
            >
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <MapView 
                        textures={this.state.Textures}
                        setLatestImageCoords={(x: number, y: number) => {
                            this.ImageX = x
                            this.ImageY = y
                            this.IsNew = false
                            this.IsMoving = true
                        }}
                    />
                    {this.renderTextureLists()}
                </DragDropContext>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    testureLists: {

    },
    textureList: {
        padding: 2,
        height: '500px',
        overflowY: 'scroll'
    },
    image: {
        marginBottom: '5px'
    }
});
