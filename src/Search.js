import React, { useState, useEffect } from 'react';

const Search = ({ input, setInput, search }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movie..."
        className="search__input"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button className="search__button" onClick={() => search(input)}>
        Go
      </button>
    </div>
  );
};

export default Search;
