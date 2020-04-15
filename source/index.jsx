import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { todoReducer } from 'Reducers/todo.js';
import initialState from 'Reducers/initial-state.js';
import App from 'Components/App';
import 'bootstrap/scss/bootstrap.scss';

const store = createStore(
	todoReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    DEVBUILD && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);