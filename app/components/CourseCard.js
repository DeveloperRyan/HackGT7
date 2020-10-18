import React, { Component } from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import GenericButton from './GenericButton';

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
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>{this.props.subject}</Text>
                    <Text style={styles.progressText}>{this.state.progress}% Complete</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Image source={{uri: this.props.image, width: 76, height: 76}}/>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <GenericButton text="CONTINUE" type="unfilled" />
                </View>
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
    },
    titleBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.10)",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 5
    },
    titleText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    },
    progressText: {
        marginLeft: "auto",
        color: "#FFFFFF",
        fontSize: 10
    },
    contentContainer: {
        width: "100%",
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    description: {
        color: "white",
        marginVertical: 10,
        fontSize: 16
    }
}
