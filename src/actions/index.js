import {FETCH_PLAYLIST_SUCCESS} from '../actions/types'
import {FETCH_PLAYLIST_FAILURE} from '../actions/types'
import {FETCH_PLAYLIST_REQUEST} from '../actions/types'
import axios from "axios/index";

export const getPlayList = id => {
    return function (dispatch) {
        dispatch({type: FETCH_PLAYLIST_REQUEST});
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=eminem').then(response => {
            dispatch({
                type: FETCH_PLAYLIST_SUCCESS,
                payload:response,
            });
        }).catch(err => {
            dispatch({
                type:FETCH_PLAYLIST_FAILURE,
                payload:err,
            });
        })
    }
}