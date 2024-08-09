import Image from 'next/image';
import { client, sanityFetch } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

type ProjectData = {
    projectCodeLink: string;
    projectDemoLink: string
    projectImage: string;
    projectTitle: string;
    projectDescription: string;
    techTags: string[]
}


const getProjectDetails = groq`*[_type == "profile" && fullName == "Evan Feliza"]{projects[]{
    projectCodeLink,
    projectDemoLink,
    projectTitle,
    projectDescription,
    "projectImage": projectImage.asset->url,
    techTags
  }}[0].projects`

const ProjectCard = ({ data: cardData }: { data?: ProjectData }) => {

    return (
        <div className='grid h-full w-full overflow-hidden lg:grid-cols-2 border-[0.01em] group bg-base-100/50 transition transform duration-300'>
            <div className='overflow-hidden h-full'>
                {cardData?.projectImage && <Image
                    src={cardData.projectImage}
                    alt={cardData?.projectTitle || 'Project Image'}
                    width={1080}
                    height={920}
                    quality={100}
                    className="object-contain lg:object-fill h-full group-hover:scale-105 transition-transform duration-300"
                />}
            </div>

            <div className='px-6 py-4'>
                <div className='join items-center'>
                    <h1 className='uppercase tracking-wider font-semibold text-3xl mr-4 group-hover:scale-105 group-hover:duration-300 transition-transform'>{cardData?.projectTitle}</h1>
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
                    {cardData?.techTags?.map(techTag => <span key={techTag} className='badge badge-md hover:badge-outline badge-ghost text-xs cursor-pointer' ><i className="fi fi-rr-tags mt-1 mr-2"></i>{techTag}</span>)}
                </div>
            </div>
        </div>
    )
}


const ProjectList = async () => {
    const projectData = await sanityFetch<ProjectData[]>({ query: getProjectDetails, revalidate: 3600 })

    return (<div>
        {projectData?.map(data => <ProjectCard data={data} key={data?.projectTitle} />)}
    </div>
    )
}

export default ProjectList