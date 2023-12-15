// Action Types
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

// Action Creators
export const addSong = (songTitle) => ({
  type: ADD_SONG,
  payload: songTitle,
});

export const removeSong = (songIndex) => ({
  type: REMOVE_SONG,
  payload: songIndex,
});

