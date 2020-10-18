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

    renderCards = () => {
        return (
            this.state.goals.map((goal) => (
                <Goal goal={goal} key={goal.id}/>
            ))
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2E2E2E'}}>
                    Your Daily Goals
                </Text>
                {this.renderCards()}
            </View>
        )
    }
}

const styles = {
    container: {
        width: '90%',
        paddingVertical: 5
    }
}
