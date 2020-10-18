import React from 'react';
import { Text, View } from 'react-native';
import Svg, {Path} from 'react-native-svg'

function InteractiveClassScreen(props) {
    return (
        <View>
            <Svg width="414" height="121" viewBox="0 0 414 121" fill="red" style={{ justifyContent: "flex-start" }}>
            <Path d="M414 0H0V87.6124C0 90.6026 2.20171 93.1364 5.16264 93.5537L191.09 119.758C201.645 121.245 212.355 121.245 222.91 119.758L408.837 93.5537C411.798 93.1364 414 90.6026 414 87.6124V0Z" fill="#2B2754"/>
            </Svg>
        </View>
    );
}

export default InteractiveClassScreen;