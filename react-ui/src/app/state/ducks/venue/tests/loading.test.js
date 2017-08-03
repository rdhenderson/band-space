import deepFreeze from 'deep-freeze'

import * as types from '../types'
import loading from '../reducer/loading'

const fetchAction = { type: types.GET_VENUE }
const failAction = { type: types.GET_VENUE_FAILURE }
const successAction = { type: types.GET_VENUE_SUCCESS }

it('triggers load state and clears', () => {
  expect(loading(false, fetchAction)).toEqual(true);
  expect(loading(true, failAction)).toEqual(false);
  expect(loading(true, successAction)).toEqual(false);
});
