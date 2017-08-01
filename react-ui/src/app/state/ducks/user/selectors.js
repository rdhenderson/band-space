import { createSelector } from 'reselect'
import _ from 'lodash'

export const getAllUsers = ({user}) => user.userList;

export const getAuthId = ({auth}) => auth.id;

export function getAuthUser(state) {
  return state.auth.user;
}

export function getAuthProfileImage(state) {
  return (state.auth.user) ? state.auth.user.profile_image : null;
}
// {
//   if (!state.user.userList) return null;
//   return state.user.userList.filter( (user) => user._id === state.auth.id)
// }
  //  _.find(state.user.userList, { '_id': state.auth.id});

// we are returning the selector itself so that each user instance will be
// memoized.
export const getUserById = (state, id) =>
  createSelector(getAllUsers, (userList) => _.find(userList, '_id', id));


export const getUserByURL = (state, props) => createSelector(
  getAllUsers,
  (userList) => _.find(userList, '_id', props.match.params.id));
