import type { Metadata, Viewport } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
})
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Jeferson Mesa | Fullstack & Data Engineer',
  description: 'Portfolio profesional de Jeferson Mesa. Fullstack & Data Engineer con experiencia en Java/Spring, Python y visualización de datos.',
  keywords: ['Fullstack Developer', 'Data Engineer', 'Java', 'Spring Boot', 'Python', 'Portfolio'],
  authors: [{ name: 'Jeferson Mesa' }],
  openGraph: {
    title: 'Jeferson Mesa | Fullstack & Data Engineer',
    description: 'Portfolio profesional - APIs REST reactivas, integración de sistemas y visualización de datos.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
