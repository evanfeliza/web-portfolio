import EducationAndExperiencesDetail from '@/components/utils/section-details/education-experience-detail'
import React from 'react'



const AboutSection = () => {

    return (
        <section id="about" className='mx-auto bg-base-100/40 px-6 lg:px-12 py-6'>
            <div data-aos="fade-in" data-aos-duration="2000" className='mx-auto'>
                <h3 className="text-5xl tracking-widest font-bold uppercase">about me</h3>
                <p className='text-md'> I am passionate in writting codes, exploring and resolving code problems. I like building and creating interactive interface for web applications.</p>
            </div>
            <EducationAndExperiencesDetail />
        </section>
    )
}

export default AboutSection