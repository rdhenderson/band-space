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
      return { ...state, error: null, loading: true};
    case types.GET_VENUE_SUCCESS:
      return { ...state, venue: action.payload, error:null, loading: false};
    case types.GET_VENUE_FAILURE:
      return { ...state, error: action.payload, loading: false};

    case types.GET_VENUE_LIST:
      return { ...state, error: null, loading: true};
    case types.GET_VENUE_LIST_SUCCESS:
      return { ...state, venueList: action.payload, error:null, loading: false};
    case types.GET_VENUE_LIST_FAILURE:
      return { ...state, error: action.payload, loading: false};

    case types.ADD_VENUE:
      return { ...state, error: null, loading: true};
    case types.ADD_VENUE_SUCCESS:
      return { ...state, venue: action.payload, error:null, loading: false};
    case types.ADD_VENUE_FAILURE:
      return { ...state, error: action.payload, loading: false};

    case types.UPDATE_VENUE:
      return { ...state, error: null, loading: true};
    case types.UPDATE_VENUE_SUCCESS:
      return { ...state, venue: action.payload, error:null, loading: false};
    case types.UPDATE_VENUE_FAILURE:
      return { ...state, error: action.payload, loading: false};

    case types.ADD_VENUE_REVIEW:
      return { ...state, error: null, loading: true};
    case types.ADD_VENUE_REVIEW_SUCCESS:
      return { ...state, venue: action.payload, error:null, loading: false};
    case types.ADD_VENUE_REVIEW_FAILURE:
      return { ...state, error: action.payload, loading: false};

    case types.ADD_VENUE_EVENT:
      return { ...state, error: null, loading: true};
    case types.ADD_VENUE_EVENT_SUCCESS:
      return { ...state, venue: action.payload, error:null, loading: false};
    case types.ADD_VENUE_EVENT_FAILURE:
      return { ...state, error: action.payload, loading: false};
    default:
      return state;
  }
}
