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
        <div className='h-64'>
            <video
                ref={ref}
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-64 object-cover opacity-50 absolute"
                src="/live-wallpaper.mp4"
            >
            </video>
            <div className="text-center relative left-0 right-0 pt-20">
                <h1 className="text-5xl font-bold text-blue-200" style={{fontSize: "min(3rem,10vw)"}}>Welcome on my website!</h1>
                <h2 className="text-3xl font-bold text-cyan-300">I&apos;m radekaadek</h2>
            </div>
        </div>
    );
};

export default AnimeBackground;
