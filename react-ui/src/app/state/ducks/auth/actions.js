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
      ({ response, message }) =>
        dispatch({
          type: types.LOGIN_USER_FAILURE,
          payload: (response) ? response.data : message
        })
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
      ({ response, message }) =>
        dispatch({
          type: types.SIGNUP_USER_FAILURE,
          payload: (response) ? response.data : message
        })
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
        ({ data }) => {
          localStorage.setItem('jwtToken', data.token);
          dispatch({ type: types.ME_FROM_TOKEN_SUCCESS, payload: data })
        },
        ({ response, message }) => {
          localStorage.removeItem('jwtToken');
          dispatch({
            type: types.ME_FROM_TOKEN_FAILURE,
            payload: (response) ? response.data : message
          })
      });
    }
}
