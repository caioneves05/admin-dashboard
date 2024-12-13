import { setContext } from '@apollo/client/link/context';
import { from, ApolloClient, InMemoryCache } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';

export const httpLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});


function registerApolloClient(client: () => ApolloClient<unknown>) {
  const apolloClient = client();

  return {
    apollo: apolloClient,
  };
}


export const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
    } as Headers,
  };
});


export const { apollo } = registerApolloClient(() =>
  new NextSSRApolloClient({
    link: from([authLink, httpLink]),
    cache: new NextSSRInMemoryCache(),
  }),
);