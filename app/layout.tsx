import type { Metadata } from 'next'

// Components
import Header from './layouts/Header'
import { meta } from './meta/metadata'
import { SpeedInsights } from "@vercel/speed-insights/next"

// Styles
import './globals.css'
import './styles/loading-style.css'
import './styles/underline-style.css'

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {/* <NextUIProvider> */}
        <Header />
        <main className='w-full min-h-screen gradient_background pt-10 md:pt-28'>
          {children}
          <SpeedInsights />
        </main>
        {/* </NextUIProvider> */}
      </body>
    </html>
  )
}
