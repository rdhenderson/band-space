// import { applyMiddleware, createStore } from "redux"
//
// import logger from "redux-logger"
// import reducer from "./reducers"
//
// // const middleware = applyMiddleware(logger);
//
// export default createStore(reducer);//, middleware);
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducer from './reducers';


export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
