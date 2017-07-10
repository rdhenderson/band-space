
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route , IndexRoute } from 'react-router-dom'

import Main from './containers/Main.js';
import Welcome from './containers/welcome.js';

// import routes from './react-routes'
import store from './store';
import AppRoutes from './react-routes';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root'));
// // remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();
