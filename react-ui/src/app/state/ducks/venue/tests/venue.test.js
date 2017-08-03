import deepFreeze from 'deep-freeze'
import { genTestVenues } from '../../../utils/genData.js'
import * as types from '../types'
import venue from '../reducer/venue.js'

const testVenues = genTestVenues(10);

const stateBefore = {
  name: null,
  description: null,
  address: {
    street: null,
    city: null,
    state: null,
    zipcode: null
  },
  phone: null,
  reviews: [],
  lastUpdated: null,
}

const stateAfter = {...testVenues[0]}

const action = {
  type: types.GET_VENUE_SUCCESS,
  payload: {...testVenues[0]}
}

deepFreeze(stateBefore);
deepFreeze(stateAfter);
deepFreeze(action)

it('adds venue to store', () => {
  expect(venue(stateBefore, action)).toEqual(stateAfter);
});
