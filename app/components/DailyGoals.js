import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native';

export default class DailyGoals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: props.goals
        };
    }
    render() {
        return (
            <View>
                <Text>This is an example goal item.</Text>
            </View>
        )
    }
}
