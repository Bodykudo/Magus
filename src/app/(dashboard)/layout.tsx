import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

import { getApiLimitCount } from '@/lib/apiLimits';
import { checkSubscription } from '@/lib/subscription';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magus - Dashboard',
  description:
    'Explore the powerful dashboard of Magus AI. Access intelligent chat, image generation, video creation, music composition, and code generation tools. Elevate your creative journey with Magus.',
  openGraph: {
    title: 'Magus - Dashboard',
    description:
      'Explore the powerful dashboard of Magus AI. Access intelligent chat, image generation, video creation, music composition, and code generation tools. Elevate your creative journey with Magus.',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
  },
  twitter: {
    title: 'Magus - Dashboard',
    description:
      'Explore the powerful dashboard of Magus AI. Access intelligent chat, image generation, video creation, music composition, and code generation tools. Elevate your creative journey with Magus.',
  },
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900'>
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className='md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
