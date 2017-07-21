
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
// import routes from './react-routes'
import store from './store';
import AppRoutes from './navigation/AppRoutes.js';


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root'));
// // remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();
