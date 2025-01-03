import { EyeOffIcon } from 'components/atoms/EyeOffIcon';
import { type SidebarItemProps } from './types';

export const SidebarItem = ({ title }: SidebarItemProps) => (
  <div
    className={`
      flex w-full items-center justify-start gap-2 rounded-lg px-8 py-4
      transition-all
      hover:bg-zinc-800/50
    `}
  >
    <EyeOffIcon size={22} />
    <h1 className="font-poppins text-gray-300">{title}</h1>
  </div>
);
