import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crochet Kaurner | Handmade Crochet Creations',
  description:
    'Discover unique, handmade crochet pieces crafted with passion. From cozy blankets to stylish accessories, find your perfect creation.',
  keywords: 'crochet, handmade, crafts, yarn, amigurumi, blankets, accessories',
  authors: [{ name: 'Crochet Kaurner' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crochetkaurner.com',
    siteName: 'Crochet Kaurner',
    title: 'Crochet Kaurner | Handmade Crochet Creations',
    description:
      'Discover unique, handmade crochet pieces crafted with passion.',
    images: [
      {
        url: 'https://crochetkaurner.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crochet Kaurner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crochet Kaurner | Handmade Crochet Creations',
    description:
      'Discover unique, handmade crochet pieces crafted with passion.',
    images: ['https://crochetkaurner.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-cream-50`}>
        <CartProvider>
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
