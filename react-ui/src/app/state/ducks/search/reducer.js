import * as types from './types';

const INITIAL_STATE = {
  query: '',
  searchType: types.searchType.venue
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_QUERY:
      return { ...state, query: action.payload };
    case types.CHANGE_SEARCH_TYPE:
      return { ...state, searchType: action.payload };
    case types.RESET_SEARCH:
      return INITIAL_STATE
    default:
      return state;
  }
}
