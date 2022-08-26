import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import bagReducer from './reducers/bagReducer';
import './index.css';

const store = createStore(bagReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App /> 
      </Router>
    </Provider>
  </React.StrictMode>
);
