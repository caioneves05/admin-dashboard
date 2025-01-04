import { type ElementType, type ComponentPropsWithoutRef } from 'react';

export type SidebarItemProps = {
  title: string;
  icon?: ElementType<{ size?: number } & ComponentPropsWithoutRef<'svg'>>;
};
