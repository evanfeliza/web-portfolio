import ProjectList from '@/components/utils/section-details/project-list-detail'
import TechStackDetail from '@/components/utils/section-details/tech-stack-detail'



const SkillSection = () => {

    return (
        <section id="skills" className='bg-base-200/50 border-t-[0.01em] px-6 lg:px-12 py-6'>
            <div data-aos="fade-in" data-aos-duration="2000" className='mx-auto'>
                <h3 className="text-5xl tracking-widest font-bold uppercase">skills</h3>
                <p className='text-md'> Here are some of my personal projects that I have made so far.</p>
            </div>
            <ProjectList />
            <div className='mt-10  py-4'>
                <div className='mx-auto '>
                    <p className='text-md tracking-wider'> These are the technologies I have used so far...</p>
                </div>
                <TechStackDetail />
            </div>
        </section>
    )
}

export default SkillSection