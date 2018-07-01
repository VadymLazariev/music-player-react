import  React,{Component} from 'react'
import './songList.css'
import Song from '../song/song'
import axios from 'axios';

export default class SongList extends Component {

   constructor(props) {
        super(props);

        this.state = {
            songs: [],
            currentSongId: null,
            isActive: false,
        }
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=eminem').then(res => {
          this.setState({songs:res.data.data});
          console.log(this.state.songs)
        })
    }


    getId = (id) => {
        this.setState({currentSongId: id});
        console.log(id);
    }


    render() {
       let active = false;
        return(
            <div>
                <p>{ console.log("current state",this.state)}</p>
                {
                    this.state.songs.map(song => (
                        active = (song.id === this.state.currentSongId),
                        <Song
                            id={song.id}
                            key={song.id}
                            artist={song.artist.name}
                            title_short={song.title_short}
                            isActive={active}
                            clickHandler={this.getId}
                            preview={song.preview}
                        />
                    ))
                }
            </div>

        );
    }

}

