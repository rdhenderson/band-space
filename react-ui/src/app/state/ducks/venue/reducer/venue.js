import * as types from '../types';
const INITIAL_STATE = {
  name: null,
  description: null,
  address: {
    street: null,
    city: null,
    state: null,
    zipcode: null
  },
  phone: null,
  reviews: [],
  lastUpdated: null
}

export default function venue(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.GET_VENUE_SUCCESS:
    case types.ADD_VENUE_SUCCESS:
    case types.ADD_VENUE_REVIEW_SUCCESS:
    case types.ADD_VENUE_EVENT_SUCCESS:
    case types.UPDATE_VENUE_SUCCESS:
      return {...action.payload };//, lastUpdated: Date.now()};
    default:
      return INITIAL_STATE;
  }
}
