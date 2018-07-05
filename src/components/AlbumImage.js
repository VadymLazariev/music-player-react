import React,{Component} from "react";
import  {PlayerAlbumImage} from './AlbumImageStyles';
import {ImgStyled} from './AlbumImageStyles';
export default  class AlbumImage extends  Component{
    render(){
        return(
            <PlayerAlbumImage>
                <ImgStyled src={this.props.src} alt="" srcSet=""/>
            </PlayerAlbumImage>
        );
    };
}