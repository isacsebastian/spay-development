import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import ContactButton from '../../components/Button/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Elemento disparador
        start: 'top top',
        end: 'bottom top', 
        scrub: true,
        pin: true, 
        markers: true,
      },
    });

    animation
      .to(textRef.current, { opacity: 0, duration: 1 }, 0)
      .to(buttonRef.current, { opacity: 0, duration: 1 }, 0);

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className={styles.home}>
      <h1 ref={textRef} className={styles.overlayText}>
        La Solución de Cobro <br />
        Global para Empresas<br />
        Tecnológicas
      </h1>
      <div ref={buttonRef}>
        <ContactButton />
      </div>
    </section>
  );
};

export default Home;
