import React from 'react';
import Header from './components/Header/Header';
import './styles/globals.css';
import Spay from './pages/Spay/Spay';
import AirPodsVideoSection from './pages/Film/Film';
import Impact from './pages/Impact/Impact';
import Init from './pages/Init/Init';
import Contact from './pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Spay />
        <AirPodsVideoSection/> 
        <Init />
        <Impact />
        <Contact />
      </main>
    </div>
  );
};

export default App;
