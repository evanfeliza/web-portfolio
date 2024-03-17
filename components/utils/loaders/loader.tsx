"use client"
import { useState, useEffect } from 'react'


const Loader = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const duration = setTimeout(() => {
            setIsLoading(prevState => !prevState);
        }, 3000)
        return () => clearTimeout(duration);
    }, [])
    return (
        <div className={`fixed bg-base-100 h-full w-full flex items-center justify-center z-50 transition-transform duration-500 ${isLoading ? 'translate-y-0' : ' -translate-y-full pointer-events-none'}`}>
            <span className='loader'></span>
        </div>
    )
}

export default Loader