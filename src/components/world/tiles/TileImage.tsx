import React from 'react';
import { Image } from 'react-native';

interface Props {
    source: any,
    style: any,
    isSprite: boolean
}

interface State {
}

export default class TileImage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return nextProps.source != this.props.source
    }

    render() {
        return (
            <Image
                source={this.props.source} 
                style={this.props.style}
            />
        );
    }
}
