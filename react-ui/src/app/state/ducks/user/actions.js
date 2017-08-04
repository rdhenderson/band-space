import axios from 'axios'
import _ from 'lodash'
import * as types from './types'
import { getAllUsers, getUserById } from './selectors'
import { getAuthId, getAuthToken } from '../auth/reducer'
// const validateStatus = (status) => status >= 200 && status < 300; // default

const ROOT_URL = '/api/users';


export const fetchUserList = () => ({
  type: types.GET_USER_LIST,
  payload: {
    request: {
        url: '/api/users',
        method: 'GET',
    },
  }
});

export const updateUser = (user) => (dispatch, getState) => ({
  type: types.UPDATE_USER,
  payload: {
    request: {
      url: `/api/users/${user._id}?token=${getAuthToken(getState())}`,
      method: 'PUT',
      data: user,
      headers: {
        'Authorization': `Bearer ${getAuthToken(getState())}`
      }
    },
  }
});

export const addUserGroup = (user) => (dispatch, getState) => ({
  type: types.UPDATE_USER,
  payload: {
    request: {
        url: `/api/users/${user._id}/groups`,
        method: 'POST',
        data: user,
        headers: {
          'Authorization': `Bearer ${getAuthToken(getState())}`
        }
    },
  }
});

export const addUserReview = (review) => {
  return (dispatch, getState) => {
    const state = getState();
    const reviewMeta = { author: getAuthId(state), subject: state.user.user._id}
    dispatch({
      type: types.UPDATE_USER,
      payload: {
        request: {
            url: `/api/reviews/users`,
            method: 'POST',
            data: { ...review, ...reviewMeta },
            headers: {
              'Authorization': `Bearer ${getAuthToken()}`
            }
        },
      }
    });
  }
};

// Check if last updated was more than 5 minutes ago
const isStale = (lastUpdated) => {
  var timeDiff = Math.abs(lastUpdated - new Date().getTime());
  return timeDiff > 300000;
}
