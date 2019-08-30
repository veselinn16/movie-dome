import React from 'react';

const Movie = ({ movie }) => {
  //   useEffect(() => console.log(movie));
  return (
    <div className="movie">
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
  );
};

export default Movie;
