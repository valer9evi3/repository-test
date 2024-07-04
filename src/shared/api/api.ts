import * as Apollo from '@apollo/client';
import { apolloClient } from '../utils/apolloClient';

export function getApiWithParams<
    T = any,
    Q extends Apollo.OperationVariables = {},
>(query: Apollo.DocumentNode, variables: Q) {
    return apolloClient
        .query<T>({
            query: query,
            variables: variables,
        })
        .then((res) => {
            return res;
        });
}
