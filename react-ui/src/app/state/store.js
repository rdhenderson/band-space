// import { applyMiddleware, createStore } from "redux"
//
import logger from "redux-logger"
// import reducer from "./reducers"
//
// // const middleware = applyMiddleware(logger);
//
// export default createStore(reducer);//, middleware);
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import logger from 'redux-logger'
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk'

import reducer from './reducers';
//Only set logger for dev environment, turn it off for heroku
const middleware =
  (process.env.HEROKU_ENV) ? applyMiddleware(promise, ReduxThunk) : applyMiddleware(promise, ReduxThunk, logger);

export default createStore(reducer, composeWithDevTools(middleware));
