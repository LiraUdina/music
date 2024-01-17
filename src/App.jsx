import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SongList from './components/SongList';
import GenreList from './components/GenreList';
import { Str } from './Str';

const App = () => {
  return (
    <>
      <Str />

      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/genres" element={<GenreList />} />
      </Routes>
    </>
  );
};

export default App;