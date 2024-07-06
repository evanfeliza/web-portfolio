"use client"

import React from 'react'
import Lottie from 'react-lottie-player';
import gridLottie from "../components/src/json/grid-lottie.json";


const BackgroundLottie = () => {
    return (
        <Lottie
            loop
            animationData={gridLottie}
            play
            style={{ objectFit: "cover", position: "absolute", opacity: 0.05, zIndex: -10, width: "100%", height: "100%" }} // Set width and height to viewport units
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
    )
}

export default BackgroundLottie