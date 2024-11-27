import React from 'react';
import spayLogo from '../../assets/spay.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* SVG decorativo */}
      <svg
        className={styles.svg}
        viewBox="0 0 1326 31"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 1H357.584L386.975 30H934.127L962.538 1L1326 1"
          className={styles.svgPath}
        />
      </svg>

      {/* Contenido del navbar */}
      <nav className={styles.nav}>
        <a href="#init">Home</a>
        <a href="#spay">
          <img src={spayLogo} alt="Logo de Spay" />
        </a>
        <a href="#film">Aplica ya</a>
      </nav>
    </header>
  );
};

export default Header;
