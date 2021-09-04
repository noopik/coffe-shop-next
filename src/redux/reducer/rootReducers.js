import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  user: userReducer,
});

export default rootReducers;
