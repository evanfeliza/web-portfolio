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
        <section id="contact" className='flex-col lg:flex-row flex items-center justify-center px-6 py-[20rem]'>
            <div className='mx-auto space-y-2'>
                <h3 className="text-4xl lg:text-7xl tracking-widest font-bold uppercase text-center">contact me</h3>
                <p className='text-xs lg:text-lg tracking-widest whitespace-normal text-center'> Send me an email or you can message me to my other social links.</p>
            </div>
            <div data-aos="fade-in" data-aos-duration="2000" className="card card-normal mx-auto mt-4 lg:mt-0">
                <a href={`mailto:${email?.socialLinks?.googleEmail}`} target="_blank" className=' btn my-2 btn-outline'>
                    <span className="mr-1">Send an Email</span>
                    <i className="fi fi-rs-paper-plane"></i>
                </a>
            </div>
        </section>
    )
}

export default ContactSection