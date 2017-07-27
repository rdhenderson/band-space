//Here we import our action types as constants from our actions folder.
import {
  GET_GROUP, GET_GROUP_SUCCESS, GET_GROUP_FAILURE,
  GET_GROUP_LIST, GET_GROUP_LIST_SUCCESS, GET_GROUP_LIST_FAILURE,
  // ADD_GROUP, ADD_GROUP_FAILURE, ADD_GROUP_SUCCESS,
  // ADD_GROUP_EVENT, ADD_GROUP_EVENT_FAILURE, ADD_GROUP_EVENT_SUCCESS,
  // ADD_GROUP_REVIEW, ADD_GROUP_REVIEW_FAILURE, ADD_GROUP_REVIEW_SUCCESS,
  // UPDATE_GROUP, UPDATE_GROUP_FAILURE, UPDATE_GROUP_SUCCESS,
  // REMOVE_GROUP, REMOVE_GROUP_FAILURE, REMOVE_GROUP_SUCCESS,
} from './types';

const INITIAL_STATE = {
  groupList: [],
  group: {},
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action){
  let error;
  switch (action.type) {
    case GET_GROUP:
      return { ...state, group: null, error: null, loading: true};
    case GET_GROUP_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, group: action.payload, error:null, loading: false}; //<-- authenticated
    case GET_GROUP_FAILURE:// return error and make loading = false
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, group: null, error: error, loading: false};
    case GET_GROUP_LIST:
      return { ...state, groupList: null, error: null, loading: true};
    case GET_GROUP_LIST_SUCCESS:
      return { ...state, groupList: action.payload, error:null, loading: false};
    case GET_GROUP_LIST_FAILURE:
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
