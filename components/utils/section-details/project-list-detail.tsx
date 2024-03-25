"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image';
import client from '@/components/src/sanity/sanity.client';
import { groq } from 'next-sanity';
import classnames from 'classnames';






type ProjectData = {
    projectCodeLink: string;
    projectDemoLink: string
    projectImage: string;
    projectTitle: string;
    techTags: string[]
}


const getProjectDetails = async () => {
    const data = await client.fetch(groq`*[_type == "profile" && fullName == "Evan Feliza"]{projects[]{
        projectCodeLink,
        projectDemoLink,
        projectTitle,
        "projectImage": projectImage.asset->url,
        techTags
      }}`);
    return data[0];
};


const useGetProjectDetailsData = () => {
    const [projectData, setProjectData] = useState<ProjectData[]>([])
    useEffect(() => {
        const getProjectsData = async () => {
            const res = await getProjectDetails();
            setProjectData([...res?.projects]);
        };
        getProjectsData()

    }, [])
    return projectData
}


const ProjectCard = ({ data }: { data: ProjectData }) => {
    const [cardData] = useState<ProjectData>(data)

    return (
        <div data-aos="fade-up" className="h-full relative group overflow-hidden bg-base-300">
            <Image
                src={`${cardData?.projectImage}`}
                alt={`${cardData?.projectTitle}`}
                width={1280}
                height={720}
                quality={100}
                className="object-contain lg:object-fill w-full h-full group-hover:scale-110  group-hover:opacity-75  transition-transform duration-300"
            />
            <div className="z-20 absolute inset-0 flex gap-2 items-center flex-col lg:flex-row justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='join'>
                    <button className='btn join-item'>
                        <a href={`${cardData?.projectCodeLink}`} target="_blank" >
                            <i className="fi fi-brands-github"></i>
                        </a>
                    </button>
                    <button className='btn join-item'>
                        <a href={`${cardData?.projectDemoLink}`} target="_blank" >
                            <i className="fi fi-br-link"></i>
                        </a>
                    </button>
                </div>
                <div className='absolute bg-base-300 bottom-0 left-0 px-4 py-3 w-full drop-shadow-sm'>
                    <h1 className='uppercase tracking-wider font-semibold'>{cardData.projectTitle}</h1>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {cardData?.techTags.map(techTag => <span key={techTag} className='badge badge-ghost text-xs' >{`#${techTag}`}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}


const ProjectList = () => {
    const projectData = useGetProjectDetailsData()
    return (<div data-aos="fade-up" className={`grid grid-cols-1 ${classnames({ "lg:grid-cols-2 lg:grid-rows-2": projectData?.length > 1 })} max-h-[25.5rem]  border-[0.01em] overflow-y-auto no-scrollbar`}>
        {projectData?.map(data => <ProjectCard data={data} key={data?.projectTitle} />)}
    </div>
    )
}

export default ProjectList