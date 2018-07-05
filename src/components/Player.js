import React,{Component} from 'react'
import axios from 'axios'
import Playlist from "./Playlist";
import PlayControl from "./PlayControl";
import PrevTrackControl from "./PrevTrackControl";
import NextTrackControl from "./nextTrackControl";
import RepeatControl from "./repeatControl";
import MuteControl from "./muteControl";
import './shared-styles.css'
import ProgressBarControl from "./ProgressBarControl";
import {PlayListContainer} from "./PlaylistStyles";
import  {PlayList} from  "./PlaylistStyles";
import {MainStyled} from  './PlayerStyles';
import {PlayerContainerStyled} from './PlayerStyles';
import  {PlayerHeaderStyled} from './PlayerStyles';
import  {PlayerContentStyled} from './PlayerStyles';
import TrackInfo from "./TrackInfo";
import AlbumImage from "./AlbumImage";
import {PlayerControls} from './PlayerStyles'
import {PlayerSubControls} from './PlayerStyles'

export default class Player extends  Component{

    constructor(props){
        super(props);
        this.state = {
            isPlay: false,
            repeat:false,
            progress:null,
            tracks:[],
            currentTrack: undefined,
            currentTrackId: null,
        };
        this.audio = new Audio();

        this.audio.addEventListener('ended', e => {
            this.next();
        });
        this.audio.addEventListener('timeupdate', e=>{
            this.updateProgress();
        })
    }

    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=eminem').then(res => {
            this.setState({tracks: res.data.data});
            this.setState({currentTrack:res.data.data[0]});
            console.log(this.state.tracks)
        });

    }

    togglePlay = () =>{
        if(!this.audio.src){
            this.audio.src = this.state.tracks[0].preview;
            this.setState({
                currentTrackId:0
            });
        }
        this.state.isPlay ? this.pause() : this.play();
    };

    play = () =>{
        this.setState({isPlay:true});
        this.audio.play();
    };
    pause = () =>{
        this.setState({isPlay:false});
        this.audio.pause();
    };

    playSong = (id) =>{
        this.setState({
            currentTrackId: id,
            currentTrack: this.state.tracks[id],
            isPlay:true
        }
        );
        this.audio.src = this.state.tracks[id].preview;
        this.play();
    };

    next = () =>{
        const length = this.state.tracks.length;
        const nextSong = this.state.repeat ? this.state.currentTrackId : this.state.currentTrackId < length - 1 ?
            this.state.currentTrackId + 1 : 0;
        this.setState({
            currentTrackId: nextSong,
            currentTrack: this.state.tracks[nextSong],
            progress:0,
            repeat:false
        });
        this.audio.src = this.state.tracks[nextSong].preview;
        this.play();
    };

    prev = () =>{
        const length = this.state.tracks.length;
        const prevSong = this.state.currentTrackId > 0 ? this.state.currentTrackId - 1 : length - 1;
        this.setState({
            currentTrackId:prevSong,
            currentTrack: this.state.tracks[prevSong],
            progress: 0,
            repeat:false
        });
        this.audio.src = this.state.tracks[prevSong].preview;
        this.play();
    };

    repeat = () => {
        this.setState({repeat: !this.state.repeat});
    };

    toggleMute = () =>{
        this.audio.muted = !this.audio.muted;
    };

    setProgress =(e)=>{
        const target = e.target.nodeName === "SPAN" ? e.target.parentNode : e.target;
        const width = target.clientWidth;
        const rect = target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const duration = this.audio.duration;
        const currentTime = (duration * offsetX)/width;
        const progress = (currentTime*100)/duration;
        this.audio.currentTime = currentTime;
        this.setState({progress:progress});
        this.play();
    };

    updateProgress = () =>{
        const progress = (this.audio.currentTime * 100) / this.audio.duration;
        this.setState({progress:progress});
    };




    render(){
        return(console.log(this.state.currentTrack),
            /*<MainStyled>
                <PlayerContainerStyled>
                    <PlayerHeaderStyled> </PlayerHeaderStyled>
                    <PlayerContentStyled>
                    <ProgressBarControl progress={this.state.progress}
                                        setProgress={this.setProgress}/>
                    <div className={`player-controls-buttons`}>
                        <PlayControl togglePlay={this.togglePlay} isPlay={this.state.isPlay}/>
                        <PrevTrackControl prev={this.prev} />
                        <NextTrackControl next={this.next}/>
                        <RepeatControl repeat={this.repeat}/>
                        <MuteControl mute={this.toggleMute}/>
                    </div>
                    </PlayerContentStyled>
                </PlayerContainerStyled>
                <PlayListContainer>
                    <PlayList>
                    <Playlist tracks={this.state.tracks}
                              currentTrackId={this.state.currentTrackId}
                              playSong={this.playSong}/>
                    </PlayList>
                </PlayListContainer>
            </MainStyled>*/
                <MainStyled>
                    <PlayerContainerStyled>
                        <PlayerHeaderStyled></PlayerHeaderStyled>
                        <AlbumImage></AlbumImage>
                        <PlayerContentStyled>
                            <TrackInfo/>
                            <ProgressBarControl progress={this.state.progress}
                                                setProgress={this.setProgress}/>
                            <PlayerControls>
                                <PrevTrackControl prev={this.prev} />
                                <PlayControl togglePlay={this.togglePlay} isPlay={this.state.isPlay}/>
                                <NextTrackControl next={this.next}/>
                            </PlayerControls>
                        </PlayerContentStyled>
                    </PlayerContainerStyled>
                    <PlayListContainer>
                        <PlayList>
                            <Playlist tracks={this.state.tracks}
                                      currentTrackId={this.state.currentTrackId}
                                      playSong={this.playSong}/>
                        </PlayList>
                    </PlayListContainer>
                </MainStyled>

        );
    };
}