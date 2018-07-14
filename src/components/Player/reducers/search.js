import {FETCH_PLAYLIST_FAILURE, FETCH_PLAYLIST_REQUEST, FETCH_PLAYLIST_SUCCESS} from "../actions/types";


const initialState = {
  searchPlayList:null,
  index: 0,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        searchPlayList: action.payload.playlist,
        errors: null,
        isLoading: false,
      };
    case FETCH_PLAYLIST_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state
  }
}