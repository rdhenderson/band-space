import * as types from './types'

export const loginUser = (credentials) => ({
  type: types.AUTH,
  payload: {
    request: {
        url: '/api/users/login',
        method: 'POST',
        data: credentials
    },
  }
});

export const signupUser = (credentials) => ({
  type: types.AUTH,
  payload: {
    request: {
        url: '/api/users/signup',
        method: 'POST',
        data: credentials
    },
  }
});

export const meFromToken = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token !== null) {
      dispatch({
        type: types.AUTH,
        payload: {
          request: {
            method: "GET",
            url: `/api/users/me/from/token?token=${token}`,
            headers: { 'Authorization': `Bearer ${token}` },
          }
        }
      })
    }
  }
}

export function logoutUser() {
  return { type: types.LOGOUT_USER }
}
