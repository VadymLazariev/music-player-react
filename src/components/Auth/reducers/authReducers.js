import {LOGIN_FAILURE, LOGIN_SUCCESS, FETCH_LOGIN_REQUEST} from "../actions/types";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    errors: null,
    currentUser: null,
};

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading:false,
                currentUser:action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                errors:action.payload
            };
        default:
            return state
    }
}