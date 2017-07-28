import axios from 'axios'

import { types } from './index'

const ROOT_URL = '/api/groups';

export function getGroup(id) {
  return dispatch => {
    dispatch({type: types.GET_GROUP})
    axios.get(`${ROOT_URL}/${id}`)
    .then(
      ({ data }) => dispatch({ type: types.GET_GROUP_SUCCESS, payload: data }),
      ({ err })  => dispatch({ type: types.GET_GROUP_FAILURE, payload: err })
    );
  }
}

export function getGroupList() {
  return dispatch => {
    dispatch({type: types.GET_GROUP_LIST})
    axios.get(ROOT_URL)
    .then(
        ({ data }) => dispatch({ type: types.GET_GROUP_LIST_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.GET_GROUP_LIST_FAILURE, payload: err })
      );
    }
}

export function updateGroup(group) {
  return dispatch => {
    dispatch({type: types.UPDATE_GROUP})
    const token = localStorage.get('jwtToken');
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
        ({ err })  => dispatch({ type: types.UPDATE_GROUP_FAILURE, payload: err })
      );
  }
}

export function addGroup(group) {
  return dispatch => {
    dispatch({type: types.ADD_GROUP})
    const token = localStorage.get('jwtToken');

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
        ({ err })  => dispatch({ type: types.ADD_GROUP_FAILURE, payload: err })
      );
  }
}
