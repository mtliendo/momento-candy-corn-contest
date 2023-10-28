/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCandyCornGuess = /* GraphQL */ `mutation CreateCandyCornGuess(
  $input: CreateCandyCornGuessInput!
  $condition: ModelCandyCornGuessConditionInput
) {
  createCandyCornGuess(input: $input, condition: $condition) {
    id
    name
    guess
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCandyCornGuessMutationVariables,
  APITypes.CreateCandyCornGuessMutation
>;
export const updateCandyCornGuess = /* GraphQL */ `mutation UpdateCandyCornGuess(
  $input: UpdateCandyCornGuessInput!
  $condition: ModelCandyCornGuessConditionInput
) {
  updateCandyCornGuess(input: $input, condition: $condition) {
    id
    name
    guess
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCandyCornGuessMutationVariables,
  APITypes.UpdateCandyCornGuessMutation
>;
export const deleteCandyCornGuess = /* GraphQL */ `mutation DeleteCandyCornGuess(
  $input: DeleteCandyCornGuessInput!
  $condition: ModelCandyCornGuessConditionInput
) {
  deleteCandyCornGuess(input: $input, condition: $condition) {
    id
    name
    guess
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCandyCornGuessMutationVariables,
  APITypes.DeleteCandyCornGuessMutation
>;
