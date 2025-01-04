import { SearchInput } from 'components/atoms/SearchInput';

export const Header = () => (
  <div
    className={`
    flex h-20 min-w-full items-center justify-center border-b border-gray-600/30
  `}
  >
    <SearchInput />
  </div>
);
