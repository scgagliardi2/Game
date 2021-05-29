import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import data from '../assets/textures'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TextureLoc from './TextureLoc';

interface Props {
}

interface State {
    Textures: TextureLoc[]
}

const size = 20

export default class Builder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this)

    this.state = {
        Textures: []
    }
  }

  onBeforeCapture() {

  };

  onBeforeDragStart() {

  };

  onDragStart() {

  }

  onDragUpdate() {

  }

  onDragEnd(info: any) {
    if (info.destination != undefined && info.destination.droppableId == "temp") {
        var texture = data.textures.get(info.draggableId)!

        var textures = this.state.Textures

        textures.push(
            new TextureLoc(1, 1, texture.width, texture.height, texture.source)
        )

        this.setState({
            Textures: textures
        })
    }
  };


  renderImage(item: any, index: number) {
    return (
        <Draggable key={item.name} draggableId={item.name} index={index} >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}  
                    {...provided.dragHandleProps}     
                >
                    <Image source={item.source} style={styles.image}/>
                </div>
            )}
        </Draggable>
    )
  }

  renderTextureList(data: any[], type: string) {
      return (
        <Droppable droppableId={type} type={""}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : '' }}
                    {...provided.droppableProps}
                >
                    <View style={styles.textureList}>
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

    data.textures.forEach((texture) => {
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

  renderTexture(texture: TextureLoc, index: number) {
    var style = {
        top: size * texture.Y,
        left: size * texture.Y,
        width: size * texture.Width + 'pt',
        height: size * texture.Height + 'pt'
    }

    return (
        <Image source={texture.Source} style={style} key={index}/>
    )
  }

  render() {
    return (
        <View style={{flexDirection: 'row'}}>
            <DragDropContext
                onBeforeCapture={this.onBeforeCapture}
                onBeforeDragStart={this.onBeforeDragStart}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                {this.renderTextureLists()}
                <View style={{borderColor: 'black', borderWidth: 1, width: '500pt', height: '100%'}}>
                    <Droppable droppableId={'temp'} type={""}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : '', height: '100%' }}
                                {...provided.droppableProps}
                            >                  
                                {this.state.Textures.map((texture: TextureLoc, index) => {
                                    return this.renderTexture(texture, index)
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </View>
            </DragDropContext>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    testureLists: {
        width: '100pt',
        height: '100%'
    },
    textureList: {
        // borderColor: 'black',
        // borderTopWidth: 3,
        marginBottom: '5pt',
        height: '300pt',
        overflowY: 'scroll'
    },
    image: {
        width: '100%',
        height: '50pt', 
        resizeMode: 'center',
        marginBottom: '5pt'
    }
});
