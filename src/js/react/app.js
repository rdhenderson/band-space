import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import PlayerReducer from './reducers/player.js';

import Main from './containers/Main.js';


const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
