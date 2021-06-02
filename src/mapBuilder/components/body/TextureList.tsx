import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Constants from '../../Constants';
import Data from '../../../assets/Textures'
import TextureModel from '../../../assets/TextureModel';

interface Props {
}

interface State {
}

export default class TextureList extends React.Component<Props, State> {

    Scrolled: number

    constructor(props: Props) {
        super(props);

        this.Scrolled = 0

        this.state = {
        }
    }

    renderImage(texture: TextureModel, index: number) {
        return (
            <Draggable key={texture.id} draggableId={texture.id} index={index} >
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
                                // we want the offset from the click to the textures top left corner

                                // take clicked position and subtract the offset of the click in this view to get the top left corner
                                var x = e.nativeEvent.pageX - e.nativeEvent.locationX
                                var y = e.nativeEvent.pageY - e.nativeEvent.locationY

                                // offset for scroll
                                x -= this.Scrolled

                                // offset for texture size. full height minus texture size over 2
                                y += (e.currentTarget.clientHeight - (Constants.cellSize * texture.height)) / 2

                                // x, y is now the coord of the texture top left. Now get the delta
                                x = e.nativeEvent.pageX - x
                                y = e.nativeEvent.pageY - y

                                Constants.imagePosition = {
                                    x: x,
                                    y: y
                                }
    
                                Constants.isDraging = true
                            }}
                        >
                            <Image source={texture.source} style={{
                                width: (Constants.cellSize * texture.width) + 'px',
                                height: (Constants.cellSize * texture.height) + 'px',
                                resizeMode: 'center'
                            }}/>
                        </View>
                    </div>
                )}
            </Draggable>
        )
    }

    render() {
        var images: any[] = []

        var index = 0
        Data.textures.forEach((item) => {
            images.push(this.renderImage(item, index))
            index++
        })

        return (
            <Droppable droppableId={Constants.dndAreas.textures} isDropDisabled={true} direction={'horizontal'} >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{display: 'flex', padding: 10, maxWidth: '50%', overflowX: 'scroll'}}
                        onScroll={(event: any) => { 
                            this.Scrolled = event.nativeEvent.target.scrollTop
                        }}
                    >
                        {images}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        marginRight: '5px',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
