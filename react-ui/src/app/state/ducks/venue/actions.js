import axios from 'axios';
import { normalize } from 'normalizr'

import * as types from './types'
import { normalizeItem, normalizeArray } from '../../utils/normalizeData.js'

const ROOT_URL = '/api/venues';

export function fetchVenueList() {
  return dispatch => {
    dispatch({type: types.GET_VENUE_LIST})
    axios.get(`${ROOT_URL}`)
    .then(({ data }) =>
      dispatch({
        type: types.GET_VENUE_LIST_SUCCESS,
        response: normalizeArray(data)
      }),
        ({ response, message }) =>
          dispatch({
            type: types.GET_VENUE_LIST_FAILURE,
            payload: (response) ? response.data : message
          })
      );
    }
}

export function addVenue(venue) {
  return dispatch => {
    dispatch({type: types.ADD_VENUE})

    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'post',
      url: ROOT_URL,
      data: venue,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({
          type: types.ADD_VENUE_SUCCESS,
          response: normalizeItem(data)
        }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_VENUE_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}
export function updateVenue(venue) {
  return dispatch => {
    dispatch({type: types.UPDATE_VENUE})

    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'put',
      url: `${ROOT_URL}/${venue._id}`,
      data: venue,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({
          type: types.UPDATE_VENUE_SUCCESS,
          response: normalizeItem(data)
        }),
        ({ response, message }) =>
          dispatch({
            type: types.UPDATE_VENUE_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}

export function addVenueReview(review) {
  return (dispatch, getState) => {
    const state = getState();
    const reviewMeta = { author: state.auth.id, subject: state.venue.venue._id}
    const newReview = { ...review, ...reviewMeta };
    dispatch({type: types.ADD_VENUE_REVIEW})
    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'post',
      url: `/api/reviews/venues/`,
      data: newReview,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({
          type: types.ADD_VENUE_REVIEW_SUCCESS,
          response: normalizeItem(data)
        }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_VENUE_REVIEW_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}

export function addVenueEvent(event) {
  return dispatch => {
    dispatch({type: types.ADD_VENUE_EVENT})
    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'post',
      url: `${ROOT_URL}/events`,
      data: event,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({
          type: types.ADD_VENUE_EVENT_SUCCESS,
          response: normalizeItem(data)
        }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_VENUE_EVENT_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}
