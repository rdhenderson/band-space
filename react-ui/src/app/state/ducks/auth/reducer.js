/************************************************
 * Auth State Branch:                           *
 * auth: {                                      *
 *  loading: [bool = false] - loading status    *
 *  error: [String] - error message             *
 *  token: [String] - user JWT                  *
 *  id: [String] -- authorized user ID          *
 * }                                            *
 * Selectors:                                   *
 *  - isAuthorized(state) - bool                *
 *  - getAuthId(state) - authorized user id     *
 *  - isAuthError(state) - error or null        *
 *  - isAuthLoading(state) - loading state      *
 *  - getAuthUser(state) - current user         *
 ************************************************/
import * as types from './types'
import {combineReducers} from 'redux'
import { getUser } from '../user/reducer'

const loading = (state = false, action) => {
  switch (action.type) {
    case types.AUTH:
      return true;
    case types.AUTH_SUCCESS:
    case types.AUTH_FAILURE:
      return false
    default:
      return state;
  }
}
const error = (state = false, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return false;
    case types.AUTH_FAILURE:
      return action.payload
    default:
      return state;
  }
}

const token = (state = null, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return action.payload.data.token;
    case types.AUTH_FAILURE:
      return null;
    default:
      return state;
  }
}

const id = (state = null, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return action.payload.data.user._id;
    case types.AUTH_FAILURE:
      return null;
    default:
      return state;
  }
}
export default combineReducers({ error, loading, token, id })

/******************
 * Auth Selectors *
 ******************/
export const isAuthorized  = state => (state.auth.id !== null)
export const isAuthLoading = state => state.auth.loading
export const getAuthId     = state => state.auth.id;
export const isAuthError   = state => state.auth.error
export const getAuthUser   = state => getUser(state, getAuthId(state))
export const getAuthToken  = state => state.auth.token
