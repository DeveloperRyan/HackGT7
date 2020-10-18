import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native';
import Goal from './Goal.js';

export default class DailyGoals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: props.goals
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2E2E2E'}}>
                    Your Daily Goals
                </Text>
                <FlatList
                    data={this.state.goals}
                    renderItem={(goal) => <Goal goal={goal} />}
                    keyExtractor={(goal) => goal.id}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        width: '100%',
        paddingLeft: 15,
        paddingVertical: 5
    }
}
