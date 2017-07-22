// import { applyMiddleware, createStore } from "redux"
//
// import logger from "redux-logger"
// import reducer from "./reducers"
//
// // const middleware = applyMiddleware(logger);
//
// export default createStore(reducer);//, middleware);
import redux, { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(promise, logger);
export default createStore(reducer, composeWithDevTools(middleware));
