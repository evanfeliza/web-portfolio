import { sanityFetch } from '@/sanity/lib/client';
import { groq } from 'next-sanity';


type SocialLink = {
    socialLinks: {
        googleEmail: string;
    }
}

const getEmail = groq`*[_type == "profile" && fullName == "Evan Feliza"]{socialLinks{googleEmail}}[0]`

const ContactSection = async () => {
    const email = await sanityFetch<SocialLink>({ query: getEmail, revalidate: 3600 })

    return (
        <section id="contact" className='flex-col lg:flex-row flex items-center justify-center px-6 py-[18rem] min-h-full min-w-full'>
            <div className='mx-auto space-y-2'>
                <h3 className="text-4xl lg:text-7xl tracking-widest font-bold uppercase text-center">contact me</h3>
                <p className='text-xs lg:text-lg tracking-widest whitespace-normal text-center'> Send me an email or you can message me to my other social links.</p>
            </div>
            <div data-aos="fade-in" data-aos-duration="2000" className="card card-normal mx-auto mt-4 lg:mt-0">
                <a href={`mailto:${email?.socialLinks?.googleEmail}`} target="_blank" className=' btn my-2 btn-outline'>
                    <span className="mr-1">Send an Email</span>
                    <i className="fi fi-rs-paper-plane text-xl mt-1"></i>
                </a>
            </div>
        </section>
    )
}

export default ContactSection