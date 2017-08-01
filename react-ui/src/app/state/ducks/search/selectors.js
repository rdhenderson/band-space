import { createSelector } from 'reselect'
import { searchType } from './types'

const getSearchQuery = state => state.search.query;
const getSearchType = state => state.search.searchType;
const getGroupList = state => state.group.groupList || [];
const getUserList = state => state.user.userList || [];
const getVenueList = state => state.venue.venueList || [];

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
    console.log("venue list", venues);
    const lists = { users, groups, venues, all: [...users, ...venues, ...groups]};
    const list = lists[type];
    return list;
    // if (list && list.length > 0) return list;
    // return [];
    // const filteredList = list.filter((item) => item.name.toUpperCase().indexOf(query.toUpperCase()) > -1)
    //
    // if (!query || query.length < 1) return getNameIdTypeList(list);
    // return getNameIdTypeList(filteredList);
  });

// Returns full object for each matching element with list field showing element type
export const getFullDisplayList = createSelector(
  [getUserList, getGroupList, getVenueList, getSearchType, getSearchQuery],
  (users, groups, venues, type, query) => {
    const lists = { users, venues, groups, all: [...users, ...venues, ...groups]};
    const list = lists[type];
    return list;
    console.log("venue list", venues);
    console.log("list object venues list", lists['venues']);

    if (!list || list.length < 1) return [];
    if (!query || query.length < 1) return getNameIdTypeList(list);
    return getNameIdTypeList(list.filter((item) => item.name.toUpperCase().indexOf(query.toUpperCase()) > -1));
  });
