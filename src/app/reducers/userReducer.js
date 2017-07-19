//Here we import our action types as constants from our actions folder.
import {
  USER_LOGIN, USER_LOGOUT, ME_FROM_TOKEN,
  ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE } from '../actions/userActions';

//It is best practice to define your initial state as a constant that gets passed as an argument to your reducer function
const INITIAL_STATE = {
  user: null,
  isAuth: false,
  error: null,
  loading: false,
};

//REMEMBER: a reducer is just a function that takes in state & action, and returns a new object.
//RECALL: each reducer gets ALL actions, that is why we use a switch on action.type to let
//the specific reducer that relates to the action type know to return a new state object.
//BURN INTO YOUR BRAIN: NEVER MUTATE STATE. ALWAYS RETURN NEW STATE. NEVER MUTATE STATE.
//When we return {...state, newState}, ES6 destructuring strips state into new objects/arrays/ints/etc
export default function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
      case USER_LOGIN:
        return {...state, user: action.payload.user, isAuth: true, error: null, loading:false }
      case USER_LOGOUT:
        return {...state, user: null, isAuth:false, error: null, loading: false }
      case ME_FROM_TOKEN:// loading currentUser("me") from jwttoken in local/session storage storage,
        return { ...state, user: null, isAuth: false, error:null, loading: true};
      case ME_FROM_TOKEN_SUCCESS://return user, status = authenticated and make loading = false
        return { ...state, user: action.payload.data.user, isAuth: true, error:null, loading: false}; //<-- authenticated
      case ME_FROM_TOKEN_FAILURE:// return error and make loading = false
        error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
        return { ...state, user: null, isAuth: false, error: error, loading: false};
      default:
        return state;
    }
}