import 'tailwindcss/tailwind.css';
import type { Metadata } from "next";
import "./globals.css"
import AnimateOnScroll from '@/components/utils/animations/aos';
import SplashScreen from '@/components/utils/animations/splash-screen';
import AnimatedCursor from '@/components/utils/animations/animated-cursor';
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Evan Feliza",
  description: "A personal web porfolio designed and build to showcase personal information and skills of a person. This application was built and designed by Evan.",
  icons: {
    icon: "/app/favicon-16x16.png"
  }
};

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "300"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='overflow-y-scroll no-scrollbar'>
      <AnimateOnScroll />
      <body className={poppins.className}>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <AnimatedCursor />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
