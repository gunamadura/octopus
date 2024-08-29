
import React from 'react';
import './App.css';
import Octopus from './octopus.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Octopus} className="App-logo" alt="octopus" />
        <p>
          Octopus Man!
        </p>
      </header>
    </div>
  );
}

export default App;
