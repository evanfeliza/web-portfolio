import React from 'react'

import { useTheme } from 'next-themes'

import Lottie from "lottie-react"


import scrollLottieLight from '@/assets/lotties/scroll_lottie_light.json'
import scrollLottieDark from '@/assets/lotties/scroll_lottie_dark.json'


import { Button } from 'antd'
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const ProggressbarIcon = () => {
  const { theme } = useTheme();
  return (
    <span className={`mx-auto first-letter:h-16 w-12 bottom-0 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2' : ''}`}>
      {theme === 'dark' ? <Lottie animationData={scrollLottieDark} loop={true} /> : <Lottie animationData={scrollLottieLight} loop={true} />}
    </span>
  );
};


const Hero = () => {
  return (
    <div className=" max-w-[62rem] px-10 sm:px-0 md:px-0 lg:px-0 py-5 mx-auto min-h-[100vh] h-[100vh]">
      <div className="relative flex flex-col items-center justify-center grid-cols-12 gap-3 h-full w-full">
        <div className='mt-[7rem] w-full h-full'>
          <h3 className='relative text-6xl font-extrabold tracking-wide m-0'>Hello, My name is Evan.</h3>
          <p className='text-3xl font-bold tracking-widest '>
            I am a <span className='font-extrabold'>front-end developer</span> passionate for creating user experiences in the <span className='font-extrabold'>web</span>.
          </p>
          <div className='w-1/2'>
            <label className="sr-only">Download</label>
            <Button icon={<DownloadOutlined />} className='text-white rounded-none bg-black hover:bg-white hover:text-black hover:border-1 border-black dark:text-white dark:ring-[0.5px] dark:ring-white mx-auto tracking-[0.2rem] uppercase font-semibold duration-300' >Download My CV</Button>
          </div>
        </div>
        <ProggressbarIcon />
      </div>
    </div>
  )
}

export default Hero