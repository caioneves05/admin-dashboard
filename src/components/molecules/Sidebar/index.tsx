import { SidebarItem } from 'components/atoms/SidebarItem';

const sidebarTabs = [
  'Dashboard',
  'Profile',
  'Settings',
  'Messages',
  'Notifications',
];

export const Sidebar = () => (
  <div
    className={`
      flex h-full justify-center border-r border-gray-500/30
      lg:w-96
      md:w-60
    `}
  >
    <div className="mt-10 flex w-[70%] flex-col items-center gap-3">
      {sidebarTabs.map(tab => (
        <SidebarItem key={tab} title={tab} />
      ))}
    </div>
  </div>
);
