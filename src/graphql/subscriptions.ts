/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCandyCornGuess = /* GraphQL */ `subscription OnCreateCandyCornGuess(
  $filter: ModelSubscriptionCandyCornGuessFilterInput
) {
  onCreateCandyCornGuess(filter: $filter) {
    id
    name
    guess
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCandyCornGuessSubscriptionVariables,
  APITypes.OnCreateCandyCornGuessSubscription
>;
export const onUpdateCandyCornGuess = /* GraphQL */ `subscription OnUpdateCandyCornGuess(
  $filter: ModelSubscriptionCandyCornGuessFilterInput
) {
  onUpdateCandyCornGuess(filter: $filter) {
    id
    name
    guess
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCandyCornGuessSubscriptionVariables,
  APITypes.OnUpdateCandyCornGuessSubscription
>;
export const onDeleteCandyCornGuess = /* GraphQL */ `subscription OnDeleteCandyCornGuess(
  $filter: ModelSubscriptionCandyCornGuessFilterInput
) {
  onDeleteCandyCornGuess(filter: $filter) {
    id
    name
    guess
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCandyCornGuessSubscriptionVariables,
  APITypes.OnDeleteCandyCornGuessSubscription
>;
