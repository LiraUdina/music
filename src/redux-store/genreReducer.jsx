const initialState = {
    genres: [],
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
          genres: state.genres.filter((genre) => genre.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default genreReducer;