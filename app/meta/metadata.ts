import type { Metadata } from 'next'

export const meta: Metadata = {
  icons: {
    icon: '/logo.png'
  },
  title: 'Natnael Engeda',
  category: 'Technology',
  description: 'Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter',
  applicationName: 'Next.js',
  metadataBase: new URL('https://www.natnaelengeda.tech/'),
  keywords: [
    'Software Development',
    'Fullstack Development',
    'Reactjs',
    'Nodejs',
    'Frontend Developer',
    'Ethiopia Developer',
    'Flutter Developer',
    'Software Developer in Ethiopia',
    'Reactjs Developer in Ethiopia',
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
      url: 'https://www.natnaelengeda.tech/'
    }
  ],
  publisher: "Natnael Engeda",
  openGraph: {
    title: 'Natnael Engeda',
    description: "Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
    url: "https://www.natnaelengeda.tech/",
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
      me: ['nattynengeda@gmail.com', 'https://www.natnaelengeda.tech/']
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