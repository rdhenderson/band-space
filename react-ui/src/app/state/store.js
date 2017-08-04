import logger from "redux-logger"
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import normalizeMiddleware from './middleware/normalizeData.js'

import { throttle } from 'lodash'
import { loadState, saveState } from './utils/localStorage.js'
import reducer from './reducers';

export default function configureStore() {
  const axiosClient = axios.create({
    responseType: 'json'
  })
  // setup middleware chain
  // const axiosMiddlewareConfig = {
  //   interceptors: {
  //     response: [{
  //       success: function ({getState, dispatch, getSourceAction}, req) {
  //         console.log(req); //contains information about request object
  //         //...
  //       },
  //     }]
  //   }
  // };
  const middleware = [
    promise,
    reduxThunk,
    axiosMiddleware(axiosClient, {errorSuffix: '_FAILURE'}),
    normalizeMiddleware
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  // retrieve state from localStorage if present
  const persistedState = loadState();
  const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)));

  // Attempt to save state to local storage on changes (max: once per second).
  store.subscribe(throttle(() => {
    console.log("Saved state");
    saveState(store.getState());
    return null;
  }), 1000);

  return store;
}
