import React, { Component } from 'react'
import { View } from 'react-native'
import VideoTile from './VideoTile'


export default class VideosContainer extends Component {
    
    renderVideos = (videos) => (
        videos.map((video) => (
            <VideoTile image={video.image} title={video.title} author={video.author} key={video.id} />
        ))
    );

    render() {
        return (
                <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    {this.renderVideos(this.props.videos)}
                </View>
        );
    }
}
