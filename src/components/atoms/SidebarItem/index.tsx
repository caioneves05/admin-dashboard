import { type SidebarItemProps } from './types';

export const SidebarItem = ({ title, icon: Icon }: SidebarItemProps) => (
  <button
    className={`
      flex w-full items-center justify-start gap-2 rounded-lg px-8 py-4
      transition-all
      dark:hover:bg-zinc-800/50
      hover:bg-zinc-200/50
    `}
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
  </button>
);
