import React from 'react';
import Header from './components/Header/Header';
import './styles/globals.css';
import Home from './pages/Home/Home';
import Spay from './pages/Spay/Spay';
import Contact from './pages/Contact/Contact';
import Frame from './pages/Frame/Frame';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <Home />
        {/* <Spay /> */}
        <Frame />
        <Contact />
      </main>
    </div>
  );
};

export default App;
