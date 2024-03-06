import React from 'react'

const TechStackCard = () => {
    return (

        <div className='flex-shrink-0 snap-start '>
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
        </div>

    )
}
const TechStackDetail = () => {
    return (
        <div className='mt-10  pt-4'>
            <div className='mx-auto '>
                <h3 className="text-5xl uppercase tracking-tighter font-medium">tech stack.</h3>
                <p className='text-md'> These are the technologies I have used so far...</p>
            </div>
            <div className="mx-auto max-w-[30rem] lg:max-w-[90rem] flex items-center justify-center overflow-x-auto no-scrollbar">
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
                <TechStackCard />
            </div>
        </div>
    )
}

export default TechStackDetail