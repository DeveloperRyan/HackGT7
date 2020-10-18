import React, { Component } from 'react'
import { Dimensions, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';

export default class ProfileGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.greeting}>
                <Text style={styles.greetingTextLarge}>Hi Roman!</Text>
                <Text style={styles.greetingTextSmall}>Today is October 18th, 2020</Text>
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