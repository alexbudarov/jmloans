/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "mutation UpdateCustomer($input: CustomerInput!) {\n  updateCustomer(input: $input) {\n    id\n    name\n    telephone\n  }\n}":
    types.UpdateCustomerDocument,
  "query Customer($id: ID!) {\n  customer(id: $id) {\n    id\n    name\n    telephone\n  }\n}":
    types.CustomerDocument,
  "query CustomerList(\n  $filter: CustomerFilterInput\n  $sort: [CustomerOrderByInput]\n  $page: OffsetPageInput\n) {\n  customerList(\n    filter: $filter\n    sort: $sort\n    page: $page\n  ) {\n    content {\n      id\n      name\n      telephone\n    }\n    totalElements\n  }\n}":
    types.CustomerListDocument,
  "mutation DeleteCustomer($id: ID!) {\n  deleteCustomer(id: $id) \n}":
    types.DeleteCustomerDocument,
  "query LoanList_LoanList {\n  loanList {\n    amount\n    customer {\n      id\n      name\n    }\n    id\n  }\n}":
    types.LoanList_LoanListDocument,
  "\n  query userInfo {\n   userInfo {\n     id\n     fullName\n     avatar\n   }\n  }\n":
    types.UserInfoDocument,
  "\n query checkAuthenticated {\n   checkAuthenticated\n }\n":
    types.CheckAuthenticatedDocument,
  "\n  query userPermissions {\n   userPermissions\n  }\n":
    types.UserPermissionsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "mutation UpdateCustomer($input: CustomerInput!) {\n  updateCustomer(input: $input) {\n    id\n    name\n    telephone\n  }\n}",
): (typeof documents)["mutation UpdateCustomer($input: CustomerInput!) {\n  updateCustomer(input: $input) {\n    id\n    name\n    telephone\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "query Customer($id: ID!) {\n  customer(id: $id) {\n    id\n    name\n    telephone\n  }\n}",
): (typeof documents)["query Customer($id: ID!) {\n  customer(id: $id) {\n    id\n    name\n    telephone\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "query CustomerList(\n  $filter: CustomerFilterInput\n  $sort: [CustomerOrderByInput]\n  $page: OffsetPageInput\n) {\n  customerList(\n    filter: $filter\n    sort: $sort\n    page: $page\n  ) {\n    content {\n      id\n      name\n      telephone\n    }\n    totalElements\n  }\n}",
): (typeof documents)["query CustomerList(\n  $filter: CustomerFilterInput\n  $sort: [CustomerOrderByInput]\n  $page: OffsetPageInput\n) {\n  customerList(\n    filter: $filter\n    sort: $sort\n    page: $page\n  ) {\n    content {\n      id\n      name\n      telephone\n    }\n    totalElements\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "mutation DeleteCustomer($id: ID!) {\n  deleteCustomer(id: $id) \n}",
): (typeof documents)["mutation DeleteCustomer($id: ID!) {\n  deleteCustomer(id: $id) \n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "query LoanList_LoanList {\n  loanList {\n    amount\n    customer {\n      id\n      name\n    }\n    id\n  }\n}",
): (typeof documents)["query LoanList_LoanList {\n  loanList {\n    amount\n    customer {\n      id\n      name\n    }\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query userInfo {\n   userInfo {\n     id\n     fullName\n     avatar\n   }\n  }\n",
): (typeof documents)["\n  query userInfo {\n   userInfo {\n     id\n     fullName\n     avatar\n   }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n query checkAuthenticated {\n   checkAuthenticated\n }\n",
): (typeof documents)["\n query checkAuthenticated {\n   checkAuthenticated\n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query userPermissions {\n   userPermissions\n  }\n",
): (typeof documents)["\n  query userPermissions {\n   userPermissions\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
