import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Carleton King - Actor | Film & Television | NYC',
  description: 'Carleton King is a Brooklyn-based actor with credits including Marvel\'s Daredevil, Discovery ID, and Wolf Entertainment. SAG-AFTRA eligible. View demo reel and credits.',
  keywords: 'Carleton King actor, NYC actor, Brooklyn actor, SAG-AFTRA, action actor, martial arts actor, Daredevil actor',
  authors: [{ name: 'Carleton King' }],
  openGraph: {
    title: 'Carleton King - Actor',
    description: 'Brooklyn-based actor with credits including Marvel\'s Daredevil, Discovery ID, and Wolf Entertainment.',
    url: 'https://carleton-king.com',
    siteName: 'Carleton King',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carleton King - Actor',
    description: 'Brooklyn-based actor with credits including Marvel\'s Daredevil, Discovery ID, and Wolf Entertainment.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carleton King",
              "jobTitle": "Actor",
              "url": "https://carleton-king.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brooklyn",
                "addressRegion": "NY",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
