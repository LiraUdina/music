const initialState = {
  genres: [], // Изначально список пуст
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GENRE':
      return {
        ...state,
        genres: [...state.genres, action.payload],
      };
    case 'REMOVE_GENRE':
      return {
        ...state,
        genres: state.genres.filter((genre) => genre !== action.payload),
      };
    default:
      return state;
  }
};

export default genreReducer;