import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import ContactButton from "../../components/Button/Button";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 64;
const IMAGE_BASE_URL =
  "https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/";

const getImageUrl = (frame: number) =>
  `${IMAGE_BASE_URL}${frame.toString().padStart(4, "0")}.png`;

const Home: React.FC = () => {
  const [opacity, setOpacity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacityScroll = 300;
      setOpacity(Math.max(1 - scrollTop / maxOpacityScroll, 0));
    };

    const throttledHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !imgRef.current) return;

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          const frame = Math.round(self.progress * (TOTAL_FRAMES - 1)) + 1;
          if (imgRef.current) {
            imgRef.current.style.opacity = "1"; // Asegurar visibilidad
            imgRef.current.src = getImageUrl(frame);
          }
        },
      },
    });
  }, []);

  return (
    <div>
      <section id="home" className={styles.home}>
        <h1 style={{ opacity }} className={styles.overlayText}>
          La Solución de Cobro <br />
          Global para Empresas<br />
          Tecnológicas
        </h1>
        <div style={{ opacity, transition: "opacity 0.2s ease-out" }}>
          <ContactButton />
        </div>
      </section>
      <div ref={containerRef} className={styles.frameContainer}>
        <img
          ref={imgRef}
          src={getImageUrl(1)}
          alt="Animated Frame"
          className={styles.centeredImage}
          // style={{ opacity: 1, transition: "opacity 0.2s ease-out" }}
        />
      </div>
    </div>
  );
};

export default Home;
