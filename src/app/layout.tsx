import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

import ToasterProvider from '@/components/ToasterProvider';
import ModalProvider from '@/components/ModalProvider';
import CrispProvider from '@/components/CrispProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magus - AI Platform',
  description:
    'Magus: Unleash the power of AI magic! Chat with an intelligent assistant, generate images, videos, music, and code effortlessly. Magus is your ultimate AI magician, offering a myriad of tools to enhance your creative and problem-solving capabilities.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  authors: {
    name: 'Abdallah Magdy',
    url: 'https://www.linkedin.com/in/abdallahmagdy',
  },
  keywords: [
    'AI Platform',
    'Chatbot',
    'Image Generation',
    'Video Generation',
    'Code Generation',
    'Music Generation',
  ],
  openGraph: {
    title: 'Magus',
    type: 'website',
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/mockup.png`],
    url: process.env.NEXT_PUBLIC_APP_URL,
    description:
      'Magus: Unleash the power of AI magic! Chat with an intelligent assistant, generate images, videos, music, and code effortlessly. Magus is your ultimate AI magician, offering a myriad of tools to enhance your creative and problem-solving capabilities.',
  },
  twitter: {
    title: 'Magus',
    description:
      'Magus: Unleash the power of AI magic! Chat with an intelligent assistant, generate images, videos, music, and code effortlessly. Magus is your ultimate AI magician, offering a myriad of tools to enhance your creative and problem-solving capabilities.',
    card: 'summary_large_image',
    creator: 'a_m_s666',
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/mockup.png`],
  },
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
