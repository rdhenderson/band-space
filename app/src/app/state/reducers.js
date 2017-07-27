//Here all we need is the combineReducers function to combine our reducers so we can export them to our store
import { combineReducers } from 'redux';
import { auth, venue } from './ducks';
// import { reducer as venueReducer } from './ducks/venue';
// import { reducer as userDataReducer } from '../userData';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';


console.log("venues", venue);

const rootReducer = combineReducers({
  user: auth,
  venue: venue,
  burgerMenu: burgerMenu,
  form: formReducer,
});

export default rootReducer;
