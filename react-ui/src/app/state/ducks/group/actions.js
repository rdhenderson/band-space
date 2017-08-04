import axios from 'axios'

import { types } from './index'
import { getAuthId } from '../auth/reducer'

const ROOT_URL = '/api/groups';

export function getGroup(id) {
  return dispatch => {
    dispatch({type: types.GET_GROUP})
    axios.get(`${ROOT_URL}/${id}`)
    .then(
      ({ data }) => dispatch({ type: types.GET_GROUP_SUCCESS, payload: data }),
      ({ response, message }) =>
        dispatch({
          type: types.GET_GROUP_FAILURE,
          payload: (response) ? response.data : message
        })
    );
  }
}

export function getGroupList() {
  return dispatch => {
    dispatch({type: types.GET_GROUP_LIST})
    axios.get(ROOT_URL)
    .then(
        ({ data }) => dispatch({ type: types.GET_GROUP_LIST_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.GET_GROUP_LIST_FAILURE,
            payload: (response) ? response.data : message
          })
      );
    }
}

export function updateGroup(group) {
  return dispatch => {
    dispatch({type: types.UPDATE_GROUP})
    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'put',
      url: `${ROOT_URL}/${group._id || group.id}`,
      data: group,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.UPDATE_GROUP_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.UPDATE_GROUP_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}

export function addGroup(group) {
  return dispatch => {
    dispatch({type: types.ADD_GROUP})
    const token = localStorage.getItem('jwtToken');

    axios({
      method: 'post',
      url: ROOT_URL,
      data: group,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.ADD_GROUP_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_GROUP_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}

export function addGroupReview(review) {
  return (dispatch, getState) => {
    const state = getState();
    const reviewMeta = { author: getAuthId(state), subject: state.group.group._id}
    const newReview = { ...review, ...reviewMeta };
    dispatch({type: types.ADD_GROUP_REVIEW})
    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'post',
      url: `/api/reviews/groups/`,
      data: newReview,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.ADD_GROUP_REVIEW_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_GROUP_REVIEW_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}
