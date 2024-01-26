import { DevSupport } from "@amplicode/ide-toolbox";
import { AdminContext, AdminUI, Loading } from "react-admin";
import { useAuthProvider } from "../authProvider/useAuthProvider";
import { getCustomerRecordRepresentation } from "../core/record-representation/getCustomerRecordRepresentation";
import { getLoanRecordRepresentation } from "../core/record-representation/getLoanRecordRepresentation";
import { ResourceSecured } from "../core/security/components/ResourceSecured";
import { dataProvider } from "../dataProvider/graphqlDataProvider";
import { ComponentPreviews, useInitial } from "../dev";
import { i18nProvider } from "../i18nProvider";
import { AdminLayout } from "./AdminLayout";
import { CustomerCreate } from "./screens/customer/CustomerCreate";
import { CustomerEdit } from "./screens/customer/CustomerEdit";
import { CustomerList } from "./screens/customer/CustomerList";
import { LoanList } from "./screens/loan/LoanList";
import { activeAppTheme } from "./themes/appThemeConfig";
import { getStoredThemeMode } from "./themes/getStoredThemeMode";

const themeMode = getStoredThemeMode();

export const App = () => {
  const { authProvider, loading } = useAuthProvider();

  if (loading) {
    return (
      <Loading
        loadingPrimary="Loading"
        loadingSecondary="The page is loading, just a moment please"
      />
    );
  }

  return (
    <AdminContext
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      lightTheme={activeAppTheme.light}
      darkTheme={activeAppTheme.dark}
      defaultTheme={themeMode}
    >
      <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
        <AdminUI layout={AdminLayout} requireAuth={true}>
          <ResourceSecured
            name="Customer"
            list={CustomerList}
            recordRepresentation={getCustomerRecordRepresentation}
            create={CustomerCreate}
            edit={CustomerEdit}
          />
          <ResourceSecured
            name="Loan"
            list={LoanList}
            recordRepresentation={getLoanRecordRepresentation}
          />
        </AdminUI>
      </DevSupport>
    </AdminContext>
  );
};
