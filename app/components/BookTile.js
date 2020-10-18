import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'

export default class BookTile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={{uri: this.props.image}} 
                    style={{width: 100, height: 150, marginBottom: 5, borderRadius: 6}}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        borderRadius: 6,
        marginBottom: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#2E2E2E"
    },
    author: {
        fontSize: 13,
        color: "#AEAEAE"
    }
}