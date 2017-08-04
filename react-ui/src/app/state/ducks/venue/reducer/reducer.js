import { combineReducers } from 'redux'
import * as types from '../types';

/**************************************************
 * List methods:                                  *
 * @method byId is a user map with id as the key. *
 * @method ids is an array of all user ids        *
 **************************************************/
function byId(state = {}, action) {
  switch (action.type) {
    case types.GET_VENUE_LIST_SUCCESS:
    case types.UPDATE_VENUE_SUCCESS:
    case types.ADD_VENUE_SUCCESS:
      return {...state, ...action.response };
    default:
      return state;
  }
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

const list = combineReducers({ids, byId})

const error = (state = false, action) => {
  switch(action.type) {
    case types.ADD_VENUE_FAILURE:
    case types.GET_VENUE_LIST_FAILURE:
    case types.UPDATE_VENUE_FAILURE:
      return action.payload;
    case types.GET_VENUE_LIST_SUCCESS:
    case types.ADD_VENUE_SUCCESS:
    case types.UPDATE_VENUE_SUCCESS:
      return false;
    default:
      return false;
   }
 }

 const loading = (state = false, action) => {
   switch(action.type) {
     case types.GET_VENUE_LIST:
     case types.ADD_VENUE:
     case types.UPDATE_VENUE:
       return true;
     case types.GET_VENUE_LIST_SUCCESS:
     case types.GET_VENUE_LIST_FAILURE:
     case types.ADD_VENUE_SUCCESS:
     case types.ADD_VENUE_FAILURE:
     case types.UPDATE_VENUE_SUCCESS:
     case types.UPDATE_VENUE_FAILURE:
       return false;
     default:
       return false;
   }
 }

export default combineReducers({ list, error, loading })
