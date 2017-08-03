import * as types from '../types';

export default function error(state = false, action) {
  switch(action.type) {
    case types.GET_VENUE_FAILURE:
    case types.ADD_VENUE_FAILURE:
    case types.ADD_VENUE_REVIEW_FAILURE:
    case types.ADD_VENUE_EVENT_FAILURE:
      return action.payload;
    case types.GET_VENUE_SUCCESS:
    case types.ADD_VENUE_SUCCESS:
    case types.ADD_VENUE_REVIEW_SUCCESS:
    case types.ADD_VENUE_EVENT_SUCCESS:
      return false;
    default:
      return false;
  }
}
