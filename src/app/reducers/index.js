//Here all we need is the combineReducers function to combine our reducers so we can export them to our store

import { combineReducers } from "redux"
import {reducer as burgerMenu} from 'redux-burger-menu';
import user from './reducer_user'

export default combineReducers({
  burgerMenu,
  user
})
