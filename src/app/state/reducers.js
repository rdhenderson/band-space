//Here all we need is the combineReducers function to combine our reducers so we can export them to our store
import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';

import { auth, group, user, venue } from './ducks';


const rootReducer = combineReducers({
  auth: auth,
  group: group,
  user: user,
  venue: venue,
  burgerMenu: burgerMenu,
  form: formReducer,
});

export default rootReducer;
