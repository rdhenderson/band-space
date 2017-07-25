//Here all we need is the combineReducers function to combine our reducers so we can export them to our store
import { combineReducers } from 'redux';
import { reducer as userAuthReducer } from './userAuth';
import { reducer as venueReducer } from './venue';
// import { reducer as userDataReducer } from '../userData';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: userAuthReducer,
  venue: venueReducer,
  burgerMenu: burgerMenu,
  form: formReducer,
});

export default rootReducer;
