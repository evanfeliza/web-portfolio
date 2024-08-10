import { sanityFetch } from '@/sanity/lib/client';
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
        <div className="relative">
            <div className="border-r-4 border-accent absolute h-full top-0" style={{ 'left': '9px' }}></div>
            <ul className="list-none m-0 p-0 ">
                {timelineData?.map((timeline, index) => <li key={index} className="mb-5">
                    <div className="flex group items-center ">
                        <div className="bg-base-content group-hover:bg-base-200 group-hover:duration-300 z-10 rounded-full border-4 border-accent h-5 w-5">
                            <div className="bg-accent h-1 w-6 items-center  ml-4 mt-1"></div>
                        </div>
                        <div className="flex-1 ml-4 z-10 font-medium ">
                            <div className="order-1 space-y-2 bg-accent rounded-lg shadow-only transition-ease lg:w-11/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-accent-content text-2xl">{timeline?.event}</h3>
                                <p className="pb-4 text-sm text-accent-content">{timeline?.year}</p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">{timeline?.location}</p>
                            </div>
                        </div>
                    </div>
                </li>
                )}
            </ul>
        </div>
    )
}

const MobileTimeline = ({ timelineData }: { timelineData?: Timeline[] }) => {
    return (
        <div className="relative mt-10">
            <div className="border-r-4 border-accent absolute h-full top-0" style={{ 'left': '9px' }}></div>
            <ul className="list-none m-0 p-0 ">
                {timelineData?.map((timeline, index) => <li key={index} className="mb-5">
                    <div className="flex group items-center ">
                        <div className="bg-base-content group-hover:bg-base-200 group-hover:duration-300 z-10 rounded-full border-4 border-accent h-5 w-5">
                            <div className="bg-accent h-1 w-6 items-center  ml-4 mt-1"></div>
                        </div>
                        <div className="flex-1 ml-4 z-10 font-medium ">
                            <div className="order-1 space-y-2 bg-accent rounded-lg shadow-only transition-ease w-12/12 px-6 py-4">
                                <div className='text-2xl text-accent-content'><GeneratedIcon icon={timeline?.logo?.code as string} /></div>
                                <h3 className="mb-3 font-bold text-accent-content text-2xl">{timeline?.event}</h3>
                                <p className="pb-4 text-sm text-accent-content">{timeline?.year}</p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">{timeline?.location}</p>
                            </div>
                        </div>
                    </div>
                </li>
                )}
            </ul>
        </div>
    )
}

const EducationAndExperiencesDetail = async () => {
    const timelineData = await sanityFetch<Timeline[]>({ query: getEducationDetails, revalidate: 3600 })
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="my-0 max-h-full max-w-full" >
            <div className='h-full w-full'>

                <div className='hidden lg:flex items-center w-full'>
                    <DesktopTimeline timelineData={timelineData} />
                    <div className='mx-auto' ><span className='tracking-widest uppercase font-semibold text-5xl'>my timeline</span></div>
                </div>
                <div className="block lg:hidden">
                    <div className='text-center' ><span className='tracking-widest uppercase font-semibold text-3xl mx-auto'>my timeline</span></div>
                    <MobileTimeline timelineData={timelineData} />
                </div>
            </div>
        </div >
    )
}

export default EducationAndExperiencesDetail