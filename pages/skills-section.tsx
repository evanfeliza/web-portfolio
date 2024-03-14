import Card from '@/components/utils/cards/card'
import ProjectList from '@/components/utils/section-details/project-list-detail'
import TechStackDetail from '@/components/utils/section-details/tech-stack-detail'
import React from 'react'



const SkillSection = () => {

    return (
        <section id="skills" className='max-h-full max-w-full bg-base-200 w-full border-t'>
            <div className='px-6 lg:px-12 py-6'>
                <div data-aos="fade-up" className='mx-auto'>
                    <h3 className="text-8xl tracking-tighter font-medium">skills.</h3>
                    <p className='text-md'> Here are some of my projects that I have made and list of the list of technologies used.</p>
                </div>

                <div className='grid h-full mt-8'>
                    <div className="relative grid grid-cols-[15%_1fr] lg:grid-cols-[5%_1fr] ">
                        <div className=' [writing-mode:vertical-lr] flex items-end justify-end transform rotate-180 text-5xl uppercase font-medium tracking-widest '><span data-aos="fade-down" data-aos-delay="1000" >my projects</span></div>
                        <ProjectList />
                    </div>
                </div>
                <TechStackDetail />
            </div>

        </section>
    )
}

export default SkillSection