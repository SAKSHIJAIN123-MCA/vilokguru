import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Naresh Generator Service',
  description: 'Naresh Generator Service',
  generator: 'Sakshi Jain',
  icons: {
    icon: [
      {
        url: '/logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
