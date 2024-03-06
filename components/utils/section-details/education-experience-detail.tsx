import React from 'react'

const DesktopTimeline = () => {
    return (
        <ul className='timeline timeline-vertical overflow-x-hidden px-1 py-4 text-xl'>
            <li>
                <div className="timeline-start">July 2022</div>
                <div className="timeline-middle m-2">
                    <i className="fi fi-sr-graduation-cap "></i>
                </div>
                <div className="timeline-end timeline-box w-full  flex flex-wrap items-center">
                    <p>Bachelor of Science in Computer Engineering</p>
                    <span className="text-xs font-semibold"><i className="fi fi-ss-map-marker mr-2 "></i>STI College,Surigao City, Philippines</span>
                </div>
                <hr />
            </li>
            <li>
                <div className="timeline-end">July 2022-January 2023</div>
                <div className="timeline-middle">
                    <i className="fi fi-rr-square-code m-2"></i>
                </div>
                <div className="timeline-start timeline-box w-full  flex flex-wrap items-center">
                    <p>Self Study of frontend tools and web development</p>
                    <span className="text-md text-xs font-semibold" ><i className="fi fi-ss-map-marker mr-2 "></i>Dinagat Islands, Philippines</span>
                </div>
                <hr />
            </li>
            <li>
                <div className="timeline-start">March 2023-July 2023</div>
                <div className="timeline-middle">
                    <i className="fi fi-sr-briefcase m-2"></i>
                </div>
                <div className="timeline-end timeline-box w-full flex flex-wrap items-center ">
                    <p>Work at startup company as a Junior Software Engineer speacializes in Front-End development</p>
                    <span className="text-xs font-semibold"><i className="fi fi-ss-map-marker mr-2 "></i>Davao City, Philippines</span>
                </div>
                <hr />
            </li>
        </ul>
    )
}

const MobileTimeline = () => {
    return (
        <ul className='timeline timeline-compact timeline-vertical overflow-x-hidden px-1 py-4'>
            <li>
                <div className="timeline-middle m-2">
                    <i className="fi fi-sr-graduation-cap "></i>
                </div>
                <div className="timeline-end timeline-box w-full  flex flex-wrap items-center">
                    <p>Bachelor of Science in Computer Engineering</p>
                    <span className="text-xs italic">(July 2022)</span>
                    <span className="mt-2 text-xs font-semibold"><i className="fi fi-ss-map-marker mr-2 "></i>STI College,Surigao City, Philippines</span>
                </div>
                <hr />
            </li>
            <li>
                <div className="timeline-middle">
                    <i className="fi fi-rr-square-code m-2"></i>
                </div>
                <div className="timeline-end timeline-box w-full  flex flex-wrap items-center">
                    <p>Self study of frontend tools and web development</p>
                    <span className="text-xs italic">(July 2022-January 2023)</span>
                    <span className="mt-2 text-md text-xs font-semibold" ><i className="fi fi-ss-map-marker mr-2 "></i>Dinagat Islands, Philippines</span>
                </div>
                <hr />
            </li>
            <li>
                <div className="timeline-middle">
                    <i className="fi fi-sr-briefcase m-2"></i>
                </div>
                <div className="timeline-end timeline-box w-full flex flex-wrap items-center ">
                    <p>Work at a startup company as a Junior Software Engineer speacializes in Front-End Development</p>
                    <span className="text-xs italic">(March 2023-June 2023)</span>
                    <span className="mt-2 text-xs font-semibold"><i className="fi fi-ss-map-marker mr-2 "></i>Davao City, Philippines</span>
                </div>
                <hr />
            </li>
        </ul>
    )
}

const EducationAndExperiencesDetail = () => {
    return (
        <div className="mt-4 mockup-window max-h-full max-w-full border" >
            <div className='bg-base-200 px-6 py-4 border'>
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