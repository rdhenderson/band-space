import axios from 'axios';
import * as types from './types'

// const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = '/api/reviews';

export function getReview(id) {
  return dispatch => {
    dispatch({type: types.GET_REVIEW})
    axios.get(`${ROOT_URL}/${id}`)
    .then(
        ({ data }) => dispatch({ type: types.GET_REVIEW_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.GET_REVIEW_FAILURE, payload: err })
      );
    }
}

export function getReviewList(id) {
  return dispatch => {
    dispatch({type: types.GET_REVIEW_LIST})
    axios.get(`${ROOT_URL}/${id}`)
    .then(
        ({ data }) => dispatch({ type: types.GET_REVIEW_LIST_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.GET_REVIEW_LIST_FAILURE, payload: err })
      );
    }
}

export function addReview(review) {
  return dispatch => {
    dispatch({type: types.ADD_REVIEW})

    const token = localStorage.get('jwtToken');
    axios({
      method: 'post',
      url: ROOT_URL,
      data: review,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.ADD_REVIEW_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.ADD_REVIEW_FAILURE, payload: err })
      );
  }
}
export function updateReview(review) {
  return dispatch => {
    dispatch({type: types.UPDATE_REVIEW})

    const token = localStorage.get('jwtToken');
    axios({
      method: 'post',
      url: `${ROOT_URL}/${review._id}`,
      data: review,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.UPDATE_REVIEW_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.UPDATE_REVIEW_FAILURE, payload: err })
      );
  }
}
// export function addUserGroup(group, id) {
//   const token = localStorage.getItem('jwtToken');
//   //check if the token is still valid, if so, get me from the server
//   const request = axios({
//     method: 'post',
//     url: `${ROOT_URL}/users/${id}/groups`,
//     data: group,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//
//   return {
//     type: ADD_USER_GROUP,
//     payload: request
//   };
// }
