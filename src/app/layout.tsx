import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { getSEO } from '@/shared/seoData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = getSEO("INICIO")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
