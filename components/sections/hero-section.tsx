import SocialLink from '../utils/links/social-link';
import Link from 'next/link';
import BackgroundLottie from '@/components/background';
import HeroImageLottie from '@/components/hero-image';
import { groq } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/client';

// Define your types
type SocialLinks = {
    linkedinURL: string;
    githubURL: string;
    googleEmail: string;
    messengerURL: string;
};

type Profile = {
    fullName: string;
    description: string;
    resumeURL: string;
    socialLinks: SocialLinks;
};

// Your GROQ query to fetch the profile
const getProfile = groq`*[_type == "profile" && fullName == "Evan Feliza"]{
    fullName,
    description,
    "resumeURL": resumeURL.asset->url,
    socialLinks
}[0]`; // Adding [0] to get the first matched profile

// Component to render social links
const SocialLinksComponent = ({ data }: { data?: SocialLinks }) => {
    return (
        <ul className='menu menu-horizontal lg:menu-vertical'>
            {data && <>
                <SocialLink url={data.githubURL} type={'github'} />
                <SocialLink url={`mailto:${data.googleEmail}`} type={'google'} /> {/* Using mailto: for email */}
                <SocialLink url={data.linkedinURL} type={'linkedin'} />
                <SocialLink url={data.messengerURL} type={'messenger'} /></>}
        </ul>
    );
};

const HeroSection = async () => {
    const profile = await sanityFetch<Profile>({ query: getProfile, revalidate: 3600 });

    return (
        <section id="home" className='relative mx-auto h-auto'>
            <BackgroundLottie />
            <div className='max-h-full'>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:px-12 px-6 py-16">
                    <div className='-order-first lg:order-first'>
                        <SocialLinksComponent data={profile.socialLinks} />
                    </div>
                    <div className='text-wrap mt-20 mb-0 lg:my-28 space-y-4'>
                        <h3 data-aos="fade-right" data-aos-duration="2000" className='p-0 text-2xl lg:text-3xl font-medium tracking-wider'>Hi there, I am</h3>
                        <h1 data-aos="fade-right" data-aos-duration="2000" className='text-7xl lg:text-8xl font-bold tracking-wide lg:tracking-wider text-pretty'>{profile.fullName}</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" className='leading-7 text-lg lg:text-xl lg:text-md tracking-wider font-light my-4 text-wrap'>
                            {profile.description}</p>
                        <Link href={profile.resumeURL} target="_blank" rel="noopener noreferrer" className={`btn my-2 btn-outline btn-md ${!profile.resumeURL && "btn-disabled"}`}>
                            <span className="mr-1 uppercase tracking-widest">download my cv</span>
                            <i className="fi fi-rr-angle-double-small-right mt-1 text-xl"></i>
                        </Link>
                    </div>
                    <HeroImageLottie />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
