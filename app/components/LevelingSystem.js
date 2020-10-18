import React from 'react';
import { StyleSheet, View } from 'react-native';
import ClassGroup from "./ClassGroup"

class LevelingSystem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    style = StyleSheet.create({
        classGroupContainer: {
            justifyContent: "space-evenly",
        }    
    })

    render() { 
        return (
            <View>

                {
                    this.props.classgroups.map((data) => { return(
                    <ClassGroup

                        key={data.classGroupID}

                        classes={data.classes}

                        progressRingColor={this.props.progressRingColor}

                        outerRingDiameter={ this.props.outerRingDiameter }
                        outerRingColor={ this.props.outerRingColor }

                        innerRingDiameter = { this.props.innerRingDiameter }
                        innerRingColor = { this.props.innerRingColor }

                        innerCircleDiameter = { this.props.innerCircleDiameter }
                        innerCircleColor = { this.props.innerCircleColor } 

                        classIconURLHeight =  {this.props.classIconURLHeight}
                        classIconURLWidth =  {this.props.classIconURLWidth}
                
                    />)})
                }
            </View>

        )

        
    }
}
 
export default LevelingSystem;