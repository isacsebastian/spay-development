import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactButton from "../../components/Button/Button";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 64;
const IMAGE_BASE_URL =
  "https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/";

const getImageUrl = (frame: number) =>
  `${IMAGE_BASE_URL}${frame.toString().padStart(4, "0")}.png`;

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imgRef.current || !textRef.current) return;

    // Animación del texto y botón con GSAP
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top top",
        end: "300px top",
        scrub: true,
      },
      /*opacity: 0,*/
    });

    // Animación del contenedor de frames con GSAP
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const frame = Math.round(self.progress * (TOTAL_FRAMES - 1)) + 1;
          if (imgRef.current) imgRef.current.src = getImageUrl(frame);
        },
      },
    });
  }, []);

  return (
    <div>
      <div ref={textRef} style={{ position: "relative", padding: "20px" }}>
        <h1>
          La Solución de Cobro <br />
          Global para Empresas<br />
          Tecnológicas
        </h1>
        <ContactButton />
      </div>
      <div ref={containerRef} style={{ height: "200vh", position: "relative" }}>
        <img
          ref={imgRef}
          src={getImageUrl(1)}
          alt="Animated Frame"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Home;
