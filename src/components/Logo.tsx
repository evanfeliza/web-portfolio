import React from 'react'
import Image, { StaticImageData } from 'next/image'
import imageLogo from '../assets/logo_32x32.png'


const Logo = ({ type }: { type: "logo" | "avatar" }) => {
    return (
        <>
            {type === "logo" && (
                <Image
                    alt='web-portfolio-logo'
                    src={imageLogo as StaticImageData}
                />)}
        </>
    )
}

export default Logo