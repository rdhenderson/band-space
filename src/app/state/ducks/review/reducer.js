import * as types from './types';

const INITIAL_STATE = {
  review: {},
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action){
  let error;
  switch (action.type) {
    case types.GET_REVIEW:
      return { ...state, review: null, error: null, loading: true};
    case types.GET_REVIEW_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, review: action.payload, error:null, loading: false}; //<-- authenticated
    case types.GET_REVIEW_FAILURE:// return error and make loading = false
      return { ...state, review: null, error: action.payload, loading: false};

    case types.ADD_REVIEW:// loading currentUser("me") from jwttoken in local/session storage storage,
      return { ...state, review: null, error: null, loading: true};
    case types.ADD_REVIEW_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, review: action.payload, error:null, loading: false}; //<-- authenticated
    case types.ADD_REVIEW_FAILURE:// return error and make loading = false
      return { ...state, review: null, error: action.payload, loading: false};

    case types.UPDATE_REVIEW:// loading currentUser("me") from jwttoken in local/session storage storage,
      return { ...state, review: null, error: null, loading: true};
    case types.UPDATE_REVIEW_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, review: action.payload, error:null, loading: false}; //<-- authenticated
    case types.UPDATE_REVIEW_FAILURE:// return error and make loading = false
      return { ...state, review: null, error: action.payload, loading: false};

    default:
      return state;
  }
}
