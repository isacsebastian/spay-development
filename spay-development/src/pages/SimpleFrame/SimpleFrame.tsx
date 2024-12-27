import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SimpleFrame.module.css";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 64;
const IMAGE_BASE_URL =
    "https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/";

const getImageUrl = (frame: number) =>
    `${IMAGE_BASE_URL}${frame.toString().padStart(4, "0")}.png`;

const SimpleFrame: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!containerRef.current || !imgRef.current) return;

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
    }, []);

    return (
        <div ref={containerRef} className={styles.frameContainer}>
            <img
                ref={imgRef}
                src={getImageUrl(1)} 
                alt="Animated Frame"
                className={styles.centeredImage}
            />
        </div>
    );
};

export default SimpleFrame;
