/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import codeLottieDark from "../components/src/json/code-light.json";
import codeLottieLight from "../components/src/json/code-dark.json";
import gridLottie from "../components/src/json/grid-lottie.json";
import SocialLink from '../components/utils/links/social-link';
import client from '@/components/src/sanity/sanity.client';
import { groq } from 'next-sanity';


type SocialLinks = {
    linkedinURL: string;
    githubURL: string;
    googleEmail: string;
    messengerURL: string;
}

type Profile = {
    fullName: string;
    description: string;
    resumeURL: string;
    socialLinks: SocialLinks;
};

const getProfile = async () => {
    const data = await client.fetch(groq`*[_type == "profile" && fullName == "Evan Feliza"]{
        fullName,
        description,
        "resumeURL": resumeURL.asset->url,
        socialLinks
    }`);
    return data;
};




const SocialLinks = ({ data }: { data: SocialLinks }) => {
    return (
        <ul className='menu menu-horizontal lg:menu-vertical'>
            {data && <>
                <SocialLink url={data?.githubURL} type={'github'} />
                <SocialLink url={data?.googleEmail} type={'google'} />
                <SocialLink url={data?.linkedinURL} type={'linkedin'} />
                <SocialLink url={data?.messengerURL} type={'messenger'} /></>}
        </ul>
    );
};

const HeroSection = () => {
    const [themeValue, setThemeValue] = useState<string>("");
    const [profileData, setProfileData] = useState<Profile>({} as Profile);

    useEffect(() => {
        const getProfileData = async () => {
            const res = await getProfile();
            setProfileData(res[0]);
        };
        getProfileData()
    }, [])

    useEffect(() => {
        const handleAttributeChange = () => {
            const theme = document.documentElement.getAttribute("data-theme");
            setThemeValue(theme || "");
        };
        const observer = new MutationObserver(handleAttributeChange);

        observer.observe(document.documentElement, { attributes: true });
        handleAttributeChange();

        return () => {
            observer.disconnect();
        };
    }, []);



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
                    <SocialLinks data={profileData?.socialLinks} />
                </div>
                <div className='text-wrap mt-14' >
                    <h3 data-aos="fade-right" data-aos-duration="2000" className='p-0 text-3xl lg:2xl -ml-[0.10em] lg:-m-[0.05em] lg:text-4xl font-bold '>Hi there, It's</h3>
                    <h1 data-aos="fade-right" data-aos-duration="2000" className='text-6xl lg:text-9xl font-medium tracking-tighter text-pretty -m-1 lg:-m-2'>{profileData?.fullName}</h1>
                    <p data-aos="fade-up" data-aos-duration="2000" className='text-md font-extralight my-4 text-wrap'>
                        {profileData?.description}</p>

                    <button data-aos="fade-right" className=' btn my-2 btn-outline'>
                        <a href={`${profileData?.resumeURL}`} download target="_blank" rel="noopener noreferrer" >
                            <span className="mr-1 uppercase tracking-widest">download my cv</span>
                            <i className="fi fi-rr-angle-double-small-right "></i>
                        </a>
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
    );
};

export default HeroSection;
