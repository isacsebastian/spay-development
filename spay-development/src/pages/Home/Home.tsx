
import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import ContactButton from '../../components/Button/Button';

const Home: React.FC = () => {
  const [opacity, setOpacity] = useState(1); // Controla la opacidad del texto y el botón

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacityScroll = 300; // Ajustar hasta dónde desaparecen los elementos
      setOpacity(Math.max(1 - scrollTop / maxOpacityScroll, 0));
    };

    const throttledHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return (
    <section id="home" className={styles.home}>
      <h1 style={{ opacity }} className={styles.overlayText}>
        La Solución de Cobro <br />
        Global para Empresas<br />
        Tecnológicas
      </h1>
      <div style={{ opacity, transition: 'opacity 0.2s ease-out' }}> 
        <ContactButton />
      </div>
    </section>
  );
};

export default Home;
