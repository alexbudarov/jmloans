import { Loan } from "../../gql/graphql";

export function getLoanRecordRepresentation(entityInstance?: Partial<Loan> | null): string {
  if (entityInstance == null) {
    return "";
  }
  if (entityInstance.id != null) {
    return String(entityInstance.id);
  }
  return JSON.stringify(entityInstance);
}
