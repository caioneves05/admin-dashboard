'use client';

import { useTheme } from 'next-themes';

import { twMerge } from 'tailwind-merge';
import * as Switch from '@radix-ui/react-switch';

import { SunIcon } from 'components/atoms/SunIcon';
import { MoonIcon } from 'components/atoms/MoonIcon';

import { type DarkModeSwitcherProps } from './types';

export const DarkModeSwitcher = ({
  className,
  ...props
}: DarkModeSwitcherProps) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? (systemTheme ?? 'system') : theme;

  return (
    <Switch.Root
      onCheckedChange={() =>
        setTheme(currentTheme === 'light' ? 'dark' : 'light')
      }
      className={twMerge(
        `
          relative m-0 block h-[1.875rem] w-14 rounded-full
          bg-colors-porcelain-50 outline-colors-primary-400 transition-all
          dark:bg-colors-shark-950
        `,
        className,
      )}
      aria-label="switch"
      checked={currentTheme === 'dark'}
      aria-checked={currentTheme === 'dark'}
      {...props}
    >
      <Switch.Thumb>
        <div
          className={`
            absolute left-[3px] top-1/2 flex size-6 -translate-y-1/2
            translate-x-0 items-center justify-center rounded-full
            bg-colors-white-lilac-50 transition-all duration-75 ease-linear
            dark:!right-[3px] dark:!translate-x-full dark:bg-colors-smoke-950
            dark:shadow-none
          `}
        >
          <SunIcon
            className={`
              text-colors-rock-blue-500 transition-all
              dark:hidden
            `}
            size={16}
          />

          <MoonIcon
            className={`
              hidden text-colors-rock-blue-500 transition-all
              dark:inline-block
            `}
            size={16}
          />
        </div>
      </Switch.Thumb>
    </Switch.Root>
  );
};
