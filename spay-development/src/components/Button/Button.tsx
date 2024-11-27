import React from 'react';
import ButtonIcon from '../../assets/buttonsvg.svg';
import styles from './Button.module.css';

const ContactButton: React.FC = () => {
  return (
    <button 
      className={styles.contactButton}
    >
      Contáctanos
      <img 
        src={ButtonIcon} 
        alt="Contact Icon" 
        className={styles.contactButtonIcon}
      />
    </button>
  );
};

export default ContactButton;