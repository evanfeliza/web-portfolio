"use client"
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import client from '@/components/src/sanity/sanity.client';
import { groq } from 'next-sanity';


type SocialLink = {
    socialLinks: {
        googleEmail: string;
    }
}
const getEmail = async () => {
    const data = await client.fetch(groq`*[_type == "profile" && fullName == "Evan Feliza"]{socialLinks{googleEmail}}`);
    return data[0];
};

const useGetEmail = () => {
    const [emailData, setEmailData] = useState<SocialLink>()
    useEffect(() => {
        const getEmailData = async () => {
            const res = await getEmail();
            setEmailData(res);
        };
        getEmailData()

    }, [])
    return emailData
}


const ContactSection = () => {
    const email = useGetEmail()
    return (
        <section id="contact" className='mx-auto h-auto max-h-full max-w-full border-t'>
            <div className='px-6 lg:px-12 py-6 '>
                <div data-aos="fade-up" className='mx-auto'>
                    <h3 className="text-5xl tracking-widest font-bold uppercase">contact me</h3>
                    <p className='text-md'> Send me an email or you can message me to my other social links.</p>
                </div>
                <div data-aos="fade-in" className="grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10">
                    <div className='flex mx-auto mt-4 lg:mt-0'>
                        <h1 className=' text-6xl lg:text-right lg:text-[7rem] font-semibold tracking-tighter uppercase'>Let's Talk</h1>
                    </div>
                    <div className="card card-normal mx-auto">
                        <a href={`mailto:${email?.socialLinks?.googleEmail}`} target="_blank" className=' btn my-2 btn-outline'>
                            <span className="mr-1">Send an Email</span>
                            <i className="fi fi-rs-paper-plane"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection