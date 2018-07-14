import {combineReducers} from 'redux';
import playlist from './playlist';
import player from './player';
import search from './search'

export default combineReducers({
  playlist,
  player,
  search
})