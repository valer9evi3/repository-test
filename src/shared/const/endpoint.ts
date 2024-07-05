import { ApolloLink, DefaultOptions } from '@apollo/client';

export const BASE_URL = 'https://api.github.com';

export const Endpoint = {
    API: `${BASE_URL}/api`,
    QRAPHQL: `${BASE_URL}/graphql`,
};

export const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};

export const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => ({
        headers: {
            authorization: `Bearer `,
            ...headers,
        },
    }));
    return forward(operation);
});
