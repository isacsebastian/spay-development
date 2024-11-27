import React from 'react';
import styles from './Init.module.css';
import ContactButton from '../../components/Button/Button';

const Init: React.FC = () => {
  return (
    <section id="init" className={styles.init}>
      <h1>La Solución de Cobro <br></br>Global para Empresas<br></br> Tecnológicas</h1>
      <ContactButton/>

    </section>
    
  );
};

export default Init;
