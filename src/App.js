import React from 'react';

import Status from './components/Status'
import History from './components/History'

import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Status />
        <History />
      </main>
    </div>
  );
}

export default App;
