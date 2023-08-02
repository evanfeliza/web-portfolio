import React from 'react'
import { motion as m, useScroll } from 'framer-motion';

const Navbar = ({ navigations, logo, navBrand, }: {
  logo: React.JSX.Element;
  navBrand: string;
  navigations: {
    label: string;
    component: React.JSX.Element;
  }[];

}) => {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <nav className='sticky top-0 bottom-0 px-1 py-2 flex justify-between bg-white dark:bg-black dark:text-white items-center shadow-md'>
        <div className='flex items-center gap-2'>
          {logo}
          <strong className="cursor-pointer">{navBrand}</strong>
        </div>
        <div className='block'>
          <ul className='list-none flex gap-2'>
            {navigations?.map((navigation, index) =>
              <m.li
                whileHover={{
                  borderBottomWidth: 6,
                  borderColor: "black"
                }}
                key={index} className='flex items-center gap-2 cursor-pointer'>
                <m.span
                  whileHover={{
                    translateY: -3,
                  }}
                  whileTap={{ scale: 1.1 }}
                >{navigation.component}</m.span>{navigation.label}
              </m.li>)}
          </ul>
        </div>
      </nav>

      <m.div className="fixed top-15 left-0 right-0 h-1 bg-black origin-[0%]" style={{ scaleX: scrollYProgress }} />
    </>
  )
}

export default Navbar
