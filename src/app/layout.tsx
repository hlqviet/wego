import './globals.css'

import type { Metadata } from 'next'

import Content from '@/src/components/Content'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'

export const metadata: Metadata = {
  title: 'Wego',
  description: 'Food delivery'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='grid grid-rows-[auto_1fr_auto] min-h-screen bg-zinc-200'>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  )
}
