'use client';

import { ThemeProvider } from 'next-themes';

import { type PropsWithChildren } from 'react';

import { ApolloProvider } from 'apollo/provider';
import { ToastProvider } from './providers/ToastProvider';

export const Providers = ({ children }: PropsWithChildren) => (
  <ApolloProvider>
    <ThemeProvider attribute="class" enableSystem>
      <ToastProvider />
      {children}
    </ThemeProvider>
  </ApolloProvider>
);
