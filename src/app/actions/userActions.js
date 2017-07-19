export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function loginUser(user, token) {
  return {
    type: USER_LOGIN,
    payload: { user, token }
  }
}
export function logoutUser() {
  return {
    type: USER_LOGOUT,
    payload: {user: null, token: null}
  }
}
