import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import MovieDescription from './MovieDescription';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
      rating: 5,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A hacker discovers the true nature of reality and his role in the war.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/9/94/The_Matrix.jpg',
      rating: 4,
      trailerLink: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'Explorers travel through a wormhole in space to ensure humanity’s survival.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      rating: 5,
      trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRating
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <h1>My Movie App</h1>
            <Filter
              filterTitle={filterTitle}
              setFilterTitle={setFilterTitle}
              filterRating={filterRating}
              setFilterRating={setFilterRating}
            />
            <MovieList movies={filteredMovies} />
          </div>
        } />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
