import React from 'react';
import { Button, Dimensions, SafeAreaView, View } from 'react-native';
import ClassroomHeader from '../components/ClassroomHeader.js'
import VideoTile from '../components/VideoTile.js'
import BookTile from '../components/BookTile.js'
import SectionHeader from '../components/SectionHeader.js'

function InteractiveClassScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ClassroomHeader title="Astronomy"/>
            <SectionHeader title={"Videos"} />
            <VideoTile image="https://i.imgur.com/x5Neg1z.png" title="Introduction to Astronomy" author="Crash Course"/>
            <VideoTile image="https://i.imgur.com/xIAy1Xe.png" title="Asteroid Mining" author="Kurzgesagt"/>
            <Button title="View 13 more..." />
            <SectionHeader title={"Books"} />
            <View style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <BookTile image="https://i.imgur.com/tp5yRj7.png"/>
                <BookTile image="https://i.imgur.com/tp5yRj7.png"/>
                <BookTile image="https://i.imgur.com/tp5yRj7.png"/>
            </View>
            
        </SafeAreaView>
    );
}

const styles = {
    container: {
        height: "100%",
        width: Dimensions.get('window').width,
        display: "flex",
        alignItems: "center",
        flex: 1,
    }
}

export default InteractiveClassScreen;