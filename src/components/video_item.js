import React from 'react';


const VideoItem = ({video, onVideoSelect}) => // I know the props object has a field called video, so I can declare a video variable in the parameters.
{
    
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className={'list-group-item'}>
            <div className={'video-list media'}>
                <div className={'media-left'}>
                    <img className={'media-object'} src={imageUrl} />
                </div>
                <div className={'media-body'}>
                    <div className={'media-heading'}>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoItem;

