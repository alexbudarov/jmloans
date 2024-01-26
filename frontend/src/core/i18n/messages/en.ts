import { TranslationMessages } from "ra-core";
import englishMessages from "ra-language-english";
import { mergeMessages } from "./mergeMessages";

const messages: TranslationMessages = {
  ...englishMessages,

  resources: {
    Loan: {
      name: "Loan |||| Loans",

      fields: {
        amount: "Amount",

        customer: {
          id: "Customer"
        }
      }
    },

    Customer: {
      name: "Customer |||| Customers",

      fields: {
        name: "Name",
        telephone: "Telephone"
      }
    }
  },

  amplicode: {
    not_set: "Not set"
  }
};

export const en = mergeMessages(
  messages,
  [] // place addon messages here
);
