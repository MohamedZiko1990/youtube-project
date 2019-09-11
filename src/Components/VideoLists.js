import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) =>{

    const Lists = videos.map(video =>{
          return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });

    return (
    <div className="ui divided relaxed list">
    {Lists}
    </div>);
}

export default VideoList;
