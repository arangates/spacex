import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';

const store = configureStore()

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
