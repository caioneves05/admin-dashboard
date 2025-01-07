import { type Route } from 'next';
import { type LinkProps } from 'next/link';
import { type ElementType, type ComponentPropsWithoutRef } from 'react';
import { type UrlObject } from 'url';

type NextRoutesProps = LinkProps<Route | UrlObject>;

export type SidebarItemProps = {
  title: string;
  icon?: ElementType<{ size?: number } & ComponentPropsWithoutRef<'svg'>>;
} & Omit<NextRoutesProps, 'ref'> &
  Omit<LinkProps, 'ref'>;
