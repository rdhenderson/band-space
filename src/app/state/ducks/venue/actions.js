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
        ({ err })  => dispatch({ type: types.GET_VENUE_FAILURE, payload: err })
      );
    }
}

export function getVenueList() {
  return dispatch => {
    dispatch({type: types.GET_VENUE_LIST})
    axios.get(`${ROOT_URL}`)
    .then(
        ({ data }) => dispatch({ type: types.GET_VENUE_LIST_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.GET_VENUE_LIST_FAILURE, payload: err })
      );
    }
}

export function addVenue(venue) {
  return dispatch => {
    dispatch({type: types.ADD_VENUE})

    const token = localStorage.get('jwtToken');
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
        ({ err })  => dispatch({ type: types.ADD_VENUE_FAILURE, payload: err })
      );
  }
}
export function updateVenue(venue) {
  return dispatch => {
    dispatch({type: types.UPDATE_VENUE})

    const token = localStorage.get('jwtToken');
    axios({
      method: 'post',
      url: `${ROOT_URL}/${venue._id || venue.id}`,
      data: venue,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.ADD_VENUE_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.ADD_VENUE_FAILURE, payload: err })
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
