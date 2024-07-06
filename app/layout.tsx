import 'tailwindcss/tailwind.css';
import type { Metadata } from "next";
import "./globals.css"
import AnimateOnScroll from '@/components/utils/animations/aos';

export const metadata: Metadata = {
  title: "Evan Feliza",
  description: "A personal web porfolio designed and build to showcase personal information and skills of a person. This application was built and designed by Evan.",
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
    <html lang="en" className='overflow-y-scroll no-scrollbar'>
      <AnimateOnScroll />
      <body>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        {children}
      </body>
    </html>
  );
}
