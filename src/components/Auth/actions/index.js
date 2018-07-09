import axios from 'axios';
import {loginUrl} from '../../../api_client/urls';
import {LOGIN_FAILURE,LOGIN_SUCCESS,FETCH_LOGIN_REQUEST} from "./types";
export const login = value => {
    return function (dispatch) {
        dispatch({type: FETCH_LOGIN_REQUEST});
        axios.post(loginUrl, value).then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        }).catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err,
            });
        });
    }
}