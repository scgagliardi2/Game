import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import MainBody from './components/MainBody';

interface Props {
}

interface State {
}

export default class PokeReactBuilder extends React.Component<Props, State> {
 

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View>
                <Header/>
                <MainBody/>
            </View>
        )
    }
}
