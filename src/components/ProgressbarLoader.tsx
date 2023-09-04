import React from 'react'

import Lottie from 'lottie-react'

import animatedLoadingLottie from '../assets/lotties/animated_loading_lottie.json'

const ProgressbarLoader = () => {
    return (
        <div className='h-screen w-screen max-h-screen max-w-screen flex item-center justify-center'>
            <div className="h-52 w-52 my-auto"><Lottie animationData={animatedLoadingLottie} loop={true} /></div>
        </div>


    )
}

export default ProgressbarLoader