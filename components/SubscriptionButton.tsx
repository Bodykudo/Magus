'use client';

import { Zap } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface Props {
  isPro: boolean;
}

export default function SubscriptionButton({ isPro = false }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      onClick={onClick}
      disabled={isLoading}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Zap className='w-4 h-4 ml-2 fill-white' />}
    </Button>
  );
}
