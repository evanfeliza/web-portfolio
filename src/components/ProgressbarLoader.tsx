import React from 'react'

import Lottie from 'lottie-react'

import animatedLoadingLottie from '../assets/lotties/animated_loading_lottie.json'

const ProgressbarLoader = () => {
    return (
        <div className='h-screen w-screen flex item-center justify-center z-50'>
            <Lottie animationData={animatedLoadingLottie} loop={true} size={50} />
        </div>


    )
}

export default ProgressbarLoader