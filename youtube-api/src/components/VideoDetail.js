import React from 'react';

const VideoDetail = ({video})=>{
    if(!video){
        return<div>Loading...!</div>
    }

return(<div>
    <div>
    <h4 className="ui header">{video.snippet.title}</h4>
    </div>
    <div className="ui segment">
    <iframe title='video player' width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`} >
    </iframe>
    </div>
    <p>{video.snippet.description}</p>
    </div>
    
 
 
)   };

export  default VideoDetail ;