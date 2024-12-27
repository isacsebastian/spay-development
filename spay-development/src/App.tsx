import React from 'react';
import Home from './pages/Home/Home';
import SimpleFrame from './pages/SimpleFrame/SimpleFrame';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <main>
      <Header/>
      <Home />
      <SimpleFrame /> 
    </main>
  );
};

export default App;
