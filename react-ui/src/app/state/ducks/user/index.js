import * as actions from './actions'
import * as selectors from './selectors'
import * as types from './types'

import { default as reducer } from './reducer';

console.log("User Selectors", selectors); //JSON.parse(selectors, null, 2));
export { actions, types, reducer, selectors }

export default reducer
