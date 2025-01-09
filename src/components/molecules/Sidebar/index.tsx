'use client';

import { EyeOffIcon } from 'components/atoms/EyeOffIcon';
import { SidebarItem } from 'components/atoms/SidebarItem';

const sidebarTabs = [
  { icon: EyeOffIcon, name: 'Dashboard' },
  { name: 'Profile', icon: EyeOffIcon },
  { name: 'Settings', icon: EyeOffIcon },
  { name: 'Messages', icon: EyeOffIcon },
  { icon: EyeOffIcon, name: 'Notifications' },
];

export const Sidebar = () => (
  <div
    className={`
      flex h-full justify-center border-r border-gray-600/30 font-poppins
      lg:w-96
      md:w-60
    `}
  >
    <div className="mt-10 flex w-[70%] flex-col items-center gap-3">
      <div className="flex w-full justify-start">
        <h1 className="ml-3 text-sm text-zinc-500">Main menu</h1>
      </div>
      {sidebarTabs.map(tab => (
        <SidebarItem
          key={tab.name}
          icon={tab.icon}
          title={tab.name}
          href="/dashboard/users"
        />
      ))}
    </div>
  </div>
);
