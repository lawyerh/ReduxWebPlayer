import React from 'react';
import VideoItem from './video_item'

const VideoList = (props) =>
{
    const videos = props.videos.map(video =>{
        return <VideoItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
    });

    return(
        <ul className={'col-4 list-group'}>
            {videos}
        </ul>
    );
};

export default VideoList;