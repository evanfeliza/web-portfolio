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
        <section id="home" className='relative mx-auto h-auto'>
            <Lottie
                loop
                animationData={gridLottie}
                play
                style={{ objectFit: "cover", position: "absolute", opacity: 0.05, zIndex: -10, width: "100%", height: "100%" }} // Set width and height to viewport units
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />

            <div className='max-h-full'>
                <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-4">
                    <div className='-order-first lg:order-first'>
                        <SocialLinks data={profileData?.socialLinks} />
                    </div>
                    <div className='text-wrap mt-16 mb-0 lg:my-40 space-y-4'>
                        <h3 data-aos="fade-right" data-aos-duration="2000" className='p-0 text-xl lg:text-4xl font-medium tracking-tight'>Hi there, It's</h3>
                        <h1 data-aos="fade-right" data- aos-duration="2000" className='text-5xl lg:text-8xl font-bold tracking-widest lg:tracking-tight text-pretty'>{profileData?.fullName}</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" className='leading-8 text-md tracking-wider font-light my-4 text-wrap'>
                            {profileData?.description}</p>

                        <a href={`${profileData?.resumeURL}`}
                            rel="noopener noreferrer"
                            download
                            className={`btn my-2 btn-outline btn-md ${!profileData?.resumeURL && "btn-disabled"}`}>
                            <span className="mr-1 uppercase tracking-widest">download my cv</span>
                            <i className="fi fi-rr-angle-double-small-right "></i>
                        </a>
                    </div>
                    <Lottie
                        loop
                        animationData={themeValue === "lofi" ? codeLottieLight : codeLottieDark}
                        play
                        style={{ order: 9999, width: "auto  ", height: "auto" }}
                        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}

                    />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
