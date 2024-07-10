"use client"
import { useState, useEffect } from 'react'



const DarkMode = () => {
    const [theme, setTheme] = useState<string>("black")
    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme)
        document.querySelector("html")?.classList.add("duration-100")
    }, [theme])


    const toggleTheme = () => {
        setTheme(theme !== "black" ? "black" : "lofi")
    }
    return (
        <label className='swap swap-rotate'>
            <input onClick={toggleTheme} type='checkbox' />
            <i className="swap-on fi fi-ss-moon-stars"></i>
            <i className="swap-off fi fi-ss-brightness"></i>
        </label>
    )
}

export default DarkMode