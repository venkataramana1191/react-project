import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video,onVideoSelect }) => {
    //console.log(video);
    return(
        <div onClick={ () =>onVideoSelect( video )} className="Video-item ">
             <img className="ui image" src = { video.snippet.thumbnails.medium.url} alt={video.snippet.thumbnails.title}/>
             <div className="content">
            <div className="header">  {video.snippet.title}</div>
         </div>
        </div> );
};

export default VideoItem;
