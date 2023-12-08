'use client';

import { cn } from '@/src/lib/utils';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import FreeCounter from './FreeCounter';
import { tools } from '@/src/constants';

const montserrate = Montserrat({ weight: '600', subsets: ['latin'] });

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const routes = [
  ...tools,
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
    color: 'text-gray-300',
  },
];

export default function Sidebar({ apiLimitCount, isPro }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className='flex flex-col space-y-4 py-4 h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image fill alt='Logo' src='/logo.png' />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrate.className)}>
            Magus
          </h1>
        </Link>

        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 transition-all rounded-lg',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400'
              )}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
}
