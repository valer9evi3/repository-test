import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import { Endpoint, authLink, defaultOptions } from '../const/endpoint';

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, new HttpLink({ uri: Endpoint.QRAPHQL })]),
    defaultOptions: defaultOptions,
});
