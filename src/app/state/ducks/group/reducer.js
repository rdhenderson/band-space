//Here we import our action types as constants from our actions folder.

import * as types from './types'

const INITIAL_STATE = {
  groupList: [],
  group: {},
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action){
  let error;
  switch (action.type) {
    case types.GET_GROUP:
      return { ...state, group: null, error: null, loading: true};
    case types.GET_GROUP_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, group: action.payload, error:null, loading: false}; //<-- authenticated
    case types.GET_GROUP_FAILURE:// return error and make loading = false
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, group: null, error: error, loading: false};
    case types.GET_GROUP_LIST:
      return { ...state, groupList: null, error: null, loading: true};
    case types.GET_GROUP_LIST_SUCCESS:
      return { ...state, groupList: action.payload, error:null, loading: false};
    case types.GET_GROUP_LIST_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, groupList: null, error: error, loading: false};
    // case ADD_GROUP_REVIEW:// loading currentUser("me") from jwttoken in local/session storage storage,
    //   return { ...state, error: null, loading: true};
    // case ADD_GROUP_REVIEW_SUCCESS://return user, status = authenticated and make loading = false
    //   return { ...state, group: action.payload.data, error:null, loading: false}; //<-- authenticated
    // case ADD_GROUP_REVIEW_FAILURE:// return error and make loading = false
    //   error = action.payload.data || { message: action.payload.message};//2nd one is network or server down errors
    //   return { ...state, error: error, loading: false};
    default:
      return state;
  }
}
