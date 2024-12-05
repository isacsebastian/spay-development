import React, { useEffect, useRef } from 'react';
import styles from './Film.module.css';

const AirPodsVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const FRAMES = 150;
    const FPS = 30;
    const video = videoRef.current;

    const handleScroll = () => {
      if (video) {
        const scrollTop = window.scrollY;
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
    <section className={styles.section}>
      <video 
        ref={videoRef}
        aria-hidden="true"
        width="100%"
        playsInline
        poster="https://lqez.github.io/js/airpodsvf/video.jpg"
        className={styles.video}
      >
        <source 
          src="https://lqez.github.io/js/airpodsvf/video.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.scrollDummy}>
        <h1>AirPods Pro page is TOO BIG</h1>
        <p>
          <a href="https://www.apple.com/kr/airpods-pro/">
            Apple AirPods Pro Page
          </a>
        </p>
        <p>
          Video encoded with 148 frames into 1.1MiB for smooth scrolling.
        </p>
      </div>
    </section>
  );
};

export default AirPodsVideoSection;
