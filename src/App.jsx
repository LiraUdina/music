import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes } from 'react-router-dom';
import { About } from './papka/music';
import { Home } from './papka/zhanri';
import { Str} from './Str';
import './App.css';


const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/zhanri" element={<Home />} />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);