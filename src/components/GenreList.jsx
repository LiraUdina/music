import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGenre, removeGenre } from '../redux-store/genreActions';

const GenreList = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const [newGenre, setNewGenre] = useState('');

  const handleAddGenre = () => {
    if (newGenre.trim() !== '') {
      dispatch(addGenre(newGenre));
      setNewGenre('');
    }
  };

  const handleRemoveGenre = (genre) => {
    dispatch(removeGenre(genre));
  };

  return (
    <div>
      <h2>Музыкальные жанры</h2>
      <input
        type="text"
        value={newGenre}
        onChange={(e) => setNewGenre(e.target.value)}
        placeholder="Введите новый жанр"
      />
      <button onClick={handleAddGenre}>Добавить жанр</button>
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