import { Dimensions } from "react-native";

export default {
    colors: {  
        primary: 'cornflowerblue',
        accent: 'black',
    },
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // Must be on ODD sized screen so player is in the center
        windowTiles: 13,
        cellCountWidth: 9,
        cellCountHeight: 21
    }
}