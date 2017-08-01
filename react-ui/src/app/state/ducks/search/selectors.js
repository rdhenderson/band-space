import { createSelector } from 'reselect'
import { searchType } from './types'

const getSearchQuery = state => state.search.query;

const makeLimitedDisplayList = state => {
  const limitedList = {
    [searchType.user] : getNameIdTypeList(state.user.userList, searchType.user),
    [searchType.venue] : getNameIdTypeList(state.venue.venueList, searchType.venue),
    [searchType.group] : getNameIdTypeList(state.group.groupList, searchType.group),
    [searchType.all] : ([
      ...getNameIdTypeList(state.user.userList, searchType.user),
      ...getNameIdTypeList(state.venue.venueList, searchType.venue),
      ...getNameIdTypeList(state.group.groupList, searchType.group)
    ])
  }
  return limitedList[state.search.searchType]
}

const makeFullDisplayList = state => {
  const fullList = {
    [searchType.user] : getFullTypeList(state.user.userList, searchType.user),
    [searchType.venue] : getFullTypeList(state.venue.venueList, searchType.venue),
    [searchType.group] : getFullTypeList(state.group.groupList, searchType.group),
    [searchType.all] : ([
      ...getFullTypeList(state.user.userList, searchType.user),
      ...getFullTypeList(state.venue.venueList, searchType.venue),
      ...getFullTypeList(state.group.groupList, searchType.group)
    ])
  }
  return fullList[state.search.searchType]
}

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
  [makeLimitedDisplayList, getSearchQuery],
  (list, query) => {
    console.log("List", list);
    if (!list || list.length < 1) return [];
    return list.filter((item) => item.name.toUpperCase().indexOf(query.toUpperCase()) > -1)
  });

// Returns full object for each matching element with list field showing element type
export const getFullDisplayList = createSelector(
  [makeFullDisplayList, getSearchQuery],
  (list, query) => {
    if (!list || list.length < 1) return [];
    return list.filter((item) => item.name && item.name.toUpperCase().indexOf(query.toUpperCase()) > -1)
  });
