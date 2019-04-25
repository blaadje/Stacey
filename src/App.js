import React from 'react';

import Status from './components/Status'
import History from './components/History'

import './App.css';

function App() {
  return (
    <main className="App">
      <Status
        deploymentStatus={{
          status: 'ongoing',
          deployer: {
            img: 'https://randomuser.me/api/portraits/women/65.jpg',
            name: 'blaadje',
          },
          hash: '1ca08d613db8558fefbc3fcc988876fd3b5a447d',
          commit: 'prefeat(welove): Delete code from home page'
        }}
      />
      <History />
    </main>
  );
}

export default App;
