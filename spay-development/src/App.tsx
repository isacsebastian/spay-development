import React from 'react';
import Header from './components/Header/Header';
import './styles/globals.css';
import Spay from './pages/Spay/Spay';
import AirPodsVideoSection from './pages/Film/Film';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Spay />
        <AirPodsVideoSection/>
      </main>
    </div>
  );
};

export default App;
