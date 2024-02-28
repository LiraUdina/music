import React, { useState } from 'react';

const GenreModal = ({ isOpen, onClose, onAddGenre }) => {
  const [newGenre, setNewGenre] = useState('');

  const handleAddGenre = () => {
    onAddGenre(newGenre);
    setNewGenre('');
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h3>Добавить жанр</h3>
        <input
          type="text"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          placeholder="Введите новый жанр"
        />
        <button onClick={handleAddGenre}>Добавить</button>
      </div>
    </div>
  );
};

export default GenreModal;