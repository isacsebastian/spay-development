import React, { useEffect, useState } from 'react';
import spayLogo from '../../assets/spay.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [processedMoney, setProcessedMoney] = useState(9950999); // Comienza en 9,950,999
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

  useEffect(() => {
    if (!isInitialAnimationDone) {
      // Animación inicial: Incrementa rápidamente hasta 10,000,000
      const target = 10000000;
      const step = 1000; // Incrementos rápidos
      const intervalTime = 30; // Tiempo entre incrementos (30ms)

      const interval = setInterval(() => {
        setProcessedMoney((prev) => {
          if (prev + step >= target) {
            clearInterval(interval);
            setIsInitialAnimationDone(true); // Marca como completada la animación inicial
            return target;
          }
          return prev + step;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [isInitialAnimationDone]);

  useEffect(() => {
    if (isInitialAnimationDone) {
      // Incremento diario después de la animación inicial
      const increment = 100; // Incremento diario
      const target = 15000000; // Meta: 15,000,000 USD
      const intervalTime = (24 * 60 * 60 * 1000) / 365; // Simular días reales

      const interval = setInterval(() => {
        setProcessedMoney((prev) => (prev < target ? prev + increment : target));
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [isInitialAnimationDone]);

  return (
    <div className={styles.container}>
      {/* Divs de las esquinas con SVG */}
      <div className={styles.cornerTopLeft}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cornerSvg}
        >
          <path d="M6 0V6.25V12.5" stroke="#D9D9D9" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#D9D9D9" />
        </svg>
      </div>
      {/* Otras esquinas */}
      <div className={styles.cornerTopRight}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cornerSvg}
        >
          <path d="M6 0V6.25V12.5" stroke="#D9D9D9" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#D9D9D9" />
        </svg>
      </div>
      <div className={styles.cornerBottomLeft}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cornerSvg}
        >
          <path d="M6 0V6.25V12.5" stroke="#D9D9D9" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#D9D9D9" />
        </svg>
      </div>
      <div className={styles.cornerBottomRight}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cornerSvg}
        >
          <path d="M6 0V6.25V12.5" stroke="#D9D9D9" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#D9D9D9" />
        </svg>
      </div>

      {/* Header */}
      <div className={styles.coordinates}>
        {/* <a href="https://maps.app.goo.gl/3Qrsg3n8V4TQQnss7"> */}
        <p>-2.911632198089882,L</p><p>-79.00263205962538 P</p>
        {/* </a> */}
      </div>
      <div className={styles.coordinatesRight}>
        <p>
        Processed Money: {processedMoney.toLocaleString('en-US')} USD
        </p>
      </div>

      <header className={styles.header}>
        <svg
          className={styles.svg}
          viewBox="0 0 1326 31"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 1H357.584L386.975 30H934.127L962.538 1L1326 1"
            stroke="#D9D9D9"
            className={styles.svgPath}
          />
        </svg>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#spay">
            <img src={spayLogo} alt="Logo de Spay" />
          </a>
          <a href="#contact">Aplica ya</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
