import React from 'react';
import {View, StyleSheet} from 'react-native';
import constants from '../../GlobalConstants';

interface Props {
    player_position: []
    map_size: []
}

interface State {
    track_player: boolean,
}

export default class Camera extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.move = this.move.bind(this);

        this.state = {
            track_player: true
        }
    }

    move(direction: string) {
    }

    render() {
        var content: any

        switch (this.state.Content) {
            case Screens.MENU:
                content = (<Menu onNavigate={this.changeScreen}/>);
                break
            case Screens.BATTLE:
                content = (<BattleScreen onNavigate={this.changeScreen}/>)
                break
            case Screens.WORLD:
                content = (<World map={this.state.Map}/>)
                break
        };

        return (
            <View style={styles.Camera}>
                {content}
                <InputsContainer 
                    inputDpadTap={this.move} 
                    inputDpadLongPress={this.move}
                    CameraMenuButton={this.state.CameraMenu}
                    buttonPressed={this.handlePress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Camera: {
        width: constants.size.width,
        maxWidth: constants.size.cellCountWidth*50,
        height: constants.size.height,
        maxHeight: constants.size.cellCountHeight*50,
        backgroundColor: 'rgb(200, 200, 200)'
    }
});
