'use client';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { type ButtonProps } from './types';

export const Button = ({
  children,
  iconFirst,
  className,
  iconSecond,
  size = 'default',
  variant = 'solid',
  color = 'primary',
  isLoading = false,
  iconAlign = 'left',
  isDisabled = false,
  isFullWidth = false,
  ...props
}: ButtonProps) => {
  const hasBackground = variant !== 'outline';
  const hasTextColor = variant !== 'solid';

  return (
    <button
      className={twMerge(
        clsx('relative transition-transform duration-200 ease-in-out', {
          'w-full': isFullWidth,
          'cursor-not-allowed opacity-50': isLoading || isDisabled,
          'active:scale-90 focus:scale-105 hover:scale-105':
            !isLoading && !isDisabled,
        }),
        className,
      )}
      type="button"
      disabled={isDisabled}
      {...props}
    >
      <div
        className={clsx('absolute size-full rounded-md', {
          'opacity-[16%]': variant === 'label',
          'bg-colors-shark-950': color === 'dark' && hasBackground,
          'bg-colors-cobalt-700': color === 'info' && hasBackground,
          'bg-colors-danger-500': color === 'danger' && hasBackground,
          'bg-colors-primary-400': color === 'primary' && hasBackground,
          'bg-colors-success-500': color === 'success' && hasBackground,
          'bg-colors-warning-500': color === 'warning' && hasBackground,

          'border-[1px] border-colors-dark-500':
            color === 'dark' && variant === 'outline',
          'border-[1px] border-colors-cobalt-700':
            color === 'info' && variant === 'outline',
          'border-[1px] border-colors-danger-500':
            color === 'danger' && variant === 'outline',
          'border-[1px] border-colors-dark-200':
            color === 'secondary' && variant === 'outline',
          'bg-colors-dark-200 dark:bg-colors-shark-950':
            color === 'secondary' && hasBackground,
          'border-[1px] border-colors-primary-400':
            color === 'primary' && variant === 'outline',
          'border-[1px] border-colors-success-500':
            color === 'success' && variant === 'outline',

          'border-[1px] border-colors-warning-500':
            color === 'warning' && variant === 'outline',
        })}
        aria-label="Button Background"
      />

      <div
        className={clsx(
          'flex h-full items-center justify-center gap-2 px-5 py-2.5',
          {
            'flex-row': iconAlign === 'left',
            'text-white': variant === 'solid',

            'flex-row-reverse': iconAlign === 'right',

            'text-colors-shark-950': color === 'dark' && hasTextColor,
            'text-colors-cobalt-700': color === 'info' && hasTextColor,
            'text-colors-danger-500': color === 'danger' && hasTextColor,
            'text-colors-primary-400': color === 'primary' && hasTextColor,
            'text-colors-success-500': color === 'success' && hasTextColor,
            'text-colors-warning-500': color === 'warning' && hasTextColor,
            'text-gray-900 dark:text-colors-dark-300':
              color === 'secondary' && hasTextColor,
          },
        )}
      >
        {iconFirst && <div className="z-10">{iconFirst}</div>}

        {!!children && !isLoading && (
          <span
            className={clsx(
              'z-10 font-medium leading-[1.125rem] tracking-[0.027rem]',
              {
                'text-sm': size === 'small',
                'text-lg': size === 'large',
                'text-[0.9375rem]': size === 'default',
              },
            )}
          >
            {children}
          </span>
        )}

        {iconSecond && <div className="z-10">{iconSecond}</div>}

        {isLoading && (
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 22 22"
            aria-label="Loading"
            className="animate-aurora"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              d="M14.4375 3.4375C15.8767 4.10872 17.0942 5.17707 17.9468 6.51682C18.7993 7.85658 19.2515 9.41198 19.25 11C19.25 13.188 18.3808 15.2865 16.8336 16.8336C15.2865 18.3808 13.188 19.25 11 19.25C8.81197 19.25 6.71355 18.3808 5.16637 16.8336C3.6192 15.2865 2.75 13.188 2.75 11C2.74851 9.41198 3.20066 7.85658 4.05323 6.51682C4.9058 5.17707 6.12331 4.10872 7.5625 3.4375"
            />
          </svg>
        )}
      </div>
    </button>
  );
};
