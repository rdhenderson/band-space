import { createSelector } from 'reselect'
import { searchType } from './types'

function getNameIdTypeList(list, listType){
  if (!list || list.length < 1) return [];
  return list.map( ({_id, name}) => ({_id, name, list: 'users'}));
}

const formatDisplayList = state => {
  const formattedList = {
    [searchType.user] : getNameIdTypeList(state.user.userList, searchType.user),
    [searchType.venue] : getNameIdTypeList(state.venue.venueList, searchType.venue),
    [searchType.group] : getNameIdTypeList(state.group.groupList, searchType.group),
    [searchType.all] : ([
      ...getNameIdTypeList(state.user.userList, searchType.user),
      ...getNameIdTypeList(state.venue.venueList, searchType.venue),
      ...getNameIdTypeList(state.group.groupList, searchType.group)
    ])
  }
  return formattedList[state.search.searchType]
}

const getSearchQuery = state => state.search.query;

export const getDisplayList = createSelector(
  [formatDisplayList, getSearchQuery],
  (list, query) => {
    if (!list || list.length < 1) return [];
    return list.filter((item) => item.name.toUpperCase().indexOf(query.toUpperCase()) > -1)
  });
