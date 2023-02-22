import React from 'react';

import ExampleCard from './components/cards';
import Home from './pages/homepage';
import './App.css';

function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <Home />

        
        <ExampleCard />
      </header>
    </div>
  );
}

export default App;
