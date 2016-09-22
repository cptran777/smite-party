import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/******************* COMPONENT IMPORTS *********************/

import App from './containers/App';

/********************* REDUX IMPORTS ***********************/

import { Provider } from 'react-redux';
import configureStore from './store/configStore';

const store = configureStore();

/********************* REDUX IMPORTS ***********************/

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);