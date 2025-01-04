import './globals.css';

import { type Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import { type ReactNode } from 'react';

import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Embess flow',
  description: 'Seu sistema de gerenciamento de processos na palma da mão.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html
    className={`
      ${inter.variable}
      ${poppins.variable}
    `}
    lang="pt-br"
  >
    <body>
      <link rel="icon" sizes="any" href="./logo.ico" />
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
