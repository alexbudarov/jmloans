import { gql } from "@amplicode/gql";
import { ResultOf } from "@graphql-typed-document-node/core";
import { ListProps } from "ra-ui-materialui";
import { Datagrid, List, TextField, TextInput } from "react-admin";
import { DeleteButtonSecured } from "../../../core/security/components/DeleteButtonSecured";
import { EditButtonSecured } from "../../../core/security/components/EditButtonSecured";

const CUSTOMER_LIST = gql(`query CustomerList(
  $filter: CustomerFilterInput
  $sort: [CustomerOrderByInput]
  $page: OffsetPageInput
) {
  customerList(
    filter: $filter
    sort: $sort
    page: $page
  ) {
    content {
      id
      name
      telephone
    }
    totalElements
  }
}`);

const DELETE_CUSTOMER = gql(`mutation DeleteCustomer($id: ID!) {
  deleteCustomer(id: $id) 
}`);

export const CustomerList = (props: Omit<ListProps, "children">) => {
  const queryOptions = {
    meta: {
      query: CUSTOMER_LIST,
      resultDataPath: "content",
      paginationQueryParam: "page",
    },
  };

  const filters = [<TextInput source="name" />];

  return (
    <List<ItemType> queryOptions={queryOptions} exporter={false} filters={filters} {...props}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField source="id" sortable={false} />

        <TextField source="name" />
        <TextField source="telephone" sortable={false} />

        <EditButtonSecured />
        <DeleteButtonSecured
          mutationMode="pessimistic"
          mutationOptions={{ meta: { mutation: DELETE_CUSTOMER } }}
        />
      </Datagrid>
    </List>
  );
};

/**
 * Type of data object received when executing the query
 */
type QueryResultType = ResultOf<typeof CUSTOMER_LIST>;
/**
 * Type of the items list
 */
type ItemListType = QueryResultType["customerList"];
/**
 * Type of single item
 */
type ItemType = { id: string } & Exclude<
  Exclude<ItemListType, null | undefined>["content"],
  undefined
>;
