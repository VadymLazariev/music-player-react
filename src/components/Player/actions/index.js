import {
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_REQUEST,
  SELECT_TRACK,
  FETCH_MOCK_PLAYLIST,
  FETCH_SEARCH_VALUE
} from './types'
import {PREV, PLAY, PAUSE, NEXT, TOGGLE_TRACK, PROGRESS} from './types';
import axios from "axios/index";
import tracks from "../../../assets/tracksMock"

export const getPlayList = (querryParam) => {
  return function (dispatch) {
    dispatch({type: FETCH_PLAYLIST_REQUEST});
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${querryParam}`).then(response => {
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


export const setSearchValue = (value) =>{
  return function (dispatch) {
    dispatch({
      type:FETCH_SEARCH_VALUE,
      payload:value,
    });
  }
}


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