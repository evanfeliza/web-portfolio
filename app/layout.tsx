import 'tailwindcss/tailwind.css';
import type { Metadata } from "next";
import "./globals.css"


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
      <body>{children}</body>
    </html>
  );
}
