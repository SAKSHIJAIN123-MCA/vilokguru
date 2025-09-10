import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "मुनि श्री विलोक सागर जी महाराज | Jain Saint",
  description: "मुनि श्री विलोक सागर जी महाराज - जैन धर्म के महान संत एवं आध्यात्मिक गुरु का आधिकारिक वेबसाइट",
  generator: "v0.app",
  keywords: "जैन, मुनि, संत, आध्यात्म, धर्म, विलोक सागर",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
