import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magus - Video Generation',
  description:
    'Dive into the world of video creation with Magus AI. Craft dynamic videos, animations, and stories with ease. Let Magus bring your imagination to life through captivating visuals.',
  openGraph: {
    title: 'Magus - Video Generation',
    description:
      'Dive into the world of video creation with Magus AI. Craft dynamic videos, animations, and stories with ease. Let Magus bring your imagination to life through captivating visuals.',
    url: 'https://magus.vercel.app/code',
  },
  twitter: {
    title: 'Magus - Video Generation',
    description:
      'Dive into the world of video creation with Magus AI. Craft dynamic videos, animations, and stories with ease. Let Magus bring your imagination to life through captivating visuals.',
  },
};

export default function CodePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
