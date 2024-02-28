import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGenre, removeGenre } from '../redux-store/genreActions';
import GenreModal from './GenreModal';

const GenreList = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGenre = (genre) => {
    dispatch(addGenre(genre));
    setIsModalOpen(false);
  };

  const handleRemoveGenre = (genre) => {
    dispatch(removeGenre(genre));
  };

  return (
    <div>
      <h2>Музыкальные жанры</h2>
      <button onClick={() => setIsModalOpen(true)}>Добавить жанр</button>

      <GenreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddGenre={handleAddGenre}
      />

      <ul>
        {genres && genres.map((genre, index) => (
          <li key={index}>
            {genre}
            <button onClick={() => handleRemoveGenre(genre)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList; 