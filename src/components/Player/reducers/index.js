import {combineReducers} from 'redux';
import playlist from './playlist';
import player from './player';

export default combineReducers({
  playlist,
  player,
})