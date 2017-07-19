//Here all we need is the combineReducers function to combine our reducers so we can export them to our store
import { combineReducers } from 'redux';
import UserReducer from './userReducer.js';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  burgerMenu:   burgerMenu,
  form: formReducer,
});

export default rootReducer;
