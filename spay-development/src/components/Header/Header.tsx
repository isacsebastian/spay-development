import React from 'react';
import spayLogo from '../../assets/spay.svg'; 
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topBar}>
        <nav className={styles.nav}>
          <a href="#init">Home</a>
          <a href="#spay"><img src={spayLogo} alt="Spay Logo" /></a>
          <a href="#film">Aplica ya</a>
          {/* <a href="#about-us">About Us</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
