import { combineReducers } from 'redux'

import * as types from '../types';
import venue from './venue'

function byId(state = {}, action) {
  if (action.response) {
    return {
      ...state,
      ...action.response.venues,
    };
  }
  return state;
}

const ids = (state = [], action) => {
   switch (action.type) {
     case types.GET_VENUE_LIST_SUCCESS:
       return action.response.results
     case types.ADD_VENUE_SUCCESS:
       return [...state, action.response.results];
     default:
       return state;
   }
 };

export default combineReducers({ids, byId})
