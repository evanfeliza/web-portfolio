import 'tailwindcss/tailwind.css';
import type { Metadata } from "next";
import "./globals.css"
import AnimateOnScroll from '@/components/utils/animations/aos';
import Navbar from "@/components/utils/navigations/navigation"
import HoverNavbar from "@/components/utils/navigations/hover-navigation";
import FooterSection from "@/pages/footer-section";

export const metadata: Metadata = {
  title: "Evan Feliza",
  description: "Built and designed by Evan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnimateOnScroll />
      <body>
        <Navbar />
        <HoverNavbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
