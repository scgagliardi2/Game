import { Dimensions } from "react-native";

export default {
    colors: {  
        primary: 'cornflowerblue',
        accent: 'black',
    },
    size: {
        width: Dimensions.get('window').width * .5,
        height: Dimensions.get('window').height * .6,
        windowTiles: 12
    }
}