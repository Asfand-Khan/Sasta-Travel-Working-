import type { Metadata } from 'next'
import { Ysabeau_Office } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const ysabeau_Office = Ysabeau_Office({
  subsets:['latin']
})

export const metadata: Metadata = {
  title: 'Sasta Travel',
  description: 'Explore the world!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ysabeau_Office.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
