/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import codeLottieDark from "../components/src/json/code-light.json"
import codeLottieLight from "../components/src/json/code-dark.json"
import gridLottie from "../components/src/json/grid-lottie.json"
import SocialLinks from '../components/utils/social-links/social-links'


const HeroSection = () => {
    const [themeValue, setThemeValue] = useState("")
    useEffect(() => {

        const handleAttributeChange = () => {
            const theme = document.documentElement.getAttribute("data-theme");
            setThemeValue(theme as string);
        };
        const observer = new MutationObserver(handleAttributeChange);


        observer.observe(document.documentElement, { attributes: true });
        handleAttributeChange();

        return () => {
            observer.disconnect();
        };
    }, [setThemeValue]);


    return (
        <section id="home" className='relative mx-auto h-screen max-h-screen w-full'>
            <Lottie
                loop
                animationData={gridLottie}
                play
                style={{ objectFit: "cover", position: "absolute", opacity: 0.05, zIndex: -10, width: "100%", height: "100%" }} // Set width and height to viewport units
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />

            <div className='h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 py-4'>
                <div className='-order-first lg:order-first'>
                    <SocialLinks orientation='vertical' />
                </div>
                <div className='text-wrap mt-14' >
                    <h3 className='p-0 text-2xl -ml-[0.10em] lg:-m-[0.05em] lg:text-4xl font-bold '>Hi there, It's</h3>
                    <h1 className='text-6xl lg:text-9xl font-medium tracking-tighter text-pretty -m-1 lg:-m-2'>Evan Feliza</h1>
                    <p className='text-md font-extralight my-4 text-wrap'>
                        An aspiring front-end developer eager to learn and grow, I'm reaching out to connect with employers who value enthusiasm and potential in creating engaging user experiences. Let's connect and discuss how I can contribute to your team's goals!</p>
                    <button className='btn my-2 btn-outline'>
                        <span className="mr-1">Let's Connect</span>
                        <i className="fi fi-rr-angle-double-small-right pt-1"></i>
                    </button>
                </div>

                <Lottie
                    loop
                    animationData={themeValue === "lofi" ? codeLottieLight : codeLottieDark}
                    play
                    style={{ order: 9999, width: "auto  ", height: "auto" }}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}

                />



            </div>
        </section>
    )
}

export default HeroSection