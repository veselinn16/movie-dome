import React, { useEffect } from 'react';

const Movie = ({ movie }) => {
  useEffect(() => console.log(movie));
  return (
    <div className="movie">
      <img
        src={movie.Poster ? movie.Poster : '#'}
        alt={`${movie.Title}'s poster`}
      />
      <h2 className="movie__title">{movie.Title}</h2>
      <h4 className="movie__year">{movie.Year}</h4>
    </div>
  );
};

export default Movie;
