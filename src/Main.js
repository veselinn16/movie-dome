import React, { useEffect } from 'react';
import Movie from './Movie';

const Main = ({ movies }) => {
  // useEffect(() => console.log(movies));
  // const renderMovies = movies => {
  //   console.log(movies);
  //   movies.map(movie => {
  //     return <Movie movie={movie} />;
  //   });
  // };
  return (
    <main className="main">
      <div className="main__display">
        {movies ? (
          movies.map(movie => {
            return <Movie movie={movie} />;
          })
        ) : (
          <h2 className="main__message">Your movies will appear here...</h2>
        )}
      </div>
    </main>
  );
};

export default Main;
