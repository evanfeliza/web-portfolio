import HeroSection from "@/pages/hero-section";
import AboutSection from "@/pages/about-section";
import SkillSection from "@/pages/skills-section";
import ContactSection from "@/pages/contact-section";
import Loader from "@/components/utils/loaders/loader";



export default async function Home() {
    return (
        <section className="relative min-h-screen min-w-screen  grid grid-cols-1">
            <Loader />
            <div className="mx-auto">
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ContactSection />
            </div>
        </section>

    );
}
