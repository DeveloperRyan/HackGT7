import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

export default class CourseCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            progress: props.progress,
        };
    }
    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.props.color}]}>

            </View>
        )
    }
}

const styles = {
    container: {
        display: "flex",
        width: "90%",
        marginTop: 15,
        height: 250,
        borderRadius: 6,
    }
}
