import axios from 'axios';
import * as types from './types'

// export const USER_LOGIN = 'USER_LOGIN';
// export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
// export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
// export const USER_LOGOUT = 'USER_LOGOUT';
// export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
// export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
// export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';

const ROOT_URL = '/api'; //location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function loginUser(credentials) {
  return dispatch => {
    dispatch({type: types.LOGIN_USER});
    axios.post('/api/users/login', credentials)
    .then(
      ({ data }) => {
        localStorage.setItem('jwtToken', data.token);
        dispatch({ type: types.LOGIN_USER_SUCCESS, payload: data })
      },
      ({ err })  => dispatch({ type: types.LOGIN_USER_FAILURE, payload: err })
    );
  }
}
export function signupUser(credentials) {
  return dispatch => {
    dispatch({type: types.SIGNUP_USER});
    axios.post('/api/users/signup', credentials)
    .then(
      ({ data }) => {
        localStorage.setItem('jwtToken', data.token);
        dispatch({ type: types.SIGNUP_USER_SUCCESS, payload: data })
      },
      ({ err })  => dispatch({ type: types.SIGNUP_USER_FAILURE, payload: err })
    );
  }
}


export function logoutUser() {
  localStorage.removeItem('jwtToken');
  return { type: types.LOGOUT_USER }
}
// const { meFromToken, meFromTokenFailure, meFromTokenSuccess }
// Api Call and SUCCESS AND FAILURE WILL BE HANDLED BY apiService Middleware
export function meFromToken() {
  const token = localStorage.getItem('jwtToken');
  return dispatch => {
    dispatch({type: types.ME_FROM_TOKEN});
    const authRequest = {
      method: "GET",
      url: `${ROOT_URL}/users/me/from/token?token=${token}`,
      headers: { 'Authorization': `Bearer ${token}` },
    }
    axios(authRequest)
    .then(
        ({ data }) => dispatch({ type: types.ME_FROM_TOKEN_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.ME_FROM_TOKEN_FAILURE, payload: err })
      );
    }
}

// export function loginUser(user) {
//   return {
//     type: USER_LOGIN,
//     payload: { user: user, isAuth: true }
//   }
// }
//
// // NOTE: Not a pure function -- removes JWT
// export function logoutUser() {
//   localStorage.removeItem('jwtToken');
//   return {
//     type: USER_LOGOUT,
//     payload: {user: null, token: null, isAuth: false}
//   }
// }
//
// export function meFromToken(tokenFromStorage) {
//   //check if the token is still valid, if so, get me from the server
//   const request = axios({
//     method: 'get',
//     url: `${ROOT_URL}/users/me/from/token?token=${tokenFromStorage}`,
//     headers: {
//       'Authorization': `Bearer ${tokenFromStorage}`
//     }
//   });
//
//   return {
//     type: ME_FROM_TOKEN,
//     payload: request
//   };
// }
//
// export function meFromTokenSuccess(currentUser, token) {
//   localStorage.setItem('jwtToken', token)
//   return {
//     type: ME_FROM_TOKEN_SUCCESS,
//     payload: currentUser
//   };
// }
//
// export function meFromTokenFailure(error) {
//   localStorage.removeItem('jwtToken');
//   return {
//     type: ME_FROM_TOKEN_FAILURE,
//     payload: error
//   };
// }
// export function updateUser(updates, id) {
//   const token = localStorage.getItem('jwtToken');
//
//   const request = axios({
//     method: 'put',
//     url: `${ROOT_URL}/users/${id}?token=${token}`,
//     data: updates,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//
//   return {
//     type: UPDATE_USER,
//     payload: request
//   };
// }
//
// export function updateUserSuccess(user) {
//   console.log('USER update success', user);
//   return {
//     type: UPDATE_USER_SUCCESS,
//     payload: user
//   };
// }
//
// export function updateUserFailure(error) {
//   return {
//     type: UPDATE_USER_FAILURE,
//     payload: error
//   };
// }
//
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
//
// export function addUserGroupSuccess(group) {
//   return {
//     type: ADD_USER_GROUP_SUCCESS,
//     payload: group
//   };
// }
//
// export function addUserGroupFailure(error) {
//   return {
//     type: ADD_USER_GROUP_FAILURE,
//     payload: error
//   };
// }
//
// export function addReview(review, id) {
//   const token = localStorage.getItem('jwtToken');
//   //check if the token is still valid, if so, get me from the server
//   const request = axios({
//     method: 'post',
//     url: `${ROOT_URL}/reviews/${id}`,
//     data: review,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//
//   return {
//     type: ADD_REVIEW,
//     payload: request
//   };
// }
//
// export function addReviewSuccess(review) {
//   return {
//     type: ADD_REVIEW_SUCCESS,
//     payload: review
//   };
// }
//
// export function addReviewFailure(error) {
//   return {
//     type: ADD_REVIEW_FAILURE,
//     payload: error
//   };
// }
