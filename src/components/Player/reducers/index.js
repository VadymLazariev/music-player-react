import {combineReducers} from 'redux';
import playlist from './playlist';
import player from './player';
import authReducer from '../../../components/Auth/reducers/authReducers'

import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    authReducer,
  playlist,
  player,
    form: formReducer,

})