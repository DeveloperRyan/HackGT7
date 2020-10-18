import React from 'react';
import { Button, Dimensions, SafeAreaView, View } from 'react-native';
import ClassroomHeader from '../components/ClassroomHeader.js'
import VideoTile from '../components/VideoTile.js'
import BookTile from '../components/BookTile.js'
import SectionHeader from '../components/SectionHeader.js'
import BooksContainer from '../components/BooksContainer.js';
import VideosContainer from '../components/VideosContainer.js';

const BOOKS = [
    {
        id: 1,
        image: "https://i.imgur.com/mIq171b.png"
    },
    {
        id: 2,
        image: "https://i.imgur.com/mIq171b.png"
    },
    {
        id: 3,
        image: "https://i.imgur.com/mIq171b.png"
    }
];

const VIDEOS = [
    {
        id: 1,
        image: "https://i.imgur.com/x5Neg1z.png",
        title: "Introduction to Astronomy",
        author: "Crash Course"
    },
    {
        id: 2,
        image: "https://i.imgur.com/xIAy1Xe.png",
        title: "Asteroid Mining",
        author: "Kurzgesagt"
    }
]

function InteractiveClassScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ClassroomHeader title="Astronomy"/>
            <SectionHeader title={"Videos"} />
            <VideosContainer videos={VIDEOS} />
            <Button title="View 13 more..." />
            <SectionHeader title={"Books"} />
            <BooksContainer books={BOOKS} />
            
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