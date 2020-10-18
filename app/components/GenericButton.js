import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class GenericButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.container, this.props.type === "filled" ? styles.filled : styles.unfilled]}>
                <View>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 12}}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = {
    container: {
        width: 125,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    unfilled: {
        borderColor: "#FFFFFF",
        borderWidth: 3,
        borderRadius: 55,
    },
    filled: {
        backgroundColor: "#30ABF0",
        borderRadius: 6
    }


}