import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Manzana.module.css";
import ContactButton from "../../components/Button/Button";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 64;
const IMAGE_BASE_URL =
  "https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/";

const getImageUrl = (frame: number): string =>
  `${IMAGE_BASE_URL}${frame.toString().padStart(4, "0")}.png`;

const Manzana: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imgRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    timeline
      .to(textRef.current, { opacity: 0, duration: 1 }, 0)
      .to(buttonRef.current, { opacity: 0, duration: 1 }, 0);

    gsap.to({}, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
        pin: false,
        onUpdate: (self) => {
          const frame = Math.round(self.progress * (TOTAL_FRAMES - 1)) + 1;
          if (imgRef.current) imgRef.current.src = getImageUrl(frame);
        },
      },
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
<section id="manzana" ref={containerRef} style={{ height: '300vh' }} className={styles.manzanaContainer}>
<h1 ref={textRef} className={styles.overlayText}>
        La Solución de Cobro <br />
        Global para Empresas<br />
        Tecnológicas
      </h1>
      <div ref={buttonRef} className={styles.buttonContainer}>
        <ContactButton />
      </div>
      <div className={styles.frameContainer}>
        <img
          ref={imgRef}
          src={getImageUrl(1)}
          alt="Animated Frame"
          className={styles.centeredImage}
        />
      </div>
    </section>
  );
};

export default Manzana;
