import type { Metadata } from 'next'
import './globals.css'
import './styles/loading-style.css'
import './styles/underline-style.css'
import Header from './layouts/Header'
import { MantineProvider } from '@mantine/core';


export const metadata: Metadata = {
  icons: {
    icon: '/logo.png'
  },
  title: 'Natnael Engeda',
  category: 'Technology',
  description: 'Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter  ',
  applicationName: 'Next.js',
  metadataBase: new URL('https://portfolio.alamondai.com/'),
  keywords: [
    'Software Development',
    'Fullstack Development',
    'Reactjs',
    'Nodejs',
    'Frontend Developer',
    'Ethiopia Developer', 'Flutter Developer',
    'Ethiopia',
    'Natnael Engeda',
    'Natty Engeda',
    'Natnael',
    'Natty',
  ],
  creator: 'Natnael Engeda',
  authors: [
    {
      name: 'Natnael Engeda',
      url: 'https://portfolio.alamondai.com/'
    }
  ],
  publisher: "Natnael Engeda",
  openGraph: {
    title: 'Natnael Engeda',
    description: "Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
    url: "https://portfolio.alamondai.com/",
    siteName: "Natnael Engeda - Portfolio",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: 'Natnael Engeda',
    description: "Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
    site: "@NatnaelEngeda",
    images: ['/seo-image.jpg'],
    creator: "@NatnaelEngeda",
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['nattynengeda@gmail.com', 'https://portfolio.alamondai.com/']
    }
  },
  appleWebApp: {
    title: 'Natnael Engeda',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/logo.png'
    ]
  }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <MantineProvider>
          <Header />
          <main className='w-full min-h-screen gradient_background pt-10 md:pt-28'>
            {children}
          </main>
        </MantineProvider>
      </body>
    </html>
  )
}
