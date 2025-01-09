import {
  Dropdown,
  NavbarItem,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react';
import { NotificationIcon } from 'components/atoms/NotificationIcon';

export const NotificationDropDown = () => (
  <Dropdown placement="bottom-end">
    <DropdownTrigger>
      <NavbarItem className="ml-3 rounded-lg bg-gray-200 p-3 transition-all dark:bg-zinc-700/50 dark:hover:bg-colors-primary-500 hover:bg-colors-primary-500 hover:text-white">
        <NotificationIcon />
      </NavbarItem>
    </DropdownTrigger>
    <DropdownMenu className="w-80" aria-label="Avatar Actions">
      <DropdownSection title="Notifications">
        <DropdownItem
          classNames={{
            base: 'py-2',
            title: 'text-base font-semibold',
          }}
          key="1"
          description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        >
          📣 Edit your information
        </DropdownItem>
        <DropdownItem
          classNames={{
            base: 'py-2',
            title: 'text-base font-semibold',
          }}
          key="2"
          description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        >
          🚀 Say goodbye to paper receipts!
        </DropdownItem>
      </DropdownSection>
    </DropdownMenu>
  </Dropdown>
);
