import { combineReducers } from 'redux';
import {devsReducer} from './reducer'

const rootReducer = combineReducers({
  devs : devsReducer
});

export default rootReducer;
