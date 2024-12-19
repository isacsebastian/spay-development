import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SimpleFrame from './pages/SimpleFrame/SimpleFrame';
import './App.css';

const App: React.FC = () => {
  return (
      <main className="main-container">
        <Home/>
        <SimpleFrame />
        <Header />
      </main>
  );
};

export default App;
