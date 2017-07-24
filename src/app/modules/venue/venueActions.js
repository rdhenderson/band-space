import axios from 'axios';

export const GET_VENUE = 'GET_VENUE';
export const GET_VENUE_SUCCESS = 'GET_VENUE_SUCCESS';
export const GET_VENUE_FAILURE = 'GET_VENUE_FAILURE';
export const GET_VENUE_LIST = 'GET_VENUE_LIST';
export const GET_VENUE_LIST_SUCCESS = 'GET_VENUE_LIST_SUCCESS';
export const GET_VENUE_LIST_FAILURE = 'GET_VENUE_LIST_FAILURE';
// export const ADD_VENUE_EVENT = 'ADD_VENUE_EVENT';
// export const ADD_VENUE_EVENT_SUCCESS = 'ADD_VENUE_EVENT_SUCCESS';
// export const ADD_VENUE_EVENT_FAILURE = 'ADD_VENUE_EVENT_FAILURE';
// export const ADD_VENUE_REVIEW = 'ADD_VENUE_REVIEW';
// export const ADD_VENUE_REVIEW_SUCCESS = 'ADD_VENUE_REVIEW_SUCCESS';
// export const ADD_VENUE_REVIEW_FAILURE = 'ADD_VENUE_REVIEW_FAILURE';
// export const ADD_VENUE = 'ADD_VENUE';
// export const ADD_VENUE_SUCCESS = 'ADD_VENUE_SUCCESS';
// export const ADD_VENUE_FAILURE = 'ADD_VENUE_FAILURE';
// export const UPDATE_VENUE = 'UPDATE_VENUE';
// export const UPDATE_VENUE_SUCCESS = 'UPDATE_VENUE_SUCCESS';
// export const UPDATE_VENUE_FAILURE = 'UPDATE_VENUE_FAILURE';
// export const REMOVE_VENUE = 'REMOVE_VENUE';
// export const REMOVE_VENUE_SUCCESS = 'REMOVE_VENUE_SUCCESS';
// export const REMOVE_VENUE_FAILURE = 'REMOVE_VENUE_FAILURE';

// const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = '/api/venues';

export function getVenue(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: GET_VENUE,
    payload: request
  };
}

export function getVenueSuccess(venue) {
  return {
    type: GET_VENUE_SUCCESS,
    payload: venue
  };
}

export function getVenueFailure(error) {
  return {
    type: GET_VENUE_FAILURE,
    payload: error
  };
}

export function getVenueList() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: GET_VENUE_LIST,
    payload: request
  };
}

export function getVenueListSuccess(venues) {
  return {
    type: GET_VENUE_LIST_SUCCESS,
    payload: venues
  };
}

export function getVenueListFailure(error) {
  return {
    type: GET_VENUE_LIST_FAILURE,
    payload: error
  };
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
