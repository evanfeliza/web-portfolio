"use client"
import React, { useEffect, useState, Suspense } from "react";

import { useTheme } from 'next-themes';

import Hero from "./sections/HeroSection";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";

import { Layout } from "antd"

import { BuildOutlined, HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";

import { Providers } from "./providers";
import Loading from "./loading";


const useBrandLookup = () => {
  const { theme, setTheme } = useTheme();
  const isDarkModeChecked = theme === "dark";
  const brandName = "evan feliza";
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
  ];

  const handleDarkMode = (toggleDarkmode: boolean) => {
    setTheme(toggleDarkmode ? 'dark' : 'light');
  };

  return {
    brandName,
    handleDarkMode,
    isDarkModeChecked,
    navigations,
    theme
  };
};

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { brandName, handleDarkMode, navigations, theme } = useBrandLookup();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Providers>
        <Layout className="relative">
          <Navbar
            logo={<Logo type="logo" />}
            navBrand={brandName}
            navigations={navigations}
            onClick={(e) => handleDarkMode(e)}
            checked={theme === 'dark'}
          />
          <Content className="dark:bg-black dark:text-white">
            <Hero />
          </Content>
        </Layout>
      </Providers>
    </Suspense>
  );
};

export default Home;
