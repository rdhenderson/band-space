import * as types from './types';

const INITIAL_STATE = {
  venueList: [],
  venue: {},
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action){
  let error;
  switch (action.type) {
    case types.GET_VENUE:
      return { ...state, venue: null, error: null, loading: true};
    case types.GET_VENUE_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, venue: action.payload, error:null, loading: false}; //<-- authenticated
    case types.GET_VENUE_FAILURE:// return error and make loading = false
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, venue: null, error: error, loading: false};
    case types.GET_VENUE_LIST:
      return { ...state, venueList: null, error: null, loading: true};
    case types.GET_VENUE_LIST_SUCCESS:
      return { ...state, venueList: action.payload, error:null, loading: false};
    case types.GET_VENUE_LIST_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, venueList: null, error: error, loading: false};
    // case ADD_VENUE_REVIEW:// loading currentUser("me") from jwttoken in local/session storage storage,
    //   return { ...state, error: null, loading: true};
    // case ADD_VENUE_REVIEW_SUCCESS://return user, status = authenticated and make loading = false
    //   return { ...state, venue: action.payload.data, error:null, loading: false}; //<-- authenticated
    // case ADD_VENUE_REVIEW_FAILURE:// return error and make loading = false
    //   error = action.payload.data || { message: action.payload.message};//2nd one is network or server down errors
    //   return { ...state, error: error, loading: false};
    default:
      return state;
  }
}
