import HeroSection from "@/pages/hero-section";
import AboutSection from "@/pages/about-section";
import SkillSection from "@/pages/skills-section";
import ContactSection from "@/pages/contact-section";
import Loader from "@/components/utils/loaders/loader";
import FooterSection from "@/pages/footer-section";
import Navbar from "@/components/utils/navigations/navigation";
import HoverNavbar from "@/components/utils/navigations/hover-navigation";



export default async function Home() {
    return (
        <section className="relative h-screen min-w-screen">
            <Loader />
            <div className="container h-full mx-auto">
                <Navbar />
                <HoverNavbar />
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ContactSection />
                <FooterSection />
            </div>
        </section>

    );
}
