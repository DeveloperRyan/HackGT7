import React, { Component } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

export default class GenericButton extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}
