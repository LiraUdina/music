import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from './redux/actions';


const About = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);

  const [showModal, setShowModal] = useState(false);
  const [songTitle, setSongTitle] = useState('');

  const handleAddSong = () => {
    if (songTitle) {
      const newSong = {
        id: Date.now(),
        title: songTitle,
      };
      dispatch(addSong(newSong));
      setSongTitle('');
      handleClose();
    }
  };

  const handleRemoveSong = (songId) => {
    dispatch(removeSong(songId));
  };

  const handleShowModal = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <h1>Музыкальный плейлист</h1>

      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title}
            <Button variant="danger" size="sm" className="ml-2" onClick={() => handleRemoveSong(song.id)}>
              Удалить
            </Button>
          </li>
        ))}
      </ul>

      <Button variant="primary" onClick={handleShowModal}>
        Добавить песню
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить песню</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Введите название песни"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleAddSong}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default About;