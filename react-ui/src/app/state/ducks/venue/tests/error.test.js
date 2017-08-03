import deepFreeze from 'deep-freeze'

import * as types from '../types'
import error from '../reducer/error'

const stateAfter = "error occurred";

const fetchAction = { type: types.GET_VENUE }
const failAction = { type: types.GET_VENUE_FAILURE, payload: "error occurred" }
const successAction = { type: types.GET_VENUE_SUCCESS }

deepFreeze(failAction)

it('lists errors and clears', () => {
  expect(error(false, fetchAction)).toEqual(false);
  expect(error(false, failAction)).toEqual(stateAfter);
  expect(error(stateAfter, successAction)).toEqual(false);
});
