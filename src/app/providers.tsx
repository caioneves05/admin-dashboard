'use client';

import { ApolloProvider } from "@/apollo/provider";
import { ToastProvider } from "@/providers/ToastProvider";
import { PropsWithChildren } from "react";


export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ApolloProvider>
          <ToastProvider />
          {children}
        </ApolloProvider>
    );
}