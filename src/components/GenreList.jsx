import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeGenre, addGenre } from '../redux-store/genreActions';
import './modali.css'; 

const GenreList = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGenre, setNewGenre] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddGenre = () => {
    if (newGenre.trim() !== '') {
      dispatch(addGenre(newGenre));
      setIsModalOpen(false); 
      setNewGenre(''); 
    }
  };

  const handleRemoveGenre = (genre) => {
    dispatch(removeGenre(genre));
  };

  return (
    <div>
      <h2>Музыкальные жанры</h2>
      <ul>
        {genres && genres.map((genre, index) => (
          <li key={index}>
            {genre}
            <button onClick={() => handleRemoveGenre(genre)}>Удалить</button>
          </li>
        ))}
      </ul>

      <button className="knopka" onClick={openModal}>Добавить жанр</button>

      {isModalOpen && (
        <div id="modali" className="modali">
          <div className="cont">
            <label htmlFor="genreInput">Введите жанр</label>
            <input
              type="text"
              id="genreInput"
              name="genreInput"
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
              autoComplete="off"
            />
            <button className="knopka" onClick={handleAddGenre}>Сохранить</button>
            <button className="knopka" onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreList;