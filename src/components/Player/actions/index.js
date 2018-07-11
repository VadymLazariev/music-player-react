import {FETCH_PLAYLIST_SUCCESS, FETCH_PLAYLIST_FAILURE, FETCH_PLAYLIST_REQUEST, SELECT_TRACK} from './types'
import {PREV, PLAY, PAUSE, NEXT, TOGGLE_TRACK, PROGRESS} from './types';
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


export const setProgress = (progress) => {
  return function (dispatch) {
    dispatch({
      type: PROGRESS,
      payload: progress
    });
  }
}


export const selectTrack = (i) => {
  return function (dispatch) {
    dispatch({
      type: SELECT_TRACK,
      payload: i
    });
  }

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