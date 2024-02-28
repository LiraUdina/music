export const addGenre = (genre) => ({
  type: 'ADD_GENRE',
  payload: genre,
});

export const removeGenre = (genre) => ({
  type: 'REMOVE_GENRE',
  payload: genre,
});