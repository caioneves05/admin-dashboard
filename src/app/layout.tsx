import { type Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Simba Jurídico",
  description: "Seu sistema de gerenciamento de processos na palma da mão.",
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <link rel="icon" href="./logo.ico" sizes="any" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
