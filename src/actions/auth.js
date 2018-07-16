import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST} from './types';
import {registerUrl,loginUrl} from "../apiUrls/apiUrl";
import axios from "axios/index";

export const login = value => {
  return function (dispatch) {
    dispatch({type: LOGIN_REQUEST});
    axios.post(loginUrl, value).then(response => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token
      })
    }).catch(err => {
      console.log(err),
      dispatch({
        type: LOGIN_FAILURE,
        payload: err,
      });
    });
  }
};