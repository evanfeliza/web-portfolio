import EducationAndExperiencesDetail from '@/components/utils/section-details/education-experience-detail'
import React from 'react'



const AboutSection = () => {

    return (
        <section id="about" className='mx-auto max-h-full w-full'>
            <div className='px-6 lg:px-12 py-6'>
                <div className='mx-auto'>
                    <h3 className="text-8xl tracking-tighter font-medium">about me.</h3>
                    <p className='text-md'> I am passionate in writting codes, exploring and resolving code problems. I like building and creating interactive interface for web applications.</p>
                </div>
                <EducationAndExperiencesDetail />
            </div>
        </section>
    )
}

export default AboutSection