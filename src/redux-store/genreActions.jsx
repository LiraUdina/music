export const addGenre = (genre) => ({
  type: 'ADD_GENRE',
  payload: genre,
});

export const removeGenre = (genreId) => ({
  type: 'REMOVE_GENRE',
  payload: genreId,
});