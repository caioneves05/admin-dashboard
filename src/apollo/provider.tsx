import { type PropsWithChildren } from 'react';
import {
  from,
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloProviderWrapper,
} from '@apollo/client';
import { authLink, httpLink } from './client';

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
  });

  return (
    <ApolloProviderWrapper client={client}>
      {children}
    </ApolloProviderWrapper>
  );
};