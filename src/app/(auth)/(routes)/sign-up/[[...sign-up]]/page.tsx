import { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Magus - Sign Up',
  openGraph: {
    title: 'Magus - Sign Up',
    url: 'https://magus-ai.vercel.app/sign-up',
  },
  twitter: {
    title: 'Magus - Sign Up',
  },
};

export default function SignUpPage() {
  return <SignUp />;
}
