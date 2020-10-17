import React, { Component } from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native';

export default class CourseCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            courseProgress = props.progress,
        };
    }
    render() {
        return (
            <View>
                <View></View>
                {/* <Image /> */}
                <Text></Text>
                <TouchableHighlight>
                    <Text>Continue</Text>
                    {/* <Image /> */}
                </TouchableHighlight>
            </View>
        )
    }
}
