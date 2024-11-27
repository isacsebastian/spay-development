import React, { useEffect, useRef } from 'react';
import styles from './test.module.css';

const AirPodsVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const FRAMES = 150;
    const FPS = 30;
    const video = videoRef.current;

    const handleScroll = () => {
      if (video) {
        const time = (window.scrollY / 1000) * FRAMES / FPS;
        video.currentTime = time;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.section}>
      <video 
        ref={videoRef}
        id="video" 
        width="998" 
        height="560" 
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
            https://www.apple.com/kr/airpods-pro/
          </a>{" "}
          contains 1,500+ images and their size is over 60MiB.
        </p>
        
        <p>
          I encoded the first 148ea, 4.8MiB of AirPods Pro images into a single 1.1MiB x264 video file and put it as a background. 
          The video file has total 148 i-frame frames by ffmpeg's <code>-intra</code> option. 
          It makes much smoother frame changes.
        </p>
        
        <p>
          Image courtesy of Apple, Inc.
        </p>
      </div>
    </section>
  );
};

export default AirPodsVideoSection;