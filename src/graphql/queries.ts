/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCandyCornGuess = /* GraphQL */ `query GetCandyCornGuess($id: ID!) {
  getCandyCornGuess(id: $id) {
    id
    name
    guess
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCandyCornGuessQueryVariables,
  APITypes.GetCandyCornGuessQuery
>;
export const listCandyCornGuesses = /* GraphQL */ `query ListCandyCornGuesses(
  $filter: ModelCandyCornGuessFilterInput
  $limit: Int
  $nextToken: String
) {
  listCandyCornGuesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      guess
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCandyCornGuessesQueryVariables,
  APITypes.ListCandyCornGuessesQuery
>;
