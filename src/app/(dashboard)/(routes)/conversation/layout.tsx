import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magus - Conversation',
  description:
    'Engage in meaningful conversations with Magus AI. Ask questions, seek assistance, and explore the depth of knowledge. Unlock the potential of intelligent dialogue with Magus.',
  openGraph: {
    title: 'Magus - Conversation',
    description:
      'Engage in meaningful conversations with Magus AI. Ask questions, seek assistance, and explore the depth of knowledge. Unlock the potential of intelligent dialogue with Magus.',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/conversation`,
  },
  twitter: {
    title: 'Magus - Conversation',
    description:
      'Engage in meaningful conversations with Magus AI. Ask questions, seek assistance, and explore the depth of knowledge. Unlock the potential of intelligent dialogue with Magus.',
  },
};

export default function CodePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
