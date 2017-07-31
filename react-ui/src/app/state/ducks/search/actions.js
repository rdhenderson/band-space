import * as types from './types'

export function updateQuery(event) {
  const query = (event.target) ? event.target.value : event;
  return {
    type: types.UPDATE_QUERY,
    payload: query,
  };
}
// If category is unrecognized, set searchType to 'all'
export function changeSearchType(event) {
  const category = (event.target) ? event.target.value : event;
  return {
    type: types.CHANGE_SEARCH_TYPE,
    payload: { searchType: (types.searchType[category]) ? types.searchType[category] : types.searchType.all },
  };
}

export function resetSearch() {
  return {
    type: types.RESET_SEARCH
  };
}
