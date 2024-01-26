import { gql } from "@amplicode/gql";
import { ResultOf } from "@graphql-typed-document-node/core";
import { useCallback } from "react";
import {
  Edit,
  EditProps,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
  useUpdate,
} from "react-admin";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { checkServerValidationErrors } from "../../../core/error/checkServerValidationError";

const CUSTOMER = gql(`query Customer($id: ID!) {
  customer(id: $id) {
    id
    name
    telephone
  }
}`);
const UPDATE_CUSTOMER = gql(`mutation UpdateCustomer($input: CustomerInput!) {
  updateCustomer(input: $input) {
    id
    name
    telephone
  }
}`);

type AdvancedEditProps = Omit<EditProps, "id" | "queryOptions" | "mutationOptions"> & {
  id?: string;
};

export const CustomerEdit = (props: AdvancedEditProps) => {
  const queryOptions = {
    meta: {
      query: CUSTOMER,
      resultDataPath: null,
    },
  };

  const redirect = useRedirect();
  const notify = useNotify();
  const [update] = useUpdate();

  const save: SubmitHandler<FieldValues> = useCallback(
    async (data: FieldValues) => {
      try {
        const params = { data, meta: { mutation: UPDATE_CUSTOMER } };
        const options = { returnPromise: true };

        await update("Customer", params, options);

        notify("ra.notification.updated", { messageArgs: { smart_count: 1 } });
        redirect("list", "Customer");
      } catch (response: any) {
        console.log("update failed with error", response);
        return checkServerValidationErrors(response, notify);
      }
    },
    [update, notify, redirect]
  );

  return (
    <Edit<ItemType> mutationMode="pessimistic" queryOptions={queryOptions} {...props}>
      <SimpleForm onSubmit={save}>
        <TextInput source="name" />
        <TextInput source="telephone" />
      </SimpleForm>
    </Edit>
  );
};

/**
 * Type of data object received when executing the query
 */
type QueryResultType = ResultOf<typeof CUSTOMER>;
/**
 * Type of the item loaded by executing the query
 */
type ItemType = { id: string } & Exclude<QueryResultType["customer"], undefined>;
