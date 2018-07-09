import {combineReducers} from 'redux';
import playlist from './playlist';
import player from './player';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  playlist,
  player,
    form: formReducer,
})