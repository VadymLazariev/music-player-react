import React,{Component} from 'react';
import './trackInfo.css';

function TrackInfo(props) {
  return(
    <div className={`song-info`}>
      <p className={`artist-name`}>{props.name}</p>
      <p className={`track-name`}>{props.title}</p>
    </div>
  );
}

export default  TrackInfo;