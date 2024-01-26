import { gql } from "@amplicode/gql";
import { ResultOf } from "@graphql-typed-document-node/core";
import { ListProps } from "ra-ui-materialui";
import { Datagrid, List, NumberField, TextField } from "react-admin";
import { SingleReferenceField } from "../../../core/components/reference/SingleReferenceField";
import { getCustomerRecordRepresentation } from "../../../core/record-representation/getCustomerRecordRepresentation";
import { EditButtonSecured } from "../../../core/security/components/EditButtonSecured";

const LOAN_LIST = gql(`query LoanList_LoanList {
  loanList {
    amount
    customer {
      id
      name
    }
    id
  }
}`);

export const LoanList = (props: Omit<ListProps, "children">) => {
  const queryOptions = {
    meta: {
      query: LOAN_LIST,
      resultDataPath: "",
    },
  };

  return (
    <List<ItemType> queryOptions={queryOptions} exporter={false} pagination={false} {...props}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField source="id" sortable={false} />

        <NumberField source="amount" sortable={false} />
        <SingleReferenceField
          source="customer"
          recordRepresentation={getCustomerRecordRepresentation}
          sortable={false}
        />
      </Datagrid>
    </List>
  );
};

/**
 * Type of data object received when executing the query
 */
type QueryResultType = ResultOf<typeof LOAN_LIST>;
/**
 * Type of the items list
 */
type ItemListType = QueryResultType["loanList"];
/**
 * Type of single item
 */
type ItemType = { id: string } & Exclude<Exclude<ItemListType, null | undefined>[0], undefined>;
