import * as types from './types';
import expect from 'expect';
import deepFreeze from 'deepFreeze';

const INITIAL_STATE = {

  lastUpdated: null,
  error: null,
  loading: false,
};

export const loading = (state=false, action) => {
  
}

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


    default:
      return state;
  }
}
