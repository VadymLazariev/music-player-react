import React,{Component} from 'react'
import axios from 'axios'
import Playlist from "./playlist";
import PlayControl from "./playControl";
import PrevTrackControl from "./prevTrackControl";
import NextTrackControl from "./nextTrackControl";
import RepeatControl from "./repeatControl";
import MuteControl from "./muteControl";
import ProgressBarControl from "./progressBarControl";
export default class Player extends  Component{

    constructor(props){
        super(props);
        this.state = {
            isPlay: false,
            repeat:false,
            progress:null,
            tracks:[],
            currentTrack: null,
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
        return(
            <div>
             <Playlist tracks={this.state.tracks}
                       currentTrackId={this.state.currentTrackId}
                       playSong={this.playSong}/>
                <PlayControl togglePlay={this.togglePlay} isPlay={this.state.isPlay}/>
                <PrevTrackControl prev={this.prev} />
                <NextTrackControl next={this.next}/>
                <RepeatControl repeat={this.repeat}/>
                <MuteControl mute={this.toggleMute}/>
                <ProgressBarControl progress={this.state.progress}
                                    setProgress={this.setProgress}/>
            </div>
        );
    };
}