import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Goal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            goals: props.goals
        }
    }
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={[styles.checkbox, this.props.goal.item.isComplete ? styles.filled : null]} />
                <Text>{this.props.goal.item.title}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 2
    },
    checkbox: {
        backgroundColor: "#F3F3F3",
        borderWidth: 3,
        borderColor: "#F3F3F3",
        width: 20,
        height: 20,
        marginRight: 10,
        borderRadius: 6
    },
    filled: {
        backgroundColor: '#3DE996'
    }
}
