import {combineReducers} from 'redux';
import {cartReducer} from './cartReducer';
import {userReducer} from './userReducer';

export default combineReducers({
  cartReducer: cartReducer, // Cart state slice
  userReducer: userReducer, // User data state slice
});
