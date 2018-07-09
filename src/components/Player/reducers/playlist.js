import {FETCH_PLAYLIST_SUCCESS} from '../actions/types'
import {FETCH_PLAYLIST_FAILURE} from '../actions/types'
import {FETCH_PLAYLIST_REQUEST} from '../actions/types'
import {SELECT_TRACK} from '../actions/types'


const initialState = {
  playList: [],
  currentTrack: null,
  selectedTrack:null,
  isActive: false,
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
        selectedTrack: state.playList[action.payload],
      };

    default:
      return state
  }
}