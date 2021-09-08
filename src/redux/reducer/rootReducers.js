import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';

const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

export default rootReducers;
