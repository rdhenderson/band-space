import deepFreeze from 'deep-freeze'

import * as types from '../types'
import reducer from '../reducer'

const initialState = { error: false, id: null, loading: false, token: null}
const stateAfterErr = {
  error: "error occurred",
  id: null,
  loading: false,
  token: null,
}
const stateAfterRequest = {
  error: false,
  id: null,
  loading: true,
  token: null,
}

const stateAfterSuccess = {
  error: false,
  id: 1,
  loading: false,
  token: "4444",
}

const fetchAction = { type: types.AUTH }
const failAction = { type: types.AUTH_FAILURE, payload: "error occurred" }
const successAction = {
  type: types.AUTH_SUCCESS,
  payload: {
    data:
    {
      token: "4444",
      user: { _id: 1 }
    }
  }
}

deepFreeze(failAction)
describe('auth reducer responses', () => {
  it('lists errors and clears', () => {
    expect(reducer(initialState, fetchAction)).toEqual(stateAfterRequest);
    expect(reducer(initialState, failAction)).toEqual(stateAfterErr);
    expect(reducer(initialState, successAction)).toEqual(stateAfterSuccess);
  });
})
