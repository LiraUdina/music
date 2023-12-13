import React from 'react';

const API = () => {
  const genres = ['Попса', 'Рок']; 
  return (
    <div>
      <h1>Музыкальные жанры</h1>

      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <API />
    </div>
  );
};

export default Home;