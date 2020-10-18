import React from 'react';
import { StyleSheet, View, elevation, Platform } from "react-native";
import LevelingSystem from '../components/LevelingSystem'
import ProgressNode from '../components/ProgressNode';


function LevelingSystemScreen(props) {

    let state = {
        classGroups:
            [
            {
                classGroupId: 0,
                    classes: [
                    {
                        classid: 0,
                        progressPercentage: 100,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    },
                    {
                        classid: 1,
                        progressPercentage: 100,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    },
                    {
                        classid: 2,
                        progressPercentage: 15,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    }
                ]
            },
            {
                classGroupId: 1,
                    classes: [
                    {
                        classid: 5,
                        progressPercentage: 100,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    },
                    {
                        classid: 6,
                        progressPercentage: 100,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    },
                    {
                        classid: 7,
                        progressPercentage: 85,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    },
                    {
                        classid: 8,
                        progressPercentage: 64,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    },
                ]
            },
            ]
    }

    return (
        <View style={styles.containerSystem}>

            <ProgressNode

                style={styles.levelToAchieve}

                progressPercentage={0}
                progressRingColor={"#30ABF0"}

                classIconURL={"https://i.imgur.com/chZ75oK.png"}
                classIconURLHeight = { 50 }
                classIconURLWidth = { 50 }

                outerRingDiameter={ 109 }
                outerRingColor={"#E3E3E3"}

                innerRingDiameter = { 92 }
                innerRingColor = {"#FFFFFF"}

                innerCircleDiameter = { 75 }
                innerCircleColor = {"#30ABF0"} 
            />

            <LevelingSystem 

                style = {styles.levelingSystem}

                backgroundColor={"#FFFFFF"}

                classgroups={state.classGroups}
                progressRingColor={"#3DE996"}

                classIconURLHeight = { 50/2 }
                classIconURLWidth = { 50/2 }

                outerRingDiameter={ 109/2 }
                outerRingColor={"#E3E3E3"}

                innerRingDiameter = { 92/2 }
                innerRingColor = {"#FFFFFF"}

                innerCircleDiameter = { 75/2 }
                innerCircleColor = {"#3DE996"} 
            />

            <ProgressNode 

                style={styles.currentLevel}

                progressPercentage={75}
                progressRingColor={"#3DE996"}

                classIconURL={"https://i.imgur.com/gL6s8SQ.png"}
                classIconURLHeight = { 50 }
                classIconURLWidth = { 50 }

                outerRingDiameter={ 109 }
                outerRingColor={"#E3E3E3"}

                innerRingDiameter = { 92 }
                innerRingColor = {"#FFFFFF"}

                innerCircleDiameter = { 75 }
                innerCircleColor = {"#3DE996"} 
            />

            <View style={styles.progressionLine}/>

        </View>

    );
}

const styles = StyleSheet.create({
    containerSystem: {
        flex: 1,
        flexGrow: 1,
        width: "50%",
        alignItems: "center",
        justifyContent: "center"
    },
    progressionLine: {
        position: "absolute",
        height: "90%",
        width:  Platform.OS === "web" ? "1%" : "2%",
        zIndex: -5,
        elevation: -1,
        backgroundColor: "#E3E3E3"
    },
    levelToAchieve: {
        backgroundColor: "#FFFFFF",
        zIndex: 2,
    },
    currentLevel: {
        backgroundColor: "#FFFFFF"
    }
})

export default LevelingSystemScreen;