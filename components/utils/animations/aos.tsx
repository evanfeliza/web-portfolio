"use client"
import React, { ReactNode, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const AnimateOnScroll = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            duration: 1000,
        });
    }, [])
    return null
}

export default AnimateOnScroll