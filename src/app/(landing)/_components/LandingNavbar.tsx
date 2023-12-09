'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useAuth } from '@clerk/nextjs';

import { Button } from '@/src//components/ui/button';
import { cn } from '@/src/lib/utils';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-baseline'>
        <div className='relative h-16 w-48'>
          <Image src='/logo-dark.png' alt='logo' fill />
        </div>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant='outline' className='rounded-full'>
            {isSignedIn ? 'Dashboard' : 'Get Started'}
          </Button>
        </Link>
      </div>
    </nav>
  );
}
