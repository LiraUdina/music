import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import songReducer from './redux-store/songReducer';
import genreReducer from './redux-store/genreReducer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb } from 'react-bootstrap'

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);