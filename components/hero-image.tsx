"use client"
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import codeLottieDark from "../components/src/json/code-light.json";
import codeLottieLight from "../components/src/json/code-dark.json";

const Lottie = dynamic(() => import('react-lottie-player'), {
    ssr: false,
})



const HeroImageLottie = () => {
    const [themeValue, setThemeValue] = useState<string>("");

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
    }, [themeValue]);

    return (
        <Lottie
            loop
            animationData={themeValue === "lofi" ? codeLottieLight : codeLottieDark}
            play
            style={{ order: 9999, width: "auto  ", height: "auto" }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}

        />
    )
}

export default HeroImageLottie