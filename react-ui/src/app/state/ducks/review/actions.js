import axios from 'axios';
import * as types from './types'

// const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = '/api/reviews';

export function getReview(id) {
  return dispatch => {
    dispatch({type: types.GET_REVIEW})
    axios.get(`${ROOT_URL}/${id}`)
    .then(
        ({ data }) => dispatch({ type: types.GET_REVIEW_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.GET_REVIEW_FAILURE, payload: err })
      );
    }
}

// export function addVenueReview(review) {
//   return dispatch => {
//     dispatch({type: types.ADD_VENUE_REVIEW})
//     const token = localStorage.getItem('jwtToken');
//     axios({
//       method: 'post',
//       url: `${ROOT_URL}/venues/`,
//       data: review,
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     })
//     .then(
//         ({ data }) => dispatch({ type: types.ADD_VENUE_REVIEW_SUCCESS, payload: data }),
//         ({ err })  => dispatch({ type: types.ADD_VENUE_REVIEW_FAILURE, payload: err })
//       );
//   }
// }
export function updateReview(review) {
  return dispatch => {
    dispatch({type: types.UPDATE_REVIEW})

    const token = localStorage.getItem('jwtToken');
    axios({
      method: 'post',
      url: `${ROOT_URL}/${review._id}`,
      data: review,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(
        ({ data }) => dispatch({ type: types.UPDATE_REVIEW_SUCCESS, payload: data }),
        ({ err })  => dispatch({ type: types.UPDATE_REVIEW_FAILURE, payload: err })
      );
  }
}
