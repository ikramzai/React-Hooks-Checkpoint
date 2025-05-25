import React from 'react';

function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating} / 5</p>
    </div>
  );
}

export default MovieCard;
