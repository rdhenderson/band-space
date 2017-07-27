// import { applyMiddleware, createStore } from "redux"
//
// import logger from "redux-logger"
// import reducer from "./reducers"
//
// // const middleware = applyMiddleware(logger);
//
// export default createStore(reducer);//, middleware);
import ReduxThunk from 'redux-thunk'
import redux, { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { apiService } from './middleware'
import reducer from './reducers';

const middleware = applyMiddleware(promise, ReduxThunk);
export default createStore(reducer, composeWithDevTools(middleware));
