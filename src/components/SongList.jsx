import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSong, removeSong } from '../redux-store/songActions';
import { removeGenre, addGenre } from '../redux-store/genreActions';
import './modali.css'; 

const SongList = () => {
  const initialSongs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const [songs, setSongs] = useState(() => {
    const storedSongs = localStorage.getItem('songs');
    return storedSongs ? JSON.parse(storedSongs) : initialSongs || [];
  });
  const [newSongName, setNewSongName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddSong = () => {
    if (newSongName.trim() !== '') {
      const updatedSongs = [...songs, newSongName];
      setSongs(updatedSongs);
      dispatch(addSong(newSongName));
      setNewSongName('');
      closeModal();
    }
  };

  const handleRemoveSong = (index) => {
    const updatedSongs = songs.filter((song, i) => i !== index);
    setSongs(updatedSongs);
    dispatch(removeSong(index));
  };

  return (
    <div>
      <h2>Музыкальный плейлист</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song}
            <button onClick={() => handleRemoveSong(index)}>Удалить</button>
          </li>
        ))}
      </ul>

      <button className="knopka" onClick={openModal}>Добавить песню</button>
      
      {isModalOpen && (
        <div id="modali" className="modali">
          <div className="cont">
            <label htmlFor="songInput">Введите песню</label>
            <input
              type="text"
              id="songInput"
              name="songInput"
              value={newSongName}
              onChange={(e) => setNewSongName(e.target.value)}
              autoComplete="off"
            />
            <button className="knopka" onClick={handleAddSong}>Сохранить</button>
            <button className="knopka" onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongList;