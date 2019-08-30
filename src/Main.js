import React, { useEffect } from 'react';

const Main = ({ movies }) => {
  useEffect(() => console.log(movies));
  return (
    <main className="main">
      <div className="main__display">
        {movies ? (
          <img src={movies[0].Poster} alt={`${movies[0].Title}'s Poster`} />
        ) : (
          <h2 className="main__message">Your movies will appear here...</h2>
        )}
      </div>
    </main>
  );
};

export default Main;
