'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { type SidebarItemProps } from './types';

export const SidebarItem = ({ href, title, icon: Icon }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={clsx(
        `
      flex w-full items-center justify-start gap-2 rounded-lg px-8 py-4
      transition-all
      dark:hover:bg-zinc-800/50
      hover:bg-zinc-200/50
    `,
        {
          'bg-colors-primary-500 text-white': isActive,
        },
      )}
      href={href}
      type="button"
    >
      {Icon && <Icon size={22} />}
      <h1
        className={`
        font-poppins text-gray-600
        dark:text-gray-300
      `}
      >
        {title}
      </h1>
    </Link>
  );
};
