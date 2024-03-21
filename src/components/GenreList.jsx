import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeGenre, addGenre } from '../redux-store/genreActions';
import './modali.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const GenreList = () => {
  const initialGenres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGenre, setNewGenre] = useState('');
  const [addedGenres, setAddedGenres] = useState(() => {
    const storedGenres = localStorage.getItem('geнфкnres');
    return storedGenres ? JSON.parse(storedGenres) : initialGenres || [];
  });

  useEffect(() => {
    localStorage.setItem('genres', JSON.stringify(addedGenres));
  }, [addedGenres]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddGenre = () => {
    if (newGenre.trim() !== '') {
      dispatch(addGenre(newGenre));
      setAddedGenres([...addedGenres, newGenre]);
      setNewGenre('');
      setIsModalOpen(false);
    }
  };

  const handleRemoveGenre = (genre) => {
    dispatch(removeGenre(genre));
    setAddedGenres(addedGenres.filter(item => item !== genre));
  };

  return (
    <div>
      <h2>Музыкальные жанры</h2>
      <ul>
        {addedGenres && addedGenres.map((genre, index) => (
          <li key={index}>
            {genre}
            <Button variant="primary"  onClick={() => handleRemoveGenre(genre)}>Удалить</Button>
          </li>
        ))}
      </ul>

      <Button variant="primary" onClick={openModal}>Добавить жанр</Button>

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
            <Button variant="primary" onClick={handleAddGenre}>Сохранить</Button>
            <Button variant="primary" onClick={closeModal}>Закрыть</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreList;