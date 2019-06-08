import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todo } from './reducers';

import 'bootstrap';
import App from './components/app';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('No root element!');
}

const store = createStore(todo);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);