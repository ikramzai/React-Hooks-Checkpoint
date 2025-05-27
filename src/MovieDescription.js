import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDescription({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDescription;
