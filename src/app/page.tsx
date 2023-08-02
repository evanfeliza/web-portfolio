"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import { BuildOutlined, HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import Logo from "@/components/Logo";
import { motion as m, useScroll } from "framer-motion"


const useBrandLookup = () => {
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
  return {
    brandName,
    navigations
  }
}

const Home = () => {
  const { scrollYProgress } = useScroll()
  const { brandName, navigations } = useBrandLookup()

  return <main>
    <m.div className="fixed top-0 left-0 right-0 h-5 bg-black origin-[0%]" style={{ scaleX: scrollYProgress }} />
    <Navbar logo={<Logo />} navBrand={brandName} navigations={navigations} />
    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ullam ex distinctio blanditiis perferendis porro quibusdam fugit, rem neque debitis animi unde nesciunt minima id pariatur praesentium eveniet hic deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque, vero, accusantium dolor amet voluptas quae, id fugit eius quasi sit nam. Perspiciatis doloribus labore eius enim consequuntur, error repellendus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae possimus eaque blanditiis! Perspiciatis omnis labore, amet, sint eum fuga corrupti quo tempora, eveniet cupiditate sunt ea velit. Eos, fuga!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptatum nihil in ut eum excepturi numquam exercitationem id rerum, ducimus quaerat vitae sapiente accusamus. Obcaecati qui rerum fuga officia dolor.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus exercitationem dolore labore odio laborum, doloribus quisquam omnis dolorem? Sapiente dolore adipisci explicabo quos consequatur officia ducimus pariatur impedit saepe!
    </h1>
  </main>;
};

export default Home;
