import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import data from '../assets/textures'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TextureLoc from './TextureLoc';

interface Props {
    textures: TextureLoc[],
    setLatestImageCoords: (x: number, y: number) => any
}

interface State {
}

const size = 25
const width = 600
const height = 400

export default class MapView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.renderTexture = this.renderTexture.bind(this)

    this.state = {
    }
  }

  renderGridRow(row: number) {
    var cols: any[] = []

    for (var c = 0; c < width / size; c++) {
        var style = {
            
            borderRightColor: 'black', 
            borderRightWidth: 1, 
            borderBottomColor: 'black', 
            borderBottomWidth: 1, 
            height: size + 'px',
            width: size + 'px',
            left: (size * c) + 'px'
        }
        cols.push(<View style={{position: 'absolute', ...style}} key={c}/>)
    }

    return (
        <View style={styles.row} key={row}>
            {cols}
        </View>
    )
  }

  renderMapGrid() {
    var rows = []

    for (var r = 0; r < height / size; r++) {
        rows.push(this.renderGridRow(r))
    }

    return (
      <View style={{ borderTopColor: 'black', borderTopWidth: 1, borderLeftColor: 'black', borderLeftWidth: 1,...styles.cover}}>
        {rows}
      </View>
    )
}

  renderDropRegion() {
      return (
        <View style={styles.cover}>
            <Droppable droppableId={'dropRegion'}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{ width: width + 'px', height: height + 'px'}}
                        {...provided.droppableProps}
                    >                  
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </View>
      )
  }

  renderTexture(texture: TextureLoc, index: number) {
    var style = {
        top: size * texture.Y + 'px',
        left: size * texture.X + 'px',
        width: size * texture.Width + 'px',
        height: size * texture.Height + 'px'
    }

    return (
        <Draggable key={index} draggableId={index.toString()} index={index} >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}  
                    {...provided.dragHandleProps}     
                >      
                    <View 
                        onStartShouldSetResponder={(evt) => true}
                        onResponderStart={(e: any) => { 
                            this.props.setLatestImageCoords(
                                e.nativeEvent.pageX - e.currentTarget.offsetLeft,
                                e.nativeEvent.pageY - e.currentTarget.offsetTop
                            )
                        }}
                    >
                        <Image source={texture.Source} style={{position: 'absolute', ...style}} key={index}/>
                    </View>
                </div>
            )}
        </Draggable>

    )
  }

  renderTextureRegion() {
    return (
        <View style={styles.cover}>
            <Droppable droppableId={'textures'} isDropDisabled={true}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{ width: width + 'px', height: height + 'px'}}
                        {...provided.droppableProps}
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
        <View style={styles.view}>
           {this.renderDropRegion()}
           {this.renderMapGrid()}
           {this.renderTextureRegion()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        left: '300px',
        width: width + 'px', 
        height: height + 'px'
    },
    cover: {
        position: 'absolute',
        width: width + 'px', 
        height: height + 'px'
    },
    row: {
        height: size + 'px',
        width: '100%'
    },
    image: {
        width: '100%',
        marginBottom: '5px'
    }
});
