import React from 'react';
import styles from './Spay.module.css';
import ContactButton from '../../components/Button/Button';

const Spay: React.FC = () => {
  return (
    <section id="spay" className={styles.spay}>
      <h1>La Solución de Cobro <br></br>Global para Empresas<br></br> Tecnológicas</h1>
      <ContactButton/>

    </section>
    
  );
};

export default Spay;
