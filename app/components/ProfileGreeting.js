import React, { Component } from 'react'

export default class ProfileGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Date.now()
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.greeting}>
                    <Text style={styles.greetingTextLarge}>Hi Roman!</Text>
                    <Text style={styles.greetingTextSmall}>Today is October 18th, 2020</Text>
                </View>
            </SafeAreaView>
        )
    }
}

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const styles = {
    container: {
        backgroundColor: "red",
        flex: 1,
        alignItems: "center",
        width: 500,
        height: 500,
    },
    greeting: {
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        width: '100%',
        height: '15%',
        padding: 15
    },
    greetingTextLarge: {
        fontSize: 25,
        fontWeight: 600,
        color: '#fff'
    },
    greetingTextSmall: {
        fontSize: 18,
        color: '#fff'
    }
}