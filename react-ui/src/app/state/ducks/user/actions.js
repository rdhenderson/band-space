import axios from 'axios'
import * as types from './types'

// const validateStatus = (status) => status >= 200 && status < 300; // default

const ROOT_URL = '/api/users';

export function getUser(id) {
  return dispatch => {
    dispatch({type: types.GET_USER})
    axios.get(`${ROOT_URL}/${id}`)
    .then(
      ({ data }) => dispatch({ type: types.GET_USER_SUCCESS, payload: data }),
      ({ response, message }) =>
        dispatch({
          type: types.GET_USER_FAILURE,
          payload: (response) ? response.data : message
        })
    );
  }
}

export function getUserList() {
  return dispatch => {
    dispatch({type: types.GET_USER_LIST})
    axios.get(ROOT_URL)
    .then(
        ({ data }) => dispatch({ type: types.GET_USER_LIST_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.GET_USER_LIST_FAILURE,
            payload: (response) ? response.data : message
          })
      );
    }
}

export function updateUser(user) {
  return dispatch => {
    dispatch({type: types.UPDATE_USER})
    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'put',
      url: `${ROOT_URL}/${user._id || user.id}`,
      data: user,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
      ({ data }) => dispatch({ type: types.UPDATE_USER_SUCCESS, payload: data }),
      ({ response, message }) =>
        dispatch({
          type: types.UPDATE_USER_FAILURE,
          payload: (response) ? response.data : message
        })
      );
  }
}

export function addUser(user) {
  return dispatch => {
    dispatch({type: types.ADD_USER})
    const token = localStorage.getItem('jwtToken');

    axios({
      method: 'post',
      url: ROOT_URL,
      data: user,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.ADD_USER_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_USER_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}

export function addUserGroup(user, id) {
  return dispatch => {
    dispatch({type: types.ADD_USER_GROUP})
    const token = localStorage.getItem('jwtToken');

    axios({
      method: 'put',
      url: `${ROOT_URL}/${user._id}`,
      data: user,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.ADD_USER_GROUP_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_USER_GROUP_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}
