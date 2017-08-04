
//Here we import our action types as constants from our actions folder.
import * as types from './types';
import { createSelector } from 'reselect'
import { getAuthId } from '../auth/reducer'
import { combineReducers } from 'redux'

import { normalizeItem, normalizeArray } from '../../utils/normalizeData.js'

/**************************************************
 * List methods:                                  *
 * @method byId is a user map with id as the key. *
 * @method ids is an array of all user ids        *
 **************************************************/
function byId(state = {}, action) {
  // if (action.response) {
  switch (action.type) {
    case types.GET_USER_LIST_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
    case types.ADD_USER_SUCCESS:
      return {...state, ...action.response.entities };
    default:
      return state;
  }
}

const ids = (state = [], action) => {
   switch (action.type) {
     case types.GET_USER_LIST_SUCCESS:
       return action.response.results
     case types.ADD_USER_SUCCESS:
       return [...state, action.response.results];
     default:
       return state;
   }
};

const list = combineReducers({ids, byId})

const error = (state = false, action) => {
  switch(action.type) {
    case types.GET_USER_LIST_FAILURE:
    case types.UPDATE_USER_FAILURE:
      return action.payload;
    case types.GET_USER_LIST_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return false;
    default:
      return false;
   }
 }

 const loading = (state = false, action) => {
   switch(action.type) {
     case types.GET_USER_LIST:
     case types.UPDATE_USER:
       return true;
     case types.GET_USER_LIST_SUCCESS:
     case types.GET_USER_LIST_FAILURE:
     case types.UPDATE_USER_SUCCESS:
     case types.UPDATE_USER_FAILURE:
       return false;
     default:
       return false;
   }
 }

export default combineReducers({ list, error, loading })

export const getUser = (state, id) => state.user.list.byId[id]
export const getUserById = (state, id) => state.list.byId[id]
export const isUserError = state => state.user.error
export const isUserLoading = state => state.user.loading
export const getUserList = state =>
  state.user.list.ids.map( (id) => state.user.list.byId[id]);

export const getAllUsers = (state) => getUserList(state);
export const getAuthUser = (state) => getUserById(state, getAuthId(state));
