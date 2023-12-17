import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Natnael Eneda - Projects",
  description: "Natnael Engeda - Portfolio | Projects",
  keywords: [
    'Fitsum Advert and Print',
    'Semah MCH ',
    'Angel Skin',
    'Tomoca App',
    'Website Portfolios',
    'Mobile App Portfolios',
    'Website Projects',
    'Mobile App Projects'
  ],
  openGraph: {
    title: "Natnael Engeda - Projects",
    description: "Natnael Engeda - Portfolio | Projects",
    url: "https://portfolio.alamondai.com/portfolio",
    siteName: "Natnael Engeda - Portfolio",
    images: [
      {
        url: "/portfolio-seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Natnael Engeda - Portfolio',
    description: "Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
    site: "@NatnaelEngeda",
    images: ['/portfolio-seo-image.jpg'],
    creator: "@NatnaelEngeda",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
};