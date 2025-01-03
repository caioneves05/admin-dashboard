import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';

import { Sidebar } from 'components/molecules/Sidebar';
import { type BaseProps } from './types';

const BaseRef: ForwardRefRenderFunction<HTMLElement, BaseProps> = (
  { children, className, ...props },
  ref,
) => (
  <main ref={ref} className={twMerge('w-full', className)} {...props}>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div
        className={`
          relative flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden
          transition-all
          dark:bg-colors-dark-950
        `}
      >
        <div className="min-h-full">
          <div
            className={`
              mx-auto min-h-full max-w-screen-2xl px-4 pb-4 pt-20
              2xl:p-10
              md:p-6
              sm:p-4
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  </main>
);

export const Base = forwardRef(BaseRef);
