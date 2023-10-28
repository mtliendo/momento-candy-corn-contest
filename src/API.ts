/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCandyCornGuessInput = {
  id?: string | null,
  name: string,
  guess: number,
};

export type ModelCandyCornGuessConditionInput = {
  name?: ModelStringInput | null,
  guess?: ModelIntInput | null,
  and?: Array< ModelCandyCornGuessConditionInput | null > | null,
  or?: Array< ModelCandyCornGuessConditionInput | null > | null,
  not?: ModelCandyCornGuessConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type CandyCornGuess = {
  __typename: "CandyCornGuess",
  id: string,
  name: string,
  guess: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCandyCornGuessInput = {
  id: string,
  name?: string | null,
  guess?: number | null,
};

export type DeleteCandyCornGuessInput = {
  id: string,
};

export type ModelCandyCornGuessFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  guess?: ModelIntInput | null,
  and?: Array< ModelCandyCornGuessFilterInput | null > | null,
  or?: Array< ModelCandyCornGuessFilterInput | null > | null,
  not?: ModelCandyCornGuessFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCandyCornGuessConnection = {
  __typename: "ModelCandyCornGuessConnection",
  items:  Array<CandyCornGuess | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCandyCornGuessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  guess?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCandyCornGuessFilterInput | null > | null,
  or?: Array< ModelSubscriptionCandyCornGuessFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateCandyCornGuessMutationVariables = {
  input: CreateCandyCornGuessInput,
  condition?: ModelCandyCornGuessConditionInput | null,
};

export type CreateCandyCornGuessMutation = {
  createCandyCornGuess?:  {
    __typename: "CandyCornGuess",
    id: string,
    name: string,
    guess: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCandyCornGuessMutationVariables = {
  input: UpdateCandyCornGuessInput,
  condition?: ModelCandyCornGuessConditionInput | null,
};

export type UpdateCandyCornGuessMutation = {
  updateCandyCornGuess?:  {
    __typename: "CandyCornGuess",
    id: string,
    name: string,
    guess: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCandyCornGuessMutationVariables = {
  input: DeleteCandyCornGuessInput,
  condition?: ModelCandyCornGuessConditionInput | null,
};

export type DeleteCandyCornGuessMutation = {
  deleteCandyCornGuess?:  {
    __typename: "CandyCornGuess",
    id: string,
    name: string,
    guess: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCandyCornGuessQueryVariables = {
  id: string,
};

export type GetCandyCornGuessQuery = {
  getCandyCornGuess?:  {
    __typename: "CandyCornGuess",
    id: string,
    name: string,
    guess: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCandyCornGuessesQueryVariables = {
  filter?: ModelCandyCornGuessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCandyCornGuessesQuery = {
  listCandyCornGuesses?:  {
    __typename: "ModelCandyCornGuessConnection",
    items:  Array< {
      __typename: "CandyCornGuess",
      id: string,
      name: string,
      guess: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCandyCornGuessSubscriptionVariables = {
  filter?: ModelSubscriptionCandyCornGuessFilterInput | null,
};

export type OnCreateCandyCornGuessSubscription = {
  onCreateCandyCornGuess?:  {
    __typename: "CandyCornGuess",
    id: string,
    name: string,
    guess: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCandyCornGuessSubscriptionVariables = {
  filter?: ModelSubscriptionCandyCornGuessFilterInput | null,
};

export type OnUpdateCandyCornGuessSubscription = {
  onUpdateCandyCornGuess?:  {
    __typename: "CandyCornGuess",
    id: string,
    name: string,
    guess: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCandyCornGuessSubscriptionVariables = {
  filter?: ModelSubscriptionCandyCornGuessFilterInput | null,
};

export type OnDeleteCandyCornGuessSubscription = {
  onDeleteCandyCornGuess?:  {
    __typename: "CandyCornGuess",
    id: string,
    name: string,
    guess: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
