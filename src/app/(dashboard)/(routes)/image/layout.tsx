import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magus - Image Generation',
  description:
    'Harness the magic of image generation with Magus AI. Create stunning visuals, artworks, and designs effortlessly. Let Magus transform your ideas into captivating images.',
  openGraph: {
    title: 'Magus - Image Generation',
    description:
      'Harness the magic of image generation with Magus AI. Create stunning visuals, artworks, and designs effortlessly. Let Magus transform your ideas into captivating images.',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/image`,
  },
  twitter: {
    title: 'Magus - Image Generation',
    description:
      'Harness the magic of image generation with Magus AI. Create stunning visuals, artworks, and designs effortlessly. Let Magus transform your ideas into captivating images.',
  },
};

export default function CodePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
