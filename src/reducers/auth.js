import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST} from "../actions/types";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  errors: null,
  token: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    default:
      return state
  }
}