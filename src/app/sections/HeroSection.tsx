import React from 'react'

import { useTheme } from 'next-themes'

import Lottie from "lottie-react"


import Logo from '../../components/Logo'
import scrollLottieLight from '@/assets/lotties/scroll_lottie_light.json'
import scrollLottieDark from '@/assets/lotties/scroll_lottie_dark.json'
import rocketLottie from '@/assets/lotties/rocket_lottie.json'

import { Button } from 'antd'
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const ProggressbarIcon = () => {
  const { theme } = useTheme()
  return <span className='absolute h-16 w-12 bottom-5 left-1/2 transform -translate-x-1/2'>
    {theme === "dark" ? (<Lottie animationData={scrollLottieDark} loop={true} />) : (<Lottie animationData={scrollLottieLight} loop={true} />)}
  </span>
}


const Hero = () => {
  return (
    <div className=" max-w-[62rem] px-10 sm:px-0 md:px-0 lg:px-0 py-5 mx-auto min-h-[95vh] h-[95vh]">
      <div className="relative grid items-center justify-center grid-cols-12 gap-3 h-full">
        <div className='col-span-8'>
          <h3 className='relative text-7xl tracking-wide m-0'>Hello, I'm Evan A. Feliza.</h3>
          <p className='text-4xl tracking-widest '>
            I am a <strong>front-end developer</strong>passionate for creating user experiences in the <strong>web</strong>.
          </p>
          <div className='w-1/2'>
            <label className="sr-only">Download</label>
            <Button type='primary' icon={<DownloadOutlined />} className='text-black dark:text-white dark:ring-[0.5px] bg-transparent dark:ring-white mx-auto tracking-[0.2rem] uppercase font-semibold' >Download My CV</Button>
          </div>
        </div>
        <div className="col-span-4">
          <Logo type="avatar" />
          <div className='space-x-5'><Button type='text' icon={<GithubOutlined />} />
            <Button type='text' icon={<LinkedinOutlined />} /></div>
        </div>
        <ProggressbarIcon />
      </div>
    </div>
  )
}

export default Hero