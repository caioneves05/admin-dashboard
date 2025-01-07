import { SearchIcon } from 'components/atoms/SearchIcon';

export const SearchInput = () => (
  <div className="flex h-[70%] w-[95%] items-center rounded-xl bg-gray-300 px-3 dark:bg-zinc-700/50">
    <div className="items-center justify-center text-gray-300 dark:text-zinc-400">
      <SearchIcon />
    </div>

    <input
      type="text"
      placeholder="Pesquisar"
      className="ml-3 w-full bg-transparent outline-none"
    />
  </div>
);
