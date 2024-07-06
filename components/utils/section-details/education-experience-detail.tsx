import { client } from '@/sanity/lib/client';
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


const getEducationDetails = groq`*[_type == "profile" && fullName == "Evan Feliza"]{
    timeline
  }[0].timeline`


const DesktopTimeline = ({ timelineData }: { timelineData?: Timeline[] }) => {
    return (
        <ul className='timeline timeline-vertical overflow-x-hidden px-1 py-4 text-xl'>
            {timelineData?.map((data, index) => {
                return (<li key={index}>
                    <div className={classnames({ "timeline-start": index % 2 === 0, "timeline-end": index % 2 !== 0 })}>
                        <span className='tracking-widest uppercase font-bold'>{data?.year}</span>
                    </div>
                    <div className="timeline-middle m-2">
                        <GeneratedIcon icon={data?.logo?.code as string} />
                    </div>
                    <div className={`timeline-box px-6 py-4 w-full space-y-2 flex lg:flex-col flex-wrap items-start ${classnames({ "timeline-end": index % 2 === 0, "timeline-start": index % 2 !== 0 })}`}>
                        <p className='tracking-tight text-md'>{data?.event}</p>
                        <span className="text-xs font-medium">
                            <i className="fi fi-ss-map-marker mr-2 "></i>{data?.location}
                        </span>
                    </div>
                    <hr />
                </li>)
            })}
        </ul>
    )
}

const MobileTimeline = ({ timelineData }: { timelineData?: Timeline[] }) => {


    return (
        <ul className='grid grid-cols-1 gap-4'>
            {timelineData?.map((data, index) => (<li key={index} className='card card-compact bg-base-100'>
                <div className='card-body !gap-1'>
                    <div className='text-2xl'><GeneratedIcon icon={data?.logo?.code as string} /></div>
                    <p className='text-md font-normal break-normal tracking-tight'>{data?.event}</p>
                    <span className="text-md tracking-wider font-semibold mt-2 ">{data?.year}</span>
                    <span className="mt-2 text-xs  tracking-wider"><i className="fi fi-ss-map-marker mr-2 "></i>{data?.location}</span>
                </div>
            </li>))}
        </ul>
    )
}

const EducationAndExperiencesDetail = async () => {
    const timelineData = await client.fetch<Timeline[]>(getEducationDetails)
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="my-10 mockup-window max-h-full max-w-full border-[0.01em]" >
            <div className='bg-base-200 p-4 h-full'>
                <div className='border-b pb-4' ><span className='tracking-widest uppercase font-semibold text-3xl'>my timeline</span></div>
                <div className='hidden lg:block'>
                    <DesktopTimeline timelineData={timelineData} />
                </div>
                <div className="block lg:hidden">
                    <MobileTimeline timelineData={timelineData} />
                </div>
            </div>
        </div >
    )
}

export default EducationAndExperiencesDetail