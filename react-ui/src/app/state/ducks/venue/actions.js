import axios from 'axios';
import * as types from './types'

// const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = '/api/venues';

export function getVenue(id) {
  return dispatch => {
    dispatch({type: types.GET_VENUE})
    axios.get(`${ROOT_URL}/${id}`)
    .then(
        ({ data }) => dispatch({ type: types.GET_VENUE_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.GET_VENUE_FAILURE,
            payload: (response) ? response.data : message
          })
      );
    }
}

export function getVenueList() {
  return dispatch => {
    dispatch({type: types.GET_VENUE_LIST})
    axios.get(`${ROOT_URL}`)
    .then(
        ({ data }) => dispatch({ type: types.GET_VENUE_LIST_SUCCESS, payload: data }),
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
        ({ data }) => dispatch({ type: types.ADD_VENUE_SUCCESS, payload: data }),
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
        ({ data }) => dispatch({ type: types.UPDATE_VENUE_SUCCESS, payload: data }),
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
        ({ data }) => dispatch({ type: types.ADD_VENUE_REVIEW_SUCCESS, payload: data }),
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
        ({ data }) => dispatch({ type: types.ADD_VENUE_EVENT_SUCCESS, payload: data }),
        ({ response, message }) =>
          dispatch({
            type: types.ADD_VENUE_EVENT_FAILURE,
            payload: (response) ? response.data : message
          })
      );
  }
}
// export function addUserGroup(group, id) {
//   const token = localStorage.getItem('jwtToken');
//   //check if the token is still valid, if so, get me from the server
//   const request = axios({
//     method: 'post',
//     url: `${ROOT_URL}/users/${id}/groups`,
//     data: group,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//
//   return {
//     type: ADD_USER_GROUP,
//     payload: request
//   };
// }
