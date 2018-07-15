
import {SELECT_TRACK} from '../actions/types'
import {PLAY, PAUSE, PREV, NEXT, PROGRESS,ADD_TRACK,REMOVE_TRACK} from '../actions/types'
import tracks from "../../../assets/tracksMock"

const initialState = {
  userPlayList:  tracks.data,
  index: 0,
  currentTrack: tracks.data[0],
  progress: 0,
  isRepeating: false,
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
      console.log(action.payload);
      state.userPlayList.push(action.payload);
      console.log(state.userPlayList);
      return {...state};
    case  REMOVE_TRACK:
      console.log('REMOVE_TRACK');
      console.log(...state);
      console.log(...state.userPlayList);
      console.log(action.payload);
    state.userPlayList.splice(action.payload,1);
    //state.userPlayList.splice(action.payload + 1);
    console.log(state.userPlayList);
      return {...state};

    default:
      return state
  }
}