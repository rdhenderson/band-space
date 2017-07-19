//Here all we need is the combineReducers function to combine our reducers so we can export them to our store
import { combineReducers } from 'redux';
import UserReducer from './userReducer.js';
// import { reducer as formReducer } from 'redux-form';
import {reducer as burgerMenu} from 'redux-burger-menu';

const rootReducer = combineReducers({
  user: UserReducer,
  // validateFields: ValidateUserFieldsReducer,
  // form: formReducer, // <-- redux-form
  burgerMenu:   burgerMenu,
});

export default rootReducer;
