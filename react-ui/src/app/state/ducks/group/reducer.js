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
      return { ...state, group: null, error: action.payload, loading: false};

    case types.GET_GROUP_LIST:
      return { ...state, groupList: null, error: null, loading: true};
    case types.GET_GROUP_LIST_SUCCESS:
      return { ...state, groupList: action.payload, error:null, loading: false};
    case types.GET_GROUP_LIST_FAILURE:
      return { ...state, groupList: null, error: action.payload, loading: false};

    case types.ADD_GROUP:// loading currentUser("me") from jwttoken in local/session storage storage,
      return { ...state, group: null, error: null, loading: true};
    case types.ADD_GROUP_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, group: action.payload, error:null, loading: false}; //<-- authenticated
    case types.ADD_GROUP_FAILURE:// return error and make loading = false
      return { ...state, group: null, error: action.payload, loading: false};

    case types.UPDATE_GROUP:
      return { ...state, error: null, loading: true};
    case types.UPDATE_GROUP_SUCCESS:
      return { ...state, group: action.payload, error:null, loading: false};
    case types.UPDATE_GROUP_FAILURE:
      return { ...state, error: action.payload, loading: false};


    case types.ADD_GROUP_REVIEW:
      return { ...state, error: null, loading: true};
    case types.ADD_GROUP_REVIEW_SUCCESS:
      return { ...state, group: action.payload, error:null, loading: false};
    case types.ADD_GROUP_REVIEW_FAILURE:
      return { ...state, error: error, loading: false};
    default:
      return state;
  }
}
