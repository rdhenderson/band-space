import axios from 'axios'
import * as types from './types'

// export function updateUser(updates, id) {
//   const token = localStorage.getItem('jwtToken');
//
//   const request = axios({
//     method: 'put',
//     url: `${ROOT_URL}/users/${id}?token=${token}`,
//     data: updates,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//
//   return {
//     type: types.UPDATE_USER,
//     payload: request
//   };
// }
//
// export function updateUserSuccess(user) {
//   console.log('USER update success', user);
//   return {
//     type: UPDATE_USER_SUCCESS,
//     payload: user
//   };
// }
//
// export function updateUserFailure(error) {
//   return {
//     type: UPDATE_USER_FAILURE,
//     payload: error
//   };
// }
//
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
//
// export function addUserGroupSuccess(group) {
//   return {
//     type: ADD_USER_GROUP_SUCCESS,
//     payload: group
//   };
// }
//
// export function addUserGroupFailure(error) {
//   return {
//     type: ADD_USER_GROUP_FAILURE,
//     payload: error
//   };
// }
//
// export function addReview(review, id) {
//   const token = localStorage.getItem('jwtToken');
//   //check if the token is still valid, if so, get me from the server
//   const request = axios({
//     method: 'post',
//     url: `${ROOT_URL}/reviews/${id}`,
//     data: review,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//
//   return {
//     type: ADD_REVIEW,
//     payload: request
//   };
// }
//
// export function addReviewSuccess(review) {
//   return {
//     type: ADD_REVIEW_SUCCESS,
//     payload: review
//   };
// }
//
// export function addReviewFailure(error) {
//   return {
//     type: ADD_REVIEW_FAILURE,
//     payload: error
//   };
// }
