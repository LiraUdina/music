import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { About } from './papka/music';
import { Home } from './papka/zhanri';
import { Str } from './Str';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
        
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);