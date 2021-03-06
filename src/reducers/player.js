import {SELECT_TRACK} from '../actions/types'
import {
  PLAY,
  PAUSE,
  PREV,
  NEXT,
  PROGRESS,
  ADD_TRACK,
  REMOVE_TRACK,
  RANDOMIZE_PLAYLIST
} from '../actions/types'
import tracks from "../assets/tracksMock"


const initialState = {
  userPlayList: tracks.data,
  index: 0,
  currentTrack: tracks.data[0],
  progress: 0,
  isPlaying: false,
  isLoading: false,
  errors: null,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_TRACK:
      return {
        ...state,
        index: action.payload,
        currentTrack: state.userPlayList[action.payload],
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
      return {
        ...state,
        isPlaying: true,
        currentTrack: state.userPlayList[state.index]
      };
    case NEXT:
      return {
        ...state,
        isPlaying: true,
        index: action.payload,
        currentTrack: state.userPlayList[state.index]
      };
    case PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    case ADD_TRACK:
      state.userPlayList.push(action.payload);
      return {...state};
    case  REMOVE_TRACK:
      return {
        ...state,
        userPlayList: [...state.userPlayList.slice(0, action.payload), ...state.userPlayList.slice(action.payload + 1)],
      };
    case  RANDOMIZE_PLAYLIST: {

      return {
        ...state,
        userPlayList: [...state.userPlayList.sort(() => {
          return .5 - Math.random()
        })]
      }
    }
    default:
      return state
  }
}