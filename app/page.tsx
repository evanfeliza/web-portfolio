import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import Navbar from "@/components/utils/navigations/navigation";
import HoverNavbar from "@/components/utils/navigations/hover-navigation";
import { Suspense } from "react";
import Loading from "./loading";



export default function Home() {
    return (
        <section className="h-screen min-w-screen">
            <div className="container relative h-full w-full mx-auto">
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
