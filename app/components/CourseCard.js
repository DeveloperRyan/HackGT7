import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native';

export default class CourseCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            courseProgress: props.progress,
        };
    }
    render() {
        return (
            <View>
                {/* <Image /> */}
                <TouchableHighlight>
                    <Text>Continue</Text>
                    {/* <Image /> */}
                </TouchableHighlight>
            </View>
        )
    }
}
