import React from 'react'

const SocialLink = ({ type, url }: {
    type: 'github' | 'linkedin' | 'google' | 'messenger';
    url?: string;
}) => {

    return <>
        {
            type === "github" ?
                <li >
                    <a href={`${url}`} target="_blank" >
                        <i className="fi fi-brands-github lg:text-2xl mt-1"></i>
                    </a>
                </li> : type === "linkedin" ? <li>
                    <a href={`${url}`} target="_blank">
                        <i className="fi fi-brands-linkedin lg:text-2xl mt-1"></i>
                    </a>
                </li> : type === "google" ? <li>
                    <a href={`mailto:${url}`}>
                        <i className="fi fi-brands-google lg:text-2xl mt-1"></i>
                    </a>
                </li> : type === "messenger" ? <li>
                    <a href={`${url}`} target="_blank">
                        <i className="fi fi-brands-facebook-messenger lg:text-2xl mt-1"></i>
                    </a>
                </li> : null
        }
    </>
}

export default SocialLink