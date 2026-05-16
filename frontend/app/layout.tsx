import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'Lost American — Korea',
  description: 'Explore Korea\'s most beautiful cities',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full overflow-hidden`}>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  )
}
