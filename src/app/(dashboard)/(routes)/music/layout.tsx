import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magus - Music Generation',
  description:
    'Compose enchanting melodies and tunes with Magus AI. Unleash the power of AI-driven music generation to create harmonious soundscapes. Let Magus be your musical companion.',
  openGraph: {
    title: 'Magus - Music Generation',
    description:
      'Compose enchanting melodies and tunes with Magus AI. Unleash the power of AI-driven music generation to create harmonious soundscapes. Let Magus be your musical companion.',
    url: 'https://magus.vercel.app/music',
  },
  twitter: {
    title: 'Magus - Music Generation',
    description:
      'Compose enchanting melodies and tunes with Magus AI. Unleash the power of AI-driven music generation to create harmonious soundscapes. Let Magus be your musical companion.',
  },
};

export default function CodePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
