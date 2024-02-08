import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import songReducer from './redux-store/songReducer';
import genreReducer from './redux-store/genreReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'; // Импорт createRoot из react-dom/client

// Комбинирование редюсеров
const rootReducer = combineReducers({
  song: songReducer,
  genre: genreReducer
});

// Создание хранилища Redux
const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Обертка приложения в провайдер Redux */}
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);