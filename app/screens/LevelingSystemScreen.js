import { relative } from 'path';
import React from 'react';
import { StyleSheet, View } from "react-native";
import LevelingSystem from '../components/LevelingSystem'


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
                    {
                        classid: 9,
                        progressPercentage: 15,
                        classIconURL: "https://i.imgur.com/oiHwwkM.png",
                    }
                ]
            },
            ]
    }

    return (
        <View style={styles.containerSystem}>

            <LevelingSystem 

                style = {styles.levelingSystem}

                classgroups={state.classGroups}
                progressPercentage={75}
                progressRingColor={"#3DE996"}

                classIconURL={"https://www.flaticon.com/svg/static/icons/svg/117/117992.svg"}
                classIconURLHeight = { 50 }
                classIconURLWidth = { 50 }

                outerRingDiameter={ 109 }
                outerRingColor={"#E3E3E3"}

                innerRingDiameter = { 92 }
                innerRingColor = {"#FFFFFF"}

                innerCircleDiameter = { 75 }
                innerCircleColor = {"#3DE996"} 
            />

        </View>

    );
}

const styles = StyleSheet.create({
    containerSystem: {
        flex: 1,
        flexGrow: 1,
    },
    levelingSystem: {
        flex: 1,
        flexGrow: 1,

    }
})

export default LevelingSystemScreen;