import { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Magus - Sign In',
  openGraph: {
    title: 'Magus - Sign In',
    url: 'https://magus.vercel.app/sign-in',
  },
  twitter: {
    title: 'Magus - Sign In',
  },
};

export default function SignInPage() {
  return <SignIn />;
}
