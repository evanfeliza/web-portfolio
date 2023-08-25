"use client"
import React, { useEffect, useState } from "react";

import { useTheme } from 'next-themes'

import Hero from "./section/HeroSection";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";

import { BuildOutlined, HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Providers } from "./providers";


const useBrandLookup = () => {
    const { theme, setTheme } = useTheme()

    const isDarkModeChecked = theme === "dark"
    const brandName = "vandroidF"
    const navigations = [
        {
            label: "Home",
            component: <HomeOutlined />
        },
        {
            label: "About Me",
            component: <UserOutlined />
        },
        {
            label: "Projects",
            component: <BuildOutlined />

        },
        {
            label: "Contact",
            component: <PhoneOutlined />
        },

    ]

    const handleDarkMode = (toggleDarkmode: boolean) => {
        setTheme(toggleDarkmode ? 'dark' : 'light')
    }
    return {
        brandName,
        handleDarkMode,
        isDarkModeChecked,
        navigations,
        theme
    }
}


const Home = () => {
    const [mounted, setMounted] = useState(false)
    const { brandName, handleDarkMode, navigations, theme } = useBrandLookup()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }


    return (
        <Providers>
            <Layout>
                <Navbar logo={<Logo type="logo" />}
                    navBrand={brandName}
                    navigations={navigations}
                    onClick={(e) => handleDarkMode(e)}
                    checked={theme === 'dark'}
                />
                <Content className="dark:bg-black dark:text-white">
                    <Hero />
                    <Hero />


                    <Hero />
                    <Hero />
                    <Hero /><Hero /><Hero />

                    <Hero />
                    <Hero />
                    <Hero />
                </Content>
            </Layout>
        </Providers>
    )
}

export default Home