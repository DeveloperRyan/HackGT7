import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'

export default class VideoTile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={{uri: this.props.image}} 
                    style={{width: "100%", height: 190, marginBottom: 5}}
                />
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.author}>{this.props.author}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        width: "90%",
        borderRadius: 6,
        marginBottom: 10
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