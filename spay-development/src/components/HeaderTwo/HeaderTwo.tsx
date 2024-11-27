import React from 'react';
import spayLogo from '../../assets/spay.svg';

import styles from './HeaderTwo.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
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
