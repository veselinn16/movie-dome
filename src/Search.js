import React, { useState, useEffect } from 'react';

const Search = props => {
  const [input, setInput] = useState('');
  useEffect(() => console.log(input));
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movie..."
        className="search__input"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button className="search__button">Go</button>
    </div>
  );
};

export default Search;
