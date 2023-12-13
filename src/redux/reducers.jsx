const initialState = {
  songs: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case 'REMOVE_SONG':
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
    default:
      return state;
  }
};