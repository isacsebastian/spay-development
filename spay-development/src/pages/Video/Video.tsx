import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import neonVideo from '../../assets/neon.mp4'; // Ruta relativa al archivo

const ControlledVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            gsap.fromTo(videoElement, { autoAlpha: 0 }, {
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: videoElement,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                }
            });
        }
    }, []);

    return (
        <div>
            <video ref={videoRef} src={neonVideo} controls width="100%" />
        </div>
    );
};

export default ControlledVideo;
