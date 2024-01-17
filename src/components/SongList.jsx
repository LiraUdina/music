import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSong, removeSong } from '../redux-store/songActions';

const SongList = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  // Обработчики событий для добавления и удаления песен
  // ...

  return (
    <div>
      <h2>Song List</h2>
      {/* Отображение списка песен */}
    </div>
  );
};

export default SongList;