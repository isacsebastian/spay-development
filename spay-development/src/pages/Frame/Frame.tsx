import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Frame.module.css"; 

gsap.registerPlugin(ScrollTrigger);

const Frame: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const totalFrames = 64; // Total de frames disponibles
    const imageUrl = (frame: number) =>
        `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${frame
            .toString()
            .padStart(4, "0")}.png`;

    useEffect(() => {
        if (!containerRef.current) return;

        const preloadImages = () => {
            for (let i = 1; i <= totalFrames; i++) {
                const img = new Image();
                img.src = imageUrl(i);
            }
        };

        preloadImages();

        const frameAnimation = gsap.to({}, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
                markers: true,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const frameIndex = Math.round(progress * (totalFrames - 1)) + 1;
                    setCurrentFrame(frameIndex);
                },
            },
        });

        return () => {
            frameAnimation.kill();
        };
    }, []);

        


    return (
        <div
            ref={containerRef}
            className={styles.container} 
        >
            <img
            src={imageUrl(currentFrame)}
            alt={`Frame ${currentFrame}`}
            className={styles.image} 
            />
        </div>
    );
};

export default Frame;
