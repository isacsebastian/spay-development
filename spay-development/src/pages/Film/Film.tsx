import React, { useEffect, useRef, useState } from 'react';
import styles from './Film.module.css';
import ContactButton from '../../components/Button/Button';

const AirPodsVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(1); // Controls opacity of the <h1>

  useEffect(() => {
    const FRAMES = 150;
    const FPS = 30;
    const video = videoRef.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacityScroll = 300; // Scroll distance until <h1> fades completely
      setOpacity(Math.max(1 - scrollTop / maxOpacityScroll, 0));

      if (video) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScroll;
        const time = scrollFraction * (FRAMES / FPS);

        video.currentTime = Math.min(time, video.duration || 0);
      }
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
    <section id="film" className={styles.section}>
      <h1 style={{ opacity }} className={styles.header}>
        The Global Collections Solution for Technology Companies
      </h1>
      <video
        ref={videoRef}
        className={styles.video}
        width="100%"
        playsInline
        poster="https://lqez.github.io/js/airpodsvf/video.jpg"
        aria-hidden="true"
      >
        <source
          src="https://lqez.github.io/js/airpodsvf/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default AirPodsVideoSection;
