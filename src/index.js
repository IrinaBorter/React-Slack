import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import './assets/styles/main.scss';

import store from './app/store/index';
import routes from './routes';

// TODO: remove window property
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
