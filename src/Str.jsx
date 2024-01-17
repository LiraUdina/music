import React from 'react';
import { Link } from 'react-router-dom';

const Str = () => {
  return (
    <nav className="my-link">
      <Link to="/">Музыкальный плейлист</Link>
      <Link to="/genres">Музыкальные жанры</Link>
    </nav>
  );
}

export { Str };