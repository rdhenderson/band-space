import * as types from '../types';

export default function loading(state = false, action) {
  switch(action.type) {
    case types.GET_VENUE:
    case types.ADD_VENUE:
    case types.ADD_VENUE_REVIEW:
    case types.ADD_VENUE_EVENT:
      return true;
    case types.GET_VENUE_SUCCESS:
    case types.ADD_VENUE_SUCCESS:
    case types.ADD_VENUE_REVIEW_SUCCESS:
    case types.ADD_VENUE_EVENT_SUCCESS:
    case types.GET_VENUE_FAILURE:
    case types.ADD_VENUE_FAILURE:
    case types.ADD_VENUE_REVIEW_FAILURE:
    case types.ADD_VENUE_EVENT_FAILURE:
      return false;
    default:
      return false;
  }
}
