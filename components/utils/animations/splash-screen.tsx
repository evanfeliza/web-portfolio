"use client"
import React, { useEffect } from 'react'


const SplashScreen = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('splash-screen');
            if (loader) {
                setTimeout(() => {
                    loader?.remove();
                }, 3000)
            }
        }
    }, []);
    return (
        <div id="splash-screen" className={`fixed bg-base-100 h-full w-full flex items-center justify-center z-50 transition-transform`}>
            <span className='loader'></span>
        </div>
    )
}

export default SplashScreen