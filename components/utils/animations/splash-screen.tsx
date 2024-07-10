"use client"
import React, { useEffect } from 'react'


const SplashScreen = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('splash-screen');
            if (loader)
                loader.classList.add('-translate-y-[100vh]', 'opacity-1')
            setTimeout(() => {
                loader?.remove();
            }, 5000)
        }
    }, []);
    return (
        <div id="splash-screen" className={`fixed bg-base-100 h-full w-full flex items-center justify-center z-50 transition-transform sm:duration-[2500ms] lg:duration-[3000ms] `}>
            <span className='loader'></span>
        </div>
    )
}

export default SplashScreen