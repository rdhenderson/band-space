import deepFreeze from 'deep-freeze'
import { normalizeArray, normalizeItem } from '../../../utils/normalizeData.js'

import { genTestVenues } from '../../../utils/genData.js'
import * as types from '../types'

import list from '../reducer/list'

const testVenues = genTestVenues(10);
const testAddVenue = genTestVenues(1);

const stateBefore = {ids:[], byId:{} }

const normalizedVenues = normalizeArray(testVenues);
const normalizedVenue = normalizeItem(testAddVenue);

const stateAfter = {
  byId: {...normalizedVenues.venues},
  ids: normalizedVenues.results,
}

// const stateAfterAdd = {
//   byId: {
//     ...stateAfter.byId,
//     normalizedVenue.venues
//   }
//   ids: [...stateAfter.ids, normalizedVenue.results]
// }

const getListAction = {
  type: types.GET_VENUE_LIST_SUCCESS,
  response: normalizeArray(testVenues),
}

// const addVenueAction = {
//   type: types.ADD_VENUE_SUCCESS,
//   response: normalizeItem(testAddVenue)
// };

// console.log(addVenueAction);
//
// deepFreeze(stateBefore);
// deepFreeze(stateAfter);
// deepFreeze(getListAction);
// deepFreeze(addVenueAction);

it('adds venue array to store', () => {
  expect(list(stateBefore, getListAction)).toEqual(stateAfter);
});
//
// it('adds venue to list', () => {
//   expect(list(stateBefore, addVenueAction)).toEqual(stateAfterAdd);
// });
