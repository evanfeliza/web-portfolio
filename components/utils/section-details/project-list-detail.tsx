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
    projectDescription: string;
    techTags: string[]
}


const getProjectDetails = async () => {
    const data = await client.fetch(groq`*[_type == "profile" && fullName == "Evan Feliza"]{projects[]{
        projectCodeLink,
        projectDemoLink,
        projectTitle,
        projectDescription,
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
        <div data-aos="fade-right" className='grid h-full w-full lg:grid-cols-2 border-[0.01em] group'>
            <div className='overflow-hidden h-full'>
                <Image
                    src={`${cardData?.projectImage}`}
                    alt={`${cardData?.projectTitle}`}
                    width={1080}
                    height={920}
                    quality={100}
                    className="object-contain lg:object-fill h-full group-hover:scale-110  group-hover:opacity-75  transition-transform duration-300"
                />
            </div>
            <div className='px-6 py-4'>
                <div className='join items-center'>
                    <h1 className='uppercase tracking-wider font-semibold text-2xl mr-4'>{cardData.projectTitle}</h1>
                    <button className='btn btn-ghost btn-sm join-item'>
                        <a href={`${cardData?.projectCodeLink}`} target="_blank" >
                            <i className="fi fi-brands-github"></i>
                        </a>
                    </button>
                    <button className='btn btn-ghost btn-sm join-item'>
                        <a href={`${cardData?.projectDemoLink}`} target="_blank" >
                            <i className="fi fi-br-link"></i>
                        </a>
                    </button>
                </div>
                <p className='text-wrap tracking-widest text-md font-medium mt-2 whitespace-normal break-normal'>{cardData?.projectDescription}</p>

                <div className='flex flex-wrap gap-1 mt-4 lg:mt-2'>
                    {cardData?.techTags.map(techTag => <span key={techTag} className='badge badge-md badge-accent text-xs' >{`#${techTag}`}</span>)}
                </div>
            </div>

        </div>
    )
}


const ProjectList = () => {
    const projectData = useGetProjectDetailsData()
    return (<div className={`mt-4 grid grid-rows-auto lg:grid-cols-1 h-full `}>
        {projectData?.map(data => <ProjectCard data={data} key={data?.projectTitle} />)}
    </div>
    )
}

export default ProjectList