import React from 'react';
import spayLogo from '../../assets/spay.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
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
          <path d="M6 0V6.25V12.5" stroke="#6a6a6a" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#6a6a6a" />
        </svg>
      </div>
      <div className={styles.cornerTopRight}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cornerSvg}
        >
          <path d="M6 0V6.25V12.5" stroke="#6a6a6a" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#6a6a6a" />
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
          <path d="M6 0V6.25V12.5" stroke="#6a6a6a" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#6a6a6a" />
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
          <path d="M6 0V6.25V12.5" stroke="#6a6a6a" />
          <path d="M0 6L6.25 6L12.5 6" stroke="#6a6a6a" />
        </svg>
      </div>

      {/* Header */}
      <header className={styles.header}>
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

        <nav className={styles.nav}>
          <a href="#init">Home</a>
          <a href="#spay">
            <img src={spayLogo} alt="Logo de Spay" />
          </a>
          <a href="#film">Aplica ya</a>
        </nav>
      </header>
      {/* <div className={styles.content}>{children}</div> */}
    </div>
  );
};

export default Header;
