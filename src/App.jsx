import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { addSong, removeSong } from './redux/actions';
import { About } from './papka/music';
import { Home } from './papka/zhanri';

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