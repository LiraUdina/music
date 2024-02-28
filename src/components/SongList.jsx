import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSong, removeSong } from '../redux-store/songActions';

const SongList = () => {
  const initialSongs = useSelector((state) => state.songs);
  const songs = initialSongs || [];
  const dispatch = useDispatch();
  const [newSongName, setNewSongName] = useState('');

  const handleAddSong = () => {
    if (newSongName.trim() !== '') {
      dispatch(addSong(newSongName));
      setNewSongName('');
    }
  };

  return (
    <div>
      <h2>Музыкальный плейлист</h2>
      <input
        type="text"
        value={newSongName}
        onChange={(e) => setNewSongName(e.target.value)}
        placeholder="Введите новую песню"
      />
      <button onClick={handleAddSong}>Добавить песню</button>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song}
            <button onClick={() => dispatch(removeSong(index))}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;