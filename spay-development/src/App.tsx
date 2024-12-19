import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Dos/Home';

import './App.css';

const App: React.FC = () => {
  return (
      <main className="main-container">
        <Home/>
        <Header />
      </main>
  );
};

export default App;
