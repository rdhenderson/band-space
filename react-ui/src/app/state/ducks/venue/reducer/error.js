import * as types from '../types';

const error = (state = false, action) => {
  if (action.type.includes('_FAILURE'))
    return action.payload;
  if (action.type.includes('_SUCCESS'))
    return false;
  return false;
}

export default error;
