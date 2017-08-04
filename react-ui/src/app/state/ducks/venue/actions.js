import axios from 'axios';

import * as types from './types'
import { getAuthId, getAuthToken } from '../auth/reducer'

const ROOT_URL = '/api/venues';

export const fetchVenueList = () => ({
  type: types.GET_VENUE_LIST,
  payload: {
    request: {
        url: '/api/venues',
        method: 'GET',
    },
  }
});

export const updateVenue = (venue) => (dispatch, getState) => ({
  type: types.UPDATE_VENUE,
  payload: {
    request: {
      url: `/api/venues/${venue._id}?token=${getAuthToken(getState())}`,
      method: 'PUT',
      data: venue,
      headers: {
        'Authorization': `Bearer ${getAuthToken(getState())}`
      }
    },
  }
});

export const addVenue = (venue) => (dispatch, getState) => ({
  type: types.ADD_VENUE,
  payload: {
    request: {
      url: `/api/venues`,
      method: 'POST',
      data: venue,
      headers: {
        'Authorization': `Bearer ${getAuthToken(getState())}`
      }
    },
  }
});

export const addVenueReview = (review) => (dispatch, getState) => ({
  type: types.UPDATE_VENUE,
  payload: {
    request: {
      url: `/api/reviews/venues/`,
      method: 'POST',
      data: review,
      headers: {
        'Authorization': `Bearer ${getAuthToken(getState())}`
      }
    },
  }
});

export const addVenueEvent = (event) => (dispatch, getState) => ({
  type: types.UPDATE_VENUE,
  payload: {
    request: {
      url: `/api/venues/events`,
      method: 'POST',
      data: event,
      headers: {
        'Authorization': `Bearer ${getAuthToken(getState())}`
      }
    },
  }
});
