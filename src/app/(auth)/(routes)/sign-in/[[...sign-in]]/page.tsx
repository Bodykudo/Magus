import { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Magus - Sign In',
  openGraph: {
    title: 'Magus - Sign In',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/sign-in`,
  },
  twitter: {
    title: 'Magus - Sign In',
  },
};

export default function SignInPage() {
  return <SignIn />;
}
