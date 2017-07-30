
//Here we import our action types as constants from our actions folder.
import * as types from './types';

//It is best practice to define your initial state as a constant that gets passed as an argument to your reducer function
const INITIAL_STATE = {
  user: null,
  userList: null,
  error: null,
  loading: true,
};

export default function reducer(state = INITIAL_STATE, action){
  let error;
  switch (action.type) {
    case types.GET_USER:
      return { ...state, error: null, loading: true};
    case types.GET_USER_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, user: action.payload, error:null, loading: false}; //<-- authenticated
    case types.GET_USER_FAILURE:// return error and make loading = false
      return { ...state, error: action.payload, loading: false};

    case types.GET_USER_LIST:
      return { ...state, error: null, loading: true};
    case types.GET_USER_LIST_SUCCESS:
      return { ...state, userList: action.payload, error:null, loading: false};
    case types.GET_USER_LIST_FAILURE:
      return { ...state, error: action.payload, loading: false};

    case types.UPDATE_USER:// loading currentUser("me") from jwttoken in local/session storage storage,
      return { ...state, error:null, loading: true};
    case types.UPDATE_USER_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, user: action.payload, error:null, loading: false}; //<-- authenticated
    case types.UPDATE_USER_FAILURE:// return error and make loading = false
      return { ...state, error: action.payload, loading: false};

    case types.ADD_USER_GROUP:
      return { ...state, error:null, loading: true};
    case types.ADD_USER_GROUP_SUCCESS:
      return { ...state, user: action.payload, error:null, loading: false};
    case types.ADD_USER_GROUP_FAILURE:
      return { ...state, user: null, error: action.payload, loading: false};

    // case types.ADD_USER_REVIEW:// loading currentUser("me") from jwttoken in local/session storage storage,
    //   return { ...state, error: null, loading: true};
    // case types.ADD_USER_REVIEW_SUCCESS://return user, status = authenticated and make loading = false
    //   return { ...state, user: action.payload.data, isAuth: true, error:null, loading: false}; //<-- authenticated
    // case types.ADD_USER_REVIEW_FAILURE:// return error and make loading = false
    //   error = action.payload.data || { message: action.payload.message};//2nd one is network or server down errors
    //   return { ...state, user: null, isAuth: false, error: error, loading: false};
    default:
      return state;
  }
}
