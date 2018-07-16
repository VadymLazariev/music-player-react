import {PREV, PLAY, PAUSE, NEXT} from '../actions/types';


const initialState = {
  isPlaying: false,
  trackId: 0,
  track: {}
};

export default function player(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}