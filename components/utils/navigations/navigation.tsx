import React from 'react'
import Link from 'next/link'
import DarkMode from './dark-mode'
const navigations = [
    "about",
    "skills",
    "contact"
]
const NavbarLinks = () => {

    return (
        <ul className='menu menu-horizontal divide-x-[0.01rem] tracking-widest font-semibold '>
            {navigations?.map((navigation, index) => (<li key={index} className={`uppercase`}>
                <Link href={
                    `#${navigation}`
                }>{navigation}</Link>
            </li>))}
        </ul>
    )
}


const Navbar = () => {
    return (
        <div className='w-full flex drop-shadow-md lg:drop-shadow-none items-center px-6 lg:px-12 py-4 absolute z-10'>
            <div className='flex-1 lg:px-6 py-6'><DarkMode /></div>
            <div className='flex-none hidden md:block                                                                                                                                                                                  '><NavbarLinks /></div>
        </div>
    )
}

export default Navbar