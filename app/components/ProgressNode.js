import React from 'react';
import ProgressRing from "./ProgressRing"
import { View, StyleSheet, Image } from "react-native";
import { SvgUri } from 'react-native-svg';

class ProgressNode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progressPercentage: props.progressPercentage,

            classIconURL: props.classIconURL,
            classTitle: props.classTitle,
        }
    }

    styles = StyleSheet.create({
        progressRing: {
            width: this.props.outerRingDiameter,
            height: this.props.outerRingDiameter,

            position: "absolute",
        },
        outerRing: {
            width: this.props.outerRingDiameter,
            height: this.props.outerRingDiameter,
            backgroundColor: this.props.outerRingColor,
            borderRadius: this.props.outerRingDiameter / 2,

            justifyContent: "center",
            alignItems: "center",
        },
        innerRing: {
            width: this.props.innerRingDiameter,
            height: this.props.innerRingDiameter,
            backgroundColor: this.props.innerRingColor,
            borderRadius: this.props.innerRingDiameter / 2,

            position: "absolute",

            justifyContent: "center",
            alignItems: "center",
        },
        innerCircle: {
            width: this.props.innerCircleDiameter,
            height: this.props.innerCircleDiameter,
            backgroundColor: this.props.innerCircleColor,
            borderRadius: this.props.innerCircleDiameter / 2,

            justifyContent: "center",
            alignItems: "center",
        },
        classIcon: {
            width: this.props.classIconURLWidth,
            height: this.props.classIconURLHeight,
        }

    })

    render() { 
        return (
            <View style={this.styles.outerRing} >
                 <ProgressRing 
                    style={this.styles.progressRing}
                    diameter={ this.props.outerRingDiameter }
                    stroke={ (this.props.outerRingDiameter - this.props.innerCircleDiameter) / 2 }
                    progress={ this.props.progressPercentage }
                    strokeColor={this.props.progressRingColor }/>

                <View style={this.styles.innerRing}>
                <View style={this.styles.innerCircle}>
                    <Image source={{ uri: this.props.classIconURL }}
                        style={this.styles.classIcon} />
                    {/* <SvgUri width = {this.props.classIconURLWidth} height = {this.props.classIconURLHeight} source={{ uri: this.props.classIconURL }} /> */}
                </View>
                </View>
            </View>
        );
    }
}


 
export default ProgressNode;