import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH',
      rating: 5,
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy',
      rating: 4,
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX',
      rating: 5,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPosterURL, setNewPosterURL] = useState('');
  const [newRating, setNewRating] = useState(1);

  const handleAddMovie = () => {
    const newMovie = {
      title: newTitle,
      description: newDescription,
      posterURL: newPosterURL,
      rating: newRating,
    };
    setMovies([...movies, newMovie]);
    setNewTitle('');
    setNewDescription('');
    setNewPosterURL('');
    setNewRating(1);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRating
  );

  return (
    <div className="app-container">
      <h1>My Movie App</h1>

      <div className="filter-container">
        <Filter
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterRating={filterRating}
          setFilterRating={setFilterRating}
        />
      </div>

      <div className="add-movie-container">
        <h2>Add a new movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newPosterURL}
          onChange={e => setNewPosterURL(e.target.value)}
        />
        <select
          value={newRating}
          onChange={e => setNewRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
