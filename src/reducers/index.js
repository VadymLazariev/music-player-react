import {combineReducers} from 'redux';

import search from './search';
import auth from './auth';
import {reducer as formReducer} from 'redux-form';
import player from './player';

export default combineReducers({
  player,
  search,
  auth,
  form: formReducer
})