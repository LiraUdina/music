import { ADD_SONG, REMOVE_SONG } from './actions';

// Initial State
const initialState = {
  songs: [],
};

// Reducer Function
export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };

    case REMOVE_SONG:
      const newSongs = [...state.songs];
      newSongs.splice(action.payload, 1);
      return {
        ...state,
        songs: newSongs,
      };

    default:
      return state;
  }
};