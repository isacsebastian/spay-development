import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
// import Contact from './pages/Contact/Contact';
import SimpleFrame from './pages/SimpleFrame/SimpleFrame';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <Home />
        {/* <Contact /> */}
        <SimpleFrame />
      </main>
    </div>
  );
};

export default App;
