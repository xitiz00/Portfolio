import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Kshitiz Singh | AI & ML Engineer",
  description: "Passionate AI and Machine Learning student with hands-on experience building real-world AI solutions",
  authors: [{ name: "Kshitiz Singh" }],
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add react-intersection-observer polyfill for older browsers */}
        <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" async></script>
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable} bg-b-light`}>{children}</body>
    </html>
  )
}
