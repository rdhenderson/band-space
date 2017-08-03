import logger from "redux-logger"
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk'
import { throttle } from 'lodash/throttle'

import { loadState, saveState } from './utils/localStorage.js'
import reducer from './reducers';

const persistedState = loadState();
const middleware = [promise, reduxThunk]
if (process.env.HEROKU_ENV) middleware.push(logger);

const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)));

// Attempt to save state to local storage on changes (max: once per second).
store.subscribe(() => saveState(store.getState()));


export default store;
