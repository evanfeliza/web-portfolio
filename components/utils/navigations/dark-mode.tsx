"use client"
import { useState, useEffect } from 'react'



const DarkMode = () => {
    const [theme, setTheme] = useState<string>("lofi")
    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme)
        document.querySelector("html")?.classList.add("duration-100")
        if (theme === "black") {
            document.querySelector("html")?.classList.add("dark-cursor")
        } else {
            document.querySelector("html")?.classList.remove("dark-cursor")
        }
    }, [theme])


    const toggleTheme = () => {
        setTheme(theme !== "lofi" ? "lofi" : "black")
    }
    return (
        <label className='swap swap-rotate'>
            <input onClick={toggleTheme} type='checkbox' />
            <i className="swap-on fi fi-ss-moon-stars text-xl"></i>
            <i className="swap-off fi fi-ss-brightness text-xl"></i>
        </label>
    )
}

export default DarkMode