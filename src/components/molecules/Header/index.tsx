import { NotificationIcon } from 'components/atoms/NotificationIcon';
import { SearchInput } from 'components/atoms/SearchInput';

export const Header = () => (
  <div
    className={`
    flex h-20 min-w-full items-center justify-center border-b border-gray-600/30 text-gray-500
  `}
  >
    <SearchInput />

    <button
      type="button"
      className="ml-3 rounded-lg bg-gray-200 p-3 transition-all dark:bg-zinc-700/50 dark:hover:bg-colors-primary-500 hover:bg-colors-primary-500 hover:text-white"
    >
      <NotificationIcon />
    </button>
  </div>
);
