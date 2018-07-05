import {FETCH_PLAYLIST_SUCCESS} from '../actions/types'
import {FETCH_PLAYLIST_FAILURE} from '../actions/types'
import {FETCH_PLAYLIST_REQUEST} from '../actions/types'



const initialState = {
    playList: null,
    isLoading:false,
    errors:null,
};


export default function (state = initialState,action) {
     switch (action.type){
         case FETCH_PLAYLIST_REQUEST:
            return{
                ...state,
                isLoading:true
            }
         case FETCH_PLAYLIST_SUCCESS:
             return{
                 ...state,
                 playList:action.payload,
                 errors:null
             }
         case FETCH_PLAYLIST_FAILURE:
             return{
                 ...state,
                 errors:action.payload
             }
         default:
             return state
     }
}