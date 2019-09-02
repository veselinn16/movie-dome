import React, { useEffect, useState } from 'react';
import baseURL from './utils/constants';

const Movie = ({ movie }) => {
  const [movieLink, setMovieLink] = useState('#');

  useEffect(() => {
    const fetchMovie = async () => {
      // TODO: store ALL movie data from request
      const res = await fetch(baseURL + `t=${movie.Title}`);
      const data = await res.json();

      const movieLink =
        data.Website !== 'N/A'
          ? data.Website
          : `https://www.google.com/search?q=${movie.Title}`;

      setMovieLink(movieLink);
    };
    fetchMovie();
  }, [movie]);

  return (
    <div className="movie">
      <div className="movie__side movie__side--front">
        <div className="movie__poster__container">
          <img
            className="movie__poster"
            src={movie.Poster ? movie.Poster : '#'}
            alt={`${movie.Title}'s poster`}
          />
        </div>
        <div className="movie__data">
          <h2 className="movie__data--title">{movie.Title}</h2>
          <h4 className="movie__data--year">{movie.Year}</h4>
        </div>
      </div>
      <div className="movie__side movie__side--back">
        <h3 className="movie__details--text">View details for</h3>
        <a className="movie__details--link" href={movieLink}>
          {movie.Title}
        </a>
      </div>
    </div>
  );
};

export default Movie;
