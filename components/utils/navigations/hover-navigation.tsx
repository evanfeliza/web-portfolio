"use client"
import React, { useState, useEffect, useRef, ReactElement, HTMLAttributes } from 'react'
import { useRouter } from 'next/navigation'
import { useHash } from '../../hooks/hash-retriever'
import Link from 'next/link'


const navigations = [
    {
        id: 'home',
        name: 'home',
        path: '',
        icon: <i className="fi fi-ss-home"></i>
    },
    {
        id: 'about',
        name: 'about',
        path: '#about',
        icon: <i className="fi fi-sr-user"></i>
    },
    {
        id: 'skills',
        name: 'skills',
        path: '#skills',
        icon: <i className="fi fi-ss-display-code"></i>
    },
    {
        id: 'contact',
        name: 'contact',
        path: '#contact',
        icon: <i className="fi fi-ss-headset"></i>
    }

];

const NavbarLinks = () => {
    const router = useRouter()
    const hash = useHash()
    const [activeId, setActiveId] = useState("")

    const handleActiveLink = (navigation: string) => {
        router.replace(`#${navigation}`)
    }

    useEffect(() => {

        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        });

        sections.forEach(section => {
            observer.observe(section);
        });


        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, [hash, router]);
    console.log(activeId)

    return (
        <ul className='flex flex-row gap-1 lg:flex-col lg:my-auto bg-base-200 p-2 rounded-md '>
            {navigations?.map((navigation) => {
                return (
                    <Link onClick={() => {
                        handleActiveLink(navigation.path)
                    }} href={navigation.path} key={navigation.id} className={`capitalize btn ${hash === `#${navigation.name}` && "btn-active duration-100"} ${activeId === navigation.name && "btn-outline duration-100"}`}>
                        {navigation.icon}
                    </Link>
                )
            })}
        </ul>
    )
}


const HoverNavbar = () => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            setIsScroll(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`z-50 drop-shadow-md border-collapse fixed grid grid-row-1 bottom-2 left-1/2 -translate-x-1/2  lg:top-1/2 lg:left-11 lg:transform lg:-translate-y-1/2 transition-opacity${isScroll ? 'opacity-100 duration-300' : 'opacity-0 duration-300'}`}>
            {isScroll && <NavbarLinks />}
        </div>
    );
};

export default HoverNavbar