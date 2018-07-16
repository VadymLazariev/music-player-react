import {combineReducers} from 'redux';
import playlist from './playlist';
import player from './player';
import search from './search';
import auth from './auth';
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
  playlist,
  player,
  search,
  auth,
  form: formReducer
})