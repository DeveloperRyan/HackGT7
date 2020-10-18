import React, { Component } from 'react'
import { Dimensions, View, Text, Platform } from 'react-native'

export default class ClassroomHeader extends Component {

    render() {
        return (
            <View style={styles.greeting}>
                <Text style={styles.greetingTextLarge}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = {
    greeting: {
        display: "flex",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding: 15
    },
    greetingTextLarge: {
        fontSize: 25,
        color: '#2E2E2E'

    },
    greetingTextSmall: {
        fontSize: 13,
        color: '#2E2E2E'
    }
}