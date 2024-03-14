import HeroSection from "@/pages/hero-section";

import AboutSection from "@/pages/about-section";

import SkillSection from "@/pages/skills-section";
import ContactSection from "@/pages/contact-section";


export default async function Home() {
    return (
        <section className="min-h-screen min-w-screen  grid grid-cols-1">
            <div className="mx-auto h-full w-full">
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ContactSection />
            </div>
        </section>

    );
}
