import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_SEARCH_VALUE
} from "../actions/types";


const initialState = {
  searchPlayList:[],
  currentTrack:null,
  searchValue:null,
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
        currentTrack: action.payload.currentTrack,
        errors: null,
        isLoading: false,
      };
    case FETCH_PLAYLIST_FAILURE:

      return {
        ...state,
        errors: action.payload
      };
    case FETCH_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    default:
      return state
  }
}