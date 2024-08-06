"use client"
import React, { useEffect } from 'react';

const SplashScreen = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('splash-screen');
            if (loader) {
                setTimeout(() => {
                    loader.classList.add('transition-opacity', 'ease-in', 'opacity-0');
                    setTimeout(() => {
                        loader.remove()
                    }, 2000)
                }, 3000);
            }
        }
    }, []);

    return (
        <div id="splash-screen" className="fixed bg-base-100 duration-500 h-full w-full flex items-center justify-center z-50">
            <span className='loader'></span>
        </div>
    );
};

export default SplashScreen;
