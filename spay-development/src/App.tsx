import React from 'react';
import Header from './components/Header/Header';
import Init from './pages/Init/Init';
// import Film from './pages/Film/Film';
// import AboutUs from './pages/AboutUs/AboutUs';
// import Impact from './pages/Impact/Impact';
// import Contact from './pages/Contact/Contact';
import './styles/globals.css';
// import Spay from './pages/Spay/Spay';
// import AirPodsVideoSection from './pages/Test/test';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Init />
        {/* <Spay />
        <AirPodsVideoSection/> */}
      </main>
    </div>
  );
};

export default App;
