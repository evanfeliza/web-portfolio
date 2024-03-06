
import HeroSection from "@/pages/hero-section";
import Navbar from "@/components/utils/navigations/navigation"
import AboutSection from "@/pages/about-section";
import HoverNavbar from "@/components/utils/navigations/hover-navigation";
import SkillSection from "@/pages/skills-section";
import ContactSection from "@/pages/contact-section";
import FooterSection from "@/pages/footer-section";

export default function Home() {

    return (
        <section className="min-h-screen min-w-screen grid grid-cols-1">
            <Navbar />
            <HoverNavbar />
            <div className="mx-auto">
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ContactSection />

                <FooterSection />
            </div>
        </section>
    );
}
