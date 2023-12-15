import { combineReducers } from 'redux';
import { playlistReducer } from './reducers';

const rootReducer = combineReducers({
  playlist: playlistReducer,
  // Add other reducers if needed
});

export default rootReducer;