import React from 'react'

const Card = () => {
    return (
        <div className="h-full relative group">
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="object-cover w-full h-full group-hover:opacity-75 transition-opacity duration-300"
                />
            </figure>
            <div className="absolute inset-0 flex gap-2 items-center flex-col lg:flex-row justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/code" className=" underline">
                    Code
                </a>
                <a href="/view" className=" underline">
                    View
                </a>
            </div>
        </div>
    )
}

export default Card