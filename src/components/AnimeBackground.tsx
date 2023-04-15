// autoplay the live-wallpaper.mp4

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const AnimeBackground: React.FC = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    
    React.useEffect(() => {
        if (inView) {
        controls.start('visible');
        }
    }, [controls, inView]);
    
    return (
        <div className="w-screen relative">
            <video
                ref={ref}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-64 w-screen object-cover opacity-50"
                src="/live-wallpaper.mp4"
            />
            <div className="text-center relative">
                <h1 className="text-5xl font-bold text-white">Welcome to my website!</h1>
                <h2 className="text-2xl font-bold text-white">I&apos;m radekaadek</h2>
            </div>
        </div>
    );
};

export default AnimeBackground;
