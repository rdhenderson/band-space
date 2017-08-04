import { createSelector } from 'reselect'
import { getAuthId } from '../auth/reducer'
import _ from 'lodash'

export const getAllUsers = ({user}) => user.userList;

export function getAuthUser(state) {
  return getUserById(state, getAuthId(state));
}
export const getUserById = (state, id) =>
  createSelector(getAllUsers, (userList) => _.find(userList, '_id', id));
