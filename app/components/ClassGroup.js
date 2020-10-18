import React from 'react';
import { View, StyleSheet } from 'react-native'
import ProgressNode from './ProgressNode'

class ClassGroup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }

    styles = StyleSheet.create({ 
        classContainer: {
            flexDirection: "row-reverse",
            flexWrap: "wrap-reverse",
            justifyContent: "center"
        },
    })

    render() {

        
        return(
        <View style={this.styles.classContainer}>
   
                    {this.props.classes.map(data => { return(
                            <ProgressNode
                                key={data.classid}

                                progressPercentage={ data.progressPercentage }
                                progressRingColor={ this.props.progressRingColor }

                                classIconURL={ data.classIconURL }
                                classIconURLHeight = { this.props.classIconURLHeight }
                                classIconURLWidth = { this.props.classIconURLWidth }

                                outerRingDiameter={ this.props.outerRingDiameter }
                                outerRingColor={ this.props.outerRingColor }

                                innerRingDiameter = { this.props.innerRingDiameter }
                                innerRingColor = { this.props.innerRingColor }

                                innerCircleDiameter = { this.props.innerCircleDiameter }
                                innerCircleColor = { this.props.innerCircleColor }

                                style={ this.styles.groupedClass }
                            />)
                    })}
        </View>
        )
    }
}
 
export default ClassGroup;