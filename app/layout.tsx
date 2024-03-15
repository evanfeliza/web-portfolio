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
  icons: {
    icon: "/app/favicon-16x16.png"
  }
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
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <Navbar />
        <HoverNavbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
