import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magus - Code Generation',
  description:
    'Simplify coding tasks with Magus AI. Generate code snippets, automate routine tasks, and enhance your programming experience. Let Magus be your coding assistant on the journey to innovation.',
  openGraph: {
    title: 'Magus - Code Generation',
    description:
      'Simplify coding tasks with Magus AI. Generate code snippets, automate routine tasks, and enhance your programming experience. Let Magus be your coding assistant on the journey to innovation.',
    url: 'https://magus.vercel.app/code',
  },
  twitter: {
    title: 'Magus - Code Generation',
    description:
      'Simplify coding tasks with Magus AI. Generate code snippets, automate routine tasks, and enhance your programming experience. Let Magus be your coding assistant on the journey to innovation.',
  },
};

export default function CodePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
