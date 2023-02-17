//entry point of the React app

// Import data
import React from 'react';
import Searchbar from './Searchbar';
import Gallery from './Gallery'

// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
