import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';
import Main from './Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
