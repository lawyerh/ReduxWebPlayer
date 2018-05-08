import React from 'react';


const VideoItem = (props) =>
{
    const video = props.video;
    return (
        <li className={'list-group-item'}>
            {video.snippet.title}
        </li>
    )
}

export default VideoItem;