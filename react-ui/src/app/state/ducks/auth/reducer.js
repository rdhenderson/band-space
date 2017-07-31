//Here we import our action types as constants
import * as types from './types'

//It is best practice to define your initial state as a constant that gets passed as an argument to your reducer function
const token = localStorage.getItem('jwtToken');

const INITIAL_STATE = {
  user: null,
  isAuth: false,
  error: null,
  loading: true,
  authId: null,
  token,
};

export default function reducer(state = INITIAL_STATE, action){
  let error, user;

  switch (action.type) {
    case types.LOGIN_USER:
      return {...state, isAuth: false, error: null, loading:true }
    case types.LOGIN_USER_SUCCESS:
      user = action.payload.user;
      return {...state, id: user._id, token: action.payload.token, user: action.payload.user, isAuth: true, error: null, loading:false }
    case types.LOGIN_USER_FAILURE:
      return {...state, isAuth: false, error: action.payload, loading:false }
    case types.SIGNUP_USER:
      return {...state, isAuth: false, error: null, loading:true }
    case types.SIGNUP_USER_SUCCESS:
      user = action.payload.user;
      return {...state, id: user._id, token: action.payload.token, user: action.payload.user, isAuth: true, error: null, loading:false }
    case types.SIGNUP_USER_FAILURE:
      return {...state, token: null, isAuth: false, error: action.payload, loading:false }
    case types.LOGOUT_USER:
      return {...state, token: null, user: null, isAuth:false, error: null, loading: false }
    case types.ME_FROM_TOKEN:// loading currentUser("me") from jwttoken in local/session storage storage,
      return { ...state, loading: true};
    case types.ME_FROM_TOKEN_SUCCESS://return user, status = authenticated and make loading = false
      user = action.payload.user;
      return { ...state, id: user._id, token: action.payload.token, user: action.payload.user, isAuth: true, error:null, loading: false}; //<-- authenticated
    case types.ME_FROM_TOKEN_FAILURE:// return error and make loading = false
      // error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, token: null, error: action.payload, loading: false};
    default:
      return state;
  }
}
