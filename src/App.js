import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';
import Main from './Main';

import baseURL from './utils/constants';

const App = () => {
  const [movies, setMovies] = useState(null);
  const [input, setInput] = useState('');

  const search = async query => {
    const res = await fetch(baseURL + `s=${query}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  return (
    <div className="App">
      <Header />
      <Search input={input} setInput={setInput} search={search} />
      <Main movies={movies} />
      <Footer />
    </div>
  );
};

export default App;
