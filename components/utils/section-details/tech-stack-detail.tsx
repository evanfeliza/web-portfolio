"use client"
import { useEffect, useState } from 'react'
import client from '@/components/src/sanity/sanity.client';
import { groq } from 'next-sanity';


type TechStack = {
    techStack: string[]
}

const getTechStackDetails = async () => {
    const data = await client.fetch(groq`*[_type == "profile" && fullName == "Evan Feliza"]{
        techStack
    }`);
    return data[0];
};


const useGetProjectDetailsData = () => {
    const [techStackData, setTechStackData] = useState<TechStack>()
    useEffect(() => {
        const getTechStackData = async () => {
            const res = await getTechStackDetails();
            setTechStackData(res);
        };
        getTechStackData()

    }, [])
    return techStackData
}


const TechStackCard = ({ name }: { name: string }) => {
    return (<div className='h-100 w-100 grayscale-[80%] cursor-pointer hover:grayscale-0 duration-300 flex items-center justify-center mt-4'>
        <i className={`text-5xl text-base-300 devicon-${name}-plain colored mr-3`}></i>
        <span className='hidden lg:block text-lg font-bold  uppercase tracking-wider'>{name}</span>
    </div>)
}

const TechStackDetail = () => {
    const data = useGetProjectDetailsData()

    return (

        <div data-aos="fade-in" className="mt-5 mx-auto max-w-[30rem] lg:max-w-[90rem] grid grid-cols-2 lg:grid-cols-3 items-center gap-10">
            {data?.techStack?.map(stack => <TechStackCard key={stack} name={stack} />)}
        </div>
    )
}

export default TechStackDetail