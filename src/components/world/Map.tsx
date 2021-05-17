import React from 'react';
import Chunk from './Chunk';

interface Props {
}

interface State {
    world: [any][any]
}

export default class Map extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            world: [[]]
        }
    }
}