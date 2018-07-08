import {FETCH_PLAYLIST_SUCCESS, FETCH_PLAYLIST_FAILURE, FETCH_PLAYLIST_REQUEST, SELECT_TRACK} from '../actions/types'
import {PREV, PLAY, PAUSE, NEXT, TOGGLE_TRACK} from '../actions/types';
import axios from "axios/index";

export const getPlayList = id => {
  return function (dispatch) {
    dispatch({type: FETCH_PLAYLIST_REQUEST});
    axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=red+hot+chili+peppers').then(response => {
      dispatch({
        type: FETCH_PLAYLIST_SUCCESS,
        payload: {
          playlist: response.data.data,
          currentTrack: response.data.data[0]
        }
      });
    }).catch(err => {
      dispatch({
        type: FETCH_PLAYLIST_FAILURE,
        payload: err,
      });
    })
  }
};

export const selectTrack = track => {
  return({
     type:SELECT_TRACK,
     track
  });
  console.log(track);
}


export const play = () => {
  return function (dispatch) {
    dispatch({
      type: PLAY,
      payload: true
    });
  }

};

export const pause = () => {
  return function (dispatch) {
    dispatch({
      type: PAUSE,
      payload: false
    });

  }
};