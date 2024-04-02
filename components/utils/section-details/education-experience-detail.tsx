"use client"
import React, { useEffect, useState } from 'react'
import client from '@/components/src/sanity/sanity.client';
import { groq } from 'next-sanity';
import classnames from 'classnames';
import GeneratedIcon from '../generator/icon-generator';
type Code = {
    code: string;
    language: string;
}
type Timeline = {
    location: string;
    event: string;
    year: string;
    logo: Code
}
type TimelineData = {
    timeline: Timeline[]
}


const getEducationDetails = async () => {
    const data = await client.fetch(groq`*[_type == "profile" && fullName == "Evan Feliza"]{
        timeline
      }`);
    return data[0];
};

const useGetEducationalDetailsData = () => {
    const [timelineData, setTimelineData] = useState<Timeline[]>([])
    useEffect(() => {
        const getProfileData = async () => {
            const res = await getEducationDetails();
            setTimelineData([...res?.timeline]);
        };
        getProfileData()

    }, [])
    return timelineData
}

const DesktopTimeline = () => {
    const timelineData = useGetEducationalDetailsData()

    return (
        <ul className='timeline timeline-vertical overflow-x-hidden px-1 py-4 text-xl'>
            {timelineData?.map((data, index) => {
                return (<li key={index} data-aos="fade-right">
                    <div className={classnames({ "timeline-start": index % 2 === 0, "timeline-end": index % 2 !== 0 })}>
                        <span className='tracking-widest uppercase font-bold'>{data?.year}</span>
                    </div>
                    <div className="timeline-middle m-2">
                        <GeneratedIcon icon={data?.logo?.code as string} />
                    </div>
                    <div className={`timeline-box p-3 w-full flex lg:flex-col flex-wrap items-start ${classnames({ "timeline-end": index % 2 === 0, "timeline-start": index % 2 !== 0 })}`}>
                        <p className='tracking-tight text-md'>{data?.event}</p>
                        <span className="text-xs font-medium mt-3 ">
                            <i className="fi fi-ss-map-marker mr-2 "></i>{data?.location}
                        </span>
                    </div>
                    <hr />
                </li>)
            })}
        </ul>
    )
}

const MobileTimeline = () => {
    const timelineData = useGetEducationalDetailsData()
    return (
        <ul className='timeline timeline-compact timeline-vertical overflow-x-hidden px-1 py-4'>
            {timelineData?.map((data, index) => (<li key={index} data-aos="fade-left">
                <div className="timeline-start">
                    <GeneratedIcon icon={data?.logo?.code as string} />
                </div>
                <div className="timeline-end timeline-box w-full  flex flex-col flex-wrap p-3">
                    <p className='text-md tracking-tight'>{data?.event}</p>
                    <span className="text-xs tracking-wider mt-2 ">{data?.year}</span>
                    <span className="mt-2 text-xs font-bold tracking-wider"><i className="fi fi-ss-map-marker mr-2 "></i>{data?.location}</span>
                </div>
                <hr />
            </li>))}
        </ul>
    )
}

const EducationAndExperiencesDetail = () => {
    return (
        <div data-aos="fade-in"
            data-aos-duration="500"
            className="my-10 mockup-window max-h-full max-w-full border-[0.01em]" >
            <div className='bg-base-200 px-6 py-4 h-full'>
                <div className='border-b pb-4'><span className='tracking-widest uppercase font-semibold text-3xl'>my timeline</span></div>
                <div className='hidden lg:block'>
                    <DesktopTimeline />
                </div>
                <div className="block lg:hidden">
                    <MobileTimeline />
                </div>
            </div>
        </div >
    )
}

export default EducationAndExperiencesDetail