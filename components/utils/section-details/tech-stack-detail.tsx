import { client, sanityFetch } from '@/sanity/lib/client';
import { groq } from 'next-sanity';


type TechStack = {
    techStack: string[]
}
const getTechStackDetail = groq`*[_type == "profile" && fullName == "Evan Feliza"]{
    techStack
}[0]`



const TechStackCard = ({ name }: { name: string }) => {
    return (<div data-tip={`${name}`} className='h-100 w-100 grayscale-[80%] tooltip tooltip-top capitalize   cursor-pointer hover:grayscale-0 duration-300 flex items-center justify-center mt-4'>
        <i className={`text-4xl text-base-300 devicon-${name}-plain colored mr-3`}></i>
        <span className='hidden lg:block text-sm font-bold  uppercase tracking-wider'>{name}</span>
    </div>)
}

const TechStackDetail = async () => {
    const data = await sanityFetch<TechStack>({ query: getTechStackDetail, revalidate: 3600 })
    return (

        <div className="mt-5 mx-auto max-w-[30rem] lg:max-w-[90rem] grid grid-cols-2 lg:grid-cols-3 items-center gap-10">
            {data?.techStack?.map(stack => (<TechStackCard key={stack} name={stack} />))}
        </div>
    )
}

export default TechStackDetail