import type { Metadata } from 'next'

import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evan Feliza',
  description: 'This is a web portfolio is made by Evan Feliza',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
