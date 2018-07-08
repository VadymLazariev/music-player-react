import React,{Component} from 'react';
import './imageComponent.css';

function ImageComponent(props) {
  return(
    <div className="album-image">
      <img src={`${props.img}`} alt="album image" srcSet="" />
    </div>
  );
}

export default ImageComponent;