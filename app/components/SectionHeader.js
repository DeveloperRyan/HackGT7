import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SectionHeader extends Component {
    render() {
        return (
            <View style={{width: "90%", marginVertical: 10}}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#2E2E2E"}}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = {
}