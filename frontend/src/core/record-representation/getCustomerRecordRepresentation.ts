import { Customer } from "../../gql/graphql";

export function getCustomerRecordRepresentation(entityInstance?: Partial<Customer> | null): string {
  if (entityInstance == null) {
    return "";
  }
  if (entityInstance.name != null) {
    return String(entityInstance.name);
  }
  if (entityInstance.id != null) {
    return String(entityInstance.id);
  }
  return JSON.stringify(entityInstance);
}
