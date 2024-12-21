import { setContext } from '@apollo/client/link/context';
import { from, InMemoryCache, type ApolloClient } from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';

export const httpLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const registerApolloClient = (client: () => ApolloClient<unknown>) => {
  const apolloClient = client();

  return {
    apollo: apolloClient,
  };
};

export const authLink = setContext(async (_, { headers }) => ({
  headers: {
    ...headers,
  } as Headers,
}));

export const { apollo } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      link: from([authLink, httpLink]),
      cache: new NextSSRInMemoryCache(),
    }),
);
