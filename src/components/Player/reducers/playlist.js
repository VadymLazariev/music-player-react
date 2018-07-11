import {FETCH_PLAYLIST_SUCCESS} from '../actions/types'
import {FETCH_PLAYLIST_FAILURE} from '../actions/types'
import {FETCH_PLAYLIST_REQUEST} from '../actions/types'
import {SELECT_TRACK} from '../actions/types'
import {PLAY,PAUSE,PREV,NEXT,PROGRESS} from '../actions/types'

const initialState = {
  playList: [],
  index: 0,
  currentTrack: null,
  progress:0,
  isRepeating:false,
  isPlaying: false,
  isLoading: false,
  errors: null,

};


export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        playList: action.payload.playlist,
        currentTrack: action.payload.currentTrack,
        errors: null,
        isLoading: false,
      };
    case FETCH_PLAYLIST_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case SELECT_TRACK:
      return {
        ...state,
        index: action.payload,
        currentTrack: state.playList[action.payload],
        isPlaying: true
      };
    case PLAY:
      return {
        ...state,
        isPlaying: action.payload
      };
    case PAUSE:
      return {
        ...state,
        isPlaying: action.payload
      };
    case PREV:
      return{
        ...state,
        isPlaying:true,
        currentTrack: state.playList[state.index]
      };
    case NEXT:
      return{
        ...state,
        isPlaying:true,
        index: action.payload,
        currentTrack: state.playList[state.index]
      };
    case PROGRESS:
      return{
        ...state,
        progress: action.payload
      };
    default:
      return state
  }
}