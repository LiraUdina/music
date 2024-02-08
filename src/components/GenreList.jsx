import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGenre, removeGenre } from '../redux-store/genreActions';

const GenreList = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  // Обработчики событий для добавления и удаления жанров
  // ...

  return (
    <div>
      <h2>Музыкальные жанры</h2>
      {/* Отображение списка жанров */}
    </div>
  );
};

export default GenreList;