import ProjectList from '@/components/utils/section-details/project-list-detail'
import TechStackDetail from '@/components/utils/section-details/tech-stack-detail'



const SkillSection = () => {

    return (
        <section id="skills" className='max-h-full max-w-full bg-base-200 w-full border-t-[0.01em]'>
            <div className='px-6 lg:px-12 py-6'>
                <div data-aos="fade-up" className='mx-auto'>
                    <h3 className="text-5xl tracking-widest font-bold uppercase">skills</h3>
                    <p className='text-md'> Here are some of my projects that I have made and list of the list of technologies used.</p>
                </div>
                <div className='grid h-full mt-8'>
                    <div className="relative grid grid-cols-[15%_1fr] lg:grid-cols-[5%_1fr] ">
                        <div className=' [writing-mode:vertical-lr] flex items-end justify-end transform rotate-180 text-5xl uppercase font-medium tracking-widest '><span data-aos="fade-down" data-aos-delay="1000" >my projects</span></div>
                        <ProjectList />
                    </div>
                </div>
                <div className='mt-10  pt-4'>
                    <div data-aos="fade-right" className='mx-auto '>
                        <h3 className="text-4xl uppercase tracking-tighter font-medium">tech stack</h3>
                        <p className='text-md'> These are the technologies I have used so far...</p>
                    </div>
                    <TechStackDetail />
                </div>
            </div>
        </section>
    )
}

export default SkillSection