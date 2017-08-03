import { createSelector } from 'reselect'
import { searchType } from './types'
import { getVenueList } from '../venue/reducer'

const getSearchQuery = state => state.search.query;
const getSearchType = state => state.search.searchType;
const getGroupList = state => state.group.groupList;
const getUserList = state => state.user.userList;

function getNameIdTypeList(list, listType){
  if (!list || list.length < 1) return [];
  return list.map( ({_id, name}) => ({_id, name, type: listType}));
}

function getFullTypeList(list, listType){
  if (!list || list.length < 1) return [];
  return list.map( (item) => ({...item, type: listType}));
}

// Returns name and id for each matching element with list field showing element type
export const getLimitedDisplayList = createSelector(
  [getUserList, getGroupList, getVenueList, getSearchType, getSearchQuery],
  (users, groups, venues, type, query) => {
      const lists = { users, venues, groups };
      const list = lists[type];
      if (!list || list.length < 1) return [];
      if (!query || query.length < 1) return getNameIdTypeList(list);
      return getNameIdTypeList(list.filter((item) => item.name.toUpperCase().indexOf(query.toUpperCase()) > -1));
  });

// Returns full object for each matching element with list field showing element type
export const getFullDisplayList = createSelector(
  [getUserList, getGroupList, getVenueList, getSearchType, getSearchQuery],
  (users, groups, venues, type, query) => {
    const lists = { users, venues, groups };
    const list = lists[type];
    if (!list || list.length < 1) return [];
    if (!query || query.length < 1) return getFullTypeList(list);
    return getFullTypeList(list.filter((item) => item.name.toUpperCase().indexOf(query.toUpperCase()) > -1));
  });
