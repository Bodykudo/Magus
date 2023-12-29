import { Metadata } from 'next';
import { Settings } from 'lucide-react';

import Heading from '@/components/Heading';
import SubscriptionButton from '@/components/SubscriptionButton';
import { checkSubscription } from '@/lib/subscription';

export const metadata: Metadata = {
  title: 'Magus - Settings',
  openGraph: {
    title: 'Magus - Settings',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`,
  },
  twitter: {
    title: 'Magus - Settings',
  },
};

export default async function SettingsPage() {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title='Settings'
        description='Manage account settings'
        icon={Settings}
        iconColor='text-gray-700'
        bgColor='bg-gray-700/10'
      />
      <div className='px-4 lg:px-8 space-y-4'>
        <div className='text-muted-foreground text-sm'>
          {isPro
            ? 'You are currently on a pro plan.'
            : 'You are currently on a free plan.'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
}
